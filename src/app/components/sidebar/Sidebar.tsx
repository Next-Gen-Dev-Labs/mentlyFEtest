"use client";

import { useAppContext } from "@/app/context/AppContent";
import Navbar from "./Navbar";

const Sidebar = () => {
  const { isCollapsed } = useAppContext();

  return (
    <>
      {/* md:w-[7.9%] lg:w-[16%] */}
      <aside className={`hidden lg:block min-h-screen ${isCollapsed ? "w-[5.9%]" : " w-[16%]"}  bg-mentlyBlue text-white p-2`}>
        <nav className="w-full h-full">
          <Navbar />
        </nav>
      </aside >
    </>
  );
}

export default Sidebar;