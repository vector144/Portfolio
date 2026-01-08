import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

const DATA = {
  name: "Satish Kumar",
  title: "Full Stack Web Developer",
  tagline: "Building high-performance, scalable web solutions",
  location: "Shikargarh, Jodhpur, Rajasthan",
  phone: "+91 7725964409",
  email: "satish18verma2001@gmail.com",
  links: {
    github: "https://github.com/vector144",
    linkedin: "https://www.linkedin.com/in/satish-kumar-webdev/",
    upwork: "#", // Add your upwork link
  },
  summary:
    "Full‑stack developer with 2+ years experience building production web apps. Led payments integrations, introduced TypeScript, built data visualizations, and delivered clean, accessible UI/UX. Strong with Svelte, React, Node/Express, Laravel, SQL, and MongoDB.",
  stats: [
    { value: "2+", label: "Years of Experience" },
    { value: "7+", label: "Completed Projects" },
    { value: "4K+", label: "Hours Worked" },
  ],
  skills: {
    frontend: [
      "React.js",
      "Svelte.js",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Framer Motion",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "Laravel",
      "PHP",
      "REST APIs",
      "Payments/Stripe",
    ],
    database: ["MongoDB", "SQL", "PostgreSQL"],
    tools: ["Git & GitHub", "D3.js", "Chart.js", "Vite", "Webpack"],
  },
  projects: [
    {
      name: "Rent‑My‑Stuff Marketplace",
      period: "2025",
      stack: ["React", "TypeScript", "Express", "MongoDB", "Tailwind"],
      about:
        "Full‑stack rental marketplace with listing, renting, payments, and role‑based access control.",
      link: "#",
    },
    {
      name: "Billing & Invoicing",
      period: "2024",
      stack: ["Svelte", "TypeScript", "REST"],
      about:
        "Responsive billing UI with reusable components, forms, and interactive charts.",
      link: "#",
    },
    {
      name: "Task Manager",
      period: "2024",
      stack: ["React", "Node", "MongoDB"],
      about:
        "Role-based task management with priority assignment, CRUD operations, and analytics.",
      link: "#",
    },
    {
      name: "Mockup Studio",
      period: "2024",
      stack: ["React", "Canvas", "Node"],
      about:
        "Generate professional t‑shirt and hoodie mockups from uploaded designs.",
      link: "#",
    },
    {
      name: "Blameshift",
      period: "2024",
      stack: ["React", "Node.js", "Express", "MongoDB"],
      about: "Fun web app with creative ways to shift blame for mistakes.",
      link: "https://github.com/vector144/blameshift",
    },
    {
      name: "Portfolio Website",
      period: "2026",
      stack: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
      about:
        "Modern portfolio with dark theme, animations, and responsive design.",
      link: "#",
    },
  ],
  experience: [
    {
      role: "Full Stack Web Developer",
      org: "Nbn Minds, Jodhpur",
      period: "2023 – Present",
      bullets: [
        "Led frontend from architecture to deployment, integrating with backend systems.",
        "Introduced and implemented TypeScript across the frontend codebase for quality, scalability, and maintainability.",
        "Built complex, interactive visualizations using Chart.js and D3.js (Sankey, real‑time analytics).",
        "Integrated multiple RESTful APIs for data fetching, state, and secure communication.",
        "Developed backend features/APIs using Laravel; optimized SQL queries.",
        "Collaborated cross‑functionally to deliver clean, responsive, accessible UI/UX.",
        "Integrated Stripe for online payments and implemented Stripe Terminal for in‑person transactions.",
      ],
    },
  ],
  training: [
    {
      title: "Full Stack Web Development Training",
      org: "Ws Cube Tech, Jodhpur",
      period: "Jan 2022 – Jun 2022",
      details:
        "Hands‑on responsive web apps; practiced HTML, CSS, PHP, SQL, React, JS, Bootstrap; built mini‑projects and strengthened skills in database integration, UI design, and content rendering.",
    },
  ],
  education: [
    {
      degree: "Master of Computer Applications",
      org: "Bikaner Technical University",
      period: "2024 – 2025",
    },
    { degree: "Bachelor of Arts", org: "JNVU", period: "2021 – 2023" },
    { degree: "Senior Secondary (90%)", org: "New Government (2019)" },
    {
      degree: "Secondary (85%)",
      org: "Jai Shree Gautam Sen Sec School (2019)",
    },
  ],
  certificates: [
    "Internal Hackathon for SIH – Aishwarya College of Education",
    "Git and GitHub – Ws Cube Tech",
    "React.js – Tech Fly, Jodhpur",
    "Full Stack Development – Ws Cube Tech",
    "Blockchain Developer Guide – Codedamn",
  ],
};

// Starfield Component
const Starfield: React.FC = () => {
  const [stars, setStars] = useState<{ x: number; y: number; delay: number }[]>(
    []
  );

  useEffect(() => {
    const newStars = Array.from({ length: 100 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="starfield">
      {stars.map((star, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

// Custom Cursor Component
const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    let mouseX = 0;
    let mouseY = 0;
    let rafId: number;

    const updateCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      setPosition({ x: mouseX, y: mouseY });
      rafId = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Track mouse movement
    window.addEventListener("mousemove", updateCursor);
    rafId = requestAnimationFrame(animate);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, .btn, .badge, .project-item"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      cancelAnimationFrame(rafId);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <div
        className={`cursor-dot ${isHovering ? "hover" : ""}`}
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      />
      <div
        className={`cursor-outline ${isHovering ? "hover" : ""}`}
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
        }}
      />
    </>
  );
};

// Navigation Component
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

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Starfield />
      <CustomCursor />
      <Navigation />

      {/* Hero Section */}
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
                <a href={DATA.links.upwork} className="btn btn-primary">
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

      {/* About Section */}
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

      {/* Skills Section */}
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

      {/* Experience Section */}
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

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-[var(--dark-card)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="display-text text-5xl md:text-7xl mb-16">
              Selected Projects
            </h2>

            <div className="space-y-0">
              {DATA.projects.map((project, index) => (
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
                    <ExternalLink className="w-6 h-6 text-[var(--text-muted)] group-hover:text-[var(--neon-green)] transition-colors flex-shrink-0" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education & Training */}
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

      {/* Contact Section */}
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
              className="inline-block text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold hover:text-[var(--neon-green)] transition-colors duration-300 break-all px-4"
              whileHover={{ scale: 1.05 }}
              style={{ wordBreak: "break-word" }}
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

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
            <p>
              Design & built by{" "}
              <span className="text-[var(--neon-green)]">{DATA.name}</span>
            </p>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
