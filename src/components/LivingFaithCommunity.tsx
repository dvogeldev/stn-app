import React from 'react';

export const LivingFaithCommunity = () => { // Changed to named export
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://placehold.co/600x400/E0E0E0/333333?text=Church+Community" // Placeholder image URL
            alt="Church Community"
            className="rounded-xl shadow-lg max-w-full h-auto"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/E0E0E0/333333?text=Image+Not+Found"; }}
          />
        </div>

        {/* Content Section */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 rounded-lg">
            Living Faith Community
          </h2>
          <p className="mt-4 text-lg text-gray-600 mb-8 rounded-lg">
            Our parish is more than a place of worship—it's a family
            where lasting friendships are formed, children grow in
            faith, and everyone finds their place in God's love.
          </p>

          {/* Statistical Cards Container */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6">
            {/* Parish Families Card */}
            <div className="flex flex-col items-center sm:items-start p-6 bg-green-50 rounded-xl shadow-md">
              <span className="text-3xl font-bold text-green-700 mb-2 rounded-lg">200+</span>
              <p className="text-gray-700 rounded-lg">Parish Families</p>
            </div>

            {/* Years Serving Card */}
            <div className="flex flex-col items-center sm:items-start p-6 bg-red-50 rounded-xl shadow-md">
              <span className="text-3xl font-bold text-red-700 mb-2 rounded-lg">100+</span>
              <p className="text-gray-700 rounded-lg">Years Serving</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

