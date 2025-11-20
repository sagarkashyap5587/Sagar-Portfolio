// <================== Import Dependencies ==================>
"use client";

import { useState, useCallback } from "react";
import { useFormik } from "formik";
import {
  INITIAL_FORM_VALUES,
  CONTACT_FORM_SCHEMA,
  CONTACT_FORM_TEXT,
} from "./index.constant";

// <================== Use Contact Form Hook ==================>
export const useContactForm = () => {
  // <================== All States ==================>
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [showAlert, setShowAlert] = useState(false);

  // <================== Helpers Functions ==================>
  const handleFormSubmit = useCallback(
    async (values: typeof INITIAL_FORM_VALUES) => {
      setIsSubmitting(true);
      setSubmitStatus("idle");

      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Form submitted:", values);
        resetForm();
        setSubmitStatus("success");
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
      } catch (error) {
        console.error("Form submission error:", error);
        setSubmitStatus("error");
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
      } finally {
        setIsSubmitting(false);
      }
    },
    []
  );

  const formik = useFormik({
    initialValues: INITIAL_FORM_VALUES,
    validationSchema: CONTACT_FORM_SCHEMA,
    onSubmit: handleFormSubmit,
    validateOnChange: true,
    validateOnBlur: true,
  });

  const getFieldProps = useCallback(
    (fieldName: keyof typeof INITIAL_FORM_VALUES) => ({
      ...formik.getFieldProps(fieldName),
      error: formik.touched[fieldName] && Boolean(formik.errors[fieldName]),
      helperText: formik.touched[fieldName] ? formik.errors[fieldName] : "",
    }),
    [formik]
  );

  const resetForm = useCallback(() => {
    formik.resetForm();
    setSubmitStatus("idle");
    setShowAlert(false);
  }, [formik]);

  const getAlertMessage = useCallback(() => {
    switch (submitStatus) {
      case "success":
        return CONTACT_FORM_TEXT.SUCCESS_MESSAGE;
      case "error":
        return CONTACT_FORM_TEXT.ERROR_MESSAGE;
      default:
        return "";
    }
  }, [submitStatus]);

  const getAlertType = useCallback(() => {
    switch (submitStatus) {
      case "success":
        return "success";
      case "error":
        return "error";
      default:
        return "";
    }
  }, [submitStatus]);

  // <================== Return Data ==================>
  return {
    formik,
    isSubmitting,
    submitStatus,
    showAlert,
    getFieldProps,
    getAlertMessage,
    getAlertType,
    resetForm,
    FORM_TEXT: CONTACT_FORM_TEXT,
  };
};

export type UseContactFormReturn = ReturnType<typeof useContactForm>;
