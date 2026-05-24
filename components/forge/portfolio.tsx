"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const projects = [
  {
    name: "Bloom Bakery",
    category: "Bakery",
    url: "https://bloombakery.forgestudio.one",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Iron & Oak Gym",
    category: "Fitness",
    url: "https://ironoak.forgestudio.one",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mila Café",
    category: "Café",
    url: "https://milacafe.forgestudio.one",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Velvet Nails",
    category: "Salon",
    url: "https://velvetnails.forgestudio.one",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80",
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
        <h2
          id="portfolio-heading"
          className="font-serif text-5xl md:text-7xl font-bold text-forge-purple-strong mb-12 text-balance"
        >
          Our Recent Work
        </h2>

        {/* Editorial grid - tall left + stacked right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tall card - left side, spans full height */}
          <a
            href={projects[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('${projects[0].image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-75" />
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 rounded-full text-xs font-sans font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-md text-[#151515]">
                {projects[0].category}
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-serif text-[#F4EFE7] text-4xl md:text-5xl font-bold leading-tight">
                {projects[0].name}
              </h3>
            </div>
          </a>

          {/* Right column - two stacked cards */}
          <div className="flex flex-col gap-6">
            {projects.slice(1).map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[16/10] rounded-2xl overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-75" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-sans font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-md text-[#151515]">
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
          </div>
        </div>
      </div>
    </section>
  )
}
