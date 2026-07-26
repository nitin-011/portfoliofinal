// src/types/testimonials.ts

export interface Testimonial {
  id: string;
  clientName: string;
  companyName: string;
  role: string;
  quote: string;
  youtubeId: string;
  thumbnail: string;
  duration?: string;
}

export interface VideoModalState {
  isOpen: boolean;
  testimonial: Testimonial | null;
}

export interface YouTubeConfig {
  autoplay: number;
  rel: number;
  modestbranding: number;
  playsinline: number;
}

export type CardSize = 'tall' | 'medium' | 'short';