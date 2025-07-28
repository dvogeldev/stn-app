import React from 'react';
import { PageLayout } from '@/components/PageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photo Gallery - St. Nicholas Orthodox Church',
  description: 'View photos from parish life and events at St. Nicholas Orthodox Church in Grand Rapids, Michigan.',
  openGraph: {
    title: 'Photo Gallery - St. Nicholas Orthodox Church',
    description: 'View photos from parish life and events at St. Nicholas Orthodox Church in Grand Rapids, Michigan.',
    type: 'website',
  },
};

export default function PhotoGalleryPage() {
  return (
    <PageLayout>
      <main className="py-16 px-4 sm:px-6 lg:px-8 bg-background font-sans">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-foreground mb-6">
            Photo Gallery
          </h1>
          <h2 className="text-3xl font-semibold text-muted-foreground">
            Coming soon!
          </h2>
        </div>
      </main>
    </PageLayout>
  );
}