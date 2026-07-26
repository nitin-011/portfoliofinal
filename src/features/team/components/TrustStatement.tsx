// src/features/team/components/TrustStatement.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { TEAM_COLORS, TEAM_SECTION, TEAM_ANIMATION } from '@/constants/team';

export const TrustStatement = memo(function TrustStatement() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: TEAM_ANIMATION.fadeDuration,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="mx-auto max-w-3xl text-center"
    >
      <div
        className="mx-auto mb-6 h-[1px] w-16"
        style={{ backgroundColor: TEAM_COLORS.accent }}
      />
      <p
        className="text-lg font-medium leading-relaxed sm:text-xl"
        style={{ color: TEAM_COLORS.textPrimary }}
      >
        {TEAM_SECTION.trustStatement}
      </p>
    </motion.div>
  );
});