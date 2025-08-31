import type { Project } from '@/components/ProjectCard'

export const projects: Project[] = [
  {
    title: 'GeoGuessrのメモ',
    description: '2023年はじめから不定期に更新しているジオゲッサーのプレイログです。',
    href: 'https://example.com/geoguessr',
    tags: ['HTML', 'Game', 'Research'],
    category: 'hobby',
    image: '/thumbnails/geopinning.png',
  },
  {
    title: 'めも',
    description: '2011年頃から不定期更新している個人ブログ。',
    href: 'https://paper.hatenadiary.jp/',
    tags: ['Blog'],
    category: 'hobby',
  },
  {
    title: '生活に関するメモ',
    description: '2020年頃から不定期更新している経済関係のブログ。',
    href: 'https://paper-log.hatenadiary.jp/',
    tags: ['Blog'],
    category: 'hobby',
  },
  {
    title: 'K_DM',
    description: '2020年頃に機械学習の勉強用に作成したウェブサイト＋動画。',
    href: 'https://www.youtube.com/@K_DM',
    tags: ['Machine Learning', 'Study'],
    category: 'study',
    image: '/thumbnails/k_dm.png',
  },
  {
    title: '機械学習のメモ帳',
    description: '2018年頃に作成した自習用ウェブサイト。',
    href: 'https://k-dm.work/',
    tags: ['Machine Learning', 'Study', 'Python'],
    category: 'study',
  },
  {
    title: 'MK8DX6v6(交流戦)即時集計',
    description: '2017年に作成したMK8D用即時集計器。',
    href: 'https://paper-web.sakura.ne.jp/sokuji/sokuji.html',
    tags: ['Game'],
    category: 'others',
    image: '/thumbnails/mk8d.png',
  },
]
