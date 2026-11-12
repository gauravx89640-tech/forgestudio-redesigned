import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ScrollProgress } from '@/components/forge/scroll-progress'
import { ViewCursor } from '@/components/forge/view-cursor'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Forge Studio — Web Design for Local Businesses',
  description: 'Clean, modern websites for cafés, bakeries, gyms and local businesses — starting from $499. Built fast, built to convert.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-forge-dark`}>
      <head>
        {/* With JavaScript off, scroll reveals can never fire, so show everything. */}
        <noscript>
          <style>{".scroll-reveal,.project-card,.scroll-reveal h2{opacity:1!important;transform:none!important;clip-path:none!important}"}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased">
        <ScrollProgress />
        {children}
        <ViewCursor />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
