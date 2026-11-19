"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

// Homepage shows three items. Sun's Nail Studio stays on /portfolio only (no image of it on the homepage).
const projects: { name: string; category: string; url: string; image: string; live: boolean }[] = [
  {
    name: "Mary Jesse Skin + Scalp Studio",
    category: "Esthetics",
    url: "https://maryjesseskinandscalp.com",
    image: "/images/portfolio/mary-jesse.jpg",
    live: true,
  },
  {
    name: "Lumière Med Spa",
    category: "Med Spa",
    url: "https://lumiere.forgestudio.one",
    image: "/images/portfolio/lumiere.avif",
    live: false,
  },
  {
    name: "Velvet Nails",
    category: "Nail Salon",
    url: "https://velvetnails.forgestudio.one",
    image: "/images/portfolio/velvet-nails.jpg",
    live: false,
  },
]

const label = (p: { category: string; live: boolean }) =>
  `${p.category} · ${p.live ? "Live client" : "Sample design"}`

export function Portfolio() {
  const ref = useScrollReveal()

  return (
    <section
      ref={ref}
      className="scroll-reveal w-full bg-forge-lavender py-20 px-6 md:px-12"
      id="portfolio"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section tag */}
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-forge-purple-medium mb-3">
          Portfolio
        </p>

        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <h2
            id="portfolio-heading"
            className="font-serif text-5xl md:text-7xl font-bold text-forge-purple-strong text-balance"
          >
            Our Recent Work
          </h2>
          <a
            href="/portfolio"
            className="shrink-0 px-6 py-2.5 rounded-full font-sans font-semibold text-sm border border-forge-purple-strong text-forge-purple-strong hover:bg-forge-purple-strong hover:text-white transition-colors duration-200"
          >
            View All Projects
          </a>
        </div>

        {/* Editorial grid - tall left + stacked right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Tall card - left side, spans full height */}
          <a
            href={projects[0].url}
            target="_blank"
            rel="noopener noreferrer"
      data-cursor="view"
            className="group relative block aspect-[3/4] md:aspect-[4/4.6] rounded-2xl overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('${projects[0].image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-75" />
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 rounded-full text-xs font-sans font-semibold uppercase tracking-wider bg-black/45 backdrop-blur-md text-white">
                {label(projects[0])}
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-serif text-[#F4EFE7] text-4xl md:text-5xl font-bold leading-tight">
                {projects[0].name}
              </h3>
            </div>
          </a>

         {/* Right column - stacked top cards + two-card bottom row */}
<div className="flex flex-col gap-5">
  {projects.slice(1, 3).map((project) => (
    <a
      key={project.name}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="view"
      className="group relative block aspect-[4/3] md:aspect-auto md:flex-1 rounded-2xl overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url('${project.image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/35 saturate-75 brightness-90 to-transparent transition-opacity duration-300 group-hover:opacity-75" />
      <div className="absolute top-3 left-3">
        <span className="px-3 py-1 rounded-full text-xs font-sans font-semibold uppercase tracking-wider bg-black/45 backdrop-blur-md text-white">
          {label(project)}
        </span>
      </div>
      <div className="absolute bottom-5 left-6 right-6">
        <h3 className="font-serif text-[#F4EFE7] text-3xl md:text-4xl font-bold leading-tight">
          {project.name}
        </h3>
      </div>
    </a>
  ))}
          </div>
        </div>
      </div>
    </section>
  )
}
