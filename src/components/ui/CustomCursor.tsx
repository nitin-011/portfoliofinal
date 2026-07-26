// src/components/ui/CustomCursor.tsx

import { memo, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

export const CustomCursor = memo(function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const reducedMotion = useReducedMotion();
  const rafRef = useRef<number>(0);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check for touch device
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice || reducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect hover on interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor-hover]');
      setIsHovering(!!isInteractive);
    };

    const animate = () => {
      const target = targetRef.current;
      const current = currentRef.current;

      // Smooth lerp
      current.x += (target.x - current.x) * 0.15;
      current.y += (target.y - current.y) * 0.15;

      setPosition({ x: current.x, y: current.y });
      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousemove', handleElementHover);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemove', handleElementHover);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible, reducedMotion]);

  if (!isVisible || reducedMotion) return null;

  return (
    <>
      {/* Main dot */}
      <div
        className="pointer-events-none fixed z-[9999] mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className="rounded-full bg-white transition-all duration-150 ease-out"
          style={{
            width: isHovering ? 40 : 12,
            height: isHovering ? 40 : 12,
            opacity: 0.9,
            boxShadow: '0 0 20px rgba(255,255,255,0.3)',
          }}
        />
      </div>

      {/* Subtle trailing ring */}
      <div
        className="pointer-events-none fixed z-[9998]"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease',
          width: isHovering ? 56 : 32,
          height: isHovering ? 56 : 32,
        }}
      >
        <div
          className="h-full w-full rounded-full border border-white/20"
          style={{
            opacity: isHovering ? 0.6 : 0.3,
          }}
        />
      </div>
    </>
  );
});