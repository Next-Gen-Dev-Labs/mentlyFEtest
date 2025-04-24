"use client"
import React, { useState } from 'react';
import { Grid, X } from 'lucide-react';

export default function ManageWidgets() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    
    // Add or remove a class to the body to prevent scrolling when sidebar is open
    if (!sidebarOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  return (
    <div className="relative">
      {/* Button to open sidebar */}
      <button 
        className="flex w-fit justify-end items-center gap-2 md:px-8 py-3 text-sm text-purple-700"
        onClick={toggleSidebar}
      >
        <Grid size={16} />
        <span className='text-[12px] md:text-lg font-[600] text-[#1F0954]'>Manage Widgets</span>
      </button>

      {/* Backdrop with blur effect */}
      {sidebarOpen && (
       <div 
       className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40"
       onClick={toggleSidebar}
     />     
      )}

      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 w-full sm:w-96 h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-purple-800">Manage Widget</h2>
            <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-gray-100">
              <X size={20} className="text-gray-500" />
            </button>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-6">
            Personalize your dashboard by managing widgets and choosing which ones to display in your workspace.
          </p>

          {/* Widget options */}
          <div className="space-y-3">
            {[
              'Programs', 
              'Group Chats', 
              'Members', 
              'Recent Activities', 
              'Applications', 
              'Calendar', 
              'Forum', 
              'Program Analytics'
            ].map((widget, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-gray-700">{widget}</span>
                <input 
                  type="checkbox" 
                  defaultChecked={index < 6} 
                  className="w-5 h-5 accent-purple-600"
                />
              </div>
            ))}
          </div>

          {/* Footer buttons */}
          <div className="mt-auto flex gap-3 pt-6">
            <button className="flex-1 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700">
              Save Changes
            </button>
            <button className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
              Reset to Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}