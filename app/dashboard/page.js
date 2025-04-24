"use client"

import { useState } from 'react'
import Sidebar from "@/components/layout/SideBar";
import TopBar from "@/components/layout/TopBar";
import Widgets, { defaultWidgetPositions } from "@/components/dashboard/Widgets";
import ManageWidgetModal from "@/components/dashboard/ManageWidgetModal";

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false)
  const [activeWidgets, setActiveWidgets] = useState({
    programs: true,
    groupCalls: true,
    applications: true,
    mentors: true,
    recentActivities: true,
    usersChart: true,
  })

  // State to track widget positions
  const [widgetPositions, setWidgetPositions] = useState(defaultWidgetPositions)

  // Handle widget position changes
  const handlePositionsChange = (newPositions) => {
    setWidgetPositions(newPositions);
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 ">
        <TopBar onManageWidgets={() => setShowModal(true)} />
        <div className="p-6 bg-[#F4F5FA]">

          <div className="flex justify-between items-center mb-6 bg-[#6F01D0] px-4 py-2 rounded-xl">
            <h1 className="text-white text-2xl font-semibold">Welcome Aboard, Blessing 👋</h1>
            <h2 className="text-[#BDBDBD] text-xl font-semibold">We’re thrilled to have you join Techrity Team!</h2>

            <button

                className="px-6 py-4  text-[#1F0954] bg-white font-bold rounded-lg"
            >
              Update Profile
            </button>
          </div>

          <Widgets 
            activeWidgets={activeWidgets} 
            onPositionsChange={handlePositionsChange}
            initialPositions={widgetPositions}
          />
        </div>

      </main>
      {showModal && (
        <ManageWidgetModal
          activeWidgets={activeWidgets}
          setActiveWidgets={setActiveWidgets}
          widgetPositions={widgetPositions}
          setWidgetPositions={setWidgetPositions}
          defaultPositions={defaultWidgetPositions}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}
