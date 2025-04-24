import type { Metadata } from "next";
import React from "react";
import MobileSideBar from "@/components/ui/sidebar/MobileSidebar";
import Navbar from "@/components/ui/navbar/Navbar";
import Sidebar from "@/components/ui/sidebar/Sidebar";
import ConfirmLogout from "@/components/ui/ConfirmLogout";
import CommonDashboardContext from "@/providers/StateContext";
import MobileNav from "@/components/ui/navbar/MobileNavbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Techrity | Admin",
  description: "Admin dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" font-header">
        <CommonDashboardContext>
          <main className="flex  ">
            {/* Desktop Sidebar */}
            <aside className="hidden sm:block sm:flex-4 md:flex-2 bg-[#2D0052] font-semibold py-10  h-screen sticky top-0 overflow-auto scrollbar-hide">
              <Sidebar dashboard="user" />
            </aside>

            {/* Main Content */}
            <section className="flex-1 flex flex-col w-full overflow-hidden">
              {/* Mobile Sidebar */}
              <div className="sm:hidden">
                <MobileSideBar dashboard="user" />
              </div>

              {/* Navbar */}
              <div className="sticky top-0 z-20 bg-white shadow-sm">
                <Navbar />
                <MobileNav />
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4 md:p-3 scrollbar-hide bg-stone-100 relative">
                <ConfirmLogout />
                {children}
              </div>
            </section>
          </main>
        </CommonDashboardContext>
      </body>
    </html>
  );
}
