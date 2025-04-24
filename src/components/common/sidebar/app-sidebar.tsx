"use client"

import {
  Sidebar,
  SidebarFooter,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar"

import { usePathname } from 'next/navigation'
import { Search, Settings } from "lucide-react"
import { useAppContext } from '@/contexts/app-context'

import HomeIcon from '@/components/common/icons/home-icon'
import Link from "next/link"
import LogoutIcon from "@/components/common/icons/logout-icon"
import ProgramsIcon from "@/components/common/icons/programs-icon"
import ActivitiesIcon from "../icons/activities-icon"
import UserIcon from "../icons/user-icon"
import ForumsIcon from "../icons/forums-icon"
import FinanceIcon from "../icons/finance-icon"
import Image from "next/image"
import QuestionIcon from "../icons/question-icon"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: HomeIcon,
  },
  {
    title: "Programs",
    url: "/programs",
    icon: ProgramsIcon,
  },
  {
    title: "Activities",
    url: "/activities",
    icon: ActivitiesIcon,
  },
  {
    title: "Users",
    url: "/users",
    icon: UserIcon,
  },
  {
    title: "Forums",
    url: "/forums",
    icon: ForumsIcon,
  },
  {
    title: "Finances",
    url: "/finances",
    icon: FinanceIcon,
  },
  {
    title: "Rewards",
    url: "/rewards",
    icon: Search,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "Log Out",
    url: "/logout",
    icon: LogoutIcon,
  }
]

export function AppSidebar() {
  const pathname = usePathname()
  const { isClassicMode, setIsClassicMode } = useAppContext()

  const isActiveRoute = (href: string) => {
    if (href === '/dashboard') {
      return pathname === href
    }
    return pathname?.startsWith(href) ?? false
  }

  return (
    <Sidebar collapsible="icon" className="w-64 z-500 px-3 bg-[#340260]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="py-6 px-3">  <Image
            src="/logo.png"
            alt="Sidebar Image"
            width={100}
            height={100}
          />
          </SidebarGroupLabel>
          <SidebarGroupContent className="pt-8 text-sm">
            <SidebarMenu>
              {items.map((item) => {
                const isActive = isActiveRoute(item.url)
                return (
                  <li key={item.url} className="mb-2 list-none">
                    <Link
                      href={item.url}
                      className={`p-2.5 duration-300  py-3 rounded-md flex items-center gap-x-4 transition  px-4 ${isActive
                        ? 'bg-white text-[#1F0954]'
                        : 'text-[#C2C2C2] hover:bg-white/10 hover:scale-105'
                        }`}
                    >
                      <div className={isActive ? 'text-[#1F0954]' : 'text-[#C2C2C2] '}>
                        <item.icon className="size-4" />
                      </div>
                      <span className="text-sm px-2 font-semibold">{item.title}</span>
                    </Link>
                  </li>
                )
              })}

              <div className="rounded-md bg-[#fff]/10 mt-8 p-5 flex flex-col gap-4 group-data-[collapsible=icon]:hidden">
                <QuestionIcon className="w-5 h-5 text-[#C2C2C2] mb-2" />
                <p className="text-white">Got some questions, enquiries or need help?</p>
                <a href="#" className="text-xs text-[#F0C074] underline">Visit Mently Help Desk Here</a>
              </div>

              <SidebarFooter className="mt-4 group-data-[collapsible=icon]:hidden">
                <div className="flex items-center justify-between w-full text-white">
                  <Label htmlFor="classic-mode">Switch to Classic Mode</Label>
                  <Switch
                    id="classic-mode"
                    checked={isClassicMode}
                    onCheckedChange={setIsClassicMode}
                    className="bg-white data-[state=checked]:bg-white [&_[data-slot=switch-thumb]]:bg-[#1F0954]"
                  />
                </div>
              </SidebarFooter>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar