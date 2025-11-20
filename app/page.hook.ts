"use client";

import { useState } from "react";

export const usePortfolio = () => {
  const [activeTab, setActiveTab] = useState(0);

  return {
    activeTab,
    setActiveTab,
  };
};
