"use client"

import { useEffect, useState } from "react"

// Review-only control: switch the display face on the bake-off page. ?type=caslon|zodiak|boska|…
const TYPES = [
  { id: "caslon", label: "Libre Caslon" },
  { id: "zodiak", label: "Zodiak" },
  { id: "boska", label: "Boska" },
  { id: "gambetta", label: "Gambetta" },
  { id: "bespoke", label: "Bespoke Serif" },
  { id: "erode", label: "Erode" },
  { id: "sentient", label: "Sentient" },
  { id: "bodoni", label: "Bodoni Moda" },
] as const

export function DirectionSwitcher() {
  const [type, setType] = useState<string>("caslon")
  const [open, setOpen] = useState(true)

  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    const t = q.get("type")
    if (t && TYPES.some((x) => x.id === t)) setType(t)
    if (q.get("ui") === "off") setOpen(false)
  }, [])

  useEffect(() => {
    document.querySelector<HTMLElement>(".dir-a")?.setAttribute("data-type", type)
    const url = new URL(window.location.href)
    url.searchParams.set("type", type)
    window.history.replaceState(null, "", url)
  }, [type])

  if (!open) return null

  return (
    <div className="dir-switcher" role="group" aria-label="Review controls">
      <div className="dir-switcher-row">
        <span className="dir-switcher-k">Direction</span>
        <button type="button" aria-pressed="true">A · The Gallery</button>
        <button type="button" disabled title="Needs Gaurav's portrait">B · needs portrait</button>
      </div>
      <div className="dir-switcher-row">
        <span className="dir-switcher-k">Type</span>
        {TYPES.map((t) => (
          <button key={t.id} type="button" aria-pressed={type === t.id} onClick={() => setType(t.id)}>
            {t.label}
          </button>
        ))}
      </div>
      <button type="button" className="dir-switcher-hide" onClick={() => setOpen(false)} aria-label="Hide review controls">×</button>
    </div>
  )
}
