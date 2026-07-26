// src/features/work/components/WorkShowcase.tsx

import { memo } from 'react';
import { useShowcaseScroll } from '@/hooks/use-showcase-scroll';
import { PROJECTS } from '@/constants/work';
import { ProjectCard } from './ProjectCard';
import { ProgressIndicator } from './ProgressIndicator';

export const WorkShowcase = memo(function WorkShowcase() {
  const { state, containerRef, trackRef, sectionHeight, trackDistance, navigateTo, totalProjects } = useShowcaseScroll();
  const translateX = trackDistance ? -(state.progress * trackDistance) : 0;

  return (
    <>
      <section
        ref={containerRef}
        className="relative overflow-hidden bg-[#050505]"
        style={{ height: sectionHeight || '100vh' }}
        role="region"
        aria-label="Project showcase"
      >
        <div className="sticky top-0 z-10 h-screen overflow-hidden">
          <div className="absolute inset-0 bg-[#050505]" />
          <div
            ref={trackRef}
            className="relative flex w-max h-full items-center gap-6 px-4 py-16 sm:px-6 lg:px-8 will-change-transform"
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
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />
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

