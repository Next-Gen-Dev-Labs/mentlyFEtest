
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        className={`fixed md:static z-30 md:z-0 top-0 left-0 h-full min-h-screen w-64 md:w-[240px] p-4 flex flex-col bg-techrity-purple transition-transform duration-200 md:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center">
            <span className="text-techrity-purple text-xl font-bold">t</span>
          </div>
          <span className="text-white font-semibold text-lg">techrity</span>
        </div>
        
        <nav className="mt-8 flex flex-col gap-1">
          <Link to="/" className="sidebar-item active">
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </Link>
          <Link to="/programs" className="sidebar-item">
            <BarChart2 size={18} />
            <span>Programs</span>
          </Link>
          <Link to="/activities" className="sidebar-item">
            <BarChart2 size={18} />
            <span>Activities</span>
          </Link>
          <Link to="/users" className="sidebar-item">
            <Users size={18} />
            <span>Users</span>
          </Link>
          <Link to="/forums" className="sidebar-item">
            <MessageSquare size={18} />
            <span>Forums</span>
          </Link>
          <Link to="/finances" className="sidebar-item">
            <BadgeDollarSign size={18} />
            <span>Finances</span>
          </Link>
          <Link to="/rewards" className="sidebar-item">
            <Award size={18} />
            <span>Rewards</span>
          </Link>
          <Link to="/analytics" className="sidebar-item">
            <BarChart2 size={18} />
            <span>Analytics</span>
          </Link>
          <Link to="/settings" className="sidebar-item">
            <Settings size={18} />
            <span>Settings</span>
          </Link>
        </nav>
        
        <div className="mt-auto">
          <div className="border-t border-white/20 pt-4 px-4 text-white/70">
            <div className="text-xs mb-2">
              Got some questions, enquiries or need help?
            </div>
            <div className="text-xs text-white/50">
              You Need to Get Help Here
            </div>
          </div>
          
          <button className="sidebar-item mt-4 w-full justify-between">
            <div className="flex items-center gap-3">
              <LogOut size={18} />
              <span>Log Out</span>
            </div>
          </button>
          
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
