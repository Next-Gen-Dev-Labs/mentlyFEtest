"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Home,
  FileText,
  Activity,
  Users,
  MessageSquare,
  Wallet,
  Award,
  BarChart2,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface SidebarProps {
  isMobile?: boolean
}

export default function Sidebar({ isMobile: propIsMobile }: SidebarProps) {
  const [isClassicMode, setIsClassicMode] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(propIsMobile || false)

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isMobileOpen && !target.closest('[data-sidebar="true"]') && !target.closest('[data-sidebar-toggle="true"]')) {
        setIsMobileOpen(false)
      }
    }

    if (isMobileOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMobileOpen])

  // Prevent scrolling when sidebar is open on mobile
  useEffect(() => {
    if (isMobileOpen && isMobile) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMobileOpen, isMobile])

  return (
    <>
      {/* Mobile Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-40 md:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        data-sidebar-toggle="true"
      >
        <Menu size={24} className="text-[#2D0A5A]" />
        <span className="sr-only">Toggle Menu</span>
      </Button>

      {/* Backdrop for mobile */}
      {isMobileOpen && isMobile && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        data-sidebar="true"
        role="complementary"
        className={cn(
          "flex flex-col h-screen bg-[#2D0A5A] text-white z-50 transition-all duration-300 ease-in-out fixed",
          isMobile ? (isMobileOpen ? "w-[280px] translate-x-0" : "w-[280px] -translate-x-full") : "w-64",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Image src="/SVGs/logo.svg" width={116} height={27} alt="techrity_logo" />
          </div>
          <div className="flex items-center gap-2">
            <div className="border border-white/20 rounded-md p-1">
              <div className="w-5 h-5"></div>
            </div>
            {isMobile && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileOpen(false)}
                className="text-white hover:bg-white/10"
              >
                <X size={20} />
                <span className="sr-only">Close Menu</span>
              </Button>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto custom-scrollbar">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md bg-white text-[#2D0A5A]"
            onClick={() => isMobile && setIsMobileOpen(false)}
          >
            <Home size={20} />
            <span className="font-chivo font-normal text-[16px]">Dashboard</span>
          </Link>

          <Link
            href="/programs"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md text-white/80 hover:bg-white/10"
            onClick={() => isMobile && setIsMobileOpen(false)}
          >
            <FileText size={20} />
            <span className="font-chivo font-normal text-[16px] text-[#C2C2C2]">Programs</span>
          </Link>

          <Link
            href="/activities"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md text-white/80 hover:bg-white/10"
            onClick={() => isMobile && setIsMobileOpen(false)}
          >
            <Activity size={20} />
            <span className="font-chivo font-normal text-[16px] text-[#C2C2C2]">Activities</span>
          </Link>

          <Link
            href="/users"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md text-white/80 hover:bg-white/10"
            onClick={() => isMobile && setIsMobileOpen(false)}
          >
            <Users size={20} />
            <span className="font-chivo font-normal text-[16px] text-[#C2C2C2]">Users</span>
          </Link>

          <Link
            href="/forums"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md text-white/80 hover:bg-white/10"
            onClick={() => isMobile && setIsMobileOpen(false)}
          >
            <MessageSquare size={20} />
            <span className="font-chivo font-normal text-[16px] text-[#C2C2C2]">Forums</span>
          </Link>

          <Link
            href="/finances"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md text-white/80 hover:bg-white/10"
            onClick={() => isMobile && setIsMobileOpen(false)}
          >
            <Wallet size={20} />
            <span className="font-chivo font-normal text-[16px] text-[#C2C2C2]">Finances</span>
          </Link>

          <Link
            href="/rewards"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md text-white/80 hover:bg-white/10"
            onClick={() => isMobile && setIsMobileOpen(false)}
          >
            <Award size={20} />
            <span className="font-chivo font-normal text-[16px] text-[#C2C2C2]">Rewards</span>
          </Link>

          <div className="relative">
            <Link
              href="/analytics"
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md text-white/80 hover:bg-white/10"
              onClick={() => isMobile && setIsMobileOpen(false)}
            >
              <BarChart2 size={20} />
              <span className="font-chivo font-normal text-[16px] text-[#C2C2C2]">Analytics</span>
            </Link>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/80 bg-white/10 px-2 py-0.5 rounded-full">
              Coming Soon
            </div>
          </div>

          <Link
            href="/settings"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md text-white/80 hover:bg-white/10"
            onClick={() => isMobile && setIsMobileOpen(false)}
          >
            <Settings size={20} />
            <span className="font-chivo font-normal text-[16px] text-[#C2C2C2]">Settings</span>
          </Link>

          <Link
            href="/logout"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md text-white/80 hover:bg-white/10"
            onClick={() => isMobile && setIsMobileOpen(false)}
          >
            <LogOut size={20} />
            <span className="font-chivo font-normal text-[16px] text-[#C2C2C2]">Log Out</span>
          </Link>
        </nav>

        {/* Help Section */}
        <div className="p-4">
          <div className="bg-[#3D1A6A] rounded-md p-3 px-4 flex flex-col gap-3 items-start">
            <Image src="/SVGs/userProfile.svg" width={20} height={20} className="" alt="userProfile" />
            <p className="text-[12px] font-bold font-chivo">Got some questions, enquiries or need help?</p>
            <Link href="/help" className="text-[10px] font-chivo font-normal text-yellow-400 underline">
              Visit Mently Help Desk Here
            </Link>
          </div>

          {/* Classic Mode Toggle */}
          <div className="flex items-center justify-between mt-6 px-2">
            <span className="text-[12px] font-bold font-chivo">Switch to Classic Mode</span>
            <Switch
              checked={isClassicMode}
              onCheckedChange={setIsClassicMode}
              className="data-[state=checked]:bg-white data-[state=checked]:text-[#1F0954]"
            />
          </div>
        </div>
      </aside>
    </>
  )
}
