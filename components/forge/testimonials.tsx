"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { AnimatedBg } from "./animated-bg"

// Only real client words. Darby's is the one quote cleared for the site.
const quote = {
  text: "The site is doing great and Sun is very happy with the results. We have already noticed an increase in phone calls since the launch.",
  author: "Darby Day",
  company: "Sun's Nail Studio",
}

export function Testimonials() {
  const ref = useScrollReveal()

  return (
  <AnimatedBg
    type="float-accent"
    intensity="medium"
    className="w-full py-20 px-6 md:px-12 border-b border-[#D8CBB8]/80 bg-[#EEE6DA]"
  >
      <section
        ref={ref}
        className="scroll-reveal"
        aria-labelledby="testimonials-heading"
      >
        <div className="max-w-7xl mx-auto">
        {/* Tag */}
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-forge-purple-medium mb-3">
          Testimonial
        </p>

        {/* Heading */}
        <h2
          id="testimonials-heading"
          className="font-serif text-5xl md:text-6xl font-bold text-forge-purple-strong mb-12 text-balance"
        >
          From a client
        </h2>

        <figure className="max-w-4xl">
          <blockquote className="font-serif text-3xl md:text-5xl leading-tight text-forge-purple-strong text-pretty">
            &ldquo;{quote.text}&rdquo;
          </blockquote>
          <figcaption className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-3">
            <span className="font-sans text-sm">
              <span className="font-semibold text-forge-purple-strong">{quote.author}</span>
              <span className="text-forge-purple-medium">, {quote.company}</span>
            </span>
            <a href="/work/suns-nail-studio" className="link-draw font-sans text-sm font-semibold text-forge-purple-strong">
              Read the case study →
            </a>
          </figcaption>
        </figure>
        </div>
      </section>
    </AnimatedBg>
  )
}
