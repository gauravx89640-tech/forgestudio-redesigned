"use client"

import { useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Mail } from "lucide-react"

// Web3Forms access key (Forge Studio's own account). These keys are public by design:
// they can only send messages to the inbox registered on the account.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "b50b2e99-bae8-4743-ba49-67da9f2f2929"

export function Contact() {
  const ref = useScrollReveal()
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (sending) return
    setSending(true)
    setError(false)
    try {
      if (!WEB3FORMS_KEY) throw new Error("Missing Web3Forms key")
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New enquiry from ${form.name}${form.business ? ` (${form.business})` : ""}`,
          from_name: "forgestudio.one",
          replyto: form.email,
          name: form.name,
          business: form.business,
          email: form.email,
          message: form.message,
          botcheck: (e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement | null)?.checked ?? false,
        }),
      })
      const data = await res.json().catch(() => null)
      if (!res.ok || !data?.success) throw new Error(data?.message ?? `HTTP ${res.status}`)
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-12">
              {/* Spam trap: hidden from people, bots tick it */}
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
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
              {error && (
                <p role="alert" className="font-sans text-sm text-red-700">
                  Sorry, your message didn&apos;t go through. Please try again, or email us at{" "}
                  <a href="mailto:hello@forgestudio.one" className="underline">hello@forgestudio.one</a>.
                </p>
              )}
              <button
                type="submit"
                disabled={sending}
                className="self-start px-8 py-3 rounded-full font-sans font-semibold text-sm bg-forge-ink text-white hover:bg-forge-ink/85 disabled:opacity-60 disabled:cursor-wait transition-colors duration-200"
              >
                {sending ? "Sending…" : "Send Message"}
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
