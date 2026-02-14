/**
 * Portfolio Data API — Redis Cached
 * 
 * Serves portfolio data (projects, skills, about) from cache.
 * First request computes and caches. Subsequent requests are instant.
 * 
 * Cache TTL: 10 minutes (data rarely changes)
 */

import { NextResponse } from 'next/server';
import { cacheGetOrSet, getCacheStats } from '@/lib/cache';

// Portfolio data — centralized and cacheable
function getPortfolioData() {
  return {
    profile: {
      name: 'Harish S',
      title: 'Full Stack Developer',
      tagline: 'Full Stack Developer & AI/DS student specializing in MERN stack, FastAPI, and cloud-native solutions.',
      email: 'harish.s2023ai-ds@sece.ac.in',
      phone: '+91 9345306280',
      location: 'Coimbatore, Tamil Nadu, India',
    },
    stats: {
      leetcode: '150+ problems (Rating: 1572)',
      skillrack: '300+ problems',
      gfg: '50+ problems (Rank: 497)',
      projects: '3+ major projects',
    },
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/harishs-developer/',
      github: 'https://github.com/Harish-Saravana-Kumar',
      leetcode: 'https://leetcode.com/u/malarharish007/',
    },
    lastUpdated: new Date().toISOString(),
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const section = searchParams.get('section') || 'all';

  try {
    const cacheKey = `portfolio:${section}`;

    // Cache for 10 minutes (600 seconds)
    const data = await cacheGetOrSet(
      cacheKey,
      async () => getPortfolioData(),
      600
    );

    const stats = getCacheStats();

    return NextResponse.json(
      {
        success: true,
        data,
        cache: {
          source: stats.redisAvailable ? 'redis' : 'memory',
          entries: stats.memoryEntries,
          timestamp: stats.timestamp,
        },
      },
      {
        headers: {
          // Browser cache: 5 min, CDN cache: 10 min, stale-while-revalidate: 1 hour
          'Cache-Control': 'public, s-maxage=600, max-age=300, stale-while-revalidate=3600',
          'X-Cache-Source': stats.redisAvailable ? 'redis' : 'memory',
        },
      }
    );
  } catch (error) {
    console.error('[API] Portfolio data error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch portfolio data' },
      { status: 500 }
    );
  }
}
