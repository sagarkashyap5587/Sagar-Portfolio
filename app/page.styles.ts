export const portfolioStyle = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background: #0a0a0a;
    color: #ffffff;
    overflow-x: hidden;
    position: relative;
  }

  .portfolio {
    min-height: 100vh;
    position: relative;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 15%, #f093fb 30%, #4facfe 50%, #00f2fe 70%, #667eea 100%);
    background-size: 600% 600%;
    animation: gradientFlow 20s ease infinite;
  }

  @keyframes gradientFlow {
    0% { background-position: 0% 50%; }
    25% { background-position: 100% 50%; }
    50% { background-position: 100% 100%; }
    75% { background-position: 50% 100%; }
    100% { background-position: 0% 50%; }
  }

  .portfolio::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
      radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.3), transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 107, 107, 0.3), transparent 50%),
      radial-gradient(circle at 40% 60%, rgba(78, 205, 196, 0.2), transparent 50%);
    pointer-events: none;
    z-index: 0;
  }

  /* Enhanced Animated Background Particles */
  .bg-particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
  }

  .particle {
    position: absolute;
    border-radius: 50%;
    animation: particleFloat 15s infinite ease-in-out;
  }

  .particle:nth-child(1) {
    width: 100px;
    height: 100px;
    left: 10%;
    top: 20%;
    animation-delay: 0s;
    animation-duration: 20s;
    background: radial-gradient(circle, rgba(102,126,234,0.6) 0%, rgba(118,75,162,0.3) 50%, transparent 100%);
  }

  .particle:nth-child(2) {
    width: 150px;
    height: 150px;
    right: 15%;
    top: 50%;
    animation-delay: 3s;
    animation-duration: 25s;
    background: radial-gradient(circle, rgba(240,147,251,0.6) 0%, rgba(245,87,108,0.3) 50%, transparent 100%);
  }

  .particle:nth-child(3) {
    width: 80px;
    height: 80px;
    left: 60%;
    bottom: 20%;
    animation-delay: 5s;
    animation-duration: 18s;
    background: radial-gradient(circle, rgba(79,172,254,0.6) 0%, rgba(0,242,254,0.3) 50%, transparent 100%);
  }

  .particle:nth-child(4) {
    width: 120px;
    height: 120px;
    right: 30%;
    top: 30%;
    animation-delay: 7s;
    animation-duration: 22s;
    background: radial-gradient(circle, rgba(255,107,107,0.6) 0%, rgba(78,205,196,0.3) 50%, transparent 100%);
  }

  @keyframes particleFloat {
    0%, 100% {
      transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
      opacity: 0.3;
      filter: blur(2px);
    }
    25% {
      transform: translateY(-80px) translateX(60px) rotate(90deg) scale(1.2);
      opacity: 0.7;
      filter: blur(1px);
    }
    50% {
      transform: translateY(-50px) translateX(-40px) rotate(180deg) scale(0.9);
      opacity: 0.5;
      filter: blur(3px);
    }
    75% {
      transform: translateY(-120px) translateX(80px) rotate(270deg) scale(1.3);
      opacity: 0.8;
      filter: blur(0.5px);
    }
  }

  /* Enhanced Starfield */
  .starfield {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
  }

  .star {
    position: absolute;
    background: white;
    border-radius: 50%;
    animation: twinkle 3s ease-in-out infinite;
    box-shadow: 0 0 10px rgba(255,255,255,0.5);
  }

  .star.small {
    width: 1px;
    height: 1px;
  }

  .star.medium {
    width: 2px;
    height: 2px;
  }

  .star.large {
    width: 3px;
    height: 3px;
  }

  .star.giant {
    width: 4px;
    height: 4px;
    box-shadow: 0 0 20px rgba(255,255,255,0.8);
  }

  @keyframes twinkle {
    0%, 100% {
      opacity: 0.2;
      transform: scale(1);
      filter: blur(0px);
    }
    50% {
      opacity: 1;
      transform: scale(1.5);
      filter: blur(0.5px);
    }
  }

  /* Shooting Stars */
  .shooting-star {
    position: absolute;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), white);
    border-radius: 2px;
    animation: shoot 3s linear infinite;
  }

  @keyframes shoot {
    0% {
      transform: translateX(-100px) translateY(0) rotate(-45deg);
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: translateX(calc(100vw + 100px)) translateY(100vh) rotate(-45deg);
      opacity: 0;
    }
  }

  /* Aurora Borealis Effect */
  .aurora {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60%;
    overflow: hidden;
    opacity: 0.1;
    z-index: 0;
    pointer-events: none;
  }

  .aurora-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg,
      transparent 0%,
      rgba(0,255,150,0.1) 20%,
      rgba(0,150,255,0.1) 40%,
      rgba(150,0,255,0.1) 60%,
      rgba(255,0,150,0.1) 80%,
      transparent 100%
    );
    animation: auroraWave 20s ease-in-out infinite;
  }

  .aurora-layer:nth-child(2) {
    animation-delay: 7s;
    background: linear-gradient(45deg,
      transparent 0%,
      rgba(255,0,150,0.1) 20%,
      rgba(150,0,255,0.1) 40%,
      rgba(0,150,255,0.1) 60%,
      rgba(0,255,150,0.1) 80%,
      transparent 100%
    );
  }

  .aurora-layer:nth-child(3) {
    animation-delay: 14s;
    background: linear-gradient(225deg,
      transparent 0%,
      rgba(100,255,100,0.1) 25%,
      rgba(100,100,255,0.1) 50%,
      rgba(255,100,255,0.1) 75%,
      transparent 100%
    );
  }

  @keyframes auroraWave {
    0%, 100% {
      transform: translateX(-50%) skewX(-15deg) scaleY(1);
      opacity: 0.1;
    }
    25% {
      transform: translateX(0%) skewX(0deg) scaleY(1.5);
      opacity: 0.2;
    }
    50% {
      transform: translateX(50%) skewX(15deg) scaleY(1);
      opacity: 0.15;
    }
    75% {
      transform: translateX(25%) skewX(-5deg) scaleY(1.2);
      opacity: 0.25;
    }
  }

  /* Floating Geometric Shapes */
  .geometric-shapes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
  }

  .geo-shape {
    position: absolute;
    opacity: 0.15;
    animation: geoFloat 30s infinite ease-in-out;
  }

  .triangle-shape {
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 60px solid rgba(102,126,234,0.4);
    filter: blur(2px);
  }

  .square-shape {
    width: 50px;
    height: 50px;
    background: linear-gradient(45deg, rgba(240,147,251,0.4) 0%, rgba(102,126,234,0.4) 100%);
    transform: rotate(45deg);
    filter: blur(2px);
  }

  .circle-shape {
    width: 40px;
    height: 40px;
    background: radial-gradient(circle, rgba(79,172,254,0.4) 0%, rgba(0,242,254,0.2) 100%);
    border-radius: 50%;
    filter: blur(2px);
  }

  .hexagon-shape {
    width: 60px;
    height: 33px;
    background: linear-gradient(90deg, rgba(255,107,107,0.4) 0%, rgba(78,205,196,0.4) 100%);
    position: relative;
    filter: blur(2px);
  }

  .hexagon-shape:before,
  .hexagon-shape:after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
  }

  .hexagon-shape:before {
    bottom: 100%;
    border-bottom: 16px solid rgba(255,107,107,0.4);
  }

  .hexagon-shape:after {
    top: 100%;
    border-top: 16px solid rgba(78,205,196,0.4);
  }

  @keyframes geoFloat {
    0%, 100% {
      transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
      opacity: 0.1;
    }
    20% {
      transform: translateY(-150px) translateX(100px) rotate(72deg) scale(1.2);
      opacity: 0.2;
    }
    40% {
      transform: translateY(-100px) translateX(-80px) rotate(144deg) scale(0.8);
      opacity: 0.15;
    }
    60% {
      transform: translateY(-200px) translateX(120px) rotate(216deg) scale(1.1);
      opacity: 0.25;
    }
    80% {
      transform: translateY(-50px) translateX(-60px) rotate(288deg) scale(0.9);
      opacity: 0.18;
    }
  }

  /* Navigation Tabs */
  .nav-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(25px);
    border-bottom: 1px solid rgba(255,255,255,0.15);
    box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  }

  .top-tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 20px;
    max-width: 1600px;
    margin: 0 auto;
    flex-wrap: nowrap;
    gap: 12px;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .top-tabs::-webkit-scrollbar {
    display: none;
  }

  .top-tab {
    background: rgba(255,255,255,0.12);
    border: 2px solid rgba(255,255,255,0.25);
    border-radius: 50px;
    padding: 16px 24px;
    margin: 0;
    color: #ffffff;
    font-weight: 700;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    align-items: center;
    gap: 10px;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    backdrop-filter: blur(15px);
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    flex-shrink: 0;
    white-space: nowrap;
  }

  .top-tab::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.8s ease;
  }

  .top-tab:hover {
    transform: translateY(-5px) scale(1.08);
    background: rgba(255,255,255,0.2);
    border-color: rgba(255,255,255,0.5);
    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  }

  .top-tab:hover::before {
    left: 100%;
  }

  .top-tab.active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    border-color: transparent;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 15px 35px rgba(102,126,234,0.5);
    color: #ffffff;
    font-weight: 800;
  }

  .top-tab.active::before {
    display: none;
  }

  .tab-icon {
    font-size: 24px;
    transition: all 0.3s ease;
  }

  .top-tab:hover .tab-icon {
    transform: scale(1.2) rotate(5deg);
    filter: drop-shadow(0 0 10px rgba(255,255,255,0.5));
  }

  .top-tab.active .tab-icon {
    transform: scale(1.1);
    filter: drop-shadow(0 0 15px rgba(255,255,255,0.8));
  }

  /* Main Layout Container */
  .main-container {
    display: flex;
    max-width: 1600px;
    margin: 140px auto 0;
    padding: 30px 25px;
    gap: 50px;
    position: relative;
    z-index: 10;
    min-height: calc(100vh - 140px);
  }

  /* Left Sidebar - Profile */
  .profile-sidebar {
    flex: 0 0 420px;
    position: sticky;
    top: 150px;
    height: fit-content;
  }

  .profile-card {
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(25px);
    border-radius: 35px;
    padding: 50px 35px;
    text-align: center;
    border: 2px solid rgba(255,255,255,0.2);
    box-shadow: 0 30px 60px rgba(0,0,0,0.3);
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
  }

  .profile-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #667eea, #764ba2, #f093fb, #4facfe);
    animation: borderGlow 3s linear infinite;
  }

  @keyframes borderGlow {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }

  .profile-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 40px 80px rgba(0,0,0,0.4);
    background: rgba(255,255,255,0.15);
  }

  .profile-image-container {
    position: relative;
    margin-bottom: 35px;
    display: inline-block;
  }

  .profile-avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 6px solid rgba(255,255,255,0.4);
    transition: all 0.5s ease;
    position: relative;
    z-index: 3;
    box-shadow: 0 15px 35px rgba(0,0,0,0.3);
  }

  .avatar-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 240px;
    height: 240px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
    z-index: 1;
    animation: avatarPulse 4s ease-in-out infinite;
    filter: blur(25px);
    opacity: 0.8;
  }

  @keyframes avatarPulse {
    0%, 100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.8;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.15);
      opacity: 1;
    }
  }

  .profile-avatar:hover {
    transform: scale(1.05);
    border-color: rgba(255,255,255,0.6);
    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  }

  .profile-name {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 15px;
    background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-transform: uppercase;
    letter-spacing: -2px;
    text-shadow: 0 4px 20px rgba(0,0,0,0.2);
  }

  .profile-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: rgba(255,255,255,0.95);
    margin-bottom: 10px;
  }

  .profile-specialty {
    font-size: 1.2rem;
    font-weight: 600;
    color: rgba(255,255,255,0.8);
    margin-bottom: 35px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 35px;
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    text-decoration: none;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
  }

  .social-link.github {
    background: linear-gradient(135deg, #24292e 0%, #404040 100%);
    border: 3px solid rgba(255,255,255,0.3);
  }

  .social-link.linkedin {
    background: linear-gradient(135deg, #0A66C2 0%, #0077b5 100%);
    border: 3px solid rgba(255,255,255,0.3);
  }

  .social-link.email {
    background: linear-gradient(135deg, #EA4335 0%, #d93025 100%);
    border: 3px solid rgba(255,255,255,0.3);
  }

  .social-link:hover {
    transform: translateY(-8px) scale(1.15) rotate(8deg);
    box-shadow: 0 15px 35px rgba(0,0,0,0.4);
  }

  .social-link:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    animation: socialShimmer 0.6s ease;
  }

  @keyframes socialShimmer {
    to { left: 100%; }
  }

  .download-btn {
    width: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    color: white;
    border: none;
    border-radius: 20px;
    padding: 22px 30px;
    font-size: 1.1rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(102,126,234,0.4);
  }

  .download-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.8s ease;
  }

  .download-btn:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0 25px 50px rgba(102,126,234,0.5);
  }

  .download-btn:hover::before {
    left: 100%;
  }

  .download-btn:active {
    transform: translateY(-2px) scale(1.01);
  }

  /* Content Area */
  .content-area {
    flex: 1;
    min-height: calc(100vh - 200px);
  }

  .tab-content {
    animation: contentFadeIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  @keyframes contentFadeIn {
    from {
      opacity: 0;
      transform: translateY(50px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .section-title {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 60px;
    text-transform: uppercase;
    letter-spacing: -2px;
    background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 50%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    display: inline-block;
    text-shadow: 0 4px 25px rgba(0,0,0,0.2);
  }

  .section-title::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100px;
    height: 6px;
    background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
    border-radius: 3px;
    animation: titleGlow 3s ease-in-out infinite alternate;
  }

  @keyframes titleGlow {
    0% { box-shadow: 0 0 15px rgba(102,126,234,0.6); }
    100% { box-shadow: 0 0 35px rgba(240,147,251,0.9); }
  }

  .card {
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(25px);
    border-radius: 30px;
    box-shadow: 0 25px 50px rgba(0,0,0,0.25), 0 0 0 2px rgba(255,255,255,0.25);
    padding: 50px;
    margin-bottom: 50px;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 2px solid rgba(255,255,255,0.25);
    position: relative;
    overflow: hidden;
  }

  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transition: left 1.2s ease;
  }

  .card:hover {
    transform: translateY(-15px) scale(1.03);
    box-shadow: 0 40px 80px rgba(0,0,0,0.35), 0 0 0 3px rgba(255,255,255,0.4);
    background: rgba(255,255,255,0.18);
  }

  .card:hover::before {
    left: 100%;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 40px;
    margin-top: 40px;
  }

  .project-card {
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(25px);
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 0 25px 50px rgba(0,0,0,0.25), 0 0 0 2px rgba(255,255,255,0.25);
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    flex-direction: column;
    border: 2px solid rgba(255,255,255,0.25);
    position: relative;
  }

  .project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .project-card:hover {
    transform: translateY(-20px) scale(1.05);
    box-shadow: 0 40px 80px rgba(0,0,0,0.4), 0 0 0 3px rgba(255,255,255,0.4);
    background: rgba(255,255,255,0.18);
  }

  .project-card:hover::before {
    opacity: 1;
  }

  .project-img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .project-card:hover .project-img {
    transform: scale(1.1);
  }

  .project-content {
    padding: 35px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .project-title {
    font-size: 1.8rem;
    font-weight: 800;
    margin-bottom: 15px;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .project-desc {
    color: rgba(255,255,255,0.9);
    line-height: 1.7;
    margin-bottom: 25px;
    flex-grow: 1;
    font-size: 1.05rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 25px 0;
  }

  .tag {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 8px 18px;
    border-radius: 25px;
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 0 5px 15px rgba(102,126,234,0.3);
    transition: all 0.3s ease;
  }

  .tag:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 20px rgba(102,126,234,0.5);
  }

  .project-links {
    display: flex;
    gap: 15px;
    margin-top: auto;
  }

  .btn {
    padding: 15px 25px;
    border-radius: 12px;
    border: none;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 10px 25px rgba(102,126,234,0.4);
  }

  .btn-primary:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 20px 40px rgba(102,126,234,0.6);
  }

  .btn-outline {
    background: rgba(255,255,255,0.2);
    color: white;
    border: 2px solid rgba(255,255,255,0.4);
    backdrop-filter: blur(10px);
  }

  .btn-outline:hover {
    background: rgba(255,255,255,0.3);
    border-color: rgba(255,255,255,0.6);
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  }

  .skill-item {
    margin-bottom: 35px;
  }

  .skill-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .skill-name {
    font-size: 1.2rem;
    font-weight: 700;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .skill-percent {
    font-size: 1.2rem;
    font-weight: 800;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .progress-bar {
    height: 18px;
    background: rgba(255,255,255,0.2);
    border-radius: 15px;
    overflow: hidden;
    box-shadow: inset 0 4px 10px rgba(0,0,0,0.4);
    border: 2px solid rgba(255,255,255,0.3);
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    border-radius: 15px;
    transition: all 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
  }

  .progress-fill::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    animation: progressShimmer 2s infinite;
  }

  @keyframes progressShimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 40px;
  }

  .tech-tag {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
    padding: 12px 22px;
    border-radius: 30px;
    font-weight: 700;
    font-size: 1rem;
    border: 2px solid rgba(255,255,255,0.3);
    box-shadow: 0 8px 20px rgba(240,147,251,0.4);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .tech-tag::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.6s ease;
  }

  .tech-tag:hover {
    transform: translateY(-5px) scale(1.08);
    box-shadow: 0 15px 30px rgba(240,147,251,0.6);
    background: linear-gradient(135deg, #f5576c 0%, #f093fb 100%);
  }

  .tech-tag:hover::before {
    left: 100%;
  }

  .timeline-item {
    border-left: 4px solid transparent;
    background: linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.08) 100%);
    padding: 0 0 50px 40px;
    margin-bottom: 50px;
    position: relative;
    border-image: linear-gradient(180deg, #667eea, #764ba2, #f093fb) 1;
  }

  .timeline-item::before {
    content: '';
    width: 25px;
    height: 25px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 50%;
    position: absolute;
    left: -14px;
    top: 0;
    box-shadow: 0 0 0 6px rgba(102,126,234,0.2), 0 0 30px rgba(102,126,234,0.6);
    animation: timelinePulse 3s ease-in-out infinite;
  }

  @keyframes timelinePulse {
    0%, 100% { transform: scale(1); box-shadow: 0 0 0 6px rgba(102,126,234,0.2), 0 0 30px rgba(102,126,234,0.6); }
    50% { transform: scale(1.2); box-shadow: 0 0 0 8px rgba(102,126,234,0.3), 0 0 40px rgba(118,75,162,0.8); }
  }

  .timeline-role {
    font-size: 1.5rem;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .timeline-company {
    font-size: 1.2rem;
    color: #f093fb;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .timeline-period {
    color: rgba(255,255,255,0.7);
    font-size: 1rem;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .timeline-desc {
    color: rgba(255,255,255,0.9);
    line-height: 1.7;
    font-size: 1.05rem;
  }

  .contact-form {
    max-width: 700px;
    margin: 0 auto;
  }

  .form-group {
    margin-bottom: 35px;
  }

  .form-label {
    display: block;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 12px;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .form-input {
    width: 100%;
    padding: 20px 25px;
    border: 3px solid rgba(255,255,255,0.3);
    border-radius: 15px;
    font-size: 1.1rem;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    font-family: inherit;
    background: rgba(255,255,255,0.15);
    color: #ffffff;
    box-shadow: inset 0 4px 15px rgba(0,0,0,0.3);
    backdrop-filter: blur(10px);
  }

  .form-input:focus {
    outline: none;
    border-color: #f093fb;
    box-shadow: inset 0 4px 15px rgba(0,0,0,0.3), 0 0 0 5px rgba(240,147,251,0.3);
    background: rgba(255,255,255,0.2);
  }

  .form-input::placeholder {
    color: rgba(255,255,255,0.6);
  }

  textarea.form-input {
    min-height: 150px;
    resize: vertical;
  }

  .submit-btn {
    width: 100%;
    padding: 25px;
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #667eea 100%);
    color: white;
    border: none;
    border-radius: 15px;
    font-size: 1.2rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(240,147,251,0.4);
  }

  .submit-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.8s ease;
  }

  .submit-btn:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 25px 50px rgba(240,147,251,0.6);
    background: linear-gradient(135deg, #f5576c 0%, #f093fb 50%, #764ba2 100%);
  }

  .submit-btn:hover::before {
    left: 100%;
  }

  .submit-btn:active {
    transform: translateY(-2px) scale(1.01);
  }

  .footer {
    background: linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(102,126,234,0.2) 50%, rgba(240,147,251,0.2) 100%);
    backdrop-filter: blur(25px);
    color: white;
    text-align: center;
    padding: 80px 30px;
    margin-top: 100px;
    position: relative;
    overflow: hidden;
    border-top: 2px solid rgba(255,255,255,0.2);
  }

  .footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
    animation: footerShimmer 5s infinite;
  }

  @keyframes footerShimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  .footer h3 {
    font-size: 2rem;
    margin-bottom: 15px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .footer p {
    opacity: 0.9;
    font-size: 1.1rem;
  }

  .alert {
    position: fixed;
    top: 30px;
    right: 30px;
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(20px);
    padding: 20px 30px;
    border-radius: 15px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    gap: 15px;
    animation: slideIn 0.6s ease;
    z-index: 2000;
    border: 2px solid rgba(102,126,234,0.3);
  }

  @keyframes slideIn {
    from { transform: translateX(500px); }
    to { transform: translateX(0); }
  }

  .alert-success {
    border-left: 6px solid #4caf50;
    color: #2e7d32;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-top: 40px;
  }

  /* Testimonials Styles */
  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-top: 40px;
  }

  .testimonial-card {
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(25px);
    border-radius: 25px;
    padding: 40px;
    border: 2px solid rgba(255,255,255,0.25);
    box-shadow: 0 25px 50px rgba(0,0,0,0.25);
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
  }

  .testimonial-card::before {
    content: '"';
    position: absolute;
    top: -20px;
    left: 30px;
    font-size: 120px;
    color: rgba(102,126,234,0.2);
    font-family: Georgia, serif;
    z-index: 0;
  }

  .testimonial-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 40px 80px rgba(0,0,0,0.35);
    background: rgba(255,255,255,0.18);
  }

  .testimonial-content {
    position: relative;
    z-index: 1;
    color: rgba(255,255,255,0.95);
    line-height: 1.7;
    font-size: 1.05rem;
    margin-bottom: 25px;
    font-style: italic;
  }

  .testimonial-author {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
  }

  .testimonial-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid rgba(255,255,255,0.4);
  }

  .testimonial-info h4 {
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .testimonial-info p {
    color: rgba(255,255,255,0.8);
    font-size: 0.9rem;
  }

  .testimonial-rating {
    color: #f093fb;
    margin-top: 8px;
    font-size: 1.1rem;
  }

  /* Achievements Styles */
  .achievements-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin-top: 40px;
  }

  .achievement-card {
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(25px);
    border-radius: 20px;
    padding: 30px;
    border: 2px solid rgba(255,255,255,0.25);
    box-shadow: 0 20px 40px rgba(0,0,0,0.25);
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
  }

  .achievement-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    transition: left 0.8s ease;
  }

  .achievement-card:hover::before {
    left: 100%;
  }

  .achievement-card:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 30px 60px rgba(0,0,0,0.35);
    background: rgba(255,255,255,0.18);
  }

  .achievement-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
  }

  .achievement-icon {
    font-size: 2.5rem;
    animation: achievementBounce 3s ease-in-out infinite;
  }

  @keyframes achievementBounce {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  .achievement-title {
    color: #ffffff;
    font-size: 1.3rem;
    font-weight: 800;
    flex: 1;
  }

  .achievement-date {
    color: rgba(255,255,255,0.7);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .achievement-description {
    color: rgba(255,255,255,0.9);
    line-height: 1.6;
    margin-bottom: 15px;
  }

  .achievement-type {
    display: inline-block;
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* Blog Styles */
  .blog-container {
    margin-top: 40px;
  }

  .featured-post {
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(25px);
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0,0,0,0.25);
    margin-bottom: 50px;
    border: 2px solid rgba(255,255,255,0.25);
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .featured-post:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 0 40px 80px rgba(0,0,0,0.35);
    background: rgba(255,255,255,0.18);
  }

  .featured-post-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }

  .featured-post-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  .featured-post-text {
    padding: 50px;
  }

  .featured-badge {
    display: inline-block;
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
    padding: 8px 20px;
    border-radius: 25px;
    font-size: 0.8rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }

  .blog-title {
    color: #ffffff;
    font-size: 1.8rem;
    font-weight: 800;
    margin-bottom: 15px;
    line-height: 1.3;
  }

  .blog-excerpt {
    color: rgba(255,255,255,0.9);
    line-height: 1.6;
    margin-bottom: 20px;
    font-size: 1rem;
  }

  .blog-posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
  }

  .blog-card {
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(25px);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 25px 50px rgba(0,0,0,0.25);
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 2px solid rgba(255,255,255,0.25);
  }

  .blog-card:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 40px 80px rgba(0,0,0,0.35);
    background: rgba(255,255,255,0.18);
  }

  .blog-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .blog-card:hover .blog-image {
    transform: scale(1.1);
  }

  .blog-content {
    padding: 30px;
  }

  .blog-category {
    display: inline-block;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 15px;
  }

  .blog-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(255,255,255,0.7);
    font-size: 0.85rem;
  }

  .read-more {
    color: #f093fb;
    font-weight: 700;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .read-more:hover {
    color: #ffffff;
  }

  /* Blog Detail Styles */
  .blog-detail {
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(25px);
    border-radius: 30px;
    padding: 50px;
    border: 2px solid rgba(255,255,255,0.25);
    box-shadow: 0 30px 60px rgba(0,0,0,0.25);
    margin-top: 40px;
    position: relative;
    overflow: hidden;
  }

  .blog-detail::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    transition: left 1.2s ease;
  }

  .blog-detail:hover::before {
    left: 100%;
  }

  .back-button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 25px;
    padding: 12px 25px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 30px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 0 10px 25px rgba(102,126,234,0.4);
  }

  .back-button:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 20px 40px rgba(102,126,234,0.6);
  }

  .blog-detail-header {
    margin-bottom: 40px;
    padding-bottom: 30px;
    border-bottom: 2px solid rgba(255,255,255,0.1);
  }

  .blog-detail-title {
    color: #ffffff;
    font-size: 2.8rem;
    font-weight: 900;
    margin-bottom: 20px;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: -1px;
    background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .blog-detail-meta {
    display: flex;
    gap: 20px;
    color: rgba(255,255,255,0.8);
    font-size: 1rem;
    font-weight: 600;
  }

  .blog-detail-meta span {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .blog-detail-content {
    line-height: 1.8;
    color: rgba(255,255,255,0.95);
    font-size: 1.1rem;
  }

  .blog-detail-content h1 {
    color: #f093fb;
    font-size: 2.2rem;
    font-weight: 800;
    margin: 40px 0 20px 0;
    border-bottom: 2px solid rgba(240,147,251,0.3);
    padding-bottom: 15px;
  }

  .blog-detail-content h2 {
    color: #4facfe;
    font-size: 1.8rem;
    font-weight: 700;
    margin: 30px 0 15px 0;
  }

  .blog-detail-content h3 {
    color: #667eea;
    font-size: 1.4rem;
    font-weight: 700;
    margin: 25px 0 12px 0;
  }

  .blog-detail-content p {
    margin-bottom: 20px;
  }

  .blog-detail-content ul,
  .blog-detail-content ol {
    margin: 20px 0;
    padding-left: 30px;
  }

  .blog-detail-content li {
    margin-bottom: 10px;
    color: rgba(255,255,255,0.9);
  }

  .blog-detail-content blockquote {
    margin: 30px 0;
    padding: 20px 30px;
    border-left: 4px solid #f093fb;
    background: rgba(240,147,251,0.1);
    border-radius: 0 15px 15px 0;
    font-style: italic;
  }

  .blog-detail-content pre {
    background: rgba(0,0,0,0.3);
    border-radius: 15px;
    padding: 20px;
    margin: 25px 0;
    overflow-x: auto;
    border: 1px solid rgba(255,255,255,0.1);
  }

  .blog-detail-content code {
    background: rgba(102,126,234,0.2);
    color: #f093fb;
    padding: 2px 6px;
    border-radius: 6px;
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
  }

  .blog-detail-content pre code {
    background: transparent;
    color: inherit;
    padding: 0;
  }

  .blog-detail-content strong {
    color: #f093fb;
    font-weight: 700;
  }

  .blog-detail-content em {
    color: #4facfe;
    font-style: italic;
  }

  /* Blog cards click interaction */
  .featured-post,
  .blog-card {
    cursor: pointer;
  }

  .featured-post:hover,
  .blog-card:hover {
    transform: translateY(-15px) scale(1.02) !important;
    box-shadow: 0 40px 80px rgba(0,0,0,0.35) !important;
  }

  .read-more {
    cursor: pointer;
    transition: color 0.3s ease, transform 0.3s ease;
    display: inline-block;
  }

  .read-more:hover {
    color: #ffffff !important;
    transform: translateX(5px);
  }

  /* Responsive Design - Comprehensive Mobile Support */

  /* Tablet Landscape (1200px and below) */
  @media (max-width: 1200px) {
    .main-container {
      max-width: 100%;
      padding: 20px 15px;
    }

    .profile-sidebar {
      order: 1;
      margin-bottom: 30px;
    }

    .profile-content {
      order: 2;
    }

    .featured-post-content {
      grid-template-columns: 1fr;
    }

    .featured-post-image {
      height: 300px;
    }
  }

  /* Tablet Portrait (992px and below) */
  @media (max-width: 992px) {
    .nav-container {
      backdrop-filter: blur(15px);
      background: rgba(255,255,255,0.12);
    }

    .top-tabs {
      padding: 20px 15px;
      overflow-x: auto;
      justify-content: flex-start;
      gap: 8px;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .top-tab {
      margin: 0;
      padding: 12px 18px;
      font-size: 0.85rem;
      min-width: 100px;
      flex-shrink: 0;
    }

    .top-tab-icon {
      font-size: 1rem;
    }

    .main-container {
      margin: 110px auto 0;
      padding: 20px;
      gap: 25px;
      flex-direction: column;
    }

    .profile-sidebar {
      flex: none;
      order: 1;
      max-width: 500px;
      margin: 0 auto;
    }

    .profile-content {
      order: 2;
    }

    .profile-card {
      padding: 30px 20px;
      text-align: center;
    }

    .profile-name {
      font-size: 2.2rem;
      margin-bottom: 10px;
    }

    .profile-title {
      font-size: 1.1rem;
      margin-bottom: 25px;
    }

    .profile-avatar {
      width: 150px;
      height: 150px;
      margin: 0 auto 25px;
    }

    .section-title {
      font-size: 2.5rem;
      margin-bottom: 35px;
      text-align: center;
    }

    .card {
      padding: 30px 20px;
      margin-bottom: 30px;
    }

    .about-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .grid {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 25px;
    }

    .project-img {
      height: 180px;
    }

    .project-content {
      padding: 20px;
    }

    .project-title {
      font-size: 1.3rem;
    }

    .timeline {
      max-width: 100%;
      padding: 0 15px;
    }

    .timeline::before {
      left: 25px;
    }

    .timeline-item {
      padding-left: 60px;
      margin-bottom: 40px;
    }

    .timeline-icon {
      position: absolute;
      left: 0;
      top: 5px;
      width: 50px;
      height: 50px;
      font-size: 1.5rem;
    }

    .timeline-content {
      padding: 20px;
    }

    .timeline-title {
      font-size: 1.1rem;
    }

    .timeline-company {
      font-size: 1rem;
    }

    .timeline-period {
      font-size: 0.9rem;
    }

    .timeline-desc {
      font-size: 0.95rem;
    }

    .form-input {
      padding: 15px 18px;
      font-size: 1rem;
    }

    .form-label {
      font-size: 1rem;
      margin-bottom: 8px;
    }

    .submit-btn {
      padding: 18px 30px;
      font-size: 1rem;
    }
  }

  /* Mobile Landscape (768px and below) */
  @media (max-width: 768px) {
    .nav-container {
      background: rgba(255,255,255,0.15);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255,255,255,0.2);
    }

    .top-tabs {
      padding: 15px 12px;
      gap: 6px;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      flex-wrap: nowrap;
    }

    .top-tab {
      padding: 10px 14px;
      font-size: 0.8rem;
      min-width: 80px;
      border-radius: 20px;
      white-space: nowrap;
    }

    .top-tab-icon {
      display: none;
    }

    .main-container {
      margin: 100px auto 0;
      padding: 15px 12px;
      gap: 20px;
    }

    .profile-card {
      padding: 25px 15px;
    }

    .profile-name {
      font-size: 1.8rem;
      line-height: 1.2;
      margin-bottom: 8px;
    }

    .profile-title {
      font-size: 1rem;
      margin-bottom: 20px;
      line-height: 1.4;
    }

    .profile-avatar {
      width: 120px;
      height: 120px;
      margin-bottom: 20px;
    }

    .section-title {
      font-size: 2rem;
      margin-bottom: 25px;
    }

    .card {
      padding: 25px 15px;
      margin-bottom: 25px;
    }

    .about-content {
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .about-grid {
      gap: 15px;
    }

    .info-item {
      padding: 15px;
    }

    .info-item-title {
      font-size: 1rem;
    }

    .info-item-value {
      font-size: 0.95rem;
    }

    .section-content {
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .skill-item {
      margin-bottom: 20px;
    }

    .skill-header {
      margin-bottom: 8px;
    }

    .skill-name {
      font-size: 0.95rem;
    }

    .skill-level {
      font-size: 0.85rem;
    }

    .skill-bar {
      height: 8px;
      border-radius: 4px;
    }

    .progress-fill {
      height: 8px;
      border-radius: 4px;
    }

    .tech-tags {
      gap: 10px;
    }

    .tech-tag {
      padding: 8px 14px;
      font-size: 0.85rem;
      border-radius: 20px;
    }

    .project-card {
      margin-bottom: 20px;
    }

    .project-img {
      height: 150px;
    }

    .project-content {
      padding: 15px;
    }

    .project-title {
      font-size: 1.1rem;
      margin-bottom: 10px;
    }

    .project-desc {
      font-size: 0.9rem;
      margin-bottom: 15px;
    }

    .tech-tags {
      gap: 8px;
    }

    .tech-tag {
      padding: 6px 12px;
      font-size: 0.8rem;
    }

    .timeline {
      padding: 0 10px;
    }

    .timeline::before {
      left: 20px;
      width: 3px;
    }

    .timeline-item {
      padding-left: 50px;
      margin-bottom: 30px;
    }

    .timeline-icon {
      width: 40px;
      height: 40px;
      font-size: 1.2rem;
      top: 0;
    }

    .timeline-content {
      padding: 15px;
    }

    .timeline-title {
      font-size: 1rem;
      margin-bottom: 5px;
    }

    .timeline-company {
      font-size: 0.9rem;
      margin-bottom: 5px;
    }

    .timeline-period {
      font-size: 0.8rem;
      margin-bottom: 10px;
    }

    .timeline-desc {
      font-size: 0.9rem;
      line-height: 1.5;
    }

    /* Form Mobile */
    .contact-form {
      padding: 25px 15px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-input {
      padding: 14px 16px;
      font-size: 16px; /* Prevents zoom on iOS */
    }

    .submit-btn {
      padding: 16px 25px;
      font-size: 1rem;
      width: 100%;
      justify-content: center;
    }

    /* Alert Mobile */
    .custom-alert {
      left: 15px;
      right: 15px;
      margin: 0 auto;
      max-width: calc(100% - 30px);
    }
  }

  /* Mobile Portrait (480px and below) */
  @media (max-width: 480px) {
    .nav-container {
      padding: 10px 0;
    }

    .top-tabs {
      padding: 12px 8px;
      gap: 4px;
    }

    .top-tab {
      padding: 8px 12px;
      font-size: 0.75rem;
      min-width: 70px;
      border-radius: 15px;
    }

    .main-container {
      margin: 90px auto 0;
      padding: 12px 8px;
      gap: 15px;
    }

    .profile-card {
      padding: 20px 12px;
    }

    .profile-name {
      font-size: 1.6rem;
    }

    .profile-title {
      font-size: 0.9rem;
    }

    .profile-avatar {
      width: 100px;
      height: 100px;
    }

    .section-title {
      font-size: 1.8rem;
    }

    .card {
      padding: 20px 12px;
    }

    .about-content,
    .section-content {
      font-size: 0.9rem;
    }

    .skill-name {
      font-size: 0.9rem;
    }

    .skill-level {
      font-size: 0.8rem;
    }

    .project-img {
      height: 120px;
    }

    .project-content {
      padding: 12px;
    }

    .project-title {
      font-size: 1rem;
    }

    .project-desc {
      font-size: 0.85rem;
    }

    .timeline::before {
      left: 15px;
      width: 2px;
    }

    .timeline-item {
      padding-left: 40px;
    }

    .timeline-icon {
      width: 30px;
      height: 30px;
      font-size: 1rem;
    }

    .timeline-content {
      padding: 12px;
    }

    .timeline-title {
      font-size: 0.95rem;
    }

    .timeline-company {
      font-size: 0.85rem;
    }

    .timeline-period {
      font-size: 0.75rem;
    }

    .timeline-desc {
      font-size: 0.85rem;
    }

    .tech-tags {
      gap: 6px;
    }

    .tech-tag {
      padding: 5px 10px;
      font-size: 0.75rem;
    }

    .form-input {
      padding: 12px 14px;
    }

    .submit-btn {
      padding: 14px 20px;
    }
  }

  /* Small Mobile (360px and below) */
  @media (max-width: 360px) {
    .nav-container {
      padding: 8px 0;
    }

    .top-tabs {
      padding: 10px 6px;
      gap: 3px;
    }

    .top-tab {
      padding: 6px 10px;
      font-size: 0.7rem;
      min-width: 60px;
      border-radius: 12px;
    }

    .main-container {
      padding: 10px 6px;
      margin: 85px auto 0;
    }

    .profile-card,
    .card {
      padding: 15px 10px;
    }

    .profile-name {
      font-size: 1.4rem;
    }

    .profile-title {
      font-size: 0.85rem;
    }

    .section-title {
      font-size: 1.6rem;
    }

    .profile-avatar {
      width: 90px;
      height: 90px;
    }

    .about-content,
    .section-content {
      font-size: 0.85rem;
    }

    .project-img {
      height: 100px;
    }

    .featured-post-text,
    .blog-content {
      padding: 12px 10px;
    }

    .form-input {
      padding: 12px 14px;
    }

    .submit-btn {
      padding: 14px 20px;
      font-size: 0.95rem;
    }

    /* Hide icons on very small screens */
    .top-tab-icon {
      display: none !important;
    }

    /* Smaller gaps and margins */
    .skill-item {
      margin-bottom: 15px;
    }

    .project-card {
      margin-bottom: 15px;
    }

    .timeline-item {
      margin-bottom: 20px;
    }
  }
`;