// src/features/case-study/components/TestimonialBlock.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import type { CaseStudyTestimonial } from '@/types/case-study';

interface TestimonialBlockProps {
  testimonial: CaseStudyTestimonial;
  brandColor: string;
}

export const TestimonialBlock = memo(function TestimonialBlock({
  testimonial,
  brandColor,
}: TestimonialBlockProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#050505' }}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={reducedMotion ? undefined : { opacity: 0, y: 30 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-12 lg:p-16"
          >
            {/* Quote mark */}
            <div
              className="mb-8 text-6xl font-serif leading-none"
              style={{ color: `${brandColor}40` }}
            >
              "
            </div>

            <blockquote className="mb-10 text-xl leading-relaxed text-white/80 sm:text-2xl">
              {testimonial.quote}
            </blockquote>

            <div className="flex items-center gap-4">
              {testimonial.image && (
                <div className="h-14 w-14 overflow-hidden rounded-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div>
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-white/50">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>

            {/* Decorative line */}
            <div
              className="absolute left-0 top-0 h-full w-1 rounded-l-3xl"
              style={{ backgroundColor: brandColor }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
});