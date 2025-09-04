import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, message, website, ts } = await req.json()

    // Honeypot
    if (typeof website === "string" && website.trim().length > 0) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 })
    }

    // Time threshold (3s)
    const then = Number(ts || 0)
    const now = Date.now()
    if (!Number.isFinite(then) || now - then < 3000) {
      return NextResponse.json({ error: "Too fast, suspected bot" }, { status: 400 })
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))
    if (!emailOk) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }

    // Success
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
