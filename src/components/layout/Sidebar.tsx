"use client";
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
  LogOut,
} from "lucide-react";
import { SquareUser } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", icon: <Home />, path: "/" },
  { name: "Programs", icon: <BookOpen />, path: "/programs" },
  { name: "Activities", icon: <CalendarClock />, path: "/activities" },
  { name: "Users", icon: <Users />, path: "/users" },
  { name: "Forums", icon: <MessageSquare />, path: "/forums" },
  { name: "Finances", icon: <Wallet />, path: "/finances" },
  { name: "Rewards", icon: <Gift />, path: "/rewards" },
  {
    name: "Analytics",
    icon: <BarChart3 />,
    path: "/analytics",
    comingSoon: true,
  },
  { name: "Settings", icon: <Settings />, path: "/settings" },
  { name: "Log Out", icon: <LogOut />, path: "/logout" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-[#340260] h-screen text-white w-60 px-4 flex flex-col">
      <div className=" text-2xl mt-9 mb-20 font-bold flex items-center gap-2">
        {/* <img src="/logo.png" alt="Logo" className="w-6 h-6" /> */}
        techrity
      </div>

      <nav className=" space-y-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`flex items-center justify-between group hover:bg-white px-8 py-3 rounded cursor-pointer transition-all duration-200 ease-in-out
              ${
                pathname === item.path
                  ? "bg-white text-[#1F0954]"
                  : "text-[#C2C2C2]"
              }`}
          >
            <div className="flex items-center space-x-8">
              <span
                className={`text-lg transition-colors duration-200 ease-in-out ${
                  pathname === item.path ? "text-[#1F0954]" : ""
                } group-hover:text-[#1F0954]`}
              >
                {item.icon}
              </span>
              <span
                className={`text-4 transition-colors duration-200 ease-in-out ${
                  pathname === item.path ? "text-[#1F0954]" : ""
                } group-hover:text-[#1F0954]`}
              >
                {item.name}
              </span>
            </div>
            {item.comingSoon && (
              <span className="text-xs absolute -mt-8 ml-23 bg-[#251974] text-[#EFEFF8] rounded px-1 py1">
                Coming Soon
              </span>
            )}
          </Link>
        ))}
      </nav>

      <div className="mt-10 bg-[#4c2073] px-3 py-2.5 rounded-lg h-32">
        <SquareUser />

        <div className="space-y-5 mt-3">
          <p className="text-xs font-bold">
            Got some queationa, enquiries or need help?
          </p>
          <p className="text-[10px] text-[#F0C074] underline">
            <a href="mailto:support@techrity.com">
              Visit Mently Help Desk Here
            </a>
          </p>
        </div>
      </div>

      <div className="text-sm flex items-center space-x-4 text-purple-300 mt-8 ">
        <p className="text-xs font-bold text-white">Switch to Classic Mode</p>
        <div className="">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" />
          </label>
        </div>
      </div>
    </div>
  );
}
