import type { NextConfig } from 'next'

const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const repo = 'MyPortfolio'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // Actions でビルドする時だけ basePath/assetPrefix を付与
  basePath: isGithubActions ? `/${repo}` : undefined,
  assetPrefix: isGithubActions ? `/${repo}/` : undefined,
}

export default nextConfig
