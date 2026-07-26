// src/features/process/components/DashboardTaskItem.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { PROCESS_COLORS } from '@/constants/process';
import type { DashboardTask } from '@/types/process';

interface DashboardTaskItemProps {
  task: DashboardTask;
}

const STATUS_CONFIG = {
  completed: {
    bg: '#10B98120',
    dot: '#10B981',
    text: '#10B981',
    label: 'Done',
  },
  'in-progress': {
    bg: '#F59E0B20',
    dot: '#F59E0B',
    text: '#F59E0B',
    label: 'In Progress',
  },
  pending: {
    bg: '#9CA3AF15',
    dot: '#9CA3AF',
    text: '#9CA3AF',
    label: 'Pending',
  },
};

export const DashboardTaskItem = memo(function DashboardTaskItem({
  task,
}: DashboardTaskItemProps) {
  const status = STATUS_CONFIG[task.status];

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: task.delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-3 rounded-xl px-3 py-2.5"
      style={{ backgroundColor: status.bg }}
    >
      <div
        className="h-2 w-2 flex-shrink-0 rounded-full"
        style={{ backgroundColor: status.dot }}
      />
      <span
        className="flex-1 text-sm font-medium"
        style={{ color: PROCESS_COLORS.textPrimary }}
      >
        {task.label}
      </span>
      <span
        className="text-xs font-medium"
        style={{ color: status.text }}
      >
        {status.label}
      </span>
      <div
        className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white"
        style={{ backgroundColor: '#111111' }}
      >
        {task.assignee}
      </div>
    </motion.div>
  );
});