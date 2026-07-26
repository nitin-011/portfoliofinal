// src/features/process/components/ProcessDashboard.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { PROCESS_SECTION, PROCESS_COLORS } from '@/constants/process';
import { DashboardSprintBar } from './DashboardSprintBar';
import { DashboardTaskItem } from './DashboardTaskItem';
import { DashboardMilestone } from './DashboardMilestone';
import { DashboardTeam } from './DashboardTeam';

export const ProcessDashboard = memo(function ProcessDashboard() {
  const { dashboard } = PROCESS_SECTION;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-24 flex flex-col gap-4"
    >
      {/* Dashboard Header */}
      <div
        className="rounded-2xl border p-5"
        style={{
          backgroundColor: PROCESS_COLORS.card,
          borderColor: PROCESS_COLORS.border,
        }}
      >
        <div className="flex items-center justify-between">
          <div>
            <span
              className="text-xs font-medium uppercase tracking-wider"
              style={{ color: PROCESS_COLORS.textSecondary }}
            >
              Active Project
            </span>
            <h3
              className="mt-1 text-lg font-bold"
              style={{ color: PROCESS_COLORS.textPrimary }}
            >
              {dashboard.projectName}
            </h3>
          </div>
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg"
            style={{ backgroundColor: `${PROCESS_COLORS.accent}15` }}
          >
            <div
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: PROCESS_COLORS.accent }}
            />
          </div>
        </div>
      </div>

      {/* Sprint Progress */}
      <DashboardSprintBar sprint={dashboard.sprint} />

      {/* Tasks */}
      <div
        className="rounded-2xl border p-5"
        style={{
          backgroundColor: PROCESS_COLORS.card,
          borderColor: PROCESS_COLORS.border,
        }}
      >
        <span
          className="mb-3 block text-xs font-medium uppercase tracking-wider"
          style={{ color: PROCESS_COLORS.textSecondary }}
        >
          Sprint Tasks
        </span>
        <div className="flex flex-col gap-2">
          {dashboard.tasks.map((task) => (
            <DashboardTaskItem key={task.id} task={task} />
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div
        className="rounded-2xl border p-5"
        style={{
          backgroundColor: PROCESS_COLORS.card,
          borderColor: PROCESS_COLORS.border,
        }}
      >
        <span
          className="mb-3 block text-xs font-medium uppercase tracking-wider"
          style={{ color: PROCESS_COLORS.textSecondary }}
        >
          Milestones
        </span>
        <div className="flex flex-col">
          {dashboard.milestones.map((milestone, index) => (
            <DashboardMilestone
              key={milestone.id}
              milestone={milestone}
              isLast={index === dashboard.milestones.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Team */}
      <DashboardTeam team={dashboard.team} />
    </motion.div>
  );
});