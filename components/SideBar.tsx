'use client';
import { useEffect, useState } from 'react';
import {
  Menu,
  X,
  LayoutDashboard,
  Layers,
  Clock,
  Users,
  MessageCircle,
  DollarSign,
  Gift,
  BarChart2,
  Settings,
  LogOut,
} from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Dashboard', icon: <LayoutDashboard />, active: true },
  { name: 'Programs', icon: <Layers /> },
  { name: 'Activities', icon: <Clock /> },
  { name: 'Users', icon: <Users /> },
  { name: 'Forums', icon: <MessageCircle /> },
  { name: 'Finances', icon: <DollarSign /> },
  { name: 'Rewards', icon: <Gift /> },
  { name: 'Analytics', icon: <BarChart2 />, tag: 'Coming Soon' },
  { name: 'Settings', icon: <Settings /> },
  { name: 'Log Out', icon: <LogOut /> },
];

export function SideBar() {
  const [open, setOpen] = useState(false);
  const [classicMode, setClassicMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('classic-mode');
    if (savedMode === 'true') {
      setClassicMode(true);
      document.body.classList.add('classic-mode');
    }
  }, []);

  const handleToggleClassicMode = () => {
    const newMode = !classicMode;
    setClassicMode(newMode);
    localStorage.setItem('classic-mode', String(newMode));
    document.body.classList.toggle('classic-mode', newMode);
    console.log('Classic Mode:', newMode ? 'ON' : 'OFF');
  };

  return (
    <>
      <button
        className="md:hidden p-3 fixed top-4 left-4 z-50 bg-purple-900 text-white rounded"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>

      <aside
        className={`bg-purple-900 text-white w-64 h-full fixed top-0 left-0 z-40 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="p-5">
          <div className="flex items-center gap-2 mb-8">
            <span className="text-xl font-bold tracking-wide">techrity</span>
          </div>

          <nav className="flex flex-col gap-2">
            {navLinks.map(({ name, active, tag, icon }) => (
              <div
                key={name}
                className={`flex items-center justify-between px-4 py-3 rounded-md cursor-pointer transition-colors ${
                  active ? 'bg-white text-purple-900 font-semibold' : 'hover:bg-purple-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{icon}</span>
                  <span className="text-sm">{name}</span>
                </div>
                {tag && (
                  <span className="text-xs bg-yellow-400 text-black px-2 py-0.5 rounded">
                    {tag}
                  </span>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="p-5 space-y-4 text-sm">
          <div className="bg-purple-800 p-4 rounded-md text-white text-sm leading-snug">
            Got some questions, enquiries or need help? <br />
            <Link href="#" className="underline">
              Visit Mently Help Desk
            </Link>
          </div>

          <div className="bg-purple-800 px-4 py-3 rounded-md flex justify-between items-center">
            <span className="text-white font-medium">Switch to Classic Mode</span>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={classicMode}
                onChange={handleToggleClassicMode}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 relative transition-all duration-300">
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
              </div>
            </label>
          </div>
        </div>
      </aside>
    </>
  );
}
