// src/features/work/components/WorkSection.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { WORK_SECTION_COPY, PROJECTS } from '@/constants/work';
import { ProjectCard } from './ProjectCard';
import { ProgressIndicator } from './ProgressIndicator';
import { useShowcaseScroll } from '@/hooks/use-showcase-scroll';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

export const WorkSection = memo(function WorkSection() {
  const reducedMotion = useReducedMotion();
  const { state, containerRef, trackRef, sectionHeight, trackDistance, navigateTo, totalProjects } = useShowcaseScroll();
  const translateX = trackDistance ? -(state.progress * trackDistance) : 0;

  return (
    <>
      <section
        id="our-work"
        ref={containerRef}
        data-theme="dark"
        className="relative bg-[#050505]"
        style={{ height: sectionHeight ? `${sectionHeight}px` : '100vh' }}
        aria-labelledby="work-heading"
      >
        <div className="sticky top-0 z-10 flex h-screen flex-col overflow-hidden bg-[#050505]">
          <div className="absolute inset-0 bg-[#050505]" />

          {/* Section Header */}
          <div className="relative z-10 px-4 pt-20 pb-2 sm:px-6 sm:pt-22 lg:px-8 shrink-0">
            <motion.div
              className="mx-auto max-w-4xl text-center"
              initial={reducedMotion ? undefined : { opacity: 0, y: 30 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2
                id="work-heading"
                className="mb-2 text-3xl tracking-tight sm:text-4xl lg:text-5xl"
              >
                <span className="font-glacial font-semibold text-white">Our </span>
                <span className="font-playfair font-semibold text-yellow-400">Work</span>
              </h2>
              <p className="mx-auto max-w-2xl text-xs sm:text-sm lg:text-base leading-relaxed text-white/70 text-center sm:text-justify text-balance">
                {WORK_SECTION_COPY.subtitle}
              </p>
            </motion.div>
          </div>

          {/* Horizontal Track Container */}
          <div className="relative flex-1 overflow-hidden flex items-center">
            <div
              ref={trackRef}
              className="relative flex w-max items-center gap-6 px-4 py-4 sm:px-6 lg:px-8 will-change-transform"
              style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
            >
              {PROJECTS.map((project, index) => (
                <div
                  key={project.id}
                  className="relative flex min-w-[80vw] max-w-[80vw] shrink-0 lg:min-w-[58vw] lg:max-w-[58vw]"
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    total={totalProjects}
                    isActive={state.currentIndex === index}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050505] to-transparent z-20" />
        </div>
      </section>

      <ProgressIndicator
        projects={PROJECTS}
        currentIndex={state.currentIndex}
        onNavigate={navigateTo}
      />
    </>
  );
});