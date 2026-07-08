"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const projects = [
  {
    name: "Lumière Med Spa",
    category: "Med Spa",
    url: "https://lumiere.forgestudio.one",
    image: "/images/portfolio/lumiere.avif",
  },
  {
    name: "Sun's Nail Studio",
    category: "Nail Salon",
    url: "/work/suns-nail-studio",
    image: "/images/portfolio/suns-nail-studio.jpg",
  },
  {
    name: "Sweet Arleen's",
    category: "Bakery",
    url: "https://sweetarleens.forgestudio.one",
    image: "/images/portfolio/sweet-arleens.jpg",
  },
  {
    name: "Yobejon Beauty",
    category: "Nail Salon",
    url: "https://yobejon.forgestudio.one",
    image: "/images/portfolio/yobejon.jpg",
  },
  {
    name: "Bake Me Happy",
    category: "Bakery",
    url: "https://bakemehappy.forgestudio.one",
    image: "/images/portfolio/bake-me-happy.jpg",
  },
]

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
            className="group relative block aspect-[3/4] md:aspect-[3.96/6] rounded-2xl overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('${projects[0].image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-75" />
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 rounded-full text-xs font-sans font-semibold uppercase tracking-wider bg-black/45 backdrop-blur-md text-white">
                {projects[0].category}
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
      className="group relative block aspect-[5.8/2.5] rounded-2xl overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url('${project.image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/35 saturate-75 brightness-90 to-transparent transition-opacity duration-300 group-hover:opacity-75" />
      <div className="absolute top-3 left-3">
        <span className="px-3 py-1 rounded-full text-xs font-sans font-semibold uppercase tracking-wider bg-black/45 backdrop-blur-md text-white">
          {project.category}
        </span>
      </div>
      <div className="absolute bottom-5 left-6 right-6">
        <h3 className="font-serif text-[#F4EFE7] text-3xl md:text-4xl font-bold leading-tight">
          {project.name}
        </h3>
      </div>
    </a>
  ))}

  {/* Bottom row: Sun Snail + Velvet Nails */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
    {projects.slice(3, 5).map((project) => (
      <a
        key={project.name}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block aspect-[3/3.7] rounded-2xl overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${project.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-75" />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-sans font-semibold uppercase tracking-wider bg-black/45 backdrop-blur-md text-white">
            {project.category}
          </span>
        </div>
        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="font-serif text-[#F4EFE7] text-2xl md:text-3xl font-bold leading-tight">
            {project.name}
          </h3>
        </div>
      </a>
    ))}
  </div>
</div>
        </div>
      </div>
    </section>
  )
}
