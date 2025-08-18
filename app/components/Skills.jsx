"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Link from "next/link";
import { 
  MdHome, MdPerson, MdBuild, MdEmojiEvents, MdCloud, MdCode
} from "react-icons/md";
import { FiGrid, FiMail } from "react-icons/fi";
import { 
  SiJavascript, SiReact, SiHtml5, SiCss3, SiBootstrap, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiGit, SiGithub, SiPostman, SiJenkins, SiGitlab
} from "react-icons/si";

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

  const navItems = [
    { name: "Home", path: "/", icon: <MdHome /> },
    { name: "About", path: "/about", icon: <MdPerson /> },
    { name: "Skills", path: "/skills", icon: <MdBuild /> },
    { name: "Projects", path: "/projects", icon: <FiGrid /> },
    { name: "Education & Certifications", path: "/education", icon: <MdEmojiEvents  /> },
  ];

  // Skills with levels 0-100 for glow and size scaling
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { icon: <SiHtml5 />, name: "HTML5", level: 95, color: "#E34F26" },
        { icon: <SiCss3 />, name: "CSS3", level: 90, color: "#1572B6" },
        { icon: <SiJavascript />, name: "JavaScript", level: 90, color: "#F7DF1E" },
        { icon: <SiReact />, name: "React.js", level: 85, color: "#61DAFB" },
        { icon: <SiBootstrap />, name: "Bootstrap", level: 85, color: "#7952B3" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS", level: 80, color: "#06B6D4" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { icon: <SiNodedotjs />, name: "Node.js", level: 85, color: "#339933" },
        { icon: <SiExpress />, name: "Express.js", level: 80, color: "#000000" }
      ]
    },
    {
      title: "Databases & Cloud",
      skills: [
        { icon: <SiMongodb />, name: "MongoDB", level: 85, color: "#47A248" },
        { icon: <SiMysql />, name: "MySQL", level: 80, color: "#4479A1" },
        { icon: <MdCloud />, name: "AWS Basics", level: 70, color: "#FF9900" }
      ]
    },
    {
      title: "DevOps & CI/CD",
      skills: [
        { icon: <SiGitlab />, name: "GitLab", level: 90, color: "#FC6D26" },
        { icon: <SiJenkins />, name: "Jenkins", level: 85, color: "#D24939" },
        { icon: <SiGit />, name: "Git", level: 90, color: "#F05032" },
        { icon: <MdCode />, name: "CI/CD Pipelines", level: 85, color: "#007ACC" }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { icon: <SiGithub />, name: "GitHub", level: 90, color: "#181717" },
        { icon: <SiPostman />, name: "Postman", level: 80, color: "#FF6C37" },
        { icon: <MdCode />, name: "VS Code", level: 95, color: "#007ACC" }
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
        <div className="mb-5 text-center">
          <p className="fs-5 text-muted fw-medium mb-0">Technical Proficiencies</p>
          <h1 className="display-2 fw-bold text-dark mb-3">
            <span className="aws-gradient-text">Skills</span>
          </h1>
          <h2 className="display-6 fw-bold typing-container" style={{ minHeight: "3rem" }}>
            <span ref={el} className="aws-rainbow-text" />
          </h2>
        </div>

        {/* Explanation paragraph */}
        <div className="mb-5 mx-auto" style={{ maxWidth: 800, color: "#232F3E", fontSize: "1.15rem", lineHeight: 1.6, textAlign: "center" }}>
          <p>
            I build projects by combining these technologies to create scalable full-stack applications with smooth user experiences. My expertise in frontend frameworks like React.js, backend development with Node.js and Express, integrated with databases such as MongoDB and MySQL, allow me to build robust solutions. Utilizing DevOps tools including GitLab, Jenkins, and CI/CD pipelines ensures continuous integration and efficient deployment processes for reliable and fast delivery.
          </p>
        </div>


        <div className="d-flex flex-wrap justify-content-center gap-5" style={{ maxWidth: 1200 }}>
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category-card p-4 rounded-4 shadow-sm" style={{ width: 280 }}>
              <h3 className="section-title text-center mb-4">{category.title}</h3>
              <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                {category.skills.map((skill, sidx) => {
                  const iconSize = 28 + (skill.level / 100) * 20; // icon size between 28 and 48
                  const glowIntensity = skill.level / 100;
                  return (
                    <li key={sidx} className="d-flex align-items-center gap-3">
                      <div
                        className="skill-icon"
                        style={{
                          color: skill.color,
                          fontSize: iconSize,
                          filter: `drop-shadow(0 0 ${2 + glowIntensity * 6}px ${skill.color})`,
                          transition: "all 0.3s ease"
                        }}
                        aria-label={`${skill.name} icon`}
                      >
                        {skill.icon}
                      </div>
                      <span className="fw-semibold" style={{ fontSize: 18 }}>{skill.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Vertical Icon Sidebar */}
        <div className="vertical-icon-sidebar right">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`icon-nav-btn${item.path === "/skills" ? " active" : ""}`}
              aria-label={item.name}
            >
              <span className="icon">{item.icon}</span>
              <span className="icon-tooltip">{item.name}</span>
            </Link>
          ))}
        </div>

        <style jsx>{`
          .skills-section {
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e3f2fd 100%);
            min-height: 100vh;
            padding-bottom: 4rem;
            color: #232f3e;
          }

          .skill-category-card {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 153, 0, 0.1);
            transition: box-shadow 0.3s ease, transform 0.3s ease;
          }
          .skill-category-card:hover {
            box-shadow: 0 15px 45px rgba(255, 153, 0, 0.15);
            transform: translateY(-6px);
          }

          .section-title {
            color: #232f3e;
            font-weight: 700;
            font-size: 1.45rem;
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
            color: #232f3e;
            font-size: 2rem;
            transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.18s;
            border: none;
            outline: none;
            box-shadow: none;
            margin: 0 auto;
            position: relative;
            cursor: pointer;
          }
          .icon-nav-btn:hover,
          .icon-nav-btn:focus {
            background: linear-gradient(135deg, #ff9900 0%, #232f3e 100%);
            color: #fff;
            box-shadow: 0 4px 24px rgba(255, 153, 0, 0.25);
            transform: scale(1.12);
          }
          .icon-nav-btn.active {
            background: #ff9900;
            color: #fff;
            box-shadow: 0 2px 12px rgba(255, 153, 0, 0.18);
          }
          .icon-tooltip {
            position: absolute;
            right: 60px;
            top: 50%;
            transform: translateY(-50%);
            background: #232f3e;
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
            border: 2px solid #ff9900;
            letter-spacing: 0.5px;
          }
          .icon-nav-btn:hover .icon-tooltip,
          .icon-nav-btn:focus .icon-tooltip {
            opacity: 1;
            right: 58px;
            background: linear-gradient(90deg, #ff9900 0%, #ff7a00 100%);
            color: #232f3e;
            border-color: #ff7a00;
          }

          @keyframes aws-gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          @keyframes aws-rainbow-flow {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          @media (max-width: 1200px) {
            .skill-category-card {
              width: 100% !important;
              max-width: 500px;
            }
          }

          @media (max-width: 768px) {
            .skill-category-card {
              margin-bottom: 2rem;
            }
            .skills-section {
              padding: 2rem 1rem 4rem;
            }
          }
        `}</style>
      </section>
    </>
  );
}
