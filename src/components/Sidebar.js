'use client';
import { useEffect } from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when sidebar is open
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling when sidebar is closed
    }
  }, [isOpen]);

  return (
    <aside
      className={`h-full w-64 bg-[#1F0544] text-white flex flex-col fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}
    >
      <div className="p-6 flex items-center space-x-2">
        <div className="w-6 h-6 bg-white rounded-full"></div>
        <h1 className="text-xl font-bold">techrity</h1>
      </div>

      <nav className="px-4 space-y-2 text-sm font-medium">
        {/* Navigation Links */}
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

      <div className="px-4 py-6 mt-auto text-sm text-gray-300">
        <p className="mb-2">Got some questions or need help?</p>
        <a href="#" className="text-xs underline text-white">
          Visit Mently Help Desk Here
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
