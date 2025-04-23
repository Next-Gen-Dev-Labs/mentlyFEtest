"use client";
import React, { ReactNode, useState } from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <main className="md:pl-[250px] min-h-screen flex">
      <SideBar showSidebar={showSideBar} setShowSideBar={setShowSideBar} />
      <div className="flex-1 flex flex-col">
        <Navbar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
        <div className="flex-1 bg-[#F4F5FA] w-full h-full py-4 px-6">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AppLayout;
