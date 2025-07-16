import {
  Terminal,
  User,
  Code,
  Lock,
  Eye,
  Github,
  Linkedin,
  Mail,
  Download,
} from "lucide-react";
import type { Section, SkillCategory } from "../types";

export const sections: Section[] = [
  { id: "home", label: "Home", icon: Terminal },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "projects", label: "Projects", icon: Lock },
  { id: "contact", label: "Contact", icon: Eye },
];

export const skills: SkillCategory[] = [
  {
    category: "Professional Development",
    items: [
      "Python",
      "React",
      "TypeScript",
      "Node.js",
      "Web Security",
      "Spring Boot",
    ],
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "Linux", "Neovim", "Docker", "Postman", "OWASP Top 10"],
  },
  {
    category: "Learning Focus",
    items: [
      "Kali Linux",
      "Burp Suite",
      "CTF Challenges",
      "Penetration Testing",
    ],
  },
];

export const terminalCommands = [
  "> whoami",
  "matias@varela-cousillas",
  "> cat about.txt",
  "Developer | AI Engineer | Securitty Enthusiast",
  "> ls skills/",
  "Python React TypeScript Node.js Security",
  '> echo "Building secure applications"',
  "Building secure applications",
];

export const contactLinks = [
  {
    href: "https://github.com/spken",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/matias-varela-cousillas-4b5025269/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:varematias11@gmail.com",
    icon: Mail,
    label: "Email",
  },
  {
    href: "#",
    icon: Download,
    label: "Resume",
  },
];
