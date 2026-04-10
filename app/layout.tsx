
import type React from "react"
import type { Metadata } from "next"
import { Sora, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"
import Cursor from "../components/curser" 

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "RITU RAJ – Portfolio",
  description:
    "Personal portfolio of RITU RAJ – Frontend/Full-Stack Developer. Projects, skills, certificates, and contact.",
  keywords: ["Portfolio", "Developer", "Frontend", "Web", "Projects"],
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "RITU RAJ – Portfolio",
    description:
      "Personal portfolio of RITU RAJ – Frontend/Full-Stack Developer.",
    url: "https://example.com",
    siteName: "RITU RAJ – Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ritu Raj Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RITU RAJ – Portfolio",
    description:
      "Personal portfolio of RITU RAJ – Frontend/Full-Stack Developer.",
    images: ["/og-image.png"],
  },
  icons: { icon: "/favicon.ico" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sora.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="bg-black text-white font-sans antialiased cursor-none">
        
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* 🔥 INSANE CURSOR */}
          <Cursor />

          {/* 🌐 MAIN CONTENT */}
          <main className="relative">
            {children}
          </main>
        </ThemeProvider>

      </body>
    </html>
  )
}