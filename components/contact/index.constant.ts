// <================== Import Dependencies ==================>
import * as Yup from "yup";

// <================== CONTACT FORM UI TEXT ==================>
export const CONTACT_FORM_TEXT = {
  TITLE: "Get In Touch",
  SUBTITLE: "Let's Build Something Amazing Together",
  FIELDS: {
    NAME: {
      LABEL: "Your Name",
      PLACEHOLDER: "Enter your full name",
      ERROR_REQUIRED: "Name is required",
      ERROR_MIN_LENGTH: "Name must be at least 2 characters",
      ERROR_MAX_LENGTH: "Name must be less than 50 characters",
    },
    EMAIL: {
      LABEL: "Your Email",
      PLACEHOLDER: "Enter your email address",
      ERROR_REQUIRED: "Email is required",
      ERROR_INVALID: "Please enter a valid email address",
    },
    SUBJECT: {
      LABEL: "Subject",
      PLACEHOLDER: "What is this regarding?",
      ERROR_REQUIRED: "Subject is required",
      ERROR_MIN_LENGTH: "Subject must be at least 5 characters",
      ERROR_MAX_LENGTH: "Subject must be less than 100 characters",
    },
    MESSAGE: {
      LABEL: "Your Message",
      PLACEHOLDER: "Tell me more about your project or inquiry...",
      ERROR_REQUIRED: "Message is required",
      ERROR_MIN_LENGTH: "Message must be at least 20 characters",
      ERROR_MAX_LENGTH: "Message must be less than 1000 characters",
    },
  },
  SUBMIT_BUTTON: {
    TEXT: "Send Message",
    SENDING: "Sending...",
    SUCCESS: "Message Sent Successfully!",
  },
  SUCCESS_MESSAGE:
    "Thank you for your message! I'll get back to you within 24 hours.",
  ERROR_MESSAGE: "Oops! Something went wrong. Please try again later.",
};

// <================== VALIDATION SCHEMA ==================>
export const CONTACT_FORM_SCHEMA = Yup.object().shape({
  name: Yup.string()
    .min(2, CONTACT_FORM_TEXT.FIELDS.NAME.ERROR_MIN_LENGTH)
    .max(50, CONTACT_FORM_TEXT.FIELDS.NAME.ERROR_MAX_LENGTH)
    .required(CONTACT_FORM_TEXT.FIELDS.NAME.ERROR_REQUIRED),
  email: Yup.string()
    .email(CONTACT_FORM_TEXT.FIELDS.EMAIL.ERROR_INVALID)
    .required(CONTACT_FORM_TEXT.FIELDS.EMAIL.ERROR_REQUIRED),
  subject: Yup.string()
    .min(5, CONTACT_FORM_TEXT.FIELDS.SUBJECT.ERROR_MIN_LENGTH)
    .max(100, CONTACT_FORM_TEXT.FIELDS.SUBJECT.ERROR_MAX_LENGTH)
    .required(CONTACT_FORM_TEXT.FIELDS.SUBJECT.ERROR_REQUIRED),
  message: Yup.string()
    .min(20, CONTACT_FORM_TEXT.FIELDS.MESSAGE.ERROR_MIN_LENGTH)
    .max(1000, CONTACT_FORM_TEXT.FIELDS.MESSAGE.ERROR_MAX_LENGTH)
    .required(CONTACT_FORM_TEXT.FIELDS.MESSAGE.ERROR_REQUIRED),
});

// <================== INITIAL VALUES ==================>
export const INITIAL_FORM_VALUES = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

// <================== SOCIAL LINKS ==================>
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/sagarkashyap5587",
    icon: "github",
    color: "#333",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sagar-529198250",
    icon: "linkedin",
    color: "#0077b5",
  },
];
