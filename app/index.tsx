"use client";

import { useState, useEffect } from "react";
import { useMobile } from "@/hooks/UseMobile";
import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";
import ManageWidget from "@/components/ManageWidget";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isWidgetManagerOpen, setIsWidgetManagerOpen] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleOpenWidgetManager = () => {
    setIsWidgetManagerOpen(true);
  };

  return (
    <div className="flex">
      <div className="flex flex-1 overflow-auto">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Main
          toggleSidebar={toggleSidebar}
          onManageWidgets={handleOpenWidgetManager}
        />
        {isWidgetManagerOpen && (
          <ManageWidget onClose={() => setIsWidgetManagerOpen(false)} />
        )}
      </div>
    </div>
  );
}
