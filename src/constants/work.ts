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
      'An action-oriented community platform designed to help founders build their careers and scale their startups. We developed a comprehensive ecosystem featuring mentor matchmaking algorithms, real-time opportunity boards, and structured growth resources all in one centralized hub, empowering entrepreneurs to navigate the complex journey of business growth.',
    image: '/projects/businessorbit.png',
    accent: PROJECT_ACCENTS.sapphire,
    seoTitle: 'Business Orbit — Startup Community Platform | Atior Technologies',
    seoDescription:
      'How we built Business Orbit, a community-driven platform connecting founders with mentors, growth opportunities, and actionable resources.',
    challenge: 'Founders needed a dedicated ecosystem that went beyond superficial networking. The challenge was building a platform that could intelligently match mentors with mentees based on hyper-specific criteria while maintaining high engagement and trust among high-profile individuals.',
    approach: 'We architected a dynamic matchmaking algorithm and integrated real-time communication protocols. We focused on a premium, dark-themed UI that minimized friction and maximized the visibility of high-value opportunities, ensuring every interaction felt intentional and productive.',
    results: 'The platform successfully onboarded over 15,000 active founders and 500+ verified mentors, facilitating 45,000+ meaningful connections and achieving a staggering 78% monthly retention rate within the first year.',
  },
  {
    id: 'startup-mela',
    slug: 'startup-mela',
    headline: 'Startup Mela',
    description:
      'A high-performance event platform engineered for Chandigarh\'s largest entrepreneurship summit. We architected a scalable, real-time system capable of seamlessly handling over 50,000 concurrent users during live demo days and investor pitches, serving as a vital bridge connecting founders, angel investors, and ecosystem operators.',
    image: '/projects/startupmela.png',
    accent: PROJECT_ACCENTS.emerald,
    seoTitle: 'Startup Mela — Entrepreneurship Summit Platform | Atior Technologies',
    seoDescription:
      'Building Startup Mela, a high-performance event platform for Chandigarh\'s largest entrepreneurship summit connecting the startup ecosystem.',
    challenge: 'The summit required a digital infrastructure capable of supporting massive traffic spikes during live demo days without compromising the user experience. We had to ensure zero downtime while streaming live pitches to tens of thousands of concurrent users.',
    approach: 'We built a highly scalable microservices architecture using Next.js and Node.js, deployed on edge networks to minimize latency. We implemented aggressive caching strategies and optimized video streaming protocols to handle the heavy load seamlessly.',
    results: 'Startup Mela flawlessly supported over 50,000 concurrent users during peak events with zero crashes. The platform facilitated hundreds of investor-founder connections and processed thousands of registrations, earning widespread praise for its stability.',
  },
  {
    id: 'my-salon',
    slug: 'my-salon',
    headline: 'My Salon',
    description:
      'A premium salon discovery and appointment scheduling platform. We built a robust booking engine with real-time availability synchronization, geolocation-based discovery, and a strict verification system. The platform helps users instantly find top-rated salons nearby while providing salon owners with a powerful dashboard to manage their curated professionals.',
    image: '/projects/mysalon.png',
    accent: PROJECT_ACCENTS.royal,
    seoTitle: 'My Salon — Salon Booking Platform | Atior Technologies',
    seoDescription:
      'How we built My Salon, a premium discovery and booking platform connecting users with verified salons and curated professionals.',
    challenge: 'The beauty industry was highly fragmented, with users struggling to find reliable availability data and salons relying on manual booking processes. We needed to bridge this gap with a unified, real-time booking engine that catered to both consumers and business owners.',
    approach: 'We developed a dual-sided marketplace with a lightning-fast consumer app and a comprehensive management dashboard for salons. By utilizing geospatial queries and real-time inventory syncing, we ensured that double-bookings became a thing of the past.',
    results: 'My Salon dramatically reduced no-show rates by 60% for partner salons through automated reminders and seamless payments. The platform quickly scaled to include over 2,500 verified salons across 25+ cities, processing thousands of successful bookings daily.',
  },
  {
    id: 'hanginn',
    slug: 'hanginn',
    headline: 'Hanginn',
    description:
      'An innovative marketplace providing on-demand private access to premium real-world spaces. We designed a seamless booking experience that allows users to instantly reserve curated locations for social gatherings, intellectual workshops, official meetings, or recreational play spaces, complete with integrated access control and secure payments.',
    image: '/projects/hanginn.png',
    accent: PROJECT_ACCENTS.burnt,
    seoTitle: 'Hanginn — Real-World Spaces Platform | Atior Technologies',
    seoDescription:
      'Architecting Hanginn, a platform connecting people with curated real-world spaces for social, work, and play experiences.',
    challenge: 'Connecting individuals with unique, private spaces required a robust trust mechanism, complex availability scheduling, and secure access management. The platform had to handle dynamic pricing models and stringent verification processes seamlessly.',
    approach: 'We engineered a flexible booking system that accommodated hourly, daily, and custom time-slot reservations. The user interface was designed to heavily feature high-quality imagery and immersive virtual tours, making the discovery process visually compelling and intuitive.',
    results: 'Hanginn transformed the way people utilize private spaces, achieving a 40% month-over-month growth in bookings. Property owners reported a 3x increase in space utilization, highlighting the platform\'s effectiveness in maximizing asset value.',
  },
  {
    id: 'armour-zone',
    slug: 'armour-zone',
    headline: 'Armour Zone',
    description:
      'A next-generation fitness ecosystem driven by an AI-powered training assistant. We integrated advanced machine learning to analyze user metrics and generate dynamically personalized workout plans. Complete with expert trainer matching and progress tracking, the platform provides a holistic, data-driven approach to helping users achieve their optimal health goals.',
    image: '/projects/aifitnesstracker.png',
    accent: PROJECT_ACCENTS.ruby,
    seoTitle: 'Armour Zone — AI Fitness Platform | Atior Technologies',
    seoDescription:
      'Building Armour Zone, an AI-powered fitness platform with expert trainers and personalized workout plans for every fitness level.',
    challenge: 'Generic fitness apps often fail to retain users due to a lack of personalization. The goal was to create a digital fitness assistant that could adapt to a user\'s changing capabilities, providing the nuance of a human personal trainer through an algorithmic approach.',
    approach: 'We integrated sophisticated machine learning models to analyze user performance data and feedback. The platform dynamically adjusts workout difficulty and recommends recovery protocols, all wrapped in an energetic, highly motivating user interface.',
    results: 'Users reported a 55% higher completion rate of their fitness programs compared to standard apps. Armour Zone\'s personalized approach led to thousands of transformative health journeys and secured a highly engaged, loyal user base.',
  },
  {
    id: 'orange-charger',
    slug: 'orange-charger',
    headline: 'Orange Charger',
    description:
      'A comprehensive EV charging management platform built for modern infrastructure. We developed an end-to-end IoT integrated system that seamlessly connects smart charging hardware with an intuitive mobile application, enabling real-time energy monitoring, automated billing, and efficient resource management for both residential communities and property owners.',
    image: '/projects/orangecharger.png',
    accent: PROJECT_ACCENTS.burnt,
    seoTitle: 'Orange Charger — EV Charging Platform | Atior Technologies',
    seoDescription:
      'How we built Orange Charger, a comprehensive EV charging platform with smart products and solutions for residential communities.',
    challenge: 'Managing EV charging infrastructure across large residential communities involves complex hardware-software integration, real-time status monitoring, and granular billing systems. We needed to make this process completely frictionless for both residents and property managers.',
    approach: 'We developed a secure IoT gateway to communicate directly with charging stations, ensuring real-time data sync. The mobile app provides users with instant visibility into charger availability and charging progress, while the admin portal automates billing and maintenance alerts.',
    results: 'Orange Charger successfully deployed hundreds of smart charging points, reducing administrative overhead for property managers by 80%. The platform achieved a 99.9% uptime, establishing a new standard for reliability in residential EV infrastructure.',
  },
  {
    id: 'the-poppy-pie',
    slug: 'the-poppy-pie',
    headline: 'The Poppy Pie',
    description:
      'A dynamic digital marketing agency platform focused on data-driven growth. We built a customized web presence that highlights their capability to craft tailored marketing strategies, optimize brand visibility, and connect businesses with highly targeted audiences, ultimately driving measurable conversions and sustainable real-world results.',
    image: '/projects/thepoppypie.png',
    accent: PROJECT_ACCENTS.slate,
    seoTitle: 'The Poppy Pie — Marketing Agency Platform | Atior Technologies',
    seoDescription:
      'Building The Poppy Pie, a marketing agency website with tailored strategies for brand growth and audience engagement.',
    challenge: 'As a digital marketing agency, The Poppy Pie needed a digital presence that perfectly reflected their creative prowess and data-driven results. The challenge was to balance stunning, avant-garde aesthetics with exceptional performance and accessibility.',
    approach: 'We crafted a visually arresting website featuring fluid micro-animations, bold typography, and interactive case study presentations. We meticulously optimized the asset delivery and rendering pipeline to ensure that the heavy visuals did not compromise load times or SEO.',
    results: 'The new platform led to a 120% increase in inbound leads and a 45% decrease in bounce rate. It successfully positioned The Poppy Pie as a premium, cutting-edge agency, directly contributing to their acquisition of several high-profile enterprise clients.',
  },
  {
    id: 'zeerostock',
    slug: 'zeerostock',
    headline: 'Zeerostock',
    description:
      'An intelligent B2B surplus inventory marketplace designed to unlock hidden value in excess supply chains. We engineered a secure, high-volume trading platform featuring accelerated sourcing algorithms, automated liquidation workflows, and real-time auction capabilities, empowering enterprises to optimize their inventory turnover efficiently.',
    image: '/projects/zeerostock.png',
    accent: PROJECT_ACCENTS.teal,
    seoTitle: 'Zeerostock — Surplus Inventory Marketplace | Atior Technologies',
    seoDescription:
      'Architecting Zeerostock, a B2B marketplace transforming excess inventory into opportunity with intelligent sourcing and liquidation tools.',
    challenge: 'B2B surplus inventory liquidation is traditionally slow, opaque, and inefficient. We were tasked with building a secure marketplace capable of handling high-value bulk transactions, complex negotiations, and real-time bidding for enterprise supply chains.',
    approach: 'We implemented a robust auction engine capable of handling varied bidding formats and secure escrow payments. The platform features intelligent categorization and advanced search filters, allowing buyers to quickly identify lucrative opportunities among massive inventory datasets.',
    results: 'Zeerostock accelerated the average inventory liquidation cycle by 300%, helping enterprises recover millions in sunk costs. The platform quickly became a trusted venue for B2B transactions, boasting a 0% dispute rate thanks to its transparent workflows.',
  },
];

export const WORK_SECTION_COPY = {
  title: 'Our Work',
  subtitle:
    'We partner with ambitious teams to build products that define markets. Every project is an exercise in precision engineering, thoughtful design, and scalable architecture.',
} as const;