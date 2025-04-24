"use client"

import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  BookOpen,
  Activity,
  Users,
  MessageSquare,
  DollarSign,
  Award,
  BarChart3,
  Settings,
  LogOut,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Switch } from "@/components/ui/switch"

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: BookOpen, label: "Programs", href: "/programs" },
  { icon: Activity, label: "Activities", href: "/activities" },
  { icon: Users, label: "Users", href: "/users" },
  { icon: MessageSquare, label: "Forums", href: "/forums" },
  { icon: DollarSign, label: "Finances", href: "/finances" },
  { icon: Award, label: "Rewards", href: "/rewards" },
  { icon: BarChart3, label: "Analytics", href: "/analytics", badge: "Coming Soon" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-[200px] flex flex-col h-full bg-[#2D0A5A] text-white">
      <div className="p-4 flex items-center gap-2">
        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-md">
          <Image
            src="/placeholder.svg?height=24&width=24"
            alt="Techrity Logo"
            width={24}
            height={24}
            className="text-[#2D0A5A]"
          />
        </div>
        <span className="font-semibold text-lg">techrity</span>
        <div className="ml-auto">
          <button className="w-6 h-6 flex items-center justify-center border border-white/30 rounded">
            <span className="sr-only">Menu</span>
            <div className="w-3 h-3 border-2 border-white/70 rounded-sm"></div>
          </button>
        </div>
      </div>

      <div className="flex-1 py-4">
        <nav className="space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 transition-colors relative",
                pathname === item.href ? "bg-white/10 text-white" : "text-white/70 hover:text-white hover:bg-white/5",
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
              {item.badge && <span className="absolute right-4 text-[10px] text-white/70">{item.badge}</span>}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-auto">
        <Link
          href="/logout"
          className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/5"
        >
          <LogOut className="h-5 w-5" />
          <span>Log Out</span>
        </Link>
      </div>

      <div className="p-4 border-t border-white/10">
        <div className="flex items-center mb-2">
          <HelpCircle className="h-5 w-5 text-white/70" />
        </div>
        <div className="text-xs text-white/70 mb-2">
          <p>Got some questions, enquiries</p>
          <p>or need help?</p>
        </div>
        <Link href="/help" className="text-xs text-white/70 underline block mb-6">
          Visit Mently Help Desk Here
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-xs">Switch to Classic Mode</span>
          <Switch />
        </div>
      </div>
    </div>
  )
}
