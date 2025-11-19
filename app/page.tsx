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
import SchoolIcon from "@mui/icons-material/School";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import InfoIcon from "@mui/icons-material/Info";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Home() {
  const {
    activeTab,
    setActiveTab,
    formData,
    showAlert,
    handleDownloadResume,
    handleInputChange,
    handleSubmit,
  } = usePortfolio();

  return (
    <div className="portfolio">
      <style>{portfolioStyle}</style>
      <div className="header">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
          alt="Profile"
          className="avatar"
        />
        <h1>Sagar</h1>
        <h2>Software Engineer — Frontend Developer</h2>

        <div
          className="social-links"
          style={{ display: "flex", gap: "12px", justifyContent: "center" }}
        >
          {/* GitHub */}
          <a
            href="https://github.com/sagarkashyap5587"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              background: "#24292e",
              color: "white",
              borderRadius: "50%",
              textDecoration: "none",
            }}
          >
            <GitHubIcon />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sagar-529198250"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              background: "#0A66C2",
              color: "white",
              borderRadius: "50%",
              textDecoration: "none",
            }}
          >
            <LinkedInIcon />
          </a>

          {/* Email */}
          <a
            href="mailto:sagarkashyap5587@gmail.com"
            className="social-btn"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              background: "#EA4335",
              color: "white",
              borderRadius: "50%",
              textDecoration: "none",
            }}
          >
            <EmailIcon />
          </a>
        </div>

        <button className="download-btn" onClick={handleDownloadResume}>
          <span>⬇</span> Download Resume
        </button>
      </div>

      {/* Tabs */}
      <div className="container">
        <div className="tabs">
          {TABS.map((tab) => {
            const Icon = ICON_MAP[tab.icon];
            return (
              <button
                key={tab.id}
                className={`tab ${activeTab === tab.id ? "active" : ""}`}
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

        <div className="tab-content">
          {/* About */}
          {activeTab === 0 && (
            <div>
              <h2 className="section-title">About Me</h2>
              <div className="card">
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                    marginBottom: "20px",
                  }}
                >
                  I am a Software Engineer specializing in React.js with 2 years
                  of experience. My expertise includes modern frontend
                  development, micro-frontend architecture, and writing
                  high-quality test cases using Jest. I focus on building
                  scalable, user-friendly, and performance-optimized web
                  applications.
                </p>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                  I love solving complex problems and turning ideas into reality
                  through clean, efficient code. When I am not coding, you can
                  find me contributing to open-source projects, exploring new
                  technologies, or sharing knowledge with the developer
                  community.
                </p>
              </div>

              <div className="info-grid">
                {/* Education */}
                <div className="card">
                  <h3
                    style={{
                      color: "#667eea",
                      marginBottom: "15px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <SchoolIcon /> Education
                  </h3>

                  <p
                    style={{
                      fontWeight: "700",
                      fontSize: "1.1rem",
                      marginBottom: "5px",
                    }}
                  >
                    Master of Computer Application
                  </p>
                  <p style={{ color: "#888" }}>Kr Mangalam University, 2024</p>
                </div>

                {/* Quick Facts */}
                <div className="card">
                  <h3
                    style={{
                      color: "#667eea",
                      marginBottom: "15px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <InfoIcon /> Quick Facts
                  </h3>

                  <p
                    style={{
                      marginBottom: "8px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <LocationOnIcon /> Location: Noida
                  </p>

                  <p
                    style={{
                      marginBottom: "8px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <WorkIcon /> Available: Freelance
                  </p>

                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
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

              <div className="card" style={{ marginTop: "30px" }}>
                <h3
                  style={{
                    fontSize: "1.8rem",
                    marginBottom: "20px",
                    fontWeight: "700",
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

          {/* Projects */}
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

          {/* Experience */}
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
          {activeTab === 4 && (
            <div>
              <h2 className="section-title" style={{ textAlign: "center" }}>
                Get In Touch
              </h2>
              <div className="card contact-form">
                <div onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="submit-btn"
                  >
                    <span>Send Message</span>
                    <span>➤</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <h3>Let's Build Something Amazing Together</h3>
        <p>© 2024 John Anderson. All rights reserved.</p>
      </div>

      {/* Alert */}
      {showAlert && (
        <div className="alert alert-success">
          <span>✓</span>
          <span>Success! Action completed.</span>
        </div>
      )}
    </div>
  );
}
