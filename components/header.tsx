import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { UserProfile } from "./userprofile"
import { MobileNav } from "./mobile-nav"

export function Header() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-4 py-2 h-16 fixed top-0 right-0 left-0 md:left-16 z-10">
      <div className="flex items-center gap-4">
        <MobileNav />
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </Button>
        <UserProfile />
      </div>
    </header>
  )
}

