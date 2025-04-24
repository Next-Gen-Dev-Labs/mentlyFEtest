'use client';

import { ClosingIcon, HamburgerMenu } from "../assets/icons/sideBarIcons";

// components/Sidebar.tsx
const widgetItems = [
  { name: "Programs", icon: <HamburgerMenu /> },
  { name: "Group Calls", icon: <HamburgerMenu /> },
  { name: "Mentors", icon: <HamburgerMenu /> },
  { name: "Recent Activities", icon: <HamburgerMenu /> },
  { name: "Application", icon: <HamburgerMenu /> },
  { name: "Earnings", icon: <HamburgerMenu /> },
  { name: "Forum", icon: <HamburgerMenu /> },
  { name: "Program Analysis", icon: <HamburgerMenu /> },
];

export default function ManageWidgets({ isOpen, toggleWidget }) {
  
  return (
    <div
    className={`fixed top-0 right-0 z-50 p-4 bg-white shadow-lg rounded-lg max-w-xs w-full transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
  >
      {/* Close Button */}
      <div className="flex justify-end mb-4 border-b pb-5 border-[#D7D7D7]  ">
      <button onClick={toggleWidget}>
      < ClosingIcon  />
      </button>
        
      </div>

        {/* Header */}
        <h2 className="text-[#6F01D0] text-[32px] font-[700] py-4">Manage Widget</h2>

        <p className="text-[#374557] text-[12px] font-[400] py-4">Personalize your dashboard by managing widgets add, remove, or reorder them to fit your workflow.</p>

      {/* Widget Items List */}
      <ul className="mt-2 mb-5 space-y-1">
        {widgetItems.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer text-[#C2C2C2] hover:text-[#1F0954] hover:bg-[#FFFFFF] transition-colors duration-200"
          >
            <div className="w-5 h-5 text-inherit">{item.icon}</div>
            <span className="font-[700] text-[#4F4F4F] text-[14.4px]">{item.name}</span>
            <input type="checkbox" className="w-4 h-4 text-[#07C500] bg-[#07C500]" />
          </li>
        ))}
      </ul>

      {/* two button save change and reset to default */}
        <div className="flex justify-between mt-4">
            <button className="bg-[#F2F2F2] text-[#1F0954] font-[700] text-[14px] py-2 px-4 rounded-md hover:bg-[#D7D7D7] transition-colors duration-200">
            Reset to Default
            </button>
            <button className="bg-[#6F01D0] text-white font-[700] text-[14px] py-2 px-4 rounded-md hover:bg-[#5B00B8] transition-colors duration-200">
            Save Changes
            </button>
        </div>


    </div>
  );
}
