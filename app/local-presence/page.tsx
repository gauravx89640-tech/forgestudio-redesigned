import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/header"
import { SiteFooter } from "@/components/site/footer"
import { Reveals } from "@/components/site/reveal"

const TITLE = "Local Presence · Google and Yelp Care for Beauty Pros"
const DESCRIPTION = "Your Google and Yelp pages, looked after every month. From $125 a month. Cancel with 30 days' notice."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/local-presence" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/local-presence",
    images: [{ url: "/og/local-presence.png", width: 1200, height: 630, alt: "Your Google and Yelp pages, looked after every month. Forge Studio" }],
  },
}

const SAMPLE_WEEK = "/?interest=local-presence#contact"
const GOOGLE_GUIDE = "https://support.google.com/business/answer/7163406"

const google = [
  "Up to four posts a month, made from your own photos",
  "Photo updates",
  "Replies to your reviews, drafted by me and approved by you",
  "Your hours and details kept right",
  "A monthly report of your numbers",
]
const yelp = [
  "A monthly batch of photos",
  "Your page's text and details kept right",
  "Holiday hours kept right",
  "Review replies written by me and posted by you",
  "A monthly report of your numbers",
]

const steps = [
  ["Ask for a sample week.", "I'll write a sample post from your own photos, draft replies to your latest unanswered reviews, and list the fixes your profile needs. It's yours to use either way."],
  ["Add me as a manager.", "You add me as a manager on Google and invite me on Yelp. I never ask for your password, and you can remove me at any time."],
  ["I take it from here.", "I record your starting numbers, tell you about every change I make, and send you a report each month."],
]

const faqs = [
  ["Do I lose control of my pages?", "No. You stay the owner, and you can remove me at any time."],
  ["Will you post replies without asking me?", "No. Nothing goes up on your reviews without your approval."],
  ["What do you need from me?", "Your photos. Posts are made from what you send, so a month with fewer photos has fewer posts."],
  ["What isn't included?", "Changes to your website, ad accounts, booking system setup, other platforms and blog posts."],
  ["What happens if I cancel?", "Give me 30 days' notice. I'll hand everything back and remove my access within 7 business days of the service ending."],
]

export default function LocalPresencePage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="s-wrap pt-10 md:pt-20 pb-[88px] md:pb-[120px]" aria-labelledby="lp-h1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6 items-end">
            <div className="md:col-span-8">
              <p className="s-eyebrow mb-5 md:mb-7">Local Presence</p>
              <h1 id="lp-h1" className="s-display">
                Your Google and Yelp pages, looked after <em>every month.</em>
              </h1>
            </div>
            <div className="md:col-span-4 md:pb-3">
              <p className="s-lede">
                For beauty pros who would rather be with clients than updating listings. You stay the owner. I keep your pages active and accurate.
              </p>
              <a href={SAMPLE_WEEK} className="s-btn s-btn-solid mt-6">Ask for a sample week</a>
            </div>
          </div>
        </section>

        {/* What I do each month */}
        <section className="s-wrap s-section s-rule" aria-labelledby="do-h2">
          <h2 id="do-h2" className="s-h2 mb-12 md:mb-16">What I do each month</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              ["Google Business Profile", google],
              ["Yelp", yelp],
            ].map(([title, items]) => (
              <div key={title as string} className="reveal">
                <h3 className="s-h3 pb-4">{title as string}</h3>
                <ul className="s-check border-t border-[var(--s-hair)]">
                  {(items as string[]).map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Price */}
        <section className="s-wrap s-section s-rule" aria-labelledby="price-h2">
          <h2 id="price-h2" className="s-h2 mb-12 md:mb-16">Price</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {[
              { name: "One platform", price: "$125", which: "Google or Yelp" },
              { name: "Both platforms", price: "$250", which: "Google and Yelp" },
            ].map((p) => (
              <div key={p.name} className="s-price-card reveal">
                <p className="s-eyebrow mb-6">{p.name}</p>
                <p className="mb-2">
                  <span className="s-price">{p.price}</span>
                  <span className="s-price-from ml-2">a month</span>
                </p>
                <p className="s-body">{p.which}</p>
              </div>
            ))}
          </div>
          <p className="s-body mt-8">Cancel with 30 days&apos; notice. No setup fee.</p>
        </section>

        {/* How it starts */}
        <section className="s-wrap s-section s-rule" aria-labelledby="start-h2">
          <h2 id="start-h2" className="s-h2 mb-12 md:mb-16">How it starts</h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {steps.map(([title, body], i) => (
              <li key={title} className="s-cell reveal">
                <p className="s-num mb-6">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="s-h3 mb-3">{title}</h3>
                <p className="s-body">{body}</p>
              </li>
            ))}
          </ol>
          <a href={SAMPLE_WEEK} className="s-btn s-btn-solid mt-12">Ask for a sample week</a>
        </section>

        {/* What I won't promise, and proof */}
        <section className="s-wrap s-section s-rule" aria-labelledby="promise-h2">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <h2 id="promise-h2" className="s-h2 md:col-span-5 reveal">What I won&apos;t promise</h2>
            <p className="s-body md:col-span-6 md:col-start-7 md:text-lg md:leading-relaxed reveal">
              Nobody can promise you a spot on Google, and I won&apos;t. Google decides the order of its results. What I can do is keep your profile active and accurate, and show you your own numbers every month.
            </p>
          </div>
          <div className="s-plate reveal mt-16 md:mt-24 px-6 py-10 md:px-16 md:py-14">
            <p className="s-eyebrow mb-4">Proof</p>
            <p className="s-quote">I manage the Yelp page for Sun&apos;s Nail Studio in Wilmington.</p>
          </div>
        </section>

        {/* Questions */}
        <section className="s-wrap s-section s-rule" aria-labelledby="q-h2">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <h2 id="q-h2" className="s-h2 md:col-span-4">Questions</h2>
            <div className="s-faq md:col-span-7 md:col-start-6">
              {faqs.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <div><p className="s-body">{a}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Small print: must stay readable, never hidden */}
        <section className="s-wrap pb-[88px] md:pb-[136px]" aria-labelledby="print-h2">
          <div className="border border-[var(--s-hair)] bg-[#fffdfa] px-6 py-8 md:px-10 md:py-10 max-w-4xl">
            <h2 id="print-h2" className="s-eyebrow mb-4">Small print</h2>
            <p className="s-body text-[var(--s-ink)]">
              Your Google Business Profile itself is free. The monthly fee is for my work managing it. Forge Studio is not affiliated with Google or Yelp.{" "}
              <a href={GOOGLE_GUIDE} target="_blank" rel="noopener noreferrer" className="s-textlink">
                Read Google&apos;s guide to working with a third party
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <Reveals />
    </>
  )
}
