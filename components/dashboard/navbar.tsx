import { SidebarTrigger } from "../ui/sidebar";
import { Notification } from "./notification";
import { ProfileSwitcher } from "./profile-switcher";

export const Navbar = () => {
  return (
    <div className="bg-brand-white-100 flex justify-between items-center py-2 shadow-sm">
      <SidebarTrigger className="size-10" />
      <div className="flex items-center gap-5 sm:pr-5">
        <Notification hasNotification />
        <ProfileSwitcher />
      </div>
    </div>
  );
};
