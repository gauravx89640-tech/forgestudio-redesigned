"use client"

import { useEffect, useState } from "react"

// Web3Forms access key (Forge Studio's own account). These keys are public by design:
// they can only send messages to the inbox registered on the account.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "b50b2e99-bae8-4743-ba49-67da9f2f2929"

const INTERESTS = ["A website", "Local Presence", "Not sure yet"] as const

export function ContactForm() {
  const [form, setForm] = useState({ name: "", business: "", email: "", interest: "A website", message: "" })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  // /?interest=local-presence#contact preselects Local Presence.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("interest")
    if (q === "local-presence") setForm((f) => ({ ...f, interest: "Local Presence" }))
    else if (q === "website") setForm((f) => ({ ...f, interest: "A website" }))
  }, [])

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (sending) return
    setSending(true)
    setError(false)
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New enquiry (${form.interest}) from ${form.name}${form.business ? ` (${form.business})` : ""}`,
          from_name: "forgestudio.one",
          replyto: form.email,
          name: form.name,
          business: form.business,
          email: form.email,
          interested_in: form.interest,
          message: form.message,
          botcheck: (e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement | null)?.checked ?? false,
        }),
      })
      const data = await res.json().catch(() => null)
      if (!res.ok || !data?.success) throw new Error(data?.message ?? `HTTP ${res.status}`)
      setSent(true)
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div role="status" className="border border-[var(--s-hair)] bg-[#fffdfa] p-8 md:p-10">
        <p className="s-eyebrow mb-4">Message sent</p>
        <p className="s-h3 mb-3">Thanks for reaching out.</p>
        <p className="s-body">I&apos;ll get back to you within one business day.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-5">
      {/* Spam trap: hidden from people, bots tick it */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="s-field">
          <label htmlFor="c-name" className="s-label">Name</label>
          <input id="c-name" name="name" required autoComplete="name" value={form.name} onChange={set} className="s-input" />
        </div>
        <div className="s-field">
          <label htmlFor="c-business" className="s-label">Business name</label>
          <input id="c-business" name="business" autoComplete="organization" value={form.business} onChange={set} className="s-input" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="s-field">
          <label htmlFor="c-email" className="s-label">Email</label>
          <input id="c-email" name="email" type="email" required autoComplete="email" value={form.email} onChange={set} className="s-input" />
        </div>
        <div className="s-field">
          <label htmlFor="c-interest" className="s-label">I&apos;m interested in</label>
          <select id="c-interest" name="interest" value={form.interest} onChange={set} className="s-input">
            {INTERESTS.map((i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="s-field">
        <label htmlFor="c-message" className="s-label">Message</label>
        <textarea id="c-message" name="message" required rows={5} value={form.message} onChange={set} className="s-input resize-y" />
      </div>
      {error && (
        <p role="alert" className="text-sm text-[#9b2c1f]">
          Sorry, your message didn&apos;t go through. Please try again, or email{" "}
          <a href="mailto:hello@forgestudio.one" className="underline">hello@forgestudio.one</a>.
        </p>
      )}
      <div>
        <button type="submit" disabled={sending} className="s-btn s-btn-solid">
          {sending ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  )
}
