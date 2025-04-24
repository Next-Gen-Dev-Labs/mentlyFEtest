
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import Image from "next/image"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { ChevronDown } from "lucide-react"
export function ProfileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <div className="flex items-center gap-2 hover:bg-[#8B72FC]/10 cursor-pointer rounded-xl p-2 pr-5 duration-300 hover:gap-4 hover:border hover:border-[#8B72FC]/15 py-2.5 group">
              <Avatar className="flex items-center gap-2 rounded-full bg-[#8B72FC] p-2 py-2.5">
                <AvatarImage src="/userProfile.png" className="size-6" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className=" items-center gap-2 hidden lg:flex">
                <div className="flex flex-col">
                  <span className="text-xs text-[#404040] font-bold">Techrity  Foun...</span>
                  <span className="text-xs text-[#53547B]">Member</span>
                </div>
                <div className="rounded-lg p-1 duration-300 bg-[#8B72FC] group-hover:bg-[#6F01D0]/40">
                  <ChevronDown className="text-gray-50 size-4" />
                </div>
              </div>
            {/* </div> */}
            </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          
        </DropdownMenuGroup>
        
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
