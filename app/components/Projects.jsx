"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { MdHome, MdPerson, MdBuild, MdEmojiEvents} from "react-icons/md";
import { FiGrid, FiMail } from "react-icons/fi";

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

  const navItems = [
    { name: "Home", path: "/", icon: <MdHome /> },
    { name: "About", path: "/about", icon: <MdPerson /> },
    { name: "Skills", path: "/skills", icon: <MdBuild /> },
    { name: "Projects", path: "/projects", icon: <FiGrid /> },
    { name: "Education & Certifications", path: "/education", icon: <MdEmojiEvents  /> },
  ];

  const projects = [
    {
      title: "IEEE Paper Generator",
      tagline: "Full Stack Research Paper Automation Tool",
      techStack: ["FastAPI", "React.js", "Node.js", "MongoDB", "Tailwind CSS", "python-docx", "MathQuill", "Docker", "Nginx"],
      details: [
        "Designed a multi-step interactive form for research paper creation with LaTeX preview and image embedding.",
        "Developed REST APIs in FastAPI for IEEE-compliant DOCX generation with Pydantic validation.",
        "Implemented JWT authentication, MongoDB Atlas storage, and Dockerized deployment with Nginx.",
      ],
      impact: "Reduced IEEE paper formatting time by 70%, enabling ready-to-submit papers in minutes."
    },
    {
      title: "College Connect",
      tagline: "College Social Blogging & Event Platform",
      techStack: ["React.js", "Material-UI", "Node.js", "Express.js", "MongoDB"],
      details: [
        "Built a blogging and event platform for students with Google Calendar integration.",
        "Features include user authentication, commenting, and WhatsApp sharing.",
        "Responsive UI with real-time content updates."
      ],
    }
  ];

  const experience = [
    {
      company: "GSoftTech Solutions",
      role: "MERN Stack Intern",
      duration: "2024",
      summary: "Contributed to real-world projects in a dynamic startup environment.",
      responsibilities: [
        "Worked on backend development and API integration using Node.js and Express.",
        "Collaborated with a fast-paced agile team to deliver new features and resolve bugs quickly."
      ]
    }
  ];

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
        <div className="mb-5 text-center">
          <p className="fs-5 text-muted fw-medium mb-0">Showcasing My Work</p>
          <h1 className="display-2 fw-bold text-dark mb-3">
            <span className="aws-gradient-text">Projects</span>
          </h1>
          <h2 className="display-6 fw-bold typing-container" style={{ minHeight: "3rem" }}>
            <span ref={el} className="aws-rainbow-text" />
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="row g-4 justify-content-center" style={{ maxWidth: 1200 }}>
          {projects.map((proj, idx) => (
            <div key={idx} className="col-12 col-md-6">
              <div className="project-card p-4 rounded-4 h-100 shadow-sm">
                <h3 className="fw-bold mb-2">{proj.title}</h3>
                <p className="text-muted mb-3">{proj.tagline}</p>
                <div className="mb-3 d-flex flex-wrap gap-2">
                  {proj.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="badge bg-light text-dark border">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="mb-3">
                  {proj.details.map((d, i) => (
                    <li key={i} className="mb-2">{d}</li>
                  ))}
                </ul>
                {proj.impact && <p className="fw-semibold text-success">{proj.impact}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Sub Heading & Experiences */}
        <div className="w-100 px-1 px-sm-5 mt-5">
          <h2 className="display-5 fw-bold mt-5 mb-4" style={{ color: "#FF9900" }}>
            Experience
          </h2>
          <div className="row g-4 justify-content-center" style={{ maxWidth: 900, margin: "0 auto" }}>
            {experience.map((exp, idx) => (
              <div key={idx} className="col-12 col-md-10">
                <div className="exp-card p-4 rounded-4 h-100 shadow-sm mb-2">
                  <h4 className="fw-bold mb-1">{exp.role} <span className="fw-normal text-muted fs-5"> @ {exp.company}</span></h4>
                  <div className="mb-2 text-info" style={{ fontWeight: 700 }}>{exp.duration}</div>
                  <p className="mb-2">{exp.summary}</p>
                  <ul className="mb-0">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="mb-1">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Icon Sidebar */}
        <div className="vertical-icon-sidebar right">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`icon-nav-btn${item.path === "/projects" ? " active" : ""}`}
              aria-label={item.name}
            >
              <span className="icon">{item.icon}</span>
              <span className="icon-tooltip">{item.name}</span>
            </Link>
          ))}
        </div>

        <style jsx>{`
          .projects-section {
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e3f2fd 100%);
            z-index: 1;
          }
          .project-card, .exp-card {
            background: rgba(255,255,255,0.9);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255,153,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
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
          /* Vertical Icon Sidebar */
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
