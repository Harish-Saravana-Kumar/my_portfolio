/**
 * Live Visitors Hook (Vercel-compatible)
 * 
 * Replaces Socket.io with polling + Upstash Redis for serverless deployment.
 * Sends a heartbeat every 10 seconds to keep the visitor "alive".
 * Visitor keys auto-expire in Redis after 30 seconds of no heartbeat.
 */

'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface VisitorState {
  visitorCount: number;
  isConnected: boolean;
}

function generateVisitorId(): string {
  // Generate a unique ID for this browser tab
  const array = new Uint8Array(8);
  crypto.getRandomValues(array);
  return Array.from(array, (b) => b.toString(16).padStart(2, '0')).join('');
}

export function useVisitors() {
  const visitorIdRef = useRef<string>('');
  const [state, setState] = useState<VisitorState>({
    visitorCount: 0,
    isConnected: false,
  });

  useEffect(() => {
    // Generate a unique ID for this tab session
    visitorIdRef.current = generateVisitorId();
    const visitorId = visitorIdRef.current;
    let intervalId: ReturnType<typeof setInterval>;
    let isActive = true;

    // Heartbeat: POST to /api/visitors every 10 seconds
    const heartbeat = async () => {
      if (!isActive) return;
      try {
        const res = await fetch('/api/visitors', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ visitorId, page: window.location.pathname }),
        });
        if (res.ok) {
          const data = await res.json();
          setState({ visitorCount: data.count, isConnected: true });
        } else {
          setState((prev) => ({ ...prev, isConnected: false }));
        }
      } catch {
        setState((prev) => ({ ...prev, isConnected: false }));
      }
    };

    // Initial heartbeat + start polling
    heartbeat();
    intervalId = setInterval(heartbeat, 10000);

    // Cleanup: remove visitor on page close
    const handleUnload = () => {
      isActive = false;
      // Use sendBeacon for reliable delivery on page close
      navigator.sendBeacon(
        '/api/visitors',
        new Blob(
          [JSON.stringify({ visitorId, _method: 'DELETE' })],
          { type: 'application/json' }
        )
      );
    };

    window.addEventListener('beforeunload', handleUnload);

    return () => {
      isActive = false;
      clearInterval(intervalId);
      window.removeEventListener('beforeunload', handleUnload);

      // Also try to remove on component unmount
      fetch('/api/visitors', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ visitorId }),
      }).catch(() => {});
    };
  }, []);

  const trackPage = useCallback((page: string) => {
    if (!visitorIdRef.current) return;
    fetch('/api/visitors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ visitorId: visitorIdRef.current, page }),
    }).catch(() => {});
  }, []);

  return {
    ...state,
    trackPage,
  };
}
