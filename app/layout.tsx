import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { Hanken_Grotesk } from 'next/font/google'
import './globals.css'
import './site.css'

// Display face: Zodiak (Indian Type Foundry, via Fontshare, free licence), self-hosted.
const zodiak = localFont({
  src: [
    { path: './fonts/Zodiak-Light.woff2', weight: '300', style: 'normal' },
    { path: './fonts/Zodiak-LightItalic.woff2', weight: '300', style: 'italic' },
    { path: './fonts/Zodiak-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Zodiak-Italic.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-zodiak',
  display: 'swap',
})

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://forgestudio.one'),
  title: 'Forge Studio · Websites for Beauty Pros',
  description:
    'Websites for hair stylists, nail artists, lash and brow artists, estheticians and barbers in suites and studios. Sites start at $549.',
  openGraph: { siteName: 'Forge Studio', type: 'website', locale: 'en_US' },
  twitter: { card: 'summary_large_image' },
}

export const viewport: Viewport = {
  themeColor: '#f9f6f1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${zodiak.variable} ${hanken.variable}`}>
      <head>
        {/* With JavaScript off, scroll reveals can never fire, so show everything. */}
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
