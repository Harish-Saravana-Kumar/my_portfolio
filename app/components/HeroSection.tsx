"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Typed from "typed.js";
import Link from "next/link";
import { 
  MdHome, MdPerson, MdBuild, MdWork, MdSchool, MdEmojiEvents
} from "react-icons/md";
import { FiGrid, FiMail } from "react-icons/fi";

export default function HeroSection() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Developer",
        "Problem Solver",
        "Cloud Enthusiast",
        "Tech Explorer"
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
    { name: "Education & Certifications", path: "/education", icon: <MdEmojiEvents /> },
  ];

  return (
    <>
      {/* Bootstrap CSS CDN */}
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" 
        crossOrigin="anonymous"
      />
      
      <section className="position-relative d-flex align-items-center justify-content-center vh-100 overflow-hidden hero-section">
        {/* Animated background elements */}
        <div className="position-absolute w-100 h-100 background-layer">
          <div className="floating-shape-1"></div>
          <div className="floating-shape-2"></div>
          <div className="floating-shape-3"></div>
        </div>

        {/* Sliding Image - HarishS.png */}
        <div className="sliding-image-outer position-absolute h-100 d-flex align-items-center" style={{left: 0, top: 0, width: "100vw", pointerEvents: "none", zIndex: 2}}>
          <Image
            src="/HarishS.png"
            alt="Harish S"
            width={400}
            height={500}
            className="sliding-image"
            priority
            style={{
              opacity: 0.85,
              background: "transparent",
              borderRadius: 0,
              boxShadow: "none",
              width: "400px",
              height: "auto",
              maxHeight: "90vh",
              objectFit: "contain"
            }}
          />
        </div>

        {/* Main Content Container */}
        <div className="container-fluid position-relative main-content">
          <div className="row align-items-center h-100">
            {/* Text Content - Left Side */}
            <div className="col-12 col-xl-8">
              <div className="text-content-container">
                <div className="mb-2 fade-in-animation" style={{animationDelay: '0.1s'}}>
                  <p className="fs-5 text-muted fw-medium mb-0">Hello, I'm</p>
                </div>
                
                <h1 className="display-1 fw-bold text-dark mb-4 lh-1 fade-in-animation main-title" style={{animationDelay: '0.3s'}}>
                  <span className="aws-gradient-text">Harish S</span>
                </h1>
                
                <h2 className="display-4 fw-bold mb-4 fade-in-animation typing-container" style={{animationDelay: '0.5s', minHeight: '4rem'}}>
                  <span ref={el} className="aws-rainbow-text" />
                </h2>
                
                <p className="fs-5 text-muted mb-5 fade-in-animation description-text" style={{animationDelay: '0.7s'}}>
                  Welcome to my portfolio! I build scalable, cloud-native solutions and love solving complex problems with cutting-edge technology.
                </p>
                
                
                <div className="d-flex flex-column flex-sm-row gap-3 mb-5 fade-in-animation" style={{animationDelay: '1s'}}>
                  <Link href="/projects" className="text-decoration-none">
                    <button className="btn btn-primary btn-lg px-4 py-3 fw-semibold rounded-3 custom-btn-primary">
                      View My Work
                    </button>
                  </Link>
                  <button className="btn btn-outline-warning btn-lg px-4 py-3 fw-semibold rounded-3 custom-btn-secondary">
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Icon Sidebar - Only this remains for navigation */}
        <div className="vertical-icon-sidebar right">
          {navItems.map((item, idx) => (
            <Link
              key={item.name}
              href={item.path}
              className={`icon-nav-btn${idx === 0 ? " active" : ""}`}
              tabIndex={0}
              aria-label={item.name}
            >
              <span className="icon">{item.icon}</span>
              <span className="icon-tooltip">{item.name}</span>
            </Link>
          ))}
        </div>

        <style jsx>{`
          .hero-section {
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e3f2fd 100%);
            z-index: 1;
          }
          
          .background-layer {
            top: 0;
            left: 0;
            z-index: 0;
          }
          
          .main-content {
            z-index: 10;
            max-width: 1400px;
            padding: 0 30px;
          }

          .text-content-container {
            margin-left: 420px;
            max-width: 700px;
          }

          /* Navigation Sidebar */
          .navigation-sidebar {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 153, 0, 0.2);
            border-radius: 15px;
            padding: 30px 25px;
            box-shadow: 0 15px 40px rgba(255, 153, 0, 0.1);
            margin-left: 30px;
            animation: sidebar-slide-in 1s ease-out;
            transition: all 0.3s ease;
          }

          .navigation-sidebar:hover {
            box-shadow: 0 20px 50px rgba(255, 153, 0, 0.15);
            transform: translateY(-5px);
          }

          @keyframes sidebar-slide-in {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .sidebar-header h5 {
            color: #232F3E;
          }

          /* Navigation Buttons - Amazon Style */
          .nav-button {
            display: block;
            padding: 12px 20px;
            background: #ffffff;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            color: #374151;
            font-weight: 600;
            font-size: 0.95rem;
            transition: all 0.2s ease;
            opacity: 0;
            animation: nav-button-fade-in 0.6s ease-out forwards;
            text-align: left;
            position: relative;
            overflow: hidden;
          }

          .nav-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 153, 0, 0.1), transparent);
            transition: left 0.5s ease;
          }

          .nav-button:hover::before {
            left: 100%;
          }

          @keyframes nav-button-fade-in {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .nav-button:hover {
            background: #fff7ed;
            border-color: #FF9900;
            color: #FF9900;
            transform: translateX(5px);
            box-shadow: 0 4px 12px rgba(255, 153, 0, 0.15);
          }

          .nav-button:active {
            transform: translateX(3px) scale(0.98);
          }

          /* Contact Info */
          .contact-info {
            border-top: 1px solid rgba(255, 153, 0, 0.2);
          }

          .contact-item small {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .contact-item p {
            color: #374151;
            font-size: 0.9rem;
          }

          /* Text Content Styles */
          .main-title {
            font-size: clamp(2.8rem, 8vw, 6.5rem);
          }
          
          .typing-container {
            font-size: clamp(1.8rem, 4vw, 4rem);
          }
          
          .description-text {
            line-height: 1.7;
            font-size: 1.1rem;
          }
          
          .aws-gradient-text {
            background: linear-gradient(135deg, #FF9900 0%, #FF7A00 25%, #FFB84D 50%, #FF9900 75%, #E67E00 100%);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: aws-gradient-shift 4s ease-in-out infinite;
          }
          
          .aws-rainbow-text {
            background: linear-gradient(90deg, #FF9900 0%, #FF7A00 14%, #FFB84D 28%, #232F3E 42%, #146EB4 57%, #00A1E0 71%, #FF9900 85%, #FF5F00 100%);
            background-size: 400% 400%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: aws-rainbow-flow 5s ease-in-out infinite;
            filter: drop-shadow(0 0 8px rgba(255, 153, 0, 0.3));
          }
          
          .custom-btn-primary {
            background: linear-gradient(135deg, #FF9900 0%, #FF7A00 100%);
            border: none;
            transition: all 0.3s ease;
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
            background: rgba(255, 153, 0, 0.1);
            border-color: #FF7A00;
            color: #232F3E;
            transform: translateY(-2px);
          }
          
          .fade-in-animation {
            opacity: 0;
            animation: fade-in-up 0.8s ease-out forwards;
          }
          
          .floating-shape-1 {
            position: absolute;
            top: 5rem;
            left: 2.5rem;
            width: 5rem;
            height: 5rem;
            background: linear-gradient(to right, #fb923c, #fbbf24);
            border-radius: 50%;
            opacity: 0.2;
            animation: bounce-slow 6s ease-in-out infinite;
          }
          
          .floating-shape-2 {
            position: absolute;
            top: 10rem;
            right: 8rem;
            width: 4rem;
            height: 4rem;
            background: linear-gradient(to right, #60a5fa, #2563eb);
            border-radius: 0.5rem;
            opacity: 0.2;
            transform: rotate(45deg);
            animation: pulse-slow 4s ease-in-out infinite;
          }
          
          .floating-shape-3 {
            position: absolute;
            bottom: 8rem;
            left: 25%;
            width: 3rem;
            height: 3rem;
            background: linear-gradient(to right, #f97316, #ef4444);
            border-radius: 50%;
            opacity: 0.2;
            animation: spin-slow 8s linear infinite;
          }
          
          @keyframes aws-gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes aws-rainbow-flow {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes fade-in-up {
            from { 
              opacity: 0; 
              transform: translateY(30px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
          
          @keyframes bounce-slow {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg); 
            }
            50% { 
              transform: translateY(-20px) rotate(180deg); 
            }
          }
          
          @keyframes pulse-slow {
            0%, 100% { 
              transform: scale(1) rotate(45deg); 
              opacity: 0.2; 
            }
            50% { 
              transform: scale(1.1) rotate(225deg); 
              opacity: 0.3; 
            }
          }
          
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          .sliding-image-outer {
            overflow: hidden;
          }
          
          .sliding-image {
            position: absolute;
            top: 50%;
            left: -420px;
            transform: translateY(-50%);
            animation: slide-left-right 10s linear infinite;
            filter: grayscale(10%) brightness(1.1);
          }
          
          @keyframes slide-left-right {
            0% {
              left: -420px;
              opacity: 0;
            }
            10% {
              opacity: 0.85;
            }
            90% {
              opacity: 0.85;
            }
            100% {
              left: 100vw;
              opacity: 0;
            }
          }
          
          /* Responsive Design */
          @media (max-width: 1400px) {
            .text-content-container {
              margin-left: 350px;
              max-width: 650px;
            }
            .navigation-sidebar {
              margin-left: 20px;
            }
          }
          
          @media (max-width: 1200px) {
            .text-content-container {
              margin-left: 300px;
              max-width: 600px;
            }
          }
          
          @media (max-width: 992px) {
            .text-content-container {
              margin-left: 250px;
              max-width: 550px;
            }
            .navigation-sidebar {
              margin-left: 15px;
              padding: 25px 20px;
            }
          }
          
          @media (max-width: 768px) {
            .text-content-container {
              margin-left: 0;
              text-align: center;
              max-width: none;
            }
            .navigation-sidebar {
              margin-left: 0;
              margin-top: 30px;
            }
            .main-content {
              padding: 0 20px;
            }
          }

          .nav-gradient-title {
            background: linear-gradient(90deg, #FF9900 0%, #FF7A00 50%, #00A1E0 100%);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
            font-size: 1.3rem;
            letter-spacing: 1px;
            animation: aws-gradient-shift 4s ease-in-out infinite;
          }

          .nav-button-enhanced {
            display: block;
            width: 100%;
            padding: 14px 22px;
            background: linear-gradient(90deg, #fff 80%, #f3f4f6 100%);
            border: 2px solid #f3f4f6;
            border-radius: 10px;
            color: #374151;
            font-weight: 700;
            font-size: 1.05rem;
            position: relative;
            transition: 
              color 0.2s, 
              background 0.2s, 
              border-color 0.2s, 
              box-shadow 0.2s, 
              transform 0.18s;
            box-shadow: 0 2px 8px rgba(255, 153, 0, 0.08);
            overflow: hidden;
            opacity: 0;
            animation: nav-button-fade-in 0.6s ease-out forwards;
            margin-bottom: 0.7em;
          }

          .nav-button-enhanced .nav-icon {
            font-size: 1.3em;
            font-weight: 900;
            color: #FF9900;
            margin-right: 0.5em;
            transition: color 0.2s, transform 0.2s;
          }

          .nav-button-enhanced:hover,
          .nav-button-enhanced:focus {
            background: linear-gradient(90deg, #fff7ed 80%, #ffe0b2 100%);
            border-color: #FF9900;
            box-shadow: 0 8px 24px rgba(255, 153, 0, 0.18);
            transform: scale(1.045) translateX(6px);
          }

          .nav-button-enhanced:hover .nav-icon,
          .nav-button-enhanced:focus .nav-icon {
            color: #00A1E0;
            transform: scale(1.2);
          }

          .nav-button-enhanced .nav-link-text {
            z-index: 2;
            position: relative;
          }

          .nav-button-enhanced .nav-underline {
            content: '';
            position: absolute;
            left: 18px;
            right: 18px;
            bottom: 10px;
            height: 3px;
            background: linear-gradient(90deg, #FF9900, #FF7A00, #00A1E0);
            border-radius: 2px;
            opacity: 0;
            transform: scaleX(0.5);
            transition: opacity 0.2s, transform 0.2s;
            z-index: 1;
          }

          .nav-button-enhanced:hover,
          .nav-button-enhanced:focus {
            color: #FF9900;
            background: #fff7ed;
            border-color: #FF9900;
            box-shadow: 0 6px 18px rgba(255, 153, 0, 0.18);
            transform: scale(1.04) translateX(6px);
          }

          .nav-button-enhanced:hover .nav-icon,
          .nav-button-enhanced:focus .nav-icon {
            color: #00A1E0;
          }

          .nav-button-enhanced:hover .nav-underline,
          .nav-button-enhanced:focus .nav-underline {
            opacity: 1;
            transform: scaleX(1);
          }

          .nav-header-btn {
            background: linear-gradient(90deg, #fff 80%, #f3f4f6 100%);
            border: 2px solid #f3f4f6;
            border-radius: 10px;
            margin-bottom: 1em;
            position: relative;
            overflow: hidden;
          }

          .nav-header-btn:hover,
          .nav-header-btn:focus {
            background: linear-gradient(90deg, #fff7ed 80%, #ffe0b2 100%);
            border-color: #FF9900;
            box-shadow: 0 8px 24px rgba(255, 153, 0, 0.18);
            transform: scale(1.045) translateX(6px);
          }

          .nav-header-gradient {
            background: linear-gradient(90deg, #FF9900 0%, #FF7A00 50%, #00A1E0 100%);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
            font-size: 1.3rem;
            font-weight: 800;
            letter-spacing: 1px;
            margin-left: 0.5em;
            margin-right: 0.5em;
            animation: aws-gradient-shift 4s ease-in-out infinite;
            display: inline-block;
            line-height: 1;
          }

          /* Vertical Icon Sidebar */
          .vertical-icon-sidebar {
            position: fixed;
            top: 50%;
            right: 32px;         /* Place on the right */
            /* left: 32px; */     /* Remove or comment out this line */
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            background: rgba(30, 41, 59, 0.45);
            border-radius: 2rem;
            padding: 2rem 0.7rem;
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
            backdrop-filter: blur(16px);
            z-index: 100;
          }

          .icon-nav-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: transparent;
            color: #232F3E; /* AWS dark blue */
            font-size: 2rem;
            transition: 
              background 0.2s, 
              color 0.2s, 
              box-shadow 0.2s, 
              transform 0.18s;
            border: none;
            outline: none;
            box-shadow: none;
            margin: 0 auto;
            position: relative;
            cursor: pointer;
          }

          .icon-nav-btn:hover,
          .icon-nav-btn:focus {
            background: linear-gradient(135deg, #FF9900 0%, #232F3E 100%);
            color: #fff;
            box-shadow: 0 4px 24px rgba(255, 153, 0, 0.25);
            transform: scale(1.12);
          }

          .icon-nav-btn.active,
          .icon-nav-btn[aria-current="page"] {
            background: #FF9900;
            color: #fff;
            box-shadow: 0 2px 12px rgba(255, 153, 0, 0.18);
          }

          .icon-tooltip {
            position: absolute;
            right: 60px;
            top: 50%;
            transform: translateY(-50%);
            background: #232F3E;
            color: #fff;
            font-weight: 700;
            font-size: 1.05rem;
            padding: 8px 18px;
            border-radius: 8px;
            box-shadow: 0 4px 16px rgba(255, 153, 0, 0.10);
            opacity: 0;
            pointer-events: none;
            white-space: nowrap;
            transition: opacity 0.18s, right 0.18s, background 0.18s, color 0.18s;
            z-index: 10;
            border: 2px solid #FF9900;
            letter-spacing: 0.5px;
          }

          .icon-nav-btn:hover .icon-tooltip,
          .icon-nav-btn:focus .icon-tooltip {
            opacity: 1;
            right: 58px;
            background: linear-gradient(90deg, #FF9900 0%, #FF7A00 100%);
            color: #232F3E;
            border-color: #FF7A00;
          }
        `}</style>
      </section>
    </>
  );
}
