import { Terminal } from 'lucide-react'
import type { Section } from '../types'

interface NavigationProps {
  sections: Section[]
  currentSection: string
  onSectionChange: (sectionId: string) => void
}

export const Navigation = ({ sections, currentSection, onSectionChange }: NavigationProps) => {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <Terminal className="brand-icon" />
        <span>spken</span>
      </div>
      <div className="nav-links">
        {sections.map(section => {
          const Icon = section.icon
          return (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`nav-link ${currentSection === section.id ? 'active' : ''}`}
            >
              <Icon size={16} />
              {section.label}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
