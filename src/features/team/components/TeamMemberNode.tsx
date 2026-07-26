// src/features/team/components/TeamMemberNode.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { TeamPhoto } from '@/components/ui/TeamPhoto';
import { TEAM_COLORS, TEAM_ANIMATION } from '@/constants/team';
import type { TeamMember } from '@/types/team';

interface TeamMemberNodeProps {
  member: TeamMember;
  index: number;
  levelIndex: number;
  size?: 'large' | 'medium';
}

export const TeamMemberNode = memo(function TeamMemberNode({
  member,
  index,
  levelIndex,
  size = 'medium',
}: TeamMemberNodeProps) {
  return (
    <motion.div
      id={`member-${member.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: TEAM_ANIMATION.fadeDuration,
        delay: levelIndex * TEAM_ANIMATION.levelDelay + index * TEAM_ANIMATION.memberDelay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex flex-col items-center text-center"
    >
      <div className="relative">
        <TeamPhoto
          src={member.image}
          alt={`${member.name}, ${member.role} at Atior Technologies`}
          size={size}
          className="transition-shadow duration-300 group-hover:shadow-xl"
        />
        <div
          className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            boxShadow: `0 0 0 3px ${TEAM_COLORS.accent}30`,
          }}
        />
      </div>

      <div className="mt-5 flex flex-col items-center gap-1">
        <h3
          className="text-base font-semibold tracking-tight transition-colors duration-200 group-hover:text-[#D4AF37]"
          style={{ color: TEAM_COLORS.textPrimary }}
        >
          {member.name}
        </h3>
        <span
          className="text-xs font-medium uppercase tracking-wider"
          style={{ color: TEAM_COLORS.accent }}
        >
          {member.role}
        </span>
        <motion.p
          className="mt-2 max-w-[240px] text-sm leading-relaxed opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ color: TEAM_COLORS.textSecondary }}
        >
          {member.description}
        </motion.p>
      </div>
    </motion.div>
  );
});