"use client"

import type React from "react"
import { useEffect, useState } from "react"

type State =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; message: string }
  | { status: "error"; message: string }

export default function ContactForm() {
  const [state, setState] = useState<State>({ status: "idle" })
  const [timestamp, setTimestamp] = useState("")

  useEffect(() => {
    setTimestamp(Date.now().toString())
  }, [])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)

    const name = String(fd.get("name") || "").trim()
    const email = String(fd.get("email") || "").trim()
    const phone = String(fd.get("phone") || "").trim()
    const message = String(fd.get("message") || "").trim()
    const website = String(fd.get("website") || "")
    const ts = Number(fd.get("ts") || 0)

    if (!name || !email || !phone || !message) {
      setState({ status: "error", message: "Please fill out all fields." })
      return
    }

    setState({ status: "loading" })

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, message, website, ts }),
    })

    const data = await res.json()

    if (!res.ok) {
      setState({ status: "error", message: data.error || "Something went wrong." })
      return
    }

    setState({ status: "success", message: "Message sent successfully!" })
    form.reset()
  }

  return (
    <section
      id="contact"
      className="relative bg-black border-t border-white/10 py-28 overflow-hidden scroll-mt-24"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute inset-0">
        <img
          src="/bg_about.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">

        {/* Title */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">
            <span className="bg-gradient-to-b from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent font-sora drop-shadow-[0_0_20px_rgba(99,102,241,0.8)]">
              Get In Touch
            </span>
          </h2>

          <p className="mt-3 text-white/60">
            Let’s build something amazing together.
          </p>
        </div>

        {/* Form Card */}
        <div className="mt-12 flex justify-center">
          <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-blue-500/40 to-purple-500/40 w-full max-w-lg">
            
            <form
              onSubmit={onSubmit}
              className="rounded-2xl bg-zinc-900/80 backdrop-blur-xl p-6"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl"></div>

              <div className="relative z-10 space-y-4">

                {/* Hidden */}
                <input type="text" name="website" className="hidden" />
                <input type="hidden" name="ts" value={timestamp} />

                {/* Inputs */}
                {["name", "email", "phone"].map((field) => (
                  <input
                    key={field}
                    name={field}
                    required
                    placeholder={field === "phone" ? "Phone Number" : field.charAt(0).toUpperCase() + field.slice(1)}
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm text-white outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition"
                  />
                ))}

                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Your Message"
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm text-white outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition"
                />

                {/* Button */}
                <button
                  type="submit"
                  disabled={state.status === "loading"}
                  className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-sm font-medium text-white transition hover:scale-[1.02] disabled:opacity-70"
                >
                  {state.status === "loading" ? "Sending..." : "Send Message"}
                </button>

                {/* Status */}
                {state.status !== "idle" && (
                  <p
                    className={`text-center text-sm ${
                      state.status === "error"
                        ? "text-red-400"
                        : "text-blue-400"
                    }`}
                  >
                    {state.message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}