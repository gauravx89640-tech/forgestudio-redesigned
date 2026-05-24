"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section
  className="relative w-full max-w-full min-h-screen flex flex-col overflow-hidden"
  aria-label="Hero"
>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
       style={{
  backgroundImage: "url('/images/hero6.jpg')",
}}
        role="img"
        aria-label="Warm golden office lighting"
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(23, 23, 23, 0.4)" }}
      />

      {/* Corner labels */}
      <div className="absolute top-6 left-6 z-10">
        <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-white/80">
          Design · Develop · Deliver
        </span>
      </div>
      <div className="absolute top-6 right-6 z-10 text-right">
        <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-white/80">
          Web Design Studio · Est. 2024
        </span>
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-4">
        <motion.h1
          className="font-serif text-[#FBF7F0] text-center leading-none select-none"
          style={{
            fontSize: "clamp(80px, 20vw, 260px)",
            textShadow: "0 4px 32px rgba(0,0,0,0.4)",
            letterSpacing: "-0.02em",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          FORGE
        </motion.h1>
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="relative z-10 flex flex-col items-start px-8 pb-20 md:px-16 max-w-2xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <h2 className="font-serif text-[#FBF7F0] text-2xl md:text-3xl leading-snug text-pretty mb-3">
          We build websites that work as hard as you do.
        </h2>
        <p className="font-sans text-white text-sm md:text-base leading-relaxed mb-6">
          The last website you'll ever need to think about. Built for cafés, bakeries, salons and local businesses — starting from $499.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#portfolio"
            className="px-6 py-2.5 rounded-full font-sans font-semibold text-sm bg-white text-forge-ink hover:bg-white/90 transition-colors duration-200"
          >
            See Our Work
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full font-sans font-semibold text-sm border border-white text-[#FBF7F0] hover:bg-white/10 transition-colors duration-200"
          >
            Get a Free Quote
          </a>
        </div>
      </motion.div>

      {/* Marquee strip */}
<div
  className="absolute bottom-0 left-0 w-full max-w-full z-10 overflow-hidden py-3"
  style={{ background: "rgba(13,13,13,0.92)" }}
  aria-hidden="true"
>
  <div className="flex min-w-max whitespace-nowrap animate-marquee">
    {Array.from({ length: 6 }).map((_, i) => (
      <span
        key={i}
        className="font-sans text-xs font-semibold tracking-[0.22em] uppercase text-white/75 mx-8"
      >
        Bloom Bakery · Iron &amp; Oak Gym · Mila Café · Web Design · Fast Delivery · From $499 ·&nbsp;
      </span>
    ))}
  </div>
</div>
    </section>
  )
}
