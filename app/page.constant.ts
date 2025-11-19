import PersonIcon from "@mui/icons-material/Person";
import BuildIcon from "@mui/icons-material/Build";
import WorkIcon from "@mui/icons-material/Work";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailIcon from "@mui/icons-material/Mail";

export const TABS = [
  { id: 0, name: "About", icon: "about" },
  { id: 1, name: "Skills", icon: "skills" },
  { id: 2, name: "Projects", icon: "projects" },
  { id: 3, name: "Experience", icon: "experience" },
  { id: 4, name: "Contact", icon: "contact" },
];

export const ICON_MAP = {
  about: PersonIcon,
  skills: BuildIcon,
  projects: WorkIcon,
  experience: BarChartIcon,
  contact: MailIcon,
};

export const PROJECTS = [
  {
    title: "Henry (Real Estate Project)",
    description:
      "A real estate platform where users can buy, sell, and share ownership of land and homes. Built using a micro-frontend architecture with Single-SPA, enabling independent modules that integrate seamlessly. Developed using React.js.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=400&h=300&fit=crop",
    tags: ["React.js", "Micro-Frontend", "Single-SPA", "REST API"],
    github: "#",
    demo: "#",
  },
  {
    title: "YK (Car Services Platform)",
    description:
      "A comprehensive car service management platform offering service booking, payment processing, service history tracking, and more. Built with React.js and TypeScript.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
    tags: ["React.js", "TypeScript", "REST API", "Redux Toolkit", "Thunk"],
    github: "#",
    demo: "#",
  },
  {
    title: "Agalia (Healthcare Platform)",
    description:
      "A healthcare staffing and management platform that streamlines onboarding, scheduling, compliance, and communication between Admins, Facility Owners, and Nurses.",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
    tags: ["React.js", "APIs", "Redux", "Admin Panel"],
    github: "#",
    demo: "#",
  },
  {
    title: "CodXpo (Learning & Mentorship Platform)",
    description:
      "A platform connecting instructors and clients for live 1:1 coding sessions, mentorship, paid lectures, and learning content such as blogs, videos, and real project tasks. Integrated with Razorpay for secure payments.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=400&h=300&fit=crop",
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

export const SKILLS = [
  { name: "React.js", level: 90 },
  { name: "Next.js", level: 80 },
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 75 },
  { name: "HTML/CSS", level: 90 },
  { name: "Node.js", level: 40 },
];

export const TECHNOLOGIES = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Javasript",
  "Node.js",
  "Git",
  "Github",
  "GitLab",
  "Jira",
];

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
