import React from 'react';
import { MapPin, Send, Car, ParkingCircle, Accessibility, Users, Landmark } from 'lucide-react'; // Importing Lucide icons

export const LocationDirections = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-extrabold text-foreground rounded-lg">
            Location & Directions
          </h2>
          {/* Optional: Icon for sending directions */}
          <button
            onClick={() => alert('Share directions functionality not yet implemented!')}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Share Directions"
          >
            <Send className="h-6 w-6" />
          </button>
        </div>

        {/* Map Placeholder */}
        <div className="bg-muted border border-border rounded-xl shadow-lg h-[300px] md:h-[450px] flex items-center justify-center text-muted-foreground text-xl mb-8 overflow-hidden">
          {/* You would integrate a real map component (e.g., Google Maps, Leaflet) here */}
          <img
            src="/images/image_ad9b7e.jpg" // Placeholder image for the map area
            alt="Map of Church Location"
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x450/D1D5DB/4B5563?text=Map+Placeholder"; }}
          />
        </div>

        {/* Get Turn-by-Turn Directions Button */}
        <div className="text-center mb-12">
          <a
            href="https://maps.app.goo.gl/your-church-location" // Replace with actual Google Maps directions link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 md:py-4 md:px-10 text-lg transition-colors duration-300 shadow-md"
          >
            <Car className="h-5 w-5 mr-3" />
            Get Turn-by-Turn Directions
          </a>
        </div>

        {/* Driving Directions and Parking & Access Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Driving Directions Section */}
          <div>
            <div className="flex items-center mb-6">
              <Car className="h-7 w-7 text-secondary mr-3" />
              <h3 className="text-2xl font-bold text-foreground rounded-lg">Driving Directions</h3>
            </div>
            <div className="space-y-6">
              {/* Direction 1: From I-96 (West Side) */}
              <div className="bg-card border border-border p-6 rounded-xl shadow-md">
                <h4 className="text-lg font-semibold text-card-foreground mb-2 rounded-lg">From I-96 (West Side)</h4>
                <p className="text-muted-foreground rounded-lg">
                  Take Exit 43A for East Paris Ave SE. Turn right (south) on East Paris Ave SE.
                  Continue for 0.8 miles. The church will be on your right.
                </p>
              </div>
              {/* Direction 2: From I-96 (East Side) */}
              <div className="bg-card border border-border p-6 rounded-xl shadow-md">
                <h4 className="text-lg font-semibold text-card-foreground mb-2 rounded-lg">From I-96 (East Side)</h4>
                <p className="text-muted-foreground rounded-lg">
                  Take Exit 43A for East Paris Ave SE. Turn left (south) on East Paris Ave SE.
                  Continue for 0.8 miles. The church will be on your right.
                </p>
              </div>
              {/* Direction 3: From US-131 */}
              <div className="bg-card border border-border p-6 rounded-xl shadow-md">
                <h4 className="text-lg font-semibold text-card-foreground mb-2 rounded-lg">From US-131</h4>
                <p className="text-muted-foreground rounded-lg">
                  Take Exit 85 for 28th Street SE. Head east for 2.5 miles to East Paris Ave SE.
                  Turn left (north) and continue 0.5 miles. The church will be on your left.
                </p>
              </div>
            </div>
          </div>

          {/* Parking & Access Section */}
          <div>
            <div className="flex items-center mb-6">
              <ParkingCircle className="h-7 w-7 text-accent mr-3" />
              <h3 className="text-2xl font-bold text-foreground rounded-lg">Parking & Access</h3>
            </div>
            <div className="space-y-6">
              {/* Main Parking Lot */}
              <div className="bg-card border border-border p-6 rounded-xl shadow-md">
                <h4 className="text-lg font-semibold text-card-foreground mb-2 rounded-lg">Main Parking Lot</h4>
                <p className="text-muted-foreground mb-2 rounded-lg">
                  Large paved parking lot directly in front of the church with spaces for 100+ vehicles.
                </p>
                <span className="text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                  Free Parking
                </span>
              </div>
              {/* Accessible Entrance */}
              <div className="bg-card border border-border p-6 rounded-xl shadow-md">
                <h4 className="text-lg font-semibold text-card-foreground mb-2 rounded-lg">Accessible Entrance</h4>
                <p className="text-muted-foreground mb-2 rounded-lg">
                  Wheelchair accessible entrance through the main doors. Accessible parking spaces available near the entrance.
                </p>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  ADA Compliant
                </span>
              </div>
              {/* Sunday Service Arrival */}
              <div className="bg-card border border-border p-6 rounded-xl shadow-md">
                <h4 className="text-lg font-semibold text-card-foreground mb-2 rounded-lg">Sunday Service Arrival</h4>
                <p className="text-muted-foreground rounded-lg">
                  We recommend arriving 10-15 minutes early for Sunday Divine Liturgy.
                  Greeters will be available at the main entrance to welcome you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Landmarks Section - Updated to horizontal cards */}
        <div className="mt-12">
          <div className="flex items-center mb-6">
            <Landmark className="h-7 w-7 text-primary mr-3" />
            <h3 className="text-2xl font-bold text-foreground rounded-lg">Nearby Landmarks</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Woodland Mall Card */}
            <div className="bg-card border border-border p-4 rounded-xl shadow-md flex items-center">
              <span className="h-3 w-3 bg-secondary rounded-full mr-3 flex-shrink-0"></span>
              <p className="text-muted-foreground rounded-lg">
                <span className="font-semibold text-card-foreground">Woodland Mall</span> (0.5 miles)
              </p>
            </div>
            {/* Costco Wholesale Card */}
            <div className="bg-card border border-border p-4 rounded-xl shadow-md flex items-center">
              <span className="h-3 w-3 bg-accent rounded-full mr-3 flex-shrink-0"></span>
              <p className="text-muted-foreground rounded-lg">
                <span className="font-semibold text-card-foreground">Costco Wholesale</span> (0.3 miles)
              </p>
            </div>
            {/* Forest Hills Foods Card */}
            <div className="bg-card border border-border p-4 rounded-xl shadow-md flex items-center">
              <span className="h-3 w-3 bg-primary rounded-full mr-3 flex-shrink-0"></span>
              <p className="text-muted-foreground rounded-lg">
                <span className="font-semibold text-card-foreground">Forest Hills Foods</span> (0.4 miles)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

