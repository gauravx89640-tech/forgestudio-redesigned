"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { AnimatedBg } from "./animated-bg"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$499",
    featured: false,
    features: [
      "1 page",
      "Mobile friendly",
      "Contact form",
      "5-day delivery",
    ],
  },
  {
    name: "Business",
    price: "$849",
    featured: true,
    badge: "Most Popular",
    features: [
      "Up to 5 pages",
      "Contact form + Maps",
      "Basic SEO",
      "10-day delivery",
    ],
  },
  {
    name: "Premium",
    price: "$1,499",
    featured: false,
    features: [
      "Up to 10 pages",
      "Custom animations",
      "Copywriting included",
      "Priority support",
      "14-day delivery",
    ],
  },
]

export function Pricing() {
  const ref = useScrollReveal()

  return (
    <AnimatedBg type="gradient" intensity="medium" className="w-full bg-forge-lavender border-b border-forge-divider">
      <section
        ref={ref}
        className="scroll-reveal py-20 px-6 md:px-12"
        id="pricing"
        aria-labelledby="pricing-heading"
      >
        <div className="max-w-7xl mx-auto">
        {/* Tag */}
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-forge-purple-medium mb-3">
          Pricing
        </p>

        {/* Heading */}
        <h2
          id="pricing-heading"
          className="font-serif text-5xl md:text-6xl font-bold text-forge-purple-strong mb-12 text-balance"
        >
          Simple, Fair Pricing
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.featured
                  ? "text-white shadow-xl"
                  : "text-forge-ink hover:shadow-lg"
              }`}
              style={{
                backgroundColor: plan.featured ? "#111111" : "#FBF7F0",
                borderColor: plan.featured ? "#111111" : "#D8CBB8",
              }}
            >
              {plan.badge && (
                <span className="absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-sans font-semibold" style={{ backgroundColor: "#FBF7F0", color: "#151515" }}>
                  {plan.badge}
                </span>
              )}

              <p className={`font-sans text-xs tracking-[0.15em] uppercase mb-3 ${plan.featured ? "text-white/50" : "text-forge-purple-medium"}`}>
                {plan.name}
              </p>
              <div className="mb-8 flex items-baseline gap-1">
                <span className={`font-sans text-sm ${plan.featured ? "text-white/50" : "text-forge-purple-medium"}`}>
                  from
                </span>
                <span className="font-serif text-5xl font-bold">
                  {plan.price}
                </span>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 font-sans text-sm">
                    <Check
                      className={`w-4 h-4 flex-shrink-0 ${plan.featured ? "text-forge-lavender" : "text-forge-purple-medium"}`}
                      aria-hidden="true"
                    />
                    <span className={plan.featured ? "text-white/85" : "text-forge-purple-medium"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center px-5 py-2.5 rounded-full font-sans font-semibold text-sm transition-colors duration-200 ${
                  plan.featured
                    ? "bg-white text-forge-ink hover:bg-white/90"
                    : "bg-forge-ink text-white hover:bg-forge-ink/85"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Care plan banner */}
        <div className="w-full rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ backgroundColor: "#FBF7F0", border: "1px solid #D8CBB8" }}>
          <div>
            <p className="font-sans text-xs tracking-[0.15em] uppercase text-forge-purple-medium mb-1">
              Monthly Care Plan
            </p>
            <h3 className="font-serif text-2xl font-bold text-forge-purple-strong">
              Ongoing updates & support — from $99/month
            </h3>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-6 py-2.5 rounded-full font-sans font-semibold text-sm text-white transition-colors duration-200"
            style={{ backgroundColor: "#111111" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#000000")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#111111")}
          >
            Learn More
          </a>
        </div>
        </div>
      </section>
    </AnimatedBg>
  )
}
