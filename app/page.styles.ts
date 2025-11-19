export const portfolioStyle = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background-color: #f5f7fa;
    color: #333;
  }
  
  .portfolio {
    min-height: 100vh;
  }
  
  .header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
    padding: 80px 20px 60px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  }
  
  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto 20px;
    border: 5px solid white;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    object-fit: cover;
  }
  
  .header h1 {
    font-size: 3rem;
    margin-bottom: 10px;
    font-weight: 700;
  }
  
  .header h2 {
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 30px;
    opacity: 0.95;
  }
  
  .social-links {
    margin: 20px 0;
  }
  
  .social-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255,255,255,0.2);
    color: white;
    margin: 0 8px;
    cursor: pointer;
    border: 2px solid white;
    transition: all 0.3s ease;
    font-size: 20px;
    text-decoration: none;
  }
  
  .social-btn:hover {
    background: white;
    color: #667eea;
    transform: translateY(-3px);
  }
  
  .download-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: white;
    color: #667eea;
    padding: 15px 40px;
    border-radius: 30px;
    border: none;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 20px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  }
  
  .download-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .tabs {
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin: -30px auto 40px;
    max-width: 900px;
    display: flex;
    overflow-x: auto;
  }
  
  .tab {
    flex: 1;
    padding: 20px;
    text-align: center;
    cursor: pointer;
    border: none;
    background: none;
    font-size: 1rem;
    font-weight: 600;
    color: #666;
    transition: all 0.3s ease;
    border-bottom: 3px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-width: 120px;
  }
  
  .tab:hover {
    color: #667eea;
    background: #f8f9ff;
  }
  
  .tab.active {
    color: #667eea;
    border-bottom-color: #667eea;
    background: #f8f9ff;
  }
  
  .tab-icon {
    font-size: 20px;
  }
  
  .tab-content {
    padding: 40px 0;
    min-height: 500px;
    animation: fadeIn 0.4s ease;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #667eea;
    margin-bottom: 30px;
  }
  
  .card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 15px rgba(0,0,0,0.08);
    padding: 30px;
    margin-bottom: 20px;
    transition: all 0.3s ease;
  }
  
  .card:hover {
    box-shadow: 0 8px 25px rgba(0,0,0,0.12);
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin-top: 30px;
  }
  
  .project-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 15px rgba(0,0,0,0.08);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
  }
  
  .project-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.15);
  }
  
  .project-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .project-content {
    padding: 25px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .project-title {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: #333;
  }
  
  .project-desc {
    color: #666;
    line-height: 1.6;
    margin-bottom: 15px;
    flex-grow: 1;
  }
  
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 15px 0;
  }
  
  .tag {
    background: #e8eaf6;
    color: #667eea;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
  }
  
  .project-links {
    display: flex;
    gap: 10px;
    margin-top: auto;
  }
  
  .btn {
    padding: 10px 20px;
    border-radius: 6px;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }
  
  .btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
  }
  
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(102,126,234,0.4);
  }
  
  .btn-outline {
    background: white;
    color: #667eea;
    border: 2px solid #667eea;
  }
  
  .btn-outline:hover {
    background: #667eea;
    color: white;
  }
  
  .skill-item {
    margin-bottom: 25px;
  }
  
  .skill-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .skill-name {
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
  }
  
  .skill-percent {
    font-size: 1.1rem;
    font-weight: 700;
    color: #667eea;
  }
  
  .progress-bar {
    height: 12px;
    background: #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    border-radius: 10px;
    transition: width 1s ease;
  }
  
  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
  }
  
  .tech-tag {
    background: #667eea;
    color: white;
    padding: 8px 18px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 0.9rem;
  }
  
  .timeline-item {
    border-left: 3px solid #667eea;
    padding: 0 0 30px 30px;
    margin-bottom: 30px;
    position: relative;
  }
  
  .timeline-item::before {
    content: '';
    width: 15px;
    height: 15px;
    background: #667eea;
    border-radius: 50%;
    position: absolute;
    left: -9px;
    top: 0;
  }
  
  .timeline-role {
    font-size: 1.3rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 5px;
  }
  
  .timeline-company {
    font-size: 1.1rem;
    color: #667eea;
    font-weight: 600;
    margin-bottom: 5px;
  }
  
  .timeline-period {
    color: #888;
    font-size: 0.95rem;
    margin-bottom: 10px;
  }
  
  .timeline-desc {
    color: #666;
    line-height: 1.6;
  }
  
  .contact-form {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 25px;
  }
  
  .form-label {
    display: block;
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
  }
  
  .form-input {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
    font-family: inherit;
  }
  
  .form-input:focus {
    outline: none;
    border-color: #667eea;
  }
  
  textarea.form-input {
    min-height: 120px;
    resize: vertical;
  }
  
  .submit-btn {
    width: 100%;
    padding: 15px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  
  .submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102,126,234,0.4);
  }
  
  .footer {
    background: #2c3e50;
    color: white;
    text-align: center;
    padding: 40px 20px;
    margin-top: 60px;
  }
  
  .footer h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .footer p {
    opacity: 0.8;
    font-size: 0.95rem;
  }
  
  .alert {
    position: fixed;
    top: 20px;
    right: 20px;
    background: white;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    gap: 10px;
    animation: slideIn 0.3s ease;
    z-index: 1000;
  }
  
  @keyframes slideIn {
    from { transform: translateX(400px); }
    to { transform: translateX(0); }
  }
  
  .alert-success {
    border-left: 4px solid #4caf50;
    color: #2e7d32;
  }
  
  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 30px;
  }
  
  @media (max-width: 768px) {
    .header h1 {
      font-size: 2rem;
    }
    
    .header h2 {
      font-size: 1.2rem;
    }
    
    .tabs {
      flex-wrap: nowrap;
      overflow-x: auto;
    }
    
    .tab {
      flex: none;
    }
    
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;
