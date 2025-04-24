"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Activity,
  Users,
  MessageSquare,
  DollarSign,
  Award,
  BarChart2,
  Settings,
  LogOut,
  HelpCircle,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  href: string;
  collapsed: boolean;
  comingSoon?: boolean;
  onClick?: () => void;
}

const NavItem = ({ 
  icon, 
  label, 
  isActive = false, 
  href, 
  collapsed, 
  comingSoon = false,
  onClick 
}: NavItemProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative"
    >
      <Link
        href={comingSoon ? "/coming-soon" : href}
        className={cn(
          "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
          isActive
            ? "bg-white text-[#340260] shadow-md"
            : "text-white/70 hover:text-white hover:bg-white/10",
          collapsed ? "justify-center" : ""
        )}
        onClick={onClick}
      >
        <span className="[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-[1.5]">
          {icon}
        </span>
        {!collapsed && <span>{label}</span>}
      </Link>
      
      {comingSoon && !collapsed && (
        <motion.span 
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-2 right-3 text-[10px] bg-[#6F01D0] text-white px-2 py-0.5 rounded-full shadow-sm"
        >
          Coming Soon
        </motion.span>
      )}
    </motion.div>
  );
};

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setShowSidebar(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    if (isMobile) {
      setShowSidebar(false);
    }
  };

  const isActive = (href: string) => {
    return pathname === href || 
           (pathname.startsWith(href) && href !== "/") || 
           (href === "/" && pathname === "/");
  };

  if (isMobile && !showSidebar) {
    return (
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={toggleSidebar}
        className="fixed z-40 left-4 top-4 p-2 rounded-md bg-[#6F01D0] text-white shadow-lg"
      >
        <Menu className="h-6 w-6" />
      </motion.button>
    );
  }

  return (
    <>
      {isMobile && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 z-30"
          onClick={closeSidebar}
        />
      )}
      <motion.div
        initial={{ x: isMobile ? -300 : 0 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "bg-[#340260] text-white flex flex-col h-full border-r border-white/10 fixed md:relative z-40",
          collapsed ? "w-20" : "w-64",
          isMobile ? "w-64" : "",
          !showSidebar && "hidden md:flex"
        )}
      >
        <div className="p-4 flex items-center justify-between border-b border-white/10">
          {!collapsed && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center"
            >
              <img 
                src="/logo.png" 
                width={100}
                height={100}
                alt="Logo"
                className="h-8 w-auto" 
              />
            </motion.div>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="text-white/70 hover:text-white hover:bg-white/10"
            onClick={() => isMobile ? setShowSidebar(false) : setCollapsed(!collapsed)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 flex flex-col gap-1 px-3 py-4 overflow-y-auto">
          {/* Dashboard - Always Active */}
          <NavItem
  href="/"
  icon={
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M7.51667 2.36667L3.025 5.86667C2.275 6.45 1.66667 7.69167 1.66667 8.63334V14.8083C1.66667 16.7417 3.24167 18.325 5.175 18.325H14.825C16.7583 18.325 18.3333 16.7417 18.3333 14.8167V8.75C18.3333 7.74167 17.6583 6.45 16.8333 5.875L11.6833 2.26667C10.5167 1.45 8.64167 1.49167 7.51667 2.36667Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M10 14.9917V12.4917" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  }
  label="Dashboard"
  isActive={isActive("/")}
  collapsed={collapsed}
  onClick={closeSidebar}
/>

          {/* Programs */}
          <NavItem
            href="/coming-soon"
            icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.91667 15V5.83334C2.91667 2.50001 3.75 1.66667 7.08333 1.66667H12.9167C16.25 1.66667 17.0833 2.50001 17.0833 5.83334V14.1667C17.0833 14.2833 17.0833 14.4 17.075 14.5167" stroke="#C2C2C2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.29167 12.5H17.0833V15.4167C17.0833 17.025 15.775 18.3333 14.1667 18.3333H5.83333C4.225 18.3333 2.91667 17.025 2.91667 15.4167V14.875C2.91667 13.5667 3.98333 12.5 5.29167 12.5Z" stroke="#C2C2C2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.66667 5.83333H13.3333" stroke="#C2C2C2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.66667 8.75H10.8333" stroke="#C2C2C2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              }
            label="Programs"
            isActive={isActive("/programs")}
            collapsed={collapsed}
            comingSoon={false}
            onClick={closeSidebar}
          />

          {/* Activities */}
          <NavItem
            href="/coming-soon"
            icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.9917 10.2167C15.3527 10.2167 17.2667 8.30268 17.2667 5.94166C17.2667 3.58064 15.3527 1.66666 12.9917 1.66666C10.6306 1.66666 8.71666 3.58064 8.71666 5.94166C8.71666 8.30268 10.6306 10.2167 12.9917 10.2167Z" stroke="#C2C2C2" stroke-width="1.5" stroke-miterlimit="10"/>
              <path d="M5.29999 16.2C6.71752 16.2 7.86667 15.0508 7.86667 13.6333C7.86667 12.2158 6.71752 11.0667 5.29999 11.0667C3.88246 11.0667 2.73333 12.2158 2.73333 13.6333C2.73333 15.0508 3.88246 16.2 5.29999 16.2Z" stroke="#C2C2C2" stroke-width="1.5" stroke-miterlimit="10"/>
              <path d="M13.85 18.3333C15.0282 18.3333 15.9833 17.3782 15.9833 16.2C15.9833 15.0218 15.0282 14.0667 13.85 14.0667C12.6718 14.0667 11.7167 15.0218 11.7167 16.2C11.7167 17.3782 12.6718 18.3333 13.85 18.3333Z" stroke="#C2C2C2" stroke-width="1.5" stroke-miterlimit="10"/>
              </svg>
              }
            label="Activities"
            isActive={isActive("/activities")}
            collapsed={collapsed}
            comingSoon={false}
            onClick={closeSidebar}
          />

          {/* Users */}
          <NavItem
            href="/coming-soon"
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 6C11.4696 6 10.9609 6.21071 10.5858 6.58579C10.2107 6.96086 10 7.46957 10 8C10 8.53043 10.2107 9.03914 10.5858 9.41421C10.9609 9.78929 11.4696 10 12 10C12.5304 10 13.0391 9.78929 13.4142 9.41421C13.7893 9.03914 14 8.53043 14 8C14 7.46957 13.7893 6.96086 13.4142 6.58579C13.0391 6.21071 12.5304 6 12 6ZM12 13C14.67 13 20 14.33 20 17V20H4V17C4 14.33 9.33 13 12 13ZM12 14.9C9.03 14.9 5.9 16.36 5.9 17V18.1H18.1V17C18.1 16.36 14.97 14.9 12 14.9Z" fill="#C2C2C2"/>
              </svg>
              }
            label="Users"
            isActive={isActive("/users")}
            collapsed={collapsed}
            comingSoon={false}
            onClick={closeSidebar}
          />

          {/* Forums */}
          <NavItem
            href="/coming-soon"
            icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.66667 10.1667H12.5" stroke="#C2C2C2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.66667 13.5H10.3167" stroke="#C2C2C2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.33333 4.99999H11.6667C13.3333 4.99999 13.3333 4.16666 13.3333 3.33332C13.3333 1.66666 12.5 1.66666 11.6667 1.66666H8.33333C7.5 1.66666 6.66667 1.66666 6.66667 3.33332C6.66667 4.99999 7.5 4.99999 8.33333 4.99999Z" stroke="#C2C2C2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.3333 3.35001C16.1083 3.50001 17.5 4.52501 17.5 8.33334V13.3333C17.5 16.6667 16.6667 18.3333 12.5 18.3333H7.5C3.33333 18.3333 2.5 16.6667 2.5 13.3333V8.33334C2.5 4.53334 3.89167 3.50001 6.66667 3.35001" stroke="#C2C2C2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              }
            label="Forums"
            isActive={isActive("/forums")}
            collapsed={collapsed}
            comingSoon={false}
            onClick={closeSidebar}
          />

          {/* Finances */}
          <NavItem
            href="/coming-soon"
            icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.0333 11.2916C14.6833 11.6333 14.4833 12.125 14.5333 12.65C14.6083 13.55 15.4333 14.2083 16.3333 14.2083H17.9167V15.2C17.9167 16.925 16.5083 18.3333 14.7833 18.3333H5.21667C3.49167 18.3333 2.08333 16.925 2.08333 15.2V9.59165C2.08333 7.86665 3.49167 6.45831 5.21667 6.45831H14.7833C16.5083 6.45831 17.9167 7.86665 17.9167 9.59165V10.7917H16.2333C15.7667 10.7917 15.3417 10.975 15.0333 11.2916Z" stroke="#C2C2C2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.08333 10.3416V6.53336C2.08333 5.54169 2.69167 4.65832 3.61667 4.30832L10.2333 1.80832C11.2667 1.41666 12.375 2.18335 12.375 3.29168V6.45834" stroke="#C2C2C2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.799 11.6418V13.3585C18.799 13.8169 18.4323 14.1918 17.9657 14.2085H16.3323C15.4323 14.2085 14.6073 13.5502 14.5323 12.6502C14.4823 12.1252 14.6823 11.6335 15.0323 11.2918C15.3407 10.9752 15.7657 10.7918 16.2323 10.7918H17.9657C18.4323 10.8085 18.799 11.1835 18.799 11.6418Z" stroke="#C2C2C2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.83333 10H11.6667" stroke="#C2C2C2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              }
            label="Finances"
            isActive={isActive("/finances")}
            collapsed={collapsed}
            comingSoon={false}
            onClick={closeSidebar}
          />

          {/* Rewards */}
          <NavItem
            href="/coming-soon"
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.26 11.02V15.99C4.26 17.81 4.26 17.81 5.98 18.97L10.71 21.7C11.42 22.11 12.58 22.11 13.29 21.7L18.02 18.97C19.74 17.81 19.74 17.81 19.74 15.99V11.02C19.74 9.2 19.74 9.2 18.02 8.04L13.29 5.31C12.58 4.9 11.42 4.9 10.71 5.31L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z" stroke="#C2C2C2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.5 7.63V5C17.5 3 16.5 2 14.5 2H9.5C7.5 2 6.5 3 6.5 5V7.56" stroke="#C2C2C2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.63 10.99L13.2 11.88C13.29 12.02 13.49 12.16 13.64 12.2L14.66 12.46C15.29 12.62 15.46 13.16 15.05 13.66L14.38 14.47C14.28 14.6 14.2 14.83 14.21 14.99L14.27 16.04C14.31 16.69 13.85 17.02 13.25 16.78L12.27 16.39C12.12 16.33 11.87 16.33 11.72 16.39L10.74 16.78C10.14 17.02 9.68 16.68 9.72 16.04L9.78 14.99C9.79 14.83 9.71 14.59 9.61 14.47L8.94 13.66C8.53 13.16 8.7 12.62 9.33 12.46L10.35 12.2C10.51 12.16 10.71 12.01 10.79 11.88L11.36 10.99C11.72 10.45 12.28 10.45 12.63 10.99Z" stroke="#C2C2C2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>}
            label="Rewards"
            isActive={isActive("/rewards")}
            collapsed={collapsed}
            comingSoon={false}
            onClick={closeSidebar}
          />

          {/* Analytics */}
          <NavItem
            href="/coming-soon"
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2V19C2 20.66 3.34 22 5 22H22" stroke="#C2C2C2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5 17L9.59 11.64C10.35 10.76 11.7 10.7 12.52 11.53L13.47 12.48C14.29 13.3 15.64 13.25 16.4 12.37L21 7" stroke="#C2C2C2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              }
            label="Analytics"
            isActive={isActive("/analytics")}
            collapsed={collapsed}
            comingSoon={true}
            onClick={closeSidebar}
          />

          {/* Settings */}
          <NavItem
            href="/coming-soon"
            icon={<Settings className="text-current" />}
            label="Settings"
            isActive={isActive("/settings")}
            collapsed={collapsed}
            comingSoon={false}
            onClick={closeSidebar}
          />

          {/* Log Out */}
          <NavItem
            href="/"
            icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.41667 6.30001C7.675 3.30001 9.21667 2.07501 12.5917 2.07501H12.7C16.425 2.07501 17.9167 3.56668 17.9167 7.29168V12.725C17.9167 16.45 16.425 17.9417 12.7 17.9417H12.5917C9.24167 17.9417 7.7 16.7333 7.425 13.7833" stroke="#C2C2C2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.5 10H3.01667" stroke="#C2C2C2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.875 7.20831L2.08333 9.99998L4.875 12.7916" stroke="#C2C2C2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              }
            label="Log Out"
            isActive={isActive("/logout")}
            collapsed={collapsed}
            onClick={closeSidebar}
          />
        </div>

        <div className="p-4 border-t border-white/10" >
          <div className="text-sm text-white/70 ">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 15.7166H14.3667C13.7 15.7166 13.0667 15.975 12.6 16.4416L11.175 17.85C10.525 18.4916 9.46668 18.4916 8.81668 17.85L7.39166 16.4416C6.925 15.975 6.28333 15.7166 5.625 15.7166H5C3.61667 15.7166 2.5 14.6083 2.5 13.2417V4.14996C2.5 2.7833 3.61667 1.67499 5 1.67499H15C16.3833 1.67499 17.5 2.7833 17.5 4.14996V13.2417C17.5 14.6 16.3833 15.7166 15 15.7166Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 8.33332C11.0724 8.33332 11.9417 7.464 11.9417 6.39164C11.9417 5.31929 11.0724 4.45001 10 4.45001C8.92765 4.45001 8.05832 5.31929 8.05832 6.39164C8.05832 7.464 8.92765 8.33332 10 8.33332Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3333 13.05C13.3333 11.55 11.8417 10.3334 10 10.3334C8.15833 10.3334 6.66667 11.55 6.66667 13.05" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            {!collapsed && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs mb-2"
              >
                Got some questions, enquiries or need help?
              </motion.p>
            )}
            <Link
              href="/help"
              className={cn(
                "flex items-center gap-2 hover:text-white transition-colors text-xs font-medium",
                collapsed ? "justify-center" : ""
              )}
              onClick={closeSidebar}
            >
          

              {!collapsed && <span className="underline text-[#F0C074]">Visit Merity Help Desk Here</span>}
            </Link>
          </div>
          
          {!collapsed && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-between mt-4"
            >
              <span className="text-xs">Switch to Classic Mode</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#6F01D0]"></div>
              </label>
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  );
}