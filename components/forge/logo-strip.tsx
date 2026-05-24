"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const clients = [
  "Bloom Bakery",
  "Iron & Oak Gym",
  "Mila Café",
  "The Corner Deli",
  "Peak Pilates",
]

export function LogoStrip() {
  const ref = useScrollReveal()

  return (
    <section
      ref={ref}
      className="scroll-reveal w-full overflow-hidden bg-forge-lavender py-10 px-6"
      aria-label="Client logos"
    >
      <p className="font-sans text-center text-xs tracking-[0.2em] uppercase text-forge-ink/40 mb-6">
        Trusted by local businesses
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
        {clients.map((name) => (
          <span
            key={name}
            className="font-serif text-base md:text-lg font-semibold tracking-wide text-forge-ink/35 select-none"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
