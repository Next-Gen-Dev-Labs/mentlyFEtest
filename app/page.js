"use client";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import ProgramPage from "@/components/ProgramInfo";

export default function Home() {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidenavOpen(true);
      } else {
        setIsSidenavOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidenav = () => {
    setIsSidenavOpen((prev) => !prev);
  };

  return (
    <div>
      <SideBar isOpen={isSidenavOpen} toggleSidenav={toggleSidenav} />
      {isSidenavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidenav}
        ></div>
      )}
      <div className={isSidenavOpen ? "md:ml-52" : ""}>
        <Header isOpen={isSidenavOpen} toggleSidenav={toggleSidenav} />
        {/* <Dashboard /> */}
        <ProgramPage />
      </div>
    </div>
  );
}
