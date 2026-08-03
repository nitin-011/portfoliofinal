// src/components/ui/NavLink.tsx

import { memo, useCallback } from 'react';
import { cn } from '@/utils/cn';
import { scrollToElement } from '@/utils/scroll-to';
import type { ThemeMode } from '@/types/navigation';

interface NavLinkProps {
  id: string;
  label: string;
  target: string;
  ariaLabel: string;
  isActive: boolean;
  themeMode: ThemeMode;
  onNavigate?: () => void;
}

export const NavLink = memo(function NavLink({
  label,
  target,
  ariaLabel,
  isActive,
  themeMode,
  onNavigate,
}: NavLinkProps) {
  const handleClick = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();

      if (typeof window !== 'undefined' && window.location.pathname !== '/') {
        window.location.assign(`/${target}`);
        return;
      }

      await scrollToElement(target);
      onNavigate?.();
    },
    [target, onNavigate]
  );

  const textColor = themeMode === 'dark' ? 'text-white' : 'text-neutral-950';
  const hoverColor = themeMode === 'dark' ? 'hover:text-white/80' : 'hover:text-neutral-700';

  return (
    <a
      href={target}
      onClick={handleClick}
      aria-label={ariaLabel}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'group relative px-2 py-2 text-sm font-glacial font-normal uppercase tracking-[0.1em] transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
        textColor,
        hoverColor
      )}
      style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
    >
      {label}
      <span
        className={cn(
          'absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-0 transition-transform duration-300',
          isActive && 'scale-x-100',
          themeMode === 'dark' ? 'bg-white/60' : 'bg-neutral-900/60'
        )}
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        aria-hidden="true"
      />
      <span
        className={cn(
          'absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100',
          themeMode === 'dark' ? 'bg-white/40' : 'bg-neutral-900/40'
        )}
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        aria-hidden="true"
      />
    </a>
  );
});