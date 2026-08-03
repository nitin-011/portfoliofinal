// src/features/team/components/WorkplaceCard.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';

interface WorkplaceCardProps {
  workplace: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    tags: string[];
  };
}

export const WorkplaceCard = memo(function WorkplaceCard({ workplace }: WorkplaceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-3xl bg-white border border-[#EAE4D8] p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(198,146,20,0.12)] transition-all duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* Landscape Image Container (7 cols on LG) */}
        <div className="lg:col-span-7 relative overflow-hidden rounded-2xl border border-amber-200/60 shadow-md group">
          <div className="aspect-[16/9] w-full overflow-hidden bg-amber-50">
            <img
              src={workplace.image}
              alt={workplace.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          {/* Badge Overlay */}
          <div className="absolute top-3 left-3 bg-zinc-900/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-lg">
            Workplace & Culture
          </div>
        </div>

        {/* Content Side (5 cols on LG) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-2">
            Workplace
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold font-glacial text-zinc-900 mb-3 leading-snug">
            {workplace.title}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-amber-700/90 mb-3">
            {workplace.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
            {workplace.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {workplace.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-zinc-700 bg-[#FAF7F0] border border-amber-200/70 px-3 py-1.5 rounded-full"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
});
