import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import { stats } from '../data/portfolio'

export const AboutSection = () => {
  return (
    <motion.section
      key="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="section about-section"
    >
      <h2 className="section-title">
        <Shield className="section-icon" />
        About Me
      </h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Welcome to my digital fortress. I'm Matias Varela Cousillas, operating under the handle "spken" 
            in the cybersecurity realm. With a passion for ethical hacking and digital security, I specialize 
            in identifying vulnerabilities before malicious actors can exploit them.
          </p>
          <p>
            My journey in cybersecurity spans penetration testing, security research, and vulnerability 
            assessment. I believe in making the digital world safer, one vulnerability at a time.
          </p>
          <div className="stats">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="stat">
                  <Icon className="stat-icon" />
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
