// src/features/team/components/ConnectorLines.tsx

import { memo, useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TEAM_COLORS, TEAM_ANIMATION } from '@/constants/team';
import type { HierarchyLevel } from '@/types/team';

interface ConnectorLinesProps {
  levels: HierarchyLevel[];
}

interface ConnectorPath {
  id: string;
  d: string;
  delay: number;
}

export const ConnectorLines = memo(function ConnectorLines({ levels }: ConnectorLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [paths, setPaths] = useState<ConnectorPath[]>([]);

  useEffect(() => {
    const calculatePaths = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const newPaths: ConnectorPath[] = [];

      levels.forEach((level, levelIndex) => {
        if (levelIndex === levels.length - 1) return;

        const parentLevel = level;
        const childLevel = levels[levelIndex + 1];

        parentLevel.members.forEach((parent) => {
          childLevel.members.forEach((child, childIndex) => {
            const parentEl = document.getElementById(`member-${parent.id}`);
            const childEl = document.getElementById(`member-${child.id}`);

            if (!parentEl || !childEl) return;

            const parentRect = parentEl.getBoundingClientRect();
            const childRect = childEl.getBoundingClientRect();

            const parentX = parentRect.left + parentRect.width / 2 - containerRect.left;
            const parentY = parentRect.bottom - containerRect.top;
            const childX = childRect.left + childRect.width / 2 - containerRect.left;
            const childY = childRect.top - containerRect.top;

            const midY = (parentY + childY) / 2;

            const d = `M ${parentX} ${parentY} C ${parentX} ${midY}, ${childX} ${midY}, ${childX} ${childY}`;

            newPaths.push({
              id: `${parent.id}-${child.id}`,
              d,
              delay: (levelIndex + 1) * TEAM_ANIMATION.levelDelay + childIndex * 0.1,
            });
          });
        });
      });

      setPaths(newPaths);
    };

    calculatePaths();
    window.addEventListener('resize', calculatePaths);
    window.addEventListener('scroll', calculatePaths, { passive: true });

    return () => {
      window.removeEventListener('resize', calculatePaths);
      window.removeEventListener('scroll', calculatePaths);
    };
  }, [levels]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    >
      <svg className="h-full w-full" style={{ overflow: 'visible' }}>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            fill="none"
            stroke={TEAM_COLORS.connector}
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              pathLength: {
                duration: TEAM_ANIMATION.connectorDuration,
                delay: path.delay,
                ease: [0.16, 1, 0.3, 1],
              },
              opacity: {
                duration: 0.3,
                delay: path.delay,
              },
            }}
          />
        ))}
      </svg>
    </div>
  );
});