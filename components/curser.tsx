"use client"

import { useEffect, useRef, useState } from "react"

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  const [hover, setHover] = useState(false)

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0

    const speed = 0.15 // lag effect

    const move = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      ringX += (mouseX - ringX) * speed
      ringY += (mouseY - ringY) * speed

      if (dotRef.current && ringRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`
        ringRef.current.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`
      }

      requestAnimationFrame(animate)
    }

    animate()
    window.addEventListener("mousemove", move)

    // 🎯 Hover detection
    const hoverElements = document.querySelectorAll(
      "a, button, .group, .interactive"
    )

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => setHover(true))
      el.addEventListener("mouseleave", () => setHover(false))
    })

    return () => {
      window.removeEventListener("mousemove", move)
    }
  }, [])

  return (
    <>
      {/* 🔵 Inner Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 bg-blue-400 rounded-full pointer-events-none z-[9999] transition-transform duration-150 ${
          hover ? "scale-150" : ""
        }`}
      />

      {/* 🟣 Outer Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] transition-all duration-200
        border border-blue-500/60 backdrop-blur-sm
        ${hover ? "scale-150 bg-blue-500/10" : ""}
        `}
      />

      {/* 🌌 Glow Aura */}
      <div
        className={`fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none z-[9997] blur-xl
        transition-all duration-300
        ${hover ? "bg-purple-500/20 scale-150" : "bg-blue-500/10"}
        `}
        style={{
          transform: `translate(${0}px, ${0}px)`,
        }}
      />
    </>
  )
}