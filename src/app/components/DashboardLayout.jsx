// components/DashboardLayout.jsx
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ManageWidgets from "./ManageWidgets";

export default function DashboardLayout({ children, activeTab = "dashboard" }) {
  return (
    <main>
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Header />
        <div className="w-full bg-[#f4f5fa]  flex justify-end">
          <ManageWidgets />
        </div>

      </div>
    </div>
    </main>
  );
}
