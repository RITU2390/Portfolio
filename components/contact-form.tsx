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
    const website = String(fd.get("website") || "") // honeypot
    const ts = Number(fd.get("ts") || 0)

    // Client-side validation
    if (!name || !email || !phone || !message) {
      setState({ status: "error", message: "Please fill out all required fields." })
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState({ status: "error", message: "Please enter a valid email address." })
      return
    }
    if (!/^\d{10}$/.test(phone)) {
      setState({ status: "error", message: "Please enter a valid 10-digit phone number." })
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
    setState({ status: "success", message: "Thanks! Your message has been sent." })
    form.reset()
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-white/10">
      <div className="mx-auto flex min-h-[70vh] max-w-5xl items-center justify-center px-4 py-16">
        {/* Contact Form */}
        <form
          onSubmit={onSubmit}
          className="w-full max-w-md rounded-xl border border-white/10 bg-black/30 p-6 shadow-lg backdrop-blur-md"
        >
          <h2 id="contact-title" className="text-2xl font-semibold text-balance text-center">
            <span className="text-red-500">Contact</span> Me
          </h2>
          <p className="mt-1 mb-6 text-center text-sm text-white/70">
            I’ll get back to you as soon as possible.
          </p>

          {/* honeypot + timestamp */}
          <input type="text" name="website" className="hidden" tabIndex={-1} aria-hidden="true" />
          <input type="hidden" name="ts" value={timestamp} />

          {/* Input Fields */}
          <div className="space-y-4">
            <label className="flex flex-col gap-1">
              <span className="text-sm text-white">Name</span>
              <input
                name="name"
                type="text"
                required
                placeholder="Your Name"
                aria-required="true"
                className="rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-sm text-white">Email</span>
              <input
                name="email"
                type="email"
                required
                placeholder="example@gmail.com"
                aria-required="true"
                className="rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-sm text-white">Mobile Number</span>
              <input
                name="phone"
                type="tel"
                required
                placeholder="9876543210"
                pattern="\d{10}"
                aria-required="true"
                className="rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-sm text-white">Message</span>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="How can I help?"
                aria-required="true"
                className="rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </label>
          </div>

          {/* Submit + Status */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={state.status === "loading"}
              className="w-full rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-neutral-950 transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:opacity-70"
            >
              {state.status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {state.status !== "idle" && (
              <p
                className={`mt-3 text-center text-sm ${
                  state.status === "error" ? "text-red-500" : "text-cyan-400"
                }`}
              >
                {state.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
