// src/components/ui/ProcessIcon.tsx

import { memo } from 'react';

interface ProcessIconProps {
  icon: string;
  className?: string;
}

const ICON_PATHS: Record<string, React.ReactNode> = {
  users: (
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  calendar: (
    <path d="M1 4h22M1 8h22M8 1v4M16 1v4M4 21h16a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  shield: (
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  zap: (
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  message: (
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  code: (
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  check: (
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  clock: (
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

export const ProcessIcon = memo(function ProcessIcon({
  icon,
  className = '',
}: ProcessIconProps) {
  const path = ICON_PATHS[icon] || ICON_PATHS['check'];

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={`h-5 w-5 ${className}`}
      aria-hidden="true"
    >
      {path}
    </svg>
  );
});