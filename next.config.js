/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate a fully static site in ./out (required for GitHub Pages)
  output: 'export',
  // Helps avoid 404s for nested routes on GitHub Pages
  trailingSlash: true,
  // If you use next/image, this avoids remote optimization on Pages
  images: { unoptimized: true },
  // If deploying to a project page like username.github.io/repo,
  // uncomment BOTH lines below and replace REPO_NAME accordingly.
  // basePath: '/REPO_NAME',
  // assetPrefix: '/REPO_NAME/',
}

module.exports = nextConfig
