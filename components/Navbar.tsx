"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certificates", href: "#certificates" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1a]/80 backdrop-blur-xl border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="text-lg font-bold text-cyan-400 tracking-tight font-mono"
          >
            &lt;Tanish /&gt;
          </a>

          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-[13px] font-medium text-slate-400 hover:text-cyan-400 rounded-md hover:bg-slate-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1KcenO6BIywKGiuHX1oLWoEAWcKxqxbN6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-1.5 text-[13px] font-medium text-cyan-50 bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/30 rounded-md transition-colors"
            >
              Resume
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-slate-400 hover:bg-slate-800"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0f1a] border-b border-slate-800 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-slate-400 hover:text-cyan-400 rounded-lg hover:bg-slate-800/60 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/1KcenO6BIywKGiuHX1oLWoEAWcKxqxbN6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 mt-2 text-sm font-medium text-cyan-50 bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/30 rounded-lg transition-colors text-center"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
