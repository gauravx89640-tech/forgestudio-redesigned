"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Work", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#why-us" },
]

export function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [lastY, setLastY] = useState(0)
  const [active, setActive] = useState("")
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setHidden(y > lastY && y > 80)
      setLastY(y)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastY])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <AnimatePresence>
      <motion.header
        className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none px-4"
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Desktop pill nav */}
        <nav
          className="pointer-events-auto hidden md:flex items-center gap-1 px-3 py-2 rounded-full"
          style={{
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 2px 24px rgba(0,0,0,0.12)",
          }}
          aria-label="Main navigation"
        >
          <a
            href="#"
            className="font-serif text-sm font-bold tracking-tight text-forge-ink mr-2 px-3 py-1"
          >
            FORGE
          </a>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`px-3 py-1.5 rounded-full text-sm font-sans font-medium transition-all duration-200 ${
                active === link.label
                  ? "bg-forge-ink text-white"
                  : "text-forge-ink/70 hover:text-forge-ink"
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="ml-2 px-4 py-1.5 rounded-full text-sm font-sans font-semibold bg-forge-ink text-white hover:bg-forge-ink/85 transition-colors duration-200"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile nav */}
        <div className="pointer-events-auto md:hidden w-full">
          {/* Mobile top bar */}
          <div
            className="flex items-center justify-between px-4 py-2.5 rounded-full"
            style={{
              background: "rgba(255,255,255,0.90)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow: "0 2px 24px rgba(0,0,0,0.12)",
            }}
          >
            <a href="#" className="font-serif text-base font-bold tracking-tight text-forge-ink">
              FORGE
            </a>
            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="px-3 py-1 rounded-full text-xs font-sans font-semibold bg-forge-ink text-white"
              >
                Get a Quote
              </a>
              <button
                onClick={() => setMobileOpen((o) => !o)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className="p-1.5 rounded-full bg-forge-ink/10 text-forge-ink"
              >
                {mobileOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>

          {/* Mobile dropdown menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="mt-2 rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  boxShadow: "0 4px 32px rgba(0,0,0,0.14)",
                }}
              >
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => { setActive(link.label); setMobileOpen(false) }}
                    className="flex items-center px-5 py-3.5 text-sm font-sans font-medium text-forge-ink/80 hover:text-forge-ink hover:bg-forge-ink/5 border-b border-forge-ink/8 last:border-0 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </AnimatePresence>
  )
}
