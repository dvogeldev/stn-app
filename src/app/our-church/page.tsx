import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, Heart } from 'lucide-react';

export default function OurChurchPage() {
  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8 bg-background font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-foreground mb-6">
            Our Church
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn more about St. Nicholas Orthodox Church, our community, and how to connect with us.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-card rounded-lg p-8 shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <MapPin className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-card-foreground">Visit Us</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Find our location, contact information, and directions to join us for worship.
            </p>
            <Button asChild>
              <Link href="/our-church/visit-us">Learn More</Link>
            </Button>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Clock className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-card-foreground">Worship Schedule</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              View our regular worship services and special celebrations throughout the year.
            </p>
            <Button asChild variant="outline">
              <Link href="/#worship-schedule">View Schedule</Link>
            </Button>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-card-foreground">Our Community</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Discover the vibrant parish family and community life at St. Nicholas.
            </p>
            <Button asChild variant="outline">
              <Link href="/community">Explore Community</Link>
            </Button>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-muted rounded-lg p-8 lg:p-12">
          <div className="flex items-center mb-6">
            <Heart className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-foreground">Welcome to St. Nicholas</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            St. Nicholas Orthodox Church in Grand Rapids, Michigan, is a welcoming parish community 
            rooted in the ancient traditions of Orthodox Christianity. We invite you to join us in 
            worship, fellowship, and spiritual growth as we journey together in faith.
          </p>
        </div>
      </div>
    </main>
  );
}