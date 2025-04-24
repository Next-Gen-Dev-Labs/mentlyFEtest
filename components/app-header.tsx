import { NavUser } from "./nav-user";
import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";

import { dummyData } from "@/lib/data";
import { NavNotifications } from "./nav-notifications";

export const AppHeader = () => {
  return (
    <header className="flex h-20 px-6 md:px-8 lg:px-10 sticky top-0 z-40 bg-background justify-between shadow shrink-0 items-center gap-2 transition-[width,height] ease-linear ">
      <div className="flex items-center gap-2 px-4 md:hidden">
        <SidebarTrigger />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <NavNotifications />

        <div className="min-w-[200px]">
          <NavUser user={dummyData.user} />
        </div>
      </div>
    </header>
  );
};
