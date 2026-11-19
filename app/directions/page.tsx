import type { Metadata } from "next"
import { Bodoni_Moda, Libre_Caslon_Display, Libre_Caslon_Text, Hanken_Grotesk } from "next/font/google"
import { DirectionSwitcher } from "./switcher"
import "./directions.css"

// Review page for the Pass 2 bake-off. Not linked from the site and not indexed.
export const metadata: Metadata = {
  title: "First-screen directions · Forge Studio",
  robots: { index: false, follow: false },
}

const bodoni = Bodoni_Moda({ subsets: ["latin"], style: ["normal", "italic"], axes: ["opsz"], variable: "--font-bodoni", display: "swap" })
const caslon = Libre_Caslon_Display({ subsets: ["latin"], weight: "400", variable: "--font-caslon", display: "swap" })
// Libre Caslon Display has no italic, so the italic comes from its companion text cut.
const caslonText = Libre_Caslon_Text({ subsets: ["latin"], weight: "400", style: ["italic"], variable: "--font-caslon-text", display: "swap" })
// Fontshare candidates, loaded from Fontshare's stylesheet service for this review page only.
// Fontshare's stylesheet service returns only the first family per request, so one link each.
const FONTSHARE = ["zodiak", "boska", "gambetta", "bespoke-serif", "erode", "sentient"].map(
  (f) => `https://api.fontshare.com/v2/css?f[]=${f}@300,400,300i,400i&display=swap`
)
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" })

const nav = [
  { label: "Work", href: "/portfolio" },
  { label: "Local Presence", href: "/local-presence" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/#about" },
]

export default function Directions() {
  return (
    <div className={`dir-a ${bodoni.variable} ${caslon.variable} ${caslonText.variable} ${hanken.variable}`} data-type="caslon">
      {FONTSHARE.map((href) => <link key={href} rel="stylesheet" href={href} precedence="default" />)}
      <header className="dir-wrap flex items-center justify-between h-16 md:h-20">
        <a href="/" className="dir-wordmark" aria-label="Forge Studio, home">
          F<i>O</i>RGE <span className="dir-wordmark-studio">Studio</span>
        </a>
        <nav aria-label="Main" className="hidden md:flex items-center gap-8">
          {nav.map((l) => (
            <a key={l.label} href={l.href} className="dir-navlink">{l.label}</a>
          ))}
          <a href="/#contact" className="dir-btn dir-btn-outline dir-btn-sm">Get a Quote</a>
        </nav>
        <a href="/#contact" className="md:hidden dir-btn dir-btn-outline dir-btn-sm">Get a Quote</a>
      </header>

      <main>
        <section className="dir-wrap pt-6 md:pt-14" aria-labelledby="dir-h1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6 items-end">
            <div className="md:col-span-8">
              <p className="dir-eyebrow mb-5 md:mb-7">Web design for beauty pros</p>
              <h1 id="dir-h1" className="dir-display">
                A website as good as <em>your work.</em>
              </h1>
            </div>
            <div className="md:col-span-4 md:pb-3">
              <p className="dir-sub">
                I design websites for hair stylists, nail artists, lash and brow artists, estheticians and barbers in suites and studios. Sites start at $549.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <a href="/portfolio" className="dir-btn dir-btn-solid">See my work</a>
                <a href="/#contact" className="dir-btn dir-btn-outline">Get a quote</a>
              </div>
            </div>
          </div>

          {/* The work, shown large: Mary's live site on a quiet plate, phone view layered over the corner */}
          <figure className="dir-figure mt-12 md:mt-16">
            <div className="dir-plate">
              <a href="https://maryjesseskinandscalp.com" target="_blank" rel="noopener noreferrer" className="dir-frame dir-frame-desktop" aria-label="Visit Mary Jesse Skin + Scalp Studio (opens in a new tab)">
                <span className="dir-frame-bar" aria-hidden="true"><i /><i /><i /><b>maryjesseskinandscalp.com</b></span>
                <img
                  src="/images/work/mary-desktop.webp"
                  srcSet="/images/work/mary-desktop-900.webp 900w, /images/work/mary-desktop.webp 1600w"
                  sizes="(min-width: 768px) 70vw, 92vw"
                  width={1600}
                  height={1000}
                  alt="Homepage of Mary Jesse Skin + Scalp Studio, showing Mary holding a brush and a bowl of green facial mask"
                  fetchPriority="high"
                />
              </a>
              <div className="dir-frame dir-frame-phone" aria-hidden="true">
                <img src="/images/work/mary-phone.webp" width={520} height={1040} alt="" loading="lazy" />
              </div>
            </div>
            <figcaption className="dir-caption">
              <span>Fig. 1</span>
              <span>Mary Jesse Skin + Scalp Studio</span>
              <span className="dir-caption-muted">Esthetics · Arvada, CO</span>
              <span className="dir-tag">Live client</span>
            </figcaption>
          </figure>
        </section>
      </main>

      <DirectionSwitcher />
    </div>
  )
}
