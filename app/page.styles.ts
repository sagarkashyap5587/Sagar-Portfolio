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

  /* Animated Background Particles */
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
    background: rgba(255,255,255,0.15);
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
  }

  .particle:nth-child(2) {
    width: 150px;
    height: 150px;
    right: 15%;
    top: 50%;
    animation-delay: 3s;
    animation-duration: 25s;
  }

  .particle:nth-child(3) {
    width: 80px;
    height: 80px;
    left: 60%;
    bottom: 20%;
    animation-delay: 5s;
    animation-duration: 18s;
  }

  .particle:nth-child(4) {
    width: 120px;
    height: 120px;
    right: 30%;
    top: 30%;
    animation-delay: 7s;
    animation-duration: 22s;
  }

  @keyframes particleFloat {
    0%, 100% {
      transform: translateY(0px) translateX(0px) rotate(0deg);
      opacity: 0.3;
    }
    25% {
      transform: translateY(-50px) translateX(30px) rotate(90deg);
      opacity: 0.6;
    }
    50% {
      transform: translateY(-30px) translateX(-20px) rotate(180deg);
      opacity: 0.4;
    }
    75% {
      transform: translateY(-70px) translateX(40px) rotate(270deg);
      opacity: 0.7;
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
    max-width: 1400px;
    margin: 0 auto;
    flex-wrap: wrap;
  }

  .top-tab {
    background: rgba(255,255,255,0.12);
    border: 2px solid rgba(255,255,255,0.25);
    border-radius: 50px;
    padding: 18px 30px;
    margin: 8px 12px;
    color: #ffffff;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    align-items: center;
    gap: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    backdrop-filter: blur(15px);
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
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

  /* Responsive Design */
  @media (max-width: 1200px) {
    .main-container {
      max-width: 100%;
      padding: 20px 15px;
    }

    .profile-sidebar {
      flex: 0 0 380px;
    }
  }

  @media (max-width: 1024px) {
    .main-container {
      flex-direction: column;
      gap: 40px;
    }

    .profile-sidebar {
      flex: none;
      position: static;
      order: 2;
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
    }

    .content-area {
      order: 1;
    }
  }

  @media (max-width: 768px) {
    .nav-container {
      backdrop-filter: blur(15px);
    }

    .top-tabs {
      padding: 20px 15px;
      overflow-x: auto;
      justify-content: flex-start;
      gap: 10px;
    }

    .top-tab {
      margin: 5px 8px;
      padding: 15px 20px;
      font-size: 0.9rem;
      min-width: 120px;
    }

    .main-container {
      margin: 120px auto 0;
      padding: 15px;
      gap: 30px;
    }

    .profile-card {
      padding: 40px 25px;
    }

    .profile-name {
      font-size: 2.5rem;
    }

    .profile-title {
      font-size: 1.3rem;
    }

    .profile-avatar {
      width: 170px;
      height: 170px;
    }

    .section-title {
      font-size: 2.8rem;
      margin-bottom: 40px;
    }

    .card {
      padding: 35px 25px;
      margin-bottom: 35px;
    }

    .grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .project-img {
      height: 200px;
    }

    .project-content {
      padding: 25px;
    }

    .tech-tags {
      gap: 12px;
    }

    .tech-tag {
      padding: 10px 18px;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .top-tabs {
      padding: 15px 10px;
    }

    .top-tab {
      padding: 12px 15px;
      font-size: 0.8rem;
      min-width: 100px;
      margin: 3px 5px;
    }

    .profile-name {
      font-size: 2.2rem;
    }

    .profile-title {
      font-size: 1.1rem;
    }

    .profile-specialty {
      font-size: 1rem;
    }

    .section-title {
      font-size: 2.3rem;
    }

    .card {
      padding: 30px 20px;
    }

    .profile-card {
      padding: 30px 20px;
    }

    .profile-avatar {
      width: 150px;
      height: 150px;
    }

    .download-btn {
      padding: 18px 22px;
      font-size: 1rem;
    }

    .project-img {
      height: 180px;
    }

    .project-content {
      padding: 20px;
    }

    .project-title {
      font-size: 1.5rem;
    }

    .btn {
      padding: 12px 20px;
      font-size: 0.9rem;
    }

    .tab-icon {
      font-size: 20px;
    }
  }
`;