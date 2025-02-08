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

export function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-16 h-screen bg-[#1a1042] fixed left-0 top-0">
      <div className="flex flex-col items-center justify-between py-4 h-full">
        <div className="space-y-8">
          <Link href="/" className="flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-8 w-8 rounded-full"
            />
          </Link>

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
          <div className="px-2 py-4 bg-[#2a1852] rounded-lg text-center">
            <HelpCircle className="h-5 w-5 text-white mx-auto mb-2" />
            <p className="text-[10px] text-[#F0C074] underline leading-tight">
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
    </aside>
  )
}