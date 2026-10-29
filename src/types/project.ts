import type { MonthYear } from './date';

export interface Project {
  id: string;
  name: string;
  context: 'Professional' | 'University' | 'Personal';
  description: string;
  role: string;
  technologies: string[];

  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  dataCompleted?: MonthYear;
}
