import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { DATA } from "../../data/portfolioData";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-[var(--dark-card)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="display-text text-5xl md:text-7xl mb-16">
            Projects
          </h2>

          <div className="space-y-0">
            {DATA.projects.map((project, index) => {
              const hasLink = project.link !== "#";
              
              const innerContent = (
                <div className="flex items-start justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="project-number">
                        _{String(index + 1).padStart(2, "0")}.
                      </span>
                      <h3 className="project-title">{project.name}</h3>
                    </div>
                    <p className="text-[var(--text-secondary)] mb-4 max-w-2xl">
                      {project.about}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-[var(--text-muted)] uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {hasLink && (
                    <ExternalLink className="w-6 h-6 text-[var(--text-muted)] group-hover:text-[var(--neon-green)] transition-colors flex-shrink-0" />
                  )}
                </div>
              );

              return hasLink ? (
                <motion.a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="project-item block group"
                >
                  {innerContent}
                </motion.a>
              ) : (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="project-item block"
                >
                  {innerContent}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
