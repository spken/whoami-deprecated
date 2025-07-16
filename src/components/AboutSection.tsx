import { motion } from "framer-motion";
import { User } from "lucide-react";

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
        <User className="section-icon" />
        About Me
      </h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi, I'm Matias Varela Cousillas a.k.a.{" "}
            <span className="highlight glow">spken</span>! I'm currently part of a team developing
            AI-driven solutions, with a past in security-first, DevSecOps, and Zero-Trust development practices.
            While my background is in software development, I've come to recognize how critical security
            is to the development process. My passion for cybersecurity continues to grow alongside my development skills.

          </p>
          <p>
            What started as curiosity about{" "}
            <em className="highlight">"how things work"</em> gradually evolved
            into an obsession with
            <em className="highlight"> "how things break."</em> Building secure
            applications made me wonder: what happens when they're not secure?
            This question led me down the rabbit hole of exploring vulnerabilities
            and attack vectors.
          </p>
          <p>
            My goal is to bridge my development skills with cybersecurity
            expertise, contributing to safer digital environments while
            continuing to learn and grow in this field, especially with the new vibe-coding hype.
          </p>
          <div className="personal-note">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="note-card"
            >
              <div className="note-header">
                <span className="note-prompt">spken@mindset:~$</span>
                <span className="note-command">cat personal_motto.txt</span>
              </div>
              <div className="note-content">
                <p className="motto">
                  <span className="highlight">"Security-first development, AI-powered innovation."</span>
                </p>
                <p className="motto-subtitle">
                  Building secure applications while exploring how they can break.
                  The future lies in combining development skills with cybersecurity expertise.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};