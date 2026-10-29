export interface Technology {
  name: string;
  category: TechnologyCategory;
  icon?: string;
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
