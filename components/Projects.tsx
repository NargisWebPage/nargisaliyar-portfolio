"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTheme } from "./ThemeProvider";

const projects = [
  {
    number: "01",
    title: "Student GPA Manager",
    category: "Academic Dashboard",
    description:
      "A student dashboard for managing courses, tracking academic performance, and calculating GPA with a clean and intuitive interface.",
    technologies: ["TypeScript", "HTML", "CSS", "Vite"],
    color: "from-blue-500/20 to-cyan-500/5",
    accent: "text-blue-400",
    lightAccent: "text-blue-600",
    border: "group-hover:border-blue-500/40",
    demo: "https://samearasuli.github.io/GPA-Manager/",
    status: "Live Project",
    preview: "gpa",
  },
  {
    number: "02",
    title: "Moon Notes",
    category: "Productivity App",
    description:
      "A minimal note-taking application that allows users to create, organize, favorite, and manage their personal notes.",
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
    color: "from-violet-500/20 to-indigo-500/5",
    accent: "text-violet-400",
    lightAccent: "text-violet-600",
    border: "group-hover:border-violet-500/40",
    demo: "",
    status: "Personal Project",
    preview: "moon",
  },
  {
    number: "03",
    title: "AirScope",
    category: "Environmental Dashboard",
    description:
      "An air quality dashboard designed to help users explore air pollution information and understand environmental conditions.",
    technologies: ["JavaScript", "HTML", "CSS", "API"],
    color: "from-emerald-500/20 to-teal-500/5",
    accent: "text-emerald-400",
    lightAccent: "text-emerald-600",
    border: "group-hover:border-emerald-500/40",
    demo: "",
    status: "Personal Project",
    preview: "air",
  },
];

// Project Preview
function ProjectPreview({ type }: { type: string }) {
  return (
    <div className="relative flex h-full min-h-[230px] w-full items-center justify-center overflow-hidden bg-[#0b1325] p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.12),transparent_70%)]" />

      {/* GPA Manager Preview */}
      {type === "gpa" && (
        <div className="relative w-full max-w-[310px] rounded-xl border border-white/10 bg-[#111c32] p-4 shadow-2xl transition-transform duration-500 group-hover:scale-[1.04]">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-[9px] tracking-widest text-slate-500">
                STUDENT OVERVIEW
              </p>

              <p className="mt-1 text-xs font-semibold text-white">
                Academic Dashboard
              </p>
            </div>

            <div className="h-7 w-7 rounded-lg bg-blue-500/15 text-center text-sm leading-7 text-blue-400">
              ✦
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-white/5 bg-white/[0.03] p-3">
              <p className="text-[9px] text-slate-500">Current GPA</p>
              <p className="mt-1 text-2xl font-bold text-blue-400">3.85</p>

              <div className="mt-2 h-1 rounded-full bg-slate-700">
                <div className="h-1 w-[85%] rounded-full bg-blue-500" />
              </div>
            </div>

            <div className="rounded-lg border border-white/5 bg-white/[0.03] p-3">
              <p className="text-[9px] text-slate-500">Total Courses</p>
              <p className="mt-1 text-2xl font-bold text-white">08</p>

              <p className="mt-2 text-[9px] text-emerald-400">
                Academic progress
              </p>
            </div>
          </div>

          <div className="mt-3 space-y-2">
            {[85, 65, 95].map((width, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="h-1.5 flex-1 rounded-full bg-slate-700">
                  <div
                    className="h-full rounded-full bg-blue-500/80"
                    style={{ width: `${width}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Moon Notes Preview */}
      {type === "moon" && (
        <div className="relative w-full max-w-[310px] rounded-xl border border-violet-400/15 bg-[#17152c] p-5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.04]">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-[9px] tracking-widest text-violet-300/50">
                YOUR PERSONAL SPACE
              </p>

              <p className="mt-1 font-heading text-lg font-semibold text-white">
                Moon Notes
              </p>
            </div>

            <span className="text-2xl text-violet-300">☾</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-violet-300/10 bg-violet-400/[0.07] p-3">
              <div className="mb-3 h-1 w-8 rounded-full bg-violet-400/60" />

              <p className="text-xs font-medium text-white">
                Daily thoughts
              </p>

              <p className="mt-2 text-[9px] leading-4 text-slate-400">
                Little moments, meaningful memories...
              </p>
            </div>

            <div className="rounded-lg border border-blue-300/10 bg-blue-400/[0.06] p-3">
              <div className="mb-3 h-1 w-8 rounded-full bg-blue-400/60" />

              <p className="text-xs font-medium text-white">
                My ideas
              </p>

              <p className="mt-2 text-[9px] leading-4 text-slate-400">
                Save your inspiration and creativity.
              </p>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2">
            <span className="text-[10px] text-slate-400">
              Your notes, your universe
            </span>

            <span className="text-violet-300">✧</span>
          </div>
        </div>
      )}

      {/* AirScope Preview */}
      {type === "air" && (
        <div className="relative w-full max-w-[310px] rounded-xl border border-emerald-400/15 bg-[#102322] p-5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.04]">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-[9px] tracking-widest text-emerald-300/50">
                ENVIRONMENTAL INSIGHTS
              </p>

              <p className="mt-1 font-heading text-lg font-semibold text-white">
                AirScope
              </p>
            </div>

            <span className="text-xl text-emerald-400">◉</span>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.04] p-3">
            <div>
              <p className="text-[9px] text-slate-400">
                Air Quality Index
              </p>

              <p className="mt-1 text-3xl font-bold text-emerald-400">
                42
              </p>

              <p className="mt-1 text-[9px] text-emerald-300">
                Good air quality
              </p>
            </div>

            <div className="flex h-20 w-20 items-center justify-center rounded-full border-[7px] border-emerald-400/20 border-t-emerald-400">
              <span className="text-xl text-white">✓</span>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {["PM2.5", "PM10", "O₃"].map((item) => (
              <div
                key={item}
                className="rounded-lg bg-white/[0.04] p-2 text-center"
              >
                <p className="text-[9px] text-slate-500">{item}</p>
                <p className="mt-1 text-xs font-semibold text-white">12</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Projects Section
export default function Projects() {
  const reduceMotion = useReducedMotion();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-28 sm:px-10 lg:px-16"
    >
      {/* Background Effects */}
      <div
        className={`pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full blur-[130px] ${
          isDark ? "bg-blue-600/[0.06]" : "bg-blue-500/[0.08]"
        }`}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Heading */}
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
                Featured{" "}
                <span className="text-blue-500">Projects.</span>
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

        {/* Project Cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 35,
              }}
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
              {/* Preview */}
              <div className="relative overflow-hidden">
                <ProjectPreview type={project.preview} />

                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-[#080d1a]/80 px-3 py-1.5 text-[9px] font-semibold tracking-widest text-slate-300 backdrop-blur-md">
                  {project.status}
                </span>
              </div>

              {/* Content */}
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

                {/* Technologies */}
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

                {/* Project Link */}
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

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 transition-all duration-300 hover:rotate-45 hover:border-blue-400 hover:bg-blue-600 hover:text-white"
                    >
                      ↗
                    </a>
                  ) : (
                    <span
                      aria-label="Demo link unavailable"
                      className={`flex h-9 w-9 items-center justify-center rounded-full border ${
                        isDark
                          ? "border-white/10 text-slate-500"
                          : "border-slate-200 text-slate-400"
                      }`}
                    >
                      ↗
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Note */}
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
            <span className="font-medium text-blue-500">
              Stay tuned.
            </span>
          </p>
        </motion.div>

        {/* Section Divider */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>
    </section>
  );
}