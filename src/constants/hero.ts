// src/constants/hero.ts

import type { ParticleConfig } from '@/types/hero';

export const PARTICLE_CONFIG: ParticleConfig = {
  count: 100,
  connectionDistance: 140,
  mouseRadius: 280,
  baseSpeed: 0.55,
  opacityRange: [0.18, 0.52],
  sizeRange: [1.2, 3.2],
};

export const HERO_COPY = {
  label: 'SAAS DEVELOPMENT • AI DEVELOPMENT',
  headline: 'Engineering Scalable Digital Products',
  subtext:
    'Atior Technologies partners with ambitious founders and forward-thinking businesses to architect, build, and scale digital products that define markets. From AI-powered SaaS platforms to enterprise-grade software systems, we transform complex challenges into elegant, high-performance solutions engineered for growth.',
  primaryCta: 'Book a Discovery Call',
  secondaryCta: 'Explore Our Work',
} as const;

export const HERO_ANIMATION = {
  staggerDelay: 0.12,
  initialDelay: 0.3,
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1] as const,
} as const;

export const HERO_SEO = {
  title: 'Atior Technologies — SaaS Development & AI Solutions',
  description:
    'Premium software engineering company specializing in scalable SaaS products, AI-powered solutions, and custom software development for startups and enterprises.',
  keywords: [
    'SaaS Development',
    'AI Development',
    'Custom Software Development',
    'Scalable Digital Products',
    'Software Engineering Company',
    'Enterprise Software Solutions',
  ],
} as const;