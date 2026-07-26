// src/features/case-study/components/FeatureBlocks.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { CaseStudyIcon } from '@/components/ui/CaseStudyIcon';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import type { CaseStudyFeature } from '@/types/case-study';

interface FeatureBlocksProps {
  features: CaseStudyFeature[];
  brandColor: string;
}

export const FeatureBlocks = memo(function FeatureBlocks({
  features,
  brandColor,
}: FeatureBlocksProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Key Features
          </motion.h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={reducedMotion ? undefined : { opacity: 0, y: 24 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${brandColor}15` }}
                >
                  <CaseStudyIcon icon={feature.icon} color={brandColor} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});