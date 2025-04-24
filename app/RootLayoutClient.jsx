'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import ManageWidgets from './components/ManageWidgets';
import WidgetsBar from './components/WidgetsBar';
export default function RootLayoutClient({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isManageWidgetOpen, setIsManageWidgetOpen] = useState(false);


  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  const toggleManageWidget = () => {
    setIsManageWidgetOpen(prev => !prev);
  };



  return (
    <div className="flex bg-[#f9f9fb] relative">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <main className={`min-h-screen transition-all duration-300
        w-full
        ${sidebarOpen ? 'lg:ml-[240px] lg:w-[calc(100%-240px)]' : 'w-full'}`}>
        <Topbar isOpen={sidebarOpen} toggleSidebar={toggleSidebar}/>
        <WidgetsBar  toggleWidget={toggleManageWidget}/>
        
          <ManageWidgets isOpen={isManageWidgetOpen} toggleWidget={toggleManageWidget} />
      
        {children}
      </main>
    </div>
  );
}
