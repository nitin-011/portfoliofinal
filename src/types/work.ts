// src/types/work.ts

export interface ProjectAccent {
  name: string;
  bg: string;
  text: string;
  border: string;
  ctaBg: string;
  ctaText: string;
  ctaHover: string;
  imageBg: string;
}

export interface Project {
  id: string;
  slug: string;
  headline: string;
  description: string;
  image: string;
  accent: ProjectAccent;
  seoTitle: string;
  seoDescription: string;
}

export interface ScrollState {
  currentIndex: number;
  progress: number;
  direction: 'up' | 'down' | 'none';
  isInView: boolean;
}

export interface ShowcaseConfig {
  transitionDuration: number;
  exitDuration: number;
  enterDuration: number;
  staggerDelay: number;
}