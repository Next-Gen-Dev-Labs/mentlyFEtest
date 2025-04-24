'use client';
import "../lib/fontawesome";

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="bg-white shadow px-4 py-4 flex items-center justify-between md:justify-end">
      <button
        onClick={onToggleSidebar}
        className="md:hidden text-[#1F0544] text-2xl"
      >
        <i className="bi bi-list"></i>
      </button>

      <div className="flex-1 flex justify-end items-center space-x-4">
        <i className="fas fa-bell text-gray-500 text-lg"></i>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white">
            <i className="fas fa-user"></i>
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-medium">Techrity Foundation</div>
            <div className="text-xs text-gray-500">Member</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
