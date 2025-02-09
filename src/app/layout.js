"use client";

import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import './globals.css';
import { Notification } from "iconsax-react";
import { Providers } from "./providers";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
 
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
      <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 min-h-screen md:ml-[110px]">
      <Header />
       
          
  <main className="bg-secondary dark:bg-black mt-[80px] md:mt-[90px]">{children}</main>
  </div>

  </div>
  </Providers>
      </body>
    </html>
  );
}