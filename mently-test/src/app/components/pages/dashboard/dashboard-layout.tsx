'use client';

import { ReactNode } from 'react';

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-dvh flex flex-col gap-3 max-w-[1440px] mx-auto px-1 md:px-2">
      {children}
    </div>
  );
}
