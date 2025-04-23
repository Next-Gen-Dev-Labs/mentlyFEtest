import UsersStats from "@/components/Activities";
import RecentActivities from "@/components/Activities";
import Applications from "@/components/Application";
import GroupCalls from "@/components/GroupCall";
import Header from "@/components/Header";
import MentorsSection from "@/components/Mentor";
import Sidebar from "@/components/Sidebar";
import SubHeader from "@/components/SubHeader";
import UserAnalytics from "@/components/UserAnanlytics";
import ProgramsSection from "@/sections/ProgramSection";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen" style={{ width: '100vw' }}>
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <main className="flex-1 bg-gray-50 overflow-y-auto" style={{ marginLeft: 'var(--sidebar-width, 16rem)', transition: 'margin-left 0.3s' }}>
        <Header />
        <SubHeader />
        <div className="grid grid-cols-3 px-4 gap-2">
          <div className="col-span-1 flex flex-col gap-2">
            <ProgramsSection />
            <UserAnalytics />
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <GroupCalls />
            <div className="flex gap-2">
              <Applications />
              <div className="flex flex-col">
                <MentorsSection />
                <RecentActivities />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
