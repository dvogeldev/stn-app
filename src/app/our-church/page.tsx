import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PageLayout } from '@/components/PageLayout';
import { MapPin, Users, Building, DollarSign, Network, History } from 'lucide-react';

export default function OurChurchPage() {
  const churchPages = [
    {
      title: 'Visit Us',
      description: 'Find our location, contact information, and directions to join us for worship.',
      href: '/our-church/visit-us',
      icon: MapPin,
    },
    {
      title: 'Parish History',
      description: 'Discover the rich history and heritage of St. Nicholas Orthodox Church.',
      href: '/our-church/parish-history',
      icon: History,
    },
    {
      title: 'Clergy & Staff',
      description: 'Meet our dedicated clergy and staff who serve our parish community.',
      href: '/our-church/clergy-staff',
      icon: Users,
    },
    {
      title: 'Architecture',
      description: 'Explore the beautiful architecture and sacred spaces of our church.',
      href: '/our-church/architecture',
      icon: Building,
    },
    {
      title: 'Donations',
      description: 'Learn about ways to support our parish through donations and stewardship.',
      href: '/our-church/donations',
      icon: DollarSign,
    },
    {
      title: 'How Our Parish Fits In',
      description: 'Understand our place within the broader Orthodox Church and community.',
      href: '/our-church/how-our-parish-fits-in',
      icon: Network,
    },
  ];

  return (
    <PageLayout>
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-background font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-foreground mb-6">
            Our Church
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn more about St. Nicholas Orthodox Church, our community, and how to connect with us.
          </p>
        </div>

        {/* Church Pages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {churchPages.map((page) => {
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