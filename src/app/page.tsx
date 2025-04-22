"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import WelcomeBanner from "./components/dashboard/WelcomeBanner";
import ProgramsList from "./components/dashboard/ProgramsList";
import GroupCalls from "./components/dashboard/GroupCalls";
import MentorsList from "./components/dashboard/MentorsList";
import UserStats from "./components/dashboard/UserStats";
import RecentActivities from "./components/dashboard/RecentActivities";
import Applications from "./components/dashboard/Applications";
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

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onManageWidgets={() => setIsWidgetModalOpen(true)} />

        <main className="flex-1 overflow-y-auto p-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <WelcomeBanner name="Blessing" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {activeWidgets.programs && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <ProgramsList />
              </motion.div>
            )}

            {activeWidgets.groupCalls && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <GroupCalls />
              </motion.div>
            )}

            {activeWidgets.applications && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Applications />
              </motion.div>
            )}

            {activeWidgets.mentors && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <MentorsList />
              </motion.div>
            )}

            {activeWidgets.recentActivities && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <RecentActivities />
              </motion.div>
            )}
          </div>

          {activeWidgets.programAnalysis && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6"
            >
              <UserStats />
            </motion.div>
          )}
        </main>
      </div>

      <ManageWidgetsModal
        isOpen={isWidgetModalOpen}
        closeModal={() => setIsWidgetModalOpen(false)}
        widgets={activeWidgets}
        setWidgets={setActiveWidgets}
      />
    </div>
  );
}
