import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Home2, Book, Bubble, ClipboardText, EmptyWallet, 
  Award, Diagram, Setting2, LogoutCurve, UserTag, Grid4, HambergerMenu,
  CloseSquare,
  ClipboardClose,
  CloseCircle
} from "iconsax-react";
import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";
import Image from "next/image";

const Sidebar = () => {
  const [active, setActive] = useState("home");
  const [hovered, setHovered] = useState(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { icon: Home2, name: "Home", id: "home", size: 20 },
    { icon: Book, name: "Program", id: "program", size: 20 },
    { icon: Bubble, name: "Archive", id: "archive", size: 20 },
    { icon: ClipboardText, name: "Folder", id: "folder", size: 20 },
    { icon: EmptyWallet, name: "Wallet", id: "wallet", size: 20 },
    { icon: Award, name: "Awards", id: "awards", size: 20 },
    { icon: Diagram, name: "Diagram", id: "diagram", size: 24, badge: true },
    { icon: Setting2, name: "Settings", id: "settings", size: 24 },
    { icon: LogoutCurve, name: "Logout", id: "logout", size: 22 }
  ];

  return (
    <>
      {/* Toggle Button for Small Screens */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 bg-primary p-2 rounded-full"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ?  <CloseCircle size={34} color="#fff" /> :<HambergerMenu size={24} color="#fff" />}
      </button>

      <motion.div
         initial={{ x: -120 }}
         animate={{ x: 0 }}
         exit={{ x: -120 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={`fixed z-40 top-0 left-0 w-[110px] h-screen bg-primary dark:bg-gray-900 flex flex-col py-[36px] gap-[80px] transition-all duration-500
          overflow-y-auto no-scrollbar ${isSidebarOpen ? "block" : "hidden"} md:flex`}
      >
        {/* Logo & Grid Icon */}
        <div className={`flex flex-col items-center gap-[40px] ${isSidebarOpen ? "mt-[50px]" : "0"}`}>
          <Image src="/images/logo.png" alt="Logo" width={47} height={32} />
          <Grid4 size="32" color="#fff" />
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col items-center space-y-3 flex-1">
          {navItems.map((item) => (
            <SidebarItem
              key={item.id}
              {...item}
              active={active}
              setActive={setActive}
              hovered={hovered}
              setHovered={setHovered}
            />
          ))}
        </nav>

        {/* Bottom Section (Docs Link & Theme Toggle) */}
        <div className="flex flex-col items-center space-y-6">
          <div className="p-3 bg-[#3F2C7B] dark:bg-gray-700 rounded-md w-[84px] flex flex-col items-center gap-5">
            <UserTag size={20} color="#fff" />
            <p className="text-tertiary underline text-[11px] text-left">
              Visit Mently Help Desk Here
            </p>
          </div>
          {mounted && (
            <Switch
              checked={theme === "dark"}
              onChange={toggleTheme}
              className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-white"
            >
              <motion.span
                initial={{ x: theme === "dark" ? 24 : 0 }}
                animate={{ x: theme === "dark" ? 24 : 0 }}
                transition={{ duration: 0.2 }}
                className={`inline-block w-4 h-4 rounded-full transition-transform ${
                  theme === "dark" ? "bg-black" : "bg-[#2A1B5C]"
                }`}
              />
            </Switch>
          )}
        </div>
      </motion.div>
    </>
  );
};

const SidebarItem = ({ icon: Icon, name, id, active, setActive, hovered, setHovered, size, badge }) => (
  <Link href={id === "home" ? "/" : `/${id}`} passHref>
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`relative p-3 rounded-lg flex items-center justify-center cursor-pointer transition duration-200 py-[16px] px-[32px]
        ${active === id ? "bg-white text-primary" : "text-gray-300 hover:bg-secondary hover:text-primary"}`}
      onClick={() => setActive(id)}
      onMouseEnter={() => setHovered(id)}
      onMouseLeave={() => setHovered(null)}
    >
      {/* Icon Wrapper with Badge */}
      <div className="relative">
        <Icon size={size} color={active === id || hovered === id ? "#2A1B5C" : "#fff"} />
        {badge && (
          <span className="absolute -top-2 -right-5 w-[20px] h-[12px] bg-[#0214BD38] rounded-md"></span>
        )}
      </div>
      {hovered === id && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/4 bg-black text-white text-[12px] rounded-md px-2 py-1 shadow-md whitespace-nowrap z-20 w-100 mt-4"
        >
          {name}
        </motion.div>
      )}
    </motion.div>
  </Link>
);

export default Sidebar;
