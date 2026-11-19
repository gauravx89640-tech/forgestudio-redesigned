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
const GOOGLE_TIPS = "https://support.google.com/business/answer/7091"
const GOOGLE_GUIDE = "https://support.google.com/business/answer/7163406"

// Copy is final (Local Presence brief, 19 Nov 2026). The photo-batch, weekly-review and
// monthly-recommendation items are in docs/pricing.md as of 2026-11-19, so they are published.
type Item = [lead: string, rest: string]

const google: Item[] = [
  ["Setup in your first week:", "a full review of your profile — categories, services and prices, description, hours, holiday hours, booking link and attributes — with every gap fixed. Your starting numbers are recorded before anything changes."],
  ["Up to 4 posts a month,", "written from your own photos: a recent set or style, a service you want booked, an opening in your week, your holiday hours."],
  ["Up to 2 photo batches a month,", "so the newest picture on your profile is always a recent one."],
  ["Reviews checked every week.", "A reply is drafted for every new review, five-star or critical, sent to you, and posted only once you approve it."],
  ["Details kept current:", "services and prices, hours, holiday hours, booking link and description, updated whenever something changes."],
  ["A monthly report:", "profile views, calls, website clicks, direction requests and bookings, each compared with the month before."],
  ["One recommendation a month:", "the single change most worth making next, such as a photo to take or a service to feature."],
]

const yelp: Item[] = [
  ["Setup in your first week:", "a full review of your page — description, specialties, services, hours, holiday hours, links and booking information — with every gap fixed. Your starting numbers are recorded before anything changes."],
  ["Up to 2 photo batches a month,", "each photo captioned with the service it shows."],
  ["Reviews checked every week.", "A reply is written for every new review, ready for you to post from your own account, because Yelp shows the name of whoever posts it."],
  ["Details kept current:", "description, specialties, hours, holiday hours and links, updated whenever something changes."],
  ["A monthly report", "of the numbers Yelp gives you, each compared with the month before."],
  ["One recommendation a month.", ""],
]

const why = [
  "Google's own advice: businesses with complete and accurate information are more likely to show up in local search results.",
  "Google also says that replying to reviews shows you value your clients' feedback, and that helpful replies can help a business stand out.",
  "An answered review, glowing or critical, tells the next person reading that someone is paying attention.",
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

function Included({ title, price, items }: { title: string; price: string; items: Item[] }) {
  return (
    <div className="reveal">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 pb-4">
        <h3 className="s-h3">{title}</h3>
        <p className="text-sm text-[var(--s-muted)] whitespace-nowrap">{price}</p>
      </div>
      <ul className="s-check border-t border-[var(--s-hair)]">
        {items.map(([lead, rest]) => (
          <li key={lead}>
            <strong className="font-semibold">{lead}</strong>
            {rest && <span className="text-[var(--s-muted)]"> {rest}</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}

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
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mt-6">
                <a href={SAMPLE_WEEK} className="s-btn s-btn-solid">Ask for a sample week</a>
                <a href="#price" className="s-textlink text-sm">From $125 a month</a>
              </div>
            </div>
          </div>
        </section>

        {/* How it brings you more leads */}
        <section className="s-wrap s-section s-rule" aria-labelledby="leads-h2">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 reveal">
              <h2 id="leads-h2" className="s-h2 mb-6">How it brings you more leads</h2>
              <p className="s-body md:text-lg md:leading-relaxed text-[var(--s-ink)]">
                An active, accurate profile with answered reviews gives more of the people who find you a reason to get in touch. Here&apos;s why:
              </p>
            </div>
            <div className="md:col-span-6 md:col-start-7 reveal">
              <ol className="flex flex-col">
                {why.map((w, i) => (
                  <li key={i} className="s-cell pb-6 flex gap-5">
                    <span className="s-num pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <span className="s-body text-[var(--s-ink)]">{w}</span>
                  </li>
                ))}
              </ol>
              <a href={GOOGLE_TIPS} target="_blank" rel="noopener noreferrer" className="s-textlink text-sm">
                Google&apos;s tips for your Business Profile
              </a>
            </div>
          </div>
        </section>

        {/* What's included: the centre of the page */}
        <section id="included" className="s-wrap s-section s-rule" aria-labelledby="inc-h2">
          <h2 id="inc-h2" className="s-h2 mb-12 md:mb-16">What&apos;s included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
            <Included title="Google Business Profile" price="$125 a month" items={google} />
            <Included title="Yelp" price="$125 a month" items={yelp} />
          </div>
          <p className="reveal mt-12 border border-[var(--s-hair)] bg-[#fffdfa] px-6 py-5 text-[15px] leading-relaxed">
            <strong className="font-semibold">Both platforms — $250 a month:</strong>{" "}
            <span className="text-[var(--s-muted)]">everything above, with one combined monthly report.</span>
          </p>
        </section>

        {/* Price */}
        <section id="price" className="s-wrap s-section s-rule scroll-mt-16" aria-labelledby="price-h2">
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

        {/* What I won't promise */}
        <section className="s-wrap s-section s-rule" aria-labelledby="promise-h2">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <h2 id="promise-h2" className="s-h2 md:col-span-5 reveal">What I won&apos;t promise</h2>
            <p className="s-body md:col-span-6 md:col-start-7 md:text-lg md:leading-relaxed reveal">
              Nobody can promise you a spot on Google or an exact number of new clients, and I won&apos;t. Google decides the order of its results. What I can do is keep your profile active and accurate, and show you your own numbers every month.
            </p>
          </div>

          {/* Who looks after it */}
          <div className="s-plate reveal mt-16 md:mt-24 px-6 py-10 md:px-16 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-6">
            <h2 className="s-eyebrow md:col-span-3 pt-2">Who looks after it</h2>
            <p className="s-quote text-[clamp(24px,3vw,40px)] md:col-span-9">
              My websites for beauty studios are live in North Carolina and Colorado. Every month I also look after the Yelp page for Sun&apos;s Nail Studio in Wilmington: new photos, current details and holiday hours, and review replies.
            </p>
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
