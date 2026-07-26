// src/features/consultation/components/SuccessState.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { CONSULTATION_COLORS, CONSULTATION_COPY, CONSULTATION_ANIMATION } from '@/constants/consultation';

interface SuccessStateProps {
  onReset: () => void;
}

export const SuccessState = memo(function SuccessState({ onReset }: SuccessStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: CONSULTATION_ANIMATION.successFadeDuration,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex flex-col text-justify text-galacial items-center text-center"
    >
      {/* Success Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8 flex h-20 w-20 items-center justify-center rounded-full"
        style={{ backgroundColor: `${CONSULTATION_COLORS.success}20` }}
      >
        <svg
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke={CONSULTATION_COLORS.success}
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </motion.div>

      <h3
        className="mb-4 text-2xl font-bold text-glacial tracking-tight sm:text-3xl"
        style={{ color: CONSULTATION_COLORS.textPrimary }}
      >
        {CONSULTATION_COPY.successTitle}
      </h3>

      <p
        className="mb-10 max-w-lg text-base leading-relaxed sm:text-lg"
        style={{ color: CONSULTATION_COLORS.textSecondary }}
      >
        {CONSULTATION_COPY.successMessage}
      </p>

      <motion.button
        onClick={onReset}
        className="rounded-full px-8 py-4 text-sm font-medium transition-colors duration-200"
        style={{
          backgroundColor: CONSULTATION_COLORS.accent,
          color: '#111111',
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {CONSULTATION_COPY.successCta}
      </motion.button>
    </motion.div>
  );
});