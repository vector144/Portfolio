import React from "react";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="outline-text absolute top-0 left-0 -z-10">
              ABOUT ME
            </div>
            <h2 className="display-text text-5xl md:text-7xl mb-12">
              About Me
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed mb-6">
              I believe in a user-centered design approach, ensuring that
              every project I work on is tailored to meet the specific needs
              of its users.
            </p>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed">
              My approach focuses on creating scalable, high-performing
              solutions tailored to both user needs and business objectives.
              By prioritizing performance, accessibility, and responsiveness,
              I strive to deliver experiences that not only engage users but
              also drive tangible results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
