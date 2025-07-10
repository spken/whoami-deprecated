import { Terminal, Shield, Code, Lock, Eye, Zap, Github, Linkedin, Mail, Download } from 'lucide-react'
import type { Section, SkillCategory, Project, Stat } from '../types'

export const sections: Section[] = [
  { id: 'home', label: 'Home', icon: Terminal },
  { id: 'about', label: 'About', icon: Shield },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'projects', label: 'Projects', icon: Lock },
  { id: 'contact', label: 'Contact', icon: Eye }
]

export const skills: SkillCategory[] = [
  { category: 'Penetration Testing', items: ['Kali Linux', 'Metasploit', 'Burp Suite', 'Nmap', 'Wireshark'] },
  { category: 'Security Frameworks', items: ['OWASP', 'NIST', 'ISO 27001', 'PTES', 'OSSTMM'] },
  { category: 'Programming', items: ['Python', 'JavaScript', 'Bash', 'PowerShell', 'C++'] },
  { category: 'Cloud Security', items: ['AWS Security', 'Azure Security', 'Docker', 'Kubernetes'] }
]

export const projects: Project[] = [
  {
    title: 'Network Vulnerability Scanner',
    description: 'Advanced scanner for identifying network vulnerabilities with automated reporting',
    tech: ['Python', 'Nmap', 'SQLite'],
    status: 'Active'
  },
  {
    title: 'Web App Security Toolkit',
    description: 'Comprehensive toolkit for web application penetration testing',
    tech: ['Python', 'Burp Suite API', 'React'],
    status: 'Completed'
  },
  {
    title: 'Malware Analysis Sandbox',
    description: 'Isolated environment for safe malware analysis and reverse engineering',
    tech: ['VMware', 'Python', 'Docker'],
    status: 'In Progress'
  }
]

export const stats: Stat[] = [
  {
    icon: Zap,
    number: '100+',
    label: 'Vulnerabilities Found'
  },
  {
    icon: Shield,
    number: '50+',
    label: 'Security Assessments'
  },
  {
    icon: Code,
    number: '25+',
    label: 'Security Tools Built'
  }
]

export const terminalCommands = [
  '> whoami',
  'spken@matias',
  '> cat skills.txt',
  'Cybersecurity | Penetration Testing | Network Security',
  '> ls -la achievements/',
  'Ethical Hacker | Security Researcher | Bug Hunter',
  '> echo "Welcome to my digital domain"',
  'Welcome to my digital domain'
]

export const contactLinks = [
  {
    href: '#',
    icon: Github,
    label: 'GitHub'
  },
  {
    href: '#',
    icon: Linkedin,
    label: 'LinkedIn'
  },
  {
    href: 'mailto:contact@spken.dev',
    icon: Mail,
    label: 'Email'
  },
  {
    href: '#',
    icon: Download,
    label: 'Resume'
  }
]
