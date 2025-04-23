import React, { useEffect, useState } from "react";
import Image from "next/image";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClassicMode, setIsClassicMode] = useState(false);

  useEffect(() => {
    const initialCheck = () => {
      setIsOpen(window.innerWidth >= 1024);
    };

    initialCheck();

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    setIsClassicMode(!isClassicMode);
  };

  return (
    <>
      {/* Hamburger */}
      {!isOpen && (
        <div
          className="p-2 text-white fixed top-4 left-4 z-50 cursor-pointer rounded lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <div className="space-y-1">
            <span className="block h-1 w-8 bg-[#340260]"></span>
            <span className="block h-1 w-6 bg-[#340260]"></span>
            <span className="block h-1 w-8 bg-[#340260]"></span>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 md:w-[240px] lg:w-64 p-3 transform transition-transform duration-300 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:static lg:block min-h-screen 
          ${isClassicMode ? "bg-[#333333]" : "bg-[#340260]"}
        `}
      >
        <div className="relative flex items-center justify-between mt-8">
          <Image
            src="/assets/logo.png"
            alt="Dashboard Logo"
            width={120}
            height={130}
          />
          <Image
            className="hidden lg:block"
            src="/assets/vec.png"
            alt="Vector"
            width={20}
            height={20}
          />

          {/* Close button */}
          <div
            className={`w-8 h-8 border-2 border-white rounded-[10px] flex items-center justify-center text-white text-xl font-bold cursor-pointer lg:hidden transform transition-transform duration-300 ${
              isOpen ? "rotate-90 scale-100" : "scale-0"
            }`}
            onClick={() => setIsOpen(false)}
          >
            ✕
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col items-center space-y-4 mt-16 mb-10">
          {[
            { src: "/assets/dash.png", text: "Dashboard", highlight: true },
            { src: "/assets/book.png", text: "Programs" },
            { src: "/assets/bubble.png", text: "Activities" },
            { src: "/assets/vector.png", text: "Users" },
            { src: "/assets/forum.png", text: "Forums" },
            { src: "/assets/wallet.png", text: "Finances" },
            { src: "/assets/award.png", text: "Rewards" },
            { src: "/assets/diagram.png", text: "Analytics" },
            { src: "/assets/setting.png", text: "Settings" },
            { src: "/assets/logout.png", text: "Logout" },
          ].map((item, i) => (
            <a
              key={i}
              href="#"
              className={`flex w-[230px] items-center gap-4 p-3 rounded-md ${
                item.highlight
                  ? "bg-white border-[1.5px] border-[#1F0954] text-[#1F0954] font-semibold"
                  : "text-[#C2C2C2] hover:text-purple-300"
              }`}
            >
              <Image src={item.src} alt={item.text} width={20} height={20} />
              <span className="text-[16px]">{item.text}</span>
            </a>
          ))}
        </nav>

        {/* Help Box */}
        <div className="flex flex-col items-start p-4 bg-[#4C2073] rounded-[10px] mb-10">
          <Image src="/assets/tag.png" alt="Tag Icon" width={20} height={20} />
          <p className="mt-2 text-[12px] text-[#fff] font-bold">
            Got some questions, enquiries or need help?
          </p>
          <p className="text-[10px] text-[#F0C074]">
            Visit Mently Help Desk Here
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="flex items-center justify-center space-x-2 mt-4 lg:mb-20">
          <span className="text-[#fff] font-semibold flex items-center gap-2">
            <span className="text-[12px]">
              {isClassicMode ? "Classic Mode" : "Modern Mode"}
            </span>
          </span>

          <label
            htmlFor="mode-toggle"
            className="flex items-center cursor-pointer"
          >
            <div className="relative">
              <input
                type="checkbox"
                id="mode-toggle"
                className="sr-only"
                checked={isClassicMode}
                onChange={handleToggle}
              />
              <div className="w-12 h-6 bg-gray-300 rounded-full shadow-inner"></div>
              <div
                className={`absolute top-0 left-0 w-6 h-6 bg-[#000] rounded-full transition-transform duration-300 transform ${
                  isClassicMode ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </div>
          </label>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
