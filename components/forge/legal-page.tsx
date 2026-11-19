import { SiteHeader } from "@/components/site/header"
import { SiteFooter } from "@/components/site/footer"

export type LegalSection = { heading: string; body: string[] }

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
}) {
  return (
    <>
      <SiteHeader />
      <main>
        <article className="s-wrap pt-10 md:pt-20 pb-[88px] md:pb-[136px]">
          <div className="max-w-2xl">
            <p className="s-eyebrow mb-5">Legal</p>
            <h1 className="s-h2 mb-4">{title}</h1>
            <p className="text-sm text-[var(--s-muted)] mb-10">Last updated {updated}</p>
            <p className="s-body text-[var(--s-ink)] md:text-lg md:leading-relaxed mb-12">{intro}</p>

            {sections.map((s) => (
              <section key={s.heading} className="mb-10 border-t border-[var(--s-hair)] pt-6">
                <h2 className="s-h3 mb-4">{s.heading}</h2>
                {s.body.map((p, i) => (
                  <p key={i} className="s-body mb-3">
                    {p}
                  </p>
                ))}
              </section>
            ))}

            <p className="s-body border-t border-[var(--s-hair)] pt-6">
              Questions? Email{" "}
              <a href="mailto:hello@forgestudio.one" className="s-textlink">
                hello@forgestudio.one
              </a>
              .
            </p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
