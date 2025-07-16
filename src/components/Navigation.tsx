import { useState } from "react";
import { Terminal, Menu, X } from "lucide-react";
import type { Section } from "../types";

interface NavigationProps {
  sections: Section[];
  currentSection: string;
  onSectionChange: (sectionId: string) => void;
}

export const Navigation = ({
  sections,
  currentSection,
  onSectionChange,
}: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSectionChange = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMenuOpen(false); // Close menu after selection
  };

  return (
    <nav className="nav">
      <div className="nav-brand">
        <Terminal className="brand-icon" />
        <span>spken</span>
      </div>
      
      {/* Hamburger menu button */}
      <button 
        className="nav-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Navigation links */}
      <div className={`nav-links ${isMenuOpen ? "nav-links-open" : ""}`}>
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => handleSectionChange(section.id)}
              className={`nav-link ${currentSection === section.id ? "active" : ""}`}
            >
              <Icon size={16} />
              <span className="nav-link-label">{section.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
