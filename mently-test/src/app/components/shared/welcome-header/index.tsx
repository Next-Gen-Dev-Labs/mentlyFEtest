'use client';

import Link from 'next/link';
import { cn } from '@/app/lib/utils';

type HeaderProps = {
  title: string;
  subtitle?: string;
};

export default function WelcomeHeader({ title, subtitle }: HeaderProps) {
  return (
    <header
      className={cn(
        'bg-[#6F01D0] text-white px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between rounded-lg shadow-md sticky top-0 z-30 font-sans gap-3 sm:gap-0'
      )}
    >
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 items-center text-center sm:text-left">
        <h1 className="text-xl sm:text-2xl md:text-[22px] font-bold text-white leading-tight">
          {title}
        </h1>
        {subtitle && (
          <h2 className="text-sm sm:text-lg md:text-[20px] font-semibold text-[#BDBDBD] leading-tight">
            {subtitle}
          </h2>
        )}
      </div>

      <div className="flex items-center">
        <Link
          href="/profile"
          className="bg-white text-[#1F0954] font-bold px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
        >
          Update Profile
        </Link>
      </div>
    </header>
  );
}
