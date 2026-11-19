import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/header"
import { SiteFooter } from "@/components/site/footer"
import { Reveals } from "@/components/site/reveal"
import { BrowserFrame, Caption, workLinkProps } from "@/components/site/frames"
import { projects } from "@/lib/work"

const TITLE = "Work · Forge Studio"
const DESCRIPTION = "Live client websites and sample designs for beauty pros."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/portfolio",
    images: [{ url: "/og/portfolio.png", width: 1200, height: 630, alt: "Work. Forge Studio" }],
  },
}

// Live clients first (Mary, then Sun's), then sample designs.
const order = [projects.mary, projects.suns, projects.maui, projects.victoria, projects.alyzel, projects.lumiere, projects.velvet]

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="s-wrap pt-10 md:pt-20 pb-[88px] md:pb-[136px]" aria-labelledby="work-h1">
          <h1 id="work-h1" className="s-display mb-6">Work</h1>
          <p className="s-lede mb-14 md:mb-20">Live client websites and sample designs for beauty pros.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {order.map((p, i) => (
              <a key={p.slug} {...workLinkProps(p)} className={`s-work-card reveal block ${i === 0 ? "md:col-span-2" : ""}`}>
                <span className="s-plate block p-5 md:p-10">
                  <span className={`block ${i === 0 ? "md:w-[78%] md:mx-auto" : ""}`}>
                    <BrowserFrame project={p} sizes={i === 0 ? "(min-width: 768px) 70vw, 92vw" : "(min-width: 768px) 44vw, 92vw"} priority={i === 0} />
                  </span>
                </span>
                <Caption project={p} fig={i + 1} blurb />
              </a>
            ))}
          </div>

          <div className="mt-20 md:mt-28 flex flex-col items-start gap-6">
            <a href="/#contact" className="s-btn s-btn-solid">Get a quote</a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <Reveals />
    </>
  )
}
