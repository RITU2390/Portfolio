"use client"

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
} from "react-icons/si"

import { VscVscode } from "react-icons/vsc"

const groups = [
  {
    title: "Languages",
    items: [
      { name: "C/C++", icon: <SiCplusplus className="text-blue-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Python", icon: <FaPython className="text-green-400" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "SQL", icon: <SiMysql className="text-sky-400" /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
      { name: "VS Code", icon: <VscVscode className="text-blue-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
    ],
  },
  {
    title: "Concepts",
    items: [
      { name: "OOP" },
      { name: "Data Structures" },
      { name: "Algorithms" },
      { name: "Operating Systems" },
      { name: "DBMS" },
    ],
  },
  {
    title: "Others",
    items: [
      { name: "Linux", icon: <FaLinux className="text-yellow-300" /> },
      { name: "Firebase Auth", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "FCM" },
      { name: "QR Code Integration" },
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="border-t border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Section Title */}
        <h2
          id="skills-title"
          className="text-center text-4xl font-bold tracking-wide text-white"
        >
          <span className="text-red-500">Skills</span> & Tech
        </h2>
        <p className="mt-3 text-center text-base text-white/60 max-w-2xl mx-auto">
          A blend of languages, frameworks, and tools I use to build modern applications.
        </p>

        {/* Skills Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.title}
          className="mt-8 rounded-2xl border border-white/10 bg-zinc-800/40 backdrop-blur-sm p-6 shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-red-400">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 text-sm text-white/80 transition hover:bg-red-500/20 hover:text-white hover:border-red-400/50"
                  >
                    {item.icon && <span className="text-lg">{item.icon}</span>}
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
