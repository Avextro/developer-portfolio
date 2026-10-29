import type { MonthYear } from "./date";
import type { Technology } from "./technology";

export interface Project {
  id: string;
  name: string;
  context: "Professional" | "University" | "Personal";
  description: string;
  role: string;
  technologies: Technology[];

  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  dataCompleted?: MonthYear;
}
