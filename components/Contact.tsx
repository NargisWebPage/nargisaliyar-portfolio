"use client";

import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, useReducedMotion } from "motion/react";
import { useTheme } from "./ThemeProvider";

export default function Contact() {
  const reduceMotion = useReducedMotion();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Formspree integration
  const [state, handleSubmit, reset] = useForm("xaeeldzw");

  // Reference to the form
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form fields after successful submission
  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();

      const timer = setTimeout(() => {
        reset();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded, reset]);

  // Input styles
  const inputClass = `w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10 ${
    isDark
      ? "border-white/[0.08] bg-[#080d1a] text-white placeholder:text-slate-600"
      : "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:bg-white"
  }`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28 sm:px-10 lg:px-16"
    >
      {/* Background Effects */}
      <div
        className={`pointer-events-none absolute bottom-0 left-1/4 h-80 w-80 rounded-full blur-[130px] ${
          isDark ? "bg-blue-600/[0.07]" : "bg-blue-500/[0.09]"
        }`}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Heading */}
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
              GET IN TOUCH
            </span>
          </div>

          <h2
            className={`font-heading text-4xl font-bold tracking-tight sm:text-5xl ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Let's Start a{" "}
            <span className="text-blue-500">Conversation.</span>
          </h2>

          <p
            className={`mt-5 max-w-xl text-sm leading-8 sm:text-base ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Have a project in mind, an opportunity to share, or simply want to
            connect? I'd be happy to hear from you.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.7 }}
            className="flex flex-col"
          >
            <div
              className={`rounded-2xl border p-7 shadow-sm backdrop-blur-xl sm:p-8 ${
                isDark
                  ? "border-white/[0.08] bg-[#0d1424]"
                  : "border-slate-200 bg-white/90 shadow-slate-200/40"
              }`}
            >
              <h3
                className={`font-heading text-xl font-semibold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Let's connect
              </h3>

              <p
                className={`mt-3 text-sm leading-7 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                I'm open to meaningful collaborations, learning opportunities,
                and conversations about technology and web development.
              </p>

              {/* Email */}
              <a
                href="mailto:Samearasuli272@gmail.com"
                className="group mt-8 flex items-center gap-4"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl text-blue-500 transition-all group-hover:bg-blue-500/20">
                  ✉
                </span>

                <span>
                  <span className="block text-xs text-slate-500">
                    EMAIL ME
                  </span>

                  <span
                    className={`mt-1 block break-all text-sm font-medium transition-colors group-hover:text-blue-500 ${
                      isDark ? "text-slate-200" : "text-slate-800"
                    }`}
                  >
                    Samearasuli272@gmail.com
                  </span>
                </span>
              </a>

              {/* Location */}
              <div className="mt-7 flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-xl text-emerald-500">
                  ◎
                </span>

                <span>
                  <span className="block text-xs text-slate-500">
                    LOCATION
                  </span>

                  <span
                    className={`mt-1 block text-sm font-medium ${
                      isDark ? "text-slate-200" : "text-slate-800"
                    }`}
                  >
                    Afghanistan
                  </span>
                </span>
              </div>

{/* Social Links */}
<div
  className={`mt-9 border-t pt-7 ${
    isDark ? "border-white/[0.07]" : "border-slate-200"
  }`}
>
  <p className="mb-4 text-xs font-semibold tracking-widest text-slate-500">
    FIND ME ONLINE
  </p>

  <div className="flex gap-3">
    {/* GitHub */}
    <a
      href="https://github.com/NargisAliyar"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub Profile"
      className={`flex h-11 w-11 items-center justify-center rounded-xl border text-xs font-bold transition-all hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-500 ${
        isDark
          ? "border-white/10 bg-white/[0.03] text-slate-300"
          : "border-slate-200 bg-slate-50 text-slate-600"
      }`}
    >
      GH
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/nargis-aliyar-026977398/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn Profile"
      className={`flex h-11 w-11 items-center justify-center rounded-xl border text-xs font-bold transition-all hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-500 ${
        isDark
          ? "border-white/10 bg-white/[0.03] text-slate-300"
          : "border-slate-200 bg-slate-50 text-slate-600"
      }`}
    >
      in
    </a>
  </div>
</div>
</div>

            {/* Collaboration Note */}
            <div
              className={`mt-5 rounded-2xl border p-6 ${
                isDark
                  ? "border-blue-500/15 bg-blue-500/[0.05]"
                  : "border-blue-200 bg-blue-50/70"
              }`}
            >
              <p
                className={`text-sm font-medium ${
                  isDark ? "text-blue-300" : "text-blue-700"
                }`}
              >
                Have an interesting idea?
              </p>

              <p
                className={`mt-2 text-xs leading-6 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Every great collaboration starts with a conversation.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.7 }}
            className={`rounded-2xl border p-6 shadow-sm backdrop-blur-xl sm:p-9 ${
              isDark
                ? "border-white/[0.08] bg-[#0d1424]"
                : "border-slate-200 bg-white/90 shadow-slate-200/40"
            }`}
          >
            <div className="mb-8">
              <h3
                className={`font-heading text-xl font-semibold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Send me a message
              </h3>

              <p
                className={`mt-2 text-sm ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Fill out the form below and I'll get back to you.
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className={`mb-2 block text-xs font-medium ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  maxLength={80}
                  placeholder="Enter your name"
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className={`mb-2 block text-xs font-medium ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  maxLength={120}
                  placeholder="you@example.com"
                  className={inputClass}
                />

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-2 block text-xs text-red-500"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className={`mb-2 block text-xs font-medium ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  maxLength={2000}
                  placeholder="Tell me about your idea..."
                  className={`${inputClass} resize-none`}
                />

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="mt-2 block text-xs text-red-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/30 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {state.submitting ? "Sending..." : "Send Message"}

                {!state.submitting && (
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                )}
              </button>

              {/* Success Message */}
              {state.succeeded && (
                <p
                  role="status"
                  aria-live="polite"
                  className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-center text-sm text-emerald-500"
                >
                  Your message has been sent successfully! Thank you for
                  reaching out. I'll get back to you soon.
                </p>
              )}

              {/* General Form Errors */}
              {state.errors && (
                <ValidationError
                  errors={state.errors}
                  className="text-center text-sm text-red-500"
                />
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}