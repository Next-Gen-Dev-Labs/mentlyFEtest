"use client";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";
import Topbar from "@/components/Topbar";
import { useMediaQuery } from "usehooks-ts";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const isSmallScreen = useMediaQuery("(min-width: 1024px)");
  return (
    <div className="flex h-screen">
      {isSmallScreen && (
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      )}
      <div
        className={`lg:hidden transition-all z-10 duration-300 ease-in-out ${
          showSidebar ? "opacity-100" : "opacity-0"
        }`}
      >
        {showSidebar && (
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        )}
      </div>

      <div className="flex flex-col w-full">
        <Topbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div className="flex-1 p-2 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
