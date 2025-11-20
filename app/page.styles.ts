// <================== Portfolio Styling ==================>
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
    background: #000000;
    overflow: hidden;
  }

  .portfolio::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
      radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.15), transparent 40%),
      radial-gradient(circle at 80% 80%, rgba(240, 147, 251, 0.12), transparent 45%),
      radial-gradient(circle at 40% 60%, rgba(118, 75, 162, 0.1), transparent 50%);
    pointer-events: none;
    z-index: 0;
  }

  /* Animated Star Field Background */
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
    background: white;
    border-radius: 50%;
    animation: twinkle 4s infinite ease-in-out;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }

  /* Large bright stars */
  .particle:nth-child(1) {
    width: 4px;
    height: 4px;
    left: 10%;
    top: 20%;
    animation-delay: 0s;
    animation-duration: 3s;
    box-shadow: 0 0 15px rgba(255, 255, 255, 1);
  }

  .particle:nth-child(2) {
    width: 3px;
    height: 3px;
    right: 15%;
    top: 50%;
    animation-delay: 1s;
    animation-duration: 4s;
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.9);
  }

  .particle:nth-child(3) {
    width: 5px;
    height: 5px;
    left: 60%;
    bottom: 20%;
    animation-delay: 2s;
    animation-duration: 3.5s;
    box-shadow: 0 0 20px rgba(255, 255, 255, 1);
  }

  .particle:nth-child(4) {
    width: 3px;
    height: 3px;
    right: 30%;
    top: 30%;
    animation-delay: 1.5s;
    animation-duration: 4.5s;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }

  .particle:nth-child(5) {
    width: 2px;
    height: 2px;
    left: 25%;
    top: 60%;
    animation-delay: 2.5s;
    animation-duration: 5s;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.7);
  }

  .particle:nth-child(6) {
    width: 4px;
    height: 4px;
    right: 45%;
    bottom: 35%;
    animation-delay: 0.8s;
    animation-duration: 3.8s;
    box-shadow: 0 0 14px rgba(255, 255, 255, 0.9);
  }

  .particle:nth-child(7) {
    width: 3px;
    height: 3px;
    left: 75%;
    top: 15%;
    animation-delay: 3.2s;
    animation-duration: 4.2s;
    box-shadow: 0 0 11px rgba(255, 255, 255, 0.8);
  }

  .particle:nth-child(8) {
    width: 2px;
    height: 2px;
    right: 65%;
    top: 75%;
    animation-delay: 1.8s;
    animation-duration: 5.5s;
    box-shadow: 0 0 9px rgba(255, 255, 255, 0.7);
  }

  @keyframes twinkle {
    0%, 100% {
      opacity: 0.3;
      transform: scale(1);
    }
    25% {
      opacity: 0.8;
      transform: scale(1.2);
    }
    50% {
      opacity: 1;
      transform: scale(1.5);
    }
    75% {
      opacity: 0.6;
      transform: scale(1.1);
    }
  }

  /* Shooting stars */
  .bg-particles::after {
    content: '';
    position: absolute;
    top: 20%;
    left: -100px;
    width: 100px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), white);
    transform: rotate(-30deg);
    animation: shooting 8s infinite ease-in-out;
    opacity: 0;
  }

  @keyframes shooting {
    0% {
      left: -100px;
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      left: calc(100% + 100px);
      opacity: 0;
    }
  }

  /* Additional small stars for depth */
  .bg-particles::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
      radial-gradient(2px 2px at 20% 30%, white, transparent),
      radial-gradient(2px 2px at 60% 70%, white, transparent),
      radial-gradient(1px 1px at 50% 50%, white, transparent),
      radial-gradient(1px 1px at 80% 10%, white, transparent),
      radial-gradient(2px 2px at 10% 80%, white, transparent),
      radial-gradient(1px 1px at 90% 60%, white, transparent),
      radial-gradient(1px 1px at 30% 90%, white, transparent);
    background-size: 400px 400px, 300px 300px, 200px 200px, 250px 250px, 350px 350px, 450px 450px, 500px 500px;
    background-position: 0 0, 100px 50px, 200px 100px, 50px 200px, 300px 150px, 150px 300px, 250px 250px;
    animation: starMove 100s linear infinite;
    opacity: 0.4;
  }

  @keyframes starMove {
    from {
      transform: translateX(0) translateY(0);
    }
    to {
      transform: translateX(-400px) translateY(-400px);
    }
  }

  /* Solar System Planets */
  .planet {
    position: absolute;
    border-radius: 50%;
    opacity: 0.3;
    animation: planetRotate 60s infinite linear;
    box-shadow: inset -10px -10px 20px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.1);
    backdrop-filter: blur(5px);
  }

  /* Earth - Blue-green planet */
  .earth {
    width: 60px;
    height: 60px;
    left: 15%;
    top: 25%;
    background: radial-gradient(circle at 30% 30%, #4facfe, #0f2027, #2c5f2d);
    animation-duration: 45s;
    box-shadow:
      inset -10px -10px 20px rgba(0,0,0,0.5),
      0 0 25px rgba(79, 172, 254, 0.3),
      inset 5px 5px 10px rgba(255,255,255,0.2);
  }

  /* Neptune - Deep blue ice giant */
  .neptune {
    width: 50px;
    height: 50px;
    right: 20%;
    top: 30%;
    background: radial-gradient(circle at 40% 40%, #4b6cb7, #182848, #1e3c72);
    animation-duration: 55s;
    animation-direction: reverse;
    box-shadow:
      inset -8px -8px 15px rgba(0,0,0,0.5),
      0 0 20px rgba(75, 108, 183, 0.3),
      inset 3px 3px 8px rgba(255,255,255,0.15);
  }

  /* Mercury - Small gray planet */
  .mercury {
    width: 25px;
    height: 25px;
    left: 70%;
    top: 15%;
    background: radial-gradient(circle at 35% 35%, #b8b8b8, #696969, #4a4a4a);
    animation-duration: 30s;
    box-shadow:
      inset -4px -4px 8px rgba(0,0,0,0.5),
      0 0 15px rgba(184, 184, 184, 0.2),
      inset 2px 2px 4px rgba(255,255,255,0.3);
  }

  /* Mars - Red planet */
  .mars {
    width: 35px;
    height: 35px;
    right: 35%;
    bottom: 20%;
    background: radial-gradient(circle at 30% 30%, #ff6b6b, #c92a2a, #5f0a0a);
    animation-duration: 40s;
    box-shadow:
      inset -6px -6px 12px rgba(0,0,0,0.5),
      0 0 18px rgba(255, 107, 107, 0.3),
      inset 3px 3px 6px rgba(255,255,255,0.15);
  }

  /* Jupiter - Large striped gas giant */
  .jupiter {
    width: 80px;
    height: 80px;
    left: 45%;
    top: 60%;
    background:
      radial-gradient(circle at 35% 35%, rgba(255,255,255,0.3), transparent 40%),
      linear-gradient(0deg, #d4a574 0%, #8b7355 25%, #cd853f 50%, #daa520 75%, #d4a574 100%);
    animation-duration: 65s;
    box-shadow:
      inset -12px -12px 25px rgba(0,0,0,0.5),
      0 0 30px rgba(212, 165, 116, 0.3),
      inset 5px 5px 15px rgba(255,255,255,0.2);
  }

  /* Saturn - Ringed planet */
  .saturn {
    width: 70px;
    height: 70px;
    right: 15%;
    top: 65%;
    background: radial-gradient(circle at 40% 40%, #ffd89b, #e6b87d, #8b7355);
    animation-duration: 50s;
    box-shadow:
      inset -10px -10px 20px rgba(0,0,0,0.5),
      0 0 25px rgba(255, 216, 155, 0.3),
      inset 4px 4px 10px rgba(255,255,255,0.2);
  }

  /* Saturn's rings */
  .saturn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotateX(75deg);
    width: 120px;
    height: 120px;
    border: 8px solid rgba(230, 184, 125, 0.4);
    border-radius: 50%;
    box-shadow: 0 0 15px rgba(255, 216, 155, 0.3);
  }

  /* Venus - Yellow cloudy planet */
  .venus {
    width: 40px;
    height: 40px;
    left: 25%;
    bottom: 30%;
    background: radial-gradient(circle at 35% 35%, #ffd700, #ffcc00, #ff8c00);
    animation-duration: 35s;
    box-shadow:
      inset -6px -6px 12px rgba(0,0,0,0.5),
      0 0 20px rgba(255, 215, 0, 0.3),
      inset 3px 3px 8px rgba(255,255,255,0.25);
  }

  /* Uranus - Tilted ice giant */
  .uranus {
    width: 45px;
    height: 45px;
    right: 45%;
    top: 10%;
    background: radial-gradient(circle at 40% 40%, #4fd1c5, #319795, #2c7a7b);
    animation-duration: 48s;
    animation-direction: reverse;
    transform: rotate(98deg);
    box-shadow:
      inset -7px -7px 14px rgba(0,0,0,0.5),
      0 0 18px rgba(79, 209, 197, 0.3),
      inset 3px 3px 7px rgba(255,255,255,0.2);
  }

  @keyframes planetRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* Orbital movements for planets */
  .earth {
    animation: planetRotate 45s infinite linear, earthOrbit 120s infinite ease-in-out;
  }

  .neptune {
    animation: planetRotate 55s infinite linear reverse, neptuneOrbit 150s infinite ease-in-out;
  }

  .mars {
    animation: planetRotate 40s infinite linear, marsOrbit 90s infinite ease-in-out;
  }

  .jupiter {
    animation: planetRotate 65s infinite linear, jupiterOrbit 180s infinite ease-in-out;
  }

  .saturn {
    animation: planetRotate 50s infinite linear, saturnOrbit 160s infinite ease-in-out;
  }

  .venus {
    animation: planetRotate 35s infinite linear, venusOrbit 80s infinite ease-in-out;
  }

  .mercury {
    animation: planetRotate 30s infinite linear, mercuryOrbit 60s infinite ease-in-out;
  }

  .uranus {
    animation: planetRotate 48s infinite linear reverse, uranusOrbit 140s infinite ease-in-out;
  }

  @keyframes earthOrbit {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(30px, -20px) rotate(90deg); }
    50% { transform: translate(-15px, 30px) rotate(180deg); }
    75% { transform: translate(25px, 15px) rotate(270deg); }
  }

  @keyframes neptuneOrbit {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(-40px, 25px) rotate(120deg); }
    66% { transform: translate(20px, -30px) rotate(240deg); }
  }

  @keyframes marsOrbit {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(-25px, 20px) rotate(180deg); }
  }

  @keyframes jupiterOrbit {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(20px, -25px) rotate(90deg); }
    50% { transform: translate(-30px, 15px) rotate(180deg); }
    75% { transform: translate(15px, 30px) rotate(270deg); }
  }

  @keyframes saturnOrbit {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    40% { transform: translate(-35px, -20px) rotate(144deg); }
    80% { transform: translate(25px, 25px) rotate(288deg); }
  }

  @keyframes venusOrbit {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(20px, -15px) rotate(180deg); }
  }

  @keyframes mercuryOrbit {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(15px, 10px) rotate(120deg); }
    66% { transform: translate(-10px, -15px) rotate(240deg); }
  }

  @keyframes uranusOrbit {
    0%, 100% { transform: translate(0, 0) rotate(0deg) rotateX(98deg); }
    50% { transform: translate(-20px, 25px) rotate(180deg) rotateX(98deg); }
  }

  /* Navigation Tabs */
  .nav-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(25px);
    border-bottom: 2px solid rgba(255,255,255,0.2);
    box-shadow: 0 8px 32px rgba(102,126,234,0.3);
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
    background: rgba(255,255,255,0.08);
    border: 2px solid rgba(255,255,255,0.3);
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
    backdrop-filter: blur(20px);
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0,0,0,0.4), 0 0 20px rgba(102,126,234,0.2);
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
    background: rgba(255,255,255,0.15);
    border-color: rgba(255,255,255,0.6);
    box-shadow: 0 20px 40px rgba(0,0,0,0.6), 0 0 30px rgba(240,147,251,0.3);
  }

  .top-tab:hover::before {
    left: 100%;
  }

  .top-tab.active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    border-color: rgba(255,255,255,0.8);
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 15px 35px rgba(102,126,234,0.6), 0 0 25px rgba(240,147,251,0.4);
    color: #ffffff;
    font-weight: 800;
    text-shadow: 0 0 10px rgba(255,255,255,0.5);
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
    background: rgba(255,255,255,0.06);
    backdrop-filter: blur(30px);
    border-radius: 35px;
    padding: 50px 35px;
    text-align: center;
    border: 2px solid rgba(255,255,255,0.3);
    box-shadow: 0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(102,126,234,0.2);
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
    box-shadow: 0 40px 80px rgba(0,0,0,0.6), 0 0 50px rgba(240,147,251,0.3);
    background: rgba(255,255,255,0.1);
    border-color: rgba(255,255,255,0.4);
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
    height: 90vh;
    overflow-y: auto;
    padding-right: 20px;
    scrollbar-width: thin;
    scrollbar-color: rgba(102, 126, 234, 0.5) transparent;
  }

  .content-area::-webkit-scrollbar {
    width: 8px;
  }

  .content-area::-webkit-scrollbar-track {
    background: transparent;
  }

  .content-area::-webkit-scrollbar-thumb {
    background: rgba(102, 126, 234, 0.5);
    border-radius: 4px;
  }

  .content-area::-webkit-scrollbar-thumb:hover {
    background: rgba(102, 126, 234, 0.8);
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
    background: rgba(255,255,255,0.06);
    backdrop-filter: blur(30px);
    border-radius: 30px;
    box-shadow: 0 25px 50px rgba(0,0,0,0.4), 0 0 0 2px rgba(255,255,255,0.3), 0 0 30px rgba(102,126,234,0.15);
    padding: 50px;
    margin-bottom: 50px;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 2px solid rgba(255,255,255,0.3);
    position: relative;
    overflow: hidden;
    margin-left: 10px;
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
    box-shadow: 0 40px 80px rgba(0,0,0,0.5), 0 0 0 3px rgba(255,255,255,0.4), 0 0 40px rgba(240,147,251,0.25);
    background: rgba(255,255,255,0.1);
    border-color: rgba(255,255,255,0.4);
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
    background: rgba(255,255,255,0.06);
    backdrop-filter: blur(30px);
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 0 25px 50px rgba(0,0,0,0.4), 0 0 0 2px rgba(255,255,255,0.3), 0 0 30px rgba(102,126,234,0.15);
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    flex-direction: column;
    border: 2px solid rgba(255,255,255,0.3);
    position: relative;
    margin-left: 10px;
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
    box-shadow: 0 40px 80px rgba(0,0,0,0.6), 0 0 0 3px rgba(255,255,255,0.4), 0 0 40px rgba(240,147,251,0.25);
    background: rgba(255,255,255,0.1);
    border-color: rgba(255,255,255,0.4);
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
    border: 3px solid rgba(255,255,255,0.4);
    border-radius: 15px;
    font-size: 1.1rem;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    font-family: inherit;
    background: rgba(255,255,255,0.08);
    color: #ffffff;
    box-shadow: inset 0 4px 15px rgba(0,0,0,0.5), 0 0 20px rgba(102,126,234,0.1);
    backdrop-filter: blur(20px);
  }

  .form-input:hover {
    border-color: #4facfe;
    box-shadow: inset 0 4px 15px rgba(0,0,0,0.5), 0 0 25px rgba(79, 172, 254, 0.3);
    background: rgba(255,255,255,0.1);
  }

  .form-input:focus {
    outline: none;
    border-color: #f093fb;
    box-shadow: inset 0 4px 15px rgba(0,0,0,0.5), 0 0 0 5px rgba(240,147,251,0.3), 0 0 30px rgba(240,147,251,0.2);
    background: rgba(255,255,255,0.12);
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
    background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(102,126,234,0.15) 50%, rgba(240,147,251,0.15) 100%);
    backdrop-filter: blur(30px);
    color: white;
    text-align: center;
    padding: 80px 30px;
    margin-top: 100px;
    position: relative;
    overflow: hidden;
    border-top: 2px solid rgba(255,255,255,0.3);
    box-shadow: 0 -20px 40px rgba(102,126,234,0.2);
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
      padding: 30px 15px;
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
      height: auto;
      overflow-y: visible;
      padding-right: 0;
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
      padding: 30px 15px;
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
