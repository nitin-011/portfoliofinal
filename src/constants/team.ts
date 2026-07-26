// src/constants/team.ts

export const TEAM_SECTION = {
  tagline: 'OUR TEAM',
  headingMain: 'Meet the People',
  headingAccent: 'Behind Atior',
  subtitle:
    'Every product we ship is the result of deliberate collaboration between product strategists, engineering leads, project managers, and a scalable execution team. This is how organized product engineering works.',
  totalPeopleBadge: {
    stat: '20+',
    label: 'People Driving Excellence',
  },
  mentor: {
    sectionTag: 'MENTOR & GUIDING FORCE',
    id: 'neelam',
    name: 'Dr. Neelam Goel',
    role: 'MENTOR',
    bio: 'Guiding our vision, strategy, and commitment to excellence.',
    quote: 'Great products are built when clarity meets commitment.',
    image: '/team/neelam.jpg',
  },

  engineeringBlock: {
    title: 'Engineering Excellence',
    description:
      'A compact engineering squad built to execute product launches with speed, quality, and security.',
    stats: {
      developers: '12',
      freelancers: '35',
    },
    specializations: ['React', 'Node.js', 'Cloud', 'QA', 'UX integration'],
  },

  leadershipTag: 'LEADERSHIP TEAM',
  leadership: [
    {
      id: 'nitin',
      name: 'Nitin',
      role: 'FOUNDER',
      bio: 'Driving product strategy, innovation and overall vision.',
      image: '/team/nitin.jpg',
    },
    {
      id: 'tanu',
      name: 'Tanu',
      role: 'OPERATIONS MANAGER',
      bio: 'Ensuring smooth operations, delivery and team alignment.',
      image: '/team/tanu.jpg',
    },
    {
      id: 'abhimanyu',
      name: 'Abhimanyu',
      role: 'BUSINESS & PARTNERSHIPS',
      bio: 'Building partnerships, driving growth and business development.',
      image: '/team/abhimanyu.jpg',
    },
  ],
  coreTeamsTag: 'OUR CORE TEAMS',
  coreTeams: [
    {
      id: 'engineering',
      title: 'Engineering Team',
      icon: 'users',
      description:
        'A dedicated core of engineers supported by a curated network of specialists. We build scalable, secure and high-performance products.',
      stats: [
        { value: '7+', label: 'Engineers' },
        { value: '50+', label: 'Specialist Freelancers' },
      ],
    },
    {
      id: 'design',
      title: 'Design Team',
      icon: 'palette',
      description:
        'Crafting intuitive experiences that combine user research, visual design and brand consistency.',
      stats: [
        { value: '3+', label: 'Designers' },
        { value: '10+', label: 'Creative Collaborators' },
      ],
    },
    {
      id: 'pm',
      title: 'Project Management',
      icon: 'clipboard',
      description:
        'Planning, sprinting and delivering with clarity. Our PMs keep everything organized and moving forward.',
      stats: [
        { value: '2+', label: 'Project Managers' },
        { value: '5+', label: 'Delivery Coordinators' },
      ],
    },
    {
      id: 'qa',
      title: 'Quality Assurance',
      icon: 'shield',
      description:
        'Ensuring reliability, performance and security through rigorous testing and quality standards.',
      stats: [
        { value: '2+', label: 'QA Engineers' },
        { value: '5+', label: 'Testing Specialists' },
      ],
    },
  ],
  trustStatement:
    'Exceptional products are not the work of isolated talent. They emerge from teams with clear ownership, disciplined execution, and a shared commitment to engineering excellence.',
};

export const TEAM_COLORS = {
  bg: '#FAF7F2',
  card: '#FFFFFF',
  textPrimary: '#18181B',
  textSecondary: '#52525B',
  border: '#EAE4D8',
  accent: '#C69214',
  accentLight: '#FDF9EF',
  connector: '#C69214',
} as const;

export const TEAM_ANIMATION = {
  levelDelay: 0.2,
  memberDelay: 0.1,
  fadeDuration: 0.5,
  connectorDuration: 0.8,
} as const;