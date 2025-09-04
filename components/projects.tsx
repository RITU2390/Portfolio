type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  links: { label: "Live" | "Code"; href: string }[]
}

const projects: Project[] = [
  {
    title: "QR-Based E-Gate Pass Management System",
    description:
      "Developed a responsive single-page application (SPA) using React.js and Firebase Authentication for secure visitor registration and appointment scheduling. Implemented dynamic QR code generation for gate access upon approval and integrated Firebase Cloud Messaging (FCM) to deliver real-time notifications for appointment status updates.",
    image: "/qrgate.png",
    tech: ["React.js", "Firebase Auth", "QR Code", "FCM"],
    links: [
      // { label: "Live", href: "#" },
      { label: "Code", href: "https://github.com/RITU2390/projectfinal02" },
    ],
  },
  {
    title: "Vehicle Services Management System",
    description:
      "Built a full-stack web application using HTML, CSS, JavaScript, and MySQL to manage vehicle service scheduling, real-time tracking, and customer record maintenance. Designed a user-friendly interface and automated service scheduling to enhance operational efficiency.",
    image: "/VMS.png",
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    links: [
      // { label: "Live", href: "#" },
      { label: "Code", href: "https://github.com/RITU2390/vmsproject" },    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 id="projects-title" className="text-2xl font-semibold text-balance">
          <span className="text-red-500">Projects</span>
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-4 transition-transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-lg border border-white/10">
                <img
                  src={p.image || "/placeholder.svg"}
                  alt={`${p.title} screenshot`}
                  width={1280}
                  height={720}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 mt-4">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/80 leading-relaxed flex-1">{p.description}</p>

                {/* Tech stack */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-cyan-400/30 px-3 py-1 text-xs text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-4 flex flex-wrap gap-3">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      className="rounded-lg bg-gradient-to-r from-pink-500 to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:shadow-cyan-400/40 hover:scale-105"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

