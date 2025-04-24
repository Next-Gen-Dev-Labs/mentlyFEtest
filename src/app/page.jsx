"use client"

import Sidebar from "../component/Sidebar"
import Navbar from "../component/Navbar"
import WelcomeBanner from "../component/WelcomeBanner"
import DashboardContent from "../component/DashboardContents"
import ManageWidget from "@/component/ManageWidget";


function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 bg-gray-50 overflow-y-auto">
        <ManageWidget />
          <WelcomeBanner />
          <DashboardContent />
        </main>
      </div>
    </div>
  )
}

export default App
