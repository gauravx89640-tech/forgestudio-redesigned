"use client"

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion"

// Thin gold line along the top edge that fills as the page is read.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const reduce = useReducedMotion()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left bg-forge-gold pointer-events-none"
      style={{ scaleX: reduce ? scrollYProgress : scaleX }}
    />
  )
}
