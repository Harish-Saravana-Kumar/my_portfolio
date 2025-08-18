"use client";

import { MdHome, MdPerson, MdBuild, MdEmojiEvents } from "react-icons/md";
import { FiGrid, FiMail } from "react-icons/fi";
import Link from "next/link";

export default function EducationCertificationsSection() {
    const navItems = [
        { name: "Home", path: "/", icon: <MdHome /> },
        { name: "About", path: "/about", icon: <MdPerson /> },
        { name: "Skills", path: "/skills", icon: <MdBuild /> },
        { name: "Projects", path: "/projects", icon: <FiGrid /> },
        { name: "Education & Certifications", path: "/education", icon: <MdEmojiEvents  /> },
      ];

  // Replace/expand these with your actual entries
  const education = [
    {
      institution: "Sri Eshwar College of Engineering, Coimbatore",
      degree: "Bachelor of Technology (Artificial Intelligence & Data Science)",
      duration: "2023 - 2027",
      result: "CGPA: 7.96"
    },
    {
      institution: "Government Higher Secondary School, Coimbatore",
      degree: "HSC",
      duration: "2021 - 2023",
      result: "89%"
    }
  ];

  const certifications = [
    { title: "The Complete Web Developer Bootcamp", provider: "Udemy", by: "Colt Steele" },
    { title: "The Complete Node.js Developer Course (3rd Edition)", provider: "Udemy", by: "Andrew Mead" },
    { title: "React - The Complete Guide (incl Hooks, React Router, Redux)", provider: "Udemy", by: "Maximilian Schwarzmüller" },
    { title: "MERN Stack Front To Back: Full Stack React, Redux & Node.js", provider: "Udemy", by: "Brad Traversy" },
    { title: "The Complete JavaScript Course 2023: From Zero to Expert!", provider: "Udemy", by: "Jonas Schmedtmann" }
  ];

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <section className="position-relative d-flex flex-column align-items-center justify-content-center min-vh-100 education-section py-5 px-3">
        <div className="mb-5 text-center">
          <h1 className="display-2 fw-bold text-dark mb-3">
            <span className="aws-gradient-text">Education & Certifications</span>
          </h1>
          <p className="fs-5 text-muted fw-medium mb-0">Academic Journey & Technical Growth</p>
        </div>

        <div className="row g-5 w-100 justify-content-center" style={{ maxWidth: 1100 }}>
          <div className="col-12 col-lg-6">
            <div className="glass-card p-4 rounded-4 h-100 mb-3">
              <h3 className="mb-4 d-flex align-items-center">
                <MdEmojiEvents className="me-2 text-warning" size={32}/> Education
              </h3>
              <ul className="list-unstyled">
                {education.map((edu, idx) => (
                  <li key={idx} className="mb-4">
                    <div className="fw-bold" style={{fontSize: "1.13rem"}}>{edu.degree}</div>
                    <div className="text-muted">{edu.institution}</div>
                    <div style={{color:"#FF9900", fontWeight:"600"}}>{edu.duration}</div>
                    <div className="fst-italic">{edu.result}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="glass-card p-4 rounded-4 h-100 mb-3">
              <h3 className="mb-4 d-flex align-items-center">
                <MdEmojiEvents className="me-2 text-warning" size={32}/> Certifications
              </h3>
              <ul className="list-unstyled">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="mb-4">
                    <div className="fw-bold" style={{fontSize: "1.09rem"}}>{cert.title}</div>
                    <div className="text-muted">{cert.provider} {cert.by && `| by ${cert.by}`}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Vertical Icon Sidebar */}
        <div className="vertical-icon-sidebar right">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`icon-nav-btn${item.path === "/education" ? " active" : ""}`}
              aria-label={item.name}
            >
              <span className="icon">{item.icon}</span>
              <span className="icon-tooltip">{item.name}</span>
            </Link>
          ))}
        </div>

        <style jsx>{`
          .education-section {
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e3f2fd 100%);
          }
          .glass-card {
            background: rgba(255, 255, 255, 0.92);
            border: 1px solid rgba(255,153,0,0.09);
            box-shadow: 0 8px 32px rgba(255,153,0,0.08);
            backdrop-filter: blur(12px);
            transition: box-shadow 0.3s, transform 0.3s;
          }
          .glass-card:hover {
            box-shadow: 0 15px 45px rgba(255,153,0,0.11);
            transform: translateY(-4px) scale(1.012);
          }
          .aws-gradient-text {
            background: linear-gradient(135deg, #FF9900, #FF7A00, #FFB84D, #E67E00);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: aws-gradient-shift 4s ease-in-out infinite;
          }
          @keyframes aws-gradient-shift {
            0%,100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .vertical-icon-sidebar {
            position: fixed;
            top: 50%;
            right: 32px;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            background: rgba(30, 41, 59, 0.45);
            border-radius: 2rem;
            padding: 2rem 0.7rem;
            backdrop-filter: blur(16px);
            z-index: 100;
          }
          .icon-nav-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px; height: 48px; border-radius: 50%;
            background: transparent; color: #232F3E; font-size: 2rem;
            transition: background 0.2s, transform 0.18s;
            border: none;
            outline: none;
            margin: 0 auto;
            position: relative;
            cursor: pointer;
          }
          .icon-nav-btn:hover {
            background: linear-gradient(135deg, #FF9900, #232F3E);
            color: white; transform: scale(1.12);
          }
          .icon-nav-btn.active {
            background: #FF9900; color: white;
          }
          .icon-tooltip {
            position: absolute; right: 60px; top: 50%; transform: translateY(-50%);
            background: #232F3E; color: white; font-weight: 700; font-size: 1.05rem;
            padding: 8px 18px; border-radius: 8px; opacity: 0; pointer-events: none;
            border: 2px solid #FF9900; transition: opacity 0.18s, right 0.18s;
          }
          .icon-nav-btn:hover .icon-tooltip {
            opacity: 1; right: 58px;
            background: linear-gradient(90deg, #FF9900, #FF7A00);
            color: #232F3E;
          }
        `}</style>
      </section>
    </>
  );
}
