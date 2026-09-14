// src/features/work/pages/ProjectCaseStudy.tsx

import { memo, useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/constants/work';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { CTAButton } from '@/components/ui/CTAButton';
import { cn } from '@/utils/cn';

export const ProjectCaseStudy = memo(function ProjectCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const reducedMotion = useReducedMotion();

  const project = useMemo(() => {
    return PROJECTS.find((p) => p.slug === slug);
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={cn(project.accent.bg, 'min-h-screen text-white')}>
      {/* Hero */}
      <section className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-5xl"
          initial={reducedMotion ? undefined : { opacity: 0, y: 40 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            to="/#our-work"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Projects
          </Link>

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
              Case Study
            </span>
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-white/10 px-3 py-0.5 text-xs font-medium text-white/80 border border-white/10 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {project.headline}
          </h1>

          <p className="mb-8 max-w-3xl text-lg sm:text-xl leading-relaxed text-white/70">
            {project.description}
          </p>

          {project.link && (
            <div className="mb-10 flex flex-wrap items-center gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:scale-[1.02] hover:shadow-xl',
                  project.accent.ctaBg,
                  project.accent.ctaText,
                  project.accent.ctaHover
                )}
              >
                <span>Visit Live Platform</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <span className="text-xs text-white/50 font-mono">
                {project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
              </span>
            </div>
          )}

          {/* Project Image in High-Fidelity Browser Window Frame */}
          <div
            className={cn(
              'relative w-full overflow-hidden rounded-3xl border border-white/15 bg-neutral-950 shadow-[0_32px_90px_rgba(0,0,0,0.65)] ring-1 ring-white/10',
              project.accent.imageBg
            )}
          >
            {/* Window Header */}
            <div className="flex h-10 w-full items-center justify-between border-b border-white/10 bg-black/50 px-4 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex max-w-[320px] items-center gap-2 rounded-lg bg-white/5 px-3 py-1 text-xs font-mono text-white/60 border border-white/5 truncate">
                <svg className="h-3 w-3 shrink-0 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="truncate">
                  {project.link ? project.link.replace(/^https?:\/\//, '').replace(/\/$/, '') : `${project.slug}.app`}
                </span>
              </div>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/60 hover:text-white transition-colors"
                  title="Open live site in new tab"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                <div className="w-4" />
              )}
            </div>

            {/* Image Preview */}
            <div className="relative w-full bg-neutral-950 flex items-center justify-center p-2 sm:p-3">
              <img
                src={project.image}
                alt={`${project.headline} full preview`}
                className="w-full h-auto max-h-[720px] object-contain object-center rounded-xl"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold text-white">The Challenge</h2>
          <p className="mb-12 text-lg leading-relaxed text-white/60">
            {project.challenge ||
              'Detailed challenge content is being updated to showcase the full scope of our problem-solving process and strategic insights.'}
          </p>

          <h2 className="mb-6 text-3xl font-bold text-white">Our Approach</h2>
          <p className="mb-12 text-lg leading-relaxed text-white/60">
            {project.approach ||
              'Our engineering and design methodology for this project represents our commitment to scalable architecture, innovative design, and flawless execution.'}
          </p>

          <h2 className="mb-6 text-3xl font-bold text-white">Results</h2>
          <p className="mb-12 text-lg leading-relaxed text-white/60">
            {project.results ||
              'The implementation delivered exceptional performance metrics, overwhelming user satisfaction, and significant business growth for our partners.'}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <CTAButton
              label="Start Your Project"
              href="/#contact"
              ariaLabel="Book a discovery call"
              variant="section"
            />
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20 hover:border-white/30"
              >
                <span>Visit Live Platform</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
});
