import type { Metadata } from "next"
import { Navbar } from "@/components/forge/navbar"
import { Footer } from "@/components/forge/footer"
import { CaseStudyBody } from "@/components/forge/case-study-suns-nail-studio"

export const metadata: Metadata = {
  title: "Sun's Nail Studio Case Study | Forge Studio — Web Design for Salons",
  description:
    "How a 5-page website brought a Wilmington nail studio more calls and weekend bookings — delivered in 10 days. A Forge Studio case study.",
  alternates: {
    canonical: "https://forgestudio.one/work/suns-nail-studio",
  },
  openGraph: {
    title: "Sun's Nail Studio Case Study | Forge Studio",
    description:
      "How a 5-page website brought a Wilmington nail studio more calls and weekend bookings — delivered in 10 days.",
    url: "https://forgestudio.one/work/suns-nail-studio",
    images: ["/images/case-studies/suns-after.jpg"],
  },
}

export default function SunsNailStudioCaseStudyPage() {
  return (
    <main>
      <Navbar />
      <CaseStudyBody />
      <Footer />
    </main>
  )
}
