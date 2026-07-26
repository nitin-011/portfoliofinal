// src/features/testimonials/components/TestimonialsSection.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS_SECTION, TESTIMONIAL_COLORS } from '@/constants/testimonials';
import { TestimonialsGrid } from './TestimonialsGrid';
import { VideoModal } from './VideoModal';
import { useVideoModal } from '@/hooks/use-video-modal';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

export const TestimonialsSection = memo(function TestimonialsSection() {
  const reducedMotion = useReducedMotion();
  const { modal, openModal, closeModal } = useVideoModal();

  return (
    <section
      id="testimonials"
      data-theme="dark"
      className="relative py-24 sm:py-32 lg:py-40"
      style={{ backgroundColor: TESTIMONIAL_COLORS.bg }}
      aria-labelledby="testimonials-heading"
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
            id="testimonials-heading"
            className="mb-6 text-3xl font-galacial tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            What Our <span className="text-yellow-400">Clients</span> Say
          </h2>
          <p className="text-base text-justify leading-relaxed text-white/60 sm:text-lg">
            {TESTIMONIALS_SECTION.subtitle}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="mx-auto max-w-7xl">
          <TestimonialsGrid onOpen={openModal} />
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal modal={modal} onClose={closeModal} />
    </section>
  );
});