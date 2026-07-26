// src/features/home/pages/home-page.tsx

import { HeroSection } from '@/features/hero';
import { TechnologiesSection } from '@/features/technologies';
import { ProcessSection } from '@/features/process';
import { WorkSection } from '@/features/work';
import { TeamSection } from '@/features/team';
import { TestimonialsSection } from '@/features/testimonials';
import { ConsultationSection } from '@/features/consultation';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Our Work Section */}
      <WorkSection />

      {/* Team Section */}
      <TeamSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Consultation Section */}
      <ConsultationSection />
    </div>
  );
}