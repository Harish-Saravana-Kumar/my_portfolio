"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;
  const isHovered = (name: string) => hoveredItem === name;

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes activeLinkShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes underlineShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .hdr-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 70%;
          height: 2.5px;
          background: linear-gradient(90deg, #FF9900, #FFB84D, #00A1E0);
          background-size: 200% 200%;
          animation: underlineShift 3s ease infinite;
          border-radius: 2px;
          transition: transform 0.3s ease;
        }
        .hdr-link:hover::after {
          transform: translateX(-50%) scaleX(1);
        }
        .hdr-link-active::after {
          display: none !important;
        }

        /* Hamburger button */
        .hdr-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          z-index: 1100;
        }
        .hdr-hamburger span {
          display: block;
          width: 24px;
          height: 2.5px;
          background: #FF9900;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .hdr-hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .hdr-hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hdr-hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        /* Mobile overlay */
        .hdr-mobile-overlay {
          display: none;
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.4);
          z-index: 999;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .hdr-mobile-overlay.visible {
          opacity: 1;
        }

        /* Mobile menu */
        .hdr-mobile-menu {
          display: none;
          position: fixed;
          top: 0;
          right: -280px;
          width: 280px;
          height: 100vh;
          background: #ffffff;
          z-index: 1050;
          flex-direction: column;
          padding: 80px 24px 32px;
          gap: 8px;
          box-shadow: -4px 0 24px rgba(0,0,0,0.12);
          transition: right 0.3s ease;
          overflow-y: auto;
        }
        .hdr-mobile-menu.open {
          right: 0;
        }
        .hdr-mobile-link {
          display: block;
          padding: 14px 20px;
          color: #232F3E;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.2s ease;
          text-transform: uppercase;
          border: 1px solid transparent;
        }
        .hdr-mobile-link:hover {
          background: rgba(255,153,0,0.08);
          color: #FF9900;
        }
        .hdr-mobile-link-active {
          background: linear-gradient(135deg, #FF9900, #FF7A00, #FFB84D) !important;
          color: #fff !important;
          box-shadow: 0 4px 18px rgba(255,153,0,0.4);
        }

        @media (max-width: 768px) {
          .hdr-nav-inner {
            justify-content: space-between !important;
            padding: 10px 16px !important;
          }
          .hdr-desktop-links {
            display: none !important;
          }
          .hdr-hamburger {
            display: flex;
          }
          .hdr-mobile-overlay {
            display: block;
          }
          .hdr-mobile-menu {
            display: flex;
          }
          .hdr-brand {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .hdr-mobile-overlay,
          .hdr-mobile-menu,
          .hdr-hamburger {
            display: none !important;
          }
          .hdr-brand {
            display: none !important;
          }
        }
      `}} />
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: '#ffffff',
        boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
        borderBottom: '2px solid transparent',
        borderImage: 'linear-gradient(90deg, #FF9900, #FF7A00, #FFB84D, #00A1E0, #FF9900) 1',
      }}>
        <div className="hdr-nav-inner" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.2rem',
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '14px 28px',
        }}>
          {/* Mobile brand */}
          <Link href="/" className="hdr-brand" style={{
            display: 'none',
            fontWeight: 800,
            fontSize: '1.2rem',
            textDecoration: 'none',
            background: 'linear-gradient(135deg, #FF9900, #FF7A00, #FFB84D)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Harish S
          </Link>

          {/* Desktop links */}
          <div className="hdr-desktop-links" style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`hdr-link${isActive(item.path) ? " hdr-link-active" : ""}`}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  padding: '10px 24px',
                  color: isActive(item.path) ? '#fff' : isHovered(item.name) ? '#FF9900' : '#232F3E',
                  fontSize: '0.95rem',
                  fontWeight: isActive(item.path) ? 700 : 600,
                  letterSpacing: '0.8px',
                  textDecoration: 'none',
                  borderRadius: '10px',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s ease',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'transparent',
                  position: 'relative',
                  textTransform: 'uppercase',
                  ...(isActive(item.path) ? {
                    background: 'linear-gradient(135deg, #FF9900, #FF7A00, #FFB84D)',
                    backgroundSize: '300% 300%',
                    animation: 'activeLinkShift 4s ease infinite',
                    boxShadow: '0 4px 18px rgba(255,153,0,0.4)',
                    textShadow: '0 1px 4px rgba(0,0,0,0.2)',
                  } : isHovered(item.name) ? {
                    background: 'rgba(255,153,0,0.12)',
                    borderColor: 'rgba(255,153,0,0.2)',
                    transform: 'translateY(-1px)',
                    textShadow: '0 0 12px rgba(255,153,0,0.4)',
                  } : {}),
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Hamburger button */}
          <button
            className={`hdr-hamburger${mobileMenuOpen ? ' open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`hdr-mobile-overlay${mobileMenuOpen ? ' visible' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        style={{ pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}
      />

      {/* Mobile slide-out menu */}
      <div className={`hdr-mobile-menu${mobileMenuOpen ? ' open' : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`hdr-mobile-link${isActive(item.path) ? ' hdr-mobile-link-active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
}
