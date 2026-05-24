export function Footer() {
  return (
    <footer className="w-full bg-forge-dark" aria-label="Site footer">
      {/* Ghost FORGE watermark */}
      <div
        className="w-full overflow-hidden flex items-center justify-center py-12 md:py-20 select-none"
        aria-hidden="true"
      >
        <span
          className="font-serif font-bold leading-none text-center"
          style={{
            fontSize: "clamp(80px, 20vw, 220px)",
            WebkitTextStroke: "2px rgba(255,255,255,0.22)",
            color: "transparent",
            letterSpacing: "-0.02em",
          }}
        >
          FORGE
        </span>
      </div>

      {/* Columns */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-10 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-white/40 mb-4">
            Need Help?
          </p>
          <ul className="flex flex-col gap-2.5">
            {["Contact Us", "FAQ", "How It Works"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-sans text-sm text-white/60 hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-white/40 mb-4">
            Information
          </p>
          <ul className="flex flex-col gap-2.5">
            {["About Us", "Pricing", "Privacy Policy"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-sans text-sm text-white/60 hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-white/40 mb-4">
            Contact
          </p>
          <a
            href="mailto:hello@forgestudio.one"
            className="font-sans text-sm text-white/60 hover:text-white transition-colors"
          >
            hello@forgestudio.one
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/8 py-5 px-6 md:px-12">
        <p className="font-sans text-xs text-white/30 text-center">
          © 2026 Forge Studio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
