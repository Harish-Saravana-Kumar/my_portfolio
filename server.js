/**
 * Custom Server with Next.js + Socket.io WebSocket
 * 
 * Handles:
 * - Next.js page serving
 * - Socket.io WebSocket for real-time concurrent connections
 * - Live visitor tracking across all connected clients
 * - Graceful shutdown
 * 
 * Run: node server.js
 */

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { Server: SocketServer } = require('socket.io');

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME || 'localhost';
const port = parseInt(process.env.PORT || '3000', 10);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

// Track connected visitors
const visitors = new Map(); // socketId -> { page, connectedAt }

app.prepare().then(() => {
  const httpServer = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  // Initialize Socket.io
  const io = new SocketServer(httpServer, {
    path: '/api/socketio',
    cors: {
      origin: dev ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_SITE_URL || '*',
      methods: ['GET', 'POST'],
    },
    transports: ['websocket', 'polling'],
    pingTimeout: 30000,
    pingInterval: 25000,
    // Connection limits for handling parallel access
    maxHttpBufferSize: 1e6, // 1MB
    connectTimeout: 10000,
  });

  // WebSocket connection handler
  io.on('connection', (socket) => {
    const clientIp = socket.handshake.headers['x-forwarded-for'] || socket.handshake.address;
    console.log(`[WS] Client connected: ${socket.id} (IP: ${clientIp})`);

    // Track this visitor
    visitors.set(socket.id, {
      page: '/',
      connectedAt: Date.now(),
      ip: clientIp,
    });

    // Broadcast updated visitor count to ALL clients
    io.emit('visitor-count', visitors.size);

    // Track page navigation
    socket.on('page-view', (page) => {
      const visitor = visitors.get(socket.id);
      if (visitor) {
        visitor.page = page;
        visitors.set(socket.id, visitor);
      }
      console.log(`[WS] ${socket.id} viewing: ${page}`);
    });

    // Latency ping-pong
    socket.on('ping-check', (clientTime) => {
      socket.emit('pong-check', clientTime);
    });

    // Handle disconnect
    socket.on('disconnect', (reason) => {
      console.log(`[WS] Client disconnected: ${socket.id} (${reason})`);
      visitors.delete(socket.id);
      // Broadcast updated count
      io.emit('visitor-count', visitors.size);
    });

    // Handle errors
    socket.on('error', (err) => {
      console.error(`[WS] Socket error (${socket.id}):`, err.message);
    });
  });

  // Log stats every 30 seconds
  setInterval(() => {
    const count = visitors.size;
    if (count > 0) {
      console.log(`[WS] Active visitors: ${count}`);
    }
  }, 30000);

  // Start server
  httpServer.listen(port, hostname, () => {
    console.log(`
╔══════════════════════════════════════════════════╗
║  🚀 Portfolio Server Running                     ║
║                                                  ║
║  URL:       http://${hostname}:${port}                 ║
║  Mode:      ${dev ? 'Development' : 'Production'}                        ║
║  WebSocket: Enabled (Socket.io)                  ║
║  Redis:     ${process.env.REDIS_URL ? 'Connected' : 'Fallback (in-memory)'}              ║
╚══════════════════════════════════════════════════╝
    `);
  });

  // Graceful shutdown
  const shutdown = (signal) => {
    console.log(`\n[Server] ${signal} received. Shutting down gracefully...`);

    // Notify all connected clients
    io.emit('server-shutdown', { message: 'Server is restarting...' });

    // Close WebSocket connections
    io.close(() => {
      console.log('[WS] All connections closed');
    });

    // Close HTTP server
    httpServer.close(() => {
      console.log('[Server] HTTP server closed');
      process.exit(0);
    });

    // Force exit after 10 seconds
    setTimeout(() => {
      console.log('[Server] Forced shutdown');
      process.exit(1);
    }, 10000);
  };

  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));
});
