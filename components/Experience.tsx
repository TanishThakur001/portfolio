"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

// Training data
const experiences = [
  {
    role: "Data Structures and Algorithms",
    company: "Cipher Schools",
    period: "Jun 2025 – Aug 2025",
    description: "Solved real-world problems using core data structures and algorithms with a focus on time and space optimization. Implemented techniques such as recursion, dynamic programming, greedy algorithms, backtracking, searching, and sorting.",
    technologies: ["C++", "Java"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            <span className="text-cyan-400">Training</span>
          </h2>
          <div className="mt-3 w-16 h-0.5 bg-cyan-500 mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-cyan-500 before:to-teal-500"
            >
              <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <div className="ml-4 p-5 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
                <span className="text-sm font-medium text-cyan-400">
                  {exp.period}
                </span>
                <h3 className="mt-1 text-base font-semibold text-white">
                  {exp.role}
                </h3>
                <p className="text-sm text-slate-400">{exp.company}</p>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                  {exp.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-cyan-950/30 text-cyan-300 border border-cyan-800/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
