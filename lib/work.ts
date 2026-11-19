// The portfolio. Labels must stay honest: "Live client" or "Sample design", always visible.
export type Project = {
  slug: string
  name: string
  category: string
  live: boolean
  url: string
  external: boolean
  domain: string
  image: string
  image900: string
  alt: string
  blurb: string
}

export const projects: Record<"mary" | "suns" | "lumiere" | "velvet", Project> = {
  mary: {
    slug: "mary",
    name: "Mary Jesse Skin + Scalp Studio",
    category: "Esthetics",
    live: true,
    url: "https://maryjesseskinandscalp.com",
    external: true,
    domain: "maryjesseskinandscalp.com",
    image: "/images/work/mary-desktop.webp",
    image900: "/images/work/mary-desktop-900.webp",
    alt: "Homepage of Mary Jesse Skin + Scalp Studio, showing Mary holding a brush and a bowl of green facial mask",
    blurb: "Boutique esthetics studio in Arvada, CO — facials and Japanese Head Spa, with online booking",
  },
  suns: {
    slug: "suns",
    name: "Sun's Nail Studio",
    category: "Nail Salon",
    live: true,
    url: "/work/suns-nail-studio",
    external: false,
    domain: "sunsnailstudio.com",
    image: "/images/work/suns-desktop.webp",
    image900: "/images/work/suns-desktop-900.webp",
    alt: "Homepage of Sun's Nail Studio: \"Where every set shines.\" beside a close-up of a glitter manicure",
    blurb: "Appointment-first design for a solo studio, no front desk needed",
  },
  lumiere: {
    slug: "lumiere",
    name: "Lumière Med Spa",
    category: "Med Spa",
    live: false,
    url: "https://lumiere.forgestudio.one",
    external: true,
    domain: "lumiere.forgestudio.one",
    image: "/images/work/lumiere-desktop.webp",
    image900: "/images/work/lumiere-desktop-900.webp",
    alt: "Homepage of the Lumière Med Spa sample design: a warm treatment room with loungers",
    blurb: "Consultation booking and treatment menu built to convert first-time visitors",
  },
  velvet: {
    slug: "velvet",
    name: "Velvet Nails",
    category: "Nail Salon",
    live: false,
    url: "https://velvetnails.forgestudio.one",
    external: true,
    domain: "velvetnails.forgestudio.one",
    image: "/images/work/velvet-desktop.webp",
    image900: "/images/work/velvet-desktop-900.webp",
    alt: "Homepage of the Velvet Nails sample design: hands with a soft pink manicure on satin",
    blurb: "Booking-in-minutes design for a private, no-crowd studio",
  },
}

export const label = (p: Project) => (p.live ? "Live client" : "Sample design")
