'use client';
import React from 'react';
// Importing icons from Lucide React. You might need to install it: pnpm add lucide-react
import { HeartHandshake, CalendarDays, BookOpen, Coffee, BellRing } from 'lucide-react';

export const WorshipScheduleSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title and Description */}
        <h2 className="text-4xl font-extrabold text-foreground mb-4 rounded-lg">
          Worship Schedule
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto mb-12 rounded-lg">
          Join us for our regular services and special celebrations throughout the liturgical year.
        </p>

        {/* Regular Services Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Divine Liturgy Card */}
          <div className="flex items-start p-6 bg-card border border-border rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mr-4">
              <HeartHandshake className="h-6 w-6" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-card-foreground mb-1 rounded-lg">Divine Liturgy</h3>
              <p className="text-primary font-medium mb-2 rounded-lg">Sundays at 10:00 AM</p>
              <p className="text-muted-foreground rounded-lg">
                Our principal weekly worship service, celebrating the Eucharist.
              </p>
            </div>
          </div>

          {/* Vespers Card */}
          <div className="flex items-start p-6 bg-card border border-border rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-secondary/10 text-secondary mr-4">
              <CalendarDays className="h-6 w-6" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-card-foreground mb-1 rounded-lg">Vespers</h3>
              <p className="text-secondary font-medium mb-2 rounded-lg">Saturdays at 6:00 PM</p>
              <p className="text-muted-foreground rounded-lg">
                Evening prayer service preparing for the Lord&apos;s Day.
              </p>
            </div>
          </div>

          {/* Orthros Card */}
          <div className="flex items-start p-6 bg-card border border-border rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-accent/10 text-accent mr-4">
              <BookOpen className="h-6 w-6" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-card-foreground mb-1 rounded-lg">Orthros</h3>
              <p className="text-accent font-medium mb-2 rounded-lg">Sundays at 9:00 AM</p>
              <p className="text-muted-foreground rounded-lg">
                Morning prayer service before Divine Liturgy.
              </p>
            </div>
          </div>

          {/* Fellowship Card */}
          <div className="flex items-start p-6 bg-card border border-border rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-orthodox-teal/10 text-orthodox-teal mr-4">
              <Coffee className="h-6 w-6" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-card-foreground mb-1 rounded-lg">Fellowship</h3>
              <p className="text-orthodox-teal font-medium mb-2 rounded-lg">After Sunday Liturgy</p>
              <p className="text-muted-foreground rounded-lg">
                Coffee hour and community fellowship in the Cultural Center.
              </p>
            </div>
          </div>
        </div>

        {/* Special Services & Feast Days Section */}
        <div className="mt-16 bg-card border border-border p-8 rounded-xl shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <CalendarDays className="h-10 w-10 text-primary mr-3" />
            <h3 className="text-3xl font-extrabold text-card-foreground rounded-lg">
              Special Services & Feast Days
            </h3>
          </div>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto mb-10 rounded-lg">
            Throughout the year, we celebrate the major feast days of the Orthodox Church,
            including Christmas, Epiphany, Pascha (Easter), and many others. These services
            often have special times and may include additional celebrations.
          </p>

          {/* Feast Day Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {/* Nativity of Christ Card */}
            <div className="flex flex-col items-center p-6 bg-background border border-border rounded-xl shadow-md text-center">
              <p className="text-sm text-muted-foreground mb-1 rounded-lg">Dec 25</p>
              <h4 className="text-lg font-semibold text-foreground rounded-lg">Nativity of Christ</h4>
            </div>
            {/* Theophany Card */}
            <div className="flex flex-col items-center p-6 bg-background border border-border rounded-xl shadow-md text-center">
              <p className="text-sm text-muted-foreground mb-1 rounded-lg">Jan 6</p>
              <h4 className="text-lg font-semibold text-foreground rounded-lg">Theophany</h4>
            </div>
            {/* Holy Pascha Card */}
            <div className="flex flex-col items-center p-6 bg-background border border-border rounded-xl shadow-md text-center">
              <p className="text-sm text-muted-foreground mb-1 rounded-lg">Apr 20</p> {/* Placeholder date */}
              <h4 className="text-lg font-semibold text-foreground rounded-lg">Holy Pascha</h4>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/calendar" // Link to a full calendar page
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 md:py-4 md:px-10 text-lg transition-colors duration-300 shadow-md"
            >
              View Full Calendar
            </a>
            <button
              onClick={() => alert('Subscribe functionality not yet implemented!')} // Replace with actual subscription logic
              className="inline-flex items-center justify-center px-8 py-3 border border-secondary text-base font-medium rounded-md text-secondary bg-background hover:bg-secondary/10 md:py-4 md:px-10 text-lg transition-colors duration-300 shadow-md"
            >
              <BellRing className="h-5 w-5 mr-2" />
              Subscribe to Updates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

