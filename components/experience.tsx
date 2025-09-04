"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="border-t border-white/10 bg-gradient-to-b from-black via-zinc-900 to-black"
    >
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2
          id="experience-title"
          className="text-3xl font-bold text-white flex items-center gap-2"
        >
          <Briefcase className="h-6 w-6 text-red-500" />
          <span className="text-red-500">Experience</span>
        </h2>

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-8 rounded-2xl border border-white/10 bg-zinc-800/40 backdrop-blur-sm p-6 shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-1"
        >
          <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h3 className="text-lg font-semibold text-white">
              Project Management Intern — <span className="text-red-400">ATG, Banao</span>
            </h3>
            <p className="text-xs text-white/60 bg-white/10 px-3 py-1 rounded-full">
              April 2024 – August 2024
            </p>
          </header>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/80 leading-relaxed">
            <li>
              Managed multiple client projects, leading to a{" "}
              <span className="text-red-400 font-medium">20% increase</span> in social media engagement.
            </li>
            <li>
              Identified and corrected errors in marketing content, improving accuracy by{" "}
              <span className="text-red-400 font-medium">30%</span>.
            </li>
            <li>
              Led a team of 5 to deliver projects ahead of schedule, increasing client satisfaction.
            </li>
          </ul>
        </motion.article>
      </div>
    </section>
  )
}
