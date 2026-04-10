"use client"

import { motion } from "framer-motion"

type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  links: { label: "Live" | "Code"; href: string }[]
}

const projects: Project[] = [
  {
    title: "SkillBridge – A Platform to Connect Volunteers with NGOs",
    description:
      "Full-stack platform connecting volunteers with NGOs. Includes onboarding, dashboards, project workflows, and JWT-based authentication with modular architecture.",
    image: "/landing%20page.png",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    links: [
      { label: "Code", href: "https://github.com/springboardmentor210/SkillBridge_Team4" },
    ],
  },
  {
    title: "QR-Based E-Gate Pass Management System",
    description:
      "SPA with React.js and Firebase Authentication. Includes QR generation and FCM-based real-time notifications.",
    image: "/qrgate.png",
    tech: ["React.js", "Firebase", "QR Code", "FCM"],
    links: [
      { label: "Code", href: "https://github.com/RITU2390/projectfinal02" },
    ],
  },
  {
    title: "Vehicle Services Management System",
    description:
      "Full-stack system for service scheduling and tracking using MySQL and JavaScript.",
    image: "/VMS.png",
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    links: [
      { label: "Code", href: "https://github.com/RITU2390/vmsproject" },
    ],
  },
]

function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.article
      whileHover={{ scale: 1.03, rotateX: 3, rotateY: -3 }}
      className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-blue-500/40 to-purple-500/40"
    >
      <div className="rounded-2xl bg-zinc-900/80 backdrop-blur-xl p-5">

        {/* Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl"></div>

        <div className="relative z-10">

          {/* Image */}
          <div className="overflow-hidden rounded-lg border border-white/10 bg-black">
            <img
              src={p.image}
              alt={p.title}
              className="w-full aspect-[4/3] object-contain group-hover:scale-105 transition"
            />
          </div>

          {/* Content */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-white">{p.title}</h3>

            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              {p.description}
            </p>

            {/* Tech */}
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-400/20"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-4 flex gap-3">
              {p.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-105 transition"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-black border-t border-white/10 py-28 overflow-hidden"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute inset-0">
        <img
          src="/bg_about.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-white">
            <span className="bg-gradient-to-b from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent font-sora drop-shadow-[0_0_20px_rgba(99,102,241,0.8)]">
              Projects
            </span>
          </h2>

          <p className="mt-3 text-white/60 max-w-2xl mx-auto">
            A showcase of my full-stack development and testing projects.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500/30 via-purple-500/40 to-blue-500/30"></div>

          <div className="space-y-20">
            {projects.map((p, index) => {
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-center justify-between"
                >

                  {/* LEFT */}
                  <div className={`w-1/2 ${isLeft ? "pr-10" : "opacity-0"}`}>
                    {isLeft && <ProjectCard p={p} />}
                  </div>

                  {/* DOT */}
                  <div className="z-10">
                    <div className="h-5 w-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"></div>
                  </div>

                  {/* RIGHT */}
                  <div className={`w-1/2 ${!isLeft ? "pl-10" : "opacity-0"}`}>
                    {!isLeft && <ProjectCard p={p} />}
                  </div>

                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}