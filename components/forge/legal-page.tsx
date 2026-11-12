import { Navbar } from "@/components/forge/navbar"
import { Footer } from "@/components/forge/footer"

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
    <main>
      <Navbar />
      <article className="w-full bg-forge-lavender pt-36 pb-24 px-6 md:px-12">
        <div className="max-w-2xl mx-auto">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-forge-purple-medium mb-3">Legal</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-forge-purple-strong mb-4 text-balance">
            {title}
          </h1>
          <p className="font-sans text-sm text-forge-purple-medium mb-10">Last updated {updated}</p>
          <p className="font-sans text-base md:text-lg leading-relaxed text-forge-ink/80 mb-12">{intro}</p>

          {sections.map((s) => (
            <section key={s.heading} className="mb-10 border-t border-forge-divider pt-6">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-forge-purple-strong mb-4">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="font-sans text-base leading-relaxed text-forge-ink/75 mb-3">
                  {p}
                </p>
              ))}
            </section>
          ))}

          <p className="font-sans text-base text-forge-ink/75 border-t border-forge-divider pt-6">
            Questions? Email{" "}
            <a href="mailto:hello@forgestudio.one" className="underline underline-offset-4 text-forge-purple-strong">
              hello@forgestudio.one
            </a>
            .
          </p>
        </div>
      </article>
      <Footer />
    </main>
  )
}
