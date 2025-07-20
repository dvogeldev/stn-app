import React from 'react';
import Image from 'next/image';
import { MapPin, Mail, Phone, Clock, ArrowRight } from 'lucide-react'; // Importing Lucide icons
import { SiteSettings } from '@/lib/wordpress';

interface ContactInfoProps {
  siteSettings: SiteSettings;
}

export const ContactInfo = ({ siteSettings }: ContactInfoProps) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image and "Find Us Here" Section - Left Column */}
        <div className="relative bg-muted border border-border rounded-xl shadow-lg overflow-hidden h-[400px] md:h-[500px]">
          <Image
            src="/images/St. Nicholas Church in Sunlight.png"
            alt="Exterior view of St. Nicholas Orthodox Church building"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay with text and button */}
          <div className="absolute inset-0 bg-orthodox-black/40 flex flex-col justify-end p-6 text-white">
            <a
              href={siteSettings.location.googleMapsUrl || "https://www.google.com/maps/dir//2250+E+Paris+Ave+SE,+Grand+Rapids,+MI+49546"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors duration-300"
            >
              <MapPin className="h-5 w-5 mr-2" />
              Find Us Here
              <ArrowRight className="h-4 w-4 ml-2" />
            </a>
            <p className="text-sm mt-2">{siteSettings.location.address || '2250 E. Paris SE'}</p>
          </div>
        </div>

        {/* Contact Information Cards - Right Column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Address Card */}
          <div className="bg-card border border-border p-6 rounded-xl shadow-md flex flex-col items-start text-left">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold text-card-foreground rounded-lg">Address</h3>
            </div>
            <p className="text-muted-foreground mb-1 rounded-lg">{siteSettings.location.address || '2250 E. Paris SE'}</p>
            <p className="text-muted-foreground rounded-lg">{siteSettings.location.city || 'Grand Rapids'}, {siteSettings.location.state || 'MI'} {siteSettings.location.zipCode || '49546'}</p>
          </div>

          {/* Email Card */}
          <div className="bg-card border border-border p-6 rounded-xl shadow-md flex flex-col items-start text-left">
            <div className="flex items-center mb-4">
              <Mail className="h-6 w-6 text-secondary mr-3" />
              <h3 className="text-xl font-semibold text-card-foreground rounded-lg">Email</h3>
            </div>
            <a href={`mailto:${siteSettings.location.email}`} className="text-secondary hover:text-secondary/80 transition-colors duration-300 rounded-lg">
              {siteSettings.location.email}
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-card border border-border p-6 rounded-xl shadow-md flex flex-col items-start text-left">
            <div className="flex items-center mb-4">
              <Phone className="h-6 w-6 text-accent mr-3" />
              <h3 className="text-xl font-semibold text-card-foreground rounded-lg">Phone</h3>
            </div>
            <a href={`tel:${siteSettings.location.phone?.replace(/[^\d]/g, '') || ''}`} className="text-muted-foreground hover:text-card-foreground transition-colors duration-300 rounded-lg">
              {siteSettings.location.phone || '(616) 954-2700'}
            </a>
          </div>

          {/* Office Hours Card */}
          <div className="bg-card border border-border p-6 rounded-xl shadow-md flex flex-col items-start text-left">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-orthodox-teal mr-3" />
              <h3 className="text-xl font-semibold text-card-foreground rounded-lg">Office Hours</h3>
            </div>
            {siteSettings.location.officeHours ? (
              siteSettings.location.officeHours.split('\n').map((line, index) => (
                <p key={index} className="text-muted-foreground mb-1 rounded-lg">{line}</p>
              ))
            ) : (
              <>
                <p className="text-muted-foreground mb-1 rounded-lg">Tuesday - Friday: 9:00 AM - 3:00 PM</p>
                <p className="text-muted-foreground rounded-lg">Saturday: 10:00 AM - 2:00 PM</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

