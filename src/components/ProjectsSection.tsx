import { motion } from "framer-motion";
import { Lock, Github, ExternalLink } from "lucide-react";
import { contactLinks } from "../data/portfolio";

export const ProjectsSection = () => {
  const githubLink = contactLinks.find(link => link.label === "GitHub");

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
            Explore My Work
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="coming-soon-subtitle"
          >
            Check out my repositories and contributions on GitHub
          </motion.p>
          {githubLink && (
            <motion.a
              href={githubLink.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="github-link"
            >
              <Github className="github-icon" />
              <span>View GitHub Profile</span>
              <ExternalLink className="external-icon" />
            </motion.a>
          )}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 2.0 }}
            className="coming-soon-line"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};
