import type { SkillGroup } from "../types/skillGroup";
import {
  dart,
  typescript,
  javascript,
  python,
  java,
  html,
  cpp,
  csharp,
  lua,
  flutter,
  react,
  firebaseAuthentication,
  cloudFunctions,
  cloudFirestore,
  firebaseAnalytics,
  googleCloud,
  revenueCat,
  restApis,
  webhooks,
  git,
  github,
  jira,
  basecamp,
} from "./technologyData";

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    technologies: [
      dart,
      typescript,
      javascript,
      python,
      java,
      html,
      cpp,
      csharp,
      lua,
    ],
  },
  {
    name: "Frameworks & Libraries",
    technologies: [flutter, react],
  },
  {
    name: "Backend & Databases",
    technologies: [
      firebaseAuthentication,
      cloudFunctions,
      cloudFirestore,
      restApis,
      webhooks,
    ],
  },
  {
    name: "Cloud & Analytics",
    technologies: [googleCloud, firebaseAnalytics],
  },
  {
    name: "Integrations & Payments",
    technologies: [revenueCat],
  },
  {
    name: "Development Tools",
    technologies: [git, github, jira, basecamp],
  },
];
