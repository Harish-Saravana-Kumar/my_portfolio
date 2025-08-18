"use client";

import Link from "next/link";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="footer bg-white bg-opacity-90 backdrop-blur p-4 mt-auto">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="contact-info mb-3 mb-md-0 text-center text-md-start">
            <div className="d-block text-dark mb-1">
              <FiMail className="me-1" /> malarisharish007@gmail.com
            </div>
            <a href="tel:+919345306280" className="d-block text-decoration-none text-dark">
              <FiPhone className="me-1" /> +91 9345306280
            </a>
          </div>
          <div className="social-links d-flex gap-3 justify-content-center justify-content-md-start">
            <a href="https://www.linkedin.com/in/harishs-developer" target="_blank" rel="noopener noreferrer"
              className="text-dark social-icon" aria-label="LinkedIn">
              <FaLinkedin size="24" />
            </a>
            <a href="https://github.com/Harish-Saravana-Kumar" target="_blank" rel="noopener noreferrer"
              className="text-dark social-icon" aria-label="GitHub">
              <FaGithub size="24" />
            </a>
          </div>
        </div>

        <style jsx>{`
          .footer {
            border-top: 1px solid rgba(255, 153, 0, 0.3);
            box-shadow: 0 -2px 10px rgba(255, 153, 0, 0.15);
            position: relative;
            z-index: 1000;
          }
          a.social-icon {
            transition: color 0.3s, filter 0.3s;
            cursor: pointer;
            filter: drop-shadow(0 0 0 transparent);
          }
          a.social-icon:hover {
            color: #FF9900;
            filter: drop-shadow(0 0 5px #FF9900);
          }
          a.social-icon:focus-visible {
            outline: 2px solid #FF9900;
            outline-offset: 3px;
          }
        `}</style>
      </footer>
    </>
  );
}
