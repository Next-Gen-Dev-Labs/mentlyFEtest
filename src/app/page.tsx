"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/layout/Header";
import WelcomeBanner from "./components/dashboard/WelcomeBanner";
import ProgramsList from "./components/dashboard/ProgramsList";
import GroupCalls from "./components/dashboard/GroupCalls";
import MentorsList from "./components/dashboard/MentorsList";
import UserStats from "./components/dashboard/UserStats";
import Applications from "./components/dashboard/Applications";
import ActivityFeed from "./components/dashboard/ActivityFeed";
import ManageWidgetsModal from "./components/modals/ManageWidgetsModal";
import { useLayoutContext } from "./context/LayoutContext";
import { BsGrid1X2 } from "react-icons/bs";
import { TfiLayoutListThumb } from "react-icons/tfi";

export default function Dashboard() {
  const [isWidgetModalOpen, setIsWidgetModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const { toggleSidebar, isSidebarExpanded, widgets, setWidgets } =
    useLayoutContext();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedViewMode = localStorage.getItem("dashboardViewMode");
      if (savedViewMode) {
        setViewMode(savedViewMode as "grid" | "list");
      }
    }
  }, []);

  const handleViewModeChange = (mode: "grid" | "list") => {
    setViewMode(mode);
    if (typeof window !== "undefined") {
      localStorage.setItem("dashboardViewMode", mode);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-screen bg-gray-50">
      <Header
        toggleSidebar={toggleSidebar}
        isSidebarExpanded={isSidebarExpanded}
      />
      <div className="w-full p-4 md:p-6 flex flex-wrap items-center justify-end gap-4 md:gap-6">
        <div className="flex items-center gap-4 md:gap-6 max-md:hidden">
          <motion.button
            onClick={() => handleViewModeChange("list")}
            whileHover={{ scale: 1.1 }}
            className={viewMode === "list" ? "text-[#6F01D0]" : "text-gray-400"}
          >
            <TfiLayoutListThumb className="w-6 h-6 rotate-180" />
          </motion.button>
          <motion.button
            onClick={() => handleViewModeChange("grid")}
            whileHover={{ scale: 1.1 }}
            className={viewMode === "grid" ? "text-[#6F01D0]" : "text-gray-400"}
          >
            <BsGrid1X2 className="w-6 h-6" />
          </motion.button>
        </div>

        <motion.button
          className="font-bold text-[#1F0954] text-lg"
          onClick={() => setIsWidgetModalOpen(true)}
          whileHover={{ scale: 1.05 }}
        >
          Manage Widget
        </motion.button>
      </div>
      <main
        className="flex-1 overflow-y-auto pt-0 pb-4 px-4 md:px-6 md:pb-6 scrollbar-hide"
        id="main-content"
      >
        {/* Welcome Banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <WelcomeBanner name="Blessing" />
        </motion.div>

        {/* Main Content Grid */}
        <div
          className={`mt-6 ${
            viewMode === "grid"
              ? "grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-12 auto-rows-min"
              : "flex flex-col gap-6"
          }`}
        >
          {/* Programs */}
          {widgets.programs && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className={
                viewMode === "grid"
                  ? "lg:row-start-1 lg:col-start-1 md:col-span-1 lg:col-span-5 row-span-2 w-full"
                  : "w-full"
              }
            >
              <ProgramsList viewmode={viewMode} />
            </motion.div>
          )}

          {/* Group Calls  */}
          {widgets.groupCalls && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={
                viewMode === "grid"
                  ? "md:col-span-1 lg:row-start-1 lg:col-start-6 lg:col-span-7"
                  : "w-full"
              }
            >
              <GroupCalls />
            </motion.div>
          )}

          {/* User Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={
              viewMode === "grid"
                ? "md:col-span-1 lg:col-span-5 lg:row-start-3 lg:col-start-1"
                : "w-full"
            }
          >
            <UserStats />
          </motion.div>

          {/* Applications  */}
          {widgets.applications && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className={
                viewMode === "grid"
                  ? "md:col-span-1 lg:col-span-4 lg:row-start-2 lg:col-start-6 row-span-2 md:self-stretch"
                  : "w-full"
              }
            >
              <Applications />
            </motion.div>
          )}

          {/* Mentors List  */}
          {widgets.mentors && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className={
                viewMode === "grid"
                  ? "md:col-span-1 lg:col-span-3 lg:row-start-2 lg:col-start-10"
                  : "w-full"
              }
            >
              <MentorsList />
            </motion.div>
          )}

          {/* Activity Feed */}
          {widgets.recentActivities && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className={
                viewMode === "grid"
                  ? "md:col-span-1 lg:col-span-3 lg:col-start-10 lg:row-start-3"
                  : "w-full"
              }
            >
              <ActivityFeed />
            </motion.div>
          )}
        </div>
      </main>

      <ManageWidgetsModal
        isOpen={isWidgetModalOpen}
        closeModal={() => setIsWidgetModalOpen(false)}
      />
    </div>
  );
}
