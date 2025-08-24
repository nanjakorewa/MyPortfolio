import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import ThemeToggle from '@/components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | nanjakorewa',
  description: 'Developer & Designer Portfolio',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Portfolio | nanjakorewa',
    description: 'Developer & Designer Portfolio',
    url: 'https://example.com',
    siteName: 'Portfolio',
    type: 'website',
  },
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen relative overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* 背景エフェクト */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full 
              bg-[radial-gradient(closest-side,var(--color-accent)/25,transparent)] blur-2xl"
            />
            <div
              className="absolute inset-0 
              bg-[linear-gradient(to_right,transparent_95%,rgba(0,0,0,.03)_95%),linear-gradient(to_bottom,transparent_95%,rgba(0,0,0,.03)_95%)] 
              bg-[length:24px_24px]"
            />
          </div>

          {/* ヘッダー */}
          <header className="sticky top-0 z-40 backdrop-blur bg-bg/80 border-b border-[--color-line]">
            <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
              <a href="/" className="font-semibold tracking-wide">
                nanjakorewa
              </a>
              <div className="flex items-center gap-6 text-sm">
                <a href="/projects" className="opacity-80 hover:opacity-100">
                  Projects
                </a>
                <a href="/about" className="opacity-80 hover:opacity-100">
                  About
                </a>
                <a href="/contact" className="opacity-80 hover:opacity-100">
                  Contact
                </a>
                <ThemeToggle />
              </div>
            </nav>
          </header>

          {/* メイン */}
          <main className="mx-auto max-w-6xl px-4 py-12">{children}</main>

          {/* フッター */}
          <footer className="border-t border-[--color-line] py-10 text-center text-sm opacity-70">
            © {new Date().getFullYear()} nanjakorewa ·{' '}
            <a className="a-like" href="/contact">
              Get in touch
            </a>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
