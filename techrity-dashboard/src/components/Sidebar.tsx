'use client';
import React, { useState } from 'react';
import { 
  Home, 
  FileText, 
  Activity, 
  Users, 
  MessageSquare, 
  DollarSign, 
  Award, 
  BarChart, 
  Settings, 
  LogOut,
  HelpCircle,
  Menu
} from 'lucide-react';

interface SidebarProps {
  onNavItemClick?: (item: string) => void;
  activePage?: string;
}

export default function Sidebar({ 
  onNavItemClick = () => {}, 
  activePage = "Dashboard" 
}: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  
  const navItems = [
    { name: "Dashboard", icon: Home },
    { name: "Programs", icon: FileText },
    { name: "Activities", icon: Activity },
    { name: "Users", icon: Users },
    { name: "Forums", icon: MessageSquare },
    { name: "Finances", icon: DollarSign },
    { name: "Rewards", icon: Award },
    { name: "Analytics", icon: BarChart, badge: "Coming Soon" },
    { name: "Settings", icon: Settings },
    { name: "Log Out", icon: LogOut },
  ];

  return (
    <div className="h-screen w-60  flex flex-col bg-purple-900 text-white">
      {/* Logo area */}
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center">
          <div className="mr-2">
            <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
          {!collapsed && <span className="font-medium">techrity</span>}
        </div>
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          className="p-1 rounded hover:bg-purple-800"
        >
          <Menu size={18} />
        </button>
      </div>

      {/* Navigation items */}
      <nav className="flex-grow mt-2">
        <ul className="space-y-1 px-4">
        
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.name;
            
            return (
              <li key={item.name}>
                <button
                  onClick={() => onNavItemClick(item.name)}
                  className={`w-full flex items-center px-4 py-3 text-sm ${
                    isActive ? "bg-white text-purple-900 rounded-md  px-3" : "text-gray-200 hover:bg-purple-800"
                  }`}
                >
                  <Icon size={18} className="flex-shrink-0" />
                  {!collapsed && (
                    <>
                      <span className="ml-3">{item.name}</span>
                      {item.badge && (
                        <span className="ml-auto text-xs text-gray-300">{item.badge}</span>
                      )}
                    </>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Help section */}
      {!collapsed && (
        <div className="p-4 mb-4 mx-3 bg-purple-800 rounded-lg">
          <div className="flex items-center mb-2">
            <HelpCircle size={18} className="text-gray-200" />
            <span className="ml-2 text-sm">Got some questions, enquiries or need help?</span>
          </div>
          <a 
            href="#" 
            className="text-xs text-purple-300 hover:text-white"
          >
            Visit Merely Help Desk Here
          </a>
        </div>
      )}
    </div>
  );
}