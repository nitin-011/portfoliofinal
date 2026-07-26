// src/hooks/use-navbar-scroll.ts

import { useState, useEffect, useCallback, useRef } from 'react';

export interface UseNavbarScrollReturn {
  isScrolled: boolean;
  scrollY: number;
}

export function useNavbarScroll(threshold: number = 50): UseNavbarScrollReturn {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) return;

    rafRef.current = requestAnimationFrame(() => {
      const currentY = window.scrollY;
      lastScrollY.current = currentY;
      setScrollY(currentY);
      setIsScrolled(currentY > threshold);
      rafRef.current = null;
    });
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  return { isScrolled, scrollY };
}