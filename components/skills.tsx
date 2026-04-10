"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaLinux,
} from "react-icons/fa"

import {
  SiCplusplus,
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiMysql,
  SiMongodb,
  SiSelenium,
  SiPostman,
} from "react-icons/si"

import { VscVscode } from "react-icons/vsc"

type Skill = {
  name: string
  icon?: JSX.Element
  level?: number
  category: string
}

const skills: Skill[] = [
  { name: "C/C++", icon: <SiCplusplus />, level: 80, category: "Languages" },
  { name: "React.js", icon: <FaReact />, level: 90, category: "Frontend" },
  { name: "JavaScript", icon: <SiJavascript />, level: 85, category: "Languages" },
  { name: "Python", icon: <FaPython />, level: 75, category: "Languages" },
  { name: "HTML", icon: <FaHtml5 />, level: 95, category: "Frontend" },
  { name: "CSS", icon: <FaCss3Alt />, level: 90, category: "Frontend" },
  { name: "SQL", icon: <SiMysql />, level: 80, category: "Database" },
  { name: "MongoDB", icon: <SiMongodb />, level: 75, category: "Database" },

  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90, category: "Frontend" },
  { name: "Firebase", icon: <SiFirebase />, level: 80, category: "Tools" },

  { name: "Manual Testing", level: 95, category: "Testing" },
  { name: "Selenium", icon: <SiSelenium />, level: 75, category: "Testing" },
  { name: "Postman", icon: <SiPostman />, level: 85, category: "Testing" },
  { name: "REST APIs", level: 85, category: "Testing" },


  { name: "Git", icon: <FaGitAlt />, level: 85, category: "Tools" },
  { name: "GitHub", icon: <FaGithub />, level: 90, category: "Tools" },
  { name: "VS Code", icon: <VscVscode />, level: 95, category: "Tools" },

   // Core Concepts
  { name: "OOP", category: "Core Concepts" },
  { name: "Data Structures", category: "Core Concepts" },
  { name: "Algorithms", category: "Core Concepts" },
  { name: "Operating Systems", category: "Core Concepts" },
  { name: "DBMS", category: "Core Concepts" },

  // Testing Concepts
  { name: "SDLC", category: "Testing Concepts" },
  { name: "STLC", category: "Testing Concepts" },
  { name: "Defect Life Cycle", category: "Testing Concepts" },
  { name: "Test Plan", category: "Testing Concepts" },
  { name: "Black Box Testing", category: "Testing Concepts" },
  { name: "Regression Testing", category: "Testing Concepts" },
  { name: "Smoke Testing", category: "Testing Concepts" },
  { name: "Sanity Testing", category: "Testing Concepts" },
  { name: "Exploratory Testing", category: "Testing Concepts" },

]

const categories = ["All", "Frontend", "Languages", "Testing", "Tools", "Database" , "Core Concepts", "Testing Concepts"]

export default function Skills() {
  const [active, setActive] = useState("All")

  const filtered =
  active === "All"
    ? skills.filter(
        (s) =>
          s.category !== "Core Concepts" &&
          s.category !== "Testing Concepts"
      )
    : skills.filter((s) => s.category === active)

  return (
    <section className="relative py-28 bg-black overflow-hidden">
      
      {/* 🌌 Animated background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.15),transparent_40%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-5xl font-bold text-white"
        >
          <span className="bg-gradient-to-b from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent font-sora drop-shadow-[0_0_20px_rgba(99,102,241,0.8)]">Skills</span> & Tech
        </motion.h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm border transition ${
                active === cat
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-none"
                  : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-blue-500/40 to-purple-500/40"
            >
              {/* Inner card */}
              <div className="rounded-2xl bg-zinc-900/80 backdrop-blur-xl p-6 h-full">
                
                {/* Glow hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl"></div>

                <div className="relative z-10">
                  
                  {/* Icon + name */}
                  <div className="flex items-center gap-3 text-white">
                    <span className="text-2xl text-blue-400">
                      {skill.icon}
                    </span>
                    <span className="font-semibold text-lg">{skill.name}</span>
                  </div>

                  {/* Animated Progress */}
                  {skill.level && (
                    <div className="mt-5">
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1 }}
                          className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
                        ></motion.div>
                      </div>
                      <p className="text-xs text-white/50 mt-1">{skill.level}%</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}