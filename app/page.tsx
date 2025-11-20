"use client";
import React from "react";
import { portfolioStyle } from "./page.styles";
import {
  TABS,
  PROJECTS,
  SKILLS,
  TECHNOLOGIES,
  EXPERIENCE,
  ICON_MAP,
} from "./page.constant";
import { usePortfolio } from "./page.hook";
import { UI_TEXT } from "./page.constant";
import { handleDownload } from "@/lib/utils";
import SchoolIcon from "@mui/icons-material/School";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import InfoIcon from "@mui/icons-material/Info";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
const ContactForm = React.lazy(() => import("../components/contact/index"));

export default function Home() {
  const { activeTab, setActiveTab, handleDownloadResume } = usePortfolio();

  return (
    <div className="portfolio">
      <style>{portfolioStyle}</style>
      <div className="bg-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>

        {/* Planets */}
        <div className="planet earth"></div>
        <div className="planet neptune"></div>
        <div className="planet mercury"></div>
        <div className="planet mars"></div>
        <div className="planet jupiter"></div>
        <div className="planet saturn"></div>
        <div className="planet venus"></div>
        <div className="planet uranus"></div>
      </div>

      <div className="nav-container">
        <div className="top-tabs">
          {TABS.map((tab) => {
            const Icon = ICON_MAP[tab.icon as keyof typeof ICON_MAP];
            return (
              <button
                key={tab.id}
                className={`top-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">
                  <Icon />
                </span>
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="main-container">
        <div className="profile-sidebar">
          <div className="profile-card">
            <div className="profile-image-container">
              <img
                src="/sagarImage.jpg"
                alt="Sagar - Software Engineer"
                className="profile-avatar"
              />
              <div className="avatar-glow"></div>
            </div>

            <div className="profile-info">
              <h1 className="profile-name">Sagar</h1>
              <h2 className="profile-title">Software Engineer</h2>
              <h3 className="profile-specialty">Frontend Developer</h3>

              <div className="social-links">
                <a
                  href="https://github.com/sagarkashyap5587"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link github"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/sagar-529198250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                >
                  <LinkedInIcon />
                </a>
                <a href="#" className="social-link email">
                  <EmailIcon />
                </a>
              </div>

              <button className="download-btn" onClick={handleDownload}>
                <span>📄</span> Download Resume
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="content-area">
          <div className="tab-content">
            {/* About */}
            {activeTab === 0 && (
              <div>
                <h2 className="section-title">About Me</h2>
                <div className="card">
                  <p
                    style={{
                      fontSize: "1.2rem",
                      lineHeight: "1.8",
                      marginBottom: "25px",
                    }}
                  >
                    {UI_TEXT.ABOUT_ME_TEXT}
                  </p>
                  <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
                    {UI_TEXT.ABOUT_ME_SUB_TEXT}
                  </p>
                </div>

                <div className="info-grid">
                  {/* Education */}
                  <div className="card">
                    <h3
                      style={{
                        color: "#f093fb",
                        marginBottom: "20px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "1.5rem",
                        fontWeight: "800",
                      }}
                    >
                      <SchoolIcon /> Education
                    </h3>

                    <p
                      style={{
                        fontWeight: "700",
                        fontSize: "1.2rem",
                        marginBottom: "8px",
                      }}
                    >
                      {UI_TEXT.MASTER_DEGREE_TEXT}
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.8)" }}>
                      {UI_TEXT.UNIVERSITY_DETAILS}
                    </p>
                  </div>

                  {/* Quick Facts */}
                  <div className="card">
                    <h3
                      style={{
                        color: "#f093fb",
                        marginBottom: "20px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "1.5rem",
                        fontWeight: "800",
                      }}
                    >
                      <InfoIcon /> Quick Facts
                    </h3>

                    <p
                      style={{
                        marginBottom: "12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "1.1rem",
                      }}
                    >
                      <LocationOnIcon /> Location: Noida
                    </p>

                    <p
                      style={{
                        marginBottom: "12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "1.1rem",
                      }}
                    >
                      <WorkIcon /> Available: Open for better opportunities
                    </p>

                    <p
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "1.1rem",
                      }}
                    >
                      <TrackChangesIcon /> Focus: Web Development
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Skills */}
            {activeTab === 1 && (
              <div>
                <h2 className="section-title">Skills & Expertise</h2>
                <div className="card">
                  {SKILLS.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.level}%</span>
                      </div>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card" style={{ marginTop: "50px" }}>
                  <h3
                    style={{
                      fontSize: "2.2rem",
                      marginBottom: "30px",
                      fontWeight: "800",
                    }}
                  >
                    Technologies I Use
                  </h3>
                  <div className="tech-tags">
                    {TECHNOLOGIES.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div>
                <h2 className="section-title">Featured Projects</h2>
                <div className="grid">
                  {PROJECTS.map((project, index) => (
                    <div key={index} className="project-card">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-img"
                      />
                      <div className="project-content">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-desc">{project.description}</p>
                        <div className="tags">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="project-links">
                          <a href={project.github} className="btn btn-outline">
                            Code
                          </a>
                          <a href={project.demo} className="btn btn-primary">
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div>
                <h2 className="section-title">Work Experience</h2>
                <div className="card">
                  {EXPERIENCE.map((exp, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-role">{exp.role}</div>
                      <div className="timeline-company">{exp.company}</div>
                      <div className="timeline-period">{exp.period}</div>
                      <div className="timeline-desc">{exp.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact */}
            {activeTab === 4 && <ContactForm />}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <h3>Let Build Something Amazing Together</h3>
        <p>© 2024 Sagar. All rights reserved.</p>
      </div>
    </div>
  );
}
