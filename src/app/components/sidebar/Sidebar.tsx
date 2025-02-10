"use client";
import React from "react";
import { useAppContext } from "../../context/AppContext";
import Navbar from "./Navbar";

/**
 * Sidebar component that controls the collapsible navigation panel.
 * It dynamically adjusts its width based on state.
 */
const Sidebar = () => {
  const { isCollapsed, isSidebarOpen} = useAppContext();

  return (
    <>
      <aside 
        className={`${isSidebarOpen ? "opacity-1 w-[50%] block shadow-2xl md:relative left-0 top-0 z-[1000] transform" : "hidden"} lg:block min-h-screen ${isCollapsed ? "w-[5.9%]" : " w-[16%]"} transition-transform duration-300 ease-in-out bg-mentlyBlue text-white px-4 rounded-r-lg lg:rounded-none lg:p-2`}>
        <nav className="w-full h-full">
          <Navbar />
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;