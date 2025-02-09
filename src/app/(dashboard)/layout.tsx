import Sidebar from "@/components/Sidebar";
import React from "react";
import Topbar from "@/components/Topbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Topbar />
        <div className="flex-1 p-2">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
