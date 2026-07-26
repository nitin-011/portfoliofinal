// src/components/ui/TechLogo.tsx

import { memo } from 'react';

interface TechLogoProps {
  techId: string;
  className?: string;
}

const LOGO_SVGS: Record<string, React.ReactNode> = {
  react: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 12 12)" />
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" fill="white" />
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path d="M5 12.5v-1h4v1H5zm0 2.5v-1h4v1H5zm5.5-3.5c0-.8.7-1.5 1.5-1.5h2c.8 0 1.5.7 1.5 1.5v.5h-1v-.5c0-.3-.2-.5-.5-.5h-2c-.3 0-.5.2-.5.5s.2.5.5.5h1.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-2c-.8 0-1.5-.7-1.5-1.5v-.5h1v.5c0 .3.2.5.5.5h2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-1.5c-.8 0-1.5-.7-1.5-1.5z" fill="white" />
      <path d="M15.5 8h1v8h-1V8z" fill="white" />
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.51 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.49 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.51 12 7 12z" fill="#38BDF8" />
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18l6.9 3.82L12 11.82 5.1 8 12 4.18zM5 9.5l6 3.33v6.34l-6-3.33V9.5zm8 9.67v-6.34l6-3.33v6.34l-6 3.33z" fill="#539E43" />
    </svg>
  ),
  express: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z" fill="white" opacity="0.8" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold" fontFamily="system-ui">ex</text>
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2c-2 0-4 0-4 2v2h4v1H6C4 5 2 6 2 9c0 3 2 4 4 4h2v-2c0-2 2-4 4-4h4c2 0 4-2 4-4V4c0-2-2-2-4-2h-4zm-2 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" fill="#3776AB" />
      <path d="M12 22c2 0 4 0 4-2v-2h-4v-1h6c2 0 4-1 4-4 0-3-2-4-4-4h-2v2c0 2-2 4-4 4H8c-2 0-4 2-4 4v1c0 2 2 2 4 2h4zm2-2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" fill="#FFD43B" />
    </svg>
  ),
  fastapi: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#009688" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  postgresql: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#336791" />
      <path d="M10 8c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z" fill="white" />
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#47A248" />
      <path d="M12 6c-2 0-3 2-3 5s1.5 6 3 7c1.5-1 3-4 3-7s-1-5-3-5z" fill="#47A248" />
    </svg>
  ),
  firebase: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4.5 18.5L7.5 3L12 10.5L4.5 18.5z" fill="#FFA000" />
      <path d="M4.5 18.5L12 10.5L15 14.5L4.5 18.5z" fill="#F57C00" />
      <path d="M19.5 18.5L15 14.5L12 10.5L19.5 18.5z" fill="#FFCA28" />
      <path d="M19.5 18.5L4.5 18.5L12 10.5L19.5 18.5z" fill="#FFA000" />
    </svg>
  ),
  openai: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M22.5 12c0-2.5-1.5-4.5-3.5-5.5.5-2-1-4-3-4.5-1-.5-2 0-2.5.5-1.5-1.5-4-1.5-5.5 0-.5-.5-1.5-1-2.5-.5-2 .5-3.5 2.5-3 4.5-2 1-3.5 3-3.5 5.5s1.5 4.5 3.5 5.5c-.5 2 1 4 3 4.5 1 .5 2 0 2.5-.5 1.5 1.5 4 1.5 5.5 0 .5.5 1.5 1 2.5.5 2-.5 3.5-2.5 3-4.5 2-1 3.5-3 3.5-5.5zM12 17c-2.5 0-4.5-2-4.5-4.5S9.5 8 12 8s4.5 2 4.5 4.5S14.5 17 12 17z" fill="white" />
    </svg>
  ),
  langchain: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" stroke="#1C3C3C" strokeWidth="2" fill="none" />
      <path d="M12 7l-4 2.5v5L12 17l4-2.5v-5L12 7z" fill="#1C3C3C" />
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 10h2v2H4v-2zm4 0h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM4 14h2v2H4v-2zm4 0h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" fill="#2496ED" />
      <path d="M2 18h20v2H2v-2zm2-8h2V8H4v2zm4 0h2V8H8v2zm4 0h2V8h-2v2zm4 0h2V8h-2v2z" fill="#2496ED" />
      <path d="M13 6V4h-2v2H9V4H7v2H5V4H3v2H1v10h22V6H13z" fill="#2496ED" />
    </svg>
  ),
  aws: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6.5 12.5l-3 3.5v-7l3 3.5zm11 0l3 3.5v-7l-3 3.5zM12 6l-3.5 3h7L12 6zm0 12l-3.5-3h7l-3.5 3z" fill="#FF9900" />
      <path d="M12 2L6 8l6 6 6-6-6-6z" fill="#FF9900" />
      <path d="M12 22l6-6-6-6-6 6 6 6z" fill="#FF9900" />
    </svg>
  ),
  vercel: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2L2 20h20L12 2z" fill="white" />
    </svg>
  ),
  cloudflare: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 4c-4 0-7 3-7 7 0 2 1 4 2.5 5.5L12 22l4.5-5.5C18 15 19 13 19 11c0-4-3-7-7-7z" fill="#F48120" />
      <path d="M12 8c-2 0-3.5 1.5-3.5 3.5S10 15 12 15s3.5-1.5 3.5-3.5S14 8 12 8z" fill="white" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill="white" />
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 2a4 4 0 000 8h4V6a4 4 0 00-4-4z" fill="#F24E1E" />
      <path d="M8 10a4 4 0 000 8 4 4 0 004-4v-4H8z" fill="#A259FF" />
      <path d="M16 6a4 4 0 010 8h-4V6h4z" fill="#1ABCFE" />
      <path d="M16 14a4 4 0 11-4 4v-4h4z" fill="#0ACF83" />
    </svg>
  ),
  clickup: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2L4 8l8 6 8-6-8-6z" fill="#7B68EE" />
      <path d="M4 14l8 6 8-6" stroke="#7B68EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export const TechLogo = memo(function TechLogo({ techId, className = '' }: TechLogoProps) {
  const svg = LOGO_SVGS[techId] || LOGO_SVGS['react']; // Fallback

  return (
    <div className={`flex h-8 w-8 items-center justify-center ${className}`}>
      {svg}
    </div>
  );
});