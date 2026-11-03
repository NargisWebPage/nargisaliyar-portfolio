"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTheme } from "./ThemeProvider";

const skillGroups = [
  {
    number: "01",
    category: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: "⌘",
    skills: [
      { name: "HTML5", level: "Comfortable", width: "85%" },
      { name: "CSS3", level: "Comfortable", width: "80%" },
      { name: "JavaScript", level: "Learning", width: "55%" },
      { name: "TypeScript", level: "Learning", width: "45%" },
      { name: "React", level: "Learning", width: "45%" },
      { name: "Tailwind CSS", level: "Learning", width: "55%" },
    ],
  },
  {
    number: "02",
    category: "Tools & Technologies",
    description: "Tools I use throughout my development workflow.",
    icon: "⌘",
    skills: [
      { name: "Git", level: "Learning", width: "45%" },
      { name: "GitHub", level: "Comfortable", width: "75%" },
      { name: "VS Code", level: "Comfortable", width: "85%" },
      { name: "Next.js", level: "Exploring", width: "35%" },
      { name: "npm", level: "Learning", width: "50%" },
    ],
  },
];

export default function Skills() {
  const reduceMotion = useReducedMotion();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden px-6 py-28 sm:px-10 lg:px-16"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute right-0 top-1/4 h-72 w-72 rounded-full blur-[110px] ${
            isDark ? "bg-blue-600/[0.06]" : "bg-blue-500/[0.09]"
          }`}
        />

        <div
          className={`absolute bottom-0 left-0 h-72 w-72 rounded-full blur-[110px] ${
            isDark ? "bg-cyan-500/[0.04]" : "bg-emerald-400/[0.07]"
          }`}
        />
      </div>

      <div className="mx-auto max-w-6xl">
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
              MY EXPERTISE
            </span>
          </div>

          <h2
            className={`font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
              isDark ? "text-slate-100" : "text-slate-900"
            }`}
          >
            Skills &
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              {" "}Technologies
            </span>
            <span className="text-blue-500">.</span>
          </h2>

          <p
            className={`mt-5 max-w-xl text-sm leading-8 sm:text-base ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Technologies and tools I'm currently working with as I continue
            developing my skills in front-end development.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid gap-7 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.number}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 30,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : index * 0.15,
              }}
              className={`group relative overflow-hidden rounded-2xl border p-7 shadow-sm backdrop-blur-xl transition-all duration-300 sm:p-9 ${
                isDark
                  ? "border-white/[0.07] bg-[#0d1628]/75 hover:border-blue-500/30"
                  : "border-slate-200 bg-white/80 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/60"
              }`}
            >
              {/* Card Glow */}
              <div
                className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-[90px] transition-all duration-500 ${
                  isDark
                    ? "bg-blue-500/0 group-hover:bg-blue-500/10"
                    : "bg-blue-400/0 group-hover:bg-blue-400/15"
                }`}
              />

              {/* Category Header */}
              <div className="relative mb-9 flex items-start justify-between">
                <div>
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl border text-xl ${
                      isDark
                        ? "border-blue-500/20 bg-blue-500/10 text-blue-400"
                        : "border-blue-200 bg-blue-50 text-blue-600"
                    }`}
                  >
                    {group.icon}
                  </div>

                  <h3
                    className={`font-heading text-xl font-semibold ${
                      isDark ? "text-slate-100" : "text-slate-900"
                    }`}
                  >
                    {group.category}
                  </h3>

                  <p
                    className={`mt-2 text-sm leading-7 ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {group.description}
                  </p>
                </div>

                <span className="font-heading text-sm font-semibold tracking-widest text-blue-500/60">
                  {group.number}
                </span>
              </div>

              {/* Skills */}
              <div className="relative space-y-6">
                {group.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span
                        className={`text-sm font-medium ${
                          isDark ? "text-slate-200" : "text-slate-800"
                        }`}
                      >
                        {skill.name}
                      </span>

                      <span
                        className={`text-xs ${
                          isDark ? "text-slate-500" : "text-slate-500"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    <div
                      className={`h-1.5 overflow-hidden rounded-full ${
                        isDark ? "bg-slate-800" : "bg-slate-200"
                      }`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.width }}
                        viewport={{ once: true }}
                        transition={{
                          duration: reduceMotion ? 0 : 1,
                          delay: reduceMotion ? 0 : 0.2 + skillIndex * 0.08,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Detail */}
              <div
                className={`relative mt-9 flex items-center justify-between border-t pt-5 ${
                  isDark ? "border-white/[0.07]" : "border-slate-200"
                }`}
              >
                <span
                  className={`text-xs tracking-wide ${
                    isDark ? "text-slate-500" : "text-slate-500"
                  }`}
                >
                  CONTINUOUS IMPROVEMENT
                </span>

                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                  IN PROGRESS ↗
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className={`mt-12 rounded-2xl border px-7 py-6 text-center ${
            isDark
              ? "border-blue-500/15 bg-blue-500/[0.04]"
              : "border-blue-200 bg-blue-50/70"
          }`}
        >
          <p
            className={`text-sm leading-7 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Every skill starts with curiosity.
            <span className="font-medium text-blue-600 dark:text-blue-400">
              {" "}I'm always learning, experimenting, and growing.
            </span>
          </p>
        </motion.div>

        {/* Section Divider */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>
    </section>
  );
}