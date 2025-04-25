"use client";

import { useState } from "react";
import Sidebar from "../navigation/sidebar";
import Header from "../navigation/header";
import { Button } from "../ui/button";
import { FilterIcon, LayoutDashboard, LayoutList, X } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background relative">
      <Sidebar />

      <div className="flex flex-col flex-grow overflow-hidden relative z-0">
        <Header />

        <div className="w-full flex justify-end mt-2 pr-4">
          <Button
            variant="ghost"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 bg-white border border-purple-500 text-purple-800 font-semibold text-sm px-4 py-1 rounded-md shadow-sm hover:bg-purple-50"
          >
            <span className="bg-purple-100 text-purple-700 p-1 rounded">
              <LayoutList className="w-4 h-4" />
            </span>
            <span className="bg-purple-100 text-purple-700 p-1 rounded">
              <LayoutDashboard className="w-4 h-4" />
            </span>
            Manage Widgets
          </Button>
        </div>

        {/* Backdrop Blur */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Sliding Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-[350px] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Icon */}
          <div className="flex justify-end p-4">
            <X className="cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>

          {/* Content */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-purple-800 mb-2">
              Manage Widget
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Personalize your dashboard by managing widgets, adding, removing,
              or reordering them to fit your workflow.
            </p>

            {/* Widget List */}
            <div className="flex flex-col gap-4">
              {[
                "Programs",
                "Group Calls",
                "Mentors",
                "Recent Activities",
                "Application",
                "Earnings",
                "Forum",
                "Program Analysis",
              ].map((label, idx) => (
                <label key={idx} className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">{label}</span>
                  <input
                    type="checkbox"
                    defaultChecked={idx < 5}
                    className="w-4 h-4 text-purple-600"
                  />
                </label>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-2 mt-8">
              <Button className="bg-purple-600 text-white hover:bg-purple-700 w-full">
                Save Changes
              </Button>
              <Button
                variant="outline"
                className="w-full border-purple-600 text-purple-600 hover:bg-purple-50"
              >
                Reset to Default
              </Button>
            </div>
          </div>
        </div>

        <main className="flex-grow overflow-auto p-2 md:p-6">{children}</main>
      </div>
    </div>
  );
}
