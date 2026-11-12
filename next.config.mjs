import path from 'node:path'
import { fileURLToPath } from 'node:url'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the project root. A stray lockfile in a parent folder otherwise makes
  // Next.js treat that folder as the root, and edits stop being picked up in dev.
  turbopack: {
    root: path.dirname(fileURLToPath(import.meta.url)),
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
