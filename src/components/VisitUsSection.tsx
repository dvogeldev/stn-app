import React from 'react';
import { ContactInfo } from './ContactInfo'; // Import the ContactInfo component
import { LocationDirections } from './LocationDirections'; // Import the LocationDirections component

export const VisitUsSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title and Description */}
        <h2 className="text-5xl font-extrabold text-foreground mb-6 rounded-lg">
          Visit Us
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto mb-12 rounded-lg">
          We welcome all visitors and seekers. Come as you are - our doors and hearts are open.
        </p>
      </div>

      {/* Integrate ContactInfo and LocationDirections */}
      {/* Note: The py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 font-sans classes are already on the parent section above.
          Removing them from the child components to avoid double padding/background. */}
      <div className="max-w-7xl mx-auto">
        <ContactInfo />
        <LocationDirections />
      </div>
    </section>
  );
};

