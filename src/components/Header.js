import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowDown2, Notification } from "iconsax-react";

const Header = ({ theme }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex justify-end bg-white dark:bg-gray-700 p-4 shadow-[0px_2px_4px_0px_#00000010] fixed top-0 left-0 right-0 z-30 h-[70px] md:h-[82px]">
     
     <div className="flex items-center gap-6 md:gap-10 mr-10px] md:mr-[100px]">

        
        <div className="relative cursor-pointer">
          <Notification size="24" color={theme === "dark" ? "#fff" : "#4B5563"} />
          <span className="absolute top-0 right-0 bg-red-500 w-2.5 h-2.5 rounded-full"></span>
        </div>

        {/* User Profile Section */}
        <div className="relative">
          <div
            className="flex items-center gap-4"
          
          >
            <div className="flex gap-2"><Image
              src="/images/user-image.svg"
              alt="User Avatar"
              width={44}
              height={44}
              className="rounded-full"
            />
            <div>
              <span className="text-gray-700 dark:text-white font-semibold block">
                Godwin Jimmy
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Free Plan <a href="#" className="text-blue-500 font-semibold">Upgrade</a>
              </span>
            </div></div>
            
            {/* Dropdown Icon (Rotates when Open) */}
            <ArrowDown2 size="18" color="#C2C2C2"
              className={`transition-transform ${dropdownOpen ? "rotate-180" : "rotate-0"} cursor-pointer`}  ref={dropdownRef}  onClick={() => setDropdownOpen(!dropdownOpen)}
            />
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 transform transition-all duration-200 ease-out scale-95 opacity-0 animate-fadeInSlide"
            >
              <a href="/profile" className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">My Profile</a>
              <a href="/awards" className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">My Awards</a>
              <a href="/settings" className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">Settings</a>
              <a href="/logout" className="block px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600">Logout</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
