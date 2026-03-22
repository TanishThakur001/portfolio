"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Zap, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and scalable code",
  },
  {
    icon: Palette,
    title: "Modern Design",
    description: "Creating beautiful user interfaces",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and efficiency",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in teams",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="mt-3 w-16 h-0.5 bg-cyan-500 mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-base text-slate-400 leading-relaxed">
              Hello! I&apos;m Tanish, a passionate developer who loves building
              web applications with modern technologies. I focus on creating
              clean, efficient, and user-friendly digital experiences.
            </p>
            <p className="mt-4 text-base text-slate-400 leading-relaxed">
              I&apos;m always eager to learn new things and take on challenging
              projects. My goal is to write code that makes a difference and
              creates value for users.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-colors group"
                >
                  <item.icon className="w-5 h-5 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-white text-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
