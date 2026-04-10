"use client"

import { motion } from "framer-motion"
import {
  Bug,
  Cpu,
  Globe,
  Code2,
  Layers,
  ShieldCheck,
  Database,
  Cloud,
} from "lucide-react"

export default function WhatIDo() {
  const services = [
    {
      title: "Software Testing",
      desc: "Manual testing, bug reporting, regression & exploratory testing.",
      icon: Bug,
    },
    {
      title: "Automation Testing",
      desc: "Selenium WebDriver & TestNG for efficient automation.",
      icon: Cpu,
    },
    {
      title: "API Testing",
      desc: "REST API validation using Postman & backend verification.",
      icon: Globe,
    },
    {
      title: "Frontend Development",
      desc: "Modern UI with React.js, Tailwind & responsive design.",
      icon: Code2,
    },
    {
      title: "Full Stack Projects",
      desc: "Apps with authentication, APIs, Firebase & databases.",
      icon: Layers,
    },
    {
      title: "Cybersecurity",
      desc: "Secure apps, authentication & vulnerability awareness.",
      icon: ShieldCheck,
    },
    {
      title: "Database Testing",
      desc: "SQL validation & ensuring backend data integrity.",
      icon: Database,
    },
    {
      title: "Cloud & Firebase",
      desc: "Authentication, real-time DB & push notifications.",
      icon: Cloud,
    },
  ]

  return (
    <section id="whatido" className="relative bg-black text-white py-28 px-4 overflow-hidden border-t border-white/10">
      
      {/* 🌌 Consistent Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.12),transparent_40%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* 🔹 TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What  <span className="bg-gradient-to-b from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent font-sora drop-shadow-[0_0_20px_rgba(99,102,241,0.8)]"> I Bring to the Table</span>
          </h2>

          <p className="mt-3 text-white/60 max-w-2xl mx-auto">
            A combination of development, testing, and system design skills to build reliable applications.
          </p>
        </motion.div>

        {/* 🔹 GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3 }}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-blue-500/40 to-purple-500/40"
              >
                
                {/* Card */}
                <div className="rounded-2xl bg-zinc-900/80 backdrop-blur-xl p-6 h-full">

                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl"></div>

                  <div className="relative z-10">
                    
                    {/* ICON */}
                    <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition">
                      <Icon size={24} />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-lg font-semibold tracking-wide text-white">
                      {service.title}
                    </h3>

                    {/* DESC */}
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">
                      {service.desc}
                    </p>

                  </div>
                </div>
              </motion.div>
            )
          })}

        </div>
      </div>
    </section>
  )
}