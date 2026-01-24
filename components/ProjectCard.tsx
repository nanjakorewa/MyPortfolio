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
      className="group block bg-white dark:bg-[--color-card] rounded-2xl border border-[#eee] dark:border-[--color-line]/30 p-6 relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1"
    >
      {/* グラデーションアクセント（上部） */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3d7a9e] via-[#ffc857] to-[#e85d75] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* 画像エリア */}
      <div className="aspect-[4/3] rounded-xl bg-[#f5f5f5] dark:bg-[--color-line]/20 mb-5 overflow-hidden">
        {project.image ? (
          <img
            src={withBasePath(project.image)}
            alt=""
            className="w-full h-full object-cover group-hover:scale-107 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full grid place-items-center text-sm text-[--color-muted]">
            Thumbnail
          </div>
        )}
      </div>

      {/* タグ */}
      <div className="flex gap-2 flex-wrap mb-3">
        {project.tags.map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1 rounded-full bg-[#f5f5f5] dark:bg-[--color-line]/30 text-[--color-muted] font-medium"
          >
            {t}
          </span>
        ))}
      </div>

      {/* タイトル */}
      <h3 className="text-lg font-bold text-[--color-ink] group-hover:text-[--color-accent] transition-colors duration-300 mb-2">
        {project.title}
      </h3>

      {/* 説明 */}
      <p className="text-sm text-[--color-muted] leading-relaxed line-clamp-2">{project.description}</p>

      {/* 矢印アイコン */}
      <div className="mt-4 flex items-center text-[--color-accent] text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
        View Project
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  )
}
