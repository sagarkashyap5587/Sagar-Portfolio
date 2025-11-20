// <================== Import Dependencies ==================>
"use client";

import { useState } from "react";

// <================== Use Portfolio Hooks ==================>
export const usePortfolio = () => {
  // <================== All States==================>
  const [activeTab, setActiveTab] = useState(0);

  // <================== Retun Data ==================>
  return {
    activeTab,
    setActiveTab,
  };
};
