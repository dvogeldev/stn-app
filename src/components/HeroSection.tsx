// src/components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import { ArrowRight, Clock, MapPin } from 'lucide-react'; // Import icons from lucide-react
import { fetchSiteSettings } from '@/lib/wordpress';

export async function HeroSection() {
  const siteSettings = await fetchSiteSettings();
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/still_image.jpg"
          alt="Interior of St. Nicholas Orthodox Church showing the beautiful iconostasis with traditional Orthodox icons, ornate wooden carvings, and a priest conducting Divine Liturgy at the altar"
          fill
          className="object-cover object-bottom w-full h-full"
          sizes="100vw"
          priority
          style={{
            objectFit: 'cover',
            objectPosition: 'bottom'
          }}
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/70"></div>
        {/* Subtle gradient overlay for additional depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            {/* Church Logo */}
            <div className="mx-auto mb-8 drop-shadow-lg">
              <Image
                src="/assets/st_nicholas_logo (1).svg"
                alt="St. Nicholas Orthodox Church Logo"
                width={80}
                height={80}
                className="mx-auto filter drop-shadow-lg"
              />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              <span
                className="block drop-shadow-lg"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
              >
                Welcome to
              </span>
              <span
                className="block text-amber-300 drop-shadow-lg"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
              >
                St. Nicholas
              </span>
              <span
                className="block drop-shadow-lg"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
              >
                Orthodox Church
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-10 max-w-4xl mx-auto leading-relaxed drop-shadow-md"
              style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.4)' }}
            >
              {siteSettings.homepageSettings.welcomeMessage || 'Experience the beauty of ancient Orthodox worship in the heart of Grand Rapids. All are welcome to join our community.'}
            </p>
          </div>

          {/* Primary Call to Action */}
          <div className="mb-12">
            <button className="bg-primary text-primary-foreground px-12 py-5 rounded-xl font-bold text-xl hover:bg-primary/90 transition-all transform hover:scale-105 shadow-2xl border border-white/20 backdrop-blur-sm mb-4 inline-flex items-center space-x-3">
              <span>Plan Your First Visit</span>
              <ArrowRight className="h-6 w-6" />
            </button>

            <p
              className="text-white/80 text-lg max-w-2xl mx-auto"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}
            >
              Join us this Sunday at 10:00 AM for Divine Liturgy. No experience necessary -
              come as you are and discover Orthodox Christianity.
            </p>
          </div>

          {/* Essential Information */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Clock className="h-8 w-8 text-amber-300 mx-auto mb-3 drop-shadow-lg" />
              <h3
                className="font-serif font-bold text-white text-lg mb-2"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}
              >
                Sunday Service
              </h3>
              <p
                className="text-white/90 font-semibold"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}
              >
                10:00 AM
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <MapPin className="h-8 w-8 text-amber-300 mx-auto mb-3 drop-shadow-lg" />
              <h3
                className="font-serif font-bold text-white text-lg mb-2"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}
              >
                Location
              </h3>
              <p
                className="text-white/90 font-semibold"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}
              >
                2250 E. Paris SE
              </p>
            </div>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary/80 backdrop-blur-md text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-all border border-white/30">
              Watch Online Service
            </button>
            <button className="bg-accent/80 backdrop-blur-md text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-all border border-white/30">
              Learn About Orthodoxy
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}