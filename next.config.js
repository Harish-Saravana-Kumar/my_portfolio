const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate a fully static site in ./out (required for GitHub Pages)
  output: 'export',
  // Helps avoid 404s for nested routes on GitHub Pages
  trailingSlash: true,
  // If you use next/image, this avoids remote optimization on Pages
  images: { unoptimized: true },
  // Deploying to project page: username.github.io/my_portfolio
  basePath: isProd ? '/my_portfolio' : '',
  assetPrefix: isProd ? '/my_portfolio/' : '',
}

module.exports = nextConfig
