import { useState } from "react";
import Link from "next/link";
import { Home2, Book, Bubble, ClipboardText, EmptyWallet, Award, Diagram, Chart, Setting2, LogoutCurve, Moon, UserTag,Grid4 } from "iconsax-react";
const Sidebar = () => {
    const [active, setActive] = useState("home");
    const [hovered, setHovered] = useState(null);
  
    const navItems = [
        { icon: Home2, name: "Home", id: "home", size: 20 },
        { icon: Book, name: "Profile", id: "profile", size: 20 },
        { icon: Bubble, name: "Archive", id: "archive", size: 20 },
        { icon: ClipboardText, name: "Folder", id: "folder", size: 20 },
        { icon: EmptyWallet, name: "Wallet", id: "wallet", size: 20 },
        { icon: Award, name: "Awards", id: "awards", size: 20 },
        { icon: Diagram, name: "Diagram", id: "diagram", size: 24 },
        { icon: Setting2, name: "Settings", id: "settings", size: 24 },
        { icon: LogoutCurve, name: "Logout", id: "logout", size: 22 }
      ];
      
  
    return (
      <div className="w-[120px] bg-primary flex flex-col py-[36px] no-scrollbar relative h-full overflow-y-auto gap-[80px]">
        {/* 🟣 Logo & Grid Icon */}
        <div className="flex flex-col items-center gap-[40px]">
          <img src="/images/logo.png" alt="Logo" width={47.03} height={32} />
          <Grid4 size="32" color="#fff" />
        </div>
  
        {/* 🟣 Navigation Items */}
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
  
        {/* 🟣 Bottom Section (Docs Link & Toggle) */}
        <div className="flex flex-col items-center space-y-6">
          <div className="p-3 bg-[#3F2C7B] text-white text-xs text-center rounded-md w-[80px]">
            <p>Visit Identity Hub Docs</p>
          </div>
          <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition">
            <Moon variant="Bold" size={22} color="#fff" />
          </button>
        </div>
      </div>
    );
  };
  
  const SidebarItem = ({ icon: Icon, name, id, active, setActive, hovered, setHovered, size }) => (
    <Link href={id === "home" ? "/" : `/${id}`} passHref>
      <div
        className={`relative p-3 rounded-lg flex items-center justify-center cursor-pointer transition duration-200 py-[16px] px-[32px]
          ${active === id ? "bg-white text-primary" : "text-gray-300 hover:bg-secondary hover:text-primary"}`}
        onClick={() => setActive(id)}
        onMouseEnter={() => setHovered(id)}
        onMouseLeave={() => setHovered(null)}
      >
        <Icon size={size} color={active === id || hovered === id ? "#2A1B5C" : "#fff"} />
  
        {/* Tooltip */}
        {hovered === id && (
       <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm rounded-md px-2 py-1 shadow-md whitespace-nowrap z-20 w-100 mt-4">
       {name}
     </div>
        )}
      </div>
    </Link>
  );
  
  

export default Sidebar;