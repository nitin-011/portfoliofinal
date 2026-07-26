// src/components/shared/MobileNav.tsx

import { memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from '@/components/ui/NavLink';
import { CTAButton } from '@/components/ui/CTAButton';
import { NAV_CONFIG } from '@/constants/navigation';
import { cn } from '@/utils/cn';
import type { ThemeMode } from '@/types/navigation';

interface MobileNavProps {
  isOpen: boolean;
  activeSection: string | null;
  themeMode: ThemeMode;
  onClose: () => void;
}

const overlayVariants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
};

const menuVariants = {
  hidden: {
    x: '100%',
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
  visible: {
    x: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 + i * 0.05,
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const MobileNav = memo(function MobileNav({
  isOpen,
  activeSection,
  themeMode,
  onClose,
}: MobileNavProps) {
  const handleNavigate = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-40 bg-neutral-950/60 backdrop-blur-sm md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            id="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={cn(
              'fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col justify-center',
              'bg-neutral-900 shadow-2xl md:hidden'
            )}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col items-center gap-2 px-8"
            >
              {NAV_CONFIG.links.map((link, index) => (
                <motion.div
                  key={link.id}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="w-full text-center"
                >
                  <NavLink
                    id={link.id}
                    label={link.label}
                    target={link.target}
                    ariaLabel={link.ariaLabel}
                    isActive={activeSection === link.id}
                    themeMode={themeMode}
                    onNavigate={handleNavigate}
                  />
                </motion.div>
              ))}

              <motion.div
                custom={NAV_CONFIG.links.length}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="mt-8 w-full"
              >
                <CTAButton
                  label={NAV_CONFIG.cta.label}
                  href={NAV_CONFIG.cta.href}
                  ariaLabel={NAV_CONFIG.cta.ariaLabel}
                  variant="section"
                  onClick={handleNavigate}
                  className="w-full"
                />
              </motion.div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});