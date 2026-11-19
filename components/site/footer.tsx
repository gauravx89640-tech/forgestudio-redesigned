import { Wordmark } from "./header"

const columns: { title: string; links: [string, string][] }[] = [
  {
    title: "Need Help?",
    links: [
      ["Contact Us", "/#contact"],
      ["FAQ", "/#faq"],
      ["How It Works", "/#process"],
    ],
  },
  {
    title: "Information",
    links: [
      ["About Us", "/#about"],
      ["Pricing", "/#pricing"],
      ["Local Presence", "/local-presence"],
      ["Privacy Policy", "/privacy"],
      ["Terms of Service", "/terms"],
    ],
  },
  {
    title: "Work",
    links: [
      ["All work", "/portfolio"],
      ["Sun's Nail Studio case study", "/work/suns-nail-studio"],
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="s-footer" aria-label="Site footer">
      <div className="s-wrap py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 flex flex-col gap-5">
            <a href="/" aria-label="Forge Studio, home" className="self-start">
              <Wordmark />
            </a>
            <a href="mailto:hello@forgestudio.one" className="s-foot-link">hello@forgestudio.one</a>
          </div>
          {columns.map((c) => (
            <div key={c.title} className="md:col-span-2 md:[&:nth-child(2)]:col-start-7">
              <p className="s-eyebrow mb-5">{c.title}</p>
              <ul className="flex flex-col gap-3">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="s-foot-link">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-16 pt-6 border-t border-white/10 text-xs tracking-wide text-white/45">
          © {new Date().getFullYear()} Forge Studio
        </p>
      </div>
    </footer>
  )
}
