// src/components/HeroSection.tsx
'use client'; // This component must be a client component to use Apollo's useQuery hook
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming you want Shadcn buttons

export function HeroSection() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/still_image.jpg" // Path to your hero image
        alt="St. Nicholas Orthodox Church Exterior"
        layout="fill" // Makes the image fill the parent container
        objectFit="cover" // Ensures the image covers the section, cropping if necessary
        quality={80} // Adjust image quality for performance
        className="z-0" // Place image behind text
      />

      {/* Overlay Content */}
      <div className="relative z-10 p-4 bg-black bg-opacity-40 rounded-lg max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to St. Nicholas Orthodox Church
        </h1>
        <p className="text-lg md:text-xl mb-8 drop-shadow-md">
          Preserving the ancient faith in the modern world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
            <Link href="/about">Learn More</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/visit">Plan Your Visit</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}