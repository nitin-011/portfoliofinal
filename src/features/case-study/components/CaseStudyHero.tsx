// src/features/case-study/components/CaseStudyHero.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import type { CaseStudyData } from '@/types/case-study';

interface CaseStudyHeroProps {
  data: CaseStudyData;
}

export const CaseStudyHero = memo(function CaseStudyHero({ data }: CaseStudyHeroProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section
      className="relative min-h-[85vh] flex items-end pb-16 sm:pb-24 lg:pb-32"
      style={{ backgroundColor: '#050505' }}
    >
      {/* Hero background image */}
      {data.heroImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={data.heroImage}
            alt={`${data.name} hero`}
            className="h-full w-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
        </div>
      )}

      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${data.brandColor}20 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={reducedMotion ? undefined : { opacity: 0, y: 40 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Industry Tag */}
            <span
              className="mb-6 inline-block rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider"
              style={{
                backgroundColor: `${data.brandColor}20`,
                color: data.brandColor,
              }}
            >
              {data.industry}
            </span>

            {/* Project Name */}
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {data.name}
            </h1>

            {/* Description */}
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
              {data.shortDescription}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
});