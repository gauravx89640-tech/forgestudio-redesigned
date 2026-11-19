"use client"

import { useEffect } from "react"

// Adds .is-in to every .reveal element as it scrolls into view. Fails open: if the
// observer can't run, or after 8 seconds regardless, everything is shown.
export function Reveals() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)"))
    const showAll = () => els.forEach((el) => el.classList.add("is-in"))
    const timer = window.setTimeout(showAll, 8000)
    let io: IntersectionObserver | undefined
    try {
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add("is-in")
              io?.unobserve(e.target)
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px" }
      )
      els.forEach((el) => io!.observe(el))
    } catch {
      showAll()
    }
    return () => {
      window.clearTimeout(timer)
      io?.disconnect()
    }
  }, [])
  return null
}
