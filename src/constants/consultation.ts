// src/constants/consultation.ts

import type { StepConfig, ProjectType, ContactMethod } from '@/types/consultation';

export const CONSULTATION_SECTION = {
  heading: "Let's Build Your Next Product",
  subtitle:
    'Tell us about your vision. We will review every detail and respond within 24 hours with a thoughtful assessment of how we can help — no generic proposals, no pressure.',
} as const;

export const STEPS: StepConfig[] = [
  {
    number: 1,
    title: 'Tell us about yourself',
    subtitle: 'A quick introduction so we know who we are speaking with.',
  },
  {
    number: 2,
    title: 'What would you like us to build?',
    subtitle: 'Select all that apply. We build across the full spectrum of digital products.',
  },
  {
    number: 3,
    title: 'Tell us about your idea',
    subtitle: 'The more context you share, the more valuable our first conversation will be.',
  },
  {
    number: 4,
    title: 'Project details',
    subtitle: 'A few practical details to help us prepare for our call.',
  },
];

export const PROJECT_TYPE_OPTIONS: { value: ProjectType; label: string }[] = [
  { value: 'saas', label: 'SaaS Platform' },
  { value: 'ai', label: 'AI Product' },
  { value: 'website', label: 'Business Website' },
  { value: 'mobile', label: 'Mobile Application' },
  { value: 'enterprise', label: 'Enterprise Software' },
  { value: 'custom', label: 'Custom Software' },
  { value: 'other', label: 'Other' },
];

export const BUDGET_OPTIONS = [
  { value: '', label: 'Select estimated budget' },
  { value: '10k-25k', label: '$10,000 – $25,000' },
  { value: '25k-50k', label: '$25,000 – $50,000' },
  { value: '50k-100k', label: '$50,000 – $100,000' },
  { value: '100k-250k', label: '$100,000 – $250,000' },
  { value: '250k+', label: '$250,000+' },
  { value: 'not-sure', label: 'Not sure yet' },
];

export const TIMELINE_OPTIONS = [
  { value: '', label: 'Select preferred timeline' },
  { value: '1-2-months', label: '1–2 months' },
  { value: '3-6-months', label: '3–6 months' },
  { value: '6-12-months', label: '6–12 months' },
  { value: '12-months+', label: '12+ months' },
  { value: 'not-sure', label: 'Not sure yet' },
];

export const CONTACT_METHOD_OPTIONS: { value: ContactMethod; label: string }[] = [
  { value: 'phone', label: 'Phone' },
  { value: 'email', label: 'Email' },
  { value: 'whatsapp', label: 'WhatsApp' },
];

export const CONSULTATION_COLORS = {
  bg: '#050505',
  card: '#111111',
  textPrimary: '#FFFFFF',
  textSecondary: '#B5B5B5',
  textMuted: '#6B6B6B',
  border: '#222222',
  borderFocus: '#D4AF37',
  inputBg: '#0A0A0A',
  accent: '#D4AF37',
  accentHover: '#B8962E',
  error: '#EF4444',
  success: '#10B981',
} as const;

export const CONSULTATION_COPY = {
  successTitle: 'Thank you. We have received your vision.',
  successMessage:
    'A member of our team will carefully review your submission and reach out within 24 hours to schedule your discovery call. We look forward to understanding your business and exploring how we can build something exceptional together.',
  successCta: 'Return to Home',
  textareaPlaceholder:
    'Describe your business, your idea, the problem you are solving, your target users, and what success looks like for you. The more detail you share, the better our first conversation will be.',
  otherPlaceholder: 'Please describe what you are looking to build...',
  additionalInfoPlaceholder: 'Anything else that would help us prepare? Timeline constraints, technical requirements, team size, or specific challenges...',
} as const;

export const CONSULTATION_ANIMATION = {
  stepTransitionDuration: 0.4,
  progressDuration: 0.3,
  inputFocusDuration: 0.2,
  successFadeDuration: 0.6,
} as const;