// src/components/ui/ScrollIndicator.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

export const ScrollIndicator = memo(function ScrollIndicator() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
      <motion.div
        className="flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
          Scroll
        </span>
        <div className="relative h-8 w-[1px] overflow-hidden bg-white/10">
          {!reducedMotion && (
            <motion.div
              className="absolute left-0 top-0 h-4 w-full bg-white/50"
              animate={{ y: [0, 32] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          )}
        </div>
      </motion.div>
    </div>
  );
});