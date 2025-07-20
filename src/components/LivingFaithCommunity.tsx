import React from 'react';
import Image from 'next/image';

export const LivingFaithCommunity = () => { // Changed to named export
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/parish_family_cropped.webp"
            alt="Church Community"
            width={600}
            height={400}
            className="rounded-xl shadow-lg border border-border"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content Section */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-foreground mb-6 rounded-lg">
            Living Faith Community
          </h2>
          <p className="mt-4 text-lg text-muted-foreground mb-8 rounded-lg">
            Our parish is more than a place of worship—it&apos;s a family
            where lasting friendships are formed, children grow in
            faith, and everyone finds their place in God&apos;s love.
          </p>

          {/* Statistical Cards Container */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6">
            {/* Parish Families Card */}
            <div className="flex flex-col items-center sm:items-start p-6 bg-card border border-border rounded-xl shadow-md">
              <span className="text-3xl font-bold text-primary mb-2 rounded-lg">200+</span>
              <p className="text-card-foreground rounded-lg">Parish Families</p>
            </div>

            {/* Years Serving Card */}
            <div className="flex flex-col items-center sm:items-start p-6 bg-card border border-border rounded-xl shadow-md">
              <span className="text-3xl font-bold text-secondary mb-2 rounded-lg">100+</span>
              <p className="text-card-foreground rounded-lg">Years Serving</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

