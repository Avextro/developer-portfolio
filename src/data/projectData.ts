import type { Project } from "../types/project";
// TODO: add tech and extra projects
import {
  cloudFirestore,
  cloudFunctions,
  dart,
  firebaseAnalytics,
  firebaseAuthentication,
  flutter,
  googleCloud,
  react,
  revenueCat,
  typescript,
} from "./technologyData";

const goatTradieApp: Project = {
  id: "goat-tradie-app",
  name: "GOAT Tradie Business App",
  context: "Professional",
  description: "",
  role: "Full Stack Developer & Technical Project Manager",
  technologies: [
    flutter,
    dart,
    firebaseAuthentication,
    firebaseAnalytics,
    cloudFirestore,
    cloudFunctions,
    revenueCat,
    googleCloud,
  ],
};

const goatTradieAdmin: Project = {
  id: "goat-tradie-admin",
  name: "GOAT Tradie Admin Tools",
  context: "Professional",
  description: "",
  role: "Sole Developer",
  technologies: [
    react,
    typescript,
    firebaseAuthentication,
    cloudFirestore,
    firebaseAnalytics,
    cloudFunctions,
    googleCloud,
  ],
};

const vexelDisplay: Project = {
  id: "vexel-display",
  name: "Vexel Display",
  context: "Personal",
  description: "",
  role: "Sole Full Stack Developer",
  technologies: [],
};

const cab202: Project = {
  id: "cab-202",
  name: "CAB202 Microprocessors",
  context: "University",
  description: "",
  role: "Sole Developer",
  technologies: [],
};

const cab301: Project = {
  id: "cab-301",
  name: "CAB301 C#",
  context: "University",
  description: "",
  role: "Sole Developer",
  technologies: [],
};

const cab320: Project = {
  id: "cab-320",
  name: "CAB320 AI",
  context: "University",
  description: "",
  role: "Sole Developer",
  technologies: [],
};

const egb339: Project = {
  id: "egb-339",
  name: "EGB339 Robotics",
  context: "University",
  description: "",
  role: "Sole Developer",
  technologies: [],
};

const cab401: Project = {
  id: "cab-401",
  name: "CAB401 Parrellel Processing",
  context: "University",
  description: "",
  role: "Sole Developer",
  technologies: [],
};

const cab302: Project = {
  id: "cab-302",
  name: "CAB302 Java",
  context: "University",
  description: "",
  role: "Front End Developer",
  technologies: [],
};

export const projects: Project[] = [
  goatTradieApp,
  goatTradieAdmin,
  vexelDisplay,
  cab202,
  cab301,
  cab320,
  egb339,
  cab401,
  cab320,
  cab302,
];
