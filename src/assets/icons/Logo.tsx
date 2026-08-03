// src/assets/icons/Logo.tsx

import { memo } from 'react';
import { NAV_CONFIG } from '@/constants/navigation';
import type { ThemeMode } from '@/types/navigation';

interface LogoProps {
  className?: string;
  themeMode?: ThemeMode;
}

export const Logo = memo(function Logo({
  className = '',
  themeMode = 'dark',
}: LogoProps) {
  const textColor = themeMode === 'dark' ? 'text-white' : 'text-neutral-950';

  return (
    <a
      href="/"
      aria-label={NAV_CONFIG.logo.ariaLabel}
      className={`inline-flex items-center ${className}`}
    >
      <span className={`font-glacial text-[0.98rem] font-normal uppercase tracking-[0.28em] transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${textColor}`}>
        {NAV_CONFIG.logo.alt}
      </span>
    </a>
  );
});