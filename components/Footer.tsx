"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTheme } from "./ThemeProvider";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const reduceMotion = useReducedMotion();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const borderColor = isDark
    ? "border-white/[0.07]"
    : "border-slate-200";

  const headingColor = isDark ? "text-white" : "text-slate-900";

  const bodyColor = isDark ? "text-slate-400" : "text-slate-600";

  const socialButtonStyle = isDark
    ? "border-white/10 bg-white/[0.03] text-slate-400"
    : "border-slate-200 bg-white text-slate-600";

  const backToTopStyle = isDark
    ? "border-white/10 bg-white/[0.03] text-slate-400"
    : "border-slate-200 bg-white text-slate-600";

  return (
    <footer
      className={`relative overflow-hidden border-t px-6 pb-8 pt-16 sm:px-10 lg:px-16 ${
        isDark
          ? "border-white/[0.07] bg-[#070c17]"
          : "border-slate-200 bg-[#eaf0f9]"
      }`}
    >
      {/* Background Glow */}
      <div
        className={`pointer-events-none absolute bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full blur-[120px] ${
          isDark ? "bg-blue-600/[0.06]" : "bg-blue-500/[0.09]"
        }`}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Main Footer */}
        <div
          className={`grid gap-12 border-b pb-12 md:grid-cols-[1.3fr_1fr_1fr] ${borderColor}`}
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.6 }}
          >
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 font-heading text-sm font-bold text-blue-500">
                SR<span className={headingColor}>.</span>
              </span>

              <span
                className={`font-heading text-sm font-semibold tracking-wide ${headingColor}`}
              >
                SAMEA RASULI
              </span>
            </a>

            <p className={`mt-6 max-w-xs text-sm leading-8 ${bodyColor}`}>
              Front-End Developer and Computer Science student passionate
              about creating modern and meaningful digital experiences.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={`flex h-10 w-10 items-center justify-center rounded-xl border text-xs font-bold transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-500 ${socialButtonStyle}`}
              >
                GH
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={`flex h-10 w-10 items-center justify-center rounded-xl border text-xs font-bold transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-500 ${socialButtonStyle}`}
              >
                in
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion ? 0 : 0.1,
            }}
          >
            <h3
              className={`mb-6 text-xs font-semibold tracking-[0.2em] ${headingColor}`}
            >
              QUICK LINKS
            </h3>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`w-fit text-sm transition-all duration-300 hover:translate-x-1 hover:text-blue-500 ${bodyColor}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion ? 0 : 0.2,
            }}
          >
            <h3
              className={`mb-6 text-xs font-semibold tracking-[0.2em] ${headingColor}`}
            >
              LET'S CONNECT
            </h3>

            <p className={`max-w-xs text-sm leading-7 ${bodyColor}`}>
              Interested in working together or discussing a project? Feel free
              to get in touch.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-500 transition-colors hover:text-blue-400"
            >
              Get in touch
              <span>↗</span>
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-5 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">
            © 2026 Samea Rasuli. All rights reserved.
          </p>

          <p className="text-xs tracking-wide text-slate-500">
            Designed & Built with{" "}
            <span className="font-medium text-blue-500">passion</span>.
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className={`flex h-10 w-10 items-center justify-center rounded-xl border text-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-500 ${backToTopStyle}`}
          >
            ↑
          </a>
        </div>
      </div>
    </footer>
  );
}