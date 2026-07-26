// src/features/work/components/ProjectCard.tsx

import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { useProjectImage } from '@/hooks/use-project-image';
import { cn } from '@/utils/cn';
import type { Project } from '@/types/work';

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
  isActive: boolean;
}

export const ProjectCard = memo(function ProjectCard({
  project,
  index,
  total,
  isActive,
}: ProjectCardProps) {
  const navigate = useNavigate();
  const { imgRef, isLoaded } = useProjectImage();

  const handleClick = useCallback(() => {
    navigate(`/projects/${project.slug}`);
  }, [navigate, project.slug]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick();
      }
    },
    [handleClick]
  );

  return (
    <motion.article
      className="group relative flex min-w-full justify-center"
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0.9,
        scale: isActive ? 1 : 0.98,
      }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      role="article"
      aria-label={`${project.headline} project showcase`}
    >
      <div
        className={cn(
          'flex w-full max-w-[1360px] flex-col gap-6 rounded-[2rem] border border-white/10 bg-slate-950/95 p-5 shadow-[0_42px_120px_rgba(0,0,0,0.55)] ring-1 ring-white/10 backdrop-blur-2xl transition-all duration-700 lg:flex-row lg:items-center lg:p-7 xl:p-8',
          project.accent.border
        )}
      >
        <div className="relative overflow-hidden rounded-[1.75rem] h-48 sm:h-60 lg:h-[300px] xl:h-[340px] lg:flex-1">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/75" />
          {!isLoaded && <div className="absolute inset-0 animate-pulse bg-white/5" />}
          <img
            ref={imgRef}
            src={project.image}
            alt={`${project.headline} project preview`}
            className={cn(
              'relative h-full w-full object-cover transition-all duration-700',
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="flex flex-col justify-between gap-4 lg:w-[45%]">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/50">
              {`Project ${index + 1} of ${total}`}
            </p>
            <h3
              className={cn(
                'font-glacial text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl',
                project.accent.text
              )}
            >
              {project.headline}
            </h3>
            <p className="text-xs leading-relaxed text-white/70 sm:text-sm lg:text-base">
              {project.description}
            </p>
          </div>

          <button
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            className={cn(
              'inline-flex w-fit items-center rounded-full px-5 py-2.5 text-xs font-semibold sm:text-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent',
              project.accent.ctaBg,
              project.accent.ctaText,
              project.accent.ctaHover
            )}
            aria-label={`View case study for ${project.headline}`}
          >
            View Case Study
            <svg
              className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.article>
  );
});
