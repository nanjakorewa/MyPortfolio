import Link from 'next/link'

const skills = {
  Frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML / CSS'],
  'Languages': ['Python', 'C++', 'C#', 'Perl', 'PHP', 'SQL', 'TypeScript'],
  Backend: ['Node.js', 'SQL', 'PHP'],
  'Data / ML': ['MLflow', 'scikit-learn', 'pandas', 'データ可視化'],
  Infrastructure: ['AWS', 'Cloudflare Pages', 'GitHub Actions'],
  'IT 基盤': ['ネットワーク', 'セキュリティ', 'DB 設計', 'アルゴリズム'],
  Management: ['プロジェクト管理', 'リスク分析', '要件定義', 'スケジュール管理'],
  'Business / Finance': ['財務分析', '会計', 'ライフプランニング', '損益管理'],
  Others: ['Chrome Extensions', 'Git', 'Figma'],
}

const timeline = [
  {
    year: '2011 ~',
    text: '個人ブログ「めも」を開設。技術メモや日常の記録を不定期に更新開始。',
  },
  {
    year: '2017',
    text: 'マリオカート8DXの交流戦向け即時集計ツールを開発・公開。',
  },
  {
    year: '2018 ~',
    text: '機械学習の自習を本格化。学習サイト「機械学習のめも帳」を構築し、Python・scikit-learn を中心に学ぶ。',
  },
  {
    year: '2020 ~',
    text: '機械学習の解説動画チャンネル「K_DM」を開設。並行して会計・財務・ファイナンシャルプランニングの学習を深め、経済関連ブログも開始。',
  },
  {
    year: '2023 ~',
    text: 'GeoGuessr のプレイログサイトを公開。地理リサーチの知見を蓄積。',
  },
  {
    year: '2025 ~',
    text: 'ブラウザツール集「N\'s Webtools」、レシピログ「Nanja Recipe」、NLP ツール「公用文チェッカー」など Web アプリを連続リリース。Chrome 拡張機能の開発にも着手。IT・マネジメント・ビジネスの知見を活かし、企画から設計・実装・運用まで一人で完結できる体制に。',
  },
]

export default function AboutPage() {
  return (
    <div className="space-y-20">
      {/* --- Intro --- */}
      <section>
        <h1 className="text-4xl font-bold tracking-tight">About</h1>
        <p className="mt-4 text-lg text-[--color-muted] leading-relaxed max-w-2xl">
          nanjakorewa — 関西を拠点に活動する開発者。
        </p>
      </section>

      {/* --- What I Do --- */}
      <section>
        <SectionHeading>What I Do</SectionHeading>
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          <Card accent="accent" title="Web 開発">
            Next.js / React / TypeScript を中心としたフロントエンド開発。
            Tailwind CSS によるデザインシステム構築、Cloudflare Pages へのデプロイ、
            セキュリティやパフォーマンスを意識した設計まで一貫して対応します。
          </Card>
          <Card accent="accent-2" title="ツール開発">
            日常の不便を解消するブラウザツールや Chrome 拡張機能を開発。
            「N&apos;s Webtools」では複数のユーティリティをまとめて公開中です。
            要件定義からリリースまでを個人で回すため、スコープ管理やスケジューリングも自然と身につきました。
          </Card>
          <Card accent="accent-3" title="データ / ML">
            Python を使ったデータ分析・可視化、MLflow による実験管理など、
            機械学習のワークフロー構築に取り組んできました。
            統計的な裏付けやデータベース設計を重視し、再現性のある分析を目指しています。
          </Card>
          <Card accent="accent-4" title="ビジネス設計">
            会計・財務の知識をベースに、コストやリスクを見据えたプロダクト判断ができます。
            経済関連ブログの運営を通じて、市場動向や家計管理にも日常的にアンテナを張っています。
          </Card>
          <Card accent="accent-5" title="コンテンツ発信">
            ブログ・動画・配信を通じてアウトプット。2011
            年から続くブログをはじめ、Twitch / YouTube
            でのゲーム配信も行っています。
          </Card>
        </div>
      </section>

      {/* --- Skills --- */}
      <section>
        <SectionHeading>Skills</SectionHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[--color-muted] mb-3">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <li
                    key={s}
                    className="px-3 py-1.5 text-xs rounded bg-[--color-line]/40 text-[--color-muted]"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* --- Timeline --- */}
      <section>
        <SectionHeading>Timeline</SectionHeading>
        <div className="mt-6 space-y-0">
          {timeline.map((item, i) => (
            <div key={i} className="flex gap-6">
              {/* 左: 年ラベル + 縦線 */}
              <div className="flex flex-col items-center w-20 shrink-0">
                <span className="text-xs font-bold text-[--color-accent] whitespace-nowrap">
                  {item.year}
                </span>
                <div className="w-px flex-1 bg-[--color-line]/50 mt-2" />
              </div>
              {/* 右: 内容 */}
              <p className="text-sm text-[--color-ink]/85 leading-relaxed pb-8">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Interests --- */}
      <section>
        <SectionHeading>Interests</SectionHeading>
        <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-[--color-ink]/85 leading-relaxed">
          <li className="flex gap-3 items-start">
            <span className="text-lg shrink-0" aria-hidden>
              🎮
            </span>
            <span>
              <strong className="text-[--color-ink]">ゲーム</strong> —
              マリオカート8DX（にゃんぱす+Nst+BMz 所属）、GeoGuessr
              など。Twitch / YouTube で配信・動画投稿も。
            </span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-lg shrink-0" aria-hidden>
              🍳
            </span>
            <span>
              <strong className="text-[--color-ink]">料理</strong> —
              日々の料理やお弁当を「Nanja
              Recipe」に記録。レシピを振り返れる自分用ログとして運用中。
            </span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-lg shrink-0" aria-hidden>
              🌍
            </span>
            <span>
              <strong className="text-[--color-ink]">地理</strong> — GeoGuessr
              を通じて世界各地のストリートビューを研究。プレイログを公開しています。
            </span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-lg shrink-0" aria-hidden>
              ✍️
            </span>
            <span>
              <strong className="text-[--color-ink]">文章・言語</strong> —
              公用文の表記ルールに着目した NLP
              ツールを開発するなど、日本語テキスト処理にも関心。
            </span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-lg shrink-0" aria-hidden>
              📊
            </span>
            <span>
              <strong className="text-[--color-ink]">経済・マネー</strong> —
              家計管理や資産運用、経済ニュースの分析。
            </span>
          </li>
        </ul>
      </section>

      {/* --- Links --- */}
      <section>
        <SectionHeading>Links</SectionHeading>
        <div className="mt-6 flex flex-wrap gap-3">
          <ExtLink href="https://github.com/nanjakorewa">GitHub</ExtLink>
          <ExtLink href="https://x.com/nanjakorewa">X (Twitter)</ExtLink>
          <ExtLink href="https://www.twitch.tv/nanjakorewa">Twitch</ExtLink>
          <ExtLink href="https://www.youtube.com/@nanjakorewa">YouTube</ExtLink>
          <ExtLink href="https://paper.hatenadiary.jp/">Blog</ExtLink>
        </div>
        <p className="mt-6 text-sm text-[--color-muted]">
          お仕事やコラボのご相談は{' '}
          <Link href="/contact" className="a-like">
            Contact
          </Link>{' '}
          からお気軽にどうぞ。
        </p>
      </section>
    </div>
  )
}

/* ---------- 共通パーツ ---------- */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[--color-accent] to-[--color-accent-2]" />
      <h2 className="text-2xl font-bold tracking-tight">{children}</h2>
    </div>
  )
}

function Card({
  title,
  accent,
  children,
}: {
  title: string
  accent: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded border border-[--color-line]/40 p-5">
      <h3 className={`text-base font-bold text-[--color-${accent}] mb-2`}>{title}</h3>
      <p className="text-sm text-[--color-muted] leading-relaxed">{children}</p>
    </div>
  )
}

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 text-sm rounded border border-[--color-line]/40 text-[--color-ink] hover:bg-[--color-accent]/5 hover:border-[--color-accent]/30"
    >
      {children}
    </a>
  )
}
