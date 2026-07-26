// src/features/technologies/components/TechnologiesSection.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { TECHNOLOGIES } from '@/constants/technologies';
import { TechLogo } from '@/components/ui/TechLogo';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import { TechMarquee } from './TechMarquee';
import { useCountUp } from '@/hooks/use-count-up';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

const STATISTICS = [
  {
    label: 'Projects Delivered',
    value: 30,
    suffix: '+',
  },
  {
    label: 'Years of Experience',
    value: 3.5,
    suffix: '',
  },
];

export const TechnologiesSection = memo(function TechnologiesSection() {
  const reducedMotion = useReducedMotion();
  const projectsCount = useCountUp(STATISTICS[0].value, 1800, false).value;
  const experienceCount = useCountUp(STATISTICS[1].value, 1800, false).value;

  return (
    <section
      id="technologies"
      data-theme="dark"
      className="relative overflow-hidden py-12 lg:h-screen lg:py-0"
      style={{ backgroundColor: '#050505' }}
      aria-labelledby="technologies-heading"
    >
      {/* Particle Background — match hero */}
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>

      {/* Diagonal gradient overlay for depth (same as hero) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1), transparent 14%), ' +
            'radial-gradient(circle at 85% 15%, rgba(255,255,255,0.06), transparent 10%), ' +
            'linear-gradient(135deg, rgba(8, 10, 16, 0.5) 0%, rgba(3, 4, 8, 0.85) 60%, rgba(2, 2, 6, 0.96) 100%)',
        }}
        aria-hidden="true"
      />
      <div className="mx-auto grid h-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-start lg:justify-items-end lg:px-8">
        <motion.div
          className="flex flex-col justify-start pt-10 lg:pt-20 lg:items-end lg:text-right"
          initial={reducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
        <div className="mb-6 flex flex-col items-center gap-2 lg:items-end">
          <div className="flex flex-wrap items-baseline justify-center gap-3">
            <span className="font-glacial text-3xl sm:text-4xl md:text-5xl">
              Technologies
            </span>

            <span className="font-playfair text-3xl sm:text-4xl md:text-5xl text-yellow-400">
              We
            </span>
          </div>

          <span className="block font-glacial text-3xl sm:text-4xl md:text-5xl">
            Use
          </span>
        </div>
          <p className="mb-10 max-w-3xl text-justify text-base leading-8 text-white/70 sm:text-lg">
            Atior Technologies partners with ambitious founders and forward thinking businesses to architect, build, and scale web applications that define markets. From SaaS platforms to enterprise grade software systems, we transform complex challenges into elegant, high-performance solutions engineered for growth.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-3xl">
              <div className="text-3xl font-semibold tracking-tight text-white sm:text-6xl">
                {projectsCount.toLocaleString()}
                <span className="ml-1 text-3xl font-medium text-white/60">{STATISTICS[0].suffix}</span>
              </div>
              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-white/50">
                {STATISTICS[0].label}
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-3xl">
              <div className="text-3xl font-semibold tracking-tight text-white sm:text-6xl">
                  {typeof experienceCount === 'number' && !Number.isInteger(experienceCount) ? experienceCount.toFixed(1) : experienceCount}
                </div>
              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-white/50">
                {STATISTICS[1].label}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hidden h-full items-start lg:flex lg:justify-end"
          initial={reducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <div className="w-full rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-[0_40px_100px_rgba(0,0,0,0.22)] backdrop-blur-3xl">
            <div className="mb-8 flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-neutral-950/60 px-5 py-4 text-white/70">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Technology stack</p>
                <p className="mt-2 text-sm text-white/70">A premium set of tools that powers every product.</p>
              </div>
              <span className="rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">2026</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {TECHNOLOGIES.map((tech) => (
                <div
                  key={tech.id}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-white/20 hover:bg-white/10"
                >
                  <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-3xl bg-white/10 text-white/90">
                    <TechLogo techId={tech.logo} className="h-10 w-10" />
                  </div>
                  <p className="text-xs font-semibold text-white">{tech.name}</p>
                  <p className="mt-1 text-xs text-white/30">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-10 lg:hidden px-4 sm:px-6 lg:px-8">
        <TechMarquee />
      </div>
    </section>
  );
});