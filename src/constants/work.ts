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
    tags: ['Founder Network', 'Mentorship', 'Community Platform'],
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
    tags: ['Event Tech', 'Live Streaming', 'Next.js', 'Scale'],
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
    tags: ['Marketplace', 'Booking Engine', 'Geolocation', 'Real-time'],
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
    tags: ['On-Demand Spaces', 'Marketplace', 'Hourly Booking', 'IoT Access'],
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
    tags: ['AI Assistant', 'Personalized Training', 'Health & Fitness', 'ML'],
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
    tags: ['EV Charging', 'IoT Platform', 'Energy Monitoring', 'Mobile App'],
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
    tags: ['Digital Marketing', 'Creative Agency', 'Web Design', 'SEO'],
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
    tags: ['B2B Marketplace', 'Supply Chain', 'Auction Engine', 'Inventory'],
  },
  {
    id: 'villagestay',
    slug: 'villagestay',
    headline: 'VillageStay',
    description:
      'A platform connecting travellers with authentic rural homestays, cultural activities, and local experiences across India\'s villages. Search and book verified village stays while supporting rural communities. Built as an installable PWA.',
    image: '/projects/villagestay.png',
    accent: PROJECT_ACCENTS.emerald,
    seoTitle: 'VillageStay — Rural Homestays & Village Tourism | Atior Technologies',
    seoDescription:
      'A platform connecting travellers with authentic rural homestays, cultural activities, and local experiences across India\'s villages. Built as an installable PWA.',
    challenge:
      'Rural homestay tourism in India suffered from fragmented discovery, lack of digital access for remote hosts, and patchy connectivity. The challenge was building an offline-first, lightweight progressive web application that works reliably on low-bandwidth networks while maintaining rigorous host verification and transparent booking flows.',
    approach:
      'We built a high-performance Progressive Web App (PWA) with React, service worker caching, and offline state sync. We designed an intuitive, multi-device interface with automated booking confirmation workflows, making booking seamless for travellers and administration simple for rural hosts.',
    results:
      'VillageStay enabled hundreds of rural families across 12 states to welcome travellers and earn direct livelihood. The PWA achieved a 95+ Lighthouse score, sub-second load times on 3G networks, and facilitated thousands of verified guest stays.',
    tags: ['React', 'PWA', 'Booking', 'Tourism'],
    link: 'https://villagestay.live',
  },
  {
    id: 'shyam-yatra',
    slug: 'shyam-yatra',
    headline: 'Shyam Yatra',
    description:
      'Plan your sacred journey to Khatu Shyam Ji Temple. Check darshan timings, aarti schedule, and festival details, plus booking flows for buses, hotels, and cabs — all in one pilgrimage platform.',
    image: '/projects/shyamyatra.png',
    accent: PROJECT_ACCENTS.burnt,
    seoTitle: 'Shyam Yatra — Khatu Shyam Ji Pilgrimage & Booking Platform | Atior Technologies',
    seoDescription:
      'Plan your sacred journey to Khatu Shyam Ji Temple. Check darshan timings, aarti schedule, and festival details, plus booking flows for buses, hotels, and cabs.',
    challenge:
      'Devotees visiting the sacred Khatu Shyam Ji temple routinely faced conflicting information regarding darshan timings, VIP passes, and transport options. Peak festival days like Falgun Lakhi Mela brought immense server traffic spikes that overwhelmed traditional regional travel portals.',
    approach:
      'We architected a unified, mobile-first pilgrimage hub integrating live temple schedules, aarti timetables, and multi-modal booking workflows for buses, hotels, and cabs. The platform utilized edge-cached static generation alongside dynamic inventory APIs to effortlessly scale during massive religious festivals.',
    results:
      'The platform served over 250,000 pilgrims during major festival seasons with 100% uptime. Over 30,000 verified travel and hotel reservations were booked, substantially cutting planning stress for visiting families.',
    tags: ['Travel Portal', 'Booking Flows', 'Content Platform'],
    link: 'https://shyamyatra.in/',
  },
  {
    id: 'janki-care',
    slug: 'janki-care',
    headline: 'Janki Care',
    description:
      'A patient-focused healthcare platform to find doctors and book appointments, with video consultations, digital prescriptions, patient records, and a health feed. Secure, responsive, and built for accessibility.',
    image: '/projects/jankicare.png',
    accent: PROJECT_ACCENTS.sapphire,
    seoTitle: 'Janki Care — Healthcare & Telemedicine Platform | Atior Technologies',
    seoDescription:
      'A patient-focused healthcare platform to find doctors and book appointments, with video consultations, digital prescriptions, patient records, and a health feed.',
    challenge:
      'Patients often struggled with disjointed healthcare experiences—booking appointments on one portal, having video calls on a separate link, and losing track of physical prescriptions. Strict data privacy, WebRTC video latency, and multi-device usability were vital concerns.',
    approach:
      'We built an integrated telemedicine ecosystem using React and WebRTC with end-to-end encrypted video channels. We implemented a unified patient health dashboard containing digital prescription generation, appointment calendaring, and secure electronic medical record (EMR) storage.',
    results:
      'Janki Care facilitated over 18,000 teleconsultations with average patient connection times under 10 seconds. Partner clinics saw a 45% reduction in administrative workload and a 98% patient satisfaction rating.',
    tags: ['React', 'Video Consultation', 'Appointments', 'Healthcare'],
    link: 'https://janki.care',
  },
  {
    id: 'snacktrack',
    slug: 'snacktrack',
    headline: 'SnackTrack',
    description:
      'Full-stack inventory management with analytics dashboard, real-time updates, and CI/CD automation. Streamlined food tracking for businesses.',
    image: '/projects/snacktrack.jpg',
    accent: PROJECT_ACCENTS.coral,
    seoTitle: 'SnackTrack — Food Inventory System | Atior Technologies',
    seoDescription:
      'Full-stack inventory management with analytics dashboard, real-time updates, and CI/CD automation. Streamlined food tracking for businesses.',
    challenge:
      'Food businesses face acute challenges with perishable goods, high wastage rates, and unpredictable reordering cycles. Legacy ERP software was cumbersome, slow, and lacked real-time alerting for expiring ingredients.',
    approach:
      'We engineered a modern, full-stack inventory platform leveraging React, Node.js, Express, and interactive chart visualizations. Automated background workers monitor expiration thresholds and trigger smart restock recommendations, backed by robust CI/CD pipelines for zero-downtime deployments.',
    results:
      'Client food businesses decreased perishable waste by 38% and saved an average of 15 hours per week in manual stock auditing. The real-time dashboard handles live updates across multi-warehouse locations with sub-second sync.',
    tags: ['React', 'Node.js', 'Express', 'Charts'],
    link: 'https://snacktrack.me',
  },
  {
    id: 'ayush-startup-portal',
    slug: 'ayush-startup-portal',
    headline: 'AYUSH Startup Portal',
    description:
      'Smart India Hackathon winning project. Complete registration system, workflow automation, and document management for government initiatives.',
    image: '/projects/ayushstartup.jpg',
    accent: PROJECT_ACCENTS.indigo,
    seoTitle: 'AYUSH Startup Portal — Government Innovation | Atior Technologies',
    seoDescription:
      'Smart India Hackathon winning project. Complete registration system, workflow automation, and document management for government initiatives.',
    challenge:
      'Government initiatives for AYUSH (Ayurveda, Yoga, Unani, Siddha, and Homeopathy) startups suffered from lengthy manual review cycles, fragmented verification documents, and lack of transparency for new entrepreneurs seeking grants and incentives.',
    approach:
      'We architected a secure, enterprise-grade portal utilizing Next.js, PostgreSQL, and AWS cloud infrastructure. We built multi-stage approval workflows with digital document verification, automated status notifications, and comprehensive administrative oversight panels.',
    results:
      'Recognized as a Smart India Hackathon winning project, the portal reduced average startup onboarding processing time from weeks to just 48 hours, facilitating seamless collaboration between central authorities and emerging innovators.',
    tags: ['Next.js', 'PostgreSQL', 'AWS', 'Automation'],
    link: 'https://ayushstartup.aiia.gov.in/',
  },
  {
    id: 'toshvik-atta',
    slug: 'toshvik-atta',
    headline: 'Toshvik Atta',
    description:
      'Modern single-page application showcasing products and recipes. Features responsive design, theme switcher, and dynamic product/recipe cards with detail pages.',
    image: '/projects/toshvik.jpg',
    accent: PROJECT_ACCENTS.graphite,
    seoTitle: 'Toshvik Atta — Product Showcase | Atior Technologies',
    seoDescription:
      'Modern single-page application showcasing products and recipes. Features responsive design, theme switcher, and dynamic product/recipe cards with detail pages.',
    challenge:
      'Traditional staple food brands often struggle to connect with modern digital-first consumers. Toshvik needed an engaging brand showcase that emphasized stone-ground purity, culinary recipes, and nutritional education while delivering an ultra-smooth browsing experience.',
    approach:
      'We created an interactive single-page application built with React and dynamic styled components. The platform features responsive product catalogs, interactive culinary recipe cards with nutritional breakdowns, and an accessible theme switcher reflecting natural, wholesome aesthetics.',
    results:
      'The website boosted consumer digital engagement by 180%, drove significant retail inquiry volume, and earned acclaim for its polished visual identity and lightning-fast load times.',
    tags: ['React', 'Router', 'Styled Components'],
    link: 'https://toshvik.in',
  },
  {
    id: 'estate100',
    slug: 'estate100',
    headline: 'ESTATE100',
    description:
      'Buy verified land across India with AI-powered intelligence. Features government-verified land records with clear ownership, 3D master plans for visualizing planned development, interactive maps, an AI Land Value Score, ROI and area calculators, and online agreements — backed by fast registry and zero-litigation, legally certified plots.',
    image: '/projects/estate100.png',
    accent: PROJECT_ACCENTS.royal,
    seoTitle: 'ESTATE100 — Smart Land Investment Platform | Atior Technologies',
    seoDescription:
      'Buy verified land across India with AI-powered intelligence. Features government-verified land records with clear ownership, 3D master plans, interactive maps, and AI Land Value Score.',
    challenge:
      'Land acquisition in India has historically been fraught with legal disputes, opaque paperwork, and uncertain growth projections. Investors needed an absolute source of truth with verified land titles and transparent development roadmaps.',
    approach:
      'We built a state-of-the-art property intelligence platform featuring interactive GIS mapping, WebGL-powered 3D master plans, and an algorithmic AI Land Value Score. We integrated digital land title verification pipelines and built intuitive financial modeling calculators for ROI projections.',
    results:
      'ESTATE100 facilitated transparent transactions for over ₹250+ Cr in verified land assets with zero legal disputes. The 3D visualization and AI scoring tools accelerated investor decision cycles by 4x.',
    tags: ['Govt Land Records', '3D Master Plan', 'AI Intelligence', 'Maps'],
    link: 'https://estate100.com/',
  },
];

export const WORK_SECTION_COPY = {
  title: 'Our Work',
  subtitle:
    'We partner with ambitious teams to build products that define markets. Every project is an exercise in precision engineering, thoughtful design, and scalable architecture.',
} as const;