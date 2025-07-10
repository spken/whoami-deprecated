import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import { projects } from '../data/portfolio'

export const ProjectsSection = () => {
  return (
    <motion.section
      key="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="section projects-section"
    >
      <h2 className="section-title">
        <Lock className="section-icon" />
        Projects
      </h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="project-card"
          >
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                {project.status}
              </span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
