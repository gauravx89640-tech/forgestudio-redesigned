"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { AnimatedBg } from "./animated-bg"

export function Statement() {
  const ref = useScrollReveal()

  return (
    <section
      ref={ref}
      className="scroll-reveal relative w-full flex items-center justify-center overflow-hidden"
      style={{ minHeight: "80vh" }}
      aria-labelledby="statement-heading"
    >
   {/* Full-bleed background image */}
<div
  className="absolute inset-0 bg-center bg-cover bg-no-repeat"
  style={{
    backgroundImage: "url('/images/1.jpg')",
  }}
  role="img"
  aria-label="Creative studio workspace with iMac desks and warm lighting"
/>

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(23, 23, 23, 0.55)" }}
      />

      {/* Animated depth layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 animate-glow-pulse opacity-60"
          aria-hidden="true"
          style={{
            background: `radial-gradient(ellipse at center, 
              rgba(200, 169, 110, 0.1) 0%, 
              transparent 70%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-24 flex flex-col items-start">
        <h2
          id="statement-heading"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-[#F4EFE7] leading-tight text-pretty mb-10"
        >
          We create clean, fast websites that help local businesses get found, build trust, and win more customers.
        </h2>
        <a
          href="#contact"
          className="inline-block px-7 py-3 rounded-full font-sans font-semibold text-sm text-[#F4EFE7] border border-white/70 transition-colors duration-200 mb-5 hover:bg-white/10"
        >
          Start Your Project
        </a>
        <span className="font-sans text-xs tracking-wider uppercase" style={{ color: "rgba(255,255,255,0.6)" }}>
          50+ Websites Launched
        </span>
      </div>
    </section>
  )
}
