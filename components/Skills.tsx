"use client";

import { motion } from "framer-motion";

// Placeholder skill categories - fill in your actual skills later
const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C/C++", level: 80 },
      { name: "Java", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 80 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "ReactJS", level: 90 },
      { name: "NodeJS", level: 85 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "GitHub", level: 85 },
      { name: "AWS", level: 70 },
      { name: "Linux", level: 80 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Skills &{" "}
            <span className="text-cyan-400">Expertise</span>
          </h2>
          <div className="mt-3 w-16 h-0.5 bg-cyan-500 mx-auto" />
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
              className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-all"
            >
              <h3 className="text-base font-semibold text-white mb-5">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
