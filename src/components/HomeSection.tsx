import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Terminal from "./Terminal";

interface HomeSectionProps {
  onSectionChange?: (sectionId: string) => void;
}

export const HomeSection = ({ onSectionChange }: HomeSectionProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleString('en-US', {
        weekday: 'short',
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }) + ' on ttys000';
      setCurrentTime(timeString);
    };

    checkMobile();
    updateTime();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
        {isMobile ? (
          <div className="mobile-terminal-message">
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <div className="btn btn-close"></div>
                  <div className="btn btn-minimize"></div>
                  <div className="btn btn-maximize"></div>
                </div>
                <div className="terminal-title">terminal</div>
              </div>
              <div className="terminal-body">
                <div className="terminal-text">
                  Last login: {currentTime}
                  <br />
                  <br />
                  <span className="glow">guest@portfolio:~$</span> echo "For the full interactive experience"
                  <br />
                  For the full interactive experience
                  <br />
                  <span className="glow">guest@portfolio:~$</span> echo "Open on desktop 🖥️"
                  <br />
                  Open on desktop 🖥️
                  <br />
                  <span className="glow">guest@portfolio:~$</span> echo "CTF challenge awaits!"
                  <br />
                  CTF challenge awaits!
                  <br />
                  <span className="glow">guest@portfolio:~$</span>{" "}
                  <span className="cursor">█</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Terminal interactive={true} />
        )}
      </div>
    </motion.section>
  );
};
