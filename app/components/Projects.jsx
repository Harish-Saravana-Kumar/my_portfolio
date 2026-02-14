"use client";

import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

export default function ProjectsSection() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Applications",
        "Automation Tools",
        "Research & Development",
        "Web Platforms"
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      cursorChar: "|",
    });
    return () => typed.destroy();
  }, []);


  const projects = [
    {
      title: "IEEE Paper Generator",
      tagline: "Automated Research Paper Generation Web App",
      techStack: ["Python", "FastAPI", "React.js", "Node.js", "JWT Auth", "Docker"],
      details: [
        "Developed a full-stack web application to generate IEEE-format research papers with structured sections, LaTeX formulas, figures, tables, references, and appendices from user input.",
        "Implemented FastAPI backend with JWT-based authentication and React.js frontend, enabling seamless real-time content editing, image-to-base64 conversion.",
        "Optimized paper generation workflow with modular JSON-based API design, improving usability and reducing manual formatting effort by ~80%.",
      ],
      impact: "Reduced IEEE paper formatting effort by ~80%, enabling ready-to-submit papers in minutes.",
      links: [
        { label: "Frontend", url: "https://github.com/Harish-Saravana-Kumar/ieee_frontend" },
        { label: "Backend", url: "https://github.com/Harish-Saravana-Kumar/ieee-backend" },
        { label: "Demo", url: "https://drive.google.com/file/d/10TZ3DfflW8TF55LWbOEfw6het4gLQPMF/view?usp=drive_link" }
      ]
    },
    {
      title: "College Connect",
      tagline: "MERN-Based Blogging & Event Management Platform",
      techStack: ["React.js", "Material-UI", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
      details: [
        "Built a blogging and event management platform enabling students to publish posts, manage events, and collaborate in real time.",
        "Integrated Google Calendar for event scheduling and WhatsApp sharing to enhance community engagement.",
        "Designed responsive UI with Material-UI and implemented role-based authentication for secure content management."
      ],
    },
    {
      title: "Fake Job Detection System",
      tagline: "AI-Powered Fraud Screening for Recruitment Platform",
      techStack: ["Python", "Flask", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "Jupyter Notebook"],
      details: [
        "Developed a web-based API using machine learning models (Random Forest, XGBoost) to detect fraudulent job postings from structured and unstructured data.",
        "Engineered features from job descriptions, company profiles, and metadata to identify suspicious patterns and risk factors.",
        "Achieved high recall and precision in fraud detection, enabling real-time automated screening and alerts for job boards and HR platforms."
      ],
      impact: "Provided interpretable results and risk levels, supporting safer recruitment and improved user trust."
    }
  ];

  const experience = [
    {
      company: "G-Zoft Tech Solutions",
      role: "MERN Stack Developer Intern",
      duration: "2025",
      summary: "Built and deployed production-ready full-stack solutions in a dynamic startup environment.",
      responsibilities: [
        "Built and deployed a data warehouse solution using the MERN stack (MongoDB, Express.js, React, Node.js) to enhance data storage and retrieval systems.",
        "Gained hands-on experience in full-stack development, improving backend efficiency."
      ],
      certificateLink: "https://drive.google.com/drive/folders/12qSIrMf_3vG8Z628orQwcXN-5qhNM4Ya?usp=sharing"
    }
  ];


  const [currentSlide, setCurrentSlide] = useState(0);
  const slideTimer = useRef(null);

  useEffect(() => {
    slideTimer.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(slideTimer.current);
  }, []);

  const goToSlide = (idx) => {
    setCurrentSlide(idx);
    clearInterval(slideTimer.current);
    slideTimer.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % projects.length);
    }, 5000);
  };

  const nextSlide = () => goToSlide((currentSlide + 1) % projects.length);
  const prevSlide = () => goToSlide((currentSlide - 1 + projects.length) % projects.length);

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <section className="position-relative d-flex flex-column align-items-center justify-content-center min-vh-100 projects-section py-5 px-3">
        {/* Floating background */}
        <div className="position-absolute w-100 h-100 background-layer">
          <div className="floating-shape-1" />
          <div className="floating-shape-2" />
          <div className="floating-shape-3" />
          <div className="floating-shape-4" />
        </div>

        {/* Header */}
        <div className="page-header-container mb-5 text-center fade-in-animation" style={{animationDelay: '0.1s'}}>
          <div className="header-badge mb-3">
            <span className="me-2">💼</span> Showcasing My Work
          </div>
          <h1 className="display-2 fw-bold text-dark mb-3">
            <span className="aws-gradient-text">Projects</span>
          </h1>
          <h2 className="display-6 fw-bold typing-container" style={{ minHeight: "3rem" }}>
            <span ref={el} className="aws-rainbow-text" />
          </h2>
          <div className="header-line mx-auto mt-3"></div>
        </div>

        {/* Projects Slideshow */}
        <div className="slideshow-container fade-in-animation" style={{animationDelay: '0.3s', maxWidth: 900, width: '100%'}}>
          <div className="slideshow-track">
            <div key={currentSlide} className="slide-item">
              <div className="project-card p-4 p-md-5 rounded-4 shadow-sm">
                <div className="d-flex justify-content-between align-items-start mb-3 flex-wrap gap-2">
                  <div>
                    <h3 className="fw-bold mb-1">{projects[currentSlide].title}</h3>
                    <p className="text-muted mb-0">{projects[currentSlide].tagline}</p>
                  </div>
                  <span className="slide-counter">{currentSlide + 1} / {projects.length}</span>
                </div>
                <div className="mb-3 d-flex flex-wrap gap-2">
                  {projects[currentSlide].techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="badge bg-light text-dark border">{tech}</span>
                  ))}
                </div>
                <ul className="mb-3">
                  {projects[currentSlide].details.map((d, i) => (
                    <li key={i} className="mb-2">{d}</li>
                  ))}
                </ul>
                {projects[currentSlide].impact && <p className="fw-semibold text-success mb-2">{projects[currentSlide].impact}</p>}
                {projects[currentSlide].links && (
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {projects[currentSlide].links.map((link, lIdx) => (
                      <a key={lIdx} href={link.url} target="_blank" rel="noopener noreferrer"
                        className="badge text-decoration-none" style={{background: "#FF9900", color: "#fff", fontSize: "0.85rem", padding: "6px 14px"}}>
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <button className="slide-arrow slide-prev" onClick={prevSlide} aria-label="Previous">❮</button>
          <button className="slide-arrow slide-next" onClick={nextSlide} aria-label="Next">❯</button>
          <div className="slide-dots d-flex justify-content-center gap-2 mt-4">
            {projects.map((_, idx) => (
              <button key={idx} className={`slide-dot ${idx === currentSlide ? 'active' : ''}`} onClick={() => goToSlide(idx)} aria-label={`Project ${idx + 1}`} />
            ))}
          </div>
        </div>

        {/* Experience Sub Heading & Experiences */}
        <div className="w-100 px-1 px-sm-5 mt-5 fade-in-animation" style={{animationDelay: '0.8s'}}>
          <h2 className="display-5 fw-bold mt-5 mb-4" style={{ color: "#FF9900" }}>
            <span className="me-2">🏢</span> Experience
          </h2>
          <div className="row g-4 justify-content-center" style={{ maxWidth: 900, margin: "0 auto" }}>
            {experience.map((exp, idx) => (
              <div key={idx} className="col-12 col-md-10">
                <div className="exp-card p-4 rounded-4 h-100 shadow-sm mb-2">
                  <h4 className="fw-bold mb-1">{exp.role} <span className="fw-normal text-muted fs-5"> @ {exp.company}</span></h4>
                  <div className="mb-2 text-info" style={{ fontWeight: 700 }}>{exp.duration}</div>
                  <p className="mb-2">{exp.summary}</p>
                  <ul className="mb-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="mb-1">{item}</li>
                    ))}
                  </ul>
                  {exp.certificateLink && (
                    <a href={exp.certificateLink} target="_blank" rel="noopener noreferrer"
                      className="badge text-decoration-none" style={{background: "#FF9900", color: "#fff", fontSize: "0.85rem", padding: "6px 14px"}}>
                      View Certificate ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>



        <style jsx>{`
          .projects-section {
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e3f2fd 100%);
            z-index: 1;
          }
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
          .fade-in-animation { opacity: 0; animation: fade-in-up 0.8s ease-out forwards; }
          @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
          .project-card, .exp-card {
            background: rgba(255,255,255,0.9);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255,153,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            position: relative; overflow: hidden;
          }
          .project-card::before, .exp-card::before {
            content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
            background: linear-gradient(90deg, #FF9900, #FF7A00, #FFB84D, #00A1E0);
            background-size: 300% 100%;
            animation: gradient-slide 4s linear infinite;
          }
          @keyframes gradient-slide { 0% { background-position: 0% 0%; } 100% { background-position: 300% 0%; } }
          .project-card:hover, .exp-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 45px rgba(255, 153, 0, 0.15);
          }
          .aws-gradient-text {
            background: linear-gradient(135deg, #FF9900, #FF7A00, #FFB84D, #E67E00);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: aws-gradient-shift 4s ease-in-out infinite;
          }
          .aws-rainbow-text {
            background: linear-gradient(90deg, #FF9900, #FF7A00, #FFB84D, #232F3E, #146EB4, #00A1E0);
            background-size: 400% 400%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: aws-rainbow-flow 5s ease-in-out infinite;
          }
          @keyframes aws-gradient-shift {
            0%,100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          @keyframes aws-rainbow-flow {
            0%,100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .floating-shape-1 {
            position: absolute; top: 3rem; left: 2rem; width: 4rem; height: 4rem;
            background: linear-gradient(to right, #fb923c, #fbbf24);
            border-radius: 50%; opacity: 0.15; animation: bounce-slow 6s infinite;
          }
          .floating-shape-2 {
            position: absolute; top: 8rem; right: 6rem; width: 3rem; height: 3rem;
            background: linear-gradient(to right, #60a5fa, #2563eb);
            border-radius: .5rem; opacity: 0.15; transform: rotate(45deg); animation: pulse-slow 4s infinite;
          }
          .floating-shape-3 {
            position: absolute; bottom: 6rem; left: 20%; width: 2.5rem; height: 2.5rem;
            background: linear-gradient(to right, #f97316, #ef4444);
            border-radius: 50%; opacity: 0.15; animation: spin-slow 8s linear infinite;
          }
          .floating-shape-4 {
            position: absolute; top: 50%; right: 15%; width: 3.5rem; height: 3.5rem;
            background: linear-gradient(to right, #10b981, #059669);
            border-radius: .75rem; opacity: 0.15; transform: rotate(30deg); animation: bounce-slow 7s infinite reverse;
          }
          @keyframes bounce-slow {
            0%,100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          @keyframes pulse-slow {
            0%,100% { transform: scale(1) rotate(45deg); opacity: 0.15; }
            50% { transform: scale(1.1) rotate(225deg); opacity: 0.25; }
          }
          @keyframes spin-slow {
            from { transform: rotate(0); }
            to { transform: rotate(360deg); }
          }
          /* Slideshow */
          .slideshow-container {
            position: relative;
            margin: 0 auto;
          }
          .slide-item {
            animation: slide-fade-in 0.6s ease forwards;
          }
          @keyframes slide-fade-in {
            from { opacity: 0; transform: translateY(20px) scale(0.98); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          .slide-arrow {
            position: absolute;
            top: 45%;
            transform: translateY(-50%);
            background: rgba(255, 153, 0, 0.9);
            color: #fff;
            border: none;
            width: 46px; height: 46px;
            border-radius: 50%;
            font-size: 1.4rem;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .slide-arrow:hover {
            background: #FF7A00;
            transform: translateY(-50%) scale(1.15);
            box-shadow: 0 6px 24px rgba(255, 153, 0, 0.35);
          }
          .slide-prev { left: -24px; }
          .slide-next { right: -24px; }
          .slide-counter {
            background: linear-gradient(135deg, #FF9900, #FF7A00);
            color: #fff;
            font-size: 0.8rem;
            font-weight: 700;
            padding: 5px 14px;
            border-radius: 50px;
          }
          .slide-dot {
            width: 12px; height: 12px;
            border-radius: 50%;
            border: 2px solid #FF9900;
            background: transparent;
            cursor: pointer;
            transition: all 0.3s ease;
            padding: 0;
          }
          .slide-dot.active {
            background: #FF9900;
            transform: scale(1.3);
          }
          .slide-dot:hover { background: rgba(255,153,0,0.5); }
          @media (max-width: 768px) {
            .slide-prev { left: 6px; }
            .slide-next { right: 6px; }
            .slide-arrow { width: 36px; height: 36px; font-size: 1rem; }
            .projects-section { padding: 80px 0.75rem 3rem !important; }
            .project-card { padding: 1.2rem !important; }
            .project-card h3 { font-size: 1.15rem; }
            .project-card ul { padding-left: 1.2rem; font-size: 0.9rem; }
            .exp-card { padding: 1.2rem !important; }
            .exp-card h4 { font-size: 1.05rem; }
            .exp-card ul { padding-left: 1.2rem; font-size: 0.9rem; }
          }
          @media (max-width: 480px) {
            .projects-section { padding: 70px 0.5rem 2rem !important; }
            .project-card { padding: 1rem !important; }
            .project-card h3 { font-size: 1rem; }
            .project-card p, .project-card li { font-size: 0.85rem; }
            .slide-arrow { width: 30px; height: 30px; font-size: 0.85rem; }
            .slide-prev { left: 2px; }
            .slide-next { right: 2px; }
          }
        `}</style>
      </section>
    </>
  );
}
