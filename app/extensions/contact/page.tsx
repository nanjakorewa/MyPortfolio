import Link from 'next/link'

export default function ExtensionContactPage() {
  return (
    <section className="max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
      <p className="mt-3 text-lg text-[--color-muted] leading-relaxed">
        Chrome 拡張機能に関するお問い合わせはこちらからお願いいたします。
      </p>

      {/* Google Form CTA */}
      <div className="mt-10 rounded border border-[--color-line]/40 p-8 text-center">
        <h2 className="text-xl font-bold text-[--color-ink]">フォームで問い合わせ</h2>
        <p className="mt-2 text-sm text-[--color-muted] leading-relaxed">
          バグ報告・機能リクエスト・その他のお問い合わせは Google フォームからお送りください。
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc3yvcNNA7afLmCF8lHr-IE1ZdwbdPDji3D2MnIJg3mj18a-Q/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-5 px-8 py-3 rounded bg-accent-2 text-white font-bold text-base shadow-md shadow-accent-2/25 hover:brightness-110 transition-all"
        >
          フォームを開く
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      {/* 他の連絡手段 */}
      <div className="mt-10">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[--color-muted] mb-4">
          その他の連絡先
        </h2>
        <div className="grid gap-3">
          <div className="flex items-center gap-4 px-5 py-4 rounded border border-[--color-line]/40">
            <span className="text-sm font-bold text-[--color-ink] w-24 shrink-0">Email</span>
            <span className="text-sm text-[--color-muted]">
              nanjakorewa0★gmail★com（『★』を @ と『.』に変えてください）
            </span>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Link href="/extensions" className="text-sm text-[--color-accent] hover:underline underline-offset-4 font-medium">
          ← Chrome Extensions に戻る
        </Link>
      </div>
    </section>
  )
}
