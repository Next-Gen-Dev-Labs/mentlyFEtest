"use client";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import NotificationHeader from "./components/notificationHeader";
import ProgramAndGroupCallsCard from "./components/ProgramAndGroupCallsCard";


export default function Dashboard() {
  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <div className="w-[260px] bg-purple-900 text-white">
        <Sidebar />
      </div>

      {/* Main Area */}
      <div className="flex flex-col flex-1 bg-gray-100 overflow-hidden">

         {/* NotificationHeader */}
         <div className="h-[70px]  shadow px-6 flex items-center border-b-gray-600 border-2">
          <NotificationHeader />
        </div>
        {/* Header */}
        <div className="h-[70px] bg-white shadow px-6 flex items-center">
          <Header />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto px-6 py-4">
          <ProgramAndGroupCallsCard/>
       

        </div>
      </div>
    </div>
  );
}
