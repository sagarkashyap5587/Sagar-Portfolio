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
  PARTICLES,
  PLANETS,
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
import { Box, Typography } from "@mui/material";
const ContactForm = React.lazy(() => import("../components/contact/index"));

export default function Home() {
  const { activeTab, setActiveTab } = usePortfolio();

  return (
    <Box className="portfolio">
      <style>{portfolioStyle}</style>
      <Box className="bg-particles">
        {PARTICLES.map((_, i) => (
          <Box key={i} className="particle" />
        ))}

        {PLANETS.map((planet) => (
          <Box key={planet} className={`planet ${planet}`} />
        ))}
      </Box>

      <Box className="nav-container">
        <Box className="top-tabs">
          {TABS.map((tab) => {
            const Icon = ICON_MAP[tab.icon as keyof typeof ICON_MAP];
            return (
              <button
                key={tab.id}
                className={`top-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Typography component="span" className="tab-icon">
                  <Icon />
                </Typography>
                <Typography component="span">{tab.name}</Typography>
              </button>
            );
          })}
        </Box>
      </Box>
      <Box className="main-container">
        <Box className="profile-sidebar">
          <Box className="profile-card">
            <Box className="profile-image-container">
              <img
                src="/sagarImage.jpg"
                alt="Sagar - Software Engineer"
                className="profile-avatar"
              />
              <Box className="avatar-glow"></Box>
            </Box>

            <Box className="profile-info">
              <Typography variant="h1" className="profile-name">
                Sagar
              </Typography>
              <Typography variant="h2" className="profile-title">
                Software Engineer
              </Typography>
              <Typography variant="h3" className="profile-specialty">
                Frontend Developer
              </Typography>

              <Box className="social-links">
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
              </Box>

              <button className="download-btn" onClick={handleDownload}>
                <Typography component="span">📄</Typography> Download Resume
              </button>
            </Box>
          </Box>
        </Box>

        {/* Right Side - Content */}
        <Box className="content-area">
          <Box className="tab-content">
            {/* About */}
            {activeTab === 0 && (
              <Box>
                <Typography variant="h2" className="section-title">
                  About Me
                </Typography>
                <Box className="card">
                  <Typography
                    sx={{
                      fontSize: "1.2rem",
                      lineHeight: "1.8",
                      marginBottom: "25px",
                    }}
                  >
                    {UI_TEXT.ABOUT_ME_TEXT}
                  </Typography>
                  <Typography sx={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
                    {UI_TEXT.ABOUT_ME_SUB_TEXT}
                  </Typography>
                </Box>

                <Box className="info-grid">
                  <Box className="card">
                    <Typography
                      variant="h3"
                      sx={{
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
                    </Typography>

                    <Typography
                      sx={{
                        fontWeight: "700",
                        fontSize: "1.2rem",
                        marginBottom: "8px",
                      }}
                    >
                      {UI_TEXT.MASTER_DEGREE_TEXT}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>
                      {UI_TEXT.UNIVERSITY_DETAILS}
                    </Typography>
                  </Box>

                  <Box className="card">
                    <Typography
                      variant="h3"
                      sx={{
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
                    </Typography>

                    <Typography
                      sx={{
                        marginBottom: "12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "1.1rem",
                      }}
                    >
                      <LocationOnIcon /> Location: Noida
                    </Typography>

                    <Typography
                      sx={{
                        marginBottom: "12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "1.1rem",
                      }}
                    >
                      <WorkIcon /> Available: Open for better opportunities
                    </Typography>

                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "1.1rem",
                      }}
                    >
                      <TrackChangesIcon /> Focus: Web Development
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )}

            {/* Skills */}
            {activeTab === 1 && (
              <Box>
                <Typography variant="h2" className="section-title">
                  Skills & Expertise
                </Typography>
                <Box className="card">
                  {SKILLS.map((skill, index) => (
                    <Box key={index} className="skill-item">
                      <Box className="skill-header">
                        <Typography component="span" className="skill-name">
                          {skill.name}
                        </Typography>
                        <Typography component="span" className="skill-percent">
                          {skill.level}%
                        </Typography>
                      </Box>
                      <Box className="progress-bar">
                        <Box
                          className="progress-fill"
                          sx={{ width: `${skill.level}%` }}
                        ></Box>
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Box className="card" sx={{ marginTop: "50px" }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "2.2rem",
                      marginBottom: "30px",
                      fontWeight: "800",
                    }}
                  >
                    Technologies I Use
                  </Typography>
                  <Box className="tech-tags">
                    {TECHNOLOGIES.map((tech, index) => (
                      <Typography
                        component="span"
                        key={index}
                        className="tech-tag"
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
            )}

            {activeTab === 2 && (
              <Box>
                <Typography variant="h2" className="section-title">
                  Featured Projects
                </Typography>
                <Box className="grid">
                  {PROJECTS.map((project, index) => (
                    <Box key={index} className="project-card">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-img"
                      />
                      <Box className="project-content">
                        <Typography variant="h3" className="project-title">
                          {project.title}
                        </Typography>
                        <Typography className="project-desc">
                          {project.description}
                        </Typography>
                        <Box className="tags">
                          {project.tags.map((tag, i) => (
                            <Typography
                              component="span"
                              key={i}
                              className="tag"
                            >
                              {tag}
                            </Typography>
                          ))}
                        </Box>
                        <Box className="project-links">
                          <a href={project.github} className="btn btn-outline">
                            Code
                          </a>
                          <a href={project.demo} className="btn btn-primary">
                            Live Demo
                          </a>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}

            {activeTab === 3 && (
              <Box>
                <Typography variant="h2" className="section-title">
                  Work Experience
                </Typography>
                <Box className="card">
                  {EXPERIENCE.map((exp, index) => (
                    <Box key={index} className="timeline-item">
                      <Typography className="timeline-role">
                        {exp.role}
                      </Typography>
                      <Typography className="timeline-company">
                        {exp.company}
                      </Typography>
                      <Typography className="timeline-period">
                        {exp.period}
                      </Typography>
                      <Typography className="timeline-desc">
                        {exp.description}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}

            {activeTab === 4 && <ContactForm />}
          </Box>
        </Box>
      </Box>

      <Box className="footer">
        <Typography variant="h3">
          Let Build Something Amazing Together
        </Typography>
        <Typography>© 2024 Sagar. All rights reserved.</Typography>
      </Box>
    </Box>
  );
}
