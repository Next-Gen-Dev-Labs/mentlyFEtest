// components/Header.tsx
"use client";

import { BellIcon, SearchIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white px-6 py-4 flex justify-between items-center border-b">
      <div className="flex items-center gap-3">
        <SearchIcon className="w-5 h-5 text-gray-400" />
        <input type="text" placeholder="Search" className="outline-none text-sm w-full" />
      </div>
      <div className="flex items-center gap-4">
        <BellIcon className="w-5 h-5 text-gray-600" />
        <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-semibold">
          PA
        </div>
      </div>
    </header>
  );
};

export default Header;