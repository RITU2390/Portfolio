"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Download, ExternalLink } from "lucide-react"

type Cert = {
  title: string
  issuer: string
  file: string
  verify?: string
  category: string
}

const certs: Cert[] = [
  {
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM / Coursera",
    file: "/Coursera 9ZJM4F5MJSXH.pdf",
    verify: "https://coursera.org/verify/9ZJM4F5MJSXH",
    category: "Coursera",
  },
  {
    title: "Google AI Essentials",
    issuer: "Google / Coursera",
    file: "/Coursera H0A00MVEVAOQ.pdf",
    verify: "https://coursera.org/verify/H0A00MVEVAOQ",
    category: "Coursera",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google / Coursera",
    file: "/Coursera NFBMEX9LPD9K.pdf",
    verify: "https://coursera.org/verify/NFBMEX9LPD9K",
    category: "Coursera",
  },
  {
    title: "Tools of the Trade: Linux and SQL",
    issuer: "Google / Coursera",
    file: "/Coursera TFKJOJQYQ3KJ.pdf",
    verify: "https://coursera.org/verify/TFKJOJQYQ3KJ",
    category: "Coursera",
  },
  {
    title: "Play It Safe: Manage Security Risks",
    issuer: "Google / Coursera",
    file: "/Coursera UWJ8CGQCZ95V.pdf",
    verify: "https://coursera.org/verify/UWJ8CGQCZ95V",
    category: "Coursera",
  },
  {
    title: "Connect and Protect: Networks and Network Security",
    issuer: "Google / Coursera",
    file: "/Coursera X5V8OUIWYTNG.pdf",
    verify: "https://coursera.org/verify/X5V8OUIWYTNG",
    category: "Coursera",
  },
  {
    title: "Full Stack Web Development 2.0",
    issuer: "PW Skills",
    file: "/fullstackcertificate.pdf",
    verify: "https://pwskills.com/learn/certificate/8ad438bf-39fb-4d22-86c7-5024fae8bafa",
    category: "PW Skills",
  },
  {
    title: "AICTE Internship: AI Transformative Learning with TechSaksham",
    issuer: "Microsoft & SAP / AICTE",
    file: "/Ritu Raj_certificate_AICTEINTERSHIP.pdf",
    category: "Internship",
  },
  {
    title: "Internship Certificate",
    issuer: "Prof. Ram Meghe College of Engineering & Management",
    file: "/RITU   RAJ 28173.pdf",
    category: "Internship",
  },
]

const categories = ["All", "Coursera", "PW Skills", "Internship"]

export default function CertificatesGallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selected, setSelected] = useState<Cert | null>(null)

  const filtered =
    activeCategory === "All"
      ? certs
      : certs.filter((c) => c.category === activeCategory)

  return (
    <section
      id="certificates"
      className="relative bg-black border-t border-white/10 py-28 overflow-hidden scroll-mt-24"
    >
      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.12),transparent_40%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">
            <span className="bg-gradient-to-b from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent font-sora drop-shadow-[0_0_20px_rgba(99,102,241,0.8)]">
              Certifications & Achievements
            </span>
          </h2>

          <p className="mt-3 text-white/60">
            Verified credentials showcasing my continuous learning.
          </p>
        </div>

        {/* 🔥 FILTER TABS */}
        <div className="flex justify-center flex-wrap gap-3 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-sm rounded-full border transition ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-none"
                  : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🔥 GRID */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3 }}
              onClick={() => setSelected(cert)}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-blue-500/40 to-purple-500/40 cursor-pointer"
            >
              <div className="rounded-2xl bg-zinc-900/80 backdrop-blur-xl p-5 h-full">

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl"></div>

                <div className="relative z-10">
                  <h3 className="text-sm font-medium text-white">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-white/60 mt-1">
                    {cert.issuer}
                  </p>

                  <span className="inline-block mt-3 text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                    {cert.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-zinc-900 rounded-2xl p-6 max-w-3xl w-full border border-white/10"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold text-white">
                {selected.title}
              </h3>
              <p className="text-sm text-white/60 mt-1">
                {selected.issuer}
              </p>

              <div className="mt-4">
                {selected.file.endsWith(".pdf") ? (
                  <iframe
                    src={selected.file}
                    className="w-full h-[400px] rounded-lg"
                  />
                ) : (
                  <img
                    src={selected.file}
                    className="w-full rounded-lg"
                  />
                )}
              </div>

              <div className="mt-4 flex justify-between text-sm">
                {selected.verify && (
                  <a
                    href={selected.verify}
                    target="_blank"
                    className="flex items-center gap-2 text-blue-400 hover:underline"
                  >
                    <ExternalLink size={16} />
                    Verify
                  </a>
                )}

                <a
                  href={selected.file}
                  download
                  className="flex items-center gap-2 text-white hover:text-blue-400"
                >
                  <Download size={16} />
                  Download
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}