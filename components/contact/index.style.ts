// <================== Contact Form Styling ==================>
export const contactFormStyle = `
/* ===== Global Styles & Animations ===== */
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* ===== Header Section ===== */
.contact-header {
  text-align: center;
  margin-bottom: 4rem;
  animation: slideIn 0.8s ease-out 0.2s both;
}

.contact-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: -2px;
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
  animation: titleGlow 4s ease-in-out infinite alternate;
  text-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
  filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.4));
}

/* Fallback for browsers that don't support background-clip */
@supports not (-webkit-background-clip: text) {
  .contact-title {
    background: none;
    color: #ffffff;
    -webkit-text-fill-color: #ffffff;
  }
}

@keyframes titleGlow {
  0% {
    filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.4)) brightness(1);
    transform: translateY(0px);
  }
  100% {
    filter: drop-shadow(0 0 35px rgba(255, 255, 255, 0.6)) brightness(1.1);
    transform: translateY(-2px);
  }
}

.contact-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #f093fb);
  border-radius: 2px;
  animation: titleWidth 2s ease-in-out infinite alternate;
}

@keyframes titleWidth {
  0% { width: 60px; opacity: 0.7; }
  100% { width: 100px; opacity: 1; }
}

.contact-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0;
  animation: fadeIn 1s ease-out 0.4s both;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* ===== Main Content Layout ===== */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  align-items: start;
  animation: contentFadeIn 0.8s ease-out 0.6s both;
}

@keyframes contentFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

/* ===== Contact Info Section ===== */
.contact-info-section {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border-radius: 24px;
  padding: 2.5rem;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: infoSectionSlide 0.8s ease-out 0.8s both;
}

@keyframes infoSectionSlide {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.contact-info-section::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(102, 126, 234, 0.05), transparent);
  transform: rotate(45deg);
  transition: all 0.6s ease;
  opacity: 0;
}

.contact-info-section:hover::before {
  animation: shimmer 1.5s ease-in-out;
}

.contact-info-section:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(102, 126, 234, 0.25);
  border-color: rgba(102, 126, 234, 0.4);
}

.contact-info-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea, #f093fb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1.05rem;
}

/* ===== Contact Info Grid ===== */
.contact-info-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.contact-info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  animation: itemSlideIn 0.5s ease-out;
  animation-fill-mode: both;
}

.contact-info-item:nth-child(1) { animation-delay: 1s; }
.contact-info-item:nth-child(2) { animation-delay: 1.1s; }
.contact-info-item:nth-child(3) { animation-delay: 1.2s; }

@keyframes itemSlideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.contact-info-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(8px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
  border-color: rgba(102, 126, 234, 0.3);
}

.contact-info-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 0;
  background: linear-gradient(135deg, #667eea, #f093fb);
  border-radius: 2px;
  transition: height 0.3s ease;
}

.contact-info-item:hover::before {
  height: 70%;
}

.info-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
}

.contact-info-item:hover .info-icon-wrapper {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.contact-info-icon {
  width: 24px;
  height: 24px;
  color: #fff;
}

.info-content {
  flex: 1;
}

.info-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-value {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 500;
}

/* ===== Social Links ===== */
.social-links-section {
  animation: fadeInUp 0.6s ease-out 1.3s both;
}

.social-links-title {
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 1rem;
  font-weight: 600;
  background: linear-gradient(135deg, #667eea, #f093fb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.social-links-grid {
  display: flex;
  gap: 1rem;
}

.social-link-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  animation: socialBounceIn 0.5s ease-out;
  animation-fill-mode: both;
}

.social-link-button:nth-child(1) { animation-delay: 1.4s; }
.social-link-button:nth-child(2) { animation-delay: 1.5s; }

@keyframes socialBounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3) rotate(180deg);
  }
  50% {
    transform: scale(1.05) rotate(10deg);
  }
  70% {
    transform: scale(0.95) rotate(-5deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

.social-link-button:hover {
  transform: translateY(-6px) scale(1.1) rotate(5deg);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.4);
}

.social-link-button:active {
  transform: translateY(-3px) scale(1.05) rotate(2deg);
}

.social-link-button.github:hover {
  background: linear-gradient(135deg, #24292e, #333);
  border-color: #24292e;
}

.social-link-button.linkedin:hover {
  background: linear-gradient(135deg, #0077b5, #005885);
  border-color: #0077b5;
}

.social-link-button.email:hover {
  background: linear-gradient(135deg, #ea4335, #d33b2c);
  border-color: #ea4335;
}

/* ===== Contact Form Section ===== */
.contact-form-section {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border-radius: 24px;
  padding: 2.5rem;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: formSectionSlide 0.8s ease-out 0.9s both;
}

@keyframes formSectionSlide {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.contact-form-section::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #667eea);
  border-radius: 24px;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.4s ease;
  background-size: 400% 400%;
  animation: gradientShift 4s ease-in-out infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.contact-form-section:hover::before {
  opacity: 0.3;
}

.contact-form-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 50px rgba(102, 126, 234, 0.25);
}

/* ===== Form Header ===== */
.form-header {
  margin-bottom: 2rem;
  animation: slideIn 0.6s ease-out 1s both;
}

.form-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #667eea, #f093fb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.form-subtitle {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  font-size: 0.95rem;
}

/* ===== Form Fields ===== */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  position: relative;
  z-index: 1;
}

.form-group {
  position: relative;
  animation: fieldFadeIn 0.5s ease-out;
  animation-fill-mode: both;
}

.form-group:nth-child(1) { animation-delay: 1.1s; }
.form-group:nth-child(2) { animation-delay: 1.2s; }
.form-group:nth-child(3) { animation-delay: 1.3s; }
.form-group:nth-child(4) { animation-delay: 1.4s; }

@keyframes fieldFadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.field-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.field-icon {
  width: 18px;
  height: 18px;
  color: #667eea;
  transition: all 0.3s ease;
}

.form-group:focus-within .field-icon {
  color: #f093fb;
  transform: scale(1.1);
}

.required {
  color: #f093fb;
  font-size: 0.8rem;
  margin-left: 0.25rem;
}

/* ===== Custom TextField Styles ===== */
.custom-textfield,
.custom-textarea {
  transition: all 0.3s ease;
}

.custom-textfield .MuiOutlinedInput-root,
.custom-textarea .MuiOutlinedInput-root {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(10px);
  font-size: 1rem;
}

.custom-textfield:hover .MuiOutlinedInput-root,
.custom-textarea:hover .MuiOutlinedInput-root {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.custom-textfield.focused .MuiOutlinedInput-root,
.custom-textarea.focused .MuiOutlinedInput-root {
  border-color: #667eea;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
  transform: translateY(-1px);
}

.custom-textfield.error .MuiOutlinedInput-root,
.custom-textarea.error .MuiOutlinedInput-root {
  border-color: #f44336;
  background: rgba(244, 67, 54, 0.1);
  box-shadow: 0 0 20px rgba(244, 67, 54, 0.3);
}

.custom-textfield .MuiOutlinedInput-input,
.custom-textarea .MuiOutlinedInput-input {
  color: #fff;
  font-size: 1rem;
  padding: 1rem 1rem 1rem 0.5rem;
}

.custom-textfield .MuiOutlinedInput-input::placeholder,
.custom-textarea .MuiOutlinedInput-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
}

.custom-textfield.error .MuiOutlinedInput-input,
.custom-textarea.error .MuiOutlinedInput-input {
  color: #fff;
}

.custom-textfield .MuiFormHelperText-root,
.custom-textarea .MuiFormHelperText-root {
  color: #f44336 !important;
  font-size: 0.85rem;
  font-weight: 500;
  background: rgba(244, 67, 54, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  backdrop-filter: blur(10px);
  margin-top: 0.5rem;
  border: 1px solid rgba(244, 67, 54, 0.2);
}

.message-helper {
  color: rgba(255, 255, 255, 0.6) !important;
  font-size: 0.85rem !important;
  font-weight: 400 !important;
  background: rgba(255, 255, 255, 0.1) !important;
  padding: 0.25rem 0.75rem !important;
  border-radius: 6px !important;
  backdrop-filter: blur(10px) !important;
  margin-top: 0.5rem !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}

.input-icon {
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
}

.custom-textfield.focused .input-icon,
.custom-textarea.focused .input-icon {
  color: #667eea;
}

/* ===== Progress Bars ===== */
.field-progress {
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin-top: 0.5rem;
  transition: all 0.3s ease;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #f093fb);
  border-radius: 2px;
  transition: width 0.3s ease;
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.3);
}

/* ===== Submit Section ===== */
.submit-section {
  margin-top: 1rem;
  animation: submitFadeIn 0.5s ease-out 1.5s both;
}

@keyframes submitFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.submit-button {
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  color: #fff;
  font-weight: 600;
  font-size: 1.05rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.submit-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.submit-button:hover:not(:disabled)::before {
  left: 100%;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
  background: linear-gradient(135deg, #7c8ff9 0%, #8b5aa8 100%);
}

.submit-button:active:not(:disabled) {
  transform: translateY(-1px);
}

.submit-button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.submit-button.submitting {
  background: linear-gradient(135deg, #5a67d8, #667eea);
}

.button-icon {
  width: 20px;
  height: 20px;
  transition: all 0.3s ease;
}

.submit-button:hover:not(:disabled) .button-icon {
  transform: scale(1.1);
}

.button-arrow {
  margin-left: 0.5rem;
  transition: all 0.3s ease;
  font-weight: 700;
}

.submit-button:hover:not(:disabled) .button-arrow {
  transform: translateX(3px);
}

.button-spinner {
  color: #fff;
}

.submit-status {
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-top: 0.75rem;
  animation: fadeIn 0.3s ease-out;
}

/* ===== Alert Notifications ===== */
.alert-notification {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  color: #fff;
  font-weight: 500;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 300px;
  max-width: 500px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: slideInRight 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.alert-success {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.9), rgba(22, 163, 74, 0.9));
  border-color: rgba(34, 197, 94, 0.5);
}

.alert-error {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.9), rgba(220, 38, 38, 0.9));
  border-color: rgba(239, 68, 68, 0.5);
}

.alert-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  flex-shrink: 0;
}

.alert-success .alert-icon-wrapper {
  background: rgba(34, 197, 94, 0.2);
}

.alert-error .alert-icon-wrapper {
  background: rgba(239, 68, 68, 0.2);
}

.alert-icon {
  width: 24px;
  height: 24px;
  color: #fff;
}

.alert-content {
  flex: 1;
}

.alert-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.alert-message {
  font-size: 0.95rem;
  line-height: 1.4;
  opacity: 0.9;
}

/* ===== Mobile Responsive Design ===== */
@media (max-width: 768px) {
  .contact-container {
    padding: 1rem;
  }

  .contact-content {
    gap: 1.5rem;
  }

  .contact-info-section,
  .contact-form-section {
    padding: 1.5rem;
  }

  .contact-title {
    font-size: 2rem;
  }

  .contact-info-title,
  .form-title {
    font-size: 1.4rem;
  }

  .contact-info-item {
    padding: 1rem;
  }

  .info-icon-wrapper {
    width: 40px;
    height: 40px;
  }

  .contact-info-icon {
    width: 20px;
    height: 20px;
  }

  .social-link-button {
    width: 44px;
    height: 44px;
  }

  .alert-notification {
    right: 10px;
    left: 10px;
    max-width: none;
    min-width: auto;
  }
}

@media (max-width: 480px) {
  .contact-container {
    padding: 0.75rem;
  }

  .contact-info-section,
  .contact-form-section {
    padding: 1rem;
  }

  .form-group {
    gap: 0.8rem;
  }

  .submit-button {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
}
`;