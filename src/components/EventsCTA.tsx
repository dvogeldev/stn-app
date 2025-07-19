import React from 'react';
import { CalendarDays, BellRing } from 'lucide-react'; // Importing icons

export const EventsCTA = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border border-border font-sans rounded-xl shadow-lg mx-auto max-w-7xl mt-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-card-foreground mb-4 rounded-lg">
          Never Miss an Event
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto mb-12 rounded-lg">
          Stay connected with our full calendar of liturgical services, educational programs,
          community events, and special celebrations throughout the year.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/calendar" // Link to the full calendar page
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 md:py-4 md:px-10 text-lg transition-colors duration-300 shadow-md"
          >
            <CalendarDays className="h-5 w-5 mr-3" />
            View Full Calendar
          </a>
          <button
            onClick={() => alert('Subscribe to Events functionality not yet implemented!')} // Replace with actual subscription logic
            className="inline-flex items-center justify-center px-8 py-3 border border-secondary text-base font-medium rounded-md text-secondary bg-background hover:bg-secondary/10 md:py-4 md:px-10 text-lg transition-colors duration-300 shadow-md"
          >
            <BellRing className="h-5 w-5 mr-3" />
            Subscribe to Events
          </button>
        </div>
      </div>
    </section>
  );
};

