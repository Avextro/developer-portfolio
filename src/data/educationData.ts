import type { Education } from "../types/education";
import { parseYear } from "../utils/dateUtils";

const gamesAndInteractiveEnvironments: Education = {
  institution: "Queensland University of Technology",
  qualification: "Bachelor of Games & Interactive Environments",
  major: "Software Technologies",
  minors: ["Business", "Animation"],
  startDate: parseYear(2021),
  endDate: parseYear(2022),
  completed: false,
};

const infomationTechnology: Education = {
  institution: "Queensland University of Technology",
  qualification: "Bachelor of Infomation Technology",
  major: "Computer Science",
  minors: ["Artificial Intelligence"],
  startDate: parseYear(2023),
  endDate: parseYear(2024),
  completed: true,
};

export const educationList: Education[] = [
  infomationTechnology,
  gamesAndInteractiveEnvironments,
];
