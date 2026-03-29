import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Script from 'next/script'
import { ThemeProvider } from '@/components/ThemeProvider'
import ThemeToggle from '@/components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

const CANONICAL_ORIGIN = 'https://nanja.space'

export const metadata: Metadata = {
  title: 'Portfolio | nanjakorewa',
  description: 'Developer & Designer Portfolio',
  metadataBase: new URL(`${CANONICAL_ORIGIN}/MyPortfolio/`),
  openGraph: {
    title: 'Portfolio | nanjakorewa',
    description: 'Developer & Designer Portfolio',
    url: `${CANONICAL_ORIGIN}/MyPortfolio/`,
    siteName: 'Portfolio',
    type: 'website',
  },
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  verification: {
    google: 'gFpHz2UyzCSqiou1OnhvT-9U0hsWL-nANiWmjzgm9M4',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        {/* GitHub Pages → nanja.space 即時リダイレクト */}
        <Script id="gh-pages-redirect" strategy="beforeInteractive">
          {`
            if (window.location.hostname === 'nanjakorewa.github.io') {
              window.location.replace('${CANONICAL_ORIGIN}' + window.location.pathname + window.location.search + window.location.hash);
            }
          `}
        </Script>
        <noscript>
          <meta httpEquiv="refresh" content={`0;url=${CANONICAL_ORIGIN}/MyPortfolio/`} />
        </noscript>
      </head>
      <body className={`${inter.className} min-h-screen relative overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* 背景ブロブ装飾 */}
          <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: -1 }}>
            {/* イエローグリーン - 左上 */}
            <div
              className="blob-1 absolute -top-10 -left-10 h-96 w-96 rounded-[40%_60%_70%_30%/40%_50%_60%_50%]"
              style={{ backgroundColor: '#b8d86b', opacity: 0.35 }}
            />
            {/* ピンク - 左下 */}
            <div
              className="blob-2 absolute bottom-10 left-10 h-80 w-80 rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"
              style={{ backgroundColor: '#e85d75', opacity: 0.3 }}
            />
            {/* ブルー - 右上 */}
            <div
              className="blob-3 absolute top-20 right-10 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"
              style={{ backgroundColor: '#3d7a9e', opacity: 0.25 }}
            />
            {/* コーラル - 右中央 */}
            <div
              className="blob-4 absolute top-1/2 right-20 h-72 w-72 rounded-[50%_50%_40%_60%/40%_60%_50%_50%]"
              style={{ backgroundColor: '#f4a261', opacity: 0.3 }}
            />
            {/* イエロー - 中央 */}
            <div
              className="blob-5 absolute top-1/3 left-1/2 h-64 w-64 rounded-full"
              style={{ backgroundColor: '#ffc857', opacity: 0.25 }}
            />
          </div>

          {/* ヘッダー */}
          <header className="sticky top-0 z-40 backdrop-blur-md bg-bg/70">
            <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
              <Link href="/" className="text-lg font-bold tracking-tight hover:text-[--color-accent] transition">
                nanjakorewa
              </Link>
              <div className="flex items-center gap-8 text-sm font-medium">
                <Link href="/projects" className="text-[--color-muted] hover:text-[--color-ink] transition">
                  Projects
                </Link>
                <Link href="/extensions" className="text-[--color-muted] hover:text-[--color-ink] transition">
                  Extensions
                </Link>
                <Link href="/about" className="text-[--color-muted] hover:text-[--color-ink] transition">
                  About
                </Link>
                <Link href="/contact" className="text-[--color-muted] hover:text-[--color-ink] transition">
                  Contact
                </Link>
                <ThemeToggle />
              </div>
            </nav>
          </header>

          {/* メイン */}
          <main className="mx-auto max-w-6xl px-4 py-12">{children}</main>

          {/* フッター */}
          <footer className="py-12 text-center text-sm text-[--color-muted]">
            © {new Date().getFullYear()} nanjakorewa ·{' '}
            <Link className="a-like" href="/contact">
              Get in touch
            </Link>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
