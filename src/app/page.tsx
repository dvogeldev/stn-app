// src/app/page.tsx
'use client'; // HeroSection uses client components (e.g., Shadcn buttons)

import { HeroSection } from '@/components/HeroSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      {/* You can add other content sections here later, e.g., */}
      {/* <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6">About Our Parish</h2>
        <p>Content about the parish goes here...</p>
      </section> */}
    </main>
  );
}