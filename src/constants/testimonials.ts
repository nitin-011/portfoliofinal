// src/constants/testimonials.ts

import type { Testimonial, YouTubeConfig } from '@/types/testimonials';

export const YOUTUBE_CONFIG: YouTubeConfig = {
  autoplay: 1,
  rel: 0,
  modestbranding: 1,
  playsinline: 1,
};

export const TESTIMONIALS_SECTION = {
  heading: 'What Our Clients Say',
  subtitle:
    'The most honest measure of our work is the experience of the founders and business owners who trusted us with their vision. Here is what they have to say.',
} as const;

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    clientName: 'Rahul Sharma',
    companyName: 'Business Orbit',
    role: 'Founder & CEO',
    quote: 'Atior transformed our procurement process into a product our enterprise clients actually love using.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: '/testimonials/rahul-sharma.jpg',
    duration: '2:34',
  },
  {
    id: 'testimonial-2',
    clientName: 'Priya Malhotra',
    companyName: 'Startup Mela',
    role: 'Co-Founder',
    quote: 'They built a platform that handled 50,000 concurrent users without a single crash. That is engineering you can trust.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: '/testimonials/priya-malhotra.jpg',
    duration: '1:58',
  },
  {
    id: 'testimonial-3',
    clientName: 'Amit Patel',
    companyName: 'My Salon',
    role: 'CEO',
    quote: 'The AI booking system reduced our no-shows by 60%. Atior understood our business before they wrote a single line of code.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: '/testimonials/amit-patel.jpg',
    duration: '3:12',
  },
  {
    id: 'testimonial-4',
    clientName: 'Sneha Gupta',
    companyName: 'Hanginn',
    role: 'Founder',
    quote: 'From concept to launch in 12 weeks. The team at Atior moves with a speed and precision I have rarely seen.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: '/testimonials/sneha-gupta.jpg',
    duration: '2:05',
  },
  {
    id: 'testimonial-5',
    clientName: 'Vikram Rao',
    companyName: 'FinStack',
    role: 'CTO',
    quote: 'Compliance, scalability, and clean architecture — Atior delivered all three without compromise.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: '/testimonials/vikram-rao.jpg',
    duration: '2:47',
  },
  {
    id: 'testimonial-6',
    clientName: 'Ananya Desai',
    companyName: 'GreenLedger',
    role: 'Head of Product',
    quote: 'They built carbon tracking software that our Fortune 500 clients trust for audit-grade reporting.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: '/testimonials/ananya-desai.jpg',
    duration: '1:45',
  },
];

export const TESTIMONIAL_COLORS = {
  bg: '#050505',
  card: '#111111',
  textPrimary: '#FFFFFF',
  textSecondary: '#B5B5B5',
  border: '#222222',
  borderHover: '#333333',
  accent: '#D4AF37',
  overlay: 'rgba(0, 0, 0, 0.85)',
} as const;

export const TESTIMONIAL_ANIMATION = {
  staggerDelay: 0.1,
  cardRevealDuration: 0.6,
  modalFadeDuration: 0.3,
  hoverDuration: 0.25,
} as const;