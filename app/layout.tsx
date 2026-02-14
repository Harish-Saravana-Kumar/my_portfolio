import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import LiveVisitors from './components/LiveVisitors'
import ServiceWorkerRegistrar from './components/ServiceWorkerRegistrar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Harish S Portfolio',
  description: 'Full Stack Developer | MERN | AI & DS',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div style={{ paddingTop: '60px' }}>
          {children}
        </div>
        <LiveVisitors />
        <ServiceWorkerRegistrar />
      </body>
    </html>
  )
}
