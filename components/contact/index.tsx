// <================== Import Dependencies ==================>
"use client";

import React, { useState } from "react";
import { useContactForm } from "./index.hook";
import { contactFormStyle } from "./index.style";
import { SOCIAL_LINKS } from "./index.constant";
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Message as MessageIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon,
  Tag as TagIcon,
  Send as SendIcon,
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
} from "@mui/icons-material";
import {
  TextField,
  Box,
  Typography,
  InputAdornment,
  CircularProgress,
} from "@mui/material";

// <================== Contact Form Components ==================>
export const ContactForm: React.FC = () => {
  const {
    formik,
    isSubmitting,
    showAlert,
    getAlertMessage,
    getAlertType,
    FORM_TEXT,
  } = useContactForm();

  const [focusedField, setFocusedField] = useState<string | null>(null);

  // <================== Return JSX ==================>
  return (
    <>
      <style>{contactFormStyle}</style>

      <Box className="contact-container">
        <Box className="contact-header">
          <Typography variant="h1" className="contact-title">
            {FORM_TEXT.TITLE}
          </Typography>
          <Typography className="contact-subtitle">
            {FORM_TEXT.SUBTITLE}
          </Typography>
        </Box>

        <Box className="contact-content">
          <Box className="contact-info-section">
            <Typography variant="h2" className="contact-info-title">
              {FORM_TEXT.CONTACT_INFO.TITLE}
            </Typography>
            <Typography className="contact-description">
              {FORM_TEXT.CONTACT_INFO.DESCRIPTION}
            </Typography>

            <Box className="contact-info-grid">
              <Box className="contact-info-item">
                <Box className="info-icon-wrapper">
                  <EmailIcon className="contact-info-icon" />
                </Box>
                <Box className="info-content">
                  <Typography variant="h6" className="info-label">
                    {FORM_TEXT.CONTACT_INFO.EMAIL_LABEL}
                  </Typography>
                  <Typography className="info-value">
                    {FORM_TEXT.CONTACT_INFO.EMAIL_VALUE}
                  </Typography>
                </Box>
              </Box>

              <Box className="contact-info-item">
                <Box className="info-icon-wrapper">
                  <PhoneIcon className="contact-info-icon" />
                </Box>
                <Box className="info-content">
                  <Typography variant="h6" className="info-label">
                    {FORM_TEXT.CONTACT_INFO.PHONE_LABEL}
                  </Typography>
                  <Typography className="info-value">
                    {FORM_TEXT.CONTACT_INFO.PHONE_VALUE}
                  </Typography>
                </Box>
              </Box>

              <Box className="contact-info-item">
                <Box className="info-icon-wrapper">
                  <LocationOnIcon className="contact-info-icon" />
                </Box>
                <Box className="info-content">
                  <Typography variant="h6" className="info-label">
                    {FORM_TEXT.CONTACT_INFO.LOCATION_LABEL}
                  </Typography>
                  <Typography className="info-value">
                    {FORM_TEXT.CONTACT_INFO.LOCATION_VALUE}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="social-links-section">
              <Typography variant="h3" className="social-links-title">
                {FORM_TEXT.SOCIAL_LINKS.TITLE}
              </Typography>
              <Box className="social-links-grid">
                {SOCIAL_LINKS.map((social) => {
                  const IconComponent =
                    social.icon === "github"
                      ? GitHubIcon
                      : social.icon === "linkedin"
                      ? LinkedInIcon
                      : EmailIcon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-link-button ${social.icon}`}
                      aria-label={social.name}
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </Box>
            </Box>
          </Box>

          <Box className="contact-form-section">
            <Box className="form-header">
              <Typography variant="h2" className="form-title">
                {FORM_TEXT.FORM.TITLE}
              </Typography>
              <Typography className="form-subtitle">
                {FORM_TEXT.FORM.SUBTITLE}
              </Typography>
            </Box>

            <form onSubmit={formik.handleSubmit} className="contact-form">
              {/* Name Field */}
              <Box className="form-group">
                <Typography className="field-label">
                  <PersonIcon className="field-icon" />
                  {FORM_TEXT.FIELDS.NAME.LABEL}
                  <span className="required">*</span>
                </Typography>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  placeholder={FORM_TEXT.FIELDS.NAME.PLACEHOLDER}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={(e) => {
                    formik.handleBlur(e);
                    setFocusedField(null);
                  }}
                  onFocus={() => setFocusedField("name")}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name ? formik.errors.name : ""}
                  variant="outlined"
                  className={`custom-textfield ${
                    focusedField === "name" ? "focused" : ""
                  } ${
                    formik.touched.name && formik.errors.name ? "error" : ""
                  }`}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon className="input-icon" />
                      </InputAdornment>
                    ),
                    className: "textfield-input",
                  }}
                />
                <Box className="field-progress">
                  <Box
                    className="progress-bar"
                    style={{
                      width: `${(formik.values.name.length / 50) * 100}%`,
                    }}
                  />
                </Box>
              </Box>

              <Box className="form-group">
                <Typography className="field-label">
                  <EmailIcon className="field-icon" />
                  {FORM_TEXT.FIELDS.EMAIL.LABEL}
                  <span className="required">*</span>
                </Typography>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  type="email"
                  placeholder={FORM_TEXT.FIELDS.EMAIL.PLACEHOLDER}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={(e) => {
                    formik.handleBlur(e);
                    setFocusedField(null);
                  }}
                  onFocus={() => setFocusedField("email")}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email ? formik.errors.email : ""}
                  variant="outlined"
                  className={`custom-textfield ${
                    focusedField === "email" ? "focused" : ""
                  } ${
                    formik.touched.email && formik.errors.email ? "error" : ""
                  }`}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon className="input-icon" />
                      </InputAdornment>
                    ),
                    className: "textfield-input",
                  }}
                />
                <Box className="field-progress">
                  <Box
                    className="progress-bar"
                    style={{
                      width: `${Math.min(
                        (formik.values.email.length / 50) * 100,
                        100
                      )}%`,
                    }}
                  />
                </Box>
              </Box>

              <Box className="form-group">
                <Typography className="field-label">
                  <TagIcon className="field-icon" />
                  {FORM_TEXT.FIELDS.SUBJECT.LABEL}
                  <span className="required">*</span>
                </Typography>
                <TextField
                  fullWidth
                  id="subject"
                  name="subject"
                  placeholder={FORM_TEXT.FIELDS.SUBJECT.PLACEHOLDER}
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  onBlur={(e) => {
                    formik.handleBlur(e);
                    setFocusedField(null);
                  }}
                  onFocus={() => setFocusedField("subject")}
                  error={
                    formik.touched.subject && Boolean(formik.errors.subject)
                  }
                  helperText={
                    formik.touched.subject ? formik.errors.subject : ""
                  }
                  variant="outlined"
                  className={`custom-textfield ${
                    focusedField === "subject" ? "focused" : ""
                  } ${
                    formik.touched.subject && formik.errors.subject
                      ? "error"
                      : ""
                  }`}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <TagIcon className="input-icon" />
                      </InputAdornment>
                    ),
                    className: "textfield-input",
                  }}
                />
                <Box className="field-progress">
                  <Box
                    className="progress-bar"
                    style={{
                      width: `${(formik.values.subject.length / 100) * 100}%`,
                    }}
                  />
                </Box>
              </Box>

              <Box className="form-group">
                <Typography className="field-label">
                  <MessageIcon className="field-icon" />
                  {FORM_TEXT.FIELDS.MESSAGE.LABEL}
                  <span className="required">*</span>
                </Typography>
                <TextField
                  fullWidth
                  id="message"
                  name="message"
                  multiline
                  rows={5}
                  placeholder={FORM_TEXT.FIELDS.MESSAGE.PLACEHOLDER}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={(e) => {
                    formik.handleBlur(e);
                    setFocusedField(null);
                  }}
                  onFocus={() => setFocusedField("message")}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={
                    <span className="message-helper">
                      {formik.touched.message && formik.errors.message
                        ? formik.errors.message
                        : `${formik.values.message.length}/1000 characters`}
                    </span>
                  }
                  variant="outlined"
                  className={`custom-textarea ${
                    focusedField === "message" ? "focused" : ""
                  } ${
                    formik.touched.message && formik.errors.message
                      ? "error"
                      : ""
                  }`}
                  InputProps={{
                    className: "textarea-input",
                  }}
                />
                <Box className="field-progress">
                  <Box
                    className="progress-bar"
                    style={{
                      width: `${(formik.values.message.length / 1000) * 100}%`,
                    }}
                  />
                </Box>
              </Box>

              <Box className="submit-section">
                <button
                  type="submit"
                  disabled={isSubmitting || !formik.isValid}
                  className={`submit-button ${
                    isSubmitting ? "submitting" : ""
                  } ${!formik.isValid ? "disabled" : ""}`}
                >
                  {isSubmitting ? (
                    <>
                      <CircularProgress size={20} className="button-spinner" />
                      <span>{FORM_TEXT.SUBMIT_BUTTON.SENDING}</span>
                    </>
                  ) : (
                    <>
                      <SendIcon className="button-icon" />
                      <span>{FORM_TEXT.SUBMIT_BUTTON.TEXT}</span>
                      <Typography component="span" className="button-arrow">
                        →
                      </Typography>
                    </>
                  )}
                </button>

                {formik.isSubmitting && (
                  <Typography className="submit-status">
                    {FORM_TEXT.FORM.SUBMIT_STATUS}
                  </Typography>
                )}
              </Box>
            </form>
          </Box>
        </Box>
      </Box>

      {showAlert && (
        <Box className={`alert-notification alert-${getAlertType()}`}>
          <Box className="alert-icon-wrapper">
            {getAlertType() === "success" ? (
              <CheckCircleIcon className="alert-icon" />
            ) : (
              <ErrorIcon className="alert-icon" />
            )}
          </Box>
          <Box className="alert-content">
            <Typography variant="h6" className="alert-title">
              {getAlertType() === "success"
                ? FORM_TEXT.ALERT_TITLES.SUCCESS
                : FORM_TEXT.ALERT_TITLES.ERROR}
            </Typography>
            <Typography className="alert-message">
              {getAlertMessage()}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ContactForm;
