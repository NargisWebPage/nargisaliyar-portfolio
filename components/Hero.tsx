"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function Hero() {
const reduceMotion = useReducedMotion();

return ( <section
   id="home"
   className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28 sm:px-10 lg:px-16"
 >
{/* Background Effects */} <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"> <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.07] blur-[130px]" />


    <div className="absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-blue-500/[0.06] blur-[120px]" />

    <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#94a3b8_1px,transparent_1px),linear-gradient(90deg,#94a3b8_1px,transparent_1px)] [background-size:55px_55px]" />
  </div>

  <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-16">

    {/* Introduction */}
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 order-2 lg:order-1"
    >
      <div className="mb-7 flex items-center gap-3">
        <span className="h-px w-9 bg-blue-500" />
        <span className="text-xs font-semibold tracking-[0.25em] text-blue-400">
          FRONT-END DEVELOPER
        </span>
      </div>

      <p className="mb-3 text-base text-secondary">
        Hello, I'm
      </p>

      <h1 className="font-heading text-5xl font-bold tracking-tight sm:text-6xl">
        Nargis{" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Aliyar
        </span>
        <span className="text-blue-500">.</span>
      </h1>

      <h2 className="mt-6 max-w-lg text-xl font-medium leading-relaxed text-foreground/90 sm:text-2xl">
        Front-End Developer
        <span className="text-blue-500"> & </span>
        Computer Science Student
      </h2>

      <p className="mt-5 max-w-md text-sm leading-8 text-secondary sm:text-base">
        I build modern, responsive, and user-friendly digital experiences.
        I enjoy turning creative ideas into functional and meaningful
        websites.
      </p>

      {/* Action Buttons */}
      <div className="mt-9 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="group inline-flex items-center gap-3 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/30"
        >
          View My Work
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        <a
          href="/nargis-aliyar-cV.pdf"
          download
          className="inline-flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
        >
          Download CV
          <span>↓</span>
        </a>
      </div>

      <div className="mt-12 flex items-center gap-4 text-xs tracking-[0.18em] text-slate-500">
        <span className="h-px w-10 bg-blue-500/60" />
        DESIGN · DEVELOP · CREATE
      </div>
    </motion.div>

    {/* Circular Profile Visual */}
    <div className="relative order-1 flex min-h-[390px] items-center justify-center lg:order-2">

      {/* Blue Glow */}
      <motion.div
        animate={
          reduceMotion
            ? {}
            : { scale: [1, 1.12, 1], opacity: [0.35, 0.6, 0.35] }
        }
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-64 w-64 rounded-full bg-blue-600/30 blur-[85px] sm:h-72 sm:w-72"
      />

      {/* Outer Rotating Ring */}
      <motion.div
        animate={reduceMotion ? {} : { rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[340px] w-[340px] rounded-full border border-dashed border-blue-500/30 sm:h-[370px] sm:w-[370px]"
      >
        <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_15px_4px_rgba(59,130,246,0.5)]" />
      </motion.div>

      {/* Inner Rotating Ring */}
      <motion.div
        animate={reduceMotion ? {} : { rotate: -360 }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[300px] w-[300px] rounded-full border border-blue-400/20 sm:h-[325px] sm:w-[325px]"
      >
        <span className="absolute bottom-8 right-5 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_3px_rgba(34,211,238,0.5)]" />
      </motion.div>

      {/* Circular Image */}
      <motion.div
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.85 }}
        animate={
          reduceMotion
            ? { opacity: 1 }
            : { opacity: 1, scale: [1, 1.025, 1] }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                opacity: { duration: 0.8 },
                scale: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
        }
        className="relative z-10 h-56 w-56 overflow-hidden rounded-full border-[5px] border-slate-800 bg-slate-900 shadow-[0_0_45px_rgba(37,99,235,0.25)] sm:h-64 sm:w-64"
      >
        <div className="absolute inset-0 rounded-full border border-blue-400/40" />

        <Image
          src="/images/profileee.png"
          alt="Samea Rasuli"
          fill
          priority
          sizes="(max-width: 640px) 224px, 256px"
          className="object-cover"
        />

        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-blue-950/20 via-transparent to-blue-300/10" />
      </motion.div>

      {/* Floating Decorative Dots */}
      <motion.span
        animate={
          reduceMotion
            ? {}
            : { y: [0, -12, 0], opacity: [0.5, 1, 0.5] }
        }
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute right-[12%] top-[16%] h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_18px_5px_rgba(59,130,246,0.35)]"
      />

      <motion.span
        animate={reduceMotion ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-[15%] left-[10%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_4px_rgba(34,211,238,0.4)]"
      />
    </div>
  </div>
</section>


);
}