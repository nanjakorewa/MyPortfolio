export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-widest opacity-70">Developer · Designer</p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1]">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-accent">
            Crafting clean UI
          </span>
          <br />
          and reliable data apps
        </h1>
        <p className="opacity-85 text-lg">
          フロントエンド、データ可視化、MLOps まで。高速・アクセシブルな体験を届けます。
        </p>
        <div className="flex gap-3">
          <a href="/projects" className="btn-primary">
            View Projects
          </a>
          <a href="/contact" className="btn-ghost">
            Contact
          </a>
        </div>
        <ul className="flex flex-wrap gap-2 text-xs opacity-80">
          {['Next.js', 'TypeScript', 'Tailwind', 'Python', 'MLflow', 'AWS'].map((s) => (
            <li key={s} className="px-2 py-1 rounded-full border border-white/10 bg-white/5">
              {s}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-3xl bg-card p-6 border border-white/10 relative overflow-hidden group">
        <div
          className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent/20 to-white/5 blur-2xl"
          aria-hidden
        />
        <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-accent/30 to-white/10 grid place-items-center text-lg opacity-90">
          Showcase Image
        </div>
        <div className="mt-4 text-sm opacity-70">
          最近の案件: テスト
        </div>
      </div>
    </section>
  )
}
