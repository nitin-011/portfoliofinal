// src/features/process/components/DashboardSprintBar.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { PROCESS_COLORS } from '@/constants/process';
import type { SprintStatus } from '@/types/process';

interface DashboardSprintBarProps {
  sprint: SprintStatus;
}

export const DashboardSprintBar = memo(function DashboardSprintBar({
  sprint,
}: DashboardSprintBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl border p-5"
      style={{
        backgroundColor: PROCESS_COLORS.card,
        borderColor: PROCESS_COLORS.border,
      }}
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <span
            className="text-xs font-medium uppercase tracking-wider"
            style={{ color: PROCESS_COLORS.textSecondary }}
          >
            Sprint {sprint.currentSprint} of {sprint.totalSprints}
          </span>
          <div
            className="mt-1 text-2xl font-bold"
            style={{ color: PROCESS_COLORS.textPrimary }}
          >
            {sprint.progress}%
          </div>
        </div>
        <div
          className="rounded-full px-3 py-1 text-xs font-medium"
          style={{
            backgroundColor: `${PROCESS_COLORS.accent}15`,
            color: PROCESS_COLORS.accent,
          }}
        >
          {sprint.daysRemaining} days left
        </div>
      </div>

      <div
        className="h-2 w-full overflow-hidden rounded-full"
        style={{ backgroundColor: PROCESS_COLORS.border }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: PROCESS_COLORS.accent }}
          initial={{ width: 0 }}
          whileInView={{ width: `${sprint.progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.div>
  );
});