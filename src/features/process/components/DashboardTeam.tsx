// src/features/process/components/DashboardTeam.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { PROCESS_COLORS } from '@/constants/process';
import type { TeamMember } from '@/types/process';

interface DashboardTeamProps {
  team: TeamMember[];
}

export const DashboardTeam = memo(function DashboardTeam({ team }: DashboardTeamProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl border p-5"
      style={{
        backgroundColor: PROCESS_COLORS.card,
        borderColor: PROCESS_COLORS.border,
      }}
    >
      <span
        className="mb-4 block text-xs font-medium uppercase tracking-wider"
        style={{ color: PROCESS_COLORS.textSecondary }}
      >
        Team
      </span>

      <div className="flex gap-3">
        {team.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            className="flex flex-col items-center gap-1.5"
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: member.color }}
            >
              {member.initials}
            </div>
            <span
              className="text-[10px] font-medium"
              style={{ color: PROCESS_COLORS.textSecondary }}
            >
              {member.role}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
});