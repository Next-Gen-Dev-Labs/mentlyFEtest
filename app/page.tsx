import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SubHeader from "@/components/SubHeader";
import ProgramsSection from "@/sections/ProgramSection";

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 sticky top-0 h-screen overflow-y-auto">
        <Sidebar/>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 overflow-y-auto">
        <Header/>
        <SubHeader/>
        <div className="grid md:grid-cols-3 grid-cols-1 grid-rows-3 gap-2 h-full p-4">
          <div className=" row-span-2 col-span-1">
            <ProgramsSection/>
          </div>
          {/* Row 1 */}
          <div className="grid md:grid-cols-3 md:col-span-2 row-span-1 gap-2">
            <div className=" col-span-2 bg-red-200 flex items-center justify-center">
              Programs
            </div>
            <div className="bg-blue-200 flex items-center justify-center">
              Group Calls
            </div>
          </div>
          {/* Row 2 */}
          <div className=" row-span-2 bg-green-200 flex items-center justify-center">
            Applications
          </div>
          <div className=" row-span-2 bg-yellow-200 flex items-center justify-center">
            Mentors
          </div>
          <div className=" row-span-2 bg-pink-200 flex items-center justify-center">
            Recent Activities
          </div>

        </div>
      </main>
    </div>
  )
}
