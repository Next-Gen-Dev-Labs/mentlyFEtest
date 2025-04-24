// app/page.js
import Header from "./components/Header";
import ManageWidgets from "./components/ManageWidgets";
import WelcomeBanner from "./components/WelcomeBanner";
import ProgramsSection from "./components/ProgramsSection";
import GroupCallsSection from "./components/GroupCallsSection";
import ApplicationsSection from "./components/ApplicationsSection";
import MentorsSection from "./components/MentorsSection";
import RecentActivitiesSection from "./components/RecentActivitiesSection";
import UsersChartSection from "./components/UsersChartSection";
import DashboardLayout from "./components/DashboardLayout";

export default function DashboardPage() {
  return (
    <div className="flex bg-[#f4f5fa]">
      <div className="flex flex-col relative w-full">
        <main className="flex-1 overflow-y-auto p-4 md:p-6 md:pl-12 bg-gray-100">
          <div className="w-full bg-[#f4f5fa] hidden md:flex justify-end">
            <ManageWidgets />
          </div>

          {/* <div className="hidden xl:flex items-center justify-between mb-4">
          <WelcomeBanner username="Blessing" />
          </div> */}
          
          {/* Mobile welcome banner */}
          <div className="xl:hidden mb-4">
            <h1 className="text-2xl font-bold flex items-center">
              <span className="text-[#1F0954]">Welcome Blessing</span>
              <span className="ml-2 text-yellow-400">👋</span>
            </h1>
          </div>
          
          {/* Desktop welcome banner */}
          <div className="hidden xl:block">
            <WelcomeBanner username="Blessing" />
          </div>
          
          {/* Main content area with responsive layout */}
          <div className="flex flex-col xl:flex-row gap-4 xl:gap-[2%]">
            {/* Left column - becomes full width on medium and small screens */}
            <div className="w-full xl:w-[339px] flex flex-col">
              <div className="bg-white rounded xl p-4 mb-6">
                <ProgramsSection />
              </div>
              <div className="">
                <UsersChartSection />  
              </div>
            </div>
            
            {/* Right column - becomes full width on medium and small screens */}
            <div className="flex-1">
              <div className="bg-white rounded xl mb-4">
                <GroupCallsSection />
              </div>
              
              {/* Split section - becomes stacked on medium and small screens */}
              <div className="flex flex-col xl:flex-row gap-4">
                <div className="bg-white w-full xl:w-[60%] mb-4 md:mb-6">
                  <ApplicationsSection />
                </div>
                <div className="w-full xl:w-[40%]">
                  <div className="bg-white p-4 rounded-xl mb-4">
                    <MentorsSection />
                  </div>
                  <div className="bg-white p-4 rounded-xl">
                    <RecentActivitiesSection />
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