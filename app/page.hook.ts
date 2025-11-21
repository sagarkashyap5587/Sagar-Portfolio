// <================== Import Dependencies ==================>
"use client";

import { useState } from "react";

// <================== Use Portfolio Hooks ==================>
export const usePortfolio = () => {
  // <================== All States==================>
  const [activeTab, setActiveTab] = useState(0);
  const [isTabLoading, setIsTabLoading] = useState(false);
  const [isProjectLoading, setIsProjectLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Loading...");
  const [loaderType, setLoaderType] = useState<"full" | "content">("full");

  // <================== Functions==================>
  const handleTabSwitch = (tabId: number, tabName: string) => {
    setIsTabLoading(true);
    setLoaderType("content"); // Use content loader for tabs
    setLoadingMessage(`Opening ${tabName}...`);

    // Simulate loading delay for tab switching
    setTimeout(() => {
      setActiveTab(tabId);
      setIsTabLoading(false);
    }, 800); // 800ms delay for smooth transition
  };

  const handleProjectOpen = (projectUrl: string, projectName: string) => {
    setIsProjectLoading(true);
    setLoaderType("full"); // Use full loader for projects
    setLoadingMessage(`Opening ${projectName}...`);

    // Simulate loading delay for project opening
    setTimeout(() => {
      window.open(projectUrl, '_blank');
      setIsProjectLoading(false);
    }, 1200); // 1.2s delay for project opening
  };

  // <================== Return Data ==================>
  return {
    activeTab,
    setActiveTab: handleTabSwitch,
    isTabLoading,
    isProjectLoading,
    loadingMessage,
    handleProjectOpen,
    loaderType,
    isLoading: isTabLoading || isProjectLoading,
  };
};
