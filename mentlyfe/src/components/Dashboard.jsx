"use client";

import { motion } from "framer-motion";
import ProgramSection from "./ProgramSection";
import GroupCallSection from "./GroupCallSection";
import ApplicationSection from "./ApplicationSection";
import MentorSection from "./MentorSection";
import RecentActivitiesSection from "./RecentActivitiesSection";
import UserSection from "./UserSection";
import WidgetPanel from "./WidgetPanel";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Dashboard() {
  return (
    <div>
      <WidgetPanel />

      <motion.div
        className="h-[calc(100vh-64px)] p-4 md:p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          {/* Left sidebar - 30% width */}
          <motion.div
            className="w-full lg:w-[30%] lg:min-w-[300px] lg:max-w-[400px] flex flex-col gap-4"
            variants={itemVariants}
          >
            <motion.div
              className="bg-white rounded-lg shadow"
              variants={itemVariants}
            >
              <ProgramSection />
            </motion.div>
            <motion.div
              className="bg-white rounded-lg shadow mt-8 md:mt-4"
              variants={itemVariants}
            >
              <UserSection />
            </motion.div>
          </motion.div>

          {/* Right content area - 70% width */}
          <motion.div
            className="w-full lg:w-[70%] flex flex-col gap-4"
            variants={itemVariants}
          >
            <motion.div
              className="min-h-[200px] bg-white rounded-lg shadow"
              variants={itemVariants}
            >
              <GroupCallSection />
            </motion.div>

            {/* Application and Mentor container */}
            <motion.div
              className="flex-1 flex flex-col md:flex-row gap-4"
              variants={itemVariants}
            >
              {/* Application section */}
              <motion.div
                className="w-full md:w-[60%]"
                variants={itemVariants}
                transition={{ duration: 0.2 }}
              >
                <div className="h-full p-4 bg-white rounded-lg shadow">
                  <ApplicationSection />
                </div>
              </motion.div>

              {/* Mentor and Activities stack */}
              <motion.div
                className="w-full md:w-[40%] flex flex-col gap-4"
                variants={itemVariants}
              >
                <motion.div className="flex-1" transition={{ duration: 0.2 }}>
                  <div className="h-full p-4 bg-white rounded-lg shadow">
                    <MentorSection />
                  </div>
                </motion.div>
                <motion.div className="flex-1" transition={{ duration: 0.2 }}>
                  <div className="h-full p-4 bg-white rounded-lg shadow">
                    <RecentActivitiesSection />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
