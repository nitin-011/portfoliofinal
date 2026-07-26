// src/components/shared/DesktopNav.tsx

import { memo } from 'react';
import { NavLink } from '@/components/ui/NavLink';
import { CTAButton } from '@/components/ui/CTAButton';
import { NAV_CONFIG } from '@/constants/navigation';
import type { ThemeMode } from '@/types/navigation';

interface DesktopNavProps {
  activeSection: string | null;
  themeMode: ThemeMode;
}

export const DesktopNav = memo(function DesktopNav({
  activeSection,
  themeMode,
}: DesktopNavProps) {
  return (
    <div className="hidden items-center gap-8 md:flex">
      <nav aria-label="Main navigation" className="flex items-center gap-1">
        {NAV_CONFIG.links.map((link) => (
          <div key={link.id} className="group">
            <NavLink
              id={link.id}
              label={link.label}
              target={link.target}
              ariaLabel={link.ariaLabel}
              isActive={activeSection === link.id}
              themeMode={themeMode}
            />
          </div>
        ))}
      </nav>

      <CTAButton
        label={NAV_CONFIG.cta.label}
        href={NAV_CONFIG.cta.href}
        ariaLabel={NAV_CONFIG.cta.ariaLabel}
        variant="navbar"
      />
    </div>
  );
});