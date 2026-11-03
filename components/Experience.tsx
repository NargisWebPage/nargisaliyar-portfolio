"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTheme } from "./ThemeProvider";

const experiences = [
  {
    number: "01",
    period: "2025",
    type: "Professional Experience",
    title: "Remote HR Intern",
    organization: "GAO Tek Inc.",
    description:
      "Worked remotely with the HR team, supporting candidate sourcing, reviewing CVs, communicating with applicants, and preparing recruitment reports.",
    achievements: [
      "Candidate sourcing and screening",
      "CV review and applicant communication",
      "Recruitment reports and documentation",
    ],
    color: "blue",
  },
  {
    number: "02",
    period: "6 Months",
    type: "Volunteer Experience",
    title: "English Tutor",
    organization: "Volunteer Teaching",
    description:
      "Volunteered as an English tutor, helping more than 35 girls improve their English skills through lessons, practice, and supportive learning activities.",
    achievements: [
      "Supported 35+ female students",
      "Prepared and delivered English lessons",
      "Encouraged active learning and participation",
    ],
    color: "emerald",
  },
  {
    number: "03",
    period: "Ongoing",
    type: "Professional Development",
    title: "Front-End Development",
    organization: "Independent Learning",
    description:
      "Continuously developing my technical skills through structured learning and hands-on projects, focusing on modern front-end technologies.",
    achievements: [
      "HTML, CSS, and JavaScript",
      "TypeScript and React",
      "Next.js and modern web development",
    ],
    color: "violet",
  },
];

const colorStyles = {
  blue: {
    text: "text-blue-400",
    lightText: "text-blue-600",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    line: "bg-blue-500",
    glow: "group-hover:shadow-blue-500/5",
  },
  emerald: {
    text: "text-emerald-400",
    lightText: "text-emerald-600",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    line: "bg-emerald-500",
    glow: "group-hover:shadow-emerald-500/5",
  },
  violet: {
    text: "text-violet-400",
    lightText: "text-violet-600",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    line: "bg-violet-500",
    glow: "group-hover:shadow-violet-500/5",
  },
};

export default function Experience() {
  const reduceMotion = useReducedMotion();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-28 sm:px-10 lg:px-16"
    >
      {/* Background Effects */}
      <div
        className={`pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full blur-[130px] ${
          isDark ? "bg-blue-600/[0.06]" : "bg-blue-500/[0.08]"
        }`}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-blue-500" />

            <span className="text-xs font-semibold tracking-[0.25em] text-blue-600 dark:text-blue-400">
              MY JOURNEY
            </span>
          </div>

          <h2
            className={`font-heading text-4xl font-bold tracking-tight sm:text-5xl ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Experience &
            <span className="text-blue-500"> Growth.</span>
          </h2>

          <p
            className={`mt-5 max-w-xl text-sm leading-8 sm:text-base ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Every experience has helped me grow, develop new skills, and become
            more confident in my professional journey.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            className={`absolute bottom-10 left-[19px] top-5 w-px bg-gradient-to-b from-blue-500/70 via-violet-500/40 to-transparent sm:left-[23px] ${
              isDark ? "" : "opacity-60"
            }`}
          />

          <div className="space-y-10">
            {experiences.map((experience, index) => {
              const style =
                colorStyles[experience.color as keyof typeof colorStyles];

              return (
                <motion.article
                  key={experience.number}
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : 35,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.65,
                    delay: reduceMotion ? 0 : index * 0.12,
                  }}
                  className="group relative flex gap-5 sm:gap-8"
                >
                  {/* Timeline Marker */}
                  <div className="relative z-10 flex shrink-0 items-start pt-7">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border shadow-lg sm:h-12 sm:w-12 ${
                        style.border
                      } ${style.bg} ${
                        isDark ? "" : "shadow-slate-200/70"
                      }`}
                    >
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${style.line} shadow-[0_0_12px_currentColor]`}
                      />
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div
                    className={`min-w-0 flex-1 rounded-2xl border p-6 shadow-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl sm:p-8 ${
                      isDark
                        ? "border-white/[0.08] bg-[#0d1424] group-hover:border-white/15"
                        : "border-slate-200 bg-white/90 shadow-slate-200/40 group-hover:border-blue-200"
                    } ${style.glow}`}
                  >
                    {/* Card Header */}
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                      <span
                        className={`rounded-full border px-3 py-1.5 text-[10px] font-semibold tracking-wider ${
                          isDark ? style.text : style.lightText
                        } ${style.bg} ${style.border}`}
                      >
                        {experience.type.toUpperCase()}
                      </span>

                      <span
                        className={`text-xs font-medium tracking-wider ${
                          isDark ? "text-slate-500" : "text-slate-500"
                        }`}
                      >
                        {experience.period}
                      </span>
                    </div>

                    {/* Main Content */}
                    <div>
                      <h3
                        className={`font-heading text-xl font-bold transition-colors duration-300 sm:text-2xl ${
                          isDark
                            ? "text-white group-hover:text-blue-400"
                            : "text-slate-900 group-hover:text-blue-600"
                        }`}
                      >
                        {experience.title}
                      </h3>

                      <p
                        className={`mt-2 text-sm font-medium ${
                          isDark ? style.text : style.lightText
                        }`}
                      >
                        {experience.organization}
                      </p>

                      <p
                        className={`mt-5 max-w-2xl text-sm leading-8 ${
                          isDark ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        {experience.description}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div
                      className={`mt-7 border-t pt-6 ${
                        isDark ? "border-white/[0.07]" : "border-slate-200"
                      }`}
                    >
                      <p
                        className={`mb-4 text-[10px] font-semibold tracking-[0.2em] ${
                          isDark ? "text-slate-500" : "text-slate-500"
                        }`}
                      >
                        KEY CONTRIBUTIONS
                      </p>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {experience.achievements.map((achievement) => (
                          <div
                            key={achievement}
                            className={`flex items-start gap-3 text-xs leading-6 ${
                              isDark ? "text-slate-400" : "text-slate-600"
                            }`}
                          >
                            <span
                              className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${style.line}`}
                            />

                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="mt-16 flex items-center justify-center gap-3 text-center"
        >
          <span className="h-px w-8 bg-blue-500/50" />

          <p
            className={`text-xs tracking-wider ${
              isDark ? "text-slate-500" : "text-slate-500"
            }`}
          >
            Always learning. Always moving forward.
          </p>

          <span className="h-px w-8 bg-blue-500/50" />
        </motion.div>
      </div>
    </section>
  );
}