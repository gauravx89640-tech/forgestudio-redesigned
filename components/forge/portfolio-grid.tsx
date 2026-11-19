"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

// Live clients first (Mary, then Sun's), then sample designs.
const projects: {
  name: string
  category: string
  url: string
  image: string
  blurb: string
  live: boolean
}[] = [
  {
    name: "Mary Jesse Skin + Scalp Studio",
    category: "Esthetics",
    url: "https://maryjesseskinandscalp.com",
    image: "/images/portfolio/mary-jesse.jpg",
    blurb: "Boutique esthetics studio in Arvada, CO — facials and Japanese Head Spa, with online booking",
    live: true,
  },
  {
    name: "Sun's Nail Studio",
    category: "Nail Salon",
    url: "/work/suns-nail-studio",
    image: "/images/portfolio/suns-nail-studio.jpg",
    blurb: "Appointment-first design for a solo studio, no front desk needed",
    live: true,
  },
  {
    name: "Lumière Med Spa",
    category: "Med Spa",
    url: "https://lumiere.forgestudio.one",
    image: "/images/portfolio/lumiere.avif",
    blurb: "Consultation booking and treatment menu built to convert first-time visitors",
    live: false,
  },
  {
    name: "Velvet Nails",
    category: "Nail Salon",
    url: "https://velvetnails.forgestudio.one",
    image: "/images/portfolio/velvet-nails.jpg",
    blurb: "Booking-in-minutes design for a private, no-crowd studio",
    live: false,
  },
]

export function PortfolioGrid() {
  const ref = useScrollReveal()

  return (
    <section
      ref={ref}
      className="scroll-reveal w-full bg-forge-lavender pt-36 pb-24 px-6 md:px-12"
      aria-labelledby="all-projects-heading"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-forge-purple-medium mb-3">
          Portfolio
        </p>
        <h1
          id="all-projects-heading"
          className="font-serif text-5xl md:text-7xl font-bold text-forge-purple-strong mb-6 text-balance"
        >
          All Projects
        </h1>
        <p className="font-sans text-base md:text-lg text-forge-purple-medium max-w-2xl mb-12">
          Live client websites and sample designs for beauty pros.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          {projects.map((project, i) => (
            <a
              key={project.name}
              href={project.url}
              data-cursor="view"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group relative block w-full sm:w-[calc(50%-10px)] aspect-[3/2] sm:aspect-[4/5] rounded-2xl overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full text-xs font-sans font-semibold uppercase tracking-wider bg-black/45 backdrop-blur-md text-white">
                  {project.category} · {project.live ? "Live client" : "Sample design"}
                </span>
              </div>
              <div className="absolute top-3 right-3 flex items-center gap-1 text-white font-sans text-xs font-semibold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <span>View Project</span>
                <span aria-hidden="true">→</span>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="font-serif text-[#F4EFE7] text-2xl md:text-3xl font-bold leading-tight">
                  {project.name}
                </h3>
                <p className="font-sans text-xs md:text-sm text-white/80 mt-1.5 max-h-0 opacity-0 group-hover:max-h-16 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                  {project.blurb}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center text-center gap-4">
          <p className="font-serif text-2xl md:text-3xl text-forge-purple-strong text-balance">
            Ready to start your own project?
          </p>
          <a
            href="/#contact"
            className="px-6 py-2.5 rounded-full font-sans font-semibold text-sm bg-forge-purple-strong text-white hover:bg-forge-purple-strong/85 transition-colors duration-200"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  )
}
