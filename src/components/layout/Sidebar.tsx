import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  BarChart2,
  Users,
  MessageSquare,
  BadgeDollarSign,
  Award,
  Settings,
  LogOut,
  Menu
} from 'lucide-react';
import { sidebarLinks } from "@/mock-data";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Sidebar Trigger */}
      <button
        className="fixed top-4 left-4 z-30 md:hidden bg-white/90 border border-gray-200 rounded-full p-2 shadow-lg"
        onClick={() => setOpen(prev => !prev)}
        aria-label="Toggle Sidebar"
      >
        <Menu size={20} />
      </button>
      {/* Overlay on mobile when sidebar is open */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-20 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
      <div
        className={`fixed md:static z-30 md:z-0 top-0 left-0 h-screen w-64 md:w-[240px] p-4 flex flex-col bg-techrity-purple transition-transform duration-200 md:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
      >
        <div className="flex items-center gap-2 px-4 py-2">
          <img src='/assets/logo-large.png' />
        </div>

        <nav className="mt-8 flex flex-col gap-1 overflow-hidden overflow-y-auto pr-4 scrollbar-none">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn("sidebar-item", isActive && "active")
                }
              >
                <Icon size={18} />
                <span>{link.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="mt-auto">
          <div className="border-t border-white/20 p-5 bg-white/10 rounded-lg my-4 text-white/70 ">
            <div className="text-xs mb-2">
              Got some questions, enquiries or need help?
            </div>
            <div className="text-xs text-techrity-rating/50">
              You Need to Get Help Here
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 px-4 py-2">
            <span className="text-xs text-white/70">Switch to Classic Mode</span>
            <div className="w-8 h-4 bg-white/20 rounded-full relative">
              <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 left-0.5"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
