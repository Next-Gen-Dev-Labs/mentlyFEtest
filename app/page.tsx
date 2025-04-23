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
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 sticky top-0 h-screen overflow-y-auto">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 overflow-y-auto ">
        <Header />
        <SubHeader />
        <div className="grid md:grid-cols-3 grid-cols-1 grid-rows-3 gap-2 p-4">
          <div className=" row-span-2 col-span-1">
            <ProgramsSection />
          </div>
          {/* Row 1 */}
          <div className=" col-span-2">
            <GroupCalls />
          </div>
          {/* Row 2 */}
          <div className="row-span-2 col-span-2 grid grid-cols-5">
            <div className=" col-span-3">
              <Applications />
            </div>
            <div className="col-span-2 flex flex-col gap-6 h-[23rem] bg-red-400">
              <MentorsSection/>
              <RecentActivities/>
            </div>
          </div>

          <div className="row-span-1 -mt-14 h-[23rem]">
            <UserAnalytics/>
          </div>

        </div>
      </main>
    </div>
  )
}
