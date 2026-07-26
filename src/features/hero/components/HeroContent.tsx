// src/features/hero/components/HeroContent.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { HERO_COPY, HERO_ANIMATION } from '@/constants/hero';
import { CTAButton } from '@/components/ui/CTAButton';
import { scrollToElement } from '@/utils/scroll-to';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: HERO_ANIMATION.staggerDelay,
      delayChildren: HERO_ANIMATION.initialDelay,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: HERO_ANIMATION.duration,
      ease: HERO_ANIMATION.ease,
    },
  },
};

export const HeroContent = memo(function HeroContent() {
  const reducedMotion = useReducedMotion();

  const handleSecondaryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToElement('#our-work');
  };

  return (
    <motion.div
      className="relative z-5 flex flex-col items-center text-center"
      variants={reducedMotion ? undefined : containerVariants}
      initial={reducedMotion ? undefined : 'hidden'}
      animate={reducedMotion ? undefined : 'visible'}
    >
      {/* Label */}
      <motion.span
        variants={reducedMotion ? undefined : itemVariants}
        className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50 sm:text-xs"
      >
        {HERO_COPY.label}
      </motion.span>

      {/* Headline — composed with Anton, Glacial Indifference, and Playfair */}
      <motion.h1
        variants={reducedMotion ? undefined : itemVariants}
        className="mb-6 max-w-4xl leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
      >
        <div>
          <div className="flex flex-wrap items-baseline justify-center gap-3">
            <span className="font-glacial text-3xl sm:text-4xl md:text-5xl">
              Engineering
            </span>

            <span className="font-playfair text-3xl sm:text-4xl md:text-5xl text-yellow-400">
              Scalable
            </span>
          </div>

          <span className="block font-glacial text-3xl sm:text-4xl md:text-5xl">
            Digital Solutions
          </span>
        </div>
      </motion.h1>

      {/* Subtext removed — only CTAs per request */}

      {/* CTAs */}
      <motion.div
        variants={reducedMotion ? undefined : itemVariants}
        className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
      >
        <CTAButton
          label={HERO_COPY.primaryCta}
          href="#contact"
          ariaLabel="Book a discovery call with Atior Technologies"
          variant="section"
        />

        <a
          href="#our-work"
          onClick={handleSecondaryClick}
          className="group relative text-sm font-medium text-white/70 transition-colors duration-250 hover:text-white"
          style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
        >
          {HERO_COPY.secondaryCta}
          <span
            className="absolute -bottom-1 left-0 h-[1px] w-full origin-left scale-x-0 bg-white/50 transition-transform duration-300 group-hover:scale-x-100"
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          />
        </a>
      </motion.div>
    </motion.div>
  );
});