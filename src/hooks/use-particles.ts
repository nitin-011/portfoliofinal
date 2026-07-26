// src/hooks/use-particles.ts

import { useEffect, useRef, useCallback } from 'react';
import { PARTICLE_CONFIG } from '@/constants/hero';
import type { Particle, ParticleConfig } from '@/types/hero';

function hexToRgb(hex: string) {
  if (!hex) return null;
  const h = hex.replace('#', '');
  if (h.length !== 6) return null;
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}

function createParticles(
  width: number,
  height: number,
  config: ParticleConfig
): Particle[] {
  const centerX = width / 2;
  const centerY = height / 2;
  const sphereRadius = Math.min(width, height) * 0.35;

  return Array.from({ length: config.count }, () => {
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * sphereRadius;
    const x = centerX + Math.cos(angle) * distance;
    const y = centerY + Math.sin(angle) * distance;

    return {
      x,
      y,
      baseX: x,
      baseY: y,
      size: config.sizeRange[0] + Math.random() * (config.sizeRange[1] - config.sizeRange[0]),
      opacity: config.opacityRange[0] + Math.random() * (config.opacityRange[1] - config.opacityRange[0]),
      speedX: (Math.random() - 0.5) * config.baseSpeed,
      speedY: (Math.random() - 0.5) * config.baseSpeed,
      angle: Math.random() * Math.PI * 2,
      angleSpeed: (Math.random() - 0.5) * 0.002,
      radius: distance,
    };
  });
}

export function useParticles(overrideConfig?: Partial<ParticleConfig>) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);
  const isActiveRef = useRef(true);

  const config = { ...PARTICLE_CONFIG, ...overrideConfig };

  const animate = useCallback(() => {
    if (!isActiveRef.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas;
    const centerX = width / 2;
    const centerY = height / 2;
    const { mouseRadius, connectionDistance } = config;

    ctx.clearRect(0, 0, width, height);

    const particles = particlesRef.current;
    const mouse = mouseRef.current;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Gentle orbital motion
      p.angle += p.angleSpeed;
      const orbitX = centerX + Math.cos(p.angle) * p.radius;
      const orbitY = centerY + Math.sin(p.angle) * p.radius;

      // Base drift
      p.baseX += p.speedX;
      p.baseY += p.speedY;

      // Boundary wrapping
      const sphereRadius = Math.min(width, height) * 0.35;
      const dx = p.baseX - centerX;
      const dy = p.baseY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > sphereRadius) {
        const angle = Math.atan2(dy, dx);
        p.baseX = centerX + Math.cos(angle) * (sphereRadius * 0.8);
        p.baseY = centerY + Math.sin(angle) * (sphereRadius * 0.8);
      }

      // Mouse interaction — use global mouse position relative to canvas
      const rect = canvas.getBoundingClientRect();
      const mouseX = mouse.x - rect.left;
      const mouseY = mouse.y - rect.top;
      const mouseDx = mouseX - p.x;
      const mouseDy = mouseY - p.y;
      const mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

      let targetX = orbitX;
      let targetY = orbitY;

      if (mouseDist < mouseRadius && mouse.x > 0) {
        const normalized = 1 - mouseDist / mouseRadius;
        const attraction = normalized * 42;
        const repel = mouseDist < 18 ? -1 : 1;

        targetX += (mouseDx / mouseDist) * attraction * repel;
        targetY += (mouseDy / mouseDist) * attraction * repel;

        const linkOpacity = normalized * 0.18;
        if (linkOpacity > 0.02) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          const mouseRgb = config.mouseLinkColor ? hexToRgb(config.mouseLinkColor) : '255, 255, 255';
          ctx.strokeStyle = `rgba(${mouseRgb}, ${linkOpacity})`;
          ctx.lineWidth = 0.4;
          ctx.stroke();
        }
      }

      // Smooth interpolation with more visible roaming
      p.x += (targetX - p.x) * 0.095;
      p.y += (targetY - p.y) * 0.095;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      const particleRgb = config.particleColor ? hexToRgb(config.particleColor) : '255, 255, 255';
      ctx.fillStyle = `rgba(${particleRgb}, ${p.opacity})`;
      ctx.fill();

      // Draw particle connections
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const cdx = p.x - p2.x;
        const cdy = p.y - p2.y;
        const cDist = Math.sqrt(cdx * cdx + cdy * cdy);

        if (cDist < connectionDistance) {
          const opacity = (1 - cDist / connectionDistance) * 0.16;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          const linkRgb = config.linkColor ? hexToRgb(config.linkColor) : '255, 255, 255';
          ctx.strokeStyle = `rgba(${linkRgb}, ${opacity})`;
          ctx.lineWidth = 0.55;
          ctx.stroke();
        }
      }
    }

    rafRef.current = requestAnimationFrame(animate);
  }, [config]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Track GLOBAL mouse position (not canvas-relative)
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.scale(dpr, dpr);
      particlesRef.current = createParticles(rect.width, rect.height, config);
      // Seed initial particles in more visible positions
      particlesRef.current.forEach((particle) => {
        particle.opacity = Math.max(particle.opacity, 0.22);
        particle.size = Math.max(particle.size, 1.6);
      });
    };

    handleResize();
    isActiveRef.current = true;
    rafRef.current = requestAnimationFrame(animate);

    // Global mouse tracking for better interaction
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      isActiveRef.current = false;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [animate, config]);

  return canvasRef;
}