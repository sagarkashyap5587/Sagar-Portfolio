// <================== Contact Form Styling ==================>
export const contactFormStyle = `
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.contact-header {
  text-align: center;
  margin-bottom: 3rem;
}

.contact-title {
  font-size: 4rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 2rem;
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

.contact-title::after {
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

.contact-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.contact-info-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-info-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.5rem;
}

.contact-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.contact-info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
}

.contact-info-icon {
  width: 20px;
  height: 20px;
  color: #667eea;
  flex-shrink: 0;
}

.social-links-section {
  margin-top: 2rem;
}

.social-links-title {
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 1rem;
  font-weight: 600;
}

.social-links-grid {
  display: flex;
  gap: 1rem;
}

.social-link-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.social-link-button:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.social-link-button.github:hover {
  background: #333;
  border-color: #333;
}

.social-link-button.linkedin:hover {
  background: #0077b5;
  border-color: #0077b5;
}

.social-link-button.email:hover {
  background: #ea4335;
  border-color: #ea4335;
}

.contact-form-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.required-asterisk {
  color: #f093fb;
  font-size: 0.9rem;
}

.form-input,
.form-textarea {
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 1rem;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #667eea;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
}

.form-input.error,
.form-textarea.error {
  border-color: #d32f2f;
  box-shadow: 0 0 20px rgba(211, 47, 47, 0.3);
  background: rgba(211, 47, 47, 0.1);
  color: #000;
}

.form-input.error::placeholder,
.form-textarea.error::placeholder {
  color: rgba(0, 0, 0, 0.6);
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
}

.form-error {
  color: #d32f2f;
  font-size: 0.85rem;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  backdrop-filter: blur(10px);
}

.submit-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  color: #fff;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
}

.submit-button:active:not(:disabled) {
  transform: translateY(0);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
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

.submit-button:hover::before:not(:disabled) {
  left: 100%;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.alert {
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
  gap: 0.75rem;
  min-width: 300px;
  max-width: 500px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
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

.alert-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-container {
    padding: 1rem;
  }

  .contact-info-section,
  .contact-form-section {
    padding: 1.5rem;
  }

  .contact-title {
    font-size: 2rem;
  }
}

/* MUI TextField Custom Styles */
.mui-textfield-input .MuiOutlinedInput-root {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.mui-textfield-input .MuiOutlinedInput-root:hover {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
}

.mui-textfield-input .MuiOutlinedInput-root.Mui-focused {
  border-color: #667eea;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
}

.mui-textfield-input .MuiOutlinedInput-root.Mui-error {
  border-color: #d32f2f;
  background: rgba(211, 47, 47, 0.1);
  box-shadow: 0 0 20px rgba(211, 47, 47, 0.3);
}

.mui-textfield-input .MuiOutlinedInput-input {
  color: #fff;
  padding: 1rem;
  font-size: 1rem;
}

.mui-textfield-input .MuiOutlinedInput-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.mui-textfield-input .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-input {
  color: #000;
}

.mui-textfield-input .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-input::placeholder {
  color: rgba(0, 0, 0, 0.6);
}

.mui-textfield-input .MuiInputLabel-root {
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.mui-textfield-input .MuiInputLabel-root.Mui-error {
  color: #d32f2f;
}

.mui-textfield-input .MuiFormHelperText-root {
  color: #d32f2f !important;
  font-size: 0.85rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  backdrop-filter: blur(10px);
  margin-top: 0.25rem;
}

.mui-textfield-input .MuiInputBase-root {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
}

.mui-textfield-input .MuiInputBase-root.Mui-error {
  background: rgba(211, 47, 47, 0.1);
}
`;
