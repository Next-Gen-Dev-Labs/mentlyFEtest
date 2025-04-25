'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  BookOpen,
  CalendarDays,
  Users,
  MessageSquare,
  DollarSign,
  Award,
  BarChart2,
  Settings,
  LogOut,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Image from 'next/image';



export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  // Automatically toggle sidebar based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1025) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    handleResize(); // initial check

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Programs', href: '/programs', icon: BookOpen },
    { name: 'Activities', href: '/activities', icon: CalendarDays },
    { name: 'Users', href: '/users', icon: Users },
    { name: 'Forums', href: '/forums', icon: MessageSquare },
    { name: 'Finances', href: '/finances', icon: DollarSign },
    { name: 'Rewards', href: '/rewards', icon: Award },
    { name: 'Analytics', href: '/analytics', icon: BarChart2 },
    { name: 'Settings', href: '/settings', icon: Settings },
    { name: 'Log Out', href: '/logout', icon: LogOut },
  ];

  const handleToggle = () => setCollapsed(!collapsed);

  return (
    <div
      className={cn(
        'bg-[#2E0D4F] text-white flex flex-col border-r transition-all duration-300',
        collapsed ? 'w-[60px]' : 'w-[200px]'
      )}
    >
      <div className="p-4 flex items-center justify-between">
        {!collapsed && (
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="Techrity Logo" width={32} height={32} className="h-8 w-auto" />
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-[#3A1A5E] ml-auto"
          onClick={handleToggle}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <nav className="px-2 py-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-md mb-1 transition-colors',
                pathname === item.href
                  ? 'bg-[#3A1A5E] text-white'
                  : 'hover:bg-[#3A1A5E] text-gray-300'
              )}
            >
              <item.icon size={20} />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>
      </ScrollArea>
      <div className="p-4 border-t border-[#3A1A5E]">
        <div className={cn(
          'bg-[#3A1A5E] p-3 rounded-lg',
          collapsed ? 'items-center justify-center' : 'items-start'
        )}>
          {!collapsed && (
            <div className="mb-2">
              <p className="text-xs">Got some questions, enquiries or feedback?</p>
              <Button variant="link" className="text-xs text-[#F0C074] p-0">
                visit mently help desk
              </Button>
            </div>
          )}
          <Button
            size="sm"
            variant="secondary"
            className={cn(
              'bg-white text-[#2E0D4F] hover:bg-gray-200',
              collapsed ? 'w-8 h-8 p-0' : 'w-full'
            )}
          >
            {collapsed ? <HelpCircle size={16} /> : 'Get Help'}
          </Button>
        </div>
      </div>
    </div>
  );
}
