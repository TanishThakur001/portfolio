"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";

// Placeholder certificates - fill in your actual certificates later
const certificates = [
  {
    title: "Privacy and Security in online Social Media",
    issuer: "NPTEL IIT Madras",
    date: "",
    link: "https://drive.google.com/drive/u/0/folders/1dmnSrab95Xqri6zf8tgsJNOnZ0MHMM1V",
    image: "/cert-2.png",
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "Cipher Schools",
    date: "",
    link: "https://drive.google.com/drive/u/0/folders/1dmnSrab95Xqri6zf8tgsJNOnZ0MHMM1V",
    image: "/cert-1.png",
  },
  {
    title: "Introduction to Hardware and Operating System",
    issuer: "IBM",
    date: "",
    link: "https://drive.google.com/drive/u/0/folders/1dmnSrab95Xqri6zf8tgsJNOnZ0MHMM1V",
    image: "/cert-3.png",
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            <span className="text-cyan-400">Certificates</span>
          </h2>
          <div className="mt-3 w-16 h-0.5 bg-cyan-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-5 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-all"
            >
              <div className="aspect-[4/3] rounded-xl bg-slate-800/50 flex items-center justify-center mb-4 border border-slate-700/50 overflow-hidden relative">
                {cert.image ? (
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <Award className="w-8 h-8 text-cyan-500/20" />
                )}
              </div>
              <h3 className="font-semibold text-white text-sm">{cert.title}</h3>
              <p className="text-xs text-slate-400 mt-1">{cert.issuer}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">{cert.date}</span>
                <a
                  href={cert.link}
                  className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:underline"
                >
                  View <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
