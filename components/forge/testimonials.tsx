"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { AnimatedBg } from "./animated-bg"

const testimonials = [
  {
    quote:
      "Forge Studio built our site in under a week. We've had more enquiries in the last month than all of last year.",
    author: "James R.",
    company: "Iron & Oak Gym",
  },
  {
    quote:
      "I was worried it would be complicated but they made everything so easy. Our new site looks incredible.",
    author: "Sarah M.",
    company: "Bloom Bakery",
  },
  {
    quote:
      "Finally a website I'm proud to show customers. Professional, fast and great value.",
    author: "Mila K.",
    company: "Mila Café",
  },
]

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
          Testimonials
        </p>

        {/* Heading */}
        <h2
          id="testimonials-heading"
          className="font-serif text-5xl md:text-6xl font-bold text-forge-purple-strong mb-12 text-balance"
        >
          What Our Clients Say
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="rounded-2xl p-8 flex flex-col justify-between gap-6"
              style={{ backgroundColor: "#1A1A1A", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4"
                    style={{ fill: "#C8A96E" }}
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="font-serif text-xl font-medium leading-snug flex-1" style={{ color: "#FFFFFF" }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div>
                <p className="font-sans text-sm font-semibold" style={{ color: "#FFFFFF" }}>
                  {t.author}
                </p>
                <p className="font-sans text-xs" style={{ color: "#FFFFFF" }}>
                  {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
    </AnimatedBg>
  )
}
