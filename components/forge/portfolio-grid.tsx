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
    image: "/images/portfolio/bake-me-happy.png",
  },
  {
    name: "The Pup Culture Barkary",
    category: "Pet Bakery",
    url: "https://pupcbakes.forgestudio.one",
    image: "/images/portfolio/pup-culture-barkary.jpg",
  },
  {
    name: "Timeless Cuts",
    category: "Family Salon",
    url: "https://timelesscuts.forgestudio.one",
    image: "/images/portfolio/timeless-cuts.jpg",
  },
  {
    name: "Bloom Bakery",
    category: "Bakery",
    url: "https://bloombakery.forgestudio.one",
    image: "/images/portfolio/bloom-bakery.jpg",
  },
  {
    name: "Velvet Nails",
    category: "Nail Salon",
    url: "https://velvetnails.forgestudio.one",
    image: "/images/portfolio/velvet-nails.jpg",
  },
  {
    name: "Iron & Oak Gym",
    category: "Fitness",
    url: "https://ironoak.forgestudio.one",
    image: "/images/portfolio/iron-oak.jpg",
  },
  {
    name: "Mila Café",
    category: "Café",
    url: "https://milacafe.forgestudio.one",
    image: "/images/portfolio/mila-cafe.jpg",
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
        <p className="font-sans text-base md:text-lg text-forge-purple-medium max-w-2xl mb-16">
          Every project we've shipped so far — cafés, salons, bakeries, gyms, and more. Each one built and delivered from scratch.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[4/5] rounded-2xl overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full text-xs font-sans font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white">
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
