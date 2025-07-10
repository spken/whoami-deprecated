import { motion } from 'framer-motion'
import { Terminal } from './Terminal'
import { useTerminalEffect } from '../hooks/useTerminalEffect'
import { terminalCommands } from '../data/portfolio'

export const HomeSection = () => {
  const { terminalText, isTyping } = useTerminalEffect(terminalCommands)

  return (
    <motion.section
      key="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="section home-section"
    >
      <div className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-title"
          >
            <span className="glow">spken</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="hero-subtitle"
          >
            Matias Varela Cousillas
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="hero-description"
          >
            Cybersecurity Specialist | Ethical Hacker | Digital Guardian
          </motion.p>
        </div>
        <Terminal text={terminalText} isTyping={isTyping} />
      </div>
    </motion.section>
  )
}
