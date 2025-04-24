'use client';

import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', icon: '/home-grey.png' },
    { name: 'Programs', icon: '/book.png' },
    { name: 'Activities', icon: '/bubble.png' },
    { name: 'Users', icon: '/users.png' },
    { name: 'Forums', icon: '/clipboard.png' },
    { name: 'Finances', icon: '/wallet.png' },
    { name: 'Rewards', icon: '/award.png' },
    { name: 'Analytics', icon: '/chart.png', comingSoon: true },
    { name: 'Settings', icon: '/setting.png' },
    { name: 'Log Out', icon: '/logout.png' },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-48 bg-[#340260] flex flex-col font-['Chivo'] overflow-y-auto">
      {/* Logo Section */}
      <div className="p-3 flex items-center">
        <Image
          src="/logo.png"
          alt="techrity logo"
          width={60}
          height={24}
          className="w-auto h-5"
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3 py-4 space-y-3">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href="#"
            className="flex items-center gap-6 px-3 py-2.5 text-white rounded-lg hover:bg-white hover:text-[#340260] transition-colors duration-200 text-xs group relative"
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>{item.name}</span>
            {item.comingSoon && (
              <span className="absolute -top-1 right-4 text-[8px] bg-[#0214BD] px-1.5 py-0.5 rounded-full">
                Coming Soon
              </span>
            )}
          </Link>
        ))}
      </nav>

      {/* Help Section */}
      <div className="p-3 bg-[#4a0388] mx-2 mb-2 rounded-lg">
        <div className="flex flex-col gap-2">
          <Image
            src="/user-tag.png"
            alt="user tag"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <p className="text-white text-[10px]">
            Got some questions, enquiries or need help?
          </p>
          <Link
            href="#"
            className="text-[#F0C074] text-[10px] hover:underline"
          >
            Visit <span className="underline">Mighty Help Desk</span> here!
          </Link>
        </div>
      </div>

      {/* Classic Mode Toggle */}
      <div className="p-2 flex items-center justify-between">
        <span className="text-white text-[10px]">Switch to Classic Mode</span>
        <div className="w-6 h-4 bg-white/20 rounded-full relative">
          <div className="w-2.5 h-2.5 bg-white rounded-full absolute top-[3px] left-[3px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 