import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { DATA } from "../../data/portfolioData";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
        <div className="container flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold"
          >
            <span className="text-[var(--neon-green)]">{DATA.name.split(" ")[0]}</span>
            <span className="text-white ml-2">{DATA.name.split(" ")[1]}</span>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 hover:bg-white/5 transition-colors rounded-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </motion.button>
        </div>
      </header>

      {/* Full Screen Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.4 }}
        className="fixed top-0 right-0 w-full h-screen bg-black/98 backdrop-blur-xl z-40 flex items-center justify-center"
      >
        <nav className="text-center">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-4 text-4xl md:text-6xl font-bold display-text hover:text-[var(--neon-green)] transition-colors"
              >
                {item.label}
              </a>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex gap-6 justify-center"
          >
            <a
              href={DATA.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-[var(--neon-green)] transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={DATA.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-[var(--neon-green)] transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${DATA.email}`}
              className="text-white hover:text-[var(--neon-green)] transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </nav>
      </motion.div>
    </>
  );
};

export default Navigation;
