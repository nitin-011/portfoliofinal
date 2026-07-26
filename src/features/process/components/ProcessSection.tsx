// src/features/process/components/ProcessSection.tsx

import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { PROCESS_SECTION, PROCESS_COLORS } from '@/constants/process';
import { ProcessJourney } from './ProcessJourney';
import { ProcessDashboardUnified } from './ProcessDashboardUnified';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

export const ProcessSection = memo(function ProcessSection() {
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="process"
      data-theme="light"
      className="relative py-24 sm:py-28 lg:py-32"
      style={{ backgroundColor: PROCESS_COLORS.bg }}
      aria-labelledby="process-heading"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center lg:mb-24"
          initial={reducedMotion ? undefined : { opacity: 0, y: 30 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            id="process-heading"
            className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: PROCESS_COLORS.textPrimary }}
          >
            {PROCESS_SECTION.heading}
          </h2>
          <p
            className="text-base leading-relaxed sm:text-lg"
            style={{ color: PROCESS_COLORS.textSecondary }}
          >
            {PROCESS_SECTION.subtitle}
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <ProcessJourney activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProcessDashboardUnified activeIndex={activeIndex} />
          </div>
        </div>
      </div>
    </section>
  );
});