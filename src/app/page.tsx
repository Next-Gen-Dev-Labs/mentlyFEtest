"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/layout/Header";
import WelcomeBanner from "./components/dashboard/WelcomeBanner";
import ProgramsList from "./components/dashboard/ProgramsList";
import GroupCalls from "./components/dashboard/GroupCalls";
import MentorsList from "./components/dashboard/MentorsList";
import UserStats from "./components/dashboard/UserStats";
import RecentActivities from "./components/dashboard/RecentActivities";
import Applications from "./components/dashboard/Applications";
import ActivityFeed from "./components/dashboard/ActivityFeed";
import ManageWidgetsModal from "./components/modals/ManageWidgetsModal";

export default function Dashboard() {
  const [isWidgetModalOpen, setIsWidgetModalOpen] = useState(false);
  const [activeWidgets, setActiveWidgets] = useState({
    programs: true,
    groupCalls: true,
    mentors: true,
    recentActivities: true,
    applications: true,
    earnings: false,
    forum: false,
    programAnalysis: false,
  });

  const [columns, setColumns] = useState(2);

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setColumns(1);
      } else if (window.innerWidth < 1280) {
        setColumns(1);
      } else {
        setColumns(2);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex-1 flex flex-col h-screen bg-gray-50">
      <Header onManageWidgets={() => setIsWidgetModalOpen(true)} />

      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <WelcomeBanner name="Blessing" />
        </motion.div>

        <div
          className={`grid grid-cols-1 ${
            columns > 1 ? "lg:grid-cols-2" : ""
          } gap-6 mt-6`}
        >
          {activeWidgets.programs && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="col-span-1"
            >
              <ProgramsList />
            </motion.div>
          )}

          {activeWidgets.groupCalls && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="col-span-1"
            >
              <GroupCalls />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`${columns > 1 ? "" : "lg:col-span-2"}`}
          >
            <UserStats />
          </motion.div>

          {activeWidgets.mentors && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="col-span-1"
            >
              <MentorsList />
            </motion.div>
          )}

          {activeWidgets.applications && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="col-span-1"
            >
              <Applications />
            </motion.div>
          )}

          {activeWidgets.recentActivities && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="col-span-1"
            >
              <ActivityFeed />
            </motion.div>
          )}
        </div>
      </main>

      <ManageWidgetsModal
        isOpen={isWidgetModalOpen}
        closeModal={() => setIsWidgetModalOpen(false)}
        widgets={activeWidgets}
        setWidgets={setActiveWidgets}
      />
    </div>
  );
}
