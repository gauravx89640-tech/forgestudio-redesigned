import { Navbar } from "@/components/forge/navbar"
import { Hero } from "@/components/forge/hero"
import { LogoStrip } from "@/components/forge/logo-strip"
import { Portfolio } from "@/components/forge/portfolio"
import { Statement } from "@/components/forge/statement"
import { HowItWorks } from "@/components/forge/how-it-works"
import { WhyUs } from "@/components/forge/why-us"
import { Pricing } from "@/components/forge/pricing"
import { Testimonials } from "@/components/forge/testimonials"
import { Faq } from "@/components/forge/faq"
import { Contact } from "@/components/forge/contact"
import { Footer } from "@/components/forge/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoStrip />
      <Portfolio />
      <Statement />
      <WhyUs />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}
