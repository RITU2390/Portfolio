"use client"

import { motion } from "framer-motion"

export default function Education() {
  const schools = [
    {
      school: "Sant Gadge Baba Amravati University",
      years: "2021 – 2025",
      credential: "BE, Information Technology — CGPA: 8.26",
    },
    {
      school: "Hope Hall Foundation School (CBSE)",
      years: "2018 – 2020",
      credential: "Higher Secondary Certificate — 70.40%",
    },
    {
      school: "Vidya Vihar Residential School (CBSE)",
      years: "2018",
      credential: "Secondary School Certificate — 82.20%",
    },
  ]

  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="border-t border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black"
    >
      <div className="mx-auto max-w-5xl px-4 py-20">
        <h2
          id="education-title"
          className="text-3xl font-bold text-center tracking-tight"
        >
          <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        <div className="mt-12 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/60 via-white/20 to-transparent md:left-1/2" />

          <div className="space-y-12 md:space-y-16">
            {schools.map((s, idx) => (
              <motion.article
                key={s.school}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row md:items-center"
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/40" />

                {/* Card */}
                <div
                  className={`ml-10 md:ml-0 md:w-1/2 ${
                    idx % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"
                  }`}
                >
                  <div
                    tabIndex={0}
                    className="relative rounded-2xl border border-white/10 
                               bg-zinc-900/40 backdrop-blur-sm p-6 shadow-lg
                               transform-gpu will-change-transform origin-center
                               transition-all duration-300 ease-out
                               hover:scale-[1.06] md:hover:scale-[1.08] hover:-translate-y-1
                               focus-visible:scale-[1.06] focus-visible:-translate-y-1
                               hover:shadow-red-500/30 focus-visible:shadow-red-500/30
                               hover:bg-gradient-to-br hover:from-red-500/20 hover:to-pink-500/20
                               outline-none z-0 hover:z-10 focus-visible:z-10"
                  >
                    <h3 className="text-lg font-semibold text-white">{s.school}</h3>
                    <p className="mt-1 text-sm text-red-400 font-medium">{s.years}</p>
                    <p className="mt-3 text-sm text-white/70">{s.credential}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
