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
      className="group block bg-[--color-card] rounded-2xl border border-[--color-line]/40 p-5 relative overflow-hidden transition-all duration-300 ease-out hover:shadow-lg hover:shadow-black/8 dark:hover:shadow-black/20 hover:-translate-y-0.5 hover:border-[--color-accent]/30"
    >
      {/* 画像エリア */}
      <div className="aspect-[4/3] rounded-xl bg-[--color-line]/20 mb-4 overflow-hidden">
        {project.image ? (
          <img
            src={withBasePath(project.image)}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full grid place-items-center text-sm text-[--color-muted]">
            Thumbnail
          </div>
        )}
      </div>

      {/* タグ */}
      <div className="flex gap-1.5 flex-wrap mb-3">
        {project.tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-0.5 rounded-full bg-[--color-line]/40 text-[--color-muted]"
          >
            {t}
          </span>
        ))}
      </div>

      {/* タイトル */}
      <h3 className="text-base font-bold text-[--color-ink] group-hover:text-[--color-accent] transition-colors duration-200 mb-1.5 line-clamp-1">
        {project.title}
      </h3>

      {/* 説明 */}
      <p className="text-sm text-[--color-muted] leading-relaxed line-clamp-2">{project.description}</p>

      {/* 矢印アイコン */}
      <div className="mt-3 flex items-center text-[--color-accent] text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5">
        <span>View</span>
        <svg className="w-3.5 h-3.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  )
}
