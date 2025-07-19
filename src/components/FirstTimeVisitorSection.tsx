import React from 'react';
import { FirstTimeVisitorInfo } from './FirstTimeVisitorInfo'; // Import the info component

export const FirstTimeVisitorSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* First Time Visitor Info - Left Column */}
        <div className="flex"> {/* Use flex to make the child fill available height */}
          <FirstTimeVisitorInfo />
        </div>

        {/* Image Section - Right Column */}
        <div className="relative bg-muted border border-border rounded-xl shadow-lg overflow-hidden flex items-end justify-start h-[400px] md:h-auto">
          <img
            src="/images/image_ad39dc.jpg" // Path to your uploaded image in the public directory
            alt="Family entering church"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = "https://placehold.co/600x400/E0E0E0/333333?text=Welcome+Family"; }}
          />
          {/* Overlay with text */}
          <div className="absolute inset-0 bg-orthodox-black/40 flex flex-col justify-end p-6 text-white">
            <h3 className="text-3xl font-bold mb-2 rounded-lg">You Are Welcome Here</h3>
            <p className="text-lg rounded-lg">
              Our community embraces all who seek God's grace and truth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

