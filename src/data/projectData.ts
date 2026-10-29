import type { Project } from "../types/project";
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
  role: "Sole Full Stack Developer",
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

export const projects: Project[] = [goatTradieApp, goatTradieAdmin];
