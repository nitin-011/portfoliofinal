// src/features/case-study/components/TechStackGrid.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { TechLogo } from '@/components/ui/TechLogo';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import type { TechnologyItem } from '@/types/case-study';

interface TechStackGridProps {
  technologies: TechnologyItem[];
  brandColor: string;
}

export const TechStackGrid = memo(function TechStackGrid({
  technologies,
}: TechStackGridProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#050505' }}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Technology Stack
          </motion.h2>

          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-6 lg:grid-cols-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <TechLogo techId={tech.id} className="h-10 w-10" />
                <span className="text-sm font-medium text-white/70 group-hover:text-white">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});