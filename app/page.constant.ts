import PersonIcon from "@mui/icons-material/Person";
import BuildIcon from "@mui/icons-material/Build";
import WorkIcon from "@mui/icons-material/Work";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailIcon from "@mui/icons-material/Mail";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ArticleIcon from "@mui/icons-material/Article";

export const TABS = [
  { id: 0, name: "About", icon: "about" },
  { id: 1, name: "Skills", icon: "skills" },
  { id: 2, name: "Projects", icon: "projects" },
  { id: 3, name: "Experience", icon: "experience" },
  { id: 4, name: "Achievements", icon: "achievements" },
  { id: 5, name: "Blog", icon: "blog" },
  { id: 6, name: "Contact", icon: "contact" },
];

export const ICON_MAP = {
  about: PersonIcon,
  skills: BuildIcon,
  projects: WorkIcon,
  experience: BarChartIcon,
  achievements: EmojiEventsIcon,
  blog: ArticleIcon,
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


export const ACHIEVEMENTS = [
  {
    title: "Best Innovation Award",
    description:
      "Recognized for developing an innovative micro-frontend architecture that improved team productivity by 40%",
    date: "2024",
    type: "Professional",
    icon: "🏆",
  },
  {
    title: "React.js Expert Certification",
    description:
      "Advanced certification in React.js and ecosystem technologies including Redux, Next.js, and React Native",
    date: "2023",
    type: "Technical",
    icon: "🎯",
  },
  {
    title: "Open Source Contributor",
    description:
      "Active contributor to popular open-source projects with 100+ contributions and 500+ followers on GitHub",
    date: "2023-Present",
    type: "Community",
    icon: "⭐",
  },
  {
    title: "Technical Blog Writer",
    description:
      "Published 20+ technical articles on frontend development, React best practices, and web performance optimization",
    date: "2023-Present",
    type: "Content",
    icon: "📝",
  },
  {
    title: "Hackathon Winner",
    description:
      "First place in national level hackathon for building an AI-powered educational platform",
    date: "2022",
    type: "Competition",
    icon: "🚀",
  },
  {
    title: "Master's Degree Excellence",
    description:
      "Graduated with distinction in Master of Computer Application with 8.5 GPA",
    date: "2024",
    type: "Academic",
    icon: "🎓",
  },
];

export const BLOG_POSTS = [
  {
    title: "Building Scalable Micro-Frontend Architecture with Single-SPA",
    excerpt:
      "Learn how to implement micro-frontend architecture using Single-SPA, including best practices, challenges, and real-world examples from enterprise applications.",
    date: "2024-11-15",
    readTime: "8 min read",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    featured: true,
    content: `
# Building Scalable Micro-Frontend Architecture with Single-SPA

## Introduction

Micro-frontend architecture has revolutionized how we build large-scale web applications. By breaking down monolithic frontends into smaller, independent modules, teams can develop, deploy, and scale their applications more effectively. Single-SPA (Single Page Application) is one of the most popular frameworks for implementing micro-frontend architecture.

## What is Single-SPA?

Single-SPA is a JavaScript framework that enables multiple independent applications to work together in a single-page application. It allows you to use different frameworks (React, Vue, Angular) simultaneously while maintaining a cohesive user experience.

## Key Benefits

### 1. **Independent Development Teams**
- Teams can work autonomously on different modules
- Separate codebases and deployment cycles
- Technology diversity (React, Vue, Angular in the same app)

### 2. **Scalability**
- Applications can scale independently
- Load balancing becomes more granular
- Performance optimizations are module-specific

### 3. **Risk Management**
- A bug in one module doesn't crash the entire application
- Rollbacks can be performed on a per-module basis
- Easier to test and debug

## Implementation Best Practices

### Configuration Setup

\`\`\`javascript
// main-config.js
import { registerApplication, start } from 'single-spa';

registerApplication({
  name: 'react-app',
  app: () => System.import('react-app'),
  activeWhen: ['/react'],
});

registerApplication({
  name: 'vue-app',
  app: () => System.import('vue-app'),
  activeWhen: ['/vue'],
});

start();
\`\`\`

### Sharing Common Dependencies

\`\`\`javascript
// webpack.config.js
module.exports = {
  externals: ['react', 'react-dom', 'rxjs'],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\\\/]node_modules[\\\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
\`\`\`

## Challenges and Solutions

### 1. **State Management**
Use a shared state management solution or implement communication patterns between micro-frontends.

### 2. **Routing**
Implement a root router that delegates to individual application routers.

### 3. **Styling**
Establish a design system and shared CSS variables to maintain consistency.

## Real-World Example

At our company, we implemented micro-frontend architecture for a large e-commerce platform:
- Reduced deployment time by 60%
- Enabled parallel development across 8 teams
- Improved application load time by 40% through lazy loading

## Conclusion

Single-SPA provides an excellent foundation for building scalable micro-frontend architectures. While it comes with its challenges, the benefits in terms of team autonomy and scalability make it an excellent choice for large-scale applications.

Remember to start small, establish clear communication patterns between teams, and invest in proper tooling and monitoring from the beginning.
    `,
  },
  {
    title: "React Performance Optimization: Advanced Techniques",
    excerpt:
      "Discover advanced React performance optimization techniques including memoization, code splitting, lazy loading, and bundle size reduction strategies.",
    date: "2024-10-28",
    readTime: "6 min read",
    category: "React",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
    featured: false,
    content: `
# React Performance Optimization: Advanced Techniques

## Introduction

Performance optimization is crucial for delivering excellent user experiences in React applications. This guide covers advanced techniques that can significantly improve your app's performance.

## 1. Memoization Techniques

### React.memo()

\`\`\`javascript
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{data.map(item => <Item key={item.id} {...item} />)}</div>;
}, (prevProps, nextProps) => {
  return prevProps.data.length === nextProps.data.length;
});
\`\`\`

### useMemo() and useCallback()

\`\`\`javascript
const Component = ({ items, onItemClick }) => {
  const expensiveValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.value, 0);
  }, [items]);

  const handleClick = useCallback((id) => {
    onItemClick(id);
  }, [onItemClick]);

  return <div>{expensiveValue}</div>;
};
\`\`\`

## 2. Code Splitting

### Dynamic Imports

\`\`\`javascript
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
);
\`\`\`

### Route-based Splitting

\`\`\`javascript
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Suspense>
);
\`\`\`

## 3. Bundle Size Optimization

### Tree Shaking

Ensure your bundler supports tree shaking:
- Use ES6 modules (import/export)
- Avoid side effects in modules
- Configure webpack properly

### Webpack Bundle Analyzer

\`\`\`bash
npm install --save-dev webpack-bundle-analyzer
\`\`\`

\`\`\`javascript
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  ]
};
\`\`\`

## 4. Virtualization

For large lists, use virtualization libraries:

\`\`\`javascript
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>
    Row {index}
  </div>
);

const App = () => (
  <List
    height={600}
    itemCount={1000}
    itemSize={35}
    width={300}
  >
    {Row}
  </List>
);
\`\`\`

## 5. State Management Optimization

### Context Optimization

\`\`\`javascript
// Avoid unnecessary re-renders
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');

  // Split contexts to prevent unnecessary re-renders
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};
\`\`\`

## 6. Image Optimization

### Lazy Loading Images

\`\`\`javascript
import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className="lazy-image-container">
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          style={{ opacity: isLoaded ? 1 : 0 }}
        />
      )}
    </div>
  );
};
\`\`\`

## Performance Monitoring

Use React DevTools Profiler to identify performance bottlenecks:

\`\`\`javascript
import { Profiler } from 'react';

const onRenderCallback = (id, phase, actualDuration) => {
  console.log('Component:', id, 'Phase:', phase, 'Duration:', actualDuration);
};

const App = () => (
  <Profiler id="App" onRender={onRenderCallback}>
    <MyComponent />
  </Profiler>
);
\`\`\`

## Conclusion

Performance optimization is an ongoing process. Start by profiling your application, identify bottlenecks, and apply these techniques systematically. Remember that premature optimization can be counterproductive, so always measure before and after changes.

The key is to find the right balance between code readability and performance gains.
    `,
  },
];
