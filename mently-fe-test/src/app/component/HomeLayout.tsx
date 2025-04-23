"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { twMerge } from "tailwind-merge";
import Navbar from "./Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setisCollpased] = useState(false);
  return (
    <div className="overflow-x-hidden">
      <div className="flex">
        <div className="z-100 hidden lg:block">
          <Sidebar isCollapsed={isCollapsed} setisCollpased={setisCollpased} />
        </div>
        <div className="flex-1 w-full overflow-hidden">
          <div
            className={twMerge(
              "z-90 fixed top-0 left-0 right-0",
              isCollapsed ? "lg:left-32" : "lg:left-60"
            )}
          >
            <Navbar />
          </div>
          <div
            className={twMerge(
              "px-8 py-6 bg-background min-h-screen text-primary mt-20 max-w-full overflow-x-hidden",
              isCollapsed ? "lg:ml-32" : "lg:ml-60"
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;