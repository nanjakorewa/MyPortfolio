import Link from 'next/link'

const extensions = [
  {
    name: 'RemTime',
    description:
      '時間管理をサポートするChrome拡張機能。リマインダーやタイマー機能で日々の作業を効率化します。',
    storeUrl:
      'https://chromewebstore.google.com/detail/remtime/eimpmoaipllafkeiaecmdanofhdpelfm?hl=ja',
    accentIndex: 1,
  },
  {
    name: 'X不快コンテンツブロッカー',
    description:
      'X（旧Twitter）上の不快なコンテンツを自動的にブロック・非表示にするChrome拡張機能。快適なタイムラインを実現します。',
    storeUrl:
      'https://chromewebstore.google.com/detail/x%E4%B8%8D%E5%BF%AB%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%83%96%E3%83%AD%E3%83%83%E3%82%AB%E3%83%BC/mijlbeiihllmmhhoaacjbfnbicoibbhd?hl=ja',
    accentIndex: 2,
  },
]

export default function ExtensionsPage() {
  return (
    <section>
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Chrome Extensions</h1>
        <p className="text-[--color-muted] mt-3 text-lg">
          nanjakorewa が開発・公開している Chrome 拡張機能です。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {extensions.map((ext) => (
          <a
            key={ext.name}
            href={ext.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl border border-[--color-line]/40 p-8 transition-all hover:border-[--color-accent]/50 hover:bg-[--color-accent]/5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: `var(--color-accent-${ext.accentIndex})` }}
              >
                {ext.name[0]}
              </div>
              <h2 className="text-xl font-bold group-hover:text-[--color-accent] transition">
                {ext.name}
              </h2>
            </div>
            <p className="text-sm text-[--color-muted] leading-relaxed">{ext.description}</p>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[--color-accent]">
              Chrome Web Store で見る
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      {/* 関連リンク */}
      <div className="mt-16 pt-10 border-t border-[--color-line]/30">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[--color-muted] mb-4">
          拡張機能に関する情報
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href="/extensions/privacy"
            className="flex items-center gap-4 px-5 py-4 rounded border border-[--color-line]/40 hover:bg-[--color-accent]/5 hover:border-[--color-accent]/30 transition"
          >
            <span className="text-sm font-bold text-[--color-ink]">Privacy Policy</span>
            <span className="text-sm text-[--color-muted]">プライバシーポリシー</span>
          </Link>
          <Link
            href="/extensions/contact"
            className="flex items-center gap-4 px-5 py-4 rounded border border-[--color-line]/40 hover:bg-[--color-accent]/5 hover:border-[--color-accent]/30 transition"
          >
            <span className="text-sm font-bold text-[--color-ink]">Contact</span>
            <span className="text-sm text-[--color-muted]">拡張機能に関するお問い合わせ</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
