// src/constants/case-studies/business-orbit.ts

import type { CaseStudyData } from '@/types/case-study';

export const BUSINESS_ORBIT: CaseStudyData = {
  id: 'business-orbit',
  slug: 'business-orbit',
  name: 'Business Orbit',
  industry: 'Community & Growth',
  shortDescription:
    'An action-oriented community platform helping founders build their careers and scale their startups — with access to real opportunities, mentors, and growth resources all in one place.',
  heroImage: '/projects/businessorbit.png',
  brandColor: '#BFFF00',

  sections: [
    {
      id: 'overview',
      title: 'Project Overview',
      content: [
        'Business Orbit was born from a simple insight: founders don\'t just need capital — they need community, mentorship, and real opportunities to grow. The platform was designed to be the single destination where ambitious builders connect, learn, and scale together.',
        'The vision was to create an action-oriented community that goes beyond passive networking. Every feature was designed to drive measurable outcomes — from mentor matching to opportunity discovery.',
        'The target audience included early-stage founders looking for guidance, experienced entrepreneurs seeking to give back, and business professionals wanting to join a growth-focused community.',
      ],
    },
    {
      id: 'challenge',
      title: 'The Challenge',
      content: [
        'Existing community platforms were either too broad (LinkedIn, Facebook Groups) or too niche (industry-specific Slack channels). Founders needed a platform that understood their unique journey and provided actionable support at every stage.',
        'The technical challenge was building a real-time community experience that felt alive — with live events, mentorship matching, and opportunity feeds that updated dynamically.',
        'Trust and quality were critical. The platform needed verification systems to ensure that mentors were genuine, opportunities were real, and the community maintained its high-value nature.',
      ],
    },
    {
      id: 'solution',
      title: 'Our Solution',
      image: {
        src: '/projects/businessorbit.png',
        alt: 'Business Orbit community platform',
        caption: 'The Business Orbit community dashboard',
      },
      content: [
        'We built Business Orbit as a modern community platform with three core pillars: Connect (finding the right mentors and peers), Grow (accessing curated opportunities and resources), and Scale (tools and frameworks for business growth).',
        'The mentor matching algorithm considered industry expertise, stage of business, geographic proximity, and communication style to create meaningful connections.',
        'The opportunity feed aggregated partnerships, funding rounds, talent needs, and collaboration requests from verified community members.',
      ],
    },
    {
      id: 'design',
      title: 'Design Philosophy',
      content: [
        'The visual identity uses bold lime-green accents on a deep black canvas — evoking energy, growth, and ambition. The design language communicates that this is a platform for builders, not browsers.',
        'Typography pairs a strong geometric sans-serif for headlines with clean body text, creating a hierarchy that guides users to action.',
        'The dark theme reduces eye strain for users who spend extended time on the platform while the neon accents create visual focal points for key actions.',
      ],
    },
    {
      id: 'development',
      title: 'Development Process',
      content: [
        'The frontend was built with Next.js and React for server-side rendering and optimal SEO. Tailwind CSS provided a utility-first styling approach that maintained consistency across the platform.',
        'Real-time features were powered by Socket.io, enabling live chat, notifications, and activity feeds. Firebase handled authentication and cloud functions.',
        'MongoDB provided the flexible document structure needed for diverse user profiles, mentor records, and opportunity listings. The platform was deployed on Vercel with edge functions for global performance.',
      ],
    },
  ],

  technologies: [
    { id: 'react', name: 'React', category: 'frontend' },
    { id: 'nextjs', name: 'Next.js', category: 'frontend' },
    { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend' },
    { id: 'nodejs', name: 'Node.js', category: 'backend' },
    { id: 'mongodb', name: 'MongoDB', category: 'database' },
    { id: 'firebase', name: 'Firebase', category: 'backend' },
    { id: 'socketio', name: 'Socket.io', category: 'backend' },
    { id: 'vercel', name: 'Vercel', category: 'devops' },
    { id: 'github', name: 'GitHub', category: 'tools' },
  ],

  features: [
    {
      id: 'community-feed',
      title: 'Community Feed',
      description: 'Real-time activity feed with posts, opportunities, and updates from verified community members.',
      icon: 'users',
    },
    {
      id: 'mentor-matching',
      title: 'Mentor Matching',
      description: 'AI-powered matching connecting founders with mentors based on industry, stage, and goals.',
      icon: 'search',
    },
    {
      id: 'opportunities',
      title: 'Opportunity Board',
      description: 'Curated listings of partnerships, funding, talent needs, and collaboration requests.',
      icon: 'layout',
    },
    {
      id: 'events',
      title: 'Live Events',
      description: 'Virtual and in-person events with registration, streaming, and networking features.',
      icon: 'video',
    },
    {
      id: 'profiles',
      title: 'Verified Profiles',
      description: 'Comprehensive founder and mentor profiles with verification badges and track records.',
      icon: 'shield',
    },
    {
      id: 'analytics',
      title: 'Growth Analytics',
      description: 'Personal dashboards tracking networking activity, mentorship hours, and opportunity engagement.',
      icon: 'bar-chart',
    },
  ],

  metrics: [
    { id: 'members', value: '15000', label: 'Active Members', suffix: '+', animationDelay: 0 },
    { id: 'mentors', value: '500', label: 'Verified Mentors', suffix: '+', animationDelay: 0.1 },
    { id: 'connections', value: '45000', label: 'Connections Made', suffix: '+', animationDelay: 0.2 },
    { id: 'events', value: '200', label: 'Events Hosted', suffix: '+', animationDelay: 0.3 },
    { id: 'retention', value: '78', label: 'Retention Rate', suffix: '%', animationDelay: 0.4 },
    { id: 'load-time', value: '1.1', label: 'Avg Load Time', prefix: '<', suffix: 's', animationDelay: 0.5 },
  ],

  gallery: [
    { id: 'g1', src: '/case-studies/business-orbit/gallery-1.jpg', alt: 'Community dashboard', caption: 'Community Dashboard' },
    { id: 'g2', src: '/case-studies/business-orbit/gallery-2.jpg', alt: 'Mentor matching interface', caption: 'Mentor Matching' },
    { id: 'g3', src: '/case-studies/business-orbit/gallery-3.jpg', alt: 'Opportunity board', caption: 'Opportunities' },
    { id: 'g4', src: '/case-studies/business-orbit/gallery-4.jpg', alt: 'Live event streaming', caption: 'Live Events' },
    { id: 'g5', src: '/case-studies/business-orbit/gallery-5.jpg', alt: 'User profile page', caption: 'Founder Profile' },
    { id: 'g6', src: '/case-studies/business-orbit/gallery-6.jpg', alt: 'Analytics dashboard', caption: 'Growth Analytics' },
  ],

  testimonial: {
    quote:
      'Business Orbit transformed how we connect with the startup ecosystem. The mentor matching alone was worth the investment — we found advisors who truly understood our industry and accelerated our growth trajectory.',
    author: 'Priya Kapoor',
    role: 'Co-Founder',
    company: 'Business Orbit',
    image: '/testimonials/priya-kapoor.jpg',
  },

  seo: {
    title: 'Business Orbit — Community Platform Case Study | Atior Technologies',
    description:
      'How Atior Technologies built Business Orbit, an action-oriented community platform connecting 15,000+ founders with mentors and growth opportunities.',
    ogImage: '/projects/businessorbit.png',
    canonicalUrl: 'https://atior.tech/projects/business-orbit',
    keywords: [
      'Business Orbit',
      'Community Platform',
      'Startup Growth',
      'Mentor Matching',
      'Founder Community',
      'Custom Web Development',
    ],
  },
};
