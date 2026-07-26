// src/constants/navigation.ts

import type { NavConfig } from '@/types/navigation';

export const NAV_CONFIG: NavConfig = {
  links: [
    {
      id: 'our-work',
      label: 'Our Work',
      target: '#our-work',
      ariaLabel: 'Navigate to Our Work section',
    },
    {
      id: 'our-team',
      label: 'Our Team',
      target: '#our-team',
      ariaLabel: 'Navigate to Our Team section',
    },
    {
      id: 'testimonials',
      label: 'Testimonials',
      target: '#testimonials',
      ariaLabel: 'Navigate to Testimonials section',
    },
  ],
  cta: {
    label: 'Book a Discovery Call',
    href: '#contact',
    ariaLabel: 'Book a discovery call with Atior Technologies',
  },
  logo: {
    alt: 'Atior Technologies',
    ariaLabel: 'Atior Technologies Home',
  },
};

export const SECTION_IDS = ['our-work', 'our-team', 'testimonials'] as const;

export const SCROLL_OFFSET = 80;

export const MOBILE_BREAKPOINT = 768;