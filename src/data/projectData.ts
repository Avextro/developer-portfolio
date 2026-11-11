import type { Project } from "../types/project";
// TODO: add tech and extra projects
import {
  assembly,
  cloudFirestore,
  cloudFunctions,
  cpp,
  csharp,
  dart,
  firebaseAnalytics,
  firebaseAuthentication,
  flutter,
  googleCloud,
  python,
  react,
  revenueCat,
  typescript,
} from "./technologyData";

const goatTradieApp: Project = {
  id: "goat-tradie-app",
  name: "GOAT Tradie Business App",
  context: "Professional",
  description: "",
  role: "Full Stack Developer & Technical Project Manag er",
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

const goatTradieEstimatingTool: Project = {
  id: "goat-tradie-estimating-tool",
  name: "GOAT Tradie Estimating Tool",
  context: "Professional",
  description: "",
  role: "Technical Project Manager",
  technologies: [],
};

const vexelDisplay: Project = {
  id: "vexel-display",
  name: "Vexel Display",
  context: "Personal",
  description: "",
  role: "Sole Full Stack Developer",
  technologies: [cpp, react],
};

const cab202: Project = {
  id: "cab-202",
  name: "Microprocessor Simon Says",
  context: "University",
  description: "",
  role: "Sole Developer",
  technologies: [cpp, assembly],
};

const cab301: Project = {
  id: "cab-301",
  name: "Inventory Management System",
  context: "University",
  description: "",
  role: "Sole Developer",
  technologies: [csharp],
};

const cab320: Project = {
  id: "cab-320",
  name: "AI Image Classification",
  context: "University",
  description: "",
  role: "Sole Developer",
  technologies: [python],
};

const egb339: Project = {
  id: "egb-339",
  name: "Robotics - Environment Processing & Interaction",
  context: "University",
  description: "",
  role: "Sole Developer",
  technologies: [python],
};

const cab401: Project = {
  id: "cab-401",
  name: "Parrellel Processing of Genome Data",
  context: "University",
  description: "",
  role: "Sole Developer",
  technologies: [cpp],
};

const cab302: Project = {
  id: "cab-302",
  name: "Pet Manager",
  context: "University",
  description: "",
  role: "Front End Developer",
  technologies: [csharp],
};

export const projects: Project[] = [
  goatTradieApp,
  goatTradieAdmin,
  goatTradieEstimatingTool,
  vexelDisplay,
  cab202,
  cab301,
  cab320,
  egb339,
  cab401,
  cab302,
];
