/**
 * Redis Client Utility
 * 
 * Connects to Redis for caching. Falls back gracefully if Redis is unavailable.
 * Set REDIS_URL env var to connect (e.g., redis://localhost:6379 or Upstash URL).
 */

import Redis from 'ioredis';

let redis: Redis | null = null;
let connectionFailed = false;

export function getRedisClient(): Redis | null {
  if (connectionFailed) return null;

  if (!redis) {
    const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

    try {
      redis = new Redis(redisUrl, {
        maxRetriesPerRequest: 2,
        retryStrategy(times) {
          if (times > 3) {
            connectionFailed = true;
            console.warn('[Redis] Max retries reached. Falling back to in-memory cache.');
            return null; // Stop retrying
          }
          return Math.min(times * 200, 2000);
        },
        connectTimeout: 5000,
        lazyConnect: true,
      });

      redis.on('error', (err) => {
        console.warn('[Redis] Connection error:', err.message);
      });

      redis.on('connect', () => {
        console.log('[Redis] Connected successfully');
        connectionFailed = false;
      });

      // Attempt connection
      redis.connect().catch(() => {
        connectionFailed = true;
        redis = null;
      });
    } catch {
      connectionFailed = true;
      redis = null;
    }
  }

  return redis;
}

export function isRedisAvailable(): boolean {
  return redis !== null && !connectionFailed && redis.status === 'ready';
}
