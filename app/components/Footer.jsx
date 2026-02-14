"use client";

import Link from "next/link";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-inner">
          {/* Left - Brand & Copyright */}
          <div className="footer-brand">
            <h4 className="footer-name">Harish S</h4>
            <p className="footer-tagline">Full Stack Developer &amp; AI/DS Student</p>
            <p className="footer-copyright">&copy; {new Date().getFullYear()} Harish S. All rights reserved.</p>
          </div>

          {/* Center - Quick Links */}
          <div className="footer-links">
            <h5 className="footer-section-title">Quick Links</h5>
            <div className="footer-link-grid">
              <Link href="/" className="footer-link">Home</Link>
              <Link href="/about" className="footer-link">About</Link>
              <Link href="/skills" className="footer-link">Skills</Link>
              <Link href="/projects" className="footer-link">Projects</Link>
              <Link href="/education" className="footer-link">Education</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
            </div>
          </div>

          {/* Right - Contact & Socials */}
          <div className="footer-contact">
            <h5 className="footer-section-title">Get In Touch</h5>
            <a href="mailto:harish.s2023ai-ds@sece.ac.in" className="footer-contact-item">
              <FiMail className="me-2" /> harish.s2023ai-ds@sece.ac.in
            </a>
            <a href="tel:+919345306280" className="footer-contact-item">
              <FiPhone className="me-2" /> +91 9345306280
            </a>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/in/harishs-developer" target="_blank" rel="noopener noreferrer"
                className="footer-social-icon" aria-label="LinkedIn">
                <FaLinkedin size="22" />
              </a>
              <a href="https://github.com/Harish-Saravana-Kumar" target="_blank" rel="noopener noreferrer"
                className="footer-social-icon" aria-label="GitHub">
                <FaGithub size="22" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <span className="footer-bottom-text">
            Designed &amp; Built with ❤️ by <span className="footer-highlight">Harish S</span>
          </span>
        </div>

        <style jsx>{`
          .footer-container {
            background: #ffffff;
            border-top: 3px solid transparent;
            border-image: linear-gradient(90deg, #FF9900, #FF7A00, #FFB84D, #00A1E0, #FF9900) 1;
            padding: 2.5rem 2rem 0;
            color: #FF9900;
            position: relative;
            z-index: 50;
          }
          .footer-inner {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            max-width: 1100px;
            margin: 0 auto;
            gap: 2rem;
            flex-wrap: wrap;
          }

          /* Brand */
          .footer-brand { flex: 1; min-width: 220px; }
          .footer-name {
            font-size: 1.6rem;
            font-weight: 800;
            margin-bottom: 4px;
            background: linear-gradient(270deg, #FF9900, #FF7A00, #FFB84D, #E67E00, #FF9900);
            background-size: 600% 600%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: footerTextShift 6s ease infinite;
          }
          .footer-tagline {
            font-size: 0.9rem;
            color: #c47a00;
            margin-bottom: 8px;
            font-weight: 500;
          }
          .footer-copyright {
            font-size: 0.78rem;
            color: #b8860b;
            opacity: 0.8;
          }

          /* Links */
          .footer-links { flex: 1; min-width: 180px; }
          .footer-section-title {
            font-size: 1rem;
            font-weight: 700;
            margin-bottom: 12px;
            color: #232F3E;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            position: relative;
            padding-bottom: 6px;
          }
          .footer-section-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 40px;
            height: 2.5px;
            background: linear-gradient(90deg, #FF9900, #FFB84D, #00A1E0);
            background-size: 200% 200%;
            animation: footerTextShift 4s ease infinite;
            border-radius: 2px;
          }
          .footer-link-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6px 20px;
          }
          .footer-link {
            text-decoration: none;
            font-size: 0.88rem;
            font-weight: 600;
            padding: 4px 0;
            transition: all 0.25s ease;
            background: linear-gradient(270deg, #FF9900, #FF7A00, #FFB84D, #E67E00, #FF9900);
            background-size: 600% 600%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: footerTextShift 6s ease infinite;
          }
          .footer-link:hover {
            animation: footerTextShift 1.5s ease infinite;
            transform: translateX(3px);
            filter: brightness(1.2);
          }

          /* Contact */
          .footer-contact { flex: 1; min-width: 240px; }
          .footer-contact-item {
            display: flex;
            align-items: center;
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 600;
            margin-bottom: 8px;
            transition: all 0.25s ease;
            background: linear-gradient(270deg, #FF9900, #c47a00, #FFB84D, #FF9900);
            background-size: 400% 400%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: footerTextShift 5s ease infinite;
          }
          .footer-contact-item:hover {
            animation: footerTextShift 1s ease infinite;
            transform: translateX(3px);
          }
          .footer-socials {
            display: flex;
            gap: 12px;
            margin-top: 12px;
          }
          .footer-social-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: linear-gradient(135deg, #fff7ed, #fff);
            border: 2px solid #FF9900;
            color: #FF9900;
            transition: all 0.3s ease;
          }
          .footer-social-icon:hover {
            background: linear-gradient(135deg, #FF9900, #FF7A00);
            color: #fff;
            transform: translateY(-3px) scale(1.1);
            box-shadow: 0 6px 20px rgba(255, 153, 0, 0.35);
            border-color: transparent;
          }

          /* Bottom Bar */
          .footer-bottom-bar {
            text-align: center;
            padding: 16px 0;
            margin-top: 2rem;
            border-top: 1px solid rgba(255, 153, 0, 0.2);
          }
          .footer-bottom-text {
            font-size: 0.82rem;
            font-weight: 500;
            color: #b8860b;
          }
          .footer-highlight {
            font-weight: 700;
            background: linear-gradient(270deg, #FF9900, #FF7A00, #FFB84D, #00A1E0, #FF9900);
            background-size: 600% 600%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: footerTextShift 4s ease infinite;
          }

          @keyframes footerTextShift {
            0% { background-position: 0% 50%; }
            25% { background-position: 50% 50%; }
            50% { background-position: 100% 50%; }
            75% { background-position: 50% 50%; }
            100% { background-position: 0% 50%; }
          }

          @media (max-width: 768px) {
            .footer-container {
              padding: 1.5rem 1rem 0;
            }
            .footer-inner {
              flex-direction: column;
              align-items: center;
              text-align: center;
              gap: 1.5rem;
            }
            .footer-section-title::after {
              left: 50%;
              transform: translateX(-50%);
            }
            .footer-link-grid {
              justify-items: center;
            }
            .footer-contact-item {
              justify-content: center;
              font-size: 0.8rem;
            }
            .footer-socials {
              justify-content: center;
            }
            .footer-name {
              font-size: 1.3rem;
            }
            .footer-tagline {
              font-size: 0.82rem;
            }
          }
          @media (max-width: 480px) {
            .footer-container {
              padding: 1.2rem 0.75rem 0;
            }
            .footer-inner {
              gap: 1rem;
            }
            .footer-link-grid {
              gap: 4px 14px;
            }
            .footer-link {
              font-size: 0.82rem;
            }
          }
        `}</style>
      </footer>
    </>
  );
}
