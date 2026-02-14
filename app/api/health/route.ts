/**
 * Health Check API
 * 
 * Reports server status, Redis connectivity, cache stats,
 * and uptime. Useful for monitoring and load balancers.
 */

import { NextResponse } from 'next/server';
import { getCacheStats } from '@/lib/cache';
import { isRedisAvailable } from '@/lib/redis';

const startTime = Date.now();

export async function GET() {
  const uptime = Math.floor((Date.now() - startTime) / 1000);
  const cacheStats = getCacheStats();

  return NextResponse.json(
    {
      status: 'healthy',
      uptime: `${uptime}s`,
      redis: {
        connected: isRedisAvailable(),
        fallback: !isRedisAvailable() ? 'in-memory' : null,
      },
      cache: cacheStats,
      server: {
        nodeVersion: process.version,
        platform: process.platform,
        memoryUsage: {
          heapUsed: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`,
          rss: `${Math.round(process.memoryUsage().rss / 1024 / 1024)}MB`,
        },
      },
      timestamp: new Date().toISOString(),
    },
    {
      headers: {
        'Cache-Control': 'no-cache, no-store',
      },
    }
  );
}
