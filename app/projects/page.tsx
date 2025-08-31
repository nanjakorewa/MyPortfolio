'use client'

import { projects } from '@/lib/projects'
import { ProjectCard } from '@/components/ProjectCard'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const CATEGORY_LABEL = {
  hobby: '趣味',
  study: '学習',
  web: 'WEB',
  others: 'その他',
} as const
type CatKey = keyof typeof CATEGORY_LABEL

function Tabs({ active }: { active: 'all' | CatKey }) {
  const tabs: Array<{ key: 'all' | CatKey; label: string; href: string }> = [
    { key: 'all', label: 'すべて', href: '/projects' },
    { key: 'web', label: CATEGORY_LABEL.web, href: '/projects?category=web' },
    { key: 'hobby', label: CATEGORY_LABEL.hobby, href: '/projects?category=hobby' },
    { key: 'study', label: CATEGORY_LABEL.study, href: '/projects?category=study' },
  ]
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {tabs.map((t) => (
        <a
          key={t.key}
          href={t.href}
          className={[
            'px-3 py-1.5 rounded-full border text-sm',
            active === t.key
              ? 'border-[--color-accent] text-[--color-accent] bg-card'
              : 'border-[--color-line] text-[--color-muted] hover:border-[--color-accent]',
          ].join(' ')}
        >
          {t.label}
        </a>
      ))}
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="mt-4 text-[--color-muted]">Loading...</div>}>
      <ProjectsContent />
    </Suspense>
  )
}

function ProjectsContent() {
  const sp = useSearchParams()
  const raw = (sp.get('category') ?? 'all').toLowerCase()

  const active: 'all' | CatKey = (['web', 'hobby', 'study'] as const).includes(raw as CatKey)
    ? (raw as CatKey)
    : 'all'

  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <section>
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="opacity-80 mt-2">カテゴリーで絞り込みできます。</p>
      <Tabs active={active} />

      {active === 'all' ? (
        <div className="space-y-12 mt-8">
          {(Object.keys(CATEGORY_LABEL) as CatKey[]).map((cat) => {
            const list = projects.filter((p) => p.category === cat)
            if (!list.length) return null
            return (
              <div key={cat}>
                <div className="flex items-end justify-between gap-4">
                  <h2 className="text-2xl font-semibold">
                    {CATEGORY_LABEL[cat]}
                    <span className="ml-2 text-sm text-[--color-muted]">({list.length})</span>
                  </h2>
                  <a className="a-like text-sm" href={`/projects?category=${cat}`}>
                    このカテゴリのみ表示
                  </a>
                </div>
                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {list.map((p) => (
                    <ProjectCard key={p.title} project={p} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="mt-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold">
              {CATEGORY_LABEL[active]}
              <span className="ml-2 text-sm text-[--color-muted]">({filtered.length})</span>
            </h2>
            <a className="a-like text-sm" href="/projects">
              すべてに戻る
            </a>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
