// src/features/consultation/components/StepNavigation.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { CONSULTATION_COLORS } from '@/constants/consultation';

interface StepNavigationProps {
  currentStep: number;
  isSubmitting: boolean;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

export const StepNavigation = memo(function StepNavigation({
  currentStep,
  isSubmitting,
  onBack,
  onNext,
  onSubmit,
}: StepNavigationProps) {
  const isLastStep = currentStep === 4;

  return (
    <div className="mt-10 flex items-center justify-between">
      {currentStep > 1 ? (
        <motion.button
          type="button"
          onClick={onBack}
          className="text-sm font-medium transition-colors duration-200"
          style={{ color: CONSULTATION_COLORS.textSecondary }}
          whileHover={{ x: -2 }}
          transition={{ duration: 0.2 }}
        >
          ← Back
        </motion.button>
      ) : (
        <div />
      )}

      {isLastStep ? (
        <motion.button
          type="button"
          onClick={onSubmit}
          disabled={isSubmitting}
          className="rounded-full px-8 py-4 text-sm font-medium transition-all duration-200 disabled:opacity-50"
          style={{
            backgroundColor: CONSULTATION_COLORS.accent,
            color: '#111111',
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg
                className="h-4 w-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Submitting...
            </span>
          ) : (
            'Book a Discovery Call'
          )}
        </motion.button>
      ) : (
        <motion.button
          type="button"
          onClick={onNext}
          className="rounded-full px-8 py-4 text-sm font-medium transition-all duration-200"
          style={{
            backgroundColor: CONSULTATION_COLORS.accent,
            color: '#111111',
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Continue →
        </motion.button>
      )}
    </div>
  );
});