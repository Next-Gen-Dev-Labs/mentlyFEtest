"use client"

import Sidebar from "@/components/layout/SideBar";
import TopBar from "@/components/layout/TopBar";
import ComingSoon from "@/components/ui/ComingSoon/ComingSoon";

export default function Rewards() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1">
        <TopBar />
        <div className="p-6">
          <ComingSoon pageName="Rewards" />
        </div>
      </main>
    </div>
  )
}