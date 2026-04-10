"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "whatido", label: "Expertise" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Achievements" },
  { id: "contact", label: "Contact" },
]

export default function StickyNav() {
  const [active, setActive] = useState<string>("home")

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.2, 0.5, 1] },
    )

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })

    return () => obs.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      
      {/* Glow line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-blue-500/40"></div>

      <nav className="mx-auto max-w-6xl px-6 py-4">
        
        {/* 🔥 CENTERED NAV LINKS */}
        <ul className="flex items-center justify-center flex-wrap gap-8">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={cn(
                  "relative text-sm tracking-wide text-white/70 transition hover:text-white",
                  active === s.id && "text-blue-400"
                )}
                aria-current={active === s.id ? "page" : undefined}
              >
                {s.label}

                {/* 🔥 Active underline */}
                <span
                  className={cn(
                    "absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-transform origin-left",
                    active === s.id && "scale-x-100"
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

      </nav>
    </header>
  )
}