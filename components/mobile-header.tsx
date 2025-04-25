"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface MobileHeaderProps {
  onMenuClick: () => void;
}

export default function MobileHeader({ onMenuClick }: MobileHeaderProps) {
  return (
    <div className="bg-white border-b px-4 py-3 flex items-center justify-between lg:hidden">
      <Button variant="ghost" size="icon" onClick={onMenuClick}>
        <Menu className="h-5 w-5" />
      </Button>
      <div className="flex items-center gap-2">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <div className="w-10"></div> {/* Empty div for flex spacing */}
    </div>
  );
}
