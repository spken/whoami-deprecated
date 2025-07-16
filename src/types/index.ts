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
