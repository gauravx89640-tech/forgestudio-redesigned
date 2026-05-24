"use client"

import { useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Mail } from "lucide-react"

export function Contact() {
  const ref = useScrollReveal()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section
      ref={ref}
      className="scroll-reveal w-full bg-forge-lavender py-20 px-6 md:px-12 border-t border-forge-ink/10"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-stretch">
        {/* Left: form + info */}
        <div>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-forge-purple-medium mb-3">
            Get In Touch
          </p>
          <h2
            id="contact-heading"
            className="font-serif text-5xl md:text-6xl font-bold text-forge-purple-strong mb-8 text-balance"
          >
            Let&apos;s Work Together
          </h2>

          {submitted ? (
            <div className="bg-white/40 rounded-2xl p-8 border border-forge-ink/10 text-center">
              <div className="w-14 h-14 rounded-full bg-forge-ink flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-forge-ink mb-2">
                Message Sent!
              </h3>
              <p className="font-sans text-sm text-forge-ink/60 leading-relaxed">
                Thanks for reaching out. We&apos;ll get back to you within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-12" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-sans text-xs font-semibold tracking-wide uppercase text-forge-purple-strong">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-forge-divider font-sans text-sm text-forge-ink placeholder-forge-ink/35 focus:outline-none focus:border-forge-purple-strong focus:bg-white transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="business" className="font-sans text-xs font-semibold tracking-wide uppercase text-forge-purple-strong">
                    Business Name
                  </label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    value={form.business}
                    onChange={handleChange}
                    placeholder="Your business"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-forge-divider font-sans text-sm text-forge-ink placeholder-forge-ink/35 focus:outline-none focus:border-forge-purple-strong focus:bg-white transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-sans text-xs font-semibold tracking-wide uppercase text-forge-purple-strong">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="hello@yourbusiness.com"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-forge-divider font-sans text-sm text-forge-ink placeholder-forge-ink/35 focus:outline-none focus:border-forge-purple-strong focus:bg-white transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="font-sans text-xs font-semibold tracking-wide uppercase text-forge-purple-strong">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-forge-divider font-sans text-sm text-forge-ink placeholder-forge-ink/35 focus:outline-none focus:border-forge-purple-strong focus:bg-white transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="self-start px-8 py-3 rounded-full font-sans font-semibold text-sm bg-forge-ink text-white hover:bg-forge-ink/85 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          )}

          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <p className="font-sans text-base text-forge-purple-medium leading-relaxed">
              Drop us a message and we&apos;ll get back to you within one business day. No pushy sales calls — just a friendly conversation about your project.
            </p>
            <a
              href="mailto:hello@forgestudio.one"
              className="inline-flex items-center gap-2.5 font-sans font-semibold text-forge-purple-strong hover:text-forge-purple-strong/70 transition-colors"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              hello@forgestudio.one
            </a>
            <div className="w-full h-px bg-forge-divider my-2" />
            <div className="flex flex-col gap-2">
              <p className="font-sans text-xs tracking-[0.15em] uppercase text-forge-purple-medium">
                Response time
              </p>
              <p className="font-serif text-2xl font-bold text-forge-purple-strong">
                Within 1 business day
              </p>
            </div>
          </div>
        </div>

        {/* Right: workspace image */}
        <div className="relative rounded-2xl overflow-hidden">
  <img
    src="/images/workspace.jpg"
    alt="Premium workspace with natural light and plants"
    className="w-full h-full object-cover"
    loading="lazy"
  />

  <div className="absolute inset-0 bg-black/18"></div>
</div>
      </div>
    </section>
  )
}
