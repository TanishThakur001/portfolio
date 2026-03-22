"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

// Placeholder projects - fill in your actual projects later
const projects = [
  {
    title: "Content Streaming App",
    description: "Built a React-based content streaming web app with external API integration. Implemented a CI/CD pipeline for automated testing, security checks, and deployment. Added real-time email notifications for build and deployment updates",
    tags: ["React", "API", "CI/CD", "Testing"],
    github: "https://github.com/TanishThakur001/Content_Streming_Service",
    live: "#",
    image: "/project-1.png",
  },
  {
    title: "Pokémon Card Battle Game",
    description: "Built an interactive full-stack web application for collecting and battling Pokémon-themed cards. Enabled real-time multiplayer gameplay and designed a dynamic, engaging user experience. Implemented unified response logic to ensure consistent behavior across different game scenarios.",
    tags: ["Full-stack", "Multiplayer", "Real-time"],
    github: "https://github.com/TanishThakur001/Poki-Game",
    live: "#",
    image: "/project-2.png",
  },
  {
    title: "Deadlock Detection Simulator",
    description: "Built an interactive React-based simulator for AI-driven deadlock detection in multi-threaded systems. Developed dynamic visualizations for processes and resources with real-time updates. Implemented user controls for managing simulation flow and improving interactivity.",
    tags: ["React", "AI", "Visualization"],
    github: "https://github.com/TanishThakur001/OS-Project",
    live: "#",
    image: "/project-3.png",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Featured{" "}
            <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="mt-3 w-16 h-0.5 bg-cyan-500 mx-auto" />
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm">
            Some of the projects I&apos;ve worked on
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-2xl bg-slate-800/30 border border-slate-700/50 overflow-hidden hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-1"
            >
              <div className="aspect-video bg-slate-800/50 flex items-center justify-center border-b border-slate-700/50 overflow-hidden relative transition-opacity group-hover:opacity-90">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <span className="text-slate-600 text-sm">Project Image</span>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-cyan-950/30 text-cyan-300 border border-cyan-800/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3 pt-3 border-t border-slate-700/50">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
