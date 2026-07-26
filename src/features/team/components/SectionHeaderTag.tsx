// src/features/team/components/SectionHeaderTag.tsx

import { memo } from 'react';

interface SectionHeaderTagProps {
  label: string;
}

export const SectionHeaderTag = memo(function SectionHeaderTag({ label }: SectionHeaderTagProps) {
  return (
    <div className="flex items-center justify-center gap-4 my-6">
      <div className="h-[1px] w-12 sm:w-20 bg-amber-400/40" />
      <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-amber-600 font-glacial">
        {label}
      </span>
      <div className="h-[1px] w-12 sm:w-20 bg-amber-400/40" />
    </div>
  );
});
