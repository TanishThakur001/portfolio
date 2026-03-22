"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

// Education Data
const educationData = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, Phagwara",
    degree: "Computer Science and Engineering",
    year: "Aug' 23 - Present",
    description: "CGPA: 7.54",
  },
  {
    institution: "Dayanand Public School",
    location: "Shimla, Himachal Pradesh",
    degree: "Intermediate",
    year: "Apr' 22 - Mar' 23",
    description: "Percentage: 74.6%",
  },
  {
    institution: "Dayanand Public School",
    location: "Shimla, Himachal Pradesh",
    degree: "Matriculation",
    year: "Apr' 20 - Mar' 21",
    description: "Percentage: 84.4%",
  },
];

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            <span className="text-cyan-400">Education</span>
          </h2>
          <div className="mt-3 w-16 h-0.5 bg-cyan-500 mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-cyan-500 before:to-teal-500"
            >
              <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <div className="ml-4 p-6 rounded-xl bg-[#131b2c]/80 border border-slate-700/50 hover:border-indigo-500/40 transition-colors">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#8eb2f7]">
                      {edu.institution}
                    </h3>
                    {edu.location && (
                      <p className="text-sm text-slate-400 mt-1">{edu.location}</p>
                    )}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#1e2746] text-[#a5b4fc] border border-indigo-500/20 text-xs font-medium whitespace-nowrap">
                    {edu.year}
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-base text-gray-100">{edu.degree}</p>
                  <p className="mt-1 text-sm text-slate-400">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
