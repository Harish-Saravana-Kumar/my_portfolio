/**
 * Live Visitors Component
 * 
 * Shows real-time visitor count via WebSocket.
 * Displays a small, non-intrusive badge in the bottom-right corner.
 */

'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useVisitors } from '@/lib/visitors-client';

export default function LiveVisitors() {
  const { visitorCount, isConnected, trackPage } = useVisitors();
  const pathname = usePathname();
  const [showTooltip, setShowTooltip] = useState(false);

  // Track page navigation
  useEffect(() => {
    trackPage(pathname);
  }, [pathname, trackPage]);

  return (
    <>
      <div
        className="live-visitors-badge"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        title={`${visitorCount} live visitor${visitorCount !== 1 ? 's' : ''}`}
      >
        <span className={`status-dot ${isConnected ? 'connected' : 'disconnected'}`} />
        <span className="visitor-count">{visitorCount}</span>
        <span className="visitor-label">live</span>

        {showTooltip && (
          <div className="visitor-tooltip">
            <div className="tooltip-row">
              <span>Status:</span>
              <span className={isConnected ? 'text-success' : 'text-danger'}>
                {isConnected ? 'Connected' : 'Reconnecting...'}
              </span>
            </div>
            <div className="tooltip-row">
              <span>Visitors:</span>
              <span>{visitorCount}</span>
            </div>
            <div className="tooltip-row tooltip-info">
              Live via Redis
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .live-visitors-badge {
          position: fixed;
          bottom: 20px;
          right: 20px;
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 50px;
          padding: 8px 16px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #232F3E;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          cursor: default;
          z-index: 999;
          transition: all 0.3s ease;
          user-select: none;
        }

        .live-visitors-badge:hover {
          box-shadow: 0 6px 25px rgba(255, 153, 0, 0.15);
          border-color: rgba(255, 153, 0, 0.3);
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .status-dot.connected {
          background: #10b981;
          box-shadow: 0 0 8px rgba(16, 185, 129, 0.5);
          animation: pulse-green 2s ease-in-out infinite;
        }

        .status-dot.disconnected {
          background: #f59e0b;
          animation: pulse-yellow 1s ease-in-out infinite;
        }

        @keyframes pulse-green {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes pulse-yellow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .visitor-count {
          color: #FF9900;
          font-weight: 800;
          font-size: 0.9rem;
        }

        .visitor-label {
          color: #6b7280;
          font-weight: 500;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .visitor-tooltip {
          position: absolute;
          bottom: calc(100% + 10px);
          right: 0;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 12px;
          padding: 12px 16px;
          min-width: 180px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          font-size: 0.78rem;
          animation: tooltip-in 0.2s ease-out;
        }

        @keyframes tooltip-in {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tooltip-row {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 3px 0;
          color: #374151;
        }

        .tooltip-row span:first-child {
          color: #6b7280;
        }

        .tooltip-info {
          margin-top: 6px;
          padding-top: 6px;
          border-top: 1px solid #f3f4f6;
          color: #9ca3af !important;
          font-size: 0.7rem;
          justify-content: center;
        }

        .text-success { color: #10b981; }
        .text-danger { color: #ef4444; }

        @media (max-width: 576px) {
          .live-visitors-badge {
            bottom: 12px;
            right: 12px;
            padding: 6px 12px;
            font-size: 0.75rem;
          }
          .visitor-tooltip {
            right: -10px;
            min-width: 160px;
          }
        }
      `}</style>
    </>
  );
}
