// components/SidebarLink.tsx
import { useState } from "react";
import Link from "next/link";
import { DashboardIcon, ProgramsIcon } from "./SidebarIcons";

import { motion } from "motion/react";
import { div } from "motion/react-client";

interface LinkItem {
  id: number;
  label: string;
  href: string;
}

interface SidebarLinkProps {
  link: LinkItem;
  isActive: boolean;
  open: boolean;
  notifs?: string;
  onClick: (id: number) => void;
}

const iconComponents: Record<
  string,
  React.FC<{ isActive: boolean; isHovered: boolean }>
> = {
  Dashboard: DashboardIcon,
  Programs: ProgramsIcon,
};

export const SidebarLink: React.FC<SidebarLinkProps> = ({
  link,
  isActive,
  open,
  notifs,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconComponents[link.label];

  return (
    <motion.div layout>
      <Link href={link.href} passHref>
        <motion.div
          layout
          className={`relative flex items-center gap-[32px] my-4 rounded-lg cursor-pointer transition-all duration-200
          ${isActive ? " text-white" : "hover:bg-secondary/10"} `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={
            open ? { padding: "16px 32px 16px 32px" } : { padding: "10px" }
          }
        >
          {/* link svg icon */}
          <div className="relative z-10">
            <IconComponent isActive={isActive} isHovered={isHovered} />
          </div>

          {/* link name */}
          <span
            className={` ${
              isActive ? "text-textactive" : "text-textnotactive"
            }`}
          >
            {open && (
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.125 }}
                layout
                className="relative z-10"
              >
                {link.label}
              </motion.span>
            )}

            {isActive && (
              <motion.div
                layoutId="active-pill"
                // transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white rounded-[8px]"
              />
            )}
          </span>

          {/* notifications */}
          {notifs && open && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute right-0 -top-[1px] px-[4px] py-[2px] rounded bg-indigo-500 text-[10px] text-white w-fit"
            >
              {notifs}
            </motion.span>
          )}
        </motion.div>
      </Link>
    </motion.div>
  );
};
