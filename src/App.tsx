import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  FileDown,
  MapPin,
  ArrowRight,
  Download,
} from "lucide-react";

const DATA = {
  name: "Satish Kumar",
  title: "Full Stack Web Developer",
  tagline:
    "Svelte/React • TypeScript • Node.js • Express • MongoDB • Laravel • SQL • Tailwind",
  location: "Shikargarh, Jodhpur, Rajasthan",
  phone: "+91 7725964409",
  email: "satish18verma2001@gmail.com",
  links: {
    github: "https://github.com/vector144",
    linkedin: "https://www.linkedin.com/in/satish-kumar-webdev/",
    resumeUrl:
      "https://drive.google.com/file/d/1eXXgSW0KHvECWykV8zIUuioGNET_2uQe/view?usp=drive_link",
  },
  summary:
    "Full‑stack developer with 2+ years experience building production web apps. Led payments integrations, introduced TypeScript, built data visualizations, and delivered clean, accessible UI/UX. Strong with Svelte, React, Node/Express, Laravel, SQL, and MongoDB.",
  skills: [
    "React.js",
    "Svelte.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Laravel",
    "SQL",
    "PHP",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "D3.js",
    "Chart.js",
    "REST APIs",
    "Payments/Stripe",
    "Git & GitHub",
  ],
  projects: [
    {
      name: "Rent‑My‑Stuff Marketplace",
      period: "2025",
      stack: ["React", "TypeScript", "Express", "MongoDB", "Tailwind"],
      about:
        "Full‑stack rental marketplace (list, rent, payments, role‑based access).",
    },
    {
      name: "Billing & Invoicing ",
      period: "2024",
      stack: ["Svelte", "TypeScript", "REST"],
      about:
        "Responsive billing UI with reusable components, forms, and charts.",
    },
    {
      name: "Task Manager (Role‑based)",
      period: "2024",
      stack: ["React", "Node", "MongoDB"],
      about: "Priority, assignment, CRUD, and analytics for teams.",
    },
    {
      name: "Mockup Studio",
      period: "2024",
      stack: ["React", "Canvas", "Node"],
      about: "Generate t‑shirt/hoodie mockups from uploaded designs.",
    },
   {
    name: "Blameshift ",
    about: "Vibe Coded funny ways to shift blame for mistakes.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
    link: "https://github.com/yourusername/blameshift", // add real link
  },
  {
    name: "Portfolio Website",
    about: "My personal portfolio with modern UI, animations, and responsive design.",
    stack: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    link: "https://your-portfolio-link.com",
  }
    // { name: 'Indian Stock Market Simulator', period: '2024', stack: ['React','TypeScript','Node'], about: 'Paper trading experience with watchlists, charts, and orders.' },
  ],
  experience: [
    {
      role: "Full Stack Web Developer",
      org: "Nbn Minds, Jodhpur",
      period: "2023 – Present",
      bullets: [
        "Led  frontend  from architecture to deployment, integrating with backend systems.",
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
      degree: "Master of Computer Applications ",
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

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Section: React.FC<
  React.PropsWithChildren<{ id: string; title: string; note?: string }>
> = ({ id, title, note, children }) => (
  <section id={id} className="scroll-mt-24 py-10 md:py-16">
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        {title}
      </h2>
      {note && <p className="text-sm text-slate-500 mt-1">{note}</p>}
      <div className="mt-6">{children}</div>
    </motion.div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="container flex items-center justify-between h-16">
          <div className="font-semibold">
            {DATA.name}
            <span className="text-slate-500"> · {DATA.title}</span>
          </div>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            {[
              ["About", "about"],
              ["Skills", "skills"],
              ["Experience", "experience"],
              ["Projects", "projects"],
              ["Education", "education"],
              ["Certificates", "certificates"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="hover:underline underline-offset-4"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              className="btn btn-outline"
              href={DATA.links.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FileDown className="mr-2 h-4 w-4" /> Resume
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="container pt-10 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 items-center"
        >
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              {DATA.name}
            </h1>
            <p className="mt-2 text-lg md:text-xl text-slate-600">
              {DATA.title}
            </p>
            <p className="mt-4 text-base md:text-lg">{DATA.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary">
                See my work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact me
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span className="inline-flex items-center">
                <MapPin className="mr-1 h-4 w-4" /> {DATA.location}
              </span>
              <a
                className="inline-flex items-center hover:underline"
                href={`tel:${DATA.phone}`}
              >
                <Phone className="mr-1 h-4 w-4" /> {DATA.phone}
              </a>
              <a
                className="inline-flex items-center hover:underline"
                href={`mailto:${DATA.email}`}
              >
                <Mail className="mr-1 h-4 w-4" /> {DATA.email}
              </a>
              <a
                className="inline-flex items-center hover:underline"
                href={DATA.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="ml-2 mr-1 h-4 w-4" /> GitHub
              </a>
              <a
                className="inline-flex items-center hover:underline"
                href={DATA.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="ml-2 mr-1 h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="card">
              <div className="p-6 border-b">
                <div className="text-lg font-semibold">Quick Facts</div>
              </div>
              <div className="p-6 space-y-3 text-sm">
                <div>
                  <b>Experience:</b> 2+ years
                </div>
                <div>
                  <b>Strengths:</b> Payments, TypeScript, Charts, Clean UI/UX
                </div>
                <div>
                  <b>Current Focus:</b> React + TypeScript projects
                </div>
                <button
                  onClick={() => window.print()}
                  className="btn btn-primary w-full"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Print as PDF
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <main className="container">
        <Section id="about" title="About">
          <div className="card p-6 text-base leading-relaxed">
            I build reliable, scalable web apps with a strong product sense.
            I’ve led a multiple projects end‑to‑end, migrated teams to
            TypeScript, and delivered accessible, responsive interfaces. I enjoy
            shipping features fast without compromising quality.
          </div>
        </Section>

        <Section id="skills" title="Skills" note="Core tools I use daily">
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((s) => (
              <motion.span
                key={s}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="badge"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="grid gap-4">
            {DATA.experience.map((exp) => (
              <div key={exp.role} className="card">
                <div className="p-6 pb-2">
                  <div className="text-xl font-semibold">
                    {exp.role} ·{" "}
                    <span className="text-slate-500 font-normal">
                      {exp.org}
                    </span>
                  </div>
                  <div className="text-sm text-slate-500">{exp.period}</div>
                </div>
                <div className="p-6 pt-2">
                  <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                    {exp.bullets.map((b, i) => (
                      <motion.li
                        key={i}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                      >
                        {b}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          title="Projects"
          note="Selected work & learning builds"
        >
          <div className="grid md:grid-cols-2 gap-4">
            {DATA.projects.map((p) => (
              <div
                key={p.name}
                className="card hover:shadow-md transition-shadow"
              >
                <div className="p-6 pb-2">
                  <div className="text-lg font-semibold">{p.name}</div>
                  <div className="text-xs text-slate-500">{p.period}</div>
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-sm">{p.about}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span key={t} className="badge bg-slate-100">
                        {t}
                      </span>
                    ))}
                  </div>
                  {/* <a className="btn btn-outline" href="#" aria-label={`Open ${p.name}`}>View details</a> */}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="grid md:grid-cols-2 gap-4">
            {DATA.education.map((e) => (
              <div key={e.degree} className="card">
                <div className="p-6">
                  <div className="text-lg font-semibold">{e.degree}</div>
                  <div className="text-sm text-slate-500">{e.org}</div>
                  {"period" in e ? (
                    <div className="pt-2 text-sm text-slate-500">
                      {(e as any).period}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="training" title="Training">
          {DATA.training.map((t) => (
            <div key={t.title} className="card mb-4">
              <div className="p-6">
                <div className="text-lg font-semibold">{t.title}</div>
                <div className="text-sm text-slate-500">
                  {t.org} · {t.period}
                </div>
                <div className="text-sm mt-2">{t.details}</div>
              </div>
            </div>
          ))}
        </Section>

        <Section id="certificates" title="Certificates">
          <div className="grid md:grid-cols-2 gap-4">
            {DATA.certificates.map((c) => (
              <div key={c} className="card">
                <div className="p-6 text-sm">{c}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="card p-6">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a className="hover:underline" href={`mailto:${DATA.email}`}>
                    {DATA.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a className="hover:underline" href={`tel:${DATA.phone}`}>
                    {DATA.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {DATA.location}
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  <a
                    className="hover:underline"
                    href={DATA.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  <a
                    className="hover:underline"
                    href={DATA.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              <div>
                <form
                  className="grid gap-3"
                  action="https://formspree.io/f/xldlkldp"
                  method="POST"
                >
                  <input
                    className="border rounded-2xl px-3 py-2"
                    placeholder="Your name"
                    type="text"
                    name="name"
                    required
                  />
                  <input
                    className="border rounded-2xl px-3 py-2"
                    placeholder="Your email"
                    type="email"
                    name="email"
                    required
                  />
                  <textarea
                    name="message"
                    className="border rounded-2xl px-3 py-2 min-h-[120px]"
                    placeholder="Message"
                    required
                  />
                  <button type="submit" className="btn btn-primary">
                    Send message
                  </button>
                  {/* <p className="text-xs text-slate-500">(Demo form – wire up your endpoint)</p> */}
                </form>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="mt-12 md:mt-20 border-t">
        <div className="container py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-2">
          <div>
            © {new Date().getFullYear()} {DATA.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a className="hover:underline" href="#about">
              About
            </a>
            <a className="hover:underline" href="#projects">
              Projects
            </a>
            <a className="hover:underline" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
