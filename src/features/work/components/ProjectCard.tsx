// src/features/work/components/ProjectCard.tsx

import { memo, useCallback, useState } from 'react';
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
  const { imgRef, isLoaded: hookIsLoaded } = useProjectImage();
  const [imgLoaded, setImgLoaded] = useState(false);
  const isImageReady = hookIsLoaded || imgLoaded;

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

  const displayUrl = project.link
    ? project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : `${project.slug}.app`;

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
        {/* Project Image in Browser Window Frame */}
        <div
          onClick={handleClick}
          className={cn(
            'group/img relative flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-neutral-900/90 shadow-2xl transition-all duration-500 hover:border-white/30 cursor-pointer lg:flex-1 w-full',
            project.accent.imageBg
          )}
          title={`View ${project.headline} case study`}
        >
          {/* Window Chrome Header Bar */}
          <div className="flex h-8 w-full shrink-0 items-center justify-between border-b border-white/10 bg-black/50 px-3.5 backdrop-blur-md z-10">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex max-w-[200px] items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-0.5 text-[11px] font-mono text-white/50 border border-white/5 truncate">
              <svg className="h-2.5 w-2.5 shrink-0 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="truncate">{displayUrl}</span>
            </div>
            <div className="w-8" />
          </div>

          {/* Screenshot Container - Uses matching aspect ratio and object-contain so NO cropping occurs */}
          <div className="relative w-full aspect-[16/8.5] overflow-hidden bg-neutral-950 flex items-center justify-center p-1.5">
            {!isImageReady && (
              <div className="absolute inset-0 animate-pulse bg-white/5 flex items-center justify-center">
                <div className="h-6 w-6 rounded-full border-2 border-white/20 border-t-white animate-spin" />
              </div>
            )}
            <img
              ref={imgRef}
              src={project.image}
              alt={`${project.headline} project preview`}
              onLoad={() => setImgLoaded(true)}
              className={cn(
                'w-full h-full object-contain object-center rounded-lg transition-all duration-700 ease-out group-hover/img:scale-[1.01]',
                isImageReady ? 'opacity-100' : 'opacity-0'
              )}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Project Details */}
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
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-medium text-white/70 border border-white/10 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Action Button - View Case Study Only (Live link is on case study page) */}
          <div className="pt-2">
            <button
              onClick={handleClick}
              onKeyDown={handleKeyDown}
              className={cn(
                'inline-flex w-fit items-center rounded-full px-5 py-2.5 text-xs font-semibold sm:text-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent shadow-lg',
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
      </div>
    </motion.article>
  );
});
