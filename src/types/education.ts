import type { Year } from "./date";

export interface Education {
  institution: string;
  qualification: string;
  major: string;
  minors: string[];
  startDate: Year;
  endDate: Year | null;
  completed: boolean;
}
