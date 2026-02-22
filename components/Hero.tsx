export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center py-8">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-widest text-[--color-muted]">Developer · Designer</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-[1.15] text-[--color-ink]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[--color-accent] via-[--color-accent-2] to-[--color-accent-3]">
            Crafting clean UI
          </span>
          <br />
          <span className="text-[--color-ink]/90">and reliable data apps</span>
        </h1>
        <p className="text-[--color-muted] text-lg leading-relaxed">
          フロントエンド、データ可視化、MLOpsまで。高速・アクセシブルな体験を届けます。
        </p>
        <div className="flex gap-4">
          <a href="/projects" className="btn-primary">
            View Projects
          </a>
          <a href="/contact" className="btn-ghost">
            Contact
          </a>
        </div>
        <ul className="flex flex-wrap gap-2 text-xs">
          {['Next.js', 'TypeScript', 'Tailwind', 'Python', 'MLflow', 'AWS'].map((s) => (
            <li key={s} className="px-3 py-1.5 rounded bg-[--color-line]/40 text-[--color-muted]">
              {s}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded bg-card/60 backdrop-blur-sm p-6 border border-[--color-line]/50 relative overflow-hidden group">
        <div
          className="absolute -inset-4 rounded bg-gradient-to-br from-[--color-accent-3]/20 via-[--color-accent-5]/20 to-[--color-accent-2]/20 blur-3xl opacity-60"
          aria-hidden
        />
        <div className="relative aspect-video rounded bg-gradient-to-br from-[--color-line]/40 to-[--color-line]/20 grid place-items-center text-[--color-muted]">
          Showcase Image
        </div>
        <div className="mt-4 text-sm text-[--color-muted]">最近の案件: テスト</div>
      </div>
    </section>
  )
}
