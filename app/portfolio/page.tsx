import dynamic from "next/dynamic"
import StickyNav from "@/components/sticky-nav"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
const Certificates3D = dynamic(() => import("@/components/certificates-3d"), { ssr: false })
import ContactForm from "@/components/contact-form"

function JsonLd({ data }: { data: Record<string, any> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export default function Page() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Your Name",
    jobTitle: "Frontend Developer",
    url: "https://example.com",
    sameAs: [
      "https://github.com/yourhandle",
      "https://www.linkedin.com/in/yourhandle/",
      "https://twitter.com/yourhandle",
    ],
    address: { "@type": "PostalAddress", addressLocality: "City", addressCountry: "Country" },
  }

  const projectsLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CreativeWork", name: "Project One", description: "Description for Project One.", url: "#" },
      { "@type": "CreativeWork", name: "Project Two", description: "Description for Project Two.", url: "#" },
    ],
  }

  const certsLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Certificate A",
        recognizedBy: { "@type": "Organization", name: "Issuer A" },
        url: "#",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Certificate B",
        recognizedBy: { "@type": "Organization", name: "Issuer B" },
        url: "#",
      },
    ],
  }

  return (
    <main id="home">
      <StickyNav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates3D />
      <ContactForm />

      {/* JSON-LD */}
      <JsonLd data={personLd} />
      <JsonLd data={projectsLd} />
      <JsonLd data={certsLd} />
    </main>
  )
}
