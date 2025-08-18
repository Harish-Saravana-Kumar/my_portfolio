/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate a fully static site in ./out (required for GitHub Pages)
  output: 'export',
  // Helps avoid 404s for nested routes on GitHub Pages
  trailingSlash: true,
  // If you use next/image, this avoids remote optimization on Pages
  images: { unoptimized: true },
  // Deploying to project page: username.github.io/my_portfolio
  basePath: '/my_portfolio',
  assetPrefix: '/my_portfolio/',
}

module.exports = nextConfig
