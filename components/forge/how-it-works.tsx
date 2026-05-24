"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { AnimatedBg } from "./animated-bg"

const steps = [
  {
    number: "01",
    title: "Tell Us About Your Business",
    body: "Fill out our simple form and tell us about your business, your goals, and what you need.",
  },
  {
    number: "02",
    title: "We Build Your Site",
    body: "We design and build your site within days — clean, modern and ready to impress.",
  },
  {
    number: "03",
    title: "Go Live & Get Customers",
    body: "Your site goes live and starts working for you immediately.",
  },
]

export function HowItWorks() {
  const ref = useScrollReveal()

  return (
    <AnimatedBg
  type="blob"
  intensity="low"
  className="w-full py-20 px-6 md:px-12 border-b border-[#D8CBB8]/80 bg-[#EEE6DA]"
>
      <section
        ref={ref}
        className="scroll-reveal"
        id="process"
        aria-labelledby="process-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
            {/* Left: Process content */}
            <div>
              {/* Tag */}
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-forge-purple-medium mb-3">
                Process
              </p>

              {/* Heading */}
              <h2
                id="process-heading"
                className="font-serif text-5xl md:text-6xl font-bold text-forge-purple-strong mb-16 text-balance"
              >
                How It Works
              </h2>

              {/* Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {steps.map((step, index) => (
                  <div key={step.number} className="relative flex flex-col">
                    {/* Connector line (between steps, desktop only) */}
                    {index < steps.length - 1 && (
                      <div
                        className="hidden md:block absolute z-0"
                        style={{
                          top: "24px",
                          left: "56px",
                          width: "calc(100% - 56px)",
                          height: "1px",
                          backgroundColor: "#D8CBB8",
                        }}
                      />
                    )}

                    <div className="relative z-10 pr-0 md:pr-8">
                      {/* Number circle */}
                      <div
                        className="flex items-center justify-center mb-6"
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "50%",
                          backgroundColor: "#111111",
                          flexShrink: 0,
                        }}
                      >
                        <span
                          className="font-sans text-sm font-bold"
                          style={{ color: "#FFFFFF" }}
                        >
                          {step.number}
                        </span>
                      </div>

                      <h3
                        className="font-serif text-xl font-bold mb-3 text-pretty"
                        style={{ color: "#151515" }}
                      >
                        {step.title}
                      </h3>

                      <p className="font-sans text-sm text-forge-purple-medium leading-relaxed">
                        {step.body}
                      </p>
                    </div>

                    {/* Horizontal divider on mobile */}
                    {index < steps.length - 1 && (
                      <div className="block md:hidden w-full h-px bg-forge-purple-light my-8" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: workspace image */}
           <div className="relative rounded-2xl overflow-hidden min-h-[320px] lg:min-h-[540px]">
  <img
    src="/images/workspace2.jpg"
    alt="Warm workspace with desk lamp and natural light"
    className="absolute inset-0 w-full h-full object-cover brightness-90"
    loading="lazy"
  />
</div>
          </div>
        </div>
      </section>
    </AnimatedBg>
  )
}