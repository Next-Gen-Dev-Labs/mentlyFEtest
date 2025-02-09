"use client";
import { useState } from "react";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { ProgramEditor } from "@/components/program-editor";
import { ProgramDetails } from "@/components/program-details";
import { SidebarProvider, SidebarInset, useSidebar } from "@/components/ui/sidebar";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarChange = (open: boolean) => {
    setIsSidebarOpen(open);
  };

  return (
    <SidebarProvider
      defaultOpen={isSidebarOpen}
      open={isSidebarOpen}
      onOpenChange={handleSidebarChange}
    >
      <div className="min-h-screen flex">
        <Sidebar />
        <SidebarInset>
          <Header />
          <div className={`${isSidebarOpen == false ? " p-4 md:ps-20" : "p-4 md:px-6"} mt-14 md:mt-20`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <section
                className="col-span-1 bg-[#FDFDFD] opacity-90 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.06)] border-none h-full"
                aria-label="Program Editor"
              >
                <ProgramEditor />
              </section>
              <section className="col-span-1" aria-label="Program Details">
                <ProgramDetails />
              </section>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

