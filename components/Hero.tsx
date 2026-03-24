"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col items-center">
          <motion.div
            className="flex-1 text-center flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 text-cyan-300 text-xs font-medium border border-cyan-800/50 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for opportunities
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Hi, I&apos;m{" "}
              <span className="text-cyan-400">Tanish</span>
            </h1>

            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-300">
              Cloud Architect and DevOps Engineer
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
              I build exceptional digital experiences with modern web
              technologies, focusing on performance, accessibility, and
              beautiful interfaces.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium transition-colors shadow-sm shadow-cyan-600/20"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                View Projects
              </a>
              <a
                href="https://drive.google.com/file/d/1KcenO6BIywKGiuHX1oLWoEAWcKxqxbN6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                Resume
              </a>
            </div>

            <div className="mt-8 flex gap-3 justify-center">
              {[
                { icon: Github, href: "https://github.com/TanishThakur001", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/tanish-thakur27/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:tanishthakur133@gmail.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-800 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 text-slate-400" />
        </motion.div>
      </div>
    </section>
  );
}
