// src/types/process.ts

export interface ProcessBlock {
  id: string;
  title: string;
  description: string;
  icon: 'users' | 'calendar' | 'shield' | 'zap' | 'message' | 'code' | 'check' | 'clock';
}

export interface ProcessStageTask {
  id: string;
  label: string;
  status: 'pending' | 'in-progress' | 'completed';
}

export interface ProcessStageTeamMember {
  id: string;
  initials: string;
  name: string;
  role: string;
  color: string;
}

export interface ProcessStageMilestone {
  id: string;
  label: string;
  status: 'locked' | 'active' | 'completed';
}

export interface ProcessStage {
  id: string;
  title: string;
  description: string;
  progress: number;
  timeline: string;
  clientView: string[];
  tasks: ProcessStageTask[];
  recentUpdates: string[];
  assignedTeam: ProcessStageTeamMember[];
  milestones: ProcessStageMilestone[];
}

export interface SprintStatus {
  currentSprint: number;
  totalSprints: number;
  progress: number;
  daysRemaining: number;
}

export interface DashboardTask {
  id: string;
  label: string;
  status: 'pending' | 'in-progress' | 'completed';
  assignee: string;
  delay?: number;
}

export interface DashboardMilestone {
  id: string;
  label: string;
  status: 'locked' | 'active' | 'completed';
  date?: string;
  delay?: number;
}

export interface TeamMember {
  id: string;
  initials: string;
  role: string;
  color: string;
}

export interface ProcessSectionConfig {
  heading: string;
  subtitle: string;
  blocks: ProcessBlock[];
  dashboard: {
    projectName: string;
    summary: string;
    sprint: SprintStatus;
    tasks: DashboardTask[];
    milestones: DashboardMilestone[];
    team: TeamMember[];
  };
}
