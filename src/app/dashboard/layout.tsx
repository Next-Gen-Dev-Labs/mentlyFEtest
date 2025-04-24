
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/common/sidebar/app-sidebar"
import NotificationIcon from "@/components/common/icons/notification-icon"

import { ProfileMenu } from "@/components/common/nav/profile-dropdown"



export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className=" w-full text-sm ">
        <SidebarTrigger className="fixed   lg:-translate-x-12 hover:bg-white/20 top-3 hover:text-white text-[#c6c6c6] z-500" />
        <header className="fixed z-50 top-0 right-0 bg-white w-full flex h-16 shrink-0 items-center border-b">

          <div className="flex items-center gap-4  ml-auto lg:px-10">

            <NotificationIcon className="t" />
            {/* profile container */}
            <ProfileMenu />





          </div>
        </header>

        {/* Main content */}
        <div className="px-2 lg:px-10 py-3 pt-18 bg-gray-100">
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}
