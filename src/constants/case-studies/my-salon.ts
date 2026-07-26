// src/constants/case-studies/my-salon.ts

import type { CaseStudyData } from '@/types/case-study';

export const MY_SALON: CaseStudyData = {
  id: 'my-salon',
  slug: 'my-salon',
  name: 'My Salon',
  industry: 'Beauty & Wellness',
  shortDescription:
    'A premium salon discovery and booking platform — helping users find and book top salons near them instantly with real-time availability, verified salons, and curated professionals.',
  heroImage: '/projects/mysalon.png',
  brandColor: '#A0826D',

  sections: [
    {
      id: 'overview',
      title: 'Project Overview',
      content: [
        'My Salon was created to solve the frustrating experience of finding and booking quality salon services. The platform connects users with verified, premium salons in their area with real-time availability and instant booking.',
        'The vision was to elevate the self-care routine by making it effortless to discover curated professionals, compare services, and book appointments — all from a single, beautifully designed platform.',
        'Target users included urban professionals seeking convenience, beauty enthusiasts wanting premium experiences, and salon owners looking for a reliable booking and customer acquisition channel.',
      ],
    },
    {
      id: 'challenge',
      title: 'The Challenge',
      content: [
        'The salon industry was fragmented — most salons relied on phone calls and walk-ins, leading to long wait times and unreliable availability. Users had no way to compare quality, pricing, or availability across salons.',
        'Building trust was critical. Users needed confidence that listed salons were genuinely premium, hygiene-certified, and staffed by skilled professionals.',
        'The technical challenge included building a real-time availability system that synced with salon schedules, handling location-based discovery with accurate geolocation, and creating a smooth mobile-first booking experience.',
      ],
    },
    {
      id: 'solution',
      title: 'Our Solution',
      image: {
        src: '/projects/mysalon.png',
        alt: 'My Salon booking platform',
        caption: 'The My Salon discovery and booking interface',
      },
      content: [
        'We designed My Salon with a discover-first approach. Users could search by location, browse curated categories, or use the "Use My Location" feature for instant nearby results.',
        'The booking flow was streamlined to three steps: select a salon, choose services and time, and confirm. Real-time availability updates ensured no double-bookings.',
        'A comprehensive salon verification process included hygiene audits, professional certifications, and customer review validation before any salon was listed on the platform.',
      ],
    },
    {
      id: 'design',
      title: 'Design Philosophy',
      content: [
        'The visual identity uses warm, earthy tones — soft browns, creams, and muted golds — evoking luxury, warmth, and self-care. The aesthetic communicates premium quality without intimidation.',
        'Typography uses elegant serif fonts for headlines paired with clean sans-serif body text, creating a sophisticated yet approachable feel that resonates with the beauty and wellness audience.',
        'The interface prioritizes visual content — salon images, stylist portfolios, and before/after galleries take center stage, allowing the quality of work to speak for itself.',
      ],
    },
    {
      id: 'development',
      title: 'Development Process',
      content: [
        'The frontend was built with React and Next.js, leveraging server-side rendering for fast initial loads and SEO optimization. Tailwind CSS ensured consistent styling across all breakpoints.',
        'The backend used Node.js with Express, integrating Google Maps API for location services and real-time salon discovery. MongoDB stored salon profiles, reviews, and booking data with Redis caching for frequent queries.',
        'Firebase provided authentication, push notifications for booking reminders, and real-time database sync for availability updates. The platform was optimized for mobile with a progressive web app architecture.',
      ],
    },
  ],

  technologies: [
    { id: 'react', name: 'React', category: 'frontend' },
    { id: 'nextjs', name: 'Next.js', category: 'frontend' },
    { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend' },
    { id: 'nodejs', name: 'Node.js', category: 'backend' },
    { id: 'express', name: 'Express.js', category: 'backend' },
    { id: 'mongodb', name: 'MongoDB', category: 'database' },
    { id: 'redis', name: 'Redis', category: 'database' },
    { id: 'firebase', name: 'Firebase', category: 'backend' },
    { id: 'googlemaps', name: 'Google Maps API', category: 'tools' },
    { id: 'vercel', name: 'Vercel', category: 'devops' },
  ],

  features: [
    {
      id: 'discovery',
      title: 'Salon Discovery',
      description: 'Location-based search with filters for services, ratings, distance, and price range.',
      icon: 'search',
    },
    {
      id: 'booking',
      title: 'Instant Booking',
      description: 'Real-time availability with a streamlined three-step booking flow and instant confirmation.',
      icon: 'calendar',
    },
    {
      id: 'profiles',
      title: 'Salon Profiles',
      description: 'Rich profiles with portfolios, stylist bios, service menus, and verified customer reviews.',
      icon: 'layout',
    },
    {
      id: 'memberships',
      title: 'Memberships',
      description: 'Subscription plans offering discounted rates, priority booking, and exclusive salon access.',
      icon: 'star',
    },
    {
      id: 'concierge',
      title: 'Concierge Service',
      description: 'Personalized recommendations based on hair type, style preferences, and past appointments.',
      icon: 'mic',
    },
    {
      id: 'reviews',
      title: 'Verified Reviews',
      description: 'Authentic reviews from confirmed bookings with photo uploads and detailed ratings.',
      icon: 'shield',
    },
  ],

  metrics: [
    { id: 'salons', value: '2500', label: 'Verified Salons', suffix: '+', animationDelay: 0 },
    { id: 'bookings', value: '85000', label: 'Bookings Made', suffix: '+', animationDelay: 0.1 },
    { id: 'satisfaction', value: '96', label: 'Satisfaction Rate', suffix: '%', animationDelay: 0.2 },
    { id: 'cities', value: '25', label: 'Cities Covered', suffix: '+', animationDelay: 0.3 },
    { id: 'load-time', value: '1.4', label: 'Avg Load Time', prefix: '<', suffix: 's', animationDelay: 0.4 },
    { id: 'retention', value: '72', label: 'Rebooking Rate', suffix: '%', animationDelay: 0.5 },
  ],

  gallery: [
    { id: 'g1', src: '/case-studies/my-salon/gallery-1.jpg', alt: 'Salon discovery page', caption: 'Discover Salons' },
    { id: 'g2', src: '/case-studies/my-salon/gallery-2.jpg', alt: 'Booking flow', caption: 'Book Instantly' },
    { id: 'g3', src: '/case-studies/my-salon/gallery-3.jpg', alt: 'Salon profile', caption: 'Salon Profile' },
    { id: 'g4', src: '/case-studies/my-salon/gallery-4.jpg', alt: 'Stylist portfolio', caption: 'Stylist Portfolio' },
    { id: 'g5', src: '/case-studies/my-salon/gallery-5.jpg', alt: 'Membership plans', caption: 'Memberships' },
    { id: 'g6', src: '/case-studies/my-salon/gallery-6.jpg', alt: 'Reviews section', caption: 'Reviews' },
  ],

  testimonial: {
    quote:
      'My Salon completely transformed how we acquire customers. Our bookings increased by 200% in the first three months, and the verified review system built incredible trust with new clients.',
    author: 'Ananya Mehta',
    role: 'Founder',
    company: 'My Salon',
    image: '/testimonials/ananya-mehta.jpg',
  },

  seo: {
    title: 'My Salon — Salon Booking Platform Case Study | Atior Technologies',
    description:
      'How Atior Technologies built My Salon, a premium salon discovery and booking platform connecting users with 2,500+ verified salons across 25+ cities.',
    ogImage: '/projects/mysalon.png',
    canonicalUrl: 'https://atior.tech/projects/my-salon',
    keywords: [
      'My Salon',
      'Salon Booking Platform',
      'Beauty Tech',
      'Salon Discovery',
      'Booking System',
      'Custom Web Development',
    ],
  },
};
