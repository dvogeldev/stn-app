import React from 'react';
import { PageLayout } from '@/components/PageLayout';
import { ContactInfo } from '@/components/ContactInfo';
import { LocationDirections } from '@/components/LocationDirections';
import { fetchSiteSettings } from '@/lib/wordpress';

export default async function VisitUsPage() {
  const siteSettings = await fetchSiteSettings();
  
  return (
    <PageLayout>
      <main className="py-16 px-4 sm:px-6 lg:px-8 bg-background font-sans">
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Title and Description */}
          <h1 className="text-5xl font-extrabold text-foreground mb-6 rounded-lg">
            Visit Us
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto mb-12 rounded-lg">
            We welcome all visitors and seekers. Come as you are - our doors and hearts are open.
          </p>
        </div>

        {/* Integrate ContactInfo and LocationDirections */}
        <div className="max-w-7xl mx-auto">
          <ContactInfo siteSettings={siteSettings} />
          <LocationDirections siteSettings={siteSettings} />
        </div>
      </main>
    </PageLayout>
  );
}