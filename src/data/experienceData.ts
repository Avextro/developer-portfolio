import type { Experience } from "../types/experience";
import { parseMonthYear } from "../utils/dateUtils";

const goatTradeCapstone: Experience = {
  company: "G.O.A.T Tradie",
  role: "Full Stack Developer & Team Lead",
  context: "QUT Capstone Project",
  startDate: parseMonthYear("03-2024"),
  endDate: parseMonthYear("11-2024"),
  highlights: [],
};

const goatTrade: Experience = {
  company: "G.O.A.T Tradie",
  role: "Full Stack Developer & Team Lead",
  context: "QUT Capstone Project",
  startDate: parseMonthYear("03-2024"),
  endDate: parseMonthYear("11-2024"),
  highlights: [],
};

export const experiences: Experience[] = [goatTradeCapstone, goatTrade];
