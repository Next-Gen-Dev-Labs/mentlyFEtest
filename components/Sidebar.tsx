'use client'

import { useState } from 'react'
import { Home, BookOpen, Users, MessageCircle, Wallet, Gift, BarChart, Settings, LogOut, HelpCircle } from 'lucide-react'
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

  return (
    <aside className="w-64 bg-[#3F0071] text-white flex flex-col justify-between h-screen px-4 py-6">
      {/* Top Logo and Nav */}
      <div>
        <div className="mb-8">
          <h1 className="text-xl font-bold tracking-tight">💡 techrity</h1>
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
                <span className="text-sm">{name}</span>
              </Link>
              {comingSoon && (
                <span className="absolute top-1 right-3 text-[10px] text-white/70 italic">Coming Soon</span>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Help Section & Classic Mode Toggle */}
      <div className="space-y-6">
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
    </aside>
  )
}
