import React from "react";
import { motion } from "framer-motion";
import { DATA } from "../../data/portfolioData";

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-[var(--dark-card)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="display-text text-5xl md:text-7xl mb-16">
            My Stack
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {Object.entries(DATA.skills).map(([category, skills]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-[var(--neon-green)] uppercase text-sm font-bold mb-6 tracking-wider">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
