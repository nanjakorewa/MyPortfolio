import type { NextConfig } from 'next'

const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
// Derive repo name from GitHub Actions env, fallback to empty
const repoName = process.env.GITHUB_REPOSITORY?.split('/')?.[1] ?? ''
const isUserSite = repoName.endsWith('.github.io')

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // For project pages (user.github.io/repo), set basePath/assetPrefix to /repo
  basePath: isGithubActions && !isUserSite && repoName ? `/${repoName}` : undefined,
  assetPrefix: isGithubActions && !isUserSite && repoName ? `/${repoName}/` : undefined,
}

export default nextConfig
