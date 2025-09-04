import dynamic from "next/dynamic"
import StickyNav from "@/components/sticky-nav"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Experience from "@/components/experience"
const Certificates3D = dynamic(() => import("@/components/certificates-3d"), { ssr: false })
import ContactForm from "@/components/contact-form"

function JsonLd({ data }: { data: Record<string, any> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export default function Page() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ritu Raj",
    jobTitle: "Information Technology Student",
    sameAs: ["https://www.linkedin.com/in/ritu-raj-58395b190"],
  }

  const projectsLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        name: "QR-Based E-Gate Pass Management System",
        description:
          "SPA with React.js and Firebase Authentication for secure visitor registration, scheduling, QR generation, and FCM notifications.",
        url: "#",
      },
      {
        "@type": "CreativeWork",
        name: "Vehicle Services Management System",
        description:
          "Web app with HTML, CSS, JavaScript, and MySQL for scheduling, tracking, and customer record maintenance.",
        url: "#",
      },
    ],
  }

  const certsLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Google Cybersecurity Professional Certificate",
        recognizedBy: { "@type": "Organization", name: "Google" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Google AI Essentials",
        recognizedBy: { "@type": "Organization", name: "Google" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Databases and SQL for Data Science with Python",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Android Developer Virtual Internship",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Google AI-ML Virtual Internship",
        recognizedBy: { "@type": "Organization", name: "Google" },
      },
    ],
  }

  return (
    <main>
      <StickyNav />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Certificates3D />
      <ContactForm />
      <JsonLd data={personLd} />
      <JsonLd data={projectsLd} />
      <JsonLd data={certsLd} />
    </main>
  )
}
