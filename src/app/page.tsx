// src/app/page.tsx

import { HeroSection } from '@/components/HeroSection';
import { AboutParish } from '@/components/AboutParish';
import { LivingFaithCommunity } from '@/components/LivingFaithCommunity';
import { OrthodoxTraditionSection } from '@/components/OrthodoxTraditionSection';
import { WorshipScheduleSection } from '@/components/WorshipScheduleSection';

import { FirstTimeVisitorSection } from '@/components/FirstTimeVisitorSection';
import { QuestionsAboutOrthodoxySection } from '@/components/QuestionsAboutOrthodoxySection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutParish />
      <LivingFaithCommunity />
      <OrthodoxTraditionSection />
      <WorshipScheduleSection />
      <FirstTimeVisitorSection />
      <QuestionsAboutOrthodoxySection />
      <Footer />
      {/* Add the new section here */}
      {/* You can add other content sections here later, e.g., */}
      {/* <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6">About Our Parish</h2>
        <p>Content about the parish goes here...</p>
      </section> */}
    </main>
  );
}

