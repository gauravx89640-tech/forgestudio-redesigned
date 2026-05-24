"use client"

import { useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "How long does it take?",
    a: "The Starter plan takes 5 days, Business 10 days, and Premium 14 days from the time we receive your content and payment.",
  },
  {
    q: "Will my site work on mobile?",
    a: "Absolutely. Every site we build is fully responsive and looks great on phones, tablets, and desktops.",
  },
  {
    q: "Do you help with the copy/writing?",
    a: "Copywriting is included in the Premium plan. For Starter and Business, we can assist with copy for a small additional fee.",
  },
  {
    q: "What if I want changes after it's built?",
    a: "One round of revisions is included in every plan. After that, our $99/month care plan covers ongoing updates and changes.",
  },
  {
    q: "What do I actually own?",
    a: "Everything. Your site, your code, and your domain are completely yours. No lock-in contracts, no ongoing fees unless you choose our care plan.",
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-forge-divider">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="font-serif text-lg md:text-xl font-semibold text-forge-purple-strong group-hover:text-forge-purple-strong/75 transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`w-6 h-6 flex-shrink-0 text-forge-purple-strong transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 pb-5" : "max-h-0"}`}
        style={{ backgroundColor: open ? "rgb(200, 192, 224, 0.15)" : "transparent" }}
      >
        <p className="font-sans text-sm text-forge-purple-medium leading-relaxed pr-8">
          {a}
        </p>
      </div>
    </div>
  )
}

export function Faq() {
  const ref = useScrollReveal()

  return (
    <section
      ref={ref}
      className="scroll-reveal w-full bg-forge-lavender py-20 px-6 md:px-12"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-2xl mx-auto">
        {/* Tag */}
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-forge-purple-medium mb-3">
          FAQ
        </p>

        {/* Heading */}
        <h2
          id="faq-heading"
          className="font-serif text-5xl md:text-6xl font-bold text-forge-purple-strong mb-12 text-balance"
        >
          Frequently Asked Questions
        </h2>

        <div>
          {faqs.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
