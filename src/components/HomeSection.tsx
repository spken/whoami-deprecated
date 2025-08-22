import { motion } from "framer-motion";
import Terminal from "./Terminal";

interface HomeSectionProps {
  onSectionChange?: (sectionId: string) => void;
}

export const HomeSection = ({ onSectionChange }: HomeSectionProps) => {
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
            Software Engineer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="hero-cta"
            onClick={() => onSectionChange?.("about")}
          >
            <span className="cta-text">Learn more about my journey</span>
            <span className="cta-arrow">→</span>
          </motion.div>
        </div>
        <Terminal interactive={true} />
      </div>
    </motion.section>
  );
};
