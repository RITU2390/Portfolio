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

export default function CertificatesGallery() {
  const [expanded, setExpanded] = useState<string | null>(null)

  const toggleCard = (title: string) => {
    setExpanded(expanded === title ? null : title)
  }

  return (
    <section id="certificates" className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-3xl font-bold text-white">
          🎓 My <span className="text-cyan-400">Certificates</span>
        </h2>
        <p className="mt-2 text-sm text-white/70">
          Hover to see colorful effects, click to expand for details and preview.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((cert) => (
            <motion.div
              key={cert.title}
              layout
              onClick={() => toggleCard(cert.title)}
              whileHover={{
                scale: 1.05,
                rotateX: 3,
                rotateY: -3,
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 220, damping: 15 }}
              className={`relative rounded-xl border border-white/10 bg-neutral-900 p-4 cursor-pointer transition overflow-hidden ${
                expanded === cert.title ? "ring-2 ring-cyan-400" : ""
              }`}
            >
              {/* Animated gradient hover background */}
              <motion.div
                className="absolute inset-0 opacity-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
                whileHover={{ opacity: 0.15 }}
                transition={{ duration: 0.4 }}
              />

              {/* Card Content */}
              <div className="relative flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-white">{cert.title}</h3>
                  <p className="text-xs text-white/70">{cert.issuer}</p>
                </div>
                <motion.div
                  animate={{ rotate: expanded === cert.title ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-4 w-4 text-white/70" />
                </motion.div>
              </div>

              <AnimatePresence>
                {expanded === cert.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-3 space-y-3 relative z-10"
                  >
                    {/* Preview */}
                    {cert.file.endsWith(".pdf") ? (
                      <iframe
                        src={cert.file}
                        className="w-full h-64 rounded-md border border-white/10"
                        title={cert.title}
                      ></iframe>
                    ) : (
                      <img
                        src={cert.file}
                        alt={`${cert.title} preview`}
                        className="w-full rounded-md"
                      />
                    )}

                    {/* Details */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/50">{cert.category}</span>
                      <div className="flex gap-2">
                        {cert.verify && (
                          <a
                            href={cert.verify}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs text-cyan-400 hover:underline"
                          >
                            <ExternalLink className="h-3 w-3" /> Verify
                          </a>
                        )}
                        <a
                          href={cert.file}
                          download
                          className="flex items-center gap-1 text-xs text-white hover:text-cyan-400"
                        >
                          <Download className="h-3 w-3" /> Download
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
