"use client"

import Particles from "@/components/particles"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import { Download } from "lucide-react"
import { FaLinkedin, FaGithub } from "react-icons/fa6"
import { SiGmail } from "react-icons/si"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black overflow-hidden flex items-center scroll-mt-24"
    >
      {/* 🔵 PARTICLES */}
      <div className="absolute inset-0 z-0">
        <Particles />
      </div>

      {/* 🌌 SPACE + GLOW BACKGROUND */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.25),transparent_40%)]"></div>

      {/* 🧠 MAIN CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-16">

        {/* 🔥 LEFT */}
        <div className="max-w-xl">

          {/* HEADING */}
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.9)]">
              Ritu Raj
            </span>
          </h1>

          {/* ROLES */}
          <div className="mt-6 text-xl md:text-2xl font-semibold text-white/80">
            <TypeAnimation
              sequence={[
                "Cloud & DevOps Engineer",
                2000,
                "Full Stack Developer",
                2000,
                "QA Automation Engineer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* DESCRIPTION */}
          <p className="mt-5 text-white/60 leading-relaxed">
            I build scalable, high-performance applications with strong focus on
            development, automation testing, and cloud infrastructure.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="/RITU-RAJ_resume_latest.pdf"
              download
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium flex items-center gap-2 hover:scale-105 transition"
            >
              <Download size={18} />
              Download CV
            </a>

            <a
              href="https://github.com/RITU2390"
              target="_blank"
              className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 transition"
            >
              View GitHub
            </a>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-8">
            {[
              {
                icon: <FaLinkedin size={20} />,
                link: "https://www.linkedin.com/in/ritu-raj-58395b190/",
              },
              {
                icon: <FaGithub size={20} />,
                link: "https://github.com/RITU2390",
              },
              {
                icon: <SiGmail size={20} />,
                link: "mailto:ritur4586@gmail.com",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                className="group p-3 rounded-lg bg-white/5 border border-white/10 hover:border-blue-400/40 transition"
              >
                <span className="text-white/70 group-hover:text-blue-400 transition">
                  {item.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* 🔥 RIGHT (OVAL IMAGE - MATCH AI) */}
        <div className="relative flex items-center justify-center">

          {/* OUTER GLOW */}
          <div className="absolute w-[280px] h-[380px] rounded-[150px] blur-3xl bg-gradient-to-b from-blue-500/40 to-purple-500/40"></div>

          {/* NEON BORDER */}
          <div className="relative w-[260px] h-[360px] rounded-[140px] p-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500">

            {/* INNER */}
            <div className="w-full h-full rounded-[140px] bg-black p-2 backdrop-blur-xl">

              <Image
                src="/profile_image.png"
                alt="Ritu Raj"
                width={300}
                height={400}
                className="w-full h-full object-cover rounded-[120px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}