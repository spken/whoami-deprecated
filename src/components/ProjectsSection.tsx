import { motion } from "framer-motion";
import { Lock } from "lucide-react";

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
      <div className="coming-soon-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="coming-soon-message"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="coming-soon-title"
          >
            Coming Soon
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="coming-soon-subtitle"
          >
            Projects in development
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 1.8 }}
            className="coming-soon-line"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};
