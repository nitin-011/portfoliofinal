// src/features/team/components/TeamSection.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { TEAM_SECTION, TEAM_COLORS } from '@/constants/team';
import { SectionHeaderTag } from './SectionHeaderTag';
import { MemberCard } from './MemberCard';
import { CoreTeamCard } from './CoreTeamCard';
import { WorkplaceCard } from './WorkplaceCard';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

export const TeamSection = memo(function TeamSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="our-team"
      data-theme="light"
      className="relative py-16 sm:py-24 lg:py-32 font-glacial"
      style={{ backgroundColor: TEAM_COLORS.bg }}
      aria-labelledby="team-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TOP SECTION: Grid matching Reference Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Heading & Stat Badge */}
          <motion.div
            className="lg:col-span-3 flex flex-col justify-between py-2"
            initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-600 mb-2">
                {TEAM_SECTION.tagline}
              </p>
              <h2 id="team-heading" className="text-3xl sm:text-4xl lg:text-5xl font-glacial tracking-tight text-zinc-900 mb-5 leading-tight">
                <span>{TEAM_SECTION.headingMain} </span>
                <span className="font-glacial font-normal block sm:inline">
                  {TEAM_SECTION.headingAccent}
                </span>
              </h2>
              <p className="text-xs text-justify sm:text-sm text-zinc-600 leading-relaxed mb-6">
                {TEAM_SECTION.subtitle}
              </p>
            </div>

            {/* Stat Badge */}
            <div className="flex items-center gap-3.5 rounded-2xl bg-white border border-amber-200/80 p-4 shadow-sm w-fit mt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 shrink-0">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xl font-bold text-zinc-900 leading-none">
                  {TEAM_SECTION.totalPeopleBadge.stat}
                </p>
                <p className="text-[11px] text-zinc-500 font-medium mt-1">
                  {TEAM_SECTION.totalPeopleBadge.label}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Middle Column 1: Mentor */}
          <motion.div
            className="lg:col-span-4 flex flex-col"
            initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SectionHeaderTag label={TEAM_SECTION.mentor.sectionTag} />
            <div className="mt-4 flex-1">
              <MemberCard member={TEAM_SECTION.mentor} isFeatured={true} />
            </div>
          </motion.div>

          {/* Middle Column 2: Leadership (3 Cards) */}
          <motion.div
            className="lg:col-span-5 flex flex-col"
            initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionHeaderTag label={TEAM_SECTION.leadershipTag} />
            <div className="grid grid-cols-1 gap-4 mt-4">
              {TEAM_SECTION.leadership.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </motion.div>

        </div>

        {/* MIDDLE ROW: Our Core Teams */}
        <div className="mt-16 sm:mt-24">
          <SectionHeaderTag label={TEAM_SECTION.coreTeamsTag} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {TEAM_SECTION.coreTeams.map((team, idx) => (
              <motion.div
                key={team.id}
                initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <CoreTeamCard team={team} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* WORKPLACE LANDSCAPE SECTION */}
        <motion.div
          className="mt-16 sm:mt-24"
          initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeaderTag label={TEAM_SECTION.workplaceTag} />
          <div className="mt-6">
            <WorkplaceCard workplace={TEAM_SECTION.workplace} />
          </div>
        </motion.div>

        {/* Footer Quote Statement */}
        <motion.p
          className="mx-auto mt-16 max-w-3xl text-center text-xs sm:text-sm text-zinc-600 leading-relaxed font-glacial"
          initial={reducedMotion ? undefined : { opacity: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {TEAM_SECTION.trustStatement}
        </motion.p>
      </div>
    </section>
  );
});