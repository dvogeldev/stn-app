import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PageLayout } from '@/components/PageLayout';
import { Book, Cross, Church, FileText, Mic } from 'lucide-react';

export default function OurFaithPage() {
  const faithPages = [
    {
      title: 'Beliefs',
      description: 'Explore the fundamental beliefs and doctrines of Orthodox Christianity.',
      href: '/our-faith/beliefs',
      icon: Cross,
    },
    {
      title: 'Liturgical Life',
      description: 'Discover the rich liturgical traditions and worship practices of our faith.',
      href: '/our-faith/liturgical-life',
      icon: Church,
    },
    {
      title: 'Traditions',
      description: 'Learn about the sacred traditions that have been passed down through generations.',
      href: '/our-faith/traditions',
      icon: Book,
    },
    {
      title: 'Glossary',
      description: 'Understanding Orthodox terminology and concepts made simple.',
      href: '/our-faith/glossary',
      icon: FileText,
    },
    {
      title: 'Homilies',
      description: 'Listen to inspiring messages and teachings from our clergy.',
      href: '/our-faith/homilies',
      icon: Mic,
    },
  ];

  return (
    <PageLayout>
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-background font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-foreground mb-6">
            Our Faith
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the rich traditions, beliefs, and practices of Orthodox Christianity as lived and celebrated at St. Nicholas Orthodox Church.
          </p>
        </div>

        {/* Faith Pages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faithPages.map((page) => {
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