import { NavUser } from "./nav-user";
import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";

import { dummyData } from "@/lib/data";

export const AppHeader = () => {
  return (
    <header className="flex h-20 px-6 sticky top-0 z-40 bg-background justify-between shadow shrink-0 items-center gap-2 transition-[width,height] ease-linear ">
      <div className="flex items-center gap-2 px-4 md:hidden">
        <SidebarTrigger />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
      </div>

      <div className="ml-auto">
        <NavUser user={dummyData.user} />
      </div>
    </header>
  );
};
