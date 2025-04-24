"use client"

import Sidebar from "@/components/layout/SideBar";
import TopBar from "@/components/layout/TopBar";
import ComingSoon from "@/components/ui/ComingSoon/ComingSoon";

export default function Programs() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1">
        <TopBar />
        <div className="p-6">
          <ComingSoon pageName="Programs" />
        </div>
      </main>
    </div>
  )
}