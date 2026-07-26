// src/features/team/components/MemberCard.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import type { TeamMember } from '@/types/team';

interface MemberCardProps {
  member: TeamMember;
  isFeatured?: boolean;
}

export const MemberCard = memo(function MemberCard({ member, isFeatured = false }: MemberCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`relative flex flex-col items-center text-center rounded-3xl bg-white border border-[#EAE4D8] p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.12)] transition-all duration-300 ${
        isFeatured ? 'w-full h-full justify-between' : 'flex-1 min-w-[180px] h-full justify-between'
      }`}
    >
      <div className="flex flex-col items-center w-full">
        {/* Avatar Container with Shield Badge */}
        <div className="relative mb-4">
          <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden border-2 border-amber-300/40 p-1 bg-amber-50/50">
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          {/* Shield Icon Badge */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-amber-50 border border-amber-300/80 text-amber-600 shadow-sm">
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        </div>

        {/* Name & Role */}
        <h3 className="text-base sm:text-lg font-bold font-glacial text-zinc-900 mb-1">
          {member.name}
        </h3>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-2 font-glacial">
          {member.role}
        </p>

        {/* Bio */}
        <p className="text-xs text-zinc-600 leading-relaxed max-w-xs">
          {member.bio}
        </p>
      </div>

      {/* Featured Quote if available */}
      {member.quote && (
        <div className="mt-4 w-full pt-3 border-t border-zinc-100">
          <div className="rounded-2xl bg-[#FAF7F0] p-3 text-left relative border border-amber-100">
            <span className="text-xl font-serif text-amber-500 font-bold leading-none select-none block mb-0.5">
              “
            </span>
            <p className="text-xs italic text-zinc-700 font-serif leading-relaxed">
              {member.quote}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
});
