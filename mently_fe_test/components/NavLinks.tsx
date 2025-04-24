"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home2,
  Book,
  ClipboardText,
  EmptyWallet,
  Award,
  Diagram,
  Setting2,
  Bubble,
  User,
  LogoutCurve,
} from "iconsax-react";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: Home2 },
  { name: "Programs", href: "/", icon: Book },
  { name: "Activities", href: "/", icon: Bubble },
  { name: "Users", href: "/", icon: User },
  { name: "Forums", href: "/", icon: ClipboardText },
  { name: "Finances", href: "/", icon: EmptyWallet },
  { name: "Analytics", href: "/", icon: Diagram },
  { name: "Reward", href: "/", icon: Award },
  { name: "Settings", href: "/", icon: Setting2 },
  { name: "Log Out", href: "/", icon: LogoutCurve },
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
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-[16px] font-medium hover:bg-[#FFFFFF] hover:text-[#1F0954] md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-[#FFFFFF] text-[#1F0954]": pathname === link.href,
              }
            )}
          >
            <LinkIcon
              variant="Linear"
              size={20}
              color={pathname === link.href ? "#1F0954" : "#C2C2C2"}
            />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
