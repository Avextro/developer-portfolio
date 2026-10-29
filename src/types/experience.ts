import type { MonthYear } from "./date";

export interface Experience {
  company: string;
  role: string;
  context?: string;
  startDate: MonthYear;
  endDate: MonthYear | null;
  highlights: string[];
}
