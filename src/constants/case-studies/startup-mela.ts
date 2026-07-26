// src/constants/case-studies/startup-mela.ts

import type { CaseStudyData } from '@/types/case-study';

export const STARTUP_MELA: CaseStudyData = {
  id: 'startup-mela',
  slug: 'startup-mela',
  name: 'Startup Mela',
  industry: 'Event Technology',
  shortDescription:
    'A community-driven event platform connecting founders, investors, and operators across India — engineered to handle 50,000 concurrent users during live demo days.',
  heroImage: '/projects/startupmela.png',
  brandColor: '#10B981',

  sections: [
    {
      id: 'overview',
      title: 'Project Overview',
      content: [
        'Startup Mela began with a simple observation: India\'s startup ecosystem was fragmented. Founders struggled to find investors, investors missed promising deals, and operators lacked visibility into the community around them.',
        'The vision was to create a single platform that would serve as the connective tissue for the entire ecosystem — from first-time founders in Tier-2 cities to seasoned VCs in Bangalore and Mumbai.',
        'The business objective was clear: become the default platform for startup events in India, starting with demo days and expanding into year-round networking, mentorship, and resource sharing.',
        'The target audience spanned three distinct groups: early-stage founders seeking funding and mentorship, angel investors and VC firms looking for deal flow, and ecosystem operators — incubators, accelerators, and government bodies — managing community engagement.',
      ],
    },
    {
      id: 'challenge',
      title: 'The Challenge',
      content: [
        'The business problem was scale under uncertainty. Startup events in India were growing 40% year-over-year, but existing platforms were either too generic (Meetup, Eventbrite) or too narrow (individual accelerator portals). There was no platform designed specifically for the unique dynamics of the Indian startup ecosystem.',
        'User challenges were equally complex. Founders needed to showcase their startups in structured formats that investors could quickly evaluate. Investors needed filtering and discovery tools to find relevant deals without wading through irrelevant pitches. Operators needed real-time analytics to understand engagement and ROI.',
        'The technical challenges were formidable. The platform needed to support 50,000 concurrent users during peak demo day events without degradation. Real-time features — live pitch streaming, chat, Q&A — required WebSocket infrastructure that could scale horizontally. The payment system needed to handle ticket sales, sponsorships, and premium memberships with Indian payment methods (UPI, Razorpay).',
        'Perhaps the most subtle challenge was trust. In a market where startup scams and fake investors were genuine concerns, the platform needed built-in verification, reputation systems, and transparent profiles that would make every interaction feel safe and professional.',
      ],
    },
    {
      id: 'solution',
      title: 'Our Solution',
      image: {
        src: '/projects/startupmela.png',
        alt: 'Startup Mela event dashboard',
        caption: 'An overview of the Startup Mela event dashboard',
      },
      content: [
        'We approached Startup Mela as a product engineering challenge, not just a website build. The first eight weeks were dedicated to discovery — interviewing 40+ founders, 20+ investors, and 10 ecosystem operators to understand their workflows, pain points, and success criteria.',
        'The product strategy centered on three pillars: discovery (matching the right founders with the right investors), engagement (keeping users active between events), and trust (verifying identities and building reputation).',
        'We designed a dual-interface platform: a public-facing event discovery and registration system, and a private dashboard for verified founders and investors with advanced search, messaging, and deal-tracking capabilities.',
        'The registration flow was engineered to reduce friction while maintaining data quality. Founders could import their startup profiles from LinkedIn or create structured pitches using our guided wizard. Investors could set preference filters that would automatically surface relevant startups.',
        'For live events, we built a real-time streaming and interaction layer using WebRTC and custom WebSocket servers. Attendees could watch pitches, ask questions, vote on favorites, and schedule follow-up meetings — all without leaving the platform.',
      ],
    },
    {
      id: 'design',
      title: 'Design Philosophy',
      content: [
        'The user experience was designed around the principle of "progressive disclosure." First-time visitors see a clean event calendar and simple registration. As they engage more deeply — attending events, completing profiles, connecting with others — the interface gradually reveals more sophisticated features.',
        'Navigation follows a task-oriented model rather than a traditional site hierarchy. Users think in terms of "find an event," "pitch my startup," or "discover deals" — so the navigation reflects these mental models.',
        'The visual identity draws from Indian design traditions without being literal. Earthy greens and warm neutrals evoke growth and community. Typography pairs a geometric sans-serif for headlines with a humanist serif for body text, creating a balance between technology and warmth.',
        'Accessibility was non-negotiable. Every color combination meets WCAG AA standards. The platform is fully keyboard-navigable. Screen reader users can complete registration, purchase tickets, and participate in live events without assistance.',
      ],
    },
    {
      id: 'development',
      title: 'Development Process',
      content: [
        'The architecture was designed for horizontal scalability from day one. We chose a microservices approach with containerized services orchestrated via Kubernetes, allowing individual components to scale independently based on demand.',
        'The frontend was built as a Next.js application with server-side rendering for SEO-critical pages and client-side hydration for interactive features. React Query managed server state, while Zustand handled client-side UI state. The component library was built on Tailwind CSS with a custom design token system.',
        'The backend used Node.js with Express for API services, Fastify for high-performance WebSocket endpoints, and Python microservices for AI-powered matching and recommendation engines. MongoDB served as the primary database for flexible document structures, with Redis for caching and session management.',
        'Optimization was continuous. We implemented edge caching via Cloudflare, image optimization with AVIF/WebP conversion, and code splitting that reduced initial bundle size by 60%. Core Web Vitals were monitored in production with automated alerts.',
        'Deployment followed a GitOps workflow with GitHub Actions, Docker, and Kubernetes. Every pull request triggered a preview deployment. Production releases were blue-green deployments with automatic rollback on health check failure.',
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
    { id: 'openai', name: 'OpenAI', category: 'ai' },
    { id: 'docker', name: 'Docker', category: 'devops' },
    { id: 'github', name: 'GitHub', category: 'tools' },
    { id: 'vercel', name: 'Vercel', category: 'devops' },
  ],

  features: [
    {
      id: 'registration',
      title: 'Online Registration',
      description:
        'Frictionless event registration with multi-tier ticketing, group discounts, and automated confirmation workflows.',
      icon: 'ticket',
    },
    {
      id: 'dashboard',
      title: 'Startup Dashboard',
      description:
        'Comprehensive profile management with pitch deck uploads, traction metrics, and investor visibility controls.',
      icon: 'layout',
    },
    {
      id: 'investor-portal',
      title: 'Investor Portal',
      description:
        'Advanced discovery and filtering with deal tracking, note-taking, and direct messaging to founders.',
      icon: 'search',
    },
    {
      id: 'speakers',
      title: 'Speaker Profiles',
      description:
        'Curated speaker directories with session schedules, topic tags, and audience Q&A management.',
      icon: 'mic',
    },
    {
      id: 'networking',
      title: 'Networking',
      description:
        'AI-powered matchmaking that suggests relevant connections based on industry, stage, and interests.',
      icon: 'users',
    },
    {
      id: 'admin',
      title: 'Admin Panel',
      description:
        'Real-time event management with attendee analytics, revenue tracking, and automated reporting.',
      icon: 'settings',
    },
    {
      id: 'analytics',
      title: 'Analytics',
      description:
        'Comprehensive engagement metrics with cohort analysis, conversion funnels, and ROI dashboards.',
      icon: 'bar-chart',
    },
    {
      id: 'streaming',
      title: 'Live Streaming',
      description:
        'WebRTC-powered pitch streaming with real-time chat, Q&A, and audience polling during demo days.',
      icon: 'video',
    },
  ],

  metrics: [
    { id: 'visitors', value: '125000', label: 'Monthly Visitors', suffix: '+', animationDelay: 0 },
    { id: 'tickets', value: '45000', label: 'Tickets Sold', suffix: '+', animationDelay: 0.1 },
    { id: 'engagement', value: '68', label: 'Engagement Rate', suffix: '%', animationDelay: 0.2 },
    { id: 'load-time', value: '1.2', label: 'Avg Load Time', prefix: '<', suffix: 's', animationDelay: 0.3 },
    { id: 'uptime', value: '99.9', label: 'Uptime', suffix: '%', animationDelay: 0.4 },
    { id: 'events', value: '120', label: 'Events Hosted', suffix: '+', animationDelay: 0.5 },
  ],

  gallery: [
    { id: 'g1', src: '/case-studies/startup-mela/gallery-1.jpg', alt: 'Startup Mela event dashboard', caption: 'Event Dashboard' },
    { id: 'g2', src: '/case-studies/startup-mela/gallery-2.jpg', alt: 'Startup profile page', caption: 'Startup Profile' },
    { id: 'g3', src: '/case-studies/startup-mela/gallery-3.jpg', alt: 'Investor discovery interface', caption: 'Investor Discovery' },
    { id: 'g4', src: '/case-studies/startup-mela/gallery-4.jpg', alt: 'Live streaming during demo day', caption: 'Live Demo Day' },
    { id: 'g5', src: '/case-studies/startup-mela/gallery-5.jpg', alt: 'Networking matchmaking screen', caption: 'AI Matchmaking' },
    { id: 'g6', src: '/case-studies/startup-mela/gallery-6.jpg', alt: 'Admin analytics panel', caption: 'Analytics Panel' },
  ],

  testimonial: {
    quote:
      'Atior Technologies did not just build us a platform. They became strategic partners who understood our vision, challenged our assumptions, and delivered a product that has become the backbone of the Indian startup ecosystem. The attention to detail, the engineering discipline, and the genuine care for our success set them apart from every other agency we considered.',
    author: 'Rahul Sharma',
    role: 'Founder & CEO',
    company: 'Startup Mela',
    image: '/testimonials/rahul-sharma.jpg',
  },

  seo: {
    title: 'Startup Mela — Event Platform Case Study | Atior Technologies',
    description:
      'How Atior Technologies built Startup Mela, a high-performance event platform connecting 50,000+ founders and investors across the Indian startup ecosystem.',
    ogImage: '/case-studies/startup-mela/og.png',
    canonicalUrl: 'https://atior.tech/projects/startup-mela',
    keywords: [
      'Startup Mela',
      'Event Platform Development',
      'SaaS Development',
      'Startup Ecosystem',
      'Custom Software Development',
      'Scalable Web Platform',
    ],
  },
};