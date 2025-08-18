"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Link from "next/link";
import { 
  MdHome, MdPerson, MdBuild, MdWork, MdSchool, MdEmojiEvents,
  MdCode, MdCloud
} from "react-icons/md";
import { FiGrid, FiMail, FiDownload } from "react-icons/fi";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiExpress, SiMysql } from "react-icons/si";

export default function AboutSection() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Passionate Developer",
        "Problem Solver",
        "Tech Innovator", 
        "MERN Stack Expert"
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

  const navItems = [
    { name: "Home", path: "/", icon: <MdHome /> },
    { name: "About", path: "/about", icon: <MdPerson /> },
    { name: "Skills", path: "/skills", icon: <MdBuild /> },
    { name: "Projects", path: "/projects", icon: <FiGrid /> },
    { name: "Education & Certifications", path: "/education", icon: <MdEmojiEvents  /> },
    ];

  const achievements = [
    { icon: <MdCode />, title: "200+", subtitle: "LeetCode Problems Solved" },
    { icon: <SiReact />, title: "150+", subtitle: "SkillRack Exercises" },
    { icon: <MdWork />, title: "MERN", subtitle: "Stack Internship" },
    { icon: <MdCloud />, title: "3+", subtitle: "Major Projects" }
  ];

  const techStack = [
    { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <SiReact />, name: "React.js", color: "#61DAFB" },
    { icon: <SiNodedotjs />, name: "Node.js", color: "#339933" },
    { icon: <SiExpress />, name: "Express.js", color: "#000000" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
    { icon: <SiMysql />, name: "MySQL", color: "#4479A1" }
  ];

  return (
    <>
      {/* Bootstrap CSS CDN */}
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
        rel="stylesheet"
        crossOrigin="anonymous"
      />
      
      <section className="position-relative d-flex align-items-center justify-content-center min-vh-100 overflow-hidden about-section py-5">
        {/* Animated background elements */}
        <div className="position-absolute w-100 h-100 background-layer">
          <div className="floating-shape-1"></div>
          <div className="floating-shape-2"></div>
          <div className="floating-shape-3"></div>
          <div className="floating-shape-4"></div>
        </div>

        {/* Main Content Container */}
        <div className="container-fluid position-relative main-content">
          <div className="row align-items-start justify-content-center">
            {/* About Content */}
            <div className="col-12 col-xl-9">
              <div className="about-content-container mx-auto">
                {/* Header Section */}
                <div className="mb-4 fade-in-animation" style={{animationDelay: '0.1s'}}>
                  <p className="fs-5 text-muted fw-medium mb-0">Get to know me</p>
                  <h1 className="display-2 fw-bold text-dark mb-3 lh-1">
                    <span className="aws-gradient-text">About Me</span>
                  </h1>
                  <h2 className="display-5 fw-bold mb-4 typing-container" style={{minHeight: '3rem'}}>
                    <span ref={el} className="aws-rainbow-text" />
                  </h2>
                </div>

                {/* Bio Section */}
                <div className="bio-section mb-5 fade-in-animation" style={{animationDelay: '0.3s'}}>
                  <div className="bio-card p-4 rounded-4 mb-4">
                    <h3 className="h4 fw-bold mb-3 section-title">
                      <MdPerson className="me-2" />
                      Who I Am
                    </h3>
                    <p className="fs-5 text-muted mb-4 bio-text">
                      Passionate Full Stack Developer with a focus on building scalable, high-performance applications. 
                      I&#39;m eager to tackle dynamic challenges and leverage the MERN stack to craft responsive user interfaces. 
                      I bring demonstrated expertise in backend development, API integration, and cloud deployment, and I&#39;m 
                      excited to drive innovative projects forward.
                    </p>
                    <p className="fs-6 text-muted bio-text">
                      Currently pursuing Bachelor of Technology in Artificial Intelligence & Data Science at 
                      Sri Eshwar College of Engineering, Coimbatore (2023-2027). My journey in tech started with 
                      solving algorithmic challenges and has evolved into creating full-stack applications that make a difference.
                    </p>
                  </div>
                </div>

                {/* Achievements Grid */}
                <div className="achievements-section mb-5 fade-in-animation" style={{animationDelay: '0.5s'}}>
                  <h3 className="h4 fw-bold mb-4 section-title">
                    <MdBuild className="me-2" />
                    Key Achievements
                  </h3>
                  <div className="row g-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="col-6 col-md-3">
                        <div className="achievement-card text-center p-3 rounded-3 h-100">
                          <div className="achievement-icon mb-2">
                            {achievement.icon}
                          </div>
                          <h4 className="fw-bold achievement-number">{achievement.title}</h4>
                          <p className="small text-muted mb-0">{achievement.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="tech-stack-section mb-5 fade-in-animation" style={{animationDelay: '0.7s'}}>
                  <h3 className="h4 fw-bold mb-4 section-title">
                    <MdCode className="me-2" />
                    Core Technologies
                  </h3>
                  <div className="row g-3">
                    {techStack.map((tech, index) => (
                      <div key={index} className="col-6 col-md-4 col-lg-2">
                        <div className="tech-card text-center p-3 rounded-3 h-100">
                          <div 
                            className="tech-icon mb-2" 
                            style={{color: tech.color}}
                          >
                            {tech.icon}
                          </div>
                          <p className="small fw-semibold mb-0">{tech.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education & Contact */}
                <div className="row g-4 fade-in-animation" style={{animationDelay: '0.9s'}}>
                  <div className="col-12 col-md-6">
                    <div className="education-card p-4 rounded-4 h-100">
                      <h4 className="h5 fw-bold mb-3 section-title">
                        <MdSchool className="me-2" />
                        Education
                      </h4>
                      <div className="education-item mb-3">
                        <h5 className="h6 fw-bold mb-1">Bachelor of Technology</h5>
                        <p className="small text-muted mb-1">Artificial Intelligence & Data Science</p>
                        <p className="small text-muted mb-1">Sri Eshwar College of Engineering</p>
                        <p className="small fw-semibold aws-text">2023 - 2027 | CGPA: 8.05</p>
                      </div>
                      <div className="education-item">
                        <h5 className="h6 fw-bold mb-1">Higher Secondary Certificate</h5>
                        <p className="small text-muted mb-1">Government Higher Secondary School</p>
                        <p className="small fw-semibold aws-text">2021 - 2023 | 89%</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="contact-card p-4 rounded-4 h-100">
                      <h4 className="h5 fw-bold mb-3 section-title">
                        <FiMail className="me-2" />
                        Get In Touch
                      </h4>
                      <div className="contact-item mb-3">
                        <p className="small text-muted mb-1">Email</p>
                        <p className="fw-semibold">malarharish007@gmail.com</p>
                      </div>
                      <div className="contact-item mb-4">
                        <p className="small text-muted mb-1">Phone</p>
                        <p className="fw-semibold">+91 9345306280</p>
                      </div>
                      <div className="d-flex gap-2">
                        <a 
                          className="btn btn-sm btn-outline-primary rounded-3 flex-fill"
                          href="https://www.linkedin.com/in/harishs-developer/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          LinkedIn
                        </a>
                        <a 
                          className="btn btn-sm btn-outline-dark rounded-3 flex-fill"
                          href="https://github.com/Harish-Saravana-Kumar"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="d-flex flex-column flex-sm-row gap-3 mt-5 fade-in-animation" style={{animationDelay: '1.1s'}}>
                  <a 
                    className="btn btn-primary btn-lg px-4 py-3 fw-semibold rounded-3 custom-btn-primary"
                    href="https://drive.google.com/uc?export=download&id=1ZsFBGOmW9Xe6Frl0TI_q301LY9IodqZy"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiDownload className="me-2" />
                    Download Resume
                  </a>
                  
                  <Link href="/projects" className="btn btn-outline-warning btn-lg px-4 py-3 fw-semibold rounded-3 custom-btn-secondary text-decoration-none">
                    View My Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Icon Sidebar */}
        <div className="vertical-icon-sidebar right">
          {navItems.map((item, idx) => (
            <Link
              key={item.name}
              href={item.path}
              className={`icon-nav-btn${item.path === '/about' ? " active" : ""}`}
              tabIndex={0}
              aria-label={item.name}
            >
              <span className="icon">{item.icon}</span>
              <span className="icon-tooltip">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Styles (same as previously provided, keep SCSS part unchanged except .navigation-sidebar is now unused) */}
        <style jsx>{`
          /* All the previous About section styles here... */
          /* You can copy styles from the earlier answer and remove .navigation-sidebar styles if you want */

          .about-section {
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e3f2fd 100%);
            z-index: 1;
          }
          .background-layer {
            top: 0; left: 0; z-index: 0;
          }
          .main-content {
            z-index: 10;
            max-width: 1400px;
            padding: 0 30px;
          }
          .about-content-container {
            max-width: 800px;
          }
          .bio-card, .education-card, .contact-card {
            background: rgba(255,255,255,0.9);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255,153,0,0.1);
            box-shadow: 0 8px 32px rgba(255, 153, 0, 0.1);
            transition: all 0.3s ease;
          }
          .bio-card:hover, .education-card:hover, .contact-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 45px rgba(255, 153, 0, 0.15);
          }
          .achievement-card, .tech-card {
            background: rgba(255,255,255,0.8);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,153,0,0.1);
            box-shadow: 0 4px 16px rgba(255,153,0,0.08);
            transition: all 0.3s ease;
          }
          .achievement-card:hover, .tech-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(255, 153, 0, 0.12);
            background: rgba(255,255,255,0.95);
          }
          .achievement-icon { font-size: 2.5rem; color: #FF9900; margin-bottom: 0.5rem; }
          .achievement-number { font-size: 1.8rem; color: #232F3E; margin-bottom: 0.25rem; }
          .tech-icon { font-size: 2.5rem; margin-bottom: 0.5rem; transition: transform 0.3s ease; }
          .tech-card:hover .tech-icon { transform: scale(1.1); }
          .section-title { color: #232F3E; display: flex; align-items: center; }
          .section-title .me-2 { color: #FF9900; font-size: 1.2em; }
          .bio-text { line-height: 1.7; }
          .aws-text { color: #FF9900; }
          .typing-container { font-size: clamp(1.5rem, 3vw, 3rem); }

          .aws-gradient-text {
            background: linear-gradient(135deg, #FF9900 0%, #FF7A00 25%, #FFB84D 50%, #FF9900 75%, #E67E00 100%);
            background-size: 300% 300%;
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            background-clip: text; animation: aws-gradient-shift 4s ease-in-out infinite;
          }
          .aws-rainbow-text {
            background: linear-gradient(90deg, #FF9900 0%, #FF7A00 14%, #FFB84D 28%, #232F3E 42%, #146EB4 57%, #00A1E0 71%, #FF9900 85%, #FF5F00 100%);
            background-size: 400% 400%;
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            background-clip: text; animation: aws-rainbow-flow 5s ease-in-out infinite;
            filter: drop-shadow(0 0 8px rgba(255, 153, 0, 0.3));
          }
          .custom-btn-primary {
            background: linear-gradient(135deg, #FF9900 0%, #FF7A00 100%);
            border: none; transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(255, 153, 0, 0.3);
          }
          .custom-btn-primary:hover {
            background: linear-gradient(135deg, #FF7A00 0%, #E67E00 100%);
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(255, 153, 0, 0.4);
          }
          .custom-btn-secondary {
            border: 2px solid #FF9900;
            color: #232F3E;
            background: transparent;
            transition: all 0.3s ease;
          }
          .custom-btn-secondary:hover {
            background: rgba(255,153,0,0.1);
            border-color: #FF7A00;
            color: #232F3E;
            transform: translateY(-2px);
          }
          .fade-in-animation {
            opacity: 0;
            animation: fade-in-up 0.8s ease-out forwards;
          }

          /* Floating shapes and animations, vertical sidebar... (keep as in previous code) */
          .floating-shape-1 { position: absolute; top: 3rem; left: 2rem; width: 4rem; height: 4rem; background: linear-gradient(to right, #fb923c, #fbbf24); border-radius: 50%; opacity: 0.15; animation: bounce-slow 6s ease-in-out infinite; }
          .floating-shape-2 { position: absolute; top: 8rem; right: 6rem; width: 3rem; height: 3rem; background: linear-gradient(to right, #60a5fa, #2563eb); border-radius: 0.5rem; opacity: 0.15; transform: rotate(45deg); animation: pulse-slow 4s ease-in-out infinite; }
          .floating-shape-3 { position: absolute; bottom: 6rem; left: 20%; width: 2.5rem; height: 2.5rem; background: linear-gradient(to right, #f97316, #ef4444); border-radius: 50%; opacity: 0.15; animation: spin-slow 8s linear infinite; }
          .floating-shape-4 { position: absolute; top: 50%; right: 15%; width: 3.5rem; height: 3.5rem; background: linear-gradient(to right, #10b981, #059669); border-radius: 0.75rem; opacity: 0.15; transform: rotate(30deg); animation: bounce-slow 7s ease-in-out infinite reverse; }
          @keyframes aws-gradient-shift { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%}}
          @keyframes aws-rainbow-flow { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%}}
          @keyframes fade-in-up { from{ opacity:0; transform:translateY(30px);} to{ opacity:1; transform:translateY(0);} }
          @keyframes bounce-slow { 0%,100%{transform:translateY(0px) rotate(0deg);} 50%{transform:translateY(-20px) rotate(180deg);} }
          @keyframes pulse-slow { 0%,100%{transform:scale(1) rotate(45deg);opacity:0.15;} 50%{transform:scale(1.1) rotate(225deg);opacity:0.25;} }
          @keyframes spin-slow { from {transform:rotate(0deg);} to{transform:rotate(360deg);} }

          .vertical-icon-sidebar {
            position: fixed; top: 50%; right: 32px; transform: translateY(-50%);
            display: flex; flex-direction: column; gap: 1.5rem;
            background: rgba(30,41,59,0.45); border-radius: 2rem; padding: 2rem 0.7rem;
            box-shadow: 0 8px 32px 0 rgba(31,38,135,0.18); backdrop-filter: blur(16px); z-index: 100;
          }
          .icon-nav-btn { display: flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 50%; background: transparent; color: #232F3E; font-size: 2rem; transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.18s; border: none; outline: none; box-shadow: none; margin: 0 auto; position: relative; cursor: pointer; }
          .icon-nav-btn:hover, .icon-nav-btn:focus { background: linear-gradient(135deg, #FF9900 0%, #232F3E 100%); color: #fff; box-shadow: 0 4px 24px rgba(255, 153, 0, 0.25); transform: scale(1.12);}
          .icon-nav-btn.active { background: #FF9900; color: #fff; box-shadow: 0 2px 12px rgba(255,153,0,0.18);}
          .icon-tooltip { position: absolute; right: 60px; top: 50%; transform: translateY(-50%); background: #232F3E; color: #fff; font-weight: 700; font-size: 1.05rem; padding: 8px 18px; border-radius: 8px; box-shadow: 0 4px 16px rgba(255,153,0,0.10); opacity: 0; pointer-events: none; white-space: nowrap; transition: opacity 0.18s,right 0.18s,background 0.18s,color 0.18s; z-index: 10; border: 2px solid #FF9900; letter-spacing: 0.5px;}
          .icon-nav-btn:hover .icon-tooltip, .icon-nav-btn:focus .icon-tooltip { opacity: 1; right: 58px; background: linear-gradient(90deg, #FF9900 0%, #FF7A00 100%); color: #232F3E; border-color: #FF7A00; }
          @media (max-width: 1200px) { .about-content-container { max-width: none; } }
          @media (max-width: 768px) { .about-content-container { text-align: center; } .main-content { padding: 0 20px; } .achievement-card, .tech-card { margin-bottom: 1rem; } }
        `}</style>
      </section>
    </>
  );
}
