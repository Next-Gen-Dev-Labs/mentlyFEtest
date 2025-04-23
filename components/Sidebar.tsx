'use client'

import { useState, useEffect, useRef } from 'react'
import { Home, BookOpen, Users, MessageCircle, Wallet, Gift, BarChart, Settings, LogOut, HelpCircle, Menu, Columns2, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import clsx from 'clsx'

const navLinks = [
  { name: 'Dashboard', icon: <Home />, href: '/', active: true },
  { name: 'Programs', icon: <BookOpen />, href: '#' },
  { name: 'Activities', icon: <Users />, href: '#' },
  { name: 'Users', icon: <Users />, href: '#' },
  { name: 'Forums', icon: <MessageCircle />, href: '#' },
  { name: 'Finances', icon: <Wallet />, href: '#' },
  { name: 'Rewards', icon: <Gift />, href: '#' },
  { name: 'Analytics', icon: <BarChart />, href: '#', comingSoon: true },
  { name: 'Settings', icon: <Settings />, href: '#' },
  { name: 'Log Out', icon: <LogOut />, href: '#' },
]

export default function Sidebar() {
  const [classicMode, setClassicMode] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const sidebarRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false)
      } else {
        setIsSidebarOpen(true)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    // Set CSS variable for sidebar width
    const width = isCollapsed ? '5rem' : '16rem'
    document.documentElement.style.setProperty('--sidebar-width', width)
  }, [isCollapsed])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
    setIsCollapsed(!isCollapsed)
  }

  return (
    <>
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 bg-[#3F0071] text-white rounded-md"
        >
          <Menu size={20} />
        </button>
      )}
      <aside
        ref={sidebarRef}
        className={clsx(
          "fixed top-0 left-0 bg-[#3F0071] text-white flex flex-col justify-between h-screen transition-all duration-300",
          isCollapsed ? "w-20" : "w-64",
          isMobile && !isSidebarOpen && "-translate-x-full",
          isMobile && "z-40"
        )}
        style={{ width: isCollapsed ? '5rem' : '16rem' }}
      >
        <div className="px-4 py-6">
          <div className="mb-8 flex justify-between items-center">
            {!isCollapsed && <h1 className="text-xl font-bold tracking-tight">💡 techrity</h1>}
            <button onClick={toggleSidebar}>
              {isCollapsed ? <Columns2 size={20} className='text-center ml-3'/> : <ChevronLeft size={20}/>} 
            </button>
          </div>
          <nav className="space-y-2">
            {navLinks.map(({ name, icon, href, active, comingSoon }) => (
              <div key={name} className="relative">
                <Link
                  href={href}
                  className={clsx(
                    'flex items-center gap-3 px-3 py-2 rounded-md transition',
                    active ? 'bg-white text-[#3F0071] font-semibold' : 'hover:bg-white/10'
                  )}
                >
                  {icon}
                  {!isCollapsed && <span className="text-sm">{name}</span>}
                </Link>
                {comingSoon && !isCollapsed && (
                  <span className="absolute top-1 right-3 text-[10px] text-white/70 italic">Coming Soon</span>
                )}
              </div>
            ))}
          </nav>
        </div>
        {!isCollapsed && (
          <div className="px-4 pb-6 space-y-6">
            <div className="bg-[#4F0A87] p-3 rounded-md text-xs">
              <div className="flex items-start gap-2">
                <HelpCircle size={16} />
                <div>
                  <p>Got some questions, enquiries or need help?</p>
                  <a
                    href="https://example.com"
                    className="text-[#FDB0FF] underline text-xs mt-1 inline-block"
                  >
                    Visit Mently Help Desk here
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Switch to Classic Mode</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={classicMode}
                  onChange={() => setClassicMode(!classicMode)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-purple-500"></div>
                <span className="sr-only">Toggle classic mode</span>
              </label>
            </div>
          </div>
        )}
      </aside>
    </>
  )
}
