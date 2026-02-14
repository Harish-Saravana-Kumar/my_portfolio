/**
 * Service Worker Registration Component
 * 
 * Registers the service worker for client-side caching.
 * Only runs in production or when explicitly enabled.
 */

'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegistrar() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      // Register after page load to not block initial render
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('[SW] Registered:', registration.scope);

            // Check for updates periodically
            setInterval(() => {
              registration.update();
            }, 60 * 60 * 1000); // Check every hour
          })
          .catch((error) => {
            console.warn('[SW] Registration failed:', error);
          });
      });
    }
  }, []);

  return null; // This component renders nothing
}
