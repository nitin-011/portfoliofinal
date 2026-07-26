// src/hooks/use-count-up.ts

import { useState, useEffect, useRef } from 'react';

export function useCountUp(
  target: number,
  duration: number = 2000,
  startOnView: boolean = true
): { value: number; ref: React.RefObject<HTMLDivElement | null> } {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!startOnView) {
      animate();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target, duration, startOnView]);

  const animate = () => {
    const startTime = performance.now();
    const precision = Number.isInteger(target) ? 0 : 1;
    const scale = 10 ** precision;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const rawValue = eased * target;
      const nextValue = precision
        ? Math.round(rawValue * scale) / scale
        : Math.floor(rawValue);

      setValue(nextValue);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  return { value, ref };
}