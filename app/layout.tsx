import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css" // Import globals.css file
import { ThemeProvider } from "../components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Your Name – Portfolio",
  description:
    "Personal portfolio of Your Name – Frontend/Full‑Stack Developer. Projects, skills, certificates, and contact.",
  keywords: ["Portfolio", "Developer", "Frontend", "Web", "Projects"],
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Your Name – Portfolio",
    description:
      "Personal portfolio of Your Name – Frontend/Full‑Stack Developer. Projects, skills, certificates, and contact.",
    url: "https://example.com",
    siteName: "Your Name – Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Your Name – Portfolio" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RITU RAJ – Portfolio",
    description:
      "Personal portfolio of Your Name – Frontend/Full‑Stack Developer. Projects, skills, certificates, and contact.",
    images: ["/og-image.png"],
  },
  icons: { icon: "/favicon.ico" },
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="font-sans bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
