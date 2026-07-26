// src/hooks/use-scroll-spy.ts

import { useState, useEffect, useCallback, useRef } from 'react';
import { SECTION_IDS } from '@/constants/navigation';
import type { ThemeMode, ScrollTarget } from '@/types/navigation';

export interface UseScrollSpyReturn {
  activeSection: string | null;
  themeMode: ThemeMode;
}

export function useScrollSpy(): UseScrollSpyReturn {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');
  const targetsRef = useRef<ScrollTarget[]>([]);

  const refreshTargets = useCallback(() => {
    targetsRef.current = SECTION_IDS.map((id) => {
      const element = document.getElementById(id);
      const isDark = element?.dataset.theme === undefined ? true : element.dataset.theme === 'dark';
      return { id, element, isDark };
    }).filter((t) => t.element !== null) as Array<ScrollTarget & { element: HTMLElement }>;
  }, []);

  useEffect(() => {
    refreshTargets();

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length === 0) return;

        const mostVisible = visibleEntries.reduce((prev, current) =>
          prev.intersectionRatio > current.intersectionRatio ? prev : current
        );

        const sectionId = mostVisible.target.id;

        setActiveSection(sectionId);

        const target = targetsRef.current.find((t) => t.id === sectionId);
        if (target) {
          setThemeMode(target.isDark ? 'dark' : 'light');
        }
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    targetsRef.current.forEach((target) => {
      if (target.element) observer.observe(target.element);
    });

    const handleMutation = () => refreshTargets();
    const mutationObserver = new MutationObserver(handleMutation);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [refreshTargets]);

  return { activeSection, themeMode };
}