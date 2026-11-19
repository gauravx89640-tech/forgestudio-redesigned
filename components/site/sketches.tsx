// Hand-drawn style line illustrations: soft beige shapes underneath, ink lines on top.
// Every line has pathLength=1 so CSS can "draw" it in when its .reveal parent appears
// (only when the visitor allows motion; see .s-sketch in site.css).

type Shape = { d: string; tone?: "blush" | "plate" | "ink" | "ground" }
// A line can carry a solid fill so it hides whatever sits behind it.
type Line = string | [d: string, fill: NonNullable<Shape["tone"]>]
type Sketch = { w: number; h: number; fills: Shape[]; lines: Line[] }

// Path helpers so every line is a <path> and can carry pathLength.
const circle = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${r * 2} 0a${r} ${r} 0 1 0 ${-r * 2} 0`
const rect = (x: number, y: number, w: number, h: number, r = 0) =>
  r
    ? `M${x + r} ${y}h${w - 2 * r}a${r} ${r} 0 0 1 ${r} ${r}v${h - 2 * r}a${r} ${r} 0 0 1 ${-r} ${r}h${-(w - 2 * r)}a${r} ${r} 0 0 1 ${-r} ${-r}v${-(h - 2 * r)}a${r} ${r} 0 0 1 ${r} ${-r}z`
    : `M${x} ${y}h${w}v${h}h${-w}z`
const star = (cx: number, cy: number, r: number) => {
  const pts = Array.from({ length: 10 }, (_, i) => {
    const a = (Math.PI / 5) * i - Math.PI / 2
    const rr = i % 2 ? r * 0.45 : r
    return `${(cx + rr * Math.cos(a)).toFixed(1)} ${(cy + rr * Math.sin(a)).toFixed(1)}`
  })
  return `M${pts.join("L")}z`
}
const stars = (x: number, y: number, r: number, gap: number, n = 5) =>
  Array.from({ length: n }, (_, i) => star(x + i * gap, y, r))

const sketches = {
  // ── Small spot drawings (Why work with me) ─────────────────────────────
  talk: {
    w: 96, h: 96,
    fills: [{ d: circle(42, 42, 27), tone: "blush" }],
    lines: [
      "M20 22h38a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6H36l-11 10v-10h-5a6 6 0 0 1-6-6V28a6 6 0 0 1 6-6z",
      "M24 34h28", "M24 42h18",
      "M70 38h5a6 6 0 0 1 6 6v18a6 6 0 0 1-6 6h-3v9l-10-9H50a6 6 0 0 1-6-6v-3",
    ],
  },
  photos: {
    w: 96, h: 96,
    fills: [{ d: rect(30, 18, 46, 54, 2), tone: "plate" }, { d: circle(36, 40, 18), tone: "blush" }],
    lines: [
      "M16 26l40-6 7 50-40 6z", "M21 31l30-4.5 4 28-30 4.5z",
      "M25 55l9-11 7 7 5-5 8 10", circle(43, 36, 3.5),
      "M64 26l14 4-10 46-24-5",
    ],
  },
  calendar: {
    w: 96, h: 96,
    fills: [{ d: rect(22, 30, 58, 50, 3), tone: "plate" }, { d: circle(62, 60, 12), tone: "blush" }],
    lines: [
      rect(16, 24, 60, 52, 4), "M16 38h60", "M30 18v12", "M62 18v12",
      "M27 50h4", "M41 50h4", "M55 50h4", "M27 64h4", "M41 64h4",
      "M62 59c-4-4-13-2-13 5s9 9 13 5 3-10-3-11",
    ],
  },
  tag: {
    w: 96, h: 96,
    fills: [{ d: circle(46, 50, 26), tone: "blush" }],
    lines: [
      "M50 16h26v26L44 74a5 5 0 0 1-7 0L22 59a5 5 0 0 1 0-7z", circle(66, 27, 4),
      "M68 23c5-11 17-9 18-1", "M35 52l12 12", "M42 45l12 12",
    ],
  },
  key: {
    w: 96, h: 96,
    fills: [{ d: circle(32, 38, 22), tone: "blush" }],
    lines: [
      circle(32, 38, 14), circle(32, 38, 5),
      "M42 48l36 34", "M64 69l8-8", "M71 76l6-6",
    ],
  },
  pencil: {
    w: 96, h: 96,
    fills: [{ d: circle(52, 44, 24), tone: "blush" }],
    lines: [
      "M24 70l6-16 36-36 10 10-36 36z", "M30 54l10 10", "M60 24l10 10", "M24 70l3-8 5 5z",
      "M18 84c8-5 14 4 22 0s14-5 22 0 12 3 18-1",
    ],
  },

  // ── Scenes (How it works) ─────────────────────────────────────────────
  note: {
    w: 280, h: 180,
    fills: [{ d: circle(206, 58, 40), tone: "blush" }, { d: rect(78, 80, 140, 84, 3), tone: "plate" }],
    lines: [
      "M88 96V34h104v62", "M104 50h56", "M104 62h72", "M104 74h44",
      [rect(70, 74, 140, 84, 3), "ground"], "M70 77l70 46 70-46",
      "M228 120l22-22 8 8-22 22-11 3z", "M244 104l8 8",
    ],
  },
  preview: {
    w: 280, h: 180,
    fills: [{ d: rect(52, 38, 200, 128, 4), tone: "plate" }, { d: circle(196, 108, 26), tone: "blush" }],
    lines: [
      rect(40, 26, 200, 128, 4), "M40 44h200", circle(52, 35, 2.5), circle(62, 35, 2.5), circle(72, 35, 2.5),
      "M58 64h80", "M58 76h56", "M58 98h30v10H58z",
      rect(158, 60, 66, 76, 2), "M158 120l18-18 14 14 10-10 24 24",
      "M58 124h70", "M58 134h52",
    ],
  },
  live: {
    w: 280, h: 180,
    fills: [{ d: rect(66, 34, 128, 120, 4), tone: "plate" }, { d: circle(200, 64, 30), tone: "blush" }],
    lines: [
      rect(54, 22, 128, 120, 4), "M54 38h128", "M70 58h60", "M70 70h40", rect(70, 84, 96, 40, 2),
      [rect(168, 70, 52, 92, 8), "ground"], "M188 78h12", "M178 96h32", "M178 106h20", rect(178, 120, 32, 22, 2),
      [circle(206, 50, 18), "ground"], "M197 50l6 6 12-12",
      "M232 26l4 8", "M244 40l-8 3", "M222 22l-1 8",
    ],
  },

  // ── Local Presence ────────────────────────────────────────────────────
  listing: {
    w: 280, h: 220,
    fills: [{ d: circle(96, 112, 64), tone: "blush" }, { d: rect(112, 20, 92, 186, 14), tone: "plate" }],
    lines: [
      [rect(100, 10, 92, 186, 14), "ground"], "M134 20h24",
      "M100 92c22-6 30 8 50-2s26-14 42-6", "M122 30c6 16 4 34 2 72", "M100 56c30 4 50-6 92 2",
      ["M156 42c-9 0-15 6-15 14 0 10 15 22 15 22s15-12 15-22c0-8-6-14-15-14z", "blush"], circle(156, 55, 4),
      "M112 118h68", "M112 130h44",
      ...stars(117, 150, 6, 15),
      "M112 168h60", "M112 178h36",
      ["M200 54h50a6 6 0 0 1 6 6v26a6 6 0 0 1-6 6h-30l-12 10V92h-8", "ground"],
      star(228, 73, 9),
    ],
  },
  sample: {
    w: 280, h: 180,
    fills: [{ d: rect(80, 30, 120, 140, 3), tone: "plate" }, { d: circle(206, 54, 28), tone: "blush" }],
    lines: [
      rect(68, 18, 120, 140, 3), rect(84, 34, 88, 50, 2), "M84 74l20-20 14 14 10-8 24 24",
      circle(150, 48, 5), "M84 100h70", "M84 112h88", "M84 124h50",
      ["M178 30h52a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6h-26l-12 10V66h-14", "ground"], "M190 44h28", "M190 52h18",
    ],
  },
  manager: {
    w: 280, h: 180,
    fills: [{ d: circle(112, 92, 52), tone: "plate" }, { d: circle(188, 70, 18), tone: "blush" }],
    lines: [
      circle(104, 70, 18), "M70 140c0-22 15-36 34-36s34 14 34 36",
      ["M138 140c2-18 12-28 26-28s26 10 26 28z", "ground"], [circle(164, 82, 14), "ground"],
      [circle(196, 54, 14), "ground"], "M196 47v14", "M189 54h14",
      "M60 150h150",
    ],
  },
  report: {
    w: 280, h: 180,
    fills: [{ d: rect(88, 28, 124, 140, 3), tone: "plate" }, { d: circle(96, 52, 26), tone: "blush" }],
    lines: [
      rect(76, 16, 124, 140, 3), "M92 36h56", "M92 46h36",
      "M96 132V102", "M116 132V86", "M136 132V96", "M156 132V78", "M176 132V90",
      "M90 132h98",
      [circle(206, 38, 16), "ground"], "M206 30v8l6 4",
    ],
  },
  studio: {
    w: 280, h: 200,
    fills: [{ d: circle(184, 76, 48), tone: "blush" }, { d: rect(52, 66, 168, 102, 4), tone: "plate" }],
    lines: [
      rect(40, 54, 168, 104, 4), "M40 70h168", circle(52, 62, 2.5), circle(62, 62, 2.5),
      "M58 92h70", "M58 104h48", rect(140, 86, 52, 52, 2), "M140 126l14-14 10 10 8-6 20 18",
      "M24 168h232", "M100 158l-6 10", "M148 158l6 10",
      "M226 136h20v26a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8z", "M246 142h4a5 5 0 0 1 0 10h-4",
      "M232 128c-3-6 3-8 0-14", "M240 128c-3-6 3-8 0-14",
    ],
  },
} satisfies Record<string, Sketch>

export type SketchName = keyof typeof sketches

const tones = {
  blush: "var(--s-blush)",
  plate: "var(--s-plate)",
  ink: "var(--s-ink)",
  ground: "var(--s-ground)",
}

export function Sketch({ name, className = "" }: { name: SketchName; className?: string }) {
  const s: Sketch = sketches[name]
  return (
    <svg
      viewBox={`0 0 ${s.w} ${s.h}`}
      className={`s-sketch ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      {s.fills.map((f, i) => (
        <path key={`f${i}`} d={f.d} fill={tones[f.tone ?? "blush"]} className="fl" />
      ))}
      <g fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        {s.lines.map((line, i) => {
          const [d, fill] = typeof line === "string" ? [line, undefined] : line
          return (
            <path
              key={i}
              d={d}
              pathLength={1}
              className="ln"
              fill={fill ? tones[fill] : undefined}
              style={{ transitionDelay: `${0.15 + i * 0.06}s` }}
            />
          )
        })}
      </g>
    </svg>
  )
}

// A photo with a small credit-free caption slot; stock photos are atmosphere, never clients.
export function Photo({
  name,
  widths,
  ratio,
  alt,
  sizes,
  className = "",
}: {
  name: string
  widths: [number, number]
  ratio: string
  alt: string
  sizes: string
  className?: string
}) {
  const [big, small] = widths
  return (
    <span className={`s-photo block ${className}`} style={{ aspectRatio: ratio }}>
      <img
        src={`/images/stock/${name}-${big}.webp`}
        srcSet={`/images/stock/${name}-${small}.webp ${small}w, /images/stock/${name}-${big}.webp ${big}w`}
        sizes={sizes}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </span>
  )
}
