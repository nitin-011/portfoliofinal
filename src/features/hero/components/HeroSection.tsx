// src/features/hero/components/HeroSection.tsx

import { memo } from 'react';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { HeroContent } from './HeroContent';

export const HeroSection = memo(function HeroSection() {
  return (
    <section
      id="hero"
      data-theme="dark"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#050505' }}
      aria-label="Hero section"
    >
      {/* Particle Background — full section coverage */}
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>

      {/* Diagonal gradient overlay for depth (modifiable) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1), transparent 14%), ' +
            'radial-gradient(circle at 85% 15%, rgba(255,255,255,0.06), transparent 10%), ' +
            'linear-gradient(135deg, rgba(8, 10, 16, 0.5) 0%, rgba(3, 4, 8, 0.85) 60%, rgba(2, 2, 6, 0.96) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <HeroContent />
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
});