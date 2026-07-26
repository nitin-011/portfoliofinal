// src/features/consultation/components/ProgressBar.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { CONSULTATION_COLORS, CONSULTATION_ANIMATION } from '@/constants/consultation';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  progress: number;
}

export const ProgressBar = memo(function ProgressBar({
  currentStep,
  totalSteps,
  progress,
}: ProgressBarProps) {
  return (
    <div className="mb-10">
      <div className="mb-3 flex items-center justify-between">
        <span
          className="text-sm font-medium"
          style={{ color: CONSULTATION_COLORS.textSecondary }}
        >
          Step {currentStep} of {totalSteps}
        </span>
        <span
          className="text-sm font-medium"
          style={{ color: CONSULTATION_COLORS.accent }}
        >
          {Math.round(progress)}%
        </span>
      </div>
      <div
        className="h-1 w-full overflow-hidden rounded-full"
        style={{ backgroundColor: CONSULTATION_COLORS.border }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: CONSULTATION_COLORS.accent }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: CONSULTATION_ANIMATION.progressDuration,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </div>
    </div>
  );
});