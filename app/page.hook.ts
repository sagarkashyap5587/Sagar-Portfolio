// <================== Import Dependencies ==================>
"use client";

import { useEffect, useState } from "react";

// <================== Use Portfolio Hooks ==================>
export const usePortfolio = () => {
  // <================== All States==================>
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const contentArea = document.querySelector(".content-area");
    if (contentArea) {
      contentArea.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [activeTab]);

  // <================== Retun Data ==================>
  return {
    activeTab,
    setActiveTab,
  };
};
