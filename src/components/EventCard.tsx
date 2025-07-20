'use client';
import React from 'react';
import { Clock, MapPin, Users, CalendarDays, BellRing } from 'lucide-react'; // Importing Lucide icons

interface EventCardProps {
  title: string;
  description: string;
  time: string;
  location: string;
  audience: string;
  category: string;
  daysAway: number;
  variant?: 'featured' | 'small'; // 'featured' for the main event, 'small' for others
}

export const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  time,
  location,
  audience,
  category,
  daysAway,
  variant = 'small', // Default to small card
}) => {
  const isFeatured = variant === 'featured';

  return (
    // Removed col-span-1 md:col-span-2 from here. The parent grid will handle column distribution.
    <div className="bg-card border border-border rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="p-6 flex flex-col"> {/* flex-col is correct for both variants */}
        {/* Category and Days Away */}
        <div className="flex justify-between items-center mb-4">
          <span className={`text-sm font-semibold px-3 py-1 rounded-full ${isFeatured ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
            {category}
          </span>
          <span className="text-sm text-muted-foreground">
            {daysAway > 0 ? `in -${daysAway} days` : 'Today'}
          </span>
        </div>

        {/* Title and Description */}
        <h3 className={`font-extrabold text-card-foreground mb-2 rounded-lg ${isFeatured ? 'text-3xl' : 'text-xl'}`}>
          {title}
        </h3>
        <p className={`text-muted-foreground mb-4 rounded-lg ${isFeatured ? 'text-lg' : 'text-base'}`}>
          {description}
        </p>

        {/* Event Details (Time, Location, Audience) */}
        <div className="text-card-foreground text-base space-y-2 mb-6">
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-3 text-muted-foreground" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-3 text-muted-foreground" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-5 w-5 mr-3 text-muted-foreground" />
            <span>{audience}</span>
          </div>
        </div>

        {/* Buttons for Featured Event */}
        {isFeatured && (
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button
              onClick={() => alert('Add to Calendar functionality not yet implemented!')}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors duration-300 shadow-md"
            >
              <CalendarDays className="h-5 w-5 mr-2" />
              Add to Calendar
            </button>
            <button
              onClick={() => alert('Get Reminder functionality not yet implemented!')}
              className="inline-flex items-center justify-center px-6 py-3 border border-secondary text-base font-medium rounded-md text-secondary bg-card hover:bg-secondary/10 transition-colors duration-300 shadow-md"
            >
              <BellRing className="h-5 w-5 mr-2" />
              Get Reminder
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

