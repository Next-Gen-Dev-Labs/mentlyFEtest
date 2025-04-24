"use client"
import Link from 'next/link'
import React from 'react'
import {sidebarData} from "../utils/Data"

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import HelpBox from '../ui/HelpBox';
import { Icons } from '../Icons';
interface SideBarNavigationProps {
  closeMenu?: () => void;
}

const SideBarNavigation = ({ closeMenu }: SideBarNavigationProps) => {
  const pathname = usePathname();

  return (
    <div className="relative">
      <nav className="bg-[#340260] fixed top-0 left-0 w-[15rem] h-full px-4 pt-6 pb-20 overflow-y-auto">
        <div className="flex justify-between gap-10 py-5 bg-[#340260] items-center">
          <Image width={150} height={150} className="object-cover pl-5" src="/logo-techrity.png" alt="mently-logo" />
          <Image width={25} height={20} className="object-fit" src="/grid-4.png" alt="grid-icon" />
        </div>

        <ul className="flex flex-col pt-14 gap-2 flex-1 text-base">
          {sidebarData.map((link) => (
            <li key={link.name}>
              <Link
                onClick={closeMenu}
                className={`px-8 font-chivo transition-colors hover:bg-[#FFFFFF] hover:text-[#2e1147] hover:rounded-lg  flex items-center gap-8 text-[#C2C2C2] ${
                  pathname === link.href ? 'text-[#2e1147]  py-4 bg-[#FFFFFF] rounded-lg' : 'py-[15px]'
                }`}
                href={link.href}
              >
                {link.icon}
                <span className="capitalize text-base">{link.name}</span>
              </Link>
            </li>
          ))}

          <div className="mt-10 ">
            <HelpBox />
            <div className="flex items-center justify-between mt-5">
              <p className="text-xs font-chivo text-[#F2F2F2]">Switch to Classic Mode</p>
              <Icons.switch />
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
};



export default SideBarNavigation
