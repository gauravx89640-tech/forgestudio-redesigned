"use client"

import { Check } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { AnimatedBg } from "./animated-bg"

const whatWeBuilt = [
  "A five-page website — Home, Services, Gallery, About, Contact — built mobile-first",
  "Her full service menu and real photos of her work, framed for a private-studio feel",
  "Her existing Square booking link kept exactly as-is, so clients can book online any time of day",
  "Local SEO and a mobile-forward build, so she shows up — and looks great — when new clients search for a nail studio in Wilmington from their phone",
  "Live in 10 days from deposit",
]

function CtaBlock({ heading }: { heading: string }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="font-serif text-3xl md:text-5xl font-bold text-forge-purple-strong mb-8 text-balance">
        {heading}
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="https://sunsnailstudio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 rounded-full font-sans font-semibold text-sm border border-forge-purple-strong text-forge-purple-strong hover:bg-forge-purple-strong hover:text-white transition-colors duration-200"
        >
          See the live site →
        </a>
        <a
          href="/#contact"
          className="px-7 py-3 rounded-full font-sans font-semibold text-sm bg-forge-purple-strong text-white hover:bg-forge-purple-strong/85 transition-colors duration-200"
        >
          Let&apos;s build yours →
        </a>
      </div>
    </div>
  )
}

export function CaseStudyBody() {
  const heroRef = useScrollReveal()
  const compareRef = useScrollReveal()
  const contextRef = useScrollReveal()
  const builtRef = useScrollReveal()
  const resultRef = useScrollReveal()
  const ctaMidRef = useScrollReveal()
  const ctaEndRef = useScrollReveal()

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="scroll-reveal w-full bg-forge-lavender pt-36 pb-16 px-6 md:px-12"
      >
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-forge-purple-medium mb-3">
            Case Study
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-forge-purple-strong mb-6 text-balance">
            More weekend bookings — and a studio clients can finally find
            online
          </h1>
          <p className="font-sans text-sm md:text-base text-forge-purple-medium">
            Sun&apos;s Nail Studio &middot; Wilmington, NC &middot; 5-page site
            &middot; Delivered in 10 days
          </p>
        </div>
      </section>

      {/* Before / After */}
      <section
        ref={compareRef}
        className="scroll-reveal w-full bg-forge-lavender pb-24 px-6 md:px-12"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <figure>
            <div className="rounded-2xl overflow-hidden border border-forge-divider">
              <img
                src="/images/case-studies/suns-before.jpg"
                alt="Sun's Nail Studio's old Square template homepage"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-3 text-center font-sans text-xs tracking-[0.1em] uppercase text-forge-purple-medium">
              Before — Square template
            </figcaption>
          </figure>
          <figure>
            <div className="rounded-2xl overflow-hidden border border-forge-divider">
              <img
                src="/images/case-studies/suns-after.jpg"
                alt="Sun's Nail Studio's new Forge Studio homepage"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-3 text-center font-sans text-xs tracking-[0.1em] uppercase text-forge-purple-medium">
              After — sunsnailstudio.com
            </figcaption>
          </figure>
        </div>

        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
          <figure>
            <div className="rounded-2xl overflow-hidden border border-forge-divider">
              <img
                src="/images/case-studies/suns-after-services.jpg"
                alt="Sun's Nail Studio's new services and pricing menu page"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-3 text-center font-sans text-xs tracking-[0.1em] uppercase text-forge-purple-medium">
              After — Services Menu
            </figcaption>
          </figure>
          <figure>
            <div className="rounded-2xl overflow-hidden border border-forge-divider">
              <img
                src="/images/case-studies/suns-after-contact.jpg"
                alt="Sun's Nail Studio's new contact page with booking form and Google Maps location"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-3 text-center font-sans text-xs tracking-[0.1em] uppercase text-forge-purple-medium">
              After — Contact &amp; Location
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Context + Problem */}
      <section
        ref={contextRef}
        className="scroll-reveal w-full py-20 px-6 md:px-12 border-b border-[#D8CBB8]/80 bg-[#EEE6DA]"
      >
        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-14">
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-forge-purple-medium mb-3">
              The Context
            </p>
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-forge-purple-strong text-pretty">
              Sun runs a private, one-on-one nail studio inside Phenix Salon
              Suites in Wilmington, NC. Her sets last for weeks and her
              reviews are glowing — but online, new clients could only find
              her through an outdated Square page that didn&apos;t look
              anything like her work.
            </p>
          </div>
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-forge-purple-medium mb-3">
              The Problem
            </p>
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-forge-purple-strong text-pretty">
              Before the new site, almost all of Sun&apos;s new clients came
              by word of mouth — and scheduling was a pain. People had to
              call during business hours, often while Sun was mid-appointment
              and couldn&apos;t pick up. Her reputation was strong; her
              online presence didn&apos;t match it.
            </p>
          </div>
        </div>
      </section>

      {/* What We Built */}
      <section
        ref={builtRef}
        className="scroll-reveal w-full py-20 px-6 md:px-12 bg-forge-lavender"
      >
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-forge-purple-medium mb-3">
            What We Built
          </p>
          <ul className="flex flex-col gap-5">
            {whatWeBuilt.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span
                  className="flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "#111111",
                  }}
                  aria-hidden="true"
                >
                  <Check size={14} color="#C8A96E" />
                </span>
                <span className="font-sans text-base md:text-lg text-forge-purple-strong leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section
        ref={ctaMidRef}
        className="scroll-reveal w-full py-20 px-6 md:px-12 border-y border-[#D8CBB8]/80 bg-[#EEE6DA]"
      >
        <CtaBlock heading="Run a business people love, with a website that doesn't show it?" />
      </section>

      {/* Result + Pull-quote */}
      <AnimatedBg
        type="float-accent"
        intensity="medium"
        className="w-full py-24 px-6 md:px-12 bg-forge-dark"
      >
        <section ref={resultRef} className="scroll-reveal">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-white/40 mb-3">
              The Result
            </p>
            <p className="font-sans text-base md:text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Since launch, Sun has seen more calls and bookings — especially
              on weekends. One client told her that booking online was far
              easier than trying to call during business hours.
            </p>

            <div
              className="rounded-2xl p-10 md:p-14"
              style={{ backgroundColor: "#1A1A1A", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div className="flex gap-1 justify-center mb-8" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    style={{ fill: "#C8A96E" }}
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote
                className="font-serif text-2xl md:text-4xl font-medium leading-snug text-pretty"
                style={{ color: "#FFFFFF" }}
              >
                &ldquo;We have already noticed an increase in phone calls
                since the launch.&rdquo;
              </blockquote>
              <p className="font-sans text-sm mt-6" style={{ color: "rgba(255,255,255,0.6)" }}>
                — Darby, Sun&apos;s Nail Studio
              </p>
            </div>
          </div>
        </section>
      </AnimatedBg>

      {/* End CTA */}
      <section
        ref={ctaEndRef}
        className="scroll-reveal w-full py-24 px-6 md:px-12 bg-forge-lavender"
      >
        <CtaBlock heading="Want results like Sun's for your business?" />
      </section>
    </>
  )
}
