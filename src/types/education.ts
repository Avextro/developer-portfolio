import type { MonthYear } from "./date";

export interface Education {
  institution: string;
  qualification: string;
  major: string;
  minors: string[];
  startDate: MonthYear;
  endDate: MonthYear | null;
  completed: boolean;
}
