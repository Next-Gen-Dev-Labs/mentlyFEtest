"use client";
import Navlink from "./nav-links";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [buttonState, toggleButtonState] = useState(true);
  const [navOpen, toggleNav] = useState(true);
  const [mobileNavOpen, toggleMobileNav] = useState(false);

  const toggleNavBar = () => {
    toggleNav(!navOpen);
  };

  const toggleMobileNavBar = () => {
    toggleMobileNav(!mobileNavOpen);
  };

  const switchMode = () => {
    toggleButtonState(!buttonState);
  };

  const navLinks = [
    {
      link: "/",
      icon: "dashboard.svg",
      description: "Dashboard",
      active: true,
    },
    {
      link: "/programs",
      icon: "programs.svg",
      description: "Programs",
      active: false,
    },
    {
      link: "/activities",
      icon: "activities.svg",
      description: "Activities",
      active: false,
    },
    {
      link: "/users",
      icon: "users.svg",
      description: "Users",
      active: false,
    },
    {
      link: "/forums",
      icon: "forums.svg",
      description: "Forums",
      active: false,
    },
    {
      link: "/finances",
      icon: "finances.svg",
      description: "Finances",
      active: false,
    },
    {
      link: "/rewards",
      icon: "rewards.svg",
      description: "Rewards",
      active: false,
    },
    {
      link: "/analytics",
      icon: "analytics.svg",
      description: "Analytics",
      active: false,
    },
    {
      link: "/settings",
      icon: "settings.svg",
      description: "Settings",
      active: false,
    },
    {
      link: "/logout",
      icon: "logout.svg",
      description: "Logout",
      active: false,
    },
  ];

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-[50] bg-[#340260] text-white w-screen h-[64px] lg:h-[70px] ${
          navOpen ? "lg:w-[240px]" : "lg:w-[50px] pr-2"
        } lg:relative flex flex-col transition-all duration-300 ease-in-out`}
      >
        <div
          className={`bg-[#340260] py-5 ${navOpen ? "px-4" : ""} flex items-center ${
            navOpen || mobileNavOpen ? "justify-between" : "justify-center"
          } h-[64px] lg:h-[70px]`}
        >
          <Link href="/" className="ml-2">
            <Image
              src="/techrity-logo.png"
              alt="Techrity Logo"
              width={117}
              height={27}
              className={navOpen || mobileNavOpen ? "" : "lg:hidden"}
            />
          </Link>
          <button
            className="lg:hidden cursor-pointer"
            onClick={toggleMobileNavBar}
          >
            {mobileNavOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
          <button
            className="cursor-pointer hidden lg:inline-block"
            onClick={toggleNavBar}
          >
            <Image
              src="/icons/nav-toggle.svg"
              alt="Navbar Toggle Button"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-[64px] left-0 w-screen bg-[#340260] text-white z-[55] px-4 py-5 space-y-4 max-h-[calc(100vh-64px)] overflow-y-auto"
          >
            {navLinks.map((navLink, index) => (
              <Navlink key={index} {...navLink} />
            ))}
            <div className="bg-gray-500 p-3 px-4 rounded-lg mt-6 text-white">
              <Image
                src="/icons/user-tag.svg"
                alt="User Tag Icon"
                width={20}
                height={20}
              />
              <p className="font-semibold text-md mt-2">
                Got some questions, enquiries or need help?
              </p>
              <Link
                href="/"
                className="text-[#F0C074] text-sm underline text-decoration-underline"
              >
                Visit Mently Help Desk Here
              </Link>
            </div>
            <div className="flex flex-row items-center justify-between mt-4 text-white">
              <p className="font-semibold text-sm">Switch to Classic Mode</p>
              <button className="cursor-pointer text-lg">
                {buttonState ? (
                  <ToggleOnIcon onClick={switchMode} />
                ) : (
                  <ToggleOffIcon onClick={switchMode} />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className={`hidden lg:block bg-[#340260] ${
          navOpen ? "w-[240px]" : "w-[50px]"
        } h-[calc(100vh-70px)] fixed top-[70px] left-0 overflow-y-auto scrollbar-thin z-[100] transition-all duration-300 ease-in-out sidebar`}
      >
        {navOpen && (
          <div className="px-4 space-y-4">
            {navLinks.map((navLink, index) => (
              <Navlink key={index} {...navLink} />
            ))}
            <div className="bg-gray-500 p-3 px-4 rounded-lg mt-6 text-white">
              <Image
                src="/icons/user-tag.svg"
                alt="User Tag Icon"
                width={20}
                height={20}
              />
              <p className="font-semibold text-md mt-2">
                Got some questions, enquiries or need help?
              </p>
              <Link
                href="/"
                className="text-[#F0C074] text-sm underline text-decoration-underline"
              >
                Visit Mently Help Desk Here
              </Link>
            </div>
            <div className="flex flex-row items-center justify-between mt-4 text-white">
              <p className="font-semibold text-sm">Switch to Classic Mode</p>
              <button className="cursor-pointer text-lg">
                {buttonState ? (
                  <ToggleOnIcon onClick={switchMode} />
                ) : (
                  <ToggleOffIcon onClick={switchMode} />
                )}
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}
