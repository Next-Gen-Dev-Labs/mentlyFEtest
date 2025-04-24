"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./components/layout/Sidebar";
import useResponsive from "./hooks/useResponsive";
import { LayoutProvider } from "./context/LayoutContext";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const { isMobile } = useResponsive();

  useEffect(() => {
    if (isMobile) {
      setIsSidebarVisible(false);
    } else {
      setIsSidebarVisible(true);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsSidebarVisible(!isSidebarVisible);
    } else {
      setIsSidebarExpanded(!isSidebarExpanded);
    }
  };

  const layoutContextValue = {
    toggleSidebar,
    isSidebarExpanded,
    isSidebarVisible,
    isMobile,
  };

  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-gray-50">
        <LayoutProvider initialValues={layoutContextValue}>
          <div className="h-screen flex flex-col overflow-hidden">
            <div className="flex flex-1 overflow-hidden relative">
              {/* Sidebar  */}
              <AnimatePresence initial={false} mode="sync">
                {isSidebarVisible && (
                  <motion.div
                    initial={{
                      x: isMobile ? -280 : 0,
                      opacity: isMobile ? 0 : 1,
                    }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: isMobile ? -280 : 0, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 28,
                      mass: 1,
                      velocity: 0,
                    }}
                    className={`fixed inset-y-0 left-0 z-20 ${
                      isSidebarExpanded ? "w-64" : "w-20"
                    } shadow-xl md:relative md:shadow-md transition-width max-lg:z-50`}
                    style={{
                      willChange: "transform, opacity",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <Sidebar
                      isExpanded={isSidebarExpanded}
                      toggleSidebar={toggleSidebar}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Main Content */}
              <motion.div
                layout="position"
                layoutRoot
                className="flex-1 flex flex-col overflow-hidden"
                initial={false}
                animate={{
                  marginLeft: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 38,
                  mass: 0.8,
                }}
                style={{ willChange: "margin" }}
              >
                {children}
              </motion.div>

              {/* Mobile Sidebar Overlay  */}
              <AnimatePresence>
                {isMobile && isSidebarVisible && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-10 backdrop-blur-sm bg-black/30"
                    style={{
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                    }}
                    onClick={() => setIsSidebarVisible(false)}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </LayoutProvider>
      </body>
    </html>
  );
}
