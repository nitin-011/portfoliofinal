// src/types/technologies.ts

export interface Technology {
  id: string;
  name: string;
  logo: string; // SVG path or component name
  category: 'frontend' | 'backend' | 'ai' | 'devops' | 'design' | 'tools';
  website?: string;
}

export interface MarqueeConfig {
  speed: number; // pixels per second
  hoverSpeed: number;
  gap: number; // pixels between items
  pauseOnHover: boolean;
  direction: 'left' | 'right';
}

export type MarqueeState = 'playing' | 'paused' | 'hover-slow';