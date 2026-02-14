/**
 * Live Visitor Tracking API (Vercel-compatible)
 * 
 * Uses Upstash Redis to track active visitors via TTL keys.
 * Each visitor gets a unique key that expires after 30 seconds.
 * Clients poll this endpoint every 10 seconds to stay "alive".
 * 
 * POST — Register/heartbeat a visitor (keeps them active)
 * GET  — Get current visitor count
 * DELETE — Remove a visitor (on page close)
 */

import { NextResponse } from 'next/server';
import { getRedisClient, isRedisAvailable } from '@/lib/redis';

const VISITOR_TTL = 30; // seconds before a visitor is considered gone
const VISITOR_PREFIX = 'visitor:';

// In-memory fallback when Redis is unavailable
const memoryVisitors = new Map<string, number>();

function cleanMemoryVisitors() {
  const now = Date.now();
  memoryVisitors.forEach((expiry, id) => {
    if (now > expiry) memoryVisitors.delete(id);
  });
}

/**
 * GET — Return current live visitor count
 */
export async function GET() {
  try {
    if (isRedisAvailable()) {
      const client = getRedisClient();
      if (client) {
        const keys = await client.keys(`${VISITOR_PREFIX}*`);
        return NextResponse.json({
          count: keys.length,
          source: 'redis',
          timestamp: Date.now(),
        });
      }
    }

    // Fallback: in-memory
    cleanMemoryVisitors();
    return NextResponse.json({
      count: memoryVisitors.size,
      source: 'memory',
      timestamp: Date.now(),
    });
  } catch (error) {
    console.error('[Visitors] GET error:', error);
    return NextResponse.json({ count: 0, source: 'error', timestamp: Date.now() });
  }
}

/**
 * POST — Register a visitor heartbeat
 * Body: { visitorId: string, page?: string }
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { visitorId, page = '/', _method } = body;

    // sendBeacon workaround: sendBeacon only supports POST,
    // so we use _method: 'DELETE' to signal removal
    if (_method === 'DELETE' && visitorId) {
      const key = `${VISITOR_PREFIX}${visitorId}`;
      if (isRedisAvailable()) {
        const client = getRedisClient();
        if (client) await client.del(key);
      }
      memoryVisitors.delete(visitorId);
      return NextResponse.json({ removed: true });
    }

    if (!visitorId) {
      return NextResponse.json({ error: 'visitorId required' }, { status: 400 });
    }

    const key = `${VISITOR_PREFIX}${visitorId}`;
    const value = JSON.stringify({ page, lastSeen: Date.now() });

    if (isRedisAvailable()) {
      const client = getRedisClient();
      if (client) {
        await client.setex(key, VISITOR_TTL, value);
        const keys = await client.keys(`${VISITOR_PREFIX}*`);
        return NextResponse.json({
          count: keys.length,
          source: 'redis',
          registered: true,
        });
      }
    }

    // Fallback: in-memory
    memoryVisitors.set(visitorId, Date.now() + VISITOR_TTL * 1000);
    cleanMemoryVisitors();
    return NextResponse.json({
      count: memoryVisitors.size,
      source: 'memory',
      registered: true,
    });
  } catch (error) {
    console.error('[Visitors] POST error:', error);
    return NextResponse.json({ error: 'Failed to register visitor' }, { status: 500 });
  }
}

/**
 * DELETE — Remove a visitor (called on page unload)
 */
export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { visitorId } = body;

    if (!visitorId) {
      return NextResponse.json({ error: 'visitorId required' }, { status: 400 });
    }

    const key = `${VISITOR_PREFIX}${visitorId}`;

    if (isRedisAvailable()) {
      const client = getRedisClient();
      if (client) {
        await client.del(key);
      }
    }

    memoryVisitors.delete(visitorId);

    return NextResponse.json({ removed: true });
  } catch (error) {
    console.error('[Visitors] DELETE error:', error);
    return NextResponse.json({ error: 'Failed to remove visitor' }, { status: 500 });
  }
}
