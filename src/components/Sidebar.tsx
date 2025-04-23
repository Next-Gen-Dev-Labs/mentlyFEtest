// src/components/Sidebar.tsx
import { FC } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  BookOpen, 
  Activity, 
  UserCircle, 
  MessageCircle, 
  Wallet, 
  Award, 
  BarChart2, 
  Settings, 
  LogOut} from 'lucide-react';
import Image from 'next/image';

const Sidebar: FC = () => {
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
    { name: 'Programs', icon: BookOpen, href: '/programs' },
    { name: 'Activities', icon: Activity, href: '/activities' },
    { name: 'Users', icon: UserCircle, href: '/users' },
    { name: 'Forums', icon: MessageCircle, href: '/forums' },
    { name: 'Finances', icon: Wallet, href: '/finances' },
    { name: 'Rewards', icon: Award, href: '/rewards' },
    { name: 'Analytics', icon: BarChart2, href: '/analytics' },
    { name: 'Settings', icon: Settings, href: '/settings' },
    { name: 'Log Out', icon: LogOut, href: '/logout' },
  ];

  return (
    <div className="hidden md:flex flex-col w-60 bg-purple-900 text-white">
      <div className="flex items-center p-4">
        <div className="text-2xl font-bold flex items-center">
          <Image 
            src="/images/rpp10.jpg" 
            alt="Techrity Logo" 
            width={24} 
            height={24} 
            className="mr-2"
          />
          <span>techrity</span>
        </div>
      </div>
      
      <nav className="flex-1 py-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} 
                    className="flex items-center p-4 hover:bg-purple-800 transition-colors">
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-purple-800">
        <div className="text-sm mb-2">Got some questions, enquiries or need help?</div>
        <Link href="#" className="text-xs text-purple-300 underline">
          Visit Mentor Help Desk page
        </Link>
        <div className="flex items-center justify-between mt-4 p-2 bg-purple-950 rounded">
          <span className="text-xs">Switch to Classic Mode</span>
          <div className="w-12 h-6 bg-purple-700 rounded-full p-1 flex items-center">
            <div className="bg-white rounded-full w-4 h-4 shadow-md transform translate-x-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;