"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { AnimatedBg } from "./animated-bg"
import { Zap, Clock, Eye, TrendingUp, DollarSign, Heart } from "lucide-react"

const reasons = [
  {
    icon: Heart,
    title: "We Speak Small Business",
    body: "We understand your challenges, your budget, and what it takes to stand out locally.",
  },
  {
    icon: Clock,
    title: "Your Site in Days, Not Months",
    body: "No bloated agency timelines. Most sites are live within 5–14 days of kickoff.",
  },
  {
    icon: Eye,
    title: "You'll Actually Understand Everything",
    body: "No jargon. We walk you through every step and make sure you feel confident.",
  },
  {
    icon: TrendingUp,
    title: "Built to Convert, Not Just Look Pretty",
    body: "Every design decision is made with your customers in mind — to turn visitors into buyers.",
  },
  {
    icon: DollarSign,
    title: "Fair, Transparent Pricing",
    body: "No hidden costs, no surprise invoices. You see the full price upfront.",
  },
  {
    icon: Zap,
    title: "We're In It With You",
    body: "From launch day and beyond, we're available for support, updates, and advice.",
  },
]

export function WhyUs() {
  const ref = useScrollReveal()

  return (
    <AnimatedBg
  type="mesh"
  intensity="medium"
  className="w-full bg-forge-lavender border-b border-forge-divider"
>
      <section
        ref={ref}
        className="scroll-reveal py-20 px-6 md:px-12"
        id="why-us"
        aria-labelledby="why-us-heading"
      >
        <div className="max-w-7xl mx-auto">
        {/* Tag */}
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-forge-purple-medium mb-3">
          Why Us
        </p>

        {/* Heading */}
        <h2
          id="why-us-heading"
          className="font-serif text-5xl md:text-6xl font-bold text-forge-purple-strong mb-4 text-balance"
        >
          Why Forge Studio?
        </h2>
        <p className="font-sans text-forge-purple-medium text-base max-w-xl mb-12 leading-relaxed">
          There are thousands of web designers out there. Here&apos;s why our clients choose us.
        </p>

        {/* 3x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="rounded-2xl p-7 hover:shadow-lg transition-shadow duration-200"
                style={{ backgroundColor: "#FBF7F0", border: "1px solid #D8CBB8" }}
              >
                {/* Icon circle — 40×40, #111111 bg, white icon */}
                <div
                  className="flex items-center justify-center mb-5"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#111111",
                    flexShrink: 0,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#FFFFFF" }} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-bold text-forge-purple-strong mb-2">
                  {reason.title}
                </h3>
                <p className="font-sans text-sm text-forge-purple-medium leading-relaxed">
                  {reason.body}
                </p>
              </div>
            )
          })}
        </div>
        </div>
      </section>
    </AnimatedBg>
  )
}
