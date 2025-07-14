import {
  Terminal,
  User,
  Code,
  Lock,
  Eye,
  Zap,
  Github,
  Linkedin,
  Mail,
  Download,
} from "lucide-react";
import type { Section, SkillCategory, Project, Stat } from "../types";

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
    items: ["Python", "React", "TypeScript", "Node.js", "Java", "Spring boot"],
  },
  {
    category: "Cybersecurity",
    items: [
      "Kali Linux",
      "CTF Challenges",
      "Network Analysis",
      "Web Security",
      "Ethical Hacking",
    ],
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "Docker", "Linux", "Neovim"],
  },
  {
    category: "Learning Focus",
    items: [
      "Penetration Testing",
      "Bug Bounty",
      "Security Research",
      "TryHackMe",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Interactive Terminal Portfolio",
    description:
      "A cybersecurity-themed portfolio website with an interactive CTF challenge",
    tech: ["React", "TypeScript", "CSS"],
    status: "Active",
  },
  {
    title: "Home Network Security Lab",
    description:
      "Personal cybersecurity lab for practicing penetration testing and security analysis",
    tech: ["VirtualBox", "Kali Linux", "Metasploitable"],
    status: "Active",
  },
  {
    title: "CTF Challenge Collection",
    description:
      "Personal collection of Capture The Flag challenges and writeups",
    tech: ["Python", "Bash", "Various Tools"],
    status: "In Progress",
  },
];

export const stats: Stat[] = [
  {
    icon: Zap,
    number: "25+",
    label: "CTF Challenges Solved",
  },
  {
    icon: Lock,
    number: "15+",
    label: "Security Labs Completed",
  },
  {
    icon: Code,
    number: "10+",
    label: "Security Tools Explored",
  },
];

export const terminalCommands = [
  "> whoami",
  "matias@varela-cousillas",
  "> cat interests.txt",
  "Developer | Cybersecurity Enthusiast | CTF Player",
  "> ls -la hobbies/",
  "Ethical Hacking | Bug Bounty | Security Research",
  '> echo "Learning security, one challenge at a time"',
  "Learning security, one challenge at a time",
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
    href: "mailto:matias.varela.cousillas@gmail.com",
    icon: Mail,
    label: "Email",
  },
  {
    href: "#",
    icon: Download,
    label: "Resume",
  },
];
