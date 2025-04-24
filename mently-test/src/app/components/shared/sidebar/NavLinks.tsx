'use client';

import { usePathname, useRouter } from 'next/navigation';
import { RxDashboard } from 'react-icons/rx';
import { HiOutlineUser } from 'react-icons/hi2';
import { IoSettingsOutline } from 'react-icons/io5';
import { cn } from '@/app/lib/utils';
import { JSX } from 'react';

type NavLinksProps = {
  onNavLinkClick: () => void;
  isMobile: boolean;
};

export default function NavLinks({ onNavLinkClick, isMobile }: NavLinksProps) {
  const pathname = usePathname();
  const router = useRouter();

  interface NavItem {
    name: string;
    icon: JSX.Element;
    path: string;
  }

  const navLinks: NavItem[] = [
    {
      name: 'Home',
      icon: <RxDashboard size={17.5} />,
      path: '/dashboard',
    },
    {
      name: 'Programs',
      icon: <HiOutlineUser size={17.5} />,
      path: '/programs',
    },
    {
      name: 'Activities',
      icon: <IoSettingsOutline size={17.5} />,
      path: '/activities',
    },
    {
      name: 'Users',
      icon: <RxDashboard size={17.5} />,
      path: '/users',
    },
    {
      name: 'Forums',
      icon: <HiOutlineUser size={17.5} />,
      path: '/forums',
    },
    {
      name: 'Finances',
      icon: <IoSettingsOutline size={17.5} />,
      path: '/finances',
    },
    {
      name: 'Rewards',
      icon: <RxDashboard size={17.5} />,
      path: '/rewards',
    },
    {
      name: 'Analytics',
      icon: <HiOutlineUser size={17.5} />,
      path: '/analytics',
    },
    {
      name: 'Settings',
      icon: <IoSettingsOutline size={17.5} />,
      path: '/settings',
    },
    {
      name: 'Log Out',
      icon: <IoSettingsOutline size={17.5} />,
      path: '/logout',
    },
  ];

  const isPathActive = (path: string) => {
    return pathname === path;
  };

  const handleNavLinkClick = (path: string) => {
    router.push(path);
    if (isMobile) {
      onNavLinkClick();
    }
  };

  return (
    <nav className="transition-all font-chivo  duration-300 ease-in-out">
      <ul className="flex flex-col gap-y-1">
        {navLinks.map(item => {
          const isActive = isPathActive(item.path);

          return (
            <li key={item.path}>
              <button
                onClick={() => handleNavLinkClick(item.path)}
                className={cn(
                  'flex items-center text-gray-400 gap-x-8 text-base py-4 px-8  w-full rounded-md outline-none border-none',
                  isActive
                    ? 'bg-white text-[#340260]'
                    : 'text-gray-400 hover:bg-gray-100'
                )}
                aria-current={isActive ? 'page' : undefined}
                aria-label={`Navigate to ${item.name}`}
              >
                <span>{item.icon}</span>
                <span
                  className={cn(
                    'text-[14px] ',
                    isActive ? 'font-semibold' : 'font-normal'
                  )}
                >
                  {item.name}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
