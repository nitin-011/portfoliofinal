// src/features/work/components/ProgressIndicator.tsx

import { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import type { Project } from '@/types/work';

interface ProgressIndicatorProps {
  projects: Project[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const ProgressIndicator = memo(function ProgressIndicator({
  projects,
  currentIndex,
  onNavigate,
}: ProgressIndicatorProps) {
  const handleClick = useCallback(
    (index: number) => {
      onNavigate(index);
    },
    [onNavigate]
  );

  return (
    <nav
      className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
      aria-label="Project navigation"
    >
      {projects.map((project, index) => (
        <button
          key={project.id}
          onClick={() => handleClick(index)}
          className="group relative flex items-center justify-end"
          aria-label={`Go to ${project.headline}`}
          aria-current={index === currentIndex ? 'true' : undefined}
        >
          <span className="mr-3 text-xs font-medium text-white/0 transition-colors duration-200 group-hover:text-white/70">
            {project.headline}
          </span>
          <motion.div
            className={cn(
              'h-2 w-2 rounded-full transition-all duration-300',
              index === currentIndex
                ? 'bg-white scale-125'
                : 'bg-white/30 hover:bg-white/50'
            )}
            animate={index === currentIndex ? { scale: 1.25 } : { scale: 1 }}
          />
        </button>
      ))}
    </nav>
  );
});