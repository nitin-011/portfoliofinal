// src/hooks/use-custom-cursor.ts

import { useState, useEffect, useRef, useCallback } from 'react';
import { useMediaQuery } from './use-media-query';

interface CursorPosition {
  x: number;
  y: number;
}

export function useCustomCursor() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<CursorPosition>({ x: 0, y: 0 });
  const currentRef = useRef<CursorPosition>({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const isActiveRef = useRef(true);

  const isTouchDevice = useMediaQuery('(pointer: coarse)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  const lerp = useCallback((start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  }, []);

  const animate = useCallback(() => {
    if (!isActiveRef.current) return;

    const target = targetRef.current;
    const current = currentRef.current;

    current.x = lerp(current.x, target.x, 0.15);
    current.y = lerp(current.y, target.y, 0.15);

    setPosition({ x: current.x, y: current.y });

    rafRef.current = requestAnimationFrame(animate);
  }, [lerp]);

  useEffect(() => {
    if (isTouchDevice || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    isActiveRef.current = true;
    rafRef.current = requestAnimationFrame(animate);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      isActiveRef.current = false;
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isTouchDevice, prefersReducedMotion, animate, isVisible]);

  return { position, isVisible: isVisible && !isTouchDevice && !prefersReducedMotion };
}