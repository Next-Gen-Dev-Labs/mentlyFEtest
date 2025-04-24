'use client';

import { cn } from '@/app/lib/utils';
import NavLinks from './NavLinks';
import Image from 'next/image';
import HelpDeskCard from '@/app/components/shared/help-desk-card';
import { AppSwitch } from '@/app/components/shared/app-switch';

type SidebarProps = {
  openMobileMenu: boolean;
  setOpenMobileMenu: () => void;
};

export default function Sidebar({
  openMobileMenu,
  setOpenMobileMenu,
}: SidebarProps) {
  return (
    <div
      className={cn(
        openMobileMenu ? 'translate-x-0' : '-translate-x-full',
        'xl:translate-x-0 transition bg-[#340260] duration-500 flex h-dvh z-50 fixed w-[260px] px-3 pt-7 flex-col justify-between'
      )}
    >
      <div className="space-y-8   overflow-y-auto">
        <div className="space-y-4">
          <div className="flex items-center px-2 justify-between ">
            <Image
              src="/logo.svg"
              alt="Mently Logo"
              width={100}
              height={40}
              className="w-24 h-8 "
            />
            <Image
              src="/minimize.svg"
              alt="Close Menu"
              width={24}
              height={24}
              className="cursor-pointer "
              onClick={setOpenMobileMenu}
            />
          </div>
        </div>
        <NavLinks
          onNavLinkClick={setOpenMobileMenu}
          isMobile={openMobileMenu}
        />
        <HelpDeskCard />
        <AppSwitch
          label="Switch to Classic Mode"
          id="classic-mode"
          onChange={value => console.log(value)}
        />
      </div>
    </div>
  );
}
