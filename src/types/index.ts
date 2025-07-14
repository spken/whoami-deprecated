import type { LucideIcon } from "lucide-react";

export interface Section {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  status: "Active" | "Completed" | "In Progress";
}

export interface Stat {
  icon: LucideIcon;
  number: string;
  label: string;
}
