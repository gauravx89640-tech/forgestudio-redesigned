import type { Metadata } from "next"
import { SiteHeader } from "@/components/site/header"
import { SiteFooter } from "@/components/site/footer"
import { Reveals } from "@/components/site/reveal"
import { BrowserFrame, Caption, workLinkProps } from "@/components/site/frames"
import { ContactForm } from "@/components/site/contact-form"
import { projects } from "@/lib/work"

export const metadata: Metadata = {
  title: "Forge Studio · Websites for Beauty Pros",
  description:
    "Websites for hair stylists, nail artists, lash and brow artists, estheticians and barbers in suites and studios. Sites start at $549.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Forge Studio · Websites for Beauty Pros",
    description:
      "Websites for hair stylists, nail artists, lash and brow artists, estheticians and barbers in suites and studios. Sites start at $549.",
    url: "/",
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "A website as good as your work. Forge Studio" }],
  },
}

const why = [
  ["You deal with me", "No account managers and no hand-offs. One person, from your first message to launch."],
  ["Built around how you work", "Your services, your prices, your photos. Happy with your booking system? It stays."],
  ["Ready in days", "Most sites are live within 5 to 14 days of getting your content and payment."],
  ["One clear price", "You see the full price before I start. No monthly fee to keep your site running."],
  ["It's yours", "Once your site is paid in full, the site, its code and your domain are yours. No lock-in."],
  ["Help after launch", "Your first 30 days of updates are included. After that, each change request is $25."],
]

const steps = [
  ["Tell me about your business.", "Send me a note with your business name and what you want your site to do."],
  ["See it first.", "Sites start at $549. If that works for you, I'll design your homepage so you can see it before you pay anything."],
  ["Approve it and go live.", "Pay half to start and half on delivery. I finish the site, you review it, and it goes live."],
]

const plans = [
  { name: "Starter", price: "$549", featured: false, features: ["1 page", "Mobile friendly", "Contact form", "5-day delivery"] },
  { name: "Business", price: "$899", featured: true, badge: "Recommended", features: ["Up to 5 pages", "Contact form + Maps", "Basic SEO", "10-day delivery"] },
  { name: "Premium", price: "$1,499", featured: false, features: ["Up to 10 pages", "Custom animations", "Copywriting included", "Priority support", "14-day delivery"] },
]

const faqs = [
  ["How long does it take?", "Starter takes 5 days, Business 10 days and Premium 14 days, counted from when I have your content and payment."],
  ["Will my site work on mobile?", "Yes. Every site I build works on phones, tablets and desktops."],
  ["Can I keep my booking system?", "Yes. I connect the one you already use."],
  ["Do you help with the writing?", "Copywriting is included in Premium. For Starter and Business, I can help with your copy for a small additional fee."],
  ["What if I want changes after it's built?", "One round of revisions is included in every plan. After launch, your first 30 days of updates are included. After that, each change request is $25, and several small edits sent together count as one request."],
  ["What do I actually own?", "Everything. Once your site is paid in full, the site, its code and your domain are yours. No lock-in contracts, and no monthly fee to keep it running."],
]

export default function Home() {
  const { mary, maui, victoria, alyzel, lumiere } = projects

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero: the promise, then Mary's live site shown large */}
        <section className="s-wrap pt-6 md:pt-14" aria-labelledby="hero-h1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6 items-end">
            <div className="md:col-span-8">
              <p className="s-eyebrow mb-5 md:mb-7">Web design for beauty pros</p>
              <h1 id="hero-h1" className="s-display">
                A website as good as <em>your work.</em>
              </h1>
            </div>
            <div className="md:col-span-4 md:pb-3">
              <p className="s-lede">
                I design websites for hair stylists, nail artists, lash and brow artists, estheticians and barbers in suites and studios. Sites start at $549.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <a href="#work" className="s-btn s-btn-solid">See my work</a>
                <a href="#contact" className="s-btn s-btn-outline">Get a quote</a>
              </div>
            </div>
          </div>

          <figure className="s-hero-art mt-12 md:mt-16">
            <div className="s-plate px-[18px] pt-7 pb-14 md:pl-[7%] md:pr-[14%] md:pt-16 md:pb-[88px]">
              <a {...workLinkProps(mary)} className="block" aria-label={`Visit ${mary.name} (opens in a new tab)`}>
                <BrowserFrame project={mary} sizes="(min-width: 768px) 72vw, 92vw" priority />
              </a>
              <div className="s-phone absolute right-[10px] bottom-[18px] w-[26%] max-w-[230px] md:right-[5%] md:bottom-10 md:w-[17%]" aria-hidden="true">
                <img src="/images/work/mary-phone.webp" width={780} height={1560} alt="" loading="lazy" decoding="async" />
              </div>
            </div>
            <figcaption>
              <Caption project={mary} fig={1} />
            </figcaption>
          </figure>
        </section>

        {/* Recent work */}
        <section id="work" className="s-wrap s-section" aria-labelledby="work-h2">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 md:mb-16">
            <h2 id="work-h2" className="s-h2">Recent work</h2>
            <a href="/portfolio" className="s-btn s-btn-outline self-start sm:self-auto">See all work</a>
          </div>

          {/* Mary is Fig. 1 in the hero, so the grid carries on from Fig. 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
            {[maui, victoria, alyzel, lumiere].map((p, i) => (
              <a key={p.slug} {...workLinkProps(p)} className="s-work-card reveal block">
                <span className="s-plate block p-5 md:p-10">
                  <BrowserFrame project={p} sizes="(min-width: 768px) 44vw, 92vw" />
                </span>
                <Caption project={p} fig={2 + i} blurb />
              </a>
            ))}
          </div>
        </section>

        {/* Statement */}
        <section className="s-wrap s-section s-rule" aria-label="Statement">
          <div className="reveal max-w-5xl">
            <p className="s-h2">
              Clients look you up before they book. I make sure what they find looks as good as <em>your work.</em>
            </p>
            <a href="#contact" className="s-btn s-btn-solid mt-10">Start your project</a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="s-wrap s-section s-rule" aria-labelledby="about-h2">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <h2 id="about-h2" className="s-h2 md:col-span-5 reveal">Hi, I&apos;m Gaurav.</h2>
            <p className="s-body md:col-span-6 md:col-start-7 md:text-lg md:leading-relaxed reveal">
              I&apos;m the founder of Forge Studio. I design websites for beauty pros and look after their Google and Yelp pages. You&apos;ll deal with me directly, from the first message to launch day and after it. I&apos;ll tell you plainly what will help your business and what won&apos;t.
            </p>
          </div>
        </section>

        {/* Why work with me */}
        <section id="why-us" className="s-wrap s-section s-rule" aria-labelledby="why-h2">
          <h2 id="why-h2" className="s-h2 mb-12 md:mb-16">Why work with me</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {why.map(([title, body], i) => (
              <div key={title} className="s-cell reveal">
                <p className="s-num mb-6">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="s-h3 mb-3">{title}</h3>
                <p className="s-body">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="process" className="s-wrap s-section s-rule" aria-labelledby="how-h2">
          <h2 id="how-h2" className="s-h2 mb-12 md:mb-16">How it works</h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {steps.map(([title, body], i) => (
              <li key={title} className="s-cell reveal">
                <p className="s-num mb-6">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="s-h3 mb-3">{title}</h3>
                <p className="s-body">{body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Pricing */}
        <section id="pricing" className="s-wrap s-section s-rule" aria-labelledby="pricing-h2">
          <h2 id="pricing-h2" className="s-h2 mb-12 md:mb-16">Simple, fair pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div key={p.name} className="s-price-card reveal" data-featured={p.featured}>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <p className="s-eyebrow">{p.name}</p>
                  {p.badge && <span className="s-tag border-current">{p.badge}</span>}
                </div>
                <p className="mb-8">
                  <span className="s-price-from">from</span>
                  <span className="s-price">{p.price}</span>
                </p>
                <ul className="s-check flex-1 mb-8">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a href="#contact" className={`s-btn ${p.featured ? "s-btn-light" : "s-btn-outline"}`}>Get started</a>
              </div>
            ))}
          </div>
          <p className="s-body mt-8">Half to start, half on delivery. Your first 30 days of updates are included.</p>
        </section>

        {/* Testimonial: text only */}
        <section className="s-wrap s-section s-rule" aria-label="Testimonial">
          <figure className="reveal max-w-5xl">
            <blockquote className="s-quote">
              &ldquo;The site is doing great and Sun is very happy with the results. We have already noticed an increase in phone calls since the launch.&rdquo;
            </blockquote>
            <figcaption className="mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-4">
              <span className="text-sm">
                <span className="font-semibold">Darby Day</span>
                <span className="text-[var(--s-muted)]">, Sun&apos;s Nail Studio</span>
              </span>
              <a href="/work/suns-nail-studio" className="s-textlink text-sm">Read the case study →</a>
            </figcaption>
          </figure>
        </section>

        {/* Local Presence teaser (no price here) */}
        <section className="s-wrap pb-[88px] md:pb-[136px]" aria-labelledby="lp-h2">
          <div className="s-plate reveal px-6 py-14 md:px-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <h2 id="lp-h2" className="s-h2 md:col-span-6">Happy with your website?</h2>
            <div className="md:col-span-5 md:col-start-8">
              <p className="s-body mb-6 text-[var(--s-ink)]">
                I can look after your Google and Yelp pages each month instead, so they stay active and accurate while you work.
              </p>
              <a href="/local-presence" className="s-textlink">See how Local Presence works →</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="s-wrap s-section s-rule" aria-labelledby="faq-h2">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <h2 id="faq-h2" className="s-h2 md:col-span-4">FAQ</h2>
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

        {/* Contact */}
        <section id="contact" className="s-wrap s-section s-rule scroll-mt-16" aria-labelledby="contact-h2">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <h2 id="contact-h2" className="s-h2 mb-6">Let&apos;s talk about your site</h2>
              <p className="s-body mb-6 max-w-[40ch]">
                Send me a message and I&apos;ll get back to you within one business day. No pushy sales calls.
              </p>
              <a href="mailto:hello@forgestudio.one" className="s-textlink">hello@forgestudio.one</a>
            </div>
            <div className="md:col-span-7">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <Reveals />
    </>
  )
}
