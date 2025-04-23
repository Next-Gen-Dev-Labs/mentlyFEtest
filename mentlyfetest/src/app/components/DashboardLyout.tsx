
"use client"
import { UserPlus, CalendarDays, Video, Users, LineChart, Settings, LogOut } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#2C007F] text-white p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-8">Techrity</h1>
          <nav className="space-y-4">
            <a href="#" className="flex items-center gap-2 p-2 rounded bg-white text-[#2C007F] font-semibold">
              <UserPlus size={20} /> Dashboard
            </a>
            <a href="#" className="flex items-center gap-2 p-2 hover:bg-white hover:text-[#2C007F] rounded">
              <CalendarDays size={20} /> Programs
            </a>
            <a href="#" className="flex items-center gap-2 p-2 hover:bg-white hover:text-[#2C007F] rounded">
              <Video size={20} /> Activities
            </a>
            <a href="#" className="flex items-center gap-2 p-2 hover:bg-white hover:text-[#2C007F] rounded">
              <Users size={20} /> Users
            </a>
            <a href="#" className="flex items-center gap-2 p-2 text-gray-400 cursor-not-allowed">
              <LineChart size={20} /> Analytics (Coming Soon)
            </a>
          </nav>
        </div>
        <div className="space-y-2">
          <button className="w-full flex items-center gap-2 p-2 hover:bg-white hover:text-[#2C007F] rounded">
            <Settings size={20} /> Settings
          </button>
          <button className="w-full flex items-center gap-2 p-2 hover:bg-white hover:text-[#2C007F] rounded">
            <LogOut size={20} /> Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        {/* Header */}
        <div className="bg-white p-4 rounded flex justify-between items-center shadow">
          <h2 className="text-xl font-bold">Welcome Aboard, Blessing 👋</h2>
          <button className="bg-[#7F56D9] text-white px-4 py-2 rounded">Update Profile</button>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
          {/* Programs */}
          <section className="col-span-1 bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Programs</h3>
            <div className="space-y-2">
              <div className="border p-2 rounded">
                <p className="font-semibold">UI/UX Fundamentals</p>
                <p className="text-sm text-gray-500">Hands-on guide for designers</p>
              </div>
              <div className="border p-2 rounded">
                <p className="font-semibold">Colour Hack Group Call</p>
                <p className="text-sm text-gray-500">Practical group call for color theory</p>
              </div>
            </div>
          </section>

          {/* Group Calls */}
          <section className="col-span-1 bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Group Calls</h3>
            <div className="space-y-2">
              <div className="border p-2 rounded">
                <p className="font-semibold">Weekly Product Demo</p>
                <p className="text-sm text-gray-500">July 30, 9:00 - 11:00AM</p>
                <button className="text-sm text-[#7F56D9] font-medium">Join Now</button>
              </div>
              <div className="border p-2 rounded">
                <p className="font-semibold">UX Strategy Group</p>
                <p className="text-sm text-gray-500">July 30, 2:00 - 3:00PM</p>
                <button className="text-sm text-[#7F56D9] font-medium">Join Now</button>
              </div>
            </div>
          </section>

          {/* Mentors & Stats */}
          <section className="col-span-1 space-y-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold mb-2">Mentors</h3>
              <div className="space-y-1">
                <p className="text-sm">Maxwell Smith</p>
                <p className="text-sm">Adeati Samuel</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold mb-2">Users</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold">240</p>
                  <p className="text-sm text-gray-500">Total Users</p>
                </div>
                <div>
                  <p className="text-sm">Students: 200</p>
                  <p className="text-sm">Mentors: 8</p>
                  <p className="text-sm">Programs: 22</p>
                  <p className="text-sm">Others: 10</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
