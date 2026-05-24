"use client"

import { ReactNode } from "react"

interface AnimatedBgProps {
  type: "mesh" | "blob" | "gradient" | "float-accent"
  intensity?: "low" | "medium" | "high"
  children: ReactNode
  className?: string
}

export function AnimatedBg({
  type,
  intensity = "medium",
  children,
  className = "",
}: AnimatedBgProps) {
  // Determine animation class and intensity modifiers
  const animationMap = {
    mesh: "animate-mesh-shift",
    blob: "animate-blob-drift",
    "float-accent": "animate-float-accent",
    gradient: "animate-glow-pulse",
  }

  const intensityOpacity = {
    low: "opacity-20",
    medium: "opacity-40",
    high: "opacity-60",
  }

  const animationClass = animationMap[type]
  const opacityClass = intensityOpacity[intensity]

  return (
    <div className={`relative ${className}`}>
      {/* Animated background layer */}
      {type === "mesh" && (
        <div
          className={`absolute inset-0 pointer-events-none ${animationClass}`}
          aria-hidden="true"
        >
          <svg
            className={`w-full h-full ${opacityClass}`}
            viewBox="0 0 1200 800"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="mesh-pattern"
                x="0"
                y="0"
                width="200"
                height="200"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 0 0 L 100 0 L 100 100 L 0 100 Z"
                  fill="none"
                  stroke="#D8CBB8"
                  strokeWidth="1.5"
                  opacity="0.4"
                />
                <path
                  d="M 0 0 L 100 100"
                  fill="none"
                  stroke="#D8CBB8"
                  strokeWidth="1"
                  opacity="0.25"
                />
              </pattern>
            </defs>
            <rect width="1200" height="800" fill="url(#mesh-pattern)" />
          </svg>
        </div>
      )}

      {type === "blob" && (
        <div
          className={`absolute inset-0 pointer-events-none ${animationClass}`}
          aria-hidden="true"
        >
          <div
            className={`absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl ${opacityClass}`}
            style={{
              background:
                "radial-gradient(circle, rgba(200, 169, 110, 0.3) 0%, rgba(232, 228, 220, 0.1) 100%)",
            }}
          />
          <div
            className={`absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl ${opacityClass}`}
            style={{
              background:
                "radial-gradient(circle, rgba(216, 203, 184, 0.25) 0%, rgba(244, 239, 231, 0.05) 100%)",
            }}
          />
        </div>
      )}

      {type === "gradient" && (
        <div
          className={`absolute inset-0 pointer-events-none ${animationClass}`}
          aria-hidden="true"
        >
          <div
            className={`absolute inset-0 ${opacityClass}`}
            style={{
              background: `linear-gradient(135deg, 
                rgba(216, 203, 184, 0.25) 0%, 
                rgba(200, 169, 110, 0.15) 50%, 
                rgba(232, 228, 220, 0.2) 100%)`,
            }}
          />
        </div>
      )}

      {type === "float-accent" && (
        <div
          className={`absolute inset-0 pointer-events-none ${animationClass}`}
          aria-hidden="true"
        >
          <div
            className={`absolute top-10 right-1/4 w-40 h-40 rounded-full blur-2xl ${opacityClass}`}
            style={{
              background:
                "radial-gradient(circle, rgba(200, 169, 110, 0.35) 0%, transparent 70%)",
            }}
          />
          <div
            className={`absolute bottom-20 left-1/3 w-56 h-56 rounded-full blur-3xl ${opacityClass}`}
            style={{
              background:
                "radial-gradient(circle, rgba(216, 203, 184, 0.2) 0%, transparent 60%)",
            }}
          />
        </div>
      )}

      {/* Content layer */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
