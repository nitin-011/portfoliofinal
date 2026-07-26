// src/components/ui/CTAButton.tsx

import { memo, useCallback } from 'react';
import { cn } from '@/utils/cn';
import { scrollToElement } from '@/utils/scroll-to';

interface CTAButtonProps {
  label: string;
  href: string;
  ariaLabel: string;
  variant?: 'navbar' | 'section';
  onClick?: () => void;
  className?: string;
}

export const CTAButton = memo(function CTAButton({
  label,
  href,
  ariaLabel,
  variant = 'navbar',
  onClick,
  className = '',
}: CTAButtonProps) {
  const handleClick = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();
      if (onClick) {
        onClick();
      }

      if (typeof window !== 'undefined' && window.location.pathname !== '/') {
        window.location.assign(`/${href}`);
        return;
      }

      await scrollToElement(href);
    },
    [href, onClick]
  );

  const isNavbar = variant === 'navbar';

  return (
    <a
      href={href}
      onClick={handleClick}
      aria-label={ariaLabel}
      className={cn(
        'inline-flex items-center justify-center rounded-full font-anton font-medium uppercase tracking-[0.12em] transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
        'bg-[#D4AF37] text-neutral-900 shadow-[0_14px_35px_rgba(212,175,55,0.26)] hover:bg-[#B8962E]',
        'focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:ring-offset-2 focus:ring-offset-transparent',
        isNavbar ? 'px-5 py-2.5 text-[0.72rem]' : 'px-6 py-3 text-sm',
        className
      )}
      style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
    >
      {label}
    </a>
  );
});