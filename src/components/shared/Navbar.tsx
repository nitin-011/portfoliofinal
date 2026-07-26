// src/components/shared/Navbar.tsx

import { memo } from 'react';
import { Logo } from '@/assets/icons/Logo';
import { HamburgerButton } from '@/components/ui/HamburgerButton';
import { DesktopNav } from '@/components/shared/DesktopNav';
import { MobileNav } from '@/components/shared/MobileNav';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { useNavbarScroll } from '@/hooks/use-navbar-scroll';
import { useMobileMenu } from '@/hooks/use-mobile-menu';
import { useMediaQuery } from '@/hooks/use-media-query';
import { MOBILE_BREAKPOINT } from '@/constants/navigation';
import { cn } from '@/utils/cn';
import { CTAButton } from '../ui/CTAButton';

export const Navbar = memo(function Navbar() {
  const { activeSection, themeMode } = useScrollSpy();
  const { isScrolled } = useNavbarScroll(50);
  const { isOpen, toggle, close } = useMobileMenu();
  const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

  const headerClasses = isScrolled
    ? themeMode === 'light'
      ? 'border-black/10 bg-white/85 shadow-[0_10px_35px_rgba(0,0,0,0.08)] backdrop-blur-xl'
      : 'border-white/10 bg-neutral-950/80 shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-xl'
    : 'border-transparent bg-transparent';

  const textClass = themeMode === 'dark' ? 'text-white' : 'text-neutral-950';

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300',
          headerClasses
        )}
        style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        <div className={cn('mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8', textClass, 'transition-colors duration-300') }>
          <Logo
            themeMode={themeMode}
            className={cn(
              'mr-6 transition-opacity duration-250',
              isOpen && isMobile ? 'opacity-0' : 'opacity-100'
            )}
          />

          <DesktopNav activeSection={activeSection} themeMode={themeMode} />

          <div className="flex items-center gap-4 md:hidden">
            <CTAButton
              label="Book a Call"
              href="#contact"
              ariaLabel="Book a discovery call"
              variant="navbar"
              className={cn(
                'transition-opacity duration-250',
                isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
              )}
            />
            <HamburgerButton
              isOpen={isOpen}
              onClick={toggle}
              themeMode={isScrolled ? themeMode : 'dark'}
            />
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={isOpen}
        activeSection={activeSection}
        themeMode={themeMode}
        onClose={close}
      />

      <div className="h-20" aria-hidden="true" />
    </>
  );
});