/**
 * Cache Layer
 * 
 * Two-tier caching strategy:
 * 1. Redis (primary) — shared across server instances, persists across restarts
 * 2. In-memory Map (fallback) — when Redis is unavailable
 * 
 * This ensures the portfolio loads fast regardless of infrastructure.
 */

import { getRedisClient, isRedisAvailable } from './redis';

// In-memory fallback cache
const memoryCache = new Map<string, { data: string; expiry: number }>();

// Default TTL: 5 minutes (in seconds)
const DEFAULT_TTL = 300;

/**
 * Get a cached value by key
 */
export async function cacheGet(key: string): Promise<string | null> {
  // Try Redis first
  if (isRedisAvailable()) {
    try {
      const client = getRedisClient();
      if (client) {
        const value = await client.get(key);
        if (value) {
          console.log(`[Cache] Redis HIT: ${key}`);
          return value;
        }
        console.log(`[Cache] Redis MISS: ${key}`);
        return null;
      }
    } catch (err) {
      console.warn('[Cache] Redis get error, falling back to memory:', err);
    }
  }

  // Fallback to in-memory
  const entry = memoryCache.get(key);
  if (entry) {
    if (Date.now() < entry.expiry) {
      console.log(`[Cache] Memory HIT: ${key}`);
      return entry.data;
    }
    // Expired — clean up
    memoryCache.delete(key);
  }
  console.log(`[Cache] Memory MISS: ${key}`);
  return null;
}

/**
 * Set a cached value with TTL
 */
export async function cacheSet(
  key: string,
  value: string,
  ttlSeconds: number = DEFAULT_TTL
): Promise<void> {
  // Try Redis first
  if (isRedisAvailable()) {
    try {
      const client = getRedisClient();
      if (client) {
        await client.setex(key, ttlSeconds, value);
        console.log(`[Cache] Redis SET: ${key} (TTL: ${ttlSeconds}s)`);
      }
    } catch (err) {
      console.warn('[Cache] Redis set error, falling back to memory:', err);
    }
  }

  // Always set in memory as a backup layer
  memoryCache.set(key, {
    data: value,
    expiry: Date.now() + ttlSeconds * 1000,
  });
}

/**
 * Delete a cached key
 */
export async function cacheDel(key: string): Promise<void> {
  memoryCache.delete(key);

  if (isRedisAvailable()) {
    try {
      const client = getRedisClient();
      if (client) await client.del(key);
    } catch {
      // Ignore Redis errors on delete
    }
  }
}

/**
 * Clear all cache entries
 */
export async function cacheClear(): Promise<void> {
  memoryCache.clear();

  if (isRedisAvailable()) {
    try {
      const client = getRedisClient();
      if (client) await client.flushdb();
    } catch {
      // Ignore
    }
  }
}

/**
 * Get or set pattern — fetch from cache, or compute and store
 */
export async function cacheGetOrSet<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttlSeconds: number = DEFAULT_TTL
): Promise<T> {
  const cached = await cacheGet(key);
  if (cached) {
    return JSON.parse(cached) as T;
  }

  const data = await fetcher();
  await cacheSet(key, JSON.stringify(data), ttlSeconds);
  return data;
}

/**
 * Cache stats for monitoring
 */
export function getCacheStats() {
  return {
    memoryEntries: memoryCache.size,
    redisAvailable: isRedisAvailable(),
    timestamp: new Date().toISOString(),
  };
}
