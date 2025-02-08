"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import {
  LayoutGrid,
  FileText,
  Home,
  Share2,
  ClipboardList,
  Wallet,
  LineChart,
  Settings,
  HelpCircle,
} from "lucide-react"
import { Switch } from "@/components/ui/switch"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-16 p-0 bg-[#1a1042]">
        <div className="flex flex-col h-full py-4">
          <div className="flex-1">
            <div className="flex justify-center mb-8">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-8 w-8 rounded-full"
              />
            </div>
            <nav className="space-y-6">
              <Link href="#" className="flex justify-center">
                <LayoutGrid className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="#" className="flex justify-center">
                <FileText className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="#" className="flex justify-center">
                <Home className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="#" className="flex justify-center p-2 bg-white/10 rounded-md">
                <FileText className="h-5 w-5 text-white" />
              </Link>
              <Link href="#" className="flex justify-center">
                <Share2 className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="#" className="flex justify-center">
                <ClipboardList className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="#" className="flex justify-center">
                <Wallet className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="#" className="flex justify-center">
                <LineChart className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="#" className="flex justify-center">
                <Settings className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <div className="px-2 py-4 bg-[#2a1852] rounded-lg text-center mx-2">
              <HelpCircle className="h-5 w-5 text-white mx-auto mb-2" />
              <p className="text-[10px] text-white/80 leading-tight">
                Visit Mently
                <br />
                Help Desk
                <br />
                Here
              </p>
            </div>
            <div className="flex justify-center">
              <Switch />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}