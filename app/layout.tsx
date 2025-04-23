"use client";

import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { Switch } from "@/app/components/ui/Switch";
import { NavItem } from "@/app/components/NavItem";
import {
  Home,
  FileText,
  Activity,
  Users,
  MessageSquare,
  DollarSign,
  Award,
  BarChart2,
  Settings,
  LogOut,
  ShieldUser,
  Table2,
  AlignJustify,
  X,
} from "lucide-react";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "motion/react";

const inter = Inter({ subsets: ["latin"] });

gsap.registerPlugin(useGSAP);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [toggle, setToggle] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      "#navdesktop .navitems",
      {
        x: -200,
      },
      {
        x: 0,
        duration: 1,
        stagger: 0.1,
      }
    );

    gsap.fromTo(
      "#navmobile .navitems",
      {
        x: -200,
      },
      {
        x: 0,
        duration: 1,
        stagger: 0.1,
      }
    );

    gsap.fromTo(
      "#logodesktop",
      {
        x: -200,
      },
      {
        x: 0,
        duration: 0.5,
      }
    );

    gsap.fromTo(
      ".table",
      {
        x: 200,
      },
      {
        x: 0,
        duration: 0.5,
      }
    );
  });

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <title>Techrity Dashboard</title>
        <meta name="description" content="Techrity Foundation Dashboard" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100">
          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: 0,
              transition: {
                duration: 0.5,
              },
            }}
            className="text-[#333] navjustify lg:hidden fixed w-[20%] shadow-sm z-50 bg-white h-[82px] flex justify-start items-center px-6"
          >
            <AlignJustify
              height={24}
              width={24}
              onClick={() => {
                setToggle(true);
              }}
            />
          </motion.div>
          <nav
            className={`flex ${
              toggle ? "translate-x-[0]" : "translate-x-[100%]"
            } transition-all duration-1000 bg-[#2e0a5a] text-white lg:hidden z-[60] flex-col py-4 fixed top-0 w-full left-0 h-screen`}
          >
            <div className="p-4 flex items-center mb-4">
              <Image
                src="/techritylogo.png"
                alt="Techrity Logo"
                width={116}
                height={27}
                className="mr-2"
              />
              <div className="ml-auto">
                <X
                  height={24}
                  width={24}
                  onClick={() => {
                    setToggle(false);
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 overflow-y-auto">
              <div
                id="navmobile"
                className="flex flex-col py-6 w-[90%] justify-center mx-auto lg:mx-0 lg:w-full gap-4"
              >
                <NavItem icon={<Home />} label="Dashboard" active />
                <NavItem icon={<FileText />} label="Programs" />
                <NavItem icon={<Activity />} label="Activities" />
                <NavItem icon={<Users />} label="Users" />
                <NavItem icon={<MessageSquare />} label="Forums" />
                <NavItem icon={<DollarSign />} label="Finances" />
                <NavItem icon={<Award />} label="Rewards" />
                <NavItem icon={<BarChart2 />} label="Analytics" />
                <NavItem icon={<Settings />} label="Settings" />
                <NavItem icon={<LogOut />} label="Log Out" />
              </div>

              <div className="p-4 mb-4">
                <div className="bg-[#FFFFFF1F] rounded-[8px] px-4 py-2 flex flex-col gap-4">
                  <ShieldUser />
                  <div className="text-[12px] mb-2 font-bold leading-[12px]">
                    Got some questions, enquiries or need help?
                  </div>
                  <a href="#" className="text-[10px] text-yellow-400 underline">
                    Visit Mentity Help Desk Here
                  </a>
                </div>
                <div className="mt-8 flex items-center justify-between gap-4">
                  <span className="text-[12px] font-bold">
                    Switch to Classic Mode
                  </span>
                  <Switch />
                </div>
              </div>
            </div>
          </nav>
          <div className="w-[240px] hidden bg-[#2e0a5a] text-white lg:flex flex-col py-4 fixed top-0 left-0 h-screen overflow-y-auto">
            <div className="p-4 flex items-center mb-4">
              <Image
                src="/techritylogo.png"
                alt="Techrity Logo"
                width={116}
                height={27}
                className="mr-2"
                id="logodesktop"
              />
              <div className="ml-auto table">
                <Table2 />
              </div>
            </div>

            <nav
              id="navdesktop"
              className="flex flex-col py-6 justify-center mx-auto gap-4"
            >
              <NavItem icon={<Home />} label="Dashboard" active />
              <NavItem icon={<FileText />} label="Programs" />
              <NavItem icon={<Activity />} label="Activities" />
              <NavItem icon={<Users />} label="Users" />
              <NavItem icon={<MessageSquare />} label="Forums" />
              <NavItem icon={<DollarSign />} label="Finances" />
              <NavItem icon={<Award />} label="Rewards" />
              <NavItem icon={<BarChart2 />} label="Analytics" />
              <NavItem icon={<Settings />} label="Settings" />
              <NavItem icon={<LogOut />} label="Log Out" />
            </nav>

            <div className="p-4 mb-4">
              <div className="bg-[#FFFFFF1F] rounded-[8px] px-4 py-2 flex flex-col gap-4">
                <ShieldUser />
                <div className="text-[12px] mb-2 font-bold leading-[12px]">
                  Got some questions, enquiries or need help?
                </div>
                <a href="#" className="text-[10px] text-yellow-400 underline">
                  Visit Mentity Help Desk Here
                </a>
              </div>
              <div className="mt-8 flex items-center justify-between gap-4">
                <span className="text-[12px] font-bold">
                  Switch to Classic Mode
                </span>
                <Switch />
              </div>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
