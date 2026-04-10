"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    role: "Software Development Intern",
    company: "Infosys Springboard",
    duration: "Oct 2025 – Dec 2025",
    featured: true,
    project: "Platform to Connect Volunteers with NGOs",
    points: [
      "Developed a real-world platform connecting volunteers with NGOs.",
      "Improved analytical thinking and system design skills.",
      "Built scalable and user-focused solutions.",
      "Worked in industry-level workflows and collaboration.",
    ],
    tags: ["Full Stack", "Problem Solving", "Social Impact", "Team Collaboration"],
  },
  {
    role: "Project Management Intern",
    company: "ATG, Banao",
    duration: "April 2024 – August 2024",
    points: [
      "Increased engagement by 20%.",
      "Improved content accuracy by 30%.",
      "Led a team of 5 and delivered projects early.",
    ],
    tags: ["Leadership", "Project Management", "Problem Solving"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 bg-black overflow-hidden border-t border-white/10">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.15),transparent_40%)]"></div>

      <div className="relative max-w-5xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center"
        >
          
          <h2 className="mt-4 text-5xl font-bold text-white">
             <span className="bg-gradient-to-b from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent font-sora drop-shadow-[0_0_20px_rgba(99,102,241,0.8)]">
              Experience
            </span>
          </h2>

          <p className="mt-2 text-white/60 max-w-md">
            Turning ideas into real-world impact through development and leadership.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">

          {/* Vertical Line */}
          <div className="absolute left-3 top-0 w-[2px] h-full bg-gradient-to-b from-blue-500/40 to-purple-500/40"></div>

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-12 mb-16"
            >
              {/* Dot */}
              <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.03, rotateX: 3, rotateY: -3 }}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-blue-500/40 to-purple-500/40"
              >
                <div className="rounded-2xl bg-zinc-900/80 backdrop-blur-xl p-6">

                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl"></div>

                  <div className="relative z-10">

                    {/* Header */}
                    <div className="flex flex-col gap-3 md:flex-row md:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                          {exp.role} —{" "}
                          <span className="text-blue-400">{exp.company}</span>

                          {/* Featured badge */}
                          {exp.featured && (
                            <span className="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded-full">
                              Featured
                            </span>
                          )}
                        </h3>
                      </div>

                      <span className="text-xs text-white/60 bg-white/10 px-3 py-1 rounded-full">
                        {exp.duration}
                      </span>
                    </div>

                    {/* Project */}
                    {exp.project && (
                      <p className="mt-4 text-sm text-white/70">
                        Project:{" "}
                        <span className="text-blue-400 font-medium">
                          {exp.project}
                        </span>
                      </p>
                    )}

                    {/* Divider */}
                    <div className="mt-4 h-px bg-white/10"></div>

                    {/* Points */}
                    <ul className="mt-5 space-y-3 text-sm text-white/80">
                      {exp.points.map((point, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-blue-400">▹</span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}