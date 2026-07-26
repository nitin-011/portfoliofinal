// src/types/case-study.ts

export interface CaseStudyMetric {
  id: string;
  value: string;
  label: string;
  prefix?: string;        
  suffix?: string;
  animationDelay: number;
}

export interface CaseStudyFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface TechnologyItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'ai' | 'devops' | 'design' | 'tools';
}

export interface CaseStudySection {
  id: string;
  title: string;
  content: string[];
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
}

export interface CaseStudyTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  videoId?: string;
}

export interface CaseStudySEO {
  title: string;
  description: string;
  ogImage: string;
  canonicalUrl: string;
  keywords: string[];
}

export interface CaseStudyData {
  id: string;
  slug: string;
  name: string;
  industry: string;
  shortDescription: string;
  heroImage: string;
  websiteUrl?: string;
  brandColor: string;
  sections: CaseStudySection[];
  technologies: TechnologyItem[];
  features: CaseStudyFeature[];
  metrics: CaseStudyMetric[];
  gallery: GalleryImage[];
  testimonial: CaseStudyTestimonial;
  seo: CaseStudySEO;
}