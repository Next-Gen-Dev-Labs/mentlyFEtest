import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = ({ className }: { className?: string }) => {
  return (
    <div className={`w-full flex items-center justify-between ${className}`}>
      <div className="text-secondary flex items-center justify-center">
        <ChevronLeft />
        <p className="font-semibold text-sm lg:text-base">Back to Home</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              id="step-0"
              src="/icons/settings.svg"
              width={24}
              height={24}
              alt="settings"
              className="cursor-pointer"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Image src="/icons/copy.svg" width={18.32} height={20} alt="copy" />
        <div className="lg:w-[88px] flex items-center justify-center gap-1 lg:gap-2 bg-primary py-[8px] px-[12px] rounded-full">
          <Image src="/icons/share.svg" width={15} height={12.86} alt="copy" />
          <p className="text-xs lg:text-sm font-bold text-background">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
