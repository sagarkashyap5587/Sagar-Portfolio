"use client";

import React from "react";
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
} from "@mui/icons-material";
import { TextField } from "@mui/material";

export const ContactForm: React.FC = () => {
  const {
    formik,
    isSubmitting,
    showAlert,
    getFieldProps,
    getAlertMessage,
    getAlertType,
    FORM_TEXT,
  } = useContactForm();

  return (
    <>
      <style>{contactFormStyle}</style>

      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">{FORM_TEXT.TITLE}</h1>
          <p className="contact-subtitle">{FORM_TEXT.SUBTITLE}</p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <h2 className="contact-info-title">Let Connect</h2>
            <p className="contact-description">
              I am always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>

            <div className="contact-info-item">
              <EmailIcon className="contact-info-icon" />
              <span>N/A</span>
            </div>

            <div className="contact-info-item">
              <PhoneIcon className="contact-info-icon" />
              <span>N/A</span>
            </div>

            <div className="contact-info-item">
              <LocationOnIcon className="contact-info-icon" />
              <span>Noida</span>
            </div>

            <div className="social-links-section">
              <h3 className="social-links-title">Connect With Me</h3>
              <div className="social-links-grid">
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
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form-section">
            <form onSubmit={formik.handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label={
                      <span className="form-label">
                        <PersonIcon
                          style={{
                            fontSize: 20,
                            verticalAlign: "middle",
                            marginRight: 8,
                          }}
                        />
                        {FORM_TEXT.FIELDS.NAME.LABEL}
                        <span className="required-asterisk">*</span>
                      </span>
                    }
                    placeholder={FORM_TEXT.FIELDS.NAME.PLACEHOLDER}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name ? formik.errors.name : ""}
                    variant="outlined"
                    margin="normal"
                    InputProps={{
                      className: "mui-textfield-input",
                      style: {
                        background: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "12px",
                        color: "#fff",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#fff" },
                    }}
                  />
                </div>

                <div className="form-group">
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label={
                      <span className="form-label">
                        <EmailIcon
                          style={{
                            fontSize: 20,
                            verticalAlign: "middle",
                            marginRight: 8,
                          }}
                        />
                        {FORM_TEXT.FIELDS.EMAIL.LABEL}
                        <span className="required-asterisk">*</span>
                      </span>
                    }
                    placeholder={FORM_TEXT.FIELDS.EMAIL.PLACEHOLDER}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email ? formik.errors.email : ""}
                    type="email"
                    variant="outlined"
                    margin="normal"
                    InputProps={{
                      className: "mui-textfield-input",
                      style: {
                        background: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "12px",
                        color: "#fff",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#fff" },
                    }}
                  />
                </div>
              </div>

              <div className="form-group">
                <TextField
                  fullWidth
                  id="subject"
                  name="subject"
                  label={
                    <span className="form-label">
                      <TagIcon
                        style={{
                          fontSize: 20,
                          verticalAlign: "middle",
                          marginRight: 8,
                        }}
                      />
                      {FORM_TEXT.FIELDS.SUBJECT.LABEL}
                      <span className="required-asterisk">*</span>
                    </span>
                  }
                  placeholder={FORM_TEXT.FIELDS.SUBJECT.PLACEHOLDER}
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.subject && Boolean(formik.errors.subject)
                  }
                  helperText={
                    formik.touched.subject ? formik.errors.subject : ""
                  }
                  variant="outlined"
                  margin="normal"
                  InputProps={{
                    className: "mui-textfield-input",
                    style: {
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      color: "#fff",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#fff" },
                  }}
                />
              </div>

              <div className="form-group">
                <TextField
                  fullWidth
                  id="message"
                  name="message"
                  label={
                    <span className="form-label">
                      <MessageIcon
                        style={{
                          fontSize: 20,
                          verticalAlign: "middle",
                          marginRight: 8,
                        }}
                      />
                      {FORM_TEXT.FIELDS.MESSAGE.LABEL}
                      <span className="required-asterisk">*</span>
                    </span>
                  }
                  placeholder={FORM_TEXT.FIELDS.MESSAGE.PLACEHOLDER}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={
                    formik.touched.message ? formik.errors.message : ""
                  }
                  multiline
                  rows={6}
                  variant="outlined"
                  margin="normal"
                  InputProps={{
                    className: "mui-textfield-input",
                    style: {
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      color: "#fff",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#fff" },
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner" />
                    <span>{FORM_TEXT.SUBMIT_BUTTON.SENDING}</span>
                  </>
                ) : (
                  <>
                    <span>{FORM_TEXT.SUBMIT_BUTTON.TEXT}</span>
                    <span>➤</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {showAlert && (
        <div className={`alert alert-${getAlertType()}`}>
          {getAlertType() === "success" ? (
            <span className="alert-icon">✓</span>
          ) : (
            <span className="alert-icon">✕</span>
          )}
          <span>{getAlertMessage()}</span>
        </div>
      )}
    </>
  );
};

export default ContactForm;
