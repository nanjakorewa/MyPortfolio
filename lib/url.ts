export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function withBasePath(path: string): string {
  if (!path) return path
  if (/^https?:\/\//i.test(path)) return path
  const bp = BASE_PATH.endsWith('/') ? BASE_PATH.slice(0, -1) : BASE_PATH
  const p = path.startsWith('/') ? path : `/${path}`
  return `${bp}${p}`
}

