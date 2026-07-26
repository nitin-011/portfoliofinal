// src/features/process/components/ProcessBlockCard.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { ProcessIcon } from '@/components/ui/ProcessIcon';
import { PROCESS_COLORS } from '@/constants/process';
import type { ProcessBlock } from '@/types/process';

interface ProcessBlockCardProps {
  block: ProcessBlock;
  index: number;
}

export const ProcessBlockCard = memo(function ProcessBlockCard({
  block,
  index,
}: ProcessBlockCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group flex gap-4 rounded-2xl border p-5 transition-all duration-300 hover:shadow-lg"
      style={{
        backgroundColor: PROCESS_COLORS.card,
        borderColor: PROCESS_COLORS.border,
      }}
      whileHover={{
        y: -2,
        transition: { duration: 0.2 },
      }}
    >
      <div
        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
        style={{
          backgroundColor: `${PROCESS_COLORS.accent}15`,
          color: PROCESS_COLORS.accent,
        }}
      >
        <ProcessIcon icon={block.icon} />
      </div>

      <div className="flex flex-col gap-1">
        <h3
          className="text-sm font-semibold tracking-tight"
          style={{ color: PROCESS_COLORS.textPrimary }}
        >
          {block.title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: PROCESS_COLORS.textSecondary }}
        >
          {block.description}
        </p>
      </div>
    </motion.div>
  );
});