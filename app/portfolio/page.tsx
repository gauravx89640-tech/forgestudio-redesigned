import type { Metadata } from "next"
import { Navbar } from "@/components/forge/navbar"
import { PortfolioGrid } from "@/components/forge/portfolio-grid"
import { Footer } from "@/components/forge/footer"

export const metadata: Metadata = {
  title: "All Projects | Forge Studio",
  description: "Every website Forge Studio has designed and built for local businesses — cafés, salons, bakeries, gyms, and more.",
}

export default function PortfolioPage() {
  return (
    <main>
      <Navbar />
      <PortfolioGrid />
      <Footer />
    </main>
  )
}
