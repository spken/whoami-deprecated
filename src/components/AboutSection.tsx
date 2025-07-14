import { motion } from "framer-motion";
import { User } from "lucide-react";
import { stats } from "../data/portfolio";

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
            <span className="highlight glow">spken</span>! I'm a developer with
            a growing passion for cybersecurity. While my professional
            background focuses on software development, I've developed a deep
            fascination with ethical hacking, security research, and digital
            forensics as a personal hobby.
          </p>
          <p>
            What started as curiosity about{" "}
            <em className="highlight">"how things work"</em> gradually evolved
            into an obsession with
            <em className="highlight"> "how things break."</em> Building secure
            applications made me wonder: what happens when they're not secure?
            This question led me down the rabbit hole of vulnerability research
            and ethical hacking.
          </p>
          <p>
            In my spare time, I love diving into Capture The Flag (CTF)
            challenges, exploring vulnerability assessment tools, and learning
            about penetration testing methodologies. I'm constantly expanding my
            knowledge through platforms like TryHackMe, HackTheBox, and various
            security courses.
          </p>
          <p>
            My goal is to bridge my development skills with cybersecurity
            expertise, contributing to safer digital environments while
            continuing to learn and grow in this exciting field.
          </p>
          <div className="stats">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="stat">
                  <Icon className="stat-icon" />
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
