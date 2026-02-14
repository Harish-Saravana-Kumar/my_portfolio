"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Link from "next/link";
import {
  MdEmail, MdPhone, MdLocationOn
} from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function ContactSection() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Let's Connect",
        "Reach Out to Me",
        "Get In Touch",
        "Let's Collaborate"
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });
    return () => typed.destroy();
  }, []);


  const contactInfo = [
    {
      icon: <MdEmail size={28} />,
      label: "Email",
      value: "harish.s2023ai-ds@sece.ac.in",
      href: "mailto:harish.s2023ai-ds@sece.ac.in",
      color: "#FF9900"
    },
    {
      icon: <MdPhone size={28} />,
      label: "Phone",
      value: "+91 9345306280",
      href: "tel:+919345306280",
      color: "#00A1E0"
    },
    {
      icon: <MdLocationOn size={28} />,
      label: "Location",
      value: "Coimbatore, Tamil Nadu, India",
      href: null,
      color: "#10b981"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin size={32} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/harishs-developer/",
      color: "#0A66C2",
      handle: "@harishs-developer"
    },
    {
      icon: <FaGithub size={32} />,
      name: "GitHub",
      url: "https://github.com/Harish-Saravana-Kumar",
      color: "#181717",
      handle: "@Harish-Saravana-Kumar"
    }
  ];

  const codingProfiles = [
    {
      icon: <SiLeetcode size={28} />,
      name: "LeetCode",
      stats: "150+ problems • Rating: 1,572 • 14 contests",
      url: "https://leetcode.com/u/malarharish007/",
      color: "#FFA116"
    },
    {
      icon: <SiGeeksforgeeks size={28} />,
      name: "GeeksforGeeks",
      stats: "50+ problems • Institute Rank: 497",
      url: "https://practice.geeksforgeeks.org/leaderboard",
      color: "#2F8D46"
    },
    {
      icon: <FaCode size={28} />,
      name: "SkillRack",
      stats: "300+ problems • Rank: 83,836",
      url: "https://www.skillrack.com/faces/resume.xhtml?id=483834&key=f99fe56791b1ce873f22d4bad9c135cbff0df29e",
      color: "#6366F1"
    }
  ];

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <section className="position-relative d-flex flex-column align-items-center justify-content-center min-vh-100 contact-section py-5 px-3">
        {/* Animated background */}
        <div className="position-absolute w-100 h-100 background-layer">
          <div className="floating-shape-1"></div>
          <div className="floating-shape-2"></div>
          <div className="floating-shape-3"></div>
          <div className="floating-shape-4"></div>
        </div>

        {/* Page Header */}
        <div className="page-header-container mb-5 text-center fade-in-animation" style={{animationDelay: '0.1s'}}>
          <div className="header-badge mb-3">
            <FiSend className="me-2" size={18} />
            Let&apos;s Work Together
          </div>
          <h1 className="display-2 fw-bold text-dark mb-3">
            <span className="aws-gradient-text">Contact Me</span>
          </h1>
          <h2 className="display-6 fw-bold typing-container" style={{ minHeight: "3rem" }}>
            <span ref={el} className="aws-rainbow-text" />
          </h2>
          <div className="header-line mx-auto mt-3"></div>
        </div>

        {/* Contact Info Cards */}
        <div className="row g-4 justify-content-center mb-5" style={{ maxWidth: 900 }}>
          {contactInfo.map((info, idx) => (
            <div key={idx} className="col-12 col-md-4 fade-in-animation" style={{animationDelay: `${0.3 + idx * 0.12}s`}}>
              {info.href ? (
                <a href={info.href} className="text-decoration-none">
                  <div className="contact-info-card p-4 rounded-4 text-center h-100">
                    <div className="contact-icon-circle mb-3 mx-auto" style={{"--icon-color": info.color}}>
                      {info.icon}
                    </div>
                    <h5 className="fw-bold mb-1 text-dark">{info.label}</h5>
                    <p className="text-muted mb-0 small">{info.value}</p>
                  </div>
                </a>
              ) : (
                <div className="contact-info-card p-4 rounded-4 text-center h-100">
                  <div className="contact-icon-circle mb-3 mx-auto" style={{"--icon-color": info.color}}>
                    {info.icon}
                  </div>
                  <h5 className="fw-bold mb-1 text-dark">{info.label}</h5>
                  <p className="text-muted mb-0 small">{info.value}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="row g-4 justify-content-center mb-5" style={{ maxWidth: 700 }}>
          <div className="col-12 text-center fade-in-animation" style={{animationDelay: '0.6s'}}>
            <h3 className="fw-bold mb-4 section-heading">
              <span className="heading-emoji">🌐</span> Social Profiles
            </h3>
          </div>
          {socialLinks.map((social, idx) => (
            <div key={idx} className="col-12 col-sm-6 fade-in-animation" style={{animationDelay: `${0.7 + idx * 0.12}s`}}>
              <a href={social.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <div className="social-card p-4 rounded-4 d-flex align-items-center gap-3 h-100">
                  <div className="social-icon-box" style={{color: social.color}}>
                    {social.icon}
                  </div>
                  <div>
                    <h5 className="fw-bold mb-0 text-dark">{social.name}</h5>
                    <p className="text-muted small mb-0">{social.handle}</p>
                  </div>
                  <span className="ms-auto link-arrow">↗</span>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Coding Profiles */}
        <div className="row g-4 justify-content-center" style={{ maxWidth: 1000 }}>
          <div className="col-12 text-center fade-in-animation" style={{animationDelay: '0.9s'}}>
            <h3 className="fw-bold mb-4 section-heading">
              <span className="heading-emoji">💻</span> Coding Profiles
            </h3>
          </div>
          {codingProfiles.map((profile, idx) => (
            <div key={idx} className="col-12 col-md-4 fade-in-animation" style={{animationDelay: `${1.0 + idx * 0.12}s`}}>
              <a href={profile.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <div className="coding-card p-4 rounded-4 text-center h-100">
                  <div className="coding-icon mb-3" style={{color: profile.color}}>
                    {profile.icon}
                  </div>
                  <h5 className="fw-bold mb-2 text-dark">{profile.name}</h5>
                  <p className="text-muted small mb-0">{profile.stats}</p>
                  <span className="view-link mt-2 d-inline-block">View Profile ↗</span>
                </div>
              </a>
            </div>
          ))}
        </div>


        <style jsx>{`
          .contact-section {
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e3f2fd 100%);
            z-index: 1;
          }
          .background-layer { top: 0; left: 0; z-index: 0; }

          /* Header */
          .page-header-container { position: relative; z-index: 2; }
          .header-badge {
            display: inline-flex; align-items: center;
            background: rgba(255,153,0,0.08); color: #FF9900;
            font-weight: 700; font-size: 0.95rem; letter-spacing: 0.5px;
            padding: 8px 20px; border-radius: 50px;
            border: 1px solid rgba(255,153,0,0.2);
            animation: badge-glow 3s ease-in-out infinite;
          }
          @keyframes badge-glow {
            0%,100% { box-shadow: 0 0 10px rgba(255,153,0,0.1); }
            50% { box-shadow: 0 0 20px rgba(255,153,0,0.25); }
          }
          .header-line {
            width: 80px; height: 4px; border-radius: 2px;
            background: linear-gradient(90deg, #FF9900, #FF7A00, #FFB84D);
            animation: line-expand 1.5s ease-out forwards;
          }
          @keyframes line-expand { from { width: 0; } to { width: 80px; } }
          .typing-container { font-size: clamp(1.5rem, 3vw, 3rem); }
          .section-heading { color: #232F3E; font-size: 1.5rem; }
          .heading-emoji { font-size: 1.3em; margin-right: 6px; }

          /* Contact Info Cards */
          .contact-info-card {
            background: rgba(255,255,255,0.92);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255,153,0,0.09);
            box-shadow: 0 8px 32px rgba(255,153,0,0.08);
            transition: all 0.3s ease;
            position: relative; overflow: hidden;
          }
          .contact-info-card::before {
            content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
            background: linear-gradient(90deg, #FF9900, #FF7A00, #FFB84D, #00A1E0);
            background-size: 300% 100%;
            animation: gradient-slide 4s linear infinite;
          }
          @keyframes gradient-slide { 0% { background-position: 0% 0%; } 100% { background-position: 300% 0%; } }
          .contact-info-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 15px 45px rgba(255,153,0,0.14);
          }
          .contact-icon-circle {
            width: 56px; height: 56px; border-radius: 50%;
            background: rgba(255,153,0,0.08);
            display: flex; align-items: center; justify-content: center;
            color: var(--icon-color, #FF9900);
            transition: all 0.3s ease;
            border: 2px solid rgba(255,153,0,0.15);
          }
          .contact-info-card:hover .contact-icon-circle {
            background: linear-gradient(135deg, #FF9900, #FF7A00);
            color: white;
            transform: scale(1.1) rotate(5deg);
            border-color: transparent;
          }

          /* Social Cards */
          .social-card {
            background: rgba(255,255,255,0.92);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255,153,0,0.09);
            box-shadow: 0 8px 32px rgba(255,153,0,0.08);
            transition: all 0.3s ease;
          }
          .social-card:hover {
            transform: translateX(6px);
            box-shadow: 0 12px 35px rgba(255,153,0,0.14);
            border-color: rgba(255,153,0,0.2);
          }
          .social-icon-box { transition: transform 0.3s; }
          .social-card:hover .social-icon-box { transform: scale(1.15); }
          .link-arrow { color: #FF9900; font-size: 1.2rem; font-weight: 700; transition: transform 0.3s; }
          .social-card:hover .link-arrow { transform: translate(4px, -4px); }

          /* Coding Profile Cards */
          .coding-card {
            background: rgba(255,255,255,0.92);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255,153,0,0.09);
            box-shadow: 0 8px 32px rgba(255,153,0,0.08);
            transition: all 0.3s ease;
            position: relative; overflow: hidden;
          }
          .coding-card::before {
            content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
            background: linear-gradient(90deg, #FF9900, #FF7A00, #FFB84D, #00A1E0);
            background-size: 300% 100%;
            animation: gradient-slide 4s linear infinite;
          }
          .coding-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 15px 45px rgba(255,153,0,0.14);
          }
          .coding-icon { transition: transform 0.3s; }
          .coding-card:hover .coding-icon { transform: scale(1.2) rotate(5deg); }
          .view-link {
            color: #FF9900; font-weight: 700; font-size: 0.85rem;
            opacity: 0; transform: translateY(8px);
            transition: all 0.3s;
          }
          .coding-card:hover .view-link { opacity: 1; transform: translateY(0); }

          /* Animations */
          .fade-in-animation { opacity: 0; animation: fade-in-up 0.8s ease-out forwards; }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* Floating Shapes */
          .floating-shape-1 { position: absolute; top: 3rem; left: 2rem; width: 4rem; height: 4rem; background: linear-gradient(to right, #fb923c, #fbbf24); border-radius: 50%; opacity: 0.15; animation: bounce-slow 6s ease-in-out infinite; }
          .floating-shape-2 { position: absolute; top: 8rem; right: 6rem; width: 3rem; height: 3rem; background: linear-gradient(to right, #60a5fa, #2563eb); border-radius: 0.5rem; opacity: 0.15; transform: rotate(45deg); animation: pulse-slow 4s ease-in-out infinite; }
          .floating-shape-3 { position: absolute; bottom: 6rem; left: 20%; width: 2.5rem; height: 2.5rem; background: linear-gradient(to right, #f97316, #ef4444); border-radius: 50%; opacity: 0.15; animation: spin-slow 8s linear infinite; }
          .floating-shape-4 { position: absolute; top: 50%; right: 15%; width: 3.5rem; height: 3.5rem; background: linear-gradient(to right, #10b981, #059669); border-radius: 0.75rem; opacity: 0.15; transform: rotate(30deg); animation: bounce-slow 7s ease-in-out infinite reverse; }
          @keyframes bounce-slow { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(180deg); } }
          @keyframes pulse-slow { 0%,100% { transform: scale(1) rotate(45deg); opacity: 0.15; } 50% { transform: scale(1.1) rotate(225deg); opacity: 0.25; } }
          @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

          /* Gradient Text */
          .aws-gradient-text {
            background: linear-gradient(135deg, #FF9900, #FF7A00, #FFB84D, #E67E00);
            background-size: 300% 300%;
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            background-clip: text; animation: aws-gradient-shift 4s ease-in-out infinite;
          }
          .aws-rainbow-text {
            background: linear-gradient(90deg, #FF9900, #FF7A00, #FFB84D, #232F3E, #146EB4, #00A1E0, #FF9900);
            background-size: 400% 400%;
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            background-clip: text; animation: aws-rainbow-flow 5s ease-in-out infinite;
            filter: drop-shadow(0 0 8px rgba(255,153,0,0.3));
          }
          @keyframes aws-gradient-shift { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
          @keyframes aws-rainbow-flow { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }


          @media (max-width: 768px) {
            .contact-section { padding: 80px 0.75rem 3rem !important; }
            .contact-info-card { padding: 1.2rem !important; }
            .contact-icon-circle { width: 48px; height: 48px; }
            .social-card { padding: 1rem !important; }
            .coding-card { padding: 1.2rem !important; }
            .section-heading { font-size: 1.25rem; }
          }
          @media (max-width: 480px) {
            .contact-section { padding: 70px 0.5rem 2rem !important; }
            .contact-info-card { padding: 1rem !important; }
            .contact-info-card h5 { font-size: 0.95rem; }
            .contact-info-card p { font-size: 0.78rem !important; }
            .social-card { padding: 0.8rem !important; gap: 8px !important; }
            .coding-card { padding: 1rem !important; }
            .coding-card h5 { font-size: 0.95rem; }
          }
        `}</style>
      </section>
    </>
  );
}
