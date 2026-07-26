// src/hooks/use-showcase-scroll.ts

import { useState, useEffect, useRef, useCallback } from 'react';
import { PROJECTS } from '@/constants/work';
import type { ScrollState } from '@/types/work';

export function useShowcaseScroll() {
  const [state, setState] = useState<ScrollState>({
    currentIndex: 0,
    progress: 0,
    direction: 'none',
    isInView: false,
  });
  const [sectionHeight, setSectionHeight] = useState<number>(0);
  const [trackDistance, setTrackDistance] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const distanceRef = useRef<number>(0);
  const sectionHeightRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const lastProgressRef = useRef<number>(0);

  const totalProjects = PROJECTS.length;
  const maxIndex = Math.max(totalProjects - 1, 0);

  const updateLayout = useCallback(() => {
    const trackEl = trackRef.current;
    if (!trackEl) return;

    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    const contentWidth = trackEl.scrollWidth;
    const distance = Math.max(contentWidth - viewportWidth, 0);
    const newSectionHeight = viewportHeight + distance;

    distanceRef.current = distance;
    setTrackDistance(distance);

    if (Math.abs(sectionHeightRef.current - newSectionHeight) > 1) {
      sectionHeightRef.current = newSectionHeight;
      setSectionHeight(newSectionHeight);
    }
  }, []);

  const updateScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const dist = distanceRef.current;

    const scrollOffset = -rect.top;
    const rawProgress = dist > 0 ? scrollOffset / dist : 0;
    const progress = Math.min(Math.max(rawProgress, 0), 1);

    const direction =
      progress > lastProgressRef.current
        ? 'down'
        : progress < lastProgressRef.current
        ? 'up'
        : 'none';

    lastProgressRef.current = progress;

    const currentIndex = maxIndex > 0 ? Math.round(progress * maxIndex) : 0;
    const isInView = rect.top < viewportHeight && rect.bottom > 0;

    setState((prevState) => {
      if (
        prevState.currentIndex === currentIndex &&
        Math.abs(prevState.progress - progress) < 0.0001 &&
        prevState.direction === direction &&
        prevState.isInView === isInView
      ) {
        return prevState;
      }

      return {
        currentIndex,
        progress,
        direction,
        isInView,
      };
    });
  }, [maxIndex]);

  useEffect(() => {
    updateLayout();

    const trackEl = trackRef.current;
    if (!trackEl) return;

    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(updateLayout);
    });

    resizeObserver.observe(trackEl);
    window.addEventListener('resize', updateLayout);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateLayout);
    };
  }, [updateLayout]);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateScroll);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [updateScroll]);

  const navigateTo = useCallback(
    (index: number) => {
      const container = containerRef.current;
      if (!container || index < 0 || index > maxIndex) return;

      const dist = distanceRef.current;
      const sectionTop = window.scrollY + container.getBoundingClientRect().top;
      const target = sectionTop + (dist / Math.max(maxIndex, 1)) * index;

      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    },
    [maxIndex]
  );

  return { state, containerRef, trackRef, sectionHeight, trackDistance, navigateTo, totalProjects };
}


