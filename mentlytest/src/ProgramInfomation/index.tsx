"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Leftsection from "@/component/sections/leftsection";
import Rightsection from "@/component/sections/rightsection";

const ProgramInfomation = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [showRightSection, setShowRightSection] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const programInfo = {
    title: "Mentorship Program",
    subtitle: "Mastering the work life Equation",
    date: "2024-10-20",
    time: "2:00 PM",
    location: "In Person",
    description:
      "UI/UX Design check-ins with Faith help beginners understand the fundamentals and build a Design Career.",
    sections: [
      {
        title: "Program Information",
        items: [
          { icon: "📝", text: "Content" },
          { icon: "🎯", text: "Content" },
          { icon: "💡", text: "Content" },
        ],
      },
    ],
    bulletPoints: Array(6).fill("Content"),
  };

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[37%_60%] gap-8 w-full">
      
          <div
            className={`lg-block bg-gray-100 ${
              isMobileView ? (showRightSection ? "hidden" : "block") : "block"
            }`}

          >
            {" "}
            <Leftsection
              programInfo={programInfo}
              onSave={() => setShowRightSection(true)}
            />
          </div>

          <div
            className={` ${
              isMobileView ? (!showRightSection ? "hidden" : "block") : "block"
            }`}

          >
            <Rightsection
              programInfo={programInfo}
              onEdit={() => setShowRightSection(false)}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProgramInfomation;
