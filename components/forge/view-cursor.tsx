"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"

// A round "View" badge that trails the mouse over any element marked data-cursor="view".
// Desktop mouse only; never shown on touch screens or with reduced motion.
export function ViewCursor() {
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!fine || calm) return
    setEnabled(true)

    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = e.target as Element | null
      setActive(!!target?.closest?.('[data-cursor="view"]'))
    }
    window.addEventListener("pointermove", move, { passive: true })
    return () => window.removeEventListener("pointermove", move)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 z-[70] pointer-events-none"
      style={{ x: sx, y: sy }}
    >
      <AnimatePresence>
        {active && (
          <motion.div
            className="translate-x-4 translate-y-4 px-3 py-1.5 rounded-full bg-forge-ink/90 text-[#FBF7F0] font-sans text-xs font-medium tracking-wide whitespace-nowrap backdrop-blur-sm"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            View ↗
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
