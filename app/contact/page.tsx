export default function ContactPage() {
  return (
    <section className="max-w-xl">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="opacity-80 mt-2">お気軽にご連絡ください。</p>
      <div className="mt-6 grid gap-3">
        <a className="px-4 py-3 rounded-xl border border-white/10" href="#">
          nanjakorewa0★gmail★com（『★』を@と『.』に変えてください）
        </a>
        <a className="px-4 py-3 rounded-xl border border-white/10" href="https://x.com/nanjakorewa">
          X (Twitter)
        </a>
        <a
          className="px-4 py-3 rounded-xl border border-white/10"
          href="https://github.com/nanjakorewa"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}
