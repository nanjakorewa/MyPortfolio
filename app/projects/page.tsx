'use client'

import { projects } from '@/lib/projects'
import { ProjectCard } from '@/components/ProjectCard'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { withBasePath } from '@/lib/url'

const CATEGORY_LABEL = {
  hobby: '趣味',
  study: '学習',
  web: 'WEB',
  others: 'その他',
} as const
type CatKey = keyof typeof CATEGORY_LABEL

function Tabs({ active }: { active: 'all' | CatKey }) {
  const tabs: Array<{ key: 'all' | CatKey; label: string; href: string }> = [
    { key: 'all', label: 'すべて', href: withBasePath('/projects') },
    { key: 'web', label: CATEGORY_LABEL.web, href: withBasePath('/projects?category=web') },
    { key: 'hobby', label: CATEGORY_LABEL.hobby, href: withBasePath('/projects?category=hobby') },
    { key: 'study', label: CATEGORY_LABEL.study, href: withBasePath('/projects?category=study') },
    { key: 'others', label: CATEGORY_LABEL.others, href: withBasePath('/projects?category=others') },
  ]
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {tabs.map((t) => (
        <a
          key={t.key}
          href={t.href}
          className={[
            'px-4 py-2 rounded-full text-sm font-medium transition-all',
            active === t.key
              ? 'bg-[--color-ink] text-[--color-card]'
              : 'bg-[--color-card] border border-[--color-line]/50 text-[--color-ink] hover:border-[--color-accent]/50 hover:text-[--color-accent]',
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

  const active: 'all' | CatKey = (['web', 'hobby', 'study', 'others'] as const).includes(
    raw as CatKey
  )
    ? (raw as CatKey)
    : 'all'

  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <section>
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-[--color-muted] mt-3 text-lg">カテゴリーで絞り込みできます。</p>
      </div>
      <Tabs active={active} />

      {active === 'all' ? (
        <div className="space-y-16 mt-10">
          {(Object.keys(CATEGORY_LABEL) as CatKey[]).map((cat) => {
            const list = projects.filter((p) => p.category === cat)
            if (!list.length) return null
            return (
              <div key={cat}>
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[--color-accent] to-[--color-accent-2]" />
                    <h2 className="text-2xl font-bold tracking-tight">
                      {CATEGORY_LABEL[cat]}
                      <span className="ml-3 text-base font-normal text-[--color-muted]">{list.length} projects</span>
                    </h2>
                  </div>
                  <a
                    className="text-sm text-[--color-accent] hover:underline underline-offset-4 font-medium"
                    href={withBasePath(`/projects?category=${cat}`)}
                  >
                    View all →
                  </a>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {list.map((p) => (
                    <ProjectCard key={p.title} project={p} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="mt-10">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[--color-accent] to-[--color-accent-2]" />
              <h2 className="text-2xl font-bold tracking-tight">
                {CATEGORY_LABEL[active]}
                <span className="ml-3 text-base font-normal text-[--color-muted]">{filtered.length} projects</span>
              </h2>
            </div>
            <a
              className="text-sm text-[--color-accent] hover:underline underline-offset-4 font-medium"
              href={withBasePath('/projects')}
            >
              ← Back to all
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
