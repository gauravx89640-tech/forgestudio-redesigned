"use client"

import { useEffect, useRef } from "react"

// Adds "visible" when the element scrolls into view. Fails open twice:
// at once if IntersectionObserver is missing or throws, and after 8s regardless
// (long enough that a real reader has already scrolled past anything still hidden).
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const show = () => el.classList.add("visible")

    const timer = window.setTimeout(show, 8000)
    let observer: IntersectionObserver | undefined
    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            show()
            observer?.unobserve(el)
          }
        },
        { threshold: 0.12 }
      )
      observer.observe(el)
    } catch {
      show()
    }

    return () => {
      window.clearTimeout(timer)
      observer?.disconnect()
    }
  }, [])

  return ref
}
