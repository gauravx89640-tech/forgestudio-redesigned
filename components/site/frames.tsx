import { type Project, label } from "@/lib/work"

// A site screenshot in a thin browser frame.
export function BrowserFrame({
  project,
  sizes = "(min-width: 768px) 60vw, 92vw",
  priority = false,
}: {
  project: Project
  sizes?: string
  priority?: boolean
}) {
  return (
    <span className="s-frame">
      <span className="s-frame-bar" aria-hidden="true">
        <i /><i /><i /><b>{project.domain}</b>
      </span>
      <img
        src={project.image}
        srcSet={`${project.image900} 900w, ${project.image} 1600w`}
        sizes={sizes}
        width={1600}
        height={1000}
        alt={project.alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
      />
    </span>
  )
}

// Gallery-style caption under a piece of work. The honesty label is always visible.
export function Caption({ project, fig, blurb = false }: { project: Project; fig?: number; blurb?: boolean }) {
  return (
    <span className="block">
      <span className="s-caption">
        {fig !== undefined && <span>Fig. {fig}</span>}
        <span>{project.name}</span>
        <span className="s-caption-muted">{project.category}</span>
        <span className="s-tag">{label(project)}</span>
      </span>
      {blurb && <span className="block s-body mt-3 max-w-[52ch]">{project.blurb}</span>}
    </span>
  )
}

export function workLinkProps(project: Project) {
  return project.external
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : { href: project.url }
}
