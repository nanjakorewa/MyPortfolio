'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RootRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/projects') // 例: 日本語トップに飛ばす
  }, [router])
  return null
}
