'use client'

import { useCallback, useRef } from 'react'
import { withBasePath } from '@/lib/url'

export type Project = {
  title: string
  description: string
  href: string
  tags: string[]
  image?: string
  category: 'web' | 'hobby' | 'study' | 'others'
}

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLAnchorElement | null>(null)

  // パフォーマンスのため、requestAnimationFrameでCSS変数更新
  const onPointerMove = useCallback((e: React.PointerEvent<HTMLAnchorElement>) => {
    const a = ref.current
    if (!a) return
    const r = a.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    // ハイドレーション後にのみ反映（初期は style 未設定のまま）
    requestAnimationFrame(() => {
      a.style.setProperty('--x', `${x}px`)
      a.style.setProperty('--y', `${y}px`)
    })
  }, [])

  return (
    <a
      ref={ref}
      href={project.href}
      onPointerMove={onPointerMove}
      className="group block rounded-2xl border border-[--color-line] bg-card hover:border-[--color-accent] transition p-5 relative overflow-hidden"
    >
      {/* hover ライト（CSS 変数で位置を与える） */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition 
                   bg-[radial-gradient(200px_200px_at_var(--x,50%)_var(--y,50%),rgba(124,156,245,.18),transparent)]"
      />
      <div className="aspect-video rounded-xl bg-[rgba(0,0,0,.04)] dark:bg-white/5 mb-4 grid place-items-center text-sm opacity-70 overflow-hidden">
        {project.image ? (
          <img
            src={withBasePath(project.image)}
            alt=""
            className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition"
          />
        ) : (
          'Thumbnail'
        )}
      </div>
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold group-hover:text-[--color-accent] transition">
          {project.title}
        </h3>
        <div className="flex gap-2 text-xs text-[--color-muted] max-w-[50%] justify-end flex-wrap">
          {project.tags.map((t) => (
            <span
              key={t}
              className="px-2 py-1 rounded-full border border-[--color-line] bg-card/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <p className="mt-2 text-sm text-[--color-muted]">{project.description}</p>
    </a>
  )
}
