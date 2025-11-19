"use client";

import { useState } from "react";

export const usePortfolio = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleDownloadResume = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setShowAlert(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setShowAlert(false), 3000);
  };
  return {
    activeTab,
    setActiveTab,
    formData,
    showAlert,
    handleDownloadResume,
    handleInputChange,
    handleSubmit,
  };
};
