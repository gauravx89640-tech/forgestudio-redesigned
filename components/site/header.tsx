"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const nav = [
  { label: "Work", href: "/portfolio" },
  { label: "Local Presence", href: "/local-presence" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/#about" },
]

export function Wordmark() {
  return (
    <span className="s-wordmark">
      F<i>O</i>RGE<small>Studio</small>
    </span>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the phone menu after navigating, and on Escape.
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const current = (href: string) => (href === pathname ? "page" : undefined)

  return (
    <header className="s-header" data-scrolled={scrolled || open}>
      <div className="s-wrap flex items-center justify-between h-16 md:h-20">
        <a href="/" aria-label="Forge Studio, home">
          <Wordmark />
        </a>

        <nav aria-label="Main" className="hidden md:flex items-center gap-8">
          {nav.map((l) => (
            <a key={l.label} href={l.href} className="s-link" aria-current={current(l.href)}>
              {l.label}
            </a>
          ))}
          <a href="/#contact" className="s-btn s-btn-outline s-btn-sm">Get a Quote</a>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <a href="/#contact" className="s-btn s-btn-outline s-btn-sm">Get a Quote</a>
          <button
            type="button"
            className="s-btn s-btn-sm border-transparent"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav id="site-menu" aria-label="Main" className="s-menu md:hidden">
          <div className="s-wrap pb-6">
            {nav.map((l) => (
              <a key={l.label} href={l.href} className="s-menu-item" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
