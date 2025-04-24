import Link from "next/link";
import Image from "next/image";
import { SidebarMenu, SidebarMenuItem, SidebarTrigger } from "./ui/sidebar";

export const NavHeader = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex data-[collapsible=icon]:px-6 items-center py-6 mb-4 justify-between">
        <Link
          href="/dashboard"
          className="group-has-data-[collapsible=icon]/sidebar-wrapper:hidden"
        >
          <Image
            src="/techrity-logo.png"
            alt="Techrity"
            width={408}
            height={95}
            className="w-[116px] h-auto object-fit "
          />
        </Link>
        <SidebarTrigger className="hover:!bg-transparent" />
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
