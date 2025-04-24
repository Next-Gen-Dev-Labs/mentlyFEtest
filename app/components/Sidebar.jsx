"use client";
import Image from "next/image";
import logo from "../assets/techrify-logo.png"
import Link from "next/link";
import { DashboardIcon, Program, Activities, Users, Forums, Finances, Rewards, Analytics, Settings, Logout, UserTag  } from "../assets/icons/sideBarIcons";
import { ClosingBar } from "../assets/icons/sideBarIcons";
import { usePathname } from "next/navigation";
import { useState } from "react";

// components/Sidebar.tsx
const sideBarItems = [
    { name: "Dashboard", icon: <DashboardIcon />, link:"/"
    },
    { name: "Programs", icon: < Program />, link:"/"
    },
    { name: "Activities", icon: <Activities />, link:"/"
    },
    { name: "Users", icon: <Users />, link:"/"
    },
    { name: "Forums", icon: <Forums />, link:"/"
    },
    { name: "Finances", icon: <Finances />, link:"/"
    },
    { name: "Rewards", icon: <Rewards />, link:"/"
    },
    { name: "Analytics", icon: <Analytics />, link:"/"
    },
    { name: "Settings", icon: <Settings />, link:"/"
    },
    { name: "Log Out", icon: <Logout />, link:"/"
    },
    
  ];  
  
  export default function Sidebar({ isOpen, toggleSidebar }) {
    const pathName = usePathname();
    const [isClassic, setIsClassic] = useState(false);
    return (
      <aside  className={`bg-[#340260] text-white h-screen overflow-y-auto overscroll-none p-4 fixed top-0 left-0 z-[1000]  transition-transform duration-300 ${
        isOpen ? 'translate-x-0 w-[240px]' : '-translate-x-full w-[240px]'
      }`}>
          <div className="flex gap-[21px] justify-between mt-[36px] ml-[36.39px] mb-[70px]">
        <Image src={logo} width={116} height={27} alt="Logo" />
        <button onClick={toggleSidebar} >
          <ClosingBar />
        </button>
      </div>
       
        <ul className="mt-11 space-y-2">
  {sideBarItems.map((item, idx) => (
    <li key={idx}>
      <Link  href={item.link} className={`flex items-center gap-11 px-[32px] py-[16px] rounded-md cursor-pointer text-[#C2C2C2] hover:text-[#1F0954] hover:bg-[#FFFFFF] transition-colors duration-200 `}>
        <div className="w-5 h-5 text-inherit">{item.icon}</div>
        <span className="text-[16px] font-medium text-inherit">{item.name}</span>
      </Link>
    </li>
  ))}
</ul>

{/* user help desk */}
<div className="bg-[#340345] mt-[70px] p-4 rounded-md w-full">
  <UserTag />

  <p className="text-[12px] text-[#C2C2C2] mt-4 font-[700]">
    Got some questions, enquiries or need help?
  </p>

  <Link
    href="/"
    className="block mt-3 text-[10px] font-medium text-[#F0C074]  underline transition-colors duration-200"
  >
    Visit Mently Help Desk Here
  </Link>
</div>

      {/* swich to classic mode */}
      <div className="flex items-center justify-center mt-10 h-[14px] mb-[100px]">
      <input
        type="checkbox"
        id="switch-mode"
        className="hidden"
        checked={isClassic}
        onChange={() => setIsClassic(!isClassic)}
      />
      <label htmlFor="switch-mode" className="flex items-center cursor-pointer">
        <span className="mr-5 text-[12px] text-[#F2F2F2] font-[700]">
          Switch to Classic Mode
        </span>
        <span className="w-[30.23px] h-[15.62px] bg-[#F6F6F6] rounded-full relative">
  <span
    className={`absolute inset-y-0 right-0 my-auto w-[11.69px] h-[11.69px] bg-[#1F0954] rounded-full transition-transform duration-300 ${
      isClassic ? "right-[18px]" : "right-0"
    }`}
  />
</span>
      </label>
    </div>
      </aside>
    );
  }
  