// src/features/case-study/components/MetricsSection.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/use-count-up';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import type { CaseStudyMetric } from '@/types/case-study';

function MetricCard({ metric }: { metric: CaseStudyMetric }) {
  const numericValue = parseInt(metric.value.replace(/[^0-9]/g, ''), 10);
  const { value, ref } = useCountUp(numericValue, 2000);
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reducedMotion ? undefined : { opacity: 0, y: 24 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: metric.animationDelay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="text-center"
    >
      <div className="mb-2 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {metric.prefix || ''}
        {value.toLocaleString()}
        {metric.suffix || ''}
      </div>
      <div className="text-sm font-medium uppercase tracking-wider text-white/50">
        {metric.label}
      </div>
    </motion.div>
  );
}

interface MetricsSectionProps {
  metrics: CaseStudyMetric[];
}

export const MetricsSection = memo(function MetricsSection({ metrics }: MetricsSectionProps) {
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
            className="mb-16 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Results
          </motion.h2>

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
            {metrics.map((metric) => (
              <MetricCard key={metric.id} metric={metric} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});