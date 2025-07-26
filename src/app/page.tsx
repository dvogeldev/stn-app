// src/app/page.tsx

import { PageLayout } from '@/components/PageLayout';
import { HeroSection } from '@/components/HeroSection';
import { AboutParish } from '@/components/AboutParish';
import { LivingFaithCommunity } from '@/components/LivingFaithCommunity';
import { OrthodoxTraditionSection } from '@/components/OrthodoxTraditionSection';
import { WorshipScheduleSection } from '@/components/WorshipScheduleSection';
import { FirstTimeVisitorSection } from '@/components/FirstTimeVisitorSection';
import { QuestionsAboutOrthodoxySection } from '@/components/QuestionsAboutOrthodoxySection';

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <AboutParish />
      <LivingFaithCommunity />
      <OrthodoxTraditionSection />
      <WorshipScheduleSection />
      <FirstTimeVisitorSection />
      <QuestionsAboutOrthodoxySection />
    </PageLayout>
  );
}

