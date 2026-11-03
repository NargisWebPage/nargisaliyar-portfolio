
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-8">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--nav-bg)] px-5 shadow-lg backdrop-blur-xl transition-colors duration-300 sm:px-8">

        {/* Logo */}
        <a
          href="#home"
          aria-label="Nargis Aliyar - Home"
          className="group flex items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 font-heading text-sm font-bold text-blue-500 transition-all duration-300 group-hover:border-blue-500/50 group-hover:bg-blue-500/20">
            NA
          </span>

          <span className="hidden font-heading text-sm font-semibold tracking-wide text-[var(--foreground)] sm:block">
            NARGIS ALIYAR
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative py-2 text-[13px] font-medium tracking-wide text-[var(--secondary)] transition-colors duration-300 hover:text-blue-500"
            >
              {link.name}

              <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-5 py-2.5 text-[13px] font-semibold text-blue-500 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/20 lg:inline-flex"
          >
            Let's Talk
            <span>↗</span>
          </a>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-blue-500 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.42 1.42" />
                <path d="m17.65 17.65 1.42 1.42" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.35 17.65-1.42 1.42" />
                <path d="m19.07 4.93-1.42 1.42" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6.5 6.5 0 0 0 8.268 8.268c.344-.215.825-.003.803.401Z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-colors hover:border-blue-500/50 lg:hidden"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="h-[2px] w-5 rounded-full bg-[var(--foreground)]"
            />

            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="h-[2px] w-5 rounded-full bg-[var(--foreground)]"
            />

            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="h-[2px] w-5 rounded-full bg-[var(--foreground)]"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--nav-bg)] p-5 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[var(--border)] py-4 text-sm font-medium text-[var(--foreground)] transition-colors hover:text-blue-500 last:border-0"
                >
                  {link.name}
                </motion.a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-500"
              >
                Let's Talk
                <span>↗</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
