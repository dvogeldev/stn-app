import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PageLayout } from '@/components/PageLayout';
import { Users, Calendar, Heart, FileText, BookOpen, Camera } from 'lucide-react';

export default function OurCommunityPage() {
  const communityPages = [
    {
      title: 'Ministries',
      description: 'Discover the various ministries and ways to serve within our parish community.',
      href: '/our-community/ministries',
      icon: Heart,
    },
    {
      title: 'Events',
      description: 'Stay updated on upcoming parish events, celebrations, and community gatherings.',
      href: '/our-community/events',
      icon: Calendar,
    },
    {
      title: 'Outreach',
      description: 'Learn about our community outreach programs and charitable initiatives.',
      href: '/our-community/outreach',
      icon: Users,
    },
    {
      title: 'Bulletins',
      description: 'Access current and past parish bulletins with announcements and updates.',
      href: '/our-community/bulletins',
      icon: FileText,
    },
    {
      title: 'Parishioner Resources',
      description: 'Find helpful resources, forms, and information for parish members.',
      href: '/our-community/parishioner-resources',
      icon: BookOpen,
    },
    {
      title: 'Photo Gallery',
      description: 'Browse photos from parish events, celebrations, and community life.',
      href: '/our-community/photo-gallery',
      icon: Camera,
    },
  ];

  return (
    <PageLayout>
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-background font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-foreground mb-6">
            Our Community
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect with our vibrant parish family through ministries, events, and community life at St. Nicholas Orthodox Church.
          </p>
        </div>

        {/* Community Pages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityPages.map((page) => {
            const IconComponent = page.icon;
            return (
              <Link
                key={page.href}
                href={page.href}
                className="group block bg-card rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-8">
                  {/* Placeholder Image Area */}
                  <div className="w-full h-48 bg-muted rounded-lg mb-6 flex items-center justify-center">
                    <IconComponent className="h-16 w-16 text-primary opacity-60" />
                  </div>
                  
                  {/* Content */}
                  <h2 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                    {page.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {page.description}
                  </p>
                  
                  {/* Button */}
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </Button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
    </PageLayout>
  );
}