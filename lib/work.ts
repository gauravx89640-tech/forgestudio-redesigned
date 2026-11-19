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

export const projects: Record<"mary" | "suns" | "maui" | "victoria" | "alyzel" | "lumiere" | "velvet", Project> = {
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
  // Maui Girl Nails, Victoria's Nail Secrets and AlyZel: designs for real businesses that
  // didn't go ahead. Shown with the owners' permission (Gaurav, 2026-11-19).
  maui: {
    slug: "maui",
    name: "Maui Girl Nails",
    category: "Nail Artist",
    live: false,
    url: "https://mauigirlnails.pages.dev",
    external: true,
    domain: "mauigirlnails.pages.dev",
    image: "/images/work/maui-desktop.webp",
    image900: "/images/work/maui-desktop-900.webp",
    alt: "Homepage of the Maui Girl Nails design: \"Your little piece of Maui, right here in Sparks\" beside a photo of a nude and rose-gold manicure",
    blurb: "One-artist studio site with Vagaro booking and a tap-a-color gallery of her sets",
  },
  victoria: {
    slug: "victoria",
    name: "Victoria's Nail Secrets",
    category: "Nail Artist",
    live: false,
    url: "https://victoriasnailsecrets.pages.dev",
    external: true,
    domain: "victoriasnailsecrets.pages.dev",
    image: "/images/work/victoria-desktop.webp",
    image900: "/images/work/victoria-desktop-900.webp",
    alt: "Homepage of the Victoria's Nail Secrets design: a dark, moody portrait under a gothic wordmark",
    blurb: "Dark, editorial site for a custom acrylic artist, built around DM booking",
  },
  alyzel: {
    slug: "alyzel",
    name: "AlyZel Aesthetics & Wellness",
    category: "Med Spa",
    live: false,
    url: "https://alyzel.pages.dev",
    external: true,
    domain: "alyzel.pages.dev",
    image: "/images/work/alyzel-desktop.webp",
    image900: "/images/work/alyzel-desktop-900.webp",
    alt: "Homepage of the AlyZel Aesthetics & Wellness design: a bold pink page with the headline \"Making people happier, one injection at a time\"",
    blurb: "Bold, pink med spa site for a nurse injector in Lubbock, TX, with booking and a direct line up front",
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
