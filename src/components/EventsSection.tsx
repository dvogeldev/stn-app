import React from 'react';
import { EventCard } from './EventCard'; // Import the EventCard component
import { EventsCTA } from './EventsCTA'; // Import the EventsCTA component

export const EventsSection = () => {
  // Sample data for events
  const featuredEvent = {
    title: 'Christmas Divine Liturgy',
    description: 'Join us for the celebration of Christ\'s Nativity with special hymns and traditions.',
    time: '10:00 AM',
    location: 'Main Sanctuary',
    audience: 'All Welcome',
    category: 'Liturgical',
    daysAway: 160, // Example: December 25, 2024 is ~160 days from July 17, 2025
  };

  const upcomingEvents = [
    {
      title: 'Orthodox Study Group',
      description: 'Weekly discussion on Orthodox theology and spiritual practices.',
      time: '7:00 PM - December 28, 2024',
      location: 'Parish Hall',
      audience: 'Adults',
      category: 'Education',
      daysAway: 163, // Example: December 28, 2024 is ~163 days from July 17, 2025
    },
    {
      title: 'New Year Blessing Service',
      description: 'Begin the new year with prayers and blessings for the year ahead.',
      time: '11:00 AM - January 1, 2025',
      location: 'Main Sanctuary',
      audience: 'All Welcome',
      category: 'Special Service',
      daysAway: 167, // Example: January 1, 2025 is ~167 days from July 17, 2025
    },
    {
      title: 'Youth Group Meeting',
      description: 'Fellowship, games, and spiritual discussion for teens and young adults.',
      time: '6:00 PM - January 5, 2025',
      location: 'Youth Room',
      audience: 'Ages 13-25',
      category: 'Youth',
      daysAway: 171, // Example: January 5, 2025 is ~171 days from July 17, 2025
    },
    {
      title: 'Parish Council Meeting',
      description: 'Monthly meeting to discuss parish business and upcoming initiatives.',
      time: '7:00 PM - January 8, 2025',
      location: 'Conference Room',
      audience: 'Council Members',
      category: 'Administrative',
      daysAway: 174, // Example: January 8, 2025 is ~174 days from July 17, 2025
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title and Description */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 rounded-lg">
          Upcoming Events
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto mb-12 rounded-lg">
          Join us for worship, fellowship, and spiritual growth throughout the liturgical year.
        </p>

        {/* Events Grid Container */}
        {/* This grid will now correctly place the featured event and the stack of smaller events side-by-side on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Event - Will take one column */}
          <EventCard {...featuredEvent} variant="featured" />

          {/* Smaller Event Cards - Will take the other column, stacking its children */}
          <div className="grid grid-cols-1 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} variant="small" />
            ))}
          </div>
        </div>

        {/* Events CTA Component */}
        <div className="mt-16">
          <EventsCTA />
        </div>
      </div>
    </section>
  );
};

