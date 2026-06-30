import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { DATA } from "../../data/portfolioData";

const HeroSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="display-text text-[clamp(48px,8vw,120px)] leading-none mb-6"
              style={{ opacity }}
            >
              {DATA.title.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-[var(--text-secondary)] mb-8 max-w-xl"
            >
              {DATA.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-base text-[var(--text-secondary)] mb-10 max-w-xl leading-relaxed"
            >
              {DATA.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a href={`mailto:${DATA.email}`} className="btn btn-primary">
                Hire Me
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </a>
              <a href="#projects" className="btn btn-outline">
                View Projects
              </a>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex flex-wrap gap-6 text-sm text-[var(--text-secondary)]"
            >
              <a
                href={`mailto:${DATA.email}`}
                className="flex items-center gap-2 hover:text-[var(--neon-green)] transition-colors"
              >
                <Mail className="w-4 h-4" />
                {DATA.email}
              </a>
              <a
                href={`tel:${DATA.phone}`}
                className="flex items-center gap-2 hover:text-[var(--neon-green)] transition-colors"
              >
                <Phone className="w-4 h-4" />
                {DATA.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {DATA.location}
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 gap-8"
          >
            {DATA.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="text-center lg:text-left"
              >
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
