
"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTheme } from "./ThemeProvider";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  color: string;
  accent: string;
  lightAccent: string;
  border: string;
  demo: string;
  status: string;
  preview: "focus" | "coffee" | "portfolio";
};

const projects: Project[] = [
  {
    number: "01",
    title: "Focus Session Tracker",
    category: "Productivity App",
    description:
      "A productivity application designed to help users manage focused work sessions, build better study habits, and stay organized through a simple and user-friendly interface.",
    technologies: ["TypeScript", "HTML", "CSS"],
    color: "from-blue-500/20 to-cyan-500/5",
    accent: "text-blue-400",
    lightAccent: "text-blue-600",
    border: "group-hover:border-blue-500/40",
    demo: "https://nargiswebpage.github.io/Focus-Session-Tracker/",
    status: "Live Project",
    preview: "focus",
  },
  {
    number: "02",
    title: "Coffee Shop",
    category: "Business Website",
    description:
      "A modern coffee shop website built with an attractive design, allowing visitors to explore the shop and its offerings through a clean and engaging experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    color: "from-amber-500/20 to-orange-500/5",
    accent: "text-amber-400",
    lightAccent: "text-amber-600",
    border: "group-hover:border-amber-500/40",
    demo: "https://nargiswebpage.github.io/coffee-shop/",
    status: "Live Project",
    preview: "coffee",
  },
  {
    number: "03",
    title: "Personal Portfolio",
    category: "Portfolio Website",
    description:
      "A personal portfolio showcasing my skills, experience, and projects through a modern, responsive design and smooth interactive elements.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Motion"],
    color: "from-violet-500/20 to-indigo-500/5",
    accent: "text-violet-400",
    lightAccent: "text-violet-600",
    border: "group-hover:border-violet-500/40",
    demo: "https://nargisaliyar-portfolio.vercel.app/",
    status: "Live Project",
    preview: "portfolio",
  },
];

function ProjectPreview({ type }: { type: Project["preview"] }) {
  return (
    <div className="relative flex h-full min-h-[230px] w-full items-center justify-center overflow-hidden bg-[#0b1325] p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.12),transparent_70%)]" />

      {type === "focus" && (
        <div className="relative w-full max-w-[310px] rounded-xl border border-blue-400/15 bg-[#111c32] p-5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.04]">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-[9px] tracking-widest text-blue-300/50">
                STAY FOCUSED
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                Focus Session
              </p>
            </div>
            <span className="text-2xl text-blue-400">◷</span>
          </div>

          <div className="flex flex-col items-center rounded-lg border border-white/5 bg-white/[0.03] p-5">
            <p className="text-[9px] tracking-widest text-slate-400">
              FOCUS TIME
            </p>
            <p className="mt-2 text-4xl font-bold text-blue-400">25:00</p>
            <div className="mt-4 h-1.5 w-full rounded-full bg-slate-700">
              <div className="h-full w-[65%] rounded-full bg-blue-500" />
            </div>
            <span className="mt-4 rounded-full bg-blue-500/15 px-4 py-2 text-[10px] font-medium text-blue-400">
              Start Session
            </span>
          </div>

          <div className="mt-3 flex justify-between text-[10px] text-slate-400">
            <span>Stay productive</span>
            <span>One task at a time</span>
          </div>
        </div>
      )}

      {type === "coffee" && (
        <div className="relative w-full max-w-[310px] rounded-xl border border-amber-400/15 bg-[#241b16] p-5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.04]">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-[9px] tracking-widest text-amber-300/50">
                FRESHLY BREWED
              </p>
              <p className="mt-1 font-heading text-xl font-bold text-white">
                Coffee House
              </p>
            </div>
            <span className="text-2xl text-amber-400">☕</span>
          </div>

          <div className="rounded-lg border border-amber-300/10 bg-amber-400/[0.06] p-4">
            <p className="text-[9px] tracking-widest text-amber-300/60">
              YOUR DAILY COFFEE
            </p>
            <p className="mt-2 text-2xl font-semibold text-white">
              A perfect cup.
            </p>
            <p className="mt-2 text-[10px] leading-5 text-slate-400">
              Fresh coffee, warm moments, and a little happiness in every cup.
            </p>
            <span className="mt-4 inline-block rounded-full bg-amber-500 px-4 py-2 text-[10px] font-semibold text-white">
              Explore Menu
            </span>
          </div>

          <div className="mt-3 flex items-center justify-between text-[10px] text-amber-200/60">
            <span>Made with love</span>
            <span>☕ Coffee & More</span>
          </div>
        </div>
      )}

      {type === "portfolio" && (
        <div className="relative w-full max-w-[310px] rounded-xl border border-violet-400/15 bg-[#17152c] p-5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.04]">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-[9px] tracking-widest text-violet-300/50">
                PERSONAL PORTFOLIO
              </p>
              <p className="mt-1 font-heading text-lg font-semibold text-white">
                Nargis Aliyar
              </p>
            </div>
            <span className="text-xl text-violet-300">✦</span>
          </div>

          <div className="rounded-lg border border-violet-300/10 bg-violet-400/[0.06] p-4">
            <p className="text-[9px] tracking-widest text-violet-300/60">
              HELLO, I'M
            </p>
            <p className="mt-2 text-xl font-bold text-white">
              Front-End Developer
            </p>
            <p className="mt-2 text-[10px] leading-5 text-slate-400">
              Creating modern and meaningful digital experiences.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="rounded-full bg-violet-500/20 px-3 py-1.5 text-[9px] text-violet-300">
                Projects
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] text-slate-300">
                About Me
              </span>
            </div>
          </div>

          <div className="mt-3 flex justify-between text-[10px] text-slate-400">
            <span>Skills & Experience</span>
            <span>✧</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const reduceMotion = useReducedMotion();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-28 sm:px-10 lg:px-16"
    >
      <div
        className={`pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full blur-[130px] ${
          isDark ? "bg-blue-600/[0.06]" : "bg-blue-500/[0.08]"
        }`}
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-blue-500" />
            <span className="text-xs font-semibold tracking-[0.25em] text-blue-600 dark:text-blue-400">
              MY SELECTED WORK
            </span>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2
                className={`font-heading text-4xl font-bold tracking-tight sm:text-5xl ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Featured <span className="text-blue-500">Projects.</span>
              </h2>

              <p
                className={`mt-5 max-w-xl text-sm leading-8 sm:text-base ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                A selection of projects where I turn ideas into functional
                digital experiences and continue growing as a developer.
              </p>
            </div>

            <span
              className={`text-xs tracking-widest ${
                isDark ? "text-slate-500" : "text-slate-400"
              }`}
            >
              01 — 03
            </span>
          </div>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: reduceMotion ? 0 : index * 0.12,
              }}
              className={`group relative overflow-hidden rounded-2xl border shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                isDark
                  ? "border-white/[0.08] bg-[#0d1424] hover:shadow-black/20"
                  : "border-slate-200 bg-white/90 hover:border-blue-200 hover:shadow-blue-100/70"
              } ${project.border}`}
            >
              <div className="relative overflow-hidden">
                <ProjectPreview type={project.preview} />

                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-[#080d1a]/80 px-3 py-1.5 text-[9px] font-semibold tracking-widest text-slate-300 backdrop-blur-md">
                  {project.status}
                </span>
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className={`text-[10px] font-semibold tracking-widest ${
                      isDark ? project.accent : project.lightAccent
                    }`}
                  >
                    {project.category.toUpperCase()}
                  </span>

                  <span
                    className={`font-heading text-xs ${
                      isDark ? "text-slate-600" : "text-slate-400"
                    }`}
                  >
                    {project.number}
                  </span>
                </div>

                <h3
                  className={`font-heading text-xl font-bold transition-colors duration-300 ${
                    isDark
                      ? "text-white group-hover:text-blue-400"
                      : "text-slate-900 group-hover:text-blue-600"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`mt-4 min-h-[88px] text-sm leading-7 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className={`rounded-md border px-2.5 py-1.5 text-[10px] font-medium ${
                        isDark
                          ? "border-white/[0.07] bg-white/[0.03] text-slate-400"
                          : "border-slate-200 bg-slate-50 text-slate-600"
                      }`}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div
                  className={`mt-7 flex items-center justify-between border-t pt-5 ${
                    isDark ? "border-white/[0.07]" : "border-slate-200"
                  }`}
                >
                  <span
                    className={`text-xs font-medium ${
                      isDark ? "text-slate-500" : "text-slate-500"
                    }`}
                  >
                    Explore project
                  </span>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 transition-all duration-300 hover:rotate-45 hover:border-blue-400 hover:bg-blue-600 hover:text-white"
                  >
                    ↗
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="mt-14 text-center"
        >
          <p
            className={`text-sm ${
              isDark ? "text-slate-500" : "text-slate-500"
            }`}
          >
            More ideas are in progress.{" "}
            <span className="font-medium text-blue-500">Stay tuned.</span>
          </p>
        </motion.div>

        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>
    </section>
  );
}
