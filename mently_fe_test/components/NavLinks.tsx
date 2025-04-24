"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FcDocument } from "react-icons/fc";
import { BiHome, BiLogOut, BiUser, BiWallet } from "react-icons/bi";
import { BsActivity } from "react-icons/bs";
import { MdForum } from "react-icons/md";
import { GrAnalytics, GrHome } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";
import { PiParallelogramThin } from "react-icons/pi";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: GrHome },
  {
    name: "Programs",
    href: "/",
    icon: PiParallelogramThin,
  },
  {
    name: "Activities",
    href: "/",
    icon: BsActivity,
  },
  {
    name: "Users",
    href: "/",
    icon: BiUser,
  },
  {
    name: "Forums",
    href: "/",
    icon: MdForum,
  },
  {
    name: "Finances",
    href: "/",
    icon: BiWallet,
  },
  {
    name: "Analytics",
    href: "/",
    icon: GrAnalytics,
  },
  {
    name: "Settings",
    href: "/",
    icon: CiSettings,
  },
  {
    name: "Log Out",
    href: "/",
    icon: BiLogOut,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md  p-3 text-[16px] font-medium hover:bg-[#FFFFFF] hover:text-[#1F0954] md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-[#FFFFFF] text-[#1F0954]": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-[16px]" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
