import { Sidebar } from "@/components/Sidebar";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const SidebarLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex bg-[#F4F5FA]">
      <Sidebar />
      <div className="w-full">
        {/* navbar */}
        <div
          className=" sticky top-0 z-[30] h-[82px] px-4 sm:px-10 w-full bg-[#FDFDFD]
         flex items-center sm:justify-end shadows"
        >
          <div>
            <div className="flex items-center gap-2 lg:gap-10">
              {/* notification */}
              <div>
                <div className="relative">
                  <img src="/bell.svg" alt="" />

                  {/* red dot */}
                  <div className="absolute top-0 right-1 bg-danger w-[8px] aspect-square rounded-full"></div>
                </div>
              </div>

              {/* profile */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {/* profile image */}
                  <div>
                    <div className="w-[44px] aspect-square rounded-full bg-bluefade grid place-content-center">
                      <img src="/profile.svg" alt="" />
                    </div>
                  </div>

                  {/* profile details */}
                  <div>
                    <p className="text-sm text-[#404040]">Techrity Foun...</p>
                    <p className="text-[#53547B] text-xs">Member</p>
                  </div>
                </div>

                {/* expand icon */}
                <div>
                  <div className="flex items-center justify-center bg-blue rounded-[4px] w-[19px] h-[19px]">
                    <div>
                      <img src="/arrow-down.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* other elements */}
        <div className="min-h-[100dvh] p-2 lg:p-4 xl:pl-14 xl:pr-7 mt-4 overflow-x-scroll max-w-[350px] sm:max-w-full hide-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
