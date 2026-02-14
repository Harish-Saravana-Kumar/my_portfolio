/** @type {import('next').NextConfig} */
const nextConfig = {
  // trailingSlash for clean URLs
  trailingSlash: true,

  // Image optimization (set to true if no image optimizer available)
  images: { unoptimized: true },

  // Enable compression for faster transfers
  compress: true,

  // Aggressive caching headers for static assets
  async headers() {
    return [
      {
        // Cache static assets for 1 year (they have content hashes)
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Cache fonts for 1 year
        source: '/fonts/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Cache images for 1 week, revalidate
        source: '/:path*.{png,jpg,jpeg,gif,svg,ico,webp}',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' },
        ],
      },
      {
        // HTML pages — short cache, revalidate
        source: '/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=60, stale-while-revalidate=300' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
    ];
  },

  // If deploying to a project page like username.github.io/repo,
  // uncomment BOTH lines below and replace REPO_NAME accordingly.
  // basePath: '/REPO_NAME',
  // assetPrefix: '/REPO_NAME/',

  // To revert to static export for GitHub Pages, uncomment:
  // output: 'export',
}

module.exports = nextConfig
