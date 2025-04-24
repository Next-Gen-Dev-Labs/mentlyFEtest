"use client";
import { useEffect, useState } from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    }
  }, [isOpen]);

  const sidebarClasses = `
    fixed inset-y-0 left-0 z-50 w-64 bg-[#1F0544] text-white transform 
    ${isOpen ? "translate-x-0" : "-translate-x-full"} 
    md:translate-x-0 md:relative md:block 
    transition-transform duration-300 ease-in-out
  `;

  return (
    <aside id="sidebar" className={sidebarClasses}>
      <div className="p-6 flex items-center space-x-2">
        <div className="w-6 h-6 bg-white rounded-full"></div>
        <h1 className="text-xl font-bold">techrity</h1>
      </div>

      <nav className="px-4 space-y-2 text-sm font-medium">
        {[
          { icon: "bi-grid-fill", label: "Dashboard" },
          { icon: "bi-journal-text", label: "Programs" },
          { icon: "bi-lightning-fill", label: "Activities" },
          { icon: "bi-people-fill", label: "Users" },
          { icon: "bi-chat-dots-fill", label: "Forums" },
          { icon: "bi-cash-coin", label: "Finances" },
          {
            icon: "bi-award-fill",
            label: "Rewards",
            badge: (
              <span className="text-xs ml-auto bg-yellow-400 text-black px-2 rounded">
                Coming Soon
              </span>
            ),
          },
          { icon: "bi-graph-up-arrow", label: "Analytics" },
          { icon: "bi-gear-fill", label: "Settings" },
          {
            icon: "bi-box-arrow-left text-red-300",
            label: "Log Out",
          },
        ].map((item, idx) => (
          <a
            key={idx}
            href="#"
            className={`flex items-center p-2 rounded-md hover:bg-[#310b6e] ${
              item.label === "Dashboard" ? "bg-white text-[#1F0544]" : ""
            }`}
          >
            <i className={`bi ${item.icon} mr-3 text-lg`}></i>
            {item.label}
            {item.badge}
          </a>
        ))}
      </nav>

      <div className="px-4 py-6 mt-auto">
        <p className="text-sm text-gray-300 mb-2">
          Got some questions or need help?
        </p>
        <a href="#" className="text-xs underline">
          Visit Mently Help Desk Here
        </a>

        <div className="mt-4 flex items-center justify-between text-sm">
          <span>Classic Mode</span>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 peer-checked:bg-purple-600 rounded-full relative">
              <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></span>
            </div>
          </label>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
