// src/features/team/components/CoreTeamCard.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import type { CoreTeam } from '@/types/team';

interface CoreTeamCardProps {
  team: CoreTeam;
}

export const CoreTeamCard = memo(function CoreTeamCard({ team }: CoreTeamCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'users':
        return (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        );
      case 'palette':
        return (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        );
      case 'clipboard':
        return (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01m-.01 4h.01" />
        );
      case 'shield':
      default:
        return (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        );
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col justify-between rounded-3xl bg-white border border-[#EAE4D8] p-5 sm:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(212,175,55,0.1)] transition-all duration-300 h-full"
    >
      <div>
        {/* Header with Icon */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 border border-amber-200/80 text-amber-600 shrink-0">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {getIcon(team.icon)}
            </svg>
          </div>
          <h4 className="text-base font-bold font-glacial text-zinc-900">
            {team.title}
          </h4>
        </div>

        {/* Description */}
        <p className="text-xs text-zinc-600 leading-relaxed mb-6">
          {team.description}
        </p>
      </div>

      {/* Stats row */}
      <div className="pt-4 border-t border-zinc-100 flex items-center justify-start gap-6">
        {team.stats.map((stat, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-lg font-bold font-glacial text-amber-600">
              {stat.value}
            </span>
            <span className="text-[10px] text-zinc-500 font-medium leading-tight">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
});
