import React from "react";
import { motion } from "framer-motion";
import { DATA } from "../../data/portfolioData";

const EducationSection: React.FC = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="display-text text-4xl md:text-5xl mb-12">
              Education
            </h2>
            <div className="space-y-6">
              {DATA.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card p-6"
                >
                  <h3 className="text-lg font-bold mb-2">{edu.degree}</h3>
                  <p className="text-[var(--text-secondary)] text-sm mb-1">
                    {edu.org}
                  </p>
                  {edu.period && (
                    <p className="text-[var(--text-muted)] text-xs">
                      {edu.period}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Training */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="display-text text-4xl md:text-5xl mb-12">
              Training
            </h2>
            <div className="space-y-6">
              {DATA.training.map((training, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card p-6"
                >
                  <h3 className="text-lg font-bold mb-2">
                    {training.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm mb-3">
                    {training.org} · {training.period}
                  </p>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                    {training.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h2 className="display-text text-4xl md:text-5xl mb-12">
            Certificates
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {DATA.certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card p-4 text-sm text-[var(--text-secondary)]"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
