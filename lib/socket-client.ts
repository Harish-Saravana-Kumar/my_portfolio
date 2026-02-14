/**
 * Client-side Socket.io Hook
 * 
 * Connects to the WebSocket server for real-time features like
 * live visitor count and parallel connection handling.
 */

'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';

interface SocketState {
  visitorCount: number;
  isConnected: boolean;
  latency: number;
}

export function useSocket() {
  const socketRef = useRef<Socket | null>(null);
  const [state, setState] = useState<SocketState>({
    visitorCount: 0,
    isConnected: false,
    latency: 0,
  });

  useEffect(() => {
    // Connect to the WebSocket server (same origin)
    const socket = io({
      path: '/api/socketio',
      transports: ['websocket', 'polling'], // WebSocket first, polling fallback
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      timeout: 10000,
    });

    socketRef.current = socket;

    socket.on('connect', () => {
      console.log('[WebSocket] Connected:', socket.id);
      setState(prev => ({ ...prev, isConnected: true }));
    });

    socket.on('disconnect', (reason) => {
      console.log('[WebSocket] Disconnected:', reason);
      setState(prev => ({ ...prev, isConnected: false }));
    });

    // Receive real-time visitor count updates
    socket.on('visitor-count', (count: number) => {
      setState(prev => ({ ...prev, visitorCount: count }));
    });

    // Latency measurement via ping-pong
    socket.on('pong-check', (serverTime: number) => {
      const latency = Date.now() - serverTime;
      setState(prev => ({ ...prev, latency }));
    });

    // Periodic ping for latency measurement
    const pingInterval = setInterval(() => {
      if (socket.connected) {
        socket.emit('ping-check', Date.now());
      }
    }, 15000);

    return () => {
      clearInterval(pingInterval);
      socket.disconnect();
      socketRef.current = null;
    };
  }, []);

  // Track which page the user is viewing
  const trackPage = useCallback((page: string) => {
    if (socketRef.current?.connected) {
      socketRef.current.emit('page-view', page);
    }
  }, []);

  return {
    ...state,
    trackPage,
    socket: socketRef.current,
  };
}
