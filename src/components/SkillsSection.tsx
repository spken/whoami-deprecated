import { motion } from 'framer-motion'
import { Code } from 'lucide-react'
import { skills } from '../data/portfolio'

export const SkillsSection = () => {
  return (
    <motion.section
      key="skills"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="section skills-section"
    >
      <h2 className="section-title">
        <Code className="section-icon" />
        Skills & Expertise
      </h2>
      <div className="skills-grid">
        {skills.map((skillCategory, index) => (
          <motion.div
            key={skillCategory.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="skill-card"
          >
            <h3 className="skill-category">{skillCategory.category}</h3>
            <div className="skill-items">
              {skillCategory.items.map(item => (
                <span key={item} className="skill-item">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
