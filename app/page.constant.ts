// <================== Import Dependencies ==================>

import PersonIcon from "@mui/icons-material/Person";
import BuildIcon from "@mui/icons-material/Build";
import WorkIcon from "@mui/icons-material/Work";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailIcon from "@mui/icons-material/Mail";

// <================== UI TEXT ==================>
export const UI_TEXT = {
  ABOUT_ME_TEXT: `I am a Software Engineer specializing in React.js with 2 years of experience. My expertise includes modern frontend development, micro-frontend architecture, and writing high-quality test cases using Jest. I focus on building scalable, user-friendly, and performance-optimized web applications.`,
  ABOUT_ME_SUB_TEXT: `I love solving complex problems and turning ideas into reality through clean, efficient code. When I am not coding, you can find me contributing to open-source projects, exploring new technologies, or sharing knowledge with the developer community.`,
  MASTER_DEGREE_TEXT: "Master of Computer Application",
  UNIVERSITY_DETAILS: "KR Mangalam University, 2024",
  PROFILE_NAME: "Sagar",
  PROFILE_TITLE: "Software Engineer",
  PROFILE_SPECIALTY: "Frontend Developer",
  DOWNLOAD_RESUME: "Download Resume",
  SECTION_ABOUT_ME: "About Me",
  SECTION_SKILLS: "Skills & Expertise",
  SECTION_PROJECTS: "Featured Projects",
  SECTION_EXPERIENCE: "Work Experience",
  SECTION_EDUCATION: "Education",
  SECTION_QUICK_FACTS: "Quick Facts",
  SECTION_TECHNOLOGIES: "Technologies I Use",
  LOCATION: "Noida",
  AVAILABILITY: "Open for better opportunities",
  FOCUS: "Web Development",
  PROJECT_CODE: "Code",
  PROJECT_LIVE_DEMO: "Live Demo",
  FOOTER_TAGLINE: "Let's Build Something Amazing Together",
  FOOTER_COPYRIGHT: "© 2024 Sagar. All rights reserved.",
  CONTACT_TITLE: "Let's Connect",
  CONTACT_DESCRIPTION: `I am always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!`,
  CONTACT_NOT_AVAILABLE: "N/A",
  CONTACT_CONNECT_TITLE: "Connect With Me",
  META_TITLE: "Sagar (Software Engineer)",
  META_DESCRIPTION:
    "Portfolio of Sagar, a Software Engineer specializing in React.js, frontend development, and modern web technologies.",
};

// <================== TABS NAME ==================>
export const TABS = [
  { id: 0, name: "About", icon: "about" },
  { id: 1, name: "Skills", icon: "skills" },
  { id: 2, name: "Projects", icon: "projects" },
  { id: 3, name: "Experience", icon: "experience" },
  { id: 4, name: "Contact", icon: "contact" },
];

// <================== TAB ICON ==================>
export const ICON_MAP = {
  about: PersonIcon,
  skills: BuildIcon,
  projects: WorkIcon,
  experience: BarChartIcon,
  contact: MailIcon,
};

// <================== PROJECT DETAILS ==================>
export const PROJECTS = [
  {
    title: "Henry (Real Estate Project)",
    description:
      "A real estate platform where users can buy, sell, and share ownership of land and homes. Built using a micro-frontend architecture with Single-SPA, enabling independent modules that integrate seamlessly. Developed using React.js.",
    image: "/Henry-Project.jpg",
    tags: ["React.js", "Micro-Frontend", "Single-SPA", "REST API"],
    github: "#",
    demo: "#",
  },
  {
    title: "YK (Car Services Platform)",
    description:
      "A comprehensive car service management platform offering service booking, payment processing, service history tracking, and more. Built with React.js and TypeScript.",
    image: "/YK-Car.png",
    tags: ["React.js", "TypeScript", "REST API", "Redux Toolkit", "Thunk"],
    github: "#",
    demo: "#",
  },
  {
    title: "Agalia (Healthcare Platform)",
    description:
      "A healthcare staffing and management platform that streamlines onboarding, scheduling, compliance, and communication between Admins, Facility Owners, and Nurses.",
    image:
      "/Agalia-Healthcare.jpg",
    tags: ["React.js", "APIs", "Redux", "Admin Panel"],
    github: "#",
    demo: "#",
  },
  {
    title: "CodXpo (Learning & Mentorship Platform)",
    description:
      "A platform connecting instructors and clients for live 1:1 coding sessions, mentorship, paid lectures, and learning content such as blogs, videos, and real project tasks. Integrated with Razorpay for secure payments.",
    image:
      "/CodXpo-Learning.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Razorpay",
      "API",
      "Redux Toolkit",
      "Thunk",
    ],
    github: "#",
    demo: "#",
  },
];

// <================== SKILLS ==================>
export const SKILLS = [
  { name: "React.js", level: 90 },
  { name: "Next.js", level: 80 },
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 75 },
  { name: "HTML/CSS", level: 90 },
  { name: "Node.js", level: 40 },
];

// <================== TECHNOLOGIES ==================>
export const TECHNOLOGIES = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Git",
  "Github",
  "GitLab",
  "Jira",
];

// <================== EXPERIENCE ==================>
export const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "Appinventiv",
    period: "August 2024 - Present",
    description:
      "Building scalable applications using modern frontend technologies and micro-frontend architecture. Responsible for end-to-end UI development, component modularization, code optimization, and implementing automated test cases (unit, integration, and E2E) to ensure reliability and maintainability.",
  },
  {
    role: "AI/ML Intern",
    company: "NextGen AI Frameworks Pvt. Ltd",
    period: "May 2024 – July 2024",
    description:
      "Worked with pretrained AI/ML models such as Hugging Face and assisted in training small machine learning models. Helped with data preparation, testing, and basic model improvements.",
  },
];

// <================== PLANETS ==================>
export const PLANETS = [
  "earth",
  "neptune",
  "mercury",
  "mars",
  "jupiter",
  "saturn",
  "venus",
  "uranus",
];

// <================== PARTICLES ==================>
export const PARTICLES = Array(8).fill(null);
