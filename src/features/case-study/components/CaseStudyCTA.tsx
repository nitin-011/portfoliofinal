// src/features/case-study/components/CaseStudyCTA.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import { CTAButton } from '@/components/ui/CTAButton';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

export const CaseStudyCTA = memo(function CaseStudyCTA() {
  const navigate = useNavigate();
  const reducedMotion = useReducedMotion();

  const handleClick = () => {
    navigate('/#contact');
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, y: 30 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have an idea worth building?
          </h2>
          <p className="mb-10 text-base leading-relaxed text-white/60 sm:text-lg">
            Every product we build begins with a conversation. Share your vision with us, and we will respond with a thoughtful assessment of how we can help — no generic proposals, no pressure.
          </p>
          <CTAButton
            label="Book a Discovery Call"
            href="#contact"
            ariaLabel="Book a discovery call with Atior Technologies"
            variant="section"
            onClick={handleClick}
          />
        </motion.div>
      </div>
    </section>
  );
});