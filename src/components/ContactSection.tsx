import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { contactLinks } from "../data/portfolio";

export const ContactSection = () => {
  return (
    <motion.section
      key="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="section contact-section"
    >
      <h2 className="section-title">
        <Eye className="section-icon" />
        Contact
      </h2>
      <div className="contact-content">
        <p className="contact-intro">
          Ready to collaborate on cybersecurity projects or discuss potential
          opportunities? Let's connect and make the digital world more secure
          together.
        </p>
        <div className="contact-links">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a key={link.label} href={link.href} className="contact-link" target="_blank" rel="noopener noreferrer">
                <Icon className="contact-icon" />
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
