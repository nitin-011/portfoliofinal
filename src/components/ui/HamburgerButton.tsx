// src/components/ui/HamburgerButton.tsx

import { memo } from 'react';
import { cn } from '@/utils/cn';

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  ariaLabel?: string;
  themeMode?: 'dark' | 'light';
}

export const HamburgerButton = memo(function HamburgerButton({
  isOpen,
  onClick,
  ariaLabel = 'Toggle navigation menu',
  themeMode = 'dark',
}: HamburgerButtonProps) {
  const lineColor = themeMode === 'dark' ? 'bg-white' : 'bg-neutral-900';

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      className="relative flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20 md:hidden"
    >
      <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
      <span className="relative flex h-5 w-6 flex-col justify-between">
        <span
          className={cn(
            'block h-[1.5px] w-full origin-center transition-all duration-300',
            lineColor,
            isOpen && 'translate-y-[9px] rotate-45'
          )}
          style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
        />
        <span
          className={cn(
            'block h-[1.5px] w-full transition-all duration-300',
            lineColor,
            isOpen && 'opacity-0 scale-x-0'
          )}
          style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
        />
        <span
          className={cn(
            'block h-[1.5px] w-full origin-center transition-all duration-300',
            lineColor,
            isOpen && '-translate-y-[9px] -rotate-45'
          )}
          style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
        />
      </span>
    </button>
  );
});