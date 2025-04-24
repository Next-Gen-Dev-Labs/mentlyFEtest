"use client";
import { useState } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { WelcomeBanner } from "@/components/dashboard/welcome-banner";
import { ProgramsSection } from "@/components/dashboard/programs-section";
import { GroupCallsSection } from "@/components/dashboard/group-calls-section";
import { ApplicationsSection } from "@/components/dashboard/applications-section";
import { MentorsSection } from "@/components/dashboard/mentors-section";
import { UsersSection } from "@/components/dashboard/users-section";
import { RecentActivitiesSection } from "@/components/dashboard/recent-activities-section";
import { WidgetSidebar } from "@/components/dashboard/widget-sidebar";
import { LayoutGrid, Image } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Dashboard() {
  const [isWidgetSidebarOpen, setIsWidgetSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <AnimatePresence>
        {isWidgetSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white/20 backdrop-blur-md z-40"
          />
        )}
      </AnimatePresence>
      
      <WidgetSidebar 
        isOpen={isWidgetSidebarOpen} 
        onClose={() => setIsWidgetSidebarOpen(false)} 
      />
      
      <div className={`transition-all duration-200 ${isWidgetSidebarOpen ? 'blur-sm' : ''}`}>
        <Sidebar />
      </div>
      
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-200 ${isWidgetSidebarOpen ? 'blur-sm' : ''}`}>
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="flex justify-end items-center space-x-4 mb-4">
            <button 
              onClick={() => setIsWidgetSidebarOpen(true)}
              className="flex items-center space-x-2 text-gray-600 hover:text-violet-600 transition-colors"
            >
              <LayoutGrid className="h-5 w-5" />
              <Image className="h-6 w-6 text-violet-600" />
              <h3 className="text-2xl font-bold text-[#1F0954]">Manage Widgets</h3>
            </button>
          </div>

          <WelcomeBanner />
          
          <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-6 mt-6">
            <div className="space-y-6">
              <ProgramsSection />
              <UsersSection />
            </div>
            <div>
              <GroupCallsSection />
              <div className="space-y-6 mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-[55%_%] gap-2">
                  <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-2">
                    <ApplicationsSection />
                    <div className="block">
                      <MentorsSection />
                      <RecentActivitiesSection />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}