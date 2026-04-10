"use client"

import { motion } from "framer-motion"

export default function Education() {
  const schools = [
    {
      school: "Sant Gadge Baba Amravati University",
      years: "2021 – 2025",
      credential: "BE, Information Technology — CGPA: 8.28",
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
      className="relative py-24 px-4 text-white overflow-hidden"
    >
      {/* 🔥 Background */}
      <div className="absolute inset-0">
        <img
          src="/bg_education.jpg"
          alt="Education Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* 🔹 TITLE */}
        <h2 className="text-3xl md:text-6xl font-bold text-center">
          <span className="bg-gradient-to-b from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent font-sora drop-shadow-[0_0_20px_rgba(99,102,241,0.8)]">
            Education
          </span>
        </h2>

        {/* 🔥 MAIN GRID */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">

          {/* 🔹 LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/EDUCATION.png" // 🔁 change to your image
              alt="Education"
              className="rounded-2xl shadow-2xl border border-white/20"
            />

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-2xl -z-10" />
          </motion.div>

          {/* 🔹 RIGHT CONTENT */}
          <div className="space-y-6">
            {schools.map((s, idx) => (
              <motion.div
                key={s.school}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="
                  group rounded-2xl p-6
                  bg-white/10 backdrop-blur-md
                  border border-white/20
                  transition-all duration-500
                  hover:-translate-y-2 hover:scale-[1.03]
                  hover:border-blue-400/50
                  hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
                "
              >
                <h3 className="text-lg md:text-xl font-semibold">
                  {s.school}
                </h3>

                <p className="mt-1 text-sm text-blue-300 font-medium">
                  {s.years}
                </p>

                <p className="mt-3 text-sm text-white/80 leading-relaxed">
                  {s.credential}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}