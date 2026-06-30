import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { DATA } from "../../data/portfolioData";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-[var(--dark-card)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="display-text text-5xl md:text-7xl mb-8">
            Have a project in mind?
          </h2>
          <motion.a
            href={`mailto:${DATA.email}`}
            className="inline-block text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold hover:text-[var(--neon-green)] transition-colors duration-300 px-4"
            whileHover={{ scale: 1.05 }}
          >
            {DATA.email}
          </motion.a>

          <div className="mt-16 flex justify-center gap-8">
            <a
              href={DATA.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--neon-green)] transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href={DATA.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--neon-green)] transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href={`mailto:${DATA.email}`}
              className="text-[var(--text-secondary)] hover:text-[var(--neon-green)] transition-colors"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
