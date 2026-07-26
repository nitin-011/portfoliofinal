// src/types/hero.ts

export interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
  angle: number;
  angleSpeed: number;
  radius: number;
}

export interface CursorState {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  isVisible: boolean;
}

export interface ParticleConfig {
  count: number;
  connectionDistance: number;
  mouseRadius: number;
  baseSpeed: number;
  opacityRange: [number, number];
  sizeRange: [number, number];
  // Optional color overrides (hex like '#RRGGBB' recommended)
  particleColor?: string;
  linkColor?: string;
  mouseLinkColor?: string;
}

export type AnimationPhase = 'initial' | 'entering' | 'entered';