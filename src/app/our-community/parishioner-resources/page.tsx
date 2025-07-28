import React from 'react';
import { PageLayout } from '@/components/PageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Parishioner Resources - St. Nicholas Orthodox Church',
  description: 'Access resources and materials for parishioners of St. Nicholas Orthodox Church in Grand Rapids, Michigan.',
  openGraph: {
    title: 'Parishioner Resources - St. Nicholas Orthodox Church',
    description: 'Access resources and materials for parishioners of St. Nicholas Orthodox Church in Grand Rapids, Michigan.',
    type: 'website',
  },
};

export default function ParishionerResourcesPage() {
  return (
    <PageLayout>
      <main className="py-16 px-4 sm:px-6 lg:px-8 bg-background font-sans">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-foreground mb-6">
            Parishioner Resources
          </h1>
          <h2 className="text-3xl font-semibold text-muted-foreground">
            Coming soon!
          </h2>
        </div>
      </main>
    </PageLayout>
  );
}