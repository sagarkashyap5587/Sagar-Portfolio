// <================== Import Dependencies ==================>
"use client";

import React from "react";
import { useContactForm } from "./index.hook";
import { UI_TEXT } from "../../app/page.constant";
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
import { TextField, Box, Typography } from "@mui/material";

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
              {UI_TEXT.CONTACT_TITLE}
            </Typography>
            <Typography className="contact-description">
              {UI_TEXT.CONTACT_DESCRIPTION}
            </Typography>

            <Box className="contact-info-item">
              <EmailIcon className="contact-info-icon" />
              <Typography component="span">
                {UI_TEXT.CONTACT_NOT_AVAILABLE}
              </Typography>
            </Box>

            <Box className="contact-info-item">
              <PhoneIcon className="contact-info-icon" />
              <Typography component="span">
                {UI_TEXT.CONTACT_NOT_AVAILABLE}
              </Typography>
            </Box>

            <Box className="contact-info-item">
              <LocationOnIcon className="contact-info-icon" />
              <Typography component="span">{UI_TEXT.LOCATION}</Typography>
            </Box>

            <Box className="social-links-section">
              <Typography variant="h3" className="social-links-title">
                {UI_TEXT.CONTACT_CONNECT_TITLE}
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

          {/* Contact Form Section */}
          <Box className="contact-form-section">
            <form onSubmit={formik.handleSubmit} className="contact-form">
              <Box className="form-row">
                <Box className="form-group">
                  <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label={
                      <Typography component="span" className="form-label">
                        <PersonIcon
                          sx={{
                            fontSize: 20,
                            verticalAlign: "middle",
                            marginRight: 1,
                          }}
                        />
                        {FORM_TEXT.FIELDS.NAME.LABEL}
                        <Typography
                          component="span"
                          className="required-asterisk"
                        >
                          *
                        </Typography>
                      </Typography>
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
                      sx: {
                        background: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "12px",
                        color: "#fff",
                      },
                    }}
                    InputLabelProps={{
                      sx: { color: "#fff" },
                    }}
                  />
                </Box>

                <Box className="form-group">
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label={
                      <Typography component="span" className="form-label">
                        <EmailIcon
                          sx={{
                            fontSize: 20,
                            verticalAlign: "middle",
                            marginRight: 1,
                          }}
                        />
                        {FORM_TEXT.FIELDS.EMAIL.LABEL}
                        <Typography
                          component="span"
                          className="required-asterisk"
                        >
                          *
                        </Typography>
                      </Typography>
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
                      sx: {
                        background: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "12px",
                        color: "#fff",
                      },
                    }}
                    InputLabelProps={{
                      sx: { color: "#fff" },
                    }}
                  />
                </Box>
              </Box>

              <Box className="form-group">
                <TextField
                  fullWidth
                  id="subject"
                  name="subject"
                  label={
                    <Typography component="span" className="form-label">
                      <TagIcon
                        sx={{
                          fontSize: 20,
                          verticalAlign: "middle",
                          marginRight: 1,
                        }}
                      />
                      {FORM_TEXT.FIELDS.SUBJECT.LABEL}
                      <Typography
                        component="span"
                        className="required-asterisk"
                      >
                        *
                      </Typography>
                    </Typography>
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
                    sx: {
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      color: "#fff",
                    },
                  }}
                  InputLabelProps={{
                    sx: { color: "#fff" },
                  }}
                />
              </Box>

              <Box className="form-group">
                <TextField
                  fullWidth
                  id="message"
                  name="message"
                  label={
                    <Typography component="span" className="form-label">
                      <MessageIcon
                        sx={{
                          fontSize: 20,
                          verticalAlign: "middle",
                          marginRight: 1,
                        }}
                      />
                      {FORM_TEXT.FIELDS.MESSAGE.LABEL}
                      <Typography
                        component="span"
                        className="required-asterisk"
                      >
                        *
                      </Typography>
                    </Typography>
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
                    sx: {
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      color: "#fff",
                    },
                  }}
                  InputLabelProps={{
                    sx: { color: "#fff" },
                  }}
                />
              </Box>

              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? (
                  <>
                    <Box className="loading-spinner" />
                    <Typography component="span">
                      {FORM_TEXT.SUBMIT_BUTTON.SENDING}
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography component="span">
                      {FORM_TEXT.SUBMIT_BUTTON.TEXT}
                    </Typography>
                    <Typography component="span">➤</Typography>
                  </>
                )}
              </button>
            </form>
          </Box>
        </Box>
      </Box>

      {showAlert && (
        <Box className={`alert alert-${getAlertType()}`}>
          {getAlertType() === "success" ? (
            <Typography component="span" className="alert-icon">
              ✓
            </Typography>
          ) : (
            <Typography component="span" className="alert-icon">
              ✕
            </Typography>
          )}
          <Typography component="span">{getAlertMessage()}</Typography>
        </Box>
      )}
    </>
  );
};

export default ContactForm;
