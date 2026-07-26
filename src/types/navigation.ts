// src/types/navigation.ts

export interface NavLink {
  id: string;
  label: string;
  target: string;
  ariaLabel: string;
}

export interface NavConfig {
  links: NavLink[];
  cta: {
    label: string;
    href: string;
    ariaLabel: string;
  };
  logo: {
    alt: string;
    ariaLabel: string;
  };
}

export interface ScrollTarget {
  id: string;
  element: HTMLElement | null;
  isDark: boolean;
}

export type ThemeMode = 'dark' | 'light';