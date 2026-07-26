// src/constants/process.ts

import type { ProcessSectionConfig, ProcessStage } from '@/types/process';

export const PROCESS_SECTION: ProcessSectionConfig = {
  heading: 'How we turn ideas into products',
  subtitle:
    'Every product we build follows a disciplined, transparent process designed for clarity and momentum. From first conversation to final deployment, you stay informed, involved, and confident — because great SaaS development and AI product engineering require more than code. They require trust, structure, and relentless attention to detail.',
  blocks: [
    {
      id: 'block-1',
      title: 'Discovery & Strategy',
      description: 'Define the problem, audience, and goals before we build.',
      icon: 'users',
    },
    {
      id: 'block-2',
      title: 'Roadmap & Planning',
      description: 'Map milestones, priorities, and delivery cadence together.',
      icon: 'calendar',
    },
    {
      id: 'block-3',
      title: 'Design & Experience',
      description: 'Craft polished interfaces that feel intuitive and premium.',
      icon: 'shield',
    },
    {
      id: 'block-4',
      title: 'Build & Launch',
      description: 'Ship production-ready products with rigorous quality.',
      icon: 'code',
    },
  ],
  dashboard: {
    projectName: 'Business Orbit',
    summary:
      'A unified client workspace showing the status of every phase and the artifacts you can review in real time.',
    sprint: {
      currentSprint: 2,
      totalSprints: 6,
      progress: 72,
      daysRemaining: 12,
    },
    tasks: [
      { id: 't1', label: 'Review backlog', status: 'completed', assignee: 'PM', delay: 0.1 },
      { id: 't2', label: 'Finalize API spec', status: 'in-progress', assignee: 'BE', delay: 0.2 },
      { id: 't3', label: 'UI review session', status: 'pending', assignee: 'UI', delay: 0.3 },
    ],
    milestones: [
      { id: 'm1', label: 'Wireframes approved', status: 'completed', date: 'May 10', delay: 0.1 },
      { id: 'm2', label: 'Architecture review', status: 'active', date: 'May 18', delay: 0.2 },
      { id: 'm3', label: 'Sprint demo', status: 'locked', date: 'May 24', delay: 0.3 },
    ],
    team: [
      { id: 'pm', initials: 'PM', role: 'Project Manager', color: '#D4AF37' },
      { id: 'fe', initials: 'FE', role: 'Frontend Lead', color: '#3B82F6' },
      { id: 'qa', initials: 'QA', role: 'QA Lead', color: '#F59E0B' },
    ],
  },
};

export const PROCESS_STAGES: ProcessStage[] = [
  {
    id: 'discovery',
    title: 'Discovery',
    description:
      'Clarify goals, success metrics, and core use cases through stakeholder interviews and product research.',
    progress: 5,
    timeline: 'Week 1 - Week 2',
    clientView: [
      'Project Brief',
      'Business Goals',
      'Kickoff Meeting Scheduled',
      'Assigned Project Manager',
      'Timeline Approved',
    ],
    tasks: [
      { id: 'd1', label: 'Stakeholder interviews', status: 'completed' },
      { id: 'd2', label: 'Market research', status: 'completed' },
      { id: 'd3', label: 'Project brief', status: 'in-progress' },
      { id: 'd4', label: 'Success metrics defined', status: 'pending' },
    ],
    recentUpdates: [
      'Kickoff meeting set for Monday at 10am.',
      'Project brief draft shared with founders.',
    ],
    assignedTeam: [
      { id: 'p1', initials: 'PM', name: 'Priya Mehta', role: 'Project Manager', color: '#D4AF37' },
      { id: 'pl', initials: 'PL', name: 'Uma Patel', role: 'Product Lead', color: '#3B82F6' },
    ],
    milestones: [
      { id: 'm1', label: 'Discovery complete', status: 'completed' },
      { id: 'm2', label: 'Goals aligned', status: 'completed' },
      { id: 'm3', label: 'Timeline approved', status: 'active' },
    ],
  },
  {
    id: 'planning',
    title: 'Planning',
    description:
      'Define scope, milestones, and a high-level delivery plan that aligns with business priorities.',
    progress: 15,
    timeline: 'Week 3 - Week 4',
    clientView: ['Roadmap', 'Milestones', 'Resource Plan', 'Initial Estimates'],
    tasks: [
      { id: 'p1', label: 'Scope workshop', status: 'completed' },
      { id: 'p2', label: 'Milestone mapping', status: 'in-progress' },
      { id: 'p3', label: 'Resourcing plan', status: 'pending' },
      { id: 'p4', label: 'Estimate review', status: 'pending' },
    ],
    recentUpdates: [
      'Roadmap draft shared for review.',
      'Milestone plan refined with executive feedback.',
    ],
    assignedTeam: [
      { id: 'pm', initials: 'PM', name: 'Priya Mehta', role: 'Project Manager', color: '#D4AF37' },
      { id: 'sa', initials: 'SA', name: 'Samir Ahuja', role: 'Strategy Lead', color: '#10B981' },
    ],
    milestones: [
      { id: 'm1', label: 'Scope confirmed', status: 'completed' },
      { id: 'm2', label: 'Roadmap approved', status: 'active' },
      { id: 'm3', label: 'Resource plan ready', status: 'locked' },
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture',
    description:
      'Design system architecture, data models, and API contracts for scalability and maintainability.',
    progress: 30,
    timeline: 'Week 5 - Week 6',
    clientView: ['Database Planning', 'API Design', 'System Architecture', 'Security Review'],
    tasks: [
      { id: 'a1', label: 'Data model diagrams', status: 'completed' },
      { id: 'a2', label: 'API contract definition', status: 'in-progress' },
      { id: 'a3', label: 'Security review', status: 'pending' },
      { id: 'a4', label: 'Infrastructure plan', status: 'pending' },
    ],
    recentUpdates: [
      'Architecture workshop completed.',
      'API contract shared with engineering team.',
    ],
    assignedTeam: [
      { id: 'ar', initials: 'AR', name: 'Akash Reddy', role: 'Solutions Architect', color: '#8B5CF6' },
      { id: 'be', initials: 'BE', name: 'Sana Khan', role: 'Backend Lead', color: '#3B82F6' },
    ],
    milestones: [
      { id: 'm1', label: 'Architecture approved', status: 'active' },
      { id: 'm2', label: 'Security sign-off', status: 'locked' },
      { id: 'm3', label: 'Infrastructure ready', status: 'locked' },
    ],
  },
  {
    id: 'design',
    title: 'UI / UX Design',
    description:
      'User flows, wireframes, and pixel-perfect interfaces designed for usability and brand fidelity.',
    progress: 45,
    timeline: 'Week 7 - Week 8',
    clientView: ['Design System', 'Prototype', 'UX Review', 'Design Handoff'],
    tasks: [
      { id: 'd1', label: 'UX flows mapped', status: 'completed' },
      { id: 'd2', label: 'Prototype review', status: 'in-progress' },
      { id: 'd3', label: 'UI polish', status: 'pending' },
      { id: 'd4', label: 'Accessibility check', status: 'pending' },
    ],
    recentUpdates: [
      'Prototype shared for stakeholder testing.',
      'Design system tokens finalized.',
    ],
    assignedTeam: [
      { id: 'ui', initials: 'UI', name: 'Aalia Iyer', role: 'Design Lead', color: '#F59E0B' },
      { id: 'ux', initials: 'UX', name: 'Nina Gupta', role: 'UX Strategist', color: '#10B981' },
    ],
    milestones: [
      { id: 'm1', label: 'UX review complete', status: 'completed' },
      { id: 'm2', label: 'UI deliverables ready', status: 'active' },
      { id: 'm3', label: 'Design handoff', status: 'locked' },
    ],
  },
  {
    id: 'development',
    title: 'Development',
    description:
      'Build features in iterative sprints, with continuous integration and frequent demos.',
    progress: 70,
    timeline: 'Week 9 - Week 14',
    clientView: ['Current Sprint', 'Progress', 'Tasks Completed', 'Developers Assigned', 'Latest Update'],
    tasks: [
      { id: 'dev1', label: 'Authentication module', status: 'completed' },
      { id: 'dev2', label: 'Dashboard build', status: 'in-progress' },
      { id: 'dev3', label: 'API integration', status: 'in-progress' },
      { id: 'dev4', label: 'Notifications system', status: 'pending' },
    ],
    recentUpdates: [
      'Sprint demo scheduled for Friday.',
      'Backend integration reached 65% completion.',
    ],
    assignedTeam: [
      { id: 'fe', initials: 'FE', name: 'Janet Doe', role: 'Frontend Lead', color: '#3B82F6' },
      { id: 'be', initials: 'BE', name: 'Shyam Kolhe', role: 'Backend Lead', color: '#10B981' },
      { id: 'qa', initials: 'QA', name: 'Mia Kim', role: 'QA Lead', color: '#F59E0B' },
    ],
    milestones: [
      { id: 'm1', label: 'MVP dev complete', status: 'active' },
      { id: 'm2', label: 'API stable', status: 'locked' },
      { id: 'm3', label: 'Sprint review', status: 'locked' },
    ],
  },
  {
    id: 'qa',
    title: 'Quality Assurance',
    description:
      'Automated and manual testing to ensure reliability, security, and performance.',
    progress: 85,
    timeline: 'Week 15 - Week 16',
    clientView: ['Bug Report', 'Performance Score', 'Testing Progress', 'Pending Issues'],
    tasks: [
      { id: 'q1', label: 'Bug triage', status: 'completed' },
      { id: 'q2', label: 'Regression testing', status: 'in-progress' },
      { id: 'q3', label: 'Performance tuning', status: 'in-progress' },
      { id: 'q4', label: 'Release readiness', status: 'pending' },
    ],
    recentUpdates: [
      '90% of test cases passed.',
      'Critical issue addressed and retested.',
    ],
    assignedTeam: [
      { id: 'qa1', initials: 'QA', name: 'Mia Kim', role: 'QA Lead', color: '#F59E0B' },
      { id: 'dev', initials: 'DV', name: 'Arun V.', role: 'DevOps', color: '#8B5CF6' },
    ],
    milestones: [
      { id: 'm1', label: 'QA sign-off', status: 'active' },
      { id: 'm2', label: 'Performance target met', status: 'locked' },
      { id: 'm3', label: 'Release readiness', status: 'locked' },
    ],
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description:
      'Production rollout, monitoring, and rollback plans for safe releases.',
    progress: 95,
    timeline: 'Week 17 - Week 18',
    clientView: ['Production Ready', 'Deployment Checklist', 'Server Status', 'Monitoring Enabled'],
    tasks: [
      { id: 'dp1', label: 'Deployment checklist', status: 'completed' },
      { id: 'dp2', label: 'Monitoring setup', status: 'in-progress' },
      { id: 'dp3', label: 'Rollback plan', status: 'in-progress' },
      { id: 'dp4', label: 'Launch approval', status: 'pending' },
    ],
    recentUpdates: [
      'Production environment provisioned.',
      'Monitoring and alerting workflows are live.',
    ],
    assignedTeam: [
      { id: 'do', initials: 'DO', name: 'Isha Patel', role: 'DevOps Lead', color: '#3B82F6' },
      { id: 'pm', initials: 'PM', name: 'Priya Mehta', role: 'Project Manager', color: '#D4AF37' },
    ],
    milestones: [
      { id: 'm1', label: 'Production ready', status: 'active' },
      { id: 'm2', label: 'Monitoring live', status: 'locked' },
      { id: 'm3', label: 'Launch approval', status: 'locked' },
    ],
  },
  {
    id: 'scale',
    title: 'Scale & Support',
    description:
      'Ongoing improvements, performance tuning, and long-term support.',
    progress: 100,
    timeline: 'Ongoing',
    clientView: ['Retention Plan', 'Scaling Strategy', 'Support SLA', 'Roadmap for Growth'],
    tasks: [
      { id: 's1', label: 'Support SLA established', status: 'completed' },
      { id: 's2', label: 'Growth roadmap', status: 'completed' },
      { id: 's3', label: 'Optimization plan', status: 'in-progress' },
      { id: 's4', label: 'Post-launch support', status: 'in-progress' },
    ],
    recentUpdates: [
      'SLA shared with stakeholders.',
      'Scaling plan aligned with performance budgets.',
    ],
    assignedTeam: [
      { id: 'cs', initials: 'CS', name: 'Kavya Singh', role: 'Customer Success', color: '#10B981' },
      { id: 'pm', initials: 'PM', name: 'Priya Mehta', role: 'Project Manager', color: '#D4AF37' },
    ],
    milestones: [
      { id: 'm1', label: 'Support launched', status: 'completed' },
      { id: 'm2', label: 'Scaling plan live', status: 'active' },
      { id: 'm3', label: 'Roadmap update', status: 'locked' },
    ],
  },
];

export const PROCESS_COLORS = {
  bg: '#F7F3EC',
  card: '#FFFFFF',
  textPrimary: '#111111',
  textSecondary: '#5A5A5A',
  border: '#E8E4DD',
  accent: '#D4AF37',
  success: '#10B981',
  warning: '#F59E0B',
  muted: '#9CA3AF',
} as const;
