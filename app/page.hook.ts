"use client";

import { useState } from "react";

export const usePortfolio = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleDownloadResume = () => {
    // Handle download resume functionality
    window.open('/resume.pdf', '_blank');
  };

  return {
    activeTab,
    setActiveTab,
    handleDownloadResume,
  };
};
