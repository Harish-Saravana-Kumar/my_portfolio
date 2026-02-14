"use client";

import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { MdSchool, MdVerified } from "react-icons/md";
import { FiAward } from "react-icons/fi";

export default function EducationCertificationsSection() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Academic Journey",
        "Professional Certifications",
        "Continuous Learning",
        "Technical Growth"
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

  // Replace/expand these with your actual entries
  const education = [
    {
      institution: "Sri Eshwar College of Engineering, Coimbatore",
      degree: "Bachelor of Technology (Artificial Intelligence & Data Science)",
      duration: "2023 - 2027",
      result: "CGPA: 8.05 (upto 4th sem)"
    },
    {
      institution: "Government Higher Secondary School, Coimbatore",
      degree: "HSC",
      duration: "2021 - 2023",
      result: "89.6%"
    },
    {
      institution: "Vivekam Matric Higher Sec School",
      degree: "SSLC",
      duration: "2020 - 2021",
      result: "PASS"
    }
  ];

  const certifications = [
    { title: "Java Programming Beginner to Master", provider: "Udemy", link: "https://www.udemy.com/certificate/UC-bdceb9ce-300c-49e5-8e54-a5dff7df499c/" },
    { title: "Basics in HTML, CSS & JavaScript", provider: "Udemy", link: "https://www.udemy.com/certificate/UC-fc2da4a1-6b68-4b6e-a773-ab1d0f39d54a/" },
    { title: "Basics in AWS", provider: "Udemy", link: "https://www.udemy.com/certificate/UC-fdf2c31d-9e50-4636-a091-50a4d85c6776/" },
    { title: "Basics in DevOps", provider: "Udemy", link: "https://www.udemy.com/certificate/UC-1acad5a8-fc0b-4f43-8c5b-c24bbca5bd0b/" },
    { title: "React JS Crash Course", provider: "Udemy", link: "https://www.udemy.com/certificate/UC-0a669a6d-2bf3-4ba3-adf2-0c9884914f0c/" },
    { title: "AWS Basic Foundations", provider: "AWS", link: "https://drive.google.com/file/d/1lp50KW5uRXWzgprdHBh_gqJkmTEE_ymv/view?usp=drive_link" },
    { title: "Cisco Networking Basics", provider: "Cisco", link: "https://www.credly.com/badges/0995a564-e40f-41c8-9767-2db581cf2e15/public_url" }
  ];

  const [certSlide, setCertSlide] = useState(0);
  const certTimer = useRef(null);

  useEffect(() => {
    certTimer.current = setInterval(() => {
      setCertSlide(prev => (prev + 1) % certifications.length);
    }, 4000);
    return () => clearInterval(certTimer.current);
  }, []);

  const goToCert = (idx) => {
    setCertSlide(idx);
    clearInterval(certTimer.current);
    certTimer.current = setInterval(() => {
      setCertSlide(prev => (prev + 1) % certifications.length);
    }, 4000);
  };
  const nextCert = () => goToCert((certSlide + 1) % certifications.length);
  const prevCert = () => goToCert((certSlide - 1 + certifications.length) % certifications.length);

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <section className="position-relative d-flex flex-column align-items-center justify-content-center min-vh-100 education-section py-5 px-3">
        {/* Animated background elements */}
        <div className="position-absolute w-100 h-100 background-layer">
          <div className="floating-shape-1"></div>
          <div className="floating-shape-2"></div>
          <div className="floating-shape-3"></div>
          <div className="floating-shape-4"></div>
        </div>

        {/* Page Header Container */}
        <div className="page-header-container mb-5 text-center fade-in-animation" style={{animationDelay: '0.1s'}}>
          <div className="header-badge mb-3">
            <MdSchool className="me-2" size={22} />
            Academic Journey &amp; Technical Growth
          </div>
          <h1 className="display-2 fw-bold text-dark mb-3">
            <span className="aws-gradient-text">Education &amp; Certifications</span>
          </h1>
          <h2 className="display-6 fw-bold typing-container" style={{ minHeight: "3rem" }}>
            <span ref={el} className="aws-rainbow-text" />
          </h2>
          <div className="header-line mx-auto mt-3"></div>
        </div>

        <div className="w-100" style={{ maxWidth: 800, margin: '0 auto' }}>
          {/* Education Section */}
          <div className="fade-in-animation" style={{animationDelay: '0.3s'}}>
            <div className="section-heading d-flex align-items-center mb-4">
              <div className="icon-circle me-3"><MdSchool size={24}/></div>
              <h3 className="section-card-title mb-0">Education</h3>
            </div>

            <div className="timeline">
              {education.map((edu, idx) => (
                <div key={idx} className="timeline-item fade-in-animation" style={{animationDelay: `${0.4 + idx * 0.18}s`}}>
                  <div className="timeline-dot-outer">
                    <div className="timeline-dot-inner" />
                  </div>
                  <div className="timeline-card p-4 rounded-4">
                    <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
                      <h4 className="fw-bold mb-0" style={{fontSize: '1.15rem', color: '#232F3E'}}>{edu.degree}</h4>
                      <span className="duration-badge">{edu.duration}</span>
                    </div>
                    <p className="text-muted mb-2" style={{fontSize: '0.95rem'}}>{edu.institution}</p>
                    <div className="result-badge">
                      <span className="result-icon">📊</span> {edu.result}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="section-divider my-5 fade-in-animation" style={{animationDelay: '0.7s'}}>
            <div className="divider-line" />
            <div className="divider-diamond">◆</div>
            <div className="divider-line" />
          </div>

          {/* Certifications Slideshow */}
          <div className="fade-in-animation" style={{animationDelay: '0.8s'}}>
            <div className="section-heading d-flex align-items-center mb-4">
              <div className="icon-circle me-3"><FiAward size={24}/></div>
              <h3 className="section-card-title mb-0">Certifications</h3>
              <span className="cert-counter ms-auto">{certSlide + 1} / {certifications.length}</span>
            </div>

            <div className="cert-slideshow position-relative">
              <div key={certSlide} className="cert-slide">
                <div className="cert-slide-card p-4 p-md-5 rounded-4 text-center">
                  <div className="cert-slide-number mb-3">{String(certSlide + 1).padStart(2, '0')}</div>
                  <h4 className="cert-slide-title fw-bold mb-2">{certifications[certSlide].title}</h4>
                  <div className="cert-slide-provider mb-3">{certifications[certSlide].provider}</div>
                  {certifications[certSlide].link && (
                    <a href={certifications[certSlide].link} target="_blank" rel="noopener noreferrer"
                      className="cert-view-btn">
                      View Certificate ↗
                    </a>
                  )}
                </div>
              </div>
              <button className="cert-arrow-btn cert-prev" onClick={prevCert} aria-label="Previous">❮</button>
              <button className="cert-arrow-btn cert-next" onClick={nextCert} aria-label="Next">❯</button>
              <div className="cert-dots d-flex justify-content-center gap-2 mt-4">
                {certifications.map((_, idx) => (
                  <button key={idx} className={`cert-dot${idx === certSlide ? ' active' : ''}`} onClick={() => goToCert(idx)} aria-label={`Cert ${idx + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </div>


        <style jsx>{`
          .education-section {
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e3f2fd 100%);
            z-index: 1;
          }
          .background-layer { top: 0; left: 0; z-index: 0; }

          /* Page Header */
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

          /* Section Headings */
          .section-card-title { color: #232F3E; font-weight: 800; font-size: 1.6rem; letter-spacing: 0.3px; }
          .icon-circle {
            width: 48px; height: 48px; border-radius: 50%;
            background: linear-gradient(135deg, #FF9900, #FF7A00);
            display: flex; align-items: center; justify-content: center;
            color: white; flex-shrink: 0;
            box-shadow: 0 6px 20px rgba(255,153,0,0.35);
          }
          .section-heading { margin-bottom: 2rem; }

          /* ── Timeline ── */
          .timeline {
            position: relative;
            padding-left: 36px;
          }
          .timeline::before {
            content: '';
            position: absolute;
            left: 14px;
            top: 8px;
            bottom: 8px;
            width: 3px;
            background: linear-gradient(180deg, #FF9900, #FFB84D, rgba(255,153,0,0.15));
            border-radius: 3px;
          }
          .timeline-item {
            position: relative;
            margin-bottom: 2.5rem;
          }
          .timeline-item:last-child { margin-bottom: 0; }
          .timeline-dot-outer {
            position: absolute;
            left: -29px;
            top: 22px;
            width: 22px; height: 22px;
            border-radius: 50%;
            background: rgba(255,153,0,0.12);
            display: flex; align-items: center; justify-content: center;
            z-index: 2;
          }
          .timeline-dot-inner {
            width: 12px; height: 12px;
            border-radius: 50%;
            background: linear-gradient(135deg, #FF9900, #FF7A00);
            box-shadow: 0 0 0 3px rgba(255,153,0,0.2), 0 2px 8px rgba(255,153,0,0.3);
            transition: transform 0.3s ease;
          }
          .timeline-item:hover .timeline-dot-inner {
            transform: scale(1.3);
            box-shadow: 0 0 0 5px rgba(255,153,0,0.25), 0 4px 16px rgba(255,153,0,0.4);
          }
          .timeline-card {
            background: rgba(255, 255, 255, 0.95);
            border: 1px solid rgba(255,153,0,0.08);
            box-shadow: 0 4px 24px rgba(0,0,0,0.04);
            transition: all 0.35s ease;
            position: relative;
            overflow: hidden;
          }
          .timeline-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0;
            width: 4px; height: 100%;
            background: linear-gradient(180deg, #FF9900, #FFB84D);
            border-radius: 4px 0 0 4px;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          .timeline-item:hover .timeline-card {
            transform: translateX(6px);
            box-shadow: 0 12px 40px rgba(255,153,0,0.12);
            border-color: rgba(255,153,0,0.15);
          }
          .timeline-item:hover .timeline-card::before { opacity: 1; }

          .duration-badge {
            display: inline-block; color: #FF9900; font-weight: 700;
            font-size: 0.85rem; padding: 4px 14px; border-radius: 50px;
            background: rgba(255,153,0,0.07); border: 1px solid rgba(255,153,0,0.18);
            letter-spacing: 0.3px;
          }
          .result-badge {
            display: inline-flex; align-items: center; gap: 6px;
            color: #444; font-weight: 600; font-size: 0.92rem;
            padding: 5px 16px; border-radius: 50px;
            background: linear-gradient(135deg, rgba(255,153,0,0.05), rgba(0,161,224,0.05));
            border: 1px solid rgba(255,153,0,0.1);
          }
          .result-icon { font-size: 1rem; }

          /* ── Divider ── */
          .section-divider {
            display: flex; align-items: center; gap: 16px;
            justify-content: center;
          }
          .divider-line {
            flex: 1; max-width: 120px; height: 2px;
            background: linear-gradient(90deg, transparent, rgba(255,153,0,0.3), transparent);
            border-radius: 2px;
          }
          .divider-diamond {
            color: #FF9900; font-size: 0.7rem; opacity: 0.6;
          }

          /* ── Certification Slideshow ── */
          .cert-counter {
            background: linear-gradient(135deg, #FF9900, #FF7A00);
            color: #fff; font-size: 0.8rem; font-weight: 700;
            padding: 5px 14px; border-radius: 50px;
          }
          .cert-slideshow { position: relative; }
          .cert-slide { animation: cert-fade-in 0.5s ease forwards; }
          @keyframes cert-fade-in {
            from { opacity: 0; transform: translateY(16px) scale(0.98); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          .cert-slide-card {
            background: rgba(255,255,255,0.96);
            border: 1px solid rgba(255,153,0,0.1);
            box-shadow: 0 8px 36px rgba(0,0,0,0.05);
            position: relative; overflow: hidden;
            transition: box-shadow 0.3s ease;
          }
          .cert-slide-card::before {
            content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
            background: linear-gradient(90deg, #FF9900, #FF7A00, #FFB84D, #00A1E0);
            background-size: 300% 100%;
            animation: gradient-slide 4s linear infinite;
          }
          @keyframes gradient-slide { 0% { background-position: 0% 0%; } 100% { background-position: 300% 0%; } }
          .cert-slide-card:hover { box-shadow: 0 16px 48px rgba(255,153,0,0.14); }
          .cert-slide-number {
            font-size: 3rem; font-weight: 900; line-height: 1;
            background: linear-gradient(135deg, #FF9900, #FFB84D, #FF7A00);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .cert-slide-title { color: #232F3E; font-size: 1.25rem; }
          .cert-slide-provider {
            color: #888; font-size: 0.95rem; font-weight: 500;
          }
          .cert-view-btn {
            display: inline-block; padding: 10px 28px;
            background: linear-gradient(135deg, #FF9900, #FF7A00);
            color: #fff; font-weight: 700; font-size: 0.9rem;
            border-radius: 50px; text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 4px 16px rgba(255,153,0,0.3);
          }
          .cert-view-btn:hover {
            transform: translateY(-2px); color: #fff;
            box-shadow: 0 8px 28px rgba(255,153,0,0.4);
          }
          .cert-arrow-btn {
            position: absolute; top: 45%; transform: translateY(-50%);
            background: rgba(255,153,0,0.9); color: #fff;
            border: none; width: 42px; height: 42px; border-radius: 50%;
            font-size: 1.2rem; cursor: pointer;
            transition: all 0.3s ease; z-index: 10;
            display: flex; align-items: center; justify-content: center;
          }
          .cert-arrow-btn:hover {
            background: #FF7A00; transform: translateY(-50%) scale(1.15);
            box-shadow: 0 6px 24px rgba(255,153,0,0.35);
          }
          .cert-prev { left: -20px; }
          .cert-next { right: -20px; }
          .cert-dot {
            width: 10px; height: 10px; border-radius: 50%;
            border: 2px solid #FF9900; background: transparent;
            cursor: pointer; transition: all 0.3s ease; padding: 0;
          }
          .cert-dot.active { background: #FF9900; transform: scale(1.3); }
          .cert-dot:hover { background: rgba(255,153,0,0.5); }

          /* ── Animations ── */
          .fade-in-animation { opacity: 0; animation: fade-in-up 0.8s ease-out forwards; }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* ── Floating Shapes ── */
          .floating-shape-1 { position: absolute; top: 3rem; left: 2rem; width: 4rem; height: 4rem; background: linear-gradient(to right, #fb923c, #fbbf24); border-radius: 50%; opacity: 0.12; animation: bounce-slow 6s ease-in-out infinite; }
          .floating-shape-2 { position: absolute; top: 8rem; right: 6rem; width: 3rem; height: 3rem; background: linear-gradient(to right, #60a5fa, #2563eb); border-radius: 0.5rem; opacity: 0.12; transform: rotate(45deg); animation: pulse-slow 4s ease-in-out infinite; }
          .floating-shape-3 { position: absolute; bottom: 6rem; left: 20%; width: 2.5rem; height: 2.5rem; background: linear-gradient(to right, #f97316, #ef4444); border-radius: 50%; opacity: 0.12; animation: spin-slow 8s linear infinite; }
          .floating-shape-4 { position: absolute; top: 50%; right: 15%; width: 3.5rem; height: 3.5rem; background: linear-gradient(to right, #10b981, #059669); border-radius: 0.75rem; opacity: 0.12; transform: rotate(30deg); animation: bounce-slow 7s ease-in-out infinite reverse; }
          @keyframes bounce-slow { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(180deg); } }
          @keyframes pulse-slow { 0%,100% { transform: scale(1) rotate(45deg); opacity: 0.12; } 50% { transform: scale(1.1) rotate(225deg); opacity: 0.2; } }
          @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

          /* ── Gradient Text ── */
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

          /* ── Responsive ── */
          @media (max-width: 768px) {
            .education-section { padding: 80px 0.75rem 3rem !important; }
            .timeline { padding-left: 28px; }
            .timeline-dot-outer { left: -23px; width: 18px; height: 18px; }
            .timeline-dot-inner { width: 10px; height: 10px; }
            .timeline-card { padding: 1rem !important; }
            .section-card-title { font-size: 1.3rem; }
            .cert-prev { left: 4px; }
            .cert-next { right: 4px; }
            .cert-arrow-btn { width: 34px; height: 34px; font-size: 1rem; }
            .cert-slide-number { font-size: 2.2rem; }
            .cert-slide-title { font-size: 1.05rem; }
            .cert-slide-card { padding: 1.5rem !important; }
            .icon-circle { width: 40px; height: 40px; }
          }
          @media (max-width: 480px) {
            .education-section { padding: 70px 0.5rem 2rem !important; }
            .timeline { padding-left: 22px; }
            .timeline-dot-outer { left: -18px; width: 16px; height: 16px; }
            .timeline-dot-inner { width: 8px; height: 8px; }
            .timeline-card h4 { font-size: 1rem !important; }
            .timeline-card p { font-size: 0.85rem !important; }
            .cert-slide-card { padding: 1rem !important; }
            .cert-slide-number { font-size: 1.8rem; }
            .cert-slide-title { font-size: 0.95rem; }
            .cert-view-btn { padding: 8px 20px; font-size: 0.8rem; }
          }
        `}</style>
      </section>
    </>
  );
}
