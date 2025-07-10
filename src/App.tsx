import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import {
  Navigation,
  HomeSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection
} from './components'
import { sections } from './data/portfolio'
import './App.css'

function App() {
  const [currentSection, setCurrentSection] = useState('home')

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <HomeSection />
      case 'about':
        return <AboutSection />
      case 'skills':
        return <SkillsSection />
      case 'projects':
        return <ProjectsSection />
      case 'contact':
        return <ContactSection />
      default:
        return <HomeSection />
    }
  }

  return (
    <div className="app">
      <Navigation
        sections={sections}
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />

      <main className="main">
        <AnimatePresence mode="wait">
          {renderSection()}
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
