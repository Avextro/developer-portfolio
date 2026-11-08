import type { IconType } from "react-icons";

export interface Technology {
  name: string;
  category: string;
  icon?: IconType;
}

export type TechnologyCategory =
  | "Language"
  | "Framework"
  | "Backend"
  | "Database"
  | "Cloud"
  | "Payments"
  | "Tool"
  | "Analytics";
