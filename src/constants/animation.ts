// src/constants/animation.ts

export const TRANSITIONS = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  base: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '350ms cubic-bezier(0.4, 0, 0.2, 1)',
  slower: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export const DURATIONS = {
  fast: 150,
  base: 250,
  slow: 350,
  slower: 500,
} as const;

export const EASINGS = {
  easeOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
  easeInOutExpo: 'cubic-bezier(0.87, 0, 0.13, 1)',
} as const;