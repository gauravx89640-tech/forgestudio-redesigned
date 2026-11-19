import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/header"
import { SiteFooter } from "@/components/site/footer"
import { CaseStudyBody } from "@/components/forge/case-study-suns-nail-studio"

export const metadata: Metadata = {
  title: "Sun's Nail Studio Case Study | Forge Studio — Web Design for Salons",
  description:
    "How a 5-page website brought a Wilmington nail studio more calls and weekend bookings — delivered in 10 days. A Forge Studio case study.",
  alternates: {
    canonical: "/work/suns-nail-studio",
  },
  openGraph: {
    title: "Sun's Nail Studio Case Study | Forge Studio",
    description:
      "How a 5-page website brought a Wilmington nail studio more calls and weekend bookings — delivered in 10 days.",
    url: "/work/suns-nail-studio",
    images: [{ url: "/og/suns-nail-studio.png", width: 1200, height: 630, alt: "Sun's Nail Studio case study. Forge Studio" }],
  },
}

export default function SunsNailStudioCaseStudyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CaseStudyBody />
      </main>
      <SiteFooter />
    </>
  )
}
