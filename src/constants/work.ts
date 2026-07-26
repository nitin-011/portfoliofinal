// src/constants/work.ts

import type { Project, ShowcaseConfig } from '@/types/work';

// To add or remove projects from the portfolio,
// edit the PROJECTS array below and ensure each project has a unique id and slug.
// Also add the matching image file under public/projects/ and use the same path string.
export const SHOWCASE_CONFIG: ShowcaseConfig = {
  transitionDuration: 0.8,
  exitDuration: 0.5,
  enterDuration: 0.7,
  staggerDelay: 0.1,
};

export const PROJECT_ACCENTS = {
  sapphire: {
    name: 'Deep Sapphire',
    bg: 'bg-[#0a1628]',
    text: 'text-white',
    border: 'border-blue-400/20',
    ctaBg: 'bg-blue-500',
    ctaText: 'text-white',
    ctaHover: 'hover:bg-blue-600',
    imageBg: 'bg-[#0d1f3c]',
  },
  emerald: {
    name: 'Premium Emerald',
    bg: 'bg-[#0a1f18]',
    text: 'text-white',
    border: 'border-emerald-400/20',
    ctaBg: 'bg-emerald-600',
    ctaText: 'text-white',
    ctaHover: 'hover:bg-emerald-700',
    imageBg: 'bg-[#0d2a1f]',
  },
  royal: {
    name: 'Royal Purple',
    bg: 'bg-[#1a0a2e]',
    text: 'text-white',
    border: 'border-purple-400/20',
    ctaBg: 'bg-purple-600',
    ctaText: 'text-white',
    ctaHover: 'hover:bg-purple-700',
    imageBg: 'bg-[#240d3d]',
  },
  burnt: {
    name: 'Burnt Orange',
    bg: 'bg-[#2a1205]',
    text: 'text-white',
    border: 'border-orange-400/20',
    ctaBg: 'bg-orange-600',
    ctaText: 'text-white',
    ctaHover: 'hover:bg-orange-700',
    imageBg: 'bg-[#3d1a08]',
  },
  ruby: {
    name: 'Ruby Red',
    bg: 'bg-[#2a0a0a]',
    text: 'text-white',
    border: 'border-red-400/20',
    ctaBg: 'bg-red-600',
    ctaText: 'text-white',
    ctaHover: 'hover:bg-red-700',
    imageBg: 'bg-[#3d0d0d]',
  },
  teal: {
    name: 'Deep Teal',
    bg: 'bg-[#0a1f1f]',
    text: 'text-white',
    border: 'border-teal-400/20',
    ctaBg: 'bg-teal-600',
    ctaText: 'text-white',
    ctaHover: 'hover:bg-teal-700',
    imageBg: 'bg-[#0d2a2a]',
  },
  indigo: {
    name: 'Indigo',
    bg: 'bg-[#0f0a2e]',
    text: 'text-white',
    border: 'border-indigo-400/20',
    ctaBg: 'bg-indigo-600',
    ctaText: 'text-white',
    ctaHover: 'hover:bg-indigo-700',
    imageBg: 'bg-[#160d3d]',
  },
  slate: {
    name: 'Slate Blue',
    bg: 'bg-[#0f172a]',
    text: 'text-white',
    border: 'border-slate-400/20',
    ctaBg: 'bg-slate-600',
    ctaText: 'text-white',
    ctaHover: 'hover:bg-slate-700',
    imageBg: 'bg-[#1e293b]',
  },
  coral: {
    name: 'Premium Coral',
    bg: 'bg-[#2a1510]',
    text: 'text-white',
    border: 'border-[#f4a261]/20',
    ctaBg: 'bg-[#e76f51]',
    ctaText: 'text-white',
    ctaHover: 'hover:bg-[#d65a3b]',
    imageBg: 'bg-[#3d1f15]',
  },
  graphite: {
    name: 'Graphite Gold',
    bg: 'bg-[#1a1a1a]',
    text: 'text-white',
    border: 'border-[#D4AF37]/20',
    ctaBg: 'bg-[#D4AF37]',
    ctaText: 'text-neutral-900',
    ctaHover: 'hover:bg-[#B8962E]',
    imageBg: 'bg-[#2a2a2a]',
  },
} as const;

export const PROJECTS: Project[] = [
  {
    id: 'business-orbit',
    slug: 'business-orbit',
    headline: 'Business Orbit',
    description:
      'An action-oriented community platform helping founders build their careers and scale their startups — with access to real opportunities, mentors, and growth resources all in one place.',
    image: '/projects/businessorbit.png',
    accent: PROJECT_ACCENTS.sapphire,
    seoTitle: 'Business Orbit — Startup Community Platform | Atior Technologies',
    seoDescription:
      'How we built Business Orbit, a community-driven platform connecting founders with mentors, growth opportunities, and actionable resources.',
  },
  {
    id: 'startup-mela',
    slug: 'startup-mela',
    headline: 'Startup Mela',
    description:
      'Chandigarh\'s largest entrepreneurship summit — a community-driven event platform connecting founders, investors, and operators, engineered to handle 50,000 concurrent users during live demo days.',
    image: '/projects/startupmela.png',
    accent: PROJECT_ACCENTS.emerald,
    seoTitle: 'Startup Mela — Entrepreneurship Summit Platform | Atior Technologies',
    seoDescription:
      'Building Startup Mela, a high-performance event platform for Chandigarh\'s largest entrepreneurship summit connecting the startup ecosystem.',
  },
  {
    id: 'my-salon',
    slug: 'my-salon',
    headline: 'My Salon',
    description:
      'A premium salon discovery and booking platform — helping users find and book top salons near them instantly with real-time availability, verified salons, and curated professionals.',
    image: '/projects/mysalon.png',
    accent: PROJECT_ACCENTS.royal,
    seoTitle: 'My Salon — Salon Booking Platform | Atior Technologies',
    seoDescription:
      'How we built My Salon, a premium discovery and booking platform connecting users with verified salons and curated professionals.',
  },
  {
    id: 'hanginn',
    slug: 'hanginn',
    headline: 'Hanginn',
    description:
      'A platform providing private access to real-world spaces — a simpler way to connect with social, intellectual, official, and play spaces right where you are.',
    image: '/projects/hanginn.png',
    accent: PROJECT_ACCENTS.burnt,
    seoTitle: 'Hanginn — Real-World Spaces Platform | Atior Technologies',
    seoDescription:
      'Architecting Hanginn, a platform connecting people with curated real-world spaces for social, work, and play experiences.',
  },
  {
    id: 'armour-zone',
    slug: 'armour-zone',
    headline: 'Armour Zone',
    description:
      'A fitness and gym platform with AI-powered training — featuring expert trainers, personalized workout plans, and an intelligent fitness assistant to help users achieve their health goals.',
    image: '/projects/aifitnesstracker.png',
    accent: PROJECT_ACCENTS.ruby,
    seoTitle: 'Armour Zone — AI Fitness Platform | Atior Technologies',
    seoDescription:
      'Building Armour Zone, an AI-powered fitness platform with expert trainers and personalized workout plans for every fitness level.',
  },
  {
    id: 'orange-charger',
    slug: 'orange-charger',
    headline: 'Orange Charger',
    description:
      'An EV charging solutions platform — making both residents and property owners happy with smart charging products, seamless solutions, and comprehensive resource management.',
    image: '/projects/orangecharger.png',
    accent: PROJECT_ACCENTS.burnt,
    seoTitle: 'Orange Charger — EV Charging Platform | Atior Technologies',
    seoDescription:
      'How we built Orange Charger, a comprehensive EV charging platform with smart products and solutions for residential communities.',
  },
  {
    id: 'the-poppy-pie',
    slug: 'the-poppy-pie',
    headline: 'The Poppy Pie',
    description:
      'A digital marketing agency platform — crafting tailored marketing strategies that connect businesses with the right audience, boost brand visibility, and drive real results.',
    image: '/projects/thepoppypie.png',
    accent: PROJECT_ACCENTS.slate,
    seoTitle: 'The Poppy Pie — Marketing Agency Platform | Atior Technologies',
    seoDescription:
      'Building The Poppy Pie, a marketing agency website with tailored strategies for brand growth and audience engagement.',
  },
  {
    id: 'zeerostock',
    slug: 'zeerostock',
    headline: 'Zeerostock',
    description:
      'A B2B surplus inventory marketplace — helping businesses unlock hidden value in excess inventory with a platform designed for faster sourcing, liquidation, and auction capabilities.',
    image: '/projects/zeerostock.png',
    accent: PROJECT_ACCENTS.teal,
    seoTitle: 'Zeerostock — Surplus Inventory Marketplace | Atior Technologies',
    seoDescription:
      'Architecting Zeerostock, a B2B marketplace transforming excess inventory into opportunity with intelligent sourcing and liquidation tools.',
  },
];

export const WORK_SECTION_COPY = {
  title: 'Our Work',
  subtitle:
    'We partner with ambitious teams to build products that define markets. Every project is an exercise in precision engineering, thoughtful design, and scalable architecture.',
} as const;