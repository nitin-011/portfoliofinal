// src/types/team.ts

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description?: string;
  bio: string;
  image: string;
  quote?: string;
}

export interface HierarchyLevel {
  id: string;
  members: TeamMember[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'atior';
  text: string;
  time: string;
}

export interface CoreTeam {
  id: string;
  title: string;
  icon: string;
  description: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export interface TeamSectionConfig {
  tagline: string;
  headingMain: string;
  headingAccent: string;
  subtitle: string;
  totalPeopleBadge: {
    stat: string;
    label: string;
  };
  mentor: TeamMember;
  leadershipTag: string;
  leadership: TeamMember[];
  coreTeamsTag: string;
  coreTeams: CoreTeam[];
  trustStatement: string;
}