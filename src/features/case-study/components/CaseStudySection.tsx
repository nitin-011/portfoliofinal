// src/features/case-study/components/CaseStudySection.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import type { CaseStudySection as CaseStudySectionType } from '@/types/case-study';

interface CaseStudySectionProps {
  section: CaseStudySectionType;
  index: number;
}

export const CaseStudySection = memo(function CaseStudySection({
  section,
}: CaseStudySectionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#050505' }}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {section.title}
          </motion.h2>

          <div className="flex flex-col gap-6">
            {section.image && (
              <motion.figure
                initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950"
              >
                <img
                  src={section.image.src}
                  alt={section.image.alt}
                  className="h-full w-full object-cover"
                />
                {section.image.caption ? (
                  <figcaption className="px-5 py-4 text-sm text-white/60">
                    {section.image.caption}
                  </figcaption>
                ) : null}
              </motion.figure>
            )}
            {section.content.map((paragraph, pIndex) => (
              <motion.p
                key={pIndex}
                initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: pIndex * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-base leading-relaxed text-white/60 sm:text-lg"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});