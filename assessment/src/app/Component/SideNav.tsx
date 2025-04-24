"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Dashboard from "../Screens/Dashboard";
import Analytics from "../Screens/Analytics";
import Activity from "../Screens/Activity";
import Finances from "../Screens/Finances";
import Forums from "../Screens/Forum";
import Logout from "../Screens/Logout";
import Programs from "../Screens/Programs";
import Rewards from "../Screens/Rewards";
import User from "../Screens/Users";

interface MenuItem {
  id: number;
  name: string;
  image: string;
  content: React.JSX.Element;
}

function SideNav() {
  const [isActive, setIsActive] = useState<MenuItem | null>(null);
  const [selectedMenu, setSelectedMenu] = useState<MenuItem | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: 1,
      name: "Dashboard",
      image: "/icon.svg",
      content: <Dashboard />,
    },
    {
      id: 2,
      name: "Programs",
      image: "/book.svg",
      content: <Programs />,
    },
    {
      id: 3,
      name: "Activities",
      image: "/bubble-chart.svg",
      content: <Activity />,
    },
    {
      id: 4,
      name: "User",
      image: "/muser.svg",
      content: <User />,
    },
    {
      id: 5,
      name: "Forums",
      image: "/clipboard-notes.svg",
      content: <Forums />,
    },
    {
      id: 6,
      name: "Finances",
      image: "/empty-wallet.svg",
      content: <Finances />,
    },
    {
      id: 7,
      name: "Rewards",
      image: "/award.svg",
      content: <Rewards />,
    },
    {
      id: 8,
      name: "Analytics",
      image: "/diagram.svg",
      content: <Analytics />,
    },
    {
      id: 9,
      name: "Settings",
      image: "/settings.svg",
      content: <Analytics />,
    },
    {
      id: 10,
      name: "LogOut",
      image: "/logout.svg",
      content: <Logout />,
    },
  ]);

  useEffect(() => {
    if (menuItems.length > 0) {
      setSelectedMenu(menuItems[0]);
      setIsActive(menuItems[0]);
    }
  }, [menuItems]);

  const handleMenuClick = (menu: MenuItem) => {
    setSelectedMenu(menu);
    setIsActive(menu);
    setIsSidebarOpen(false); // Close sidebar on menu item click in mobile view
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-purple2 text-white rounded-md"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-purple2 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:w-64 transition-transform duration-300 ease-in-out flex flex-col mx-auto `}
      >
        <div className="py-4 px-4">
          <Image src="/tag.svg" alt="tag" width={116} height={27} />
        </div>
        <nav className="flex-1 text-white1">
          <ul className="py-8 px-4">
            {menuItems.map((menu) => (
              <li key={menu.id}>
                <button
                  className={`flex gap-2 items-center w-full text-sm font-semibold py-2 px-3 mb-3 rounded ${
                    isActive?.id === menu.id
                      ? "bg-white1 text-purple2"
                      : "hover:bg-purple-700"
                  }`}
                  onClick={() => handleMenuClick(menu)}
                >
                  <Image
                    src={menu.image}
                    alt={menu.name}
                    height={20}
                    width={20}
                  />
                  <span>{menu.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 w-full">
        {selectedMenu?.content}
      </main>
    </div>
  );
}

export default SideNav;