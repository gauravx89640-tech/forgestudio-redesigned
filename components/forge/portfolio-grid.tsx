"use client"

import { useMemo, useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

type Group = "Beauty & Wellness" | "Food" | "Fitness" | "Hospitality"

const FILTERS: ("All" | Group)[] = ["All", "Beauty & Wellness", "Food", "Fitness", "Hospitality"]

const projects: {
  name: string
  category: string
  group: Group
  url: string
  image: string
  blurb: string
  concept?: boolean
  live?: boolean
}[] = [
  {
    name: "Maui Girl Nails",
    category: "Nail Salon",
    group: "Beauty & Wellness",
    url: "https://mauigirlnails.pages.dev",
    image: "/images/portfolio/maui-girl-nails.jpg",
    blurb: "One-artist studio site with Vagaro booking and a tap-a-color gallery of her sets",
    concept: true,
  },
  {
    name: "Victoria's Nail Secrets",
    category: "Nail Artist",
    group: "Beauty & Wellness",
    url: "https://victoriasnailsecrets.pages.dev",
    image: "/images/portfolio/victorias-nail-secrets.jpg",
    blurb: "Dark, editorial site for a custom acrylic artist, built around DM booking",
    concept: true,
  },
  {
    name: "Lumière Med Spa",
    category: "Med Spa",
    group: "Beauty & Wellness",
    url: "https://lumiere.forgestudio.one",
    image: "/images/portfolio/lumiere.avif",
    blurb: "Consultation booking and treatment menu built to convert first-time visitors",
  },
  {
    name: "Sun's Nail Studio",
    category: "Nail Salon",
    group: "Beauty & Wellness",
    url: "/work/suns-nail-studio",
    image: "/images/portfolio/suns-nail-studio.jpg",
    blurb: "Appointment-first design for a solo studio, no front desk needed",
    live: true,
  },
  {
    name: "Mary Jesse Skin + Scalp Studio",
    category: "Esthetics",
    group: "Beauty & Wellness",
    url: "https://maryjesseskinandscalp.com",
    image: "/images/portfolio/mary-jesse.jpg",
    blurb: "Boutique esthetics studio in Arvada, CO — facials and Japanese Head Spa, with online booking",
    live: true,
  },
  {
    name: "Yobejon Beauty",
    category: "Nail Salon",
    group: "Beauty & Wellness",
    url: "https://yobejon.forgestudio.one",
    image: "/images/portfolio/yobejon.jpg",
    blurb: "Personal-studio feel for a by-appointment-only salon",
  },
  {
    name: "Bake Me Happy",
    category: "Bakery",
    group: "Food",
    url: "https://bakemehappy.forgestudio.one",
    image: "/images/portfolio/bake-me-happy.jpg",
    blurb: "Menu-forward site built to drive walk-in and online orders",
  },
  {
    name: "The Pup Culture Barkary",
    category: "Pet Bakery",
    group: "Food",
    url: "https://pupcbakes.forgestudio.one",
    image: "/images/portfolio/pup-culture-barkary.jpg",
    blurb: "Playful ordering experience for a niche celebration-treat business",
  },
  {
    name: "Timeless Cuts",
    category: "Family Salon",
    group: "Beauty & Wellness",
    url: "https://timelesscuts.forgestudio.one",
    image: "/images/portfolio/timeless-cuts.jpg",
    blurb: "Kid-friendly booking experience built around first-haircut nerves",
  },
  {
    name: "Bloom Bakery",
    category: "Bakery",
    group: "Food",
    url: "https://bloombakery.forgestudio.one",
    image: "/images/portfolio/bloom-bakery.jpg",
    blurb: "Daily-menu bakery site with a built-in order request flow",
  },
  {
    name: "Velvet Nails",
    category: "Nail Salon",
    group: "Beauty & Wellness",
    url: "https://velvetnails.forgestudio.one",
    image: "/images/portfolio/velvet-nails.jpg",
    blurb: "Booking-in-minutes design for a private, no-crowd studio",
  },
  {
    name: "Iron & Oak Gym",
    category: "Fitness",
    group: "Fitness",
    url: "https://ironoak.forgestudio.one",
    image: "/images/portfolio/iron-oak.jpg",
    blurb: "Membership-first site built to convert serious lifters",
  },
  {
    name: "Mila Café",
    category: "Café",
    group: "Hospitality",
    url: "https://milacafe.forgestudio.one",
    image: "/images/portfolio/mila-cafe.jpg",
    blurb: "Neighborhood café site anchored around ordering and catering",
  },
]

const industryCount = new Set(projects.map((p) => p.group)).size

export function PortfolioGrid() {
  const ref = useScrollReveal()
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All")

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.group === filter)),
    [filter]
  )

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
        <p className="font-sans text-base md:text-lg text-forge-purple-medium max-w-2xl mb-8">
          A look at what we've built for cafés, salons, bakeries, gyms, and more — each one designed and delivered from scratch.
        </p>

        {/* Stats strip */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-x-10 gap-y-2 border-y border-forge-divider py-4 mb-10 font-sans text-sm text-forge-purple-medium">
          <span>{industryCount} industries</span>
          <span>10+ projects delivered recently</span>
          <span>100% built from scratch</span>
        </div>

        {/* Filter bar */}
        <div
          className="flex flex-wrap gap-2 mb-12"
          role="group"
          aria-label="Filter projects by industry"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`px-4 py-2 rounded-full font-sans text-sm font-semibold transition-colors duration-200 ${
                filter === f
                  ? "bg-forge-purple-strong text-white"
                  : "border border-forge-purple-strong/30 text-forge-purple-strong hover:bg-forge-purple-strong/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {filtered.map((project, i) => (
            <a
              key={project.name}
              href={project.url}
              data-cursor="view"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group relative block w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] aspect-[3/2] sm:aspect-[4/5] rounded-2xl overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full text-xs font-sans font-semibold uppercase tracking-wider bg-black/45 backdrop-blur-md text-white">
                  {project.category}{project.concept && " · Concept"}{project.live && " · Live client"}
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
