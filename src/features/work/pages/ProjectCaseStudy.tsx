// src/features/work/pages/ProjectCaseStudy.tsx

import { memo, useMemo } from 'react';
import { useParams, Navigate } from 'react-router';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/constants/work';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { CTAButton } from '@/components/ui/CTAButton';

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
    <div className={project.accent.bg}>
      {/* Hero */}
      <section className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-5xl"
          initial={reducedMotion ? undefined : { opacity: 0, y: 40 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="mb-6 inline-block text-sm font-medium uppercase tracking-[0.2em] text-white/50"
          >
            Case Study
          </span>
          <h1 className="mb-8 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {project.headline}
          </h1>
          <p className="mb-12 max-w-3xl text-xl leading-relaxed text-white/70">
            {project.description}
          </p>

          {/* Project Image */}
          <div
            className={cn(
              'aspect-[16/9] w-full overflow-hidden rounded-3xl',
              project.accent.imageBg
            )}
          >
            <img
              src={project.image}
              alt={`${project.headline} full preview`}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </motion.div>
      </section>

      {/* Content Placeholder */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold text-white">The Challenge</h2>
          <p className="mb-12 text-lg leading-relaxed text-white/60">
            Detailed case study content would be loaded from CMS here. This
            architecture supports rich text, image galleries, metrics, and
            testimonials.
          </p>

          <h2 className="mb-6 text-3xl font-bold text-white">Our Approach</h2>
          <p className="mb-12 text-lg leading-relaxed text-white/60">
            Architecture decisions, tech stack, and engineering methodology
            would be documented here with code snippets and diagrams.
          </p>

          <h2 className="mb-6 text-3xl font-bold text-white">Results</h2>
          <p className="mb-12 text-lg leading-relaxed text-white/60">
            Performance metrics, business outcomes, and client testimonials
            would be presented here with data visualization.
          </p>

          <div className="flex gap-4">
            <CTAButton
              label="Start Your Project"
              href="#contact"
              ariaLabel="Book a discovery call"
              variant="section"
            />
          </div>
        </div>
      </section>
    </div>
  );
});

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}