// src/features/technologies/components/TechMarquee.tsx

import { memo, useState, useCallback } from 'react';
import { TechLogo } from '@/components/ui/TechLogo';
import { TECHNOLOGIES, MARQUEE_CONFIG } from '@/constants/technologies';
import { cn } from '@/utils/cn';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

export const TechMarquee = memo(function TechMarquee() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setHoveredTech(null);
  }, []);

  const handleTechHover = useCallback((id: string | null) => {
    setHoveredTech(id);
  }, []);

  // Duplicate technologies for seamless loop
  const allTechnologies = [...TECHNOLOGIES, ...TECHNOLOGIES];

  const animationDuration = reducedMotion
    ? '0s'
    : isHovered
      ? `${TECHNOLOGIES.length * (100 / MARQUEE_CONFIG.hoverSpeed)}s`
      : `${TECHNOLOGIES.length * (100 / MARQUEE_CONFIG.speed)}s`;

  return (
    <div
      className="group relative overflow-hidden py-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label="Technology marquee"
    >
      {/* Gradient masks for seamless edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-neutral-950 to-transparent" />

      <div
        className={cn(
          'flex w-max',
          !reducedMotion && 'animate-marquee'
        )}
        style={{
          animationDuration,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
      >
        {allTechnologies.map((tech, index) => (
          <div
            key={`${tech.id}-${index}`}
            className={cn(
              'mx-8 flex flex-col items-center gap-3 transition-all duration-300',
              hoveredTech && hoveredTech !== tech.id && 'opacity-40',
              hoveredTech === tech.id && '-translate-y-1'
            )}
            onMouseEnter={() => handleTechHover(tech.id)}
            onMouseLeave={() => handleTechHover(null)}
          >
            <TechLogo
              techId={tech.id}
              className={cn(
                'h-10 w-10 transition-transform duration-300',
                hoveredTech === tech.id && 'scale-110'
              )}
            />
            <span className="whitespace-nowrap text-sm font-medium text-white/60">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
});