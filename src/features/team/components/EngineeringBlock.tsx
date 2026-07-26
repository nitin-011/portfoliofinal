// src/features/team/components/EngineeringBlock.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { TEAM_COLORS, TEAM_ANIMATION, TEAM_SECTION } from '@/constants/team';

export const EngineeringBlock = memo(function EngineeringBlock() {
  const block = TEAM_SECTION.engineeringBlock;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: TEAM_ANIMATION.fadeDuration,
        delay: 3 * TEAM_ANIMATION.levelDelay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="mx-auto w-full max-w-2xl"
    >
      <div
        className="rounded-3xl border p-8 sm:p-10"
        style={{
          backgroundColor: TEAM_COLORS.card,
          borderColor: TEAM_COLORS.border,
        }}
      >
        <div className="mb-6 flex items-center gap-4">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl"
            style={{ backgroundColor: `${TEAM_COLORS.accent}15` }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke={TEAM_COLORS.accent}
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div>
            <h3
              className="text-xl font-bold tracking-tight"
              style={{ color: TEAM_COLORS.textPrimary }}
            >
              {block.title}
            </h3>
          </div>
        </div>

        <p
          className="mb-8 text-base leading-relaxed"
          style={{ color: TEAM_COLORS.textSecondary }}
        >
          {block.description}
        </p>

        <div className="mb-8 grid grid-cols-2 gap-6">
          <div>
            <div
              className="text-3xl font-bold"
              style={{ color: TEAM_COLORS.accent }}
            >
              {block.stats.developers}
            </div>
            <div
              className="mt-1 text-sm"
              style={{ color: TEAM_COLORS.textSecondary }}
            >
              Dedicated Software Developers
            </div>
          </div>
          <div>
            <div
              className="text-3xl font-bold"
              style={{ color: TEAM_COLORS.accent }}
            >
              {block.stats.freelancers}+
            </div>
            <div
              className="mt-1 text-sm"
              style={{ color: TEAM_COLORS.textSecondary }}
            >
              Specialist Freelancers
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {block.specializations.map((spec) => (
            <span
              key={spec}
              className="rounded-full px-3 py-1.5 text-xs font-medium"
              style={{
                backgroundColor: `${TEAM_COLORS.accent}10`,
                color: TEAM_COLORS.textSecondary,
                border: `1px solid ${TEAM_COLORS.border}`,
              }}
            >
              {spec}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
});