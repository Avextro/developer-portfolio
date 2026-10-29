import type { Skill } from "./skill";
import type { Technology } from "./technology";

export interface SkillGroup {
  name: string;
  skills?: Skill[];
  technologies?: Technology[];
}
