import {
  Home,
  BookOpen,
  CalendarClock,
  Users,
  MessageSquare,
  Wallet,
  Gift,
  BarChart3,
  Settings,
  LogOut
} from 'lucide-react'
import { SquareUser } from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', icon: <Home /> },
  { name: 'Programs', icon: <BookOpen /> },
  { name: 'Activities', icon: <CalendarClock /> },
  { name: 'Users', icon: <Users /> },
  { name: 'Forums', icon: <MessageSquare /> },
  { name: 'Finances', icon: <Wallet /> },
  { name: 'Rewards', icon: <Gift /> },
  { name: 'Analytics', icon: <BarChart3 />, comingSoon: true },
  { name: 'Settings', icon: <Settings /> },
  { name: 'Log Out', icon: <LogOut /> },
];

export default function Sidebar() {
  return (
    <div className="bg-purple-900 h-screen text-white w-64 p-4 flex flex-col">
      <div className="mb-8 text-2xl font-bold flex items-center gap-2">
        {/* <img src="/logo.png" alt="Logo" className="w-6 h-6" /> */}
        techrity
      </div>

      <nav className=" space-y-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between group hover:bg-white hover:text-black px-4 py-2 rounded cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </div>
            {item.comingSoon && (
              <span className="text-xs bg-blue-200 text-blue-800 rounded px-2 py-0.5">Coming Soon</span>
            )}
          </div>
        ))}
      </nav>

      <div className="mt-10">
        < SquareUser />

        <div>
          <p>Got some queationa, enquiries or need help?</p>
          <p className="text-xs">Contact us at <a href="mailto:support@techrity.com">Visit Mently Help Desk Here</a></p>
        </div>
      </div>

      <div className="text-sm text-purple-300 mt-10 ">
        <p>Switch to Classic Mode</p>
        <div className="mt-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Toggle</span>
          </label>
        </div>
      </div>
    </div>
  );
}
