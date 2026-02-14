"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { 
  MdCloud, MdCode
} from "react-icons/md";
import { 
  SiJavascript, SiReact, SiHtml5, SiCss3, SiBootstrap, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiGit, SiGithub, SiPostman, SiJenkins, SiGitlab,
  SiPython, SiFlask, SiFastapi
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

export default function SkillsSection() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Development",
        "Backend Development",
        "Databases & Cloud",
        "DevOps & CI/CD",
        "Tools & Platforms"
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


  // Skills with levels 0-100 for glow and size scaling
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { icon: <FaJava />, name: "Java", level: 85, color: "#007396" },
        { icon: <TbBrandCpp />, name: "C", level: 80, color: "#A8B9CC" },
        { icon: <SiPython />, name: "Python", level: 85, color: "#3776AB" },
        { icon: <SiJavascript />, name: "JavaScript", level: 90, color: "#F7DF1E" },
        { icon: <MdCode />, name: "DSA & OOPs", level: 85, color: "#232F3E" }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { icon: <SiHtml5 />, name: "HTML5", level: 95, color: "#E34F26" },
        { icon: <SiCss3 />, name: "CSS3", level: 90, color: "#1572B6" },
        { icon: <SiReact />, name: "React.js", level: 85, color: "#61DAFB" },
        { icon: <SiBootstrap />, name: "Bootstrap CSS", level: 85, color: "#7952B3" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { icon: <SiNodedotjs />, name: "Node.js", level: 85, color: "#339933" },
        { icon: <SiExpress />, name: "Express.js", level: 80, color: "#000000" },
        { icon: <SiFastapi />, name: "FastAPI", level: 80, color: "#009688" },
        { icon: <SiFlask />, name: "Flask", level: 75, color: "#000000" },
        { icon: <MdCode />, name: "REST APIs", level: 85, color: "#FF6C37" }
      ]
    },
    {
      title: "Databases & Cloud",
      skills: [
        { icon: <SiMongodb />, name: "MongoDB", level: 85, color: "#47A248" },
        { icon: <SiMysql />, name: "MySQL", level: 80, color: "#4479A1" },
        { icon: <MdCloud />, name: "AWS (Basics)", level: 70, color: "#FF9900" }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { icon: <SiGit />, name: "Git", level: 90, color: "#F05032" },
        { icon: <SiGithub />, name: "GitHub", level: 90, color: "#181717" },
        { icon: <MdCode />, name: "Docker", level: 80, color: "#2496ED" },
        { icon: <SiJenkins />, name: "Jenkins", level: 80, color: "#D24939" },
        { icon: <MdCode />, name: "CI/CD", level: 85, color: "#007ACC" },
        { icon: <SiPostman />, name: "Postman", level: 80, color: "#FF6C37" }
      ]
    }
  ];

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        crossOrigin="anonymous"
      />

      <section className="position-relative d-flex flex-column align-items-center justify-content-center min-vh-100 skills-section py-5 px-3">
        <div className="page-header-container mb-5 text-center fade-in-animation" style={{animationDelay: '0.1s'}}>
          <div className="header-badge mb-3">
            <span className="me-2">⚡</span> Technical Proficiencies
          </div>
          <h1 className="display-2 fw-bold text-dark mb-3">
            <span className="aws-gradient-text">Skills</span>
          </h1>
          <h2 className="display-6 fw-bold typing-container" style={{ minHeight: "3rem" }}>
            <span ref={el} className="aws-rainbow-text" />
          </h2>
          <div className="header-line mx-auto mt-3"></div>
        </div>

        {/* Explanation paragraph */}
        <div className="mb-5 mx-auto fade-in-animation" style={{ maxWidth: 800, color: "#232F3E", fontSize: "1.15rem", lineHeight: 1.6, textAlign: "center", animationDelay: '0.3s' }}>
          <p>
            I build projects by combining these technologies to create scalable full-stack applications with smooth user experiences. My expertise in frontend frameworks like React.js, backend development with Node.js and Express, integrated with databases such as MongoDB and MySQL, allow me to build robust solutions. Utilizing DevOps tools including GitLab, Jenkins, and CI/CD pipelines ensures continuous integration and efficient deployment processes for reliable and fast delivery.
          </p>
        </div>


        <div className="skills-cascade-container mx-auto" style={{ maxWidth: 1000, width: '100%' }}>
          {skillCategories.map((category, idx) => {
            const totalCats = skillCategories.length;
            const mid = Math.floor(totalCats / 2);
            const indentLevel = idx <= mid ? idx : totalCats - 1 - idx;
            const slideFrom = idx % 2 === 0 ? 'left' : 'right';
            return (
              <div 
                key={idx} 
                className={`cascade-card-wrapper cascade-slide-${slideFrom}`}
                style={{ 
                  marginLeft: `${indentLevel * 60}px`,
                  animationDelay: `${0.3 + idx * 0.18}s`
                }}
              >
                <div className="cascade-card p-4 rounded-4 shadow-sm" style={{animationDelay: `${idx * 0.6}s`}}>
                  <div className="cascade-card-accent"></div>
                  <h3 className="cascade-title mb-3">
                    <span className="cascade-number">{String(idx + 1).padStart(2, '0')}</span>
                    {category.title}
                  </h3>
                  <div className="d-flex flex-wrap gap-3" style={{paddingLeft: '12px'}}>
                    {category.skills.map((skill, sidx) => {
                      const iconSize = 28 + (skill.level / 100) * 20;
                      const glowIntensity = skill.level / 100;
                      return (
                        <div key={sidx} className="skill-chip d-flex align-items-center gap-2 px-3 py-2 rounded-pill">
                          <div
                            style={{
                              color: skill.color,
                              fontSize: iconSize,
                              filter: `drop-shadow(0 0 ${2 + glowIntensity * 6}px ${skill.color})`,
                              transition: 'all 0.3s ease'
                            }}
                            aria-label={`${skill.name} icon`}
                          >
                            {skill.icon}
                          </div>
                          <span className="fw-semibold" style={{ fontSize: 15 }}>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>


        <style jsx>{`
          .skills-section {
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e3f2fd 100%);
            min-height: 100vh;
            padding-bottom: 4rem;
            color: #232f3e;
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

          /* Cascade Layout */
          .skills-cascade-container {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            padding: 0 1rem;
          }
          .cascade-card-wrapper {
            opacity: 0;
            transition: margin 0.3s ease;
          }
          .cascade-slide-left {
            animation: cascade-from-left 0.8s ease-out forwards;
          }
          .cascade-slide-right {
            animation: cascade-from-right 0.8s ease-out forwards;
          }
          @keyframes cascade-from-left {
            from { opacity: 0; transform: translateX(-80px) scale(0.95); }
            to { opacity: 1; transform: translateX(0) scale(1); }
          }
          @keyframes cascade-from-right {
            from { opacity: 0; transform: translateX(80px) scale(0.95); }
            to { opacity: 1; transform: translateX(0) scale(1); }
          }
          .cascade-card {
            background: rgba(255, 255, 255, 0.92);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 153, 0, 0.12);
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            animation: cascade-hover 5s ease-in-out infinite;
          }
          @keyframes cascade-hover {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .cascade-card:hover {
            transform: translateY(-8px) scale(1.01) !important;
            box-shadow: 0 20px 50px rgba(255, 153, 0, 0.18);
            animation-play-state: paused;
          }
          .cascade-card-accent {
            position: absolute;
            top: 0; left: 0; width: 5px; height: 100%;
            background: linear-gradient(180deg, #FF9900, #FF7A00, #FFB84D, #00A1E0);
            background-size: 100% 300%;
            animation: accent-slide 4s linear infinite;
            border-radius: 4px 0 0 4px;
          }
          @keyframes accent-slide {
            0% { background-position: 0% 0%; }
            100% { background-position: 0% 300%; }
          }
          .cascade-title {
            color: #232f3e;
            font-weight: 800;
            font-size: 1.35rem;
            padding-left: 12px;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .cascade-number {
            color: #FF9900;
            font-size: 0.85rem;
            font-weight: 800;
            opacity: 0.5;
            margin-right: 4px;
          }
          .skill-chip {
            background: rgba(255, 255, 255, 0.8);
            border: 1px solid rgba(0,0,0,0.06);
            transition: all 0.3s ease;
          }
          .skill-chip:hover {
            background: rgba(255, 153, 0, 0.08);
            border-color: rgba(255, 153, 0, 0.3);
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(255, 153, 0, 0.12);
          }

          /* AWS gradient text */
          .aws-gradient-text {
            background: linear-gradient(
              135deg,
              #ff9900 0%,
              #ff7a00 25%,
              #ffb84d 50%,
              #ff9900 75%,
              #e67e00 100%
            );
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: aws-gradient-shift 4s ease-in-out infinite;
            user-select: none;
          }

          .aws-rainbow-text {
            background: linear-gradient(
              90deg,
              #ff9900 0%,
              #ff7a00 14%,
              #ffb84d 28%,
              #232f3e 42%,
              #146eb4 57%,
              #00a1e0 71%,
              #ff9900 85%,
              #ff5f00 100%
            );
            background-size: 400% 400%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: aws-rainbow-flow 5s ease-in-out infinite;
            filter: drop-shadow(0 0 8px rgba(255, 153, 0, 0.3));
          }

          .typing-container {
            font-size: clamp(1.5rem, 3vw, 3rem);
          }


          @keyframes aws-gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          @keyframes aws-rainbow-flow {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          @media (max-width: 768px) {
            .cascade-card-wrapper {
              margin-left: 0 !important;
              margin-right: 0 !important;
            }
            .skills-section {
              padding: 80px 0.75rem 3rem !important;
            }
            .skill-chip {
              padding: 6px 10px !important;
            }
            .skill-chip span {
              font-size: 13px !important;
            }
            .cascade-card {
              padding: 1rem !important;
            }
            .cascade-title {
              font-size: 1.1rem;
            }
            .skills-cascade-container {
              gap: 1rem;
              padding: 0 0.25rem;
            }
          }
          @media (max-width: 480px) {
            .skills-section {
              padding: 70px 0.5rem 2rem !important;
            }
            .cascade-card {
              padding: 0.8rem !important;
            }
            .skill-chip {
              padding: 4px 8px !important;
              gap: 4px !important;
            }
            .skill-chip span {
              font-size: 11px !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
