'use client';

import { ReactNode, useState } from 'react';
import { cn } from '@/app/lib/utils';
import Sidebar from '@/app/components/shared/sidebar';
import Header from '@/app/components/shared/layout-header';

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => setToggleMenu(!toggleMenu);

  return (
    <div
      className={cn(
        'flex bg-[#F4F5FA] min-h-screen relative',
        toggleMenu ? 'backdrop-blur-lg' : '' 
      )}
    >
      <Sidebar
        setOpenMobileMenu={handleToggleMenu}
        openMobileMenu={toggleMenu}
      />
      <div
        className={cn(
          'min-h-dvh overflow-y-auto w-full xl:pl-64 relative'
        )}
      >
        <div
          className={cn(
            'bg-black bg-opacity-30 fixed inset-0 z-20',
            toggleMenu ? 'block' : 'hidden'
          )}
        />
        <Header onMenuClick={handleToggleMenu} />
        <main className={cn('w-full md:p-2 lg:p-2 font-chivo')}>
          {children}
        </main>
      </div>
    </div>
  );
}