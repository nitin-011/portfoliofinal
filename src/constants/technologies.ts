// src/constants/technologies.ts

import type { Technology, MarqueeConfig } from '@/types/technologies';

export const MARQUEE_CONFIG: MarqueeConfig = {
  speed: 60,
  hoverSpeed: 20,
  gap: 64,
  pauseOnHover: false,
  direction: 'left',
};

export const TECHNOLOGIES_SECTION_COPY = {
  title: 'Technologies We Use',
  subtitle:
    'The modern stack powering every product we engineer — chosen for reliability, scalability, and long-term maintainability.',
} as const;

export const TECHNOLOGIES: Technology[] = [
  {
    id: 'react',
    name: 'React',
    logo: 'react',
    category: 'frontend',
    website: 'https://react.dev',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    logo: 'nextjs',
    category: 'frontend',
    website: 'https://nextjs.org',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    logo: 'typescript',
    category: 'frontend',
    website: 'https://typescriptlang.org',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    logo: 'tailwind',
    category: 'frontend',
    website: 'https://tailwindcss.com',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    logo: 'nodejs',
    category: 'backend',
    website: 'https://nodejs.org',
  },
  {
    id: 'express',
    name: 'Express.js',
    logo: 'express',
    category: 'backend',
    website: 'https://expressjs.com',
  },
  {
    id: 'python',
    name: 'Python',
    logo: 'python',
    category: 'backend',
    website: 'https://python.org',
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    logo: 'fastapi',
    category: 'backend',
    website: 'https://fastapi.tiangolo.com',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    logo: 'postgresql',
    category: 'backend',
    website: 'https://postgresql.org',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    logo: 'mongodb',
    category: 'backend',
    website: 'https://mongodb.com',
  },
  {
    id: 'firebase',
    name: 'Firebase',
    logo: 'firebase',
    category: 'backend',
    website: 'https://firebase.google.com',
  },
  {
    id: 'openai',
    name: 'OpenAI',
    logo: 'openai',
    category: 'ai',
    website: 'https://openai.com',
  },
  {
    id: 'langchain',
    name: 'LangChain',
    logo: 'langchain',
    category: 'ai',
    website: 'https://langchain.com',
  },
  {
    id: 'docker',
    name: 'Docker',
    logo: 'docker',
    category: 'devops',
    website: 'https://docker.com',
  },
  {
    id: 'aws',
    name: 'AWS',
    logo: 'aws',
    category: 'devops',
    website: 'https://aws.amazon.com',
  },
  {
    id: 'vercel',
    name: 'Vercel',
    logo: 'vercel',
    category: 'devops',
    website: 'https://vercel.com',
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    logo: 'cloudflare',
    category: 'devops',
    website: 'https://cloudflare.com',
  },
  {
    id: 'github',
    name: 'GitHub',
    logo: 'github',
    category: 'tools',
    website: 'https://github.com',
  },
  {
    id: 'figma',
    name: 'Figma',
    logo: 'figma',
    category: 'design',
    website: 'https://figma.com',
  },
  {
    id: 'clickup',
    name: 'ClickUp',
    logo: 'clickup',
    category: 'tools',
    website: 'https://clickup.com',
  },
];