// src/features/process/components/DashboardMilestone.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { PROCESS_COLORS } from '@/constants/process';
import type { DashboardMilestone as DashboardMilestoneType } from '@/types/process';

interface DashboardMilestoneProps {
  milestone: DashboardMilestoneType;
  isLast: boolean;
}

const STATUS_STYLES = {
  completed: {
    bg: '#10B981',
    border: '#10B981',
    text: PROCESS_COLORS.textPrimary,
  },
  active: {
    bg: '#D4AF37',
    border: '#D4AF37',
    text: PROCESS_COLORS.textPrimary,
  },
  locked: {
    bg: 'transparent',
    border: PROCESS_COLORS.border,
    text: PROCESS_COLORS.textSecondary,
  },
};

export const DashboardMilestone = memo(function DashboardMilestone({
  milestone,
  isLast,
}: DashboardMilestoneProps) {
  const style = STATUS_STYLES[milestone.status];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: milestone.delay ?? 0, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-center gap-3"
    >
      {!isLast && (
        <div
          className="absolute left-[11px] top-6 h-[calc(100%-12px)] w-[2px]"
          style={{
            backgroundColor:
              milestone.status === 'completed' ? '#10B98130' : PROCESS_COLORS.border,
          }}
        />
      )}

      <div
        className="relative z-10 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2"
        style={{
          backgroundColor: style.bg,
          borderColor: style.border,
        }}
      >
        {milestone.status === 'completed' && (
          <svg
            className="h-3 w-3 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
        {milestone.status === 'active' && (
          <div className="h-2 w-2 rounded-full bg-white" />
        )}
      </div>

      <div className="flex flex-col py-2">
        <span
          className="text-sm font-medium"
          style={{ color: style.text }}
        >
          {milestone.label}
        </span>
        <span
          className="text-xs"
          style={{ color: PROCESS_COLORS.textSecondary }}
        >
          {milestone.date}
        </span>
      </div>
    </motion.div>
  );
});