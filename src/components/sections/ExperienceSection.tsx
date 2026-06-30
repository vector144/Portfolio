import React from "react";
import { motion } from "framer-motion";
import { DATA } from "../../data/portfolioData";

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="display-text text-5xl md:text-7xl mb-16">
            My Experience
          </h2>

          <div className="space-y-12">
            {DATA.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-[var(--neon-green)] pl-8 pb-8"
              >
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {exp.org}
                  </h3>
                  <p className="text-[var(--neon-green)] font-semibold mb-1">
                    {exp.role}
                  </p>
                  <p className="text-sm text-[var(--text-muted)]">
                    {exp.period}
                  </p>
                </div>
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-[var(--text-secondary)] flex gap-3"
                    >
                      <span className="text-[var(--neon-green)] mt-2">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
