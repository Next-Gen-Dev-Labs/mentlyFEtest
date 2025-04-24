'use client'
import Image from "next/image"
import { Bell, MoreHorizontal, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import React, { useState } from 'react'

export default function Dashboard() {
  const [isManageWidgetOpen, setIsManageWidgetOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [widgets, setWidgets] = useState([
    { name: 'Programs', enabled: true },
    { name: 'Group Calls', enabled: true },
    { name: 'Mentors', enabled: true },
    { name: 'Recent Activities', enabled: true },
    { name: 'Application', enabled: true },
    { name: 'Earnings', enabled: false },
    { name: 'Forum', enabled: false },
    { name: 'Program Analysis', enabled: false }
  ])

  const toggleWidget = (index: number) => {
    const newWidgets = [...widgets]
    newWidgets[index].enabled = !newWidgets[index].enabled
    setWidgets(newWidgets)
  }

  return (
    <div className="relative">
      <div className="flex h-screen bg-[#f4f5fa] font-['Chivo']">
        {/* Desktop Sidebar - Hidden on mobile, visible on desktop */}
        <div className="hidden md:flex w-[200px] bg-[#2D0164] text-white flex-col flex-shrink-0 min-h-screen">
          {/* Logo */}
          <div className="p-4 flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" />
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" />
            </svg>
            <span className="font-medium text-lg">techrity</span>
            <button className="ml-auto" aria-label="Toggle sidebar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="9" y1="3" x2="9" y2="21"/>
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-2 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex flex-col gap-2">
              <SidebarItem icon="home" label="Dashboard" active />
              <SidebarItem icon="layers" label="Programs" />
              <SidebarItem icon="activity" label="Activities" />
              <SidebarItem icon="users" label="Users" />
              <SidebarItem icon="message-circle" label="Forums" comingSoon />
              <SidebarItem icon="dollar-sign" label="Finances" />
              <SidebarItem icon="gift" label="Rewards" />
              <SidebarItem icon="bar-chart" label="Analytics" />
              <SidebarItem icon="settings" label="Settings" />
              <SidebarItem icon="log-out" label="Log Out" />
            </div>
          </nav>

          {/* Help Section */}
          <div className="mt-auto p-4">
            <div className="bg-[#3D1273] rounded-lg p-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                </div>
                <p className="text-sm">Got some questions, enquiries or need help?</p>
              </div>
              <a href="#" className="text-[#8b72fc] text-xs flex items-center gap-1 mt-2 hover:text-[#9f8bfd]">
                Visit Mently Help Desk Here
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-white/70">Switch to Classic Mode</span>
              <div className="relative w-8 h-4 bg-[#8b72fc] rounded-full cursor-pointer">
                <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar - Only visible when menu is open */}
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <div 
              className="fixed inset-0 bg-black/20 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Mobile Sidebar */}
            <div className="fixed inset-y-0 left-0 w-[200px] bg-[#2D0164] text-white flex flex-col z-50 md:hidden">
              {/* Logo */}
              <div className="p-4 flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" />
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" />
                </svg>
                <span className="font-medium text-lg">techrity</span>
                <button 
                  className="ml-auto"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 py-2 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="flex flex-col gap-2">
                  <SidebarItem icon="home" label="Dashboard" active />
                  <SidebarItem icon="layers" label="Programs" />
                  <SidebarItem icon="activity" label="Activities" />
                  <SidebarItem icon="users" label="Users" />
                  <SidebarItem icon="message-circle" label="Forums" comingSoon />
                  <SidebarItem icon="dollar-sign" label="Finances" />
                  <SidebarItem icon="gift" label="Rewards" />
                  <SidebarItem icon="bar-chart" label="Analytics" />
                  <SidebarItem icon="settings" label="Settings" />
                  <SidebarItem icon="log-out" label="Log Out" />
                </div>
              </nav>

              {/* Help Section */}
              <div className="mt-auto p-4">
                <div className="bg-[#3D1273] rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                        <line x1="12" y1="17" x2="12.01" y2="17"/>
                      </svg>
                    </div>
                    <p className="text-sm">Got some questions, enquiries or need help?</p>
                  </div>
                  <a href="#" className="text-[#8b72fc] text-xs flex items-center gap-1 mt-2 hover:text-[#9f8bfd]">
                    Visit Mently Help Desk Here
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70">Switch to Classic Mode</span>
                  <div className="relative w-8 h-4 bg-[#8b72fc] rounded-full cursor-pointer">
                    <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden relative w-full">
          {/* Header */}
          <header className="bg-white sticky top-0 z-10 flex justify-between md:justify-end items-center px-4 md:px-6 py-3">
            {/* Mobile Menu Button - Only visible on mobile */}
            <button 
              className="md:hidden text-gray-500" 
              aria-label="Toggle mobile menu"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>

            <div className="flex items-center gap-4">
              {/* Notification Bell */}
              <div className="relative">
                <Bell className="text-gray-500 w-5 h-5" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
              </div>

              {/* User Profile */}
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8 border border-gray-100">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback className="bg-[#8b72fc]">TC</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-medium">Techrity Foundation</div>
                  <div className="text-xs text-gray-500">Member</div>
                </div>
                {/* Chat Icon */}
                <div className="ml-4 w-8 h-8 bg-[#8b72fc] rounded-lg flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <div className="p-4 md:p-6 max-w-full">
            {/* Manage Widget */}
            <div className="w-full mb-6">
              <div 
                className="flex justify-end bg-[#F8F9FE] p-3 md:p-4 rounded-lg w-full cursor-pointer hover:bg-[#F0F2FA] transition-colors"
                onClick={() => setIsManageWidgetOpen(true)}
              >
                <div className="flex items-center gap-4">
                  {/* Menu Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                    <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                    <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                    <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                    <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                  </svg>

                  {/* Image Icon */}
                  <div className="w-8 h-8 flex items-center justify-center bg-[#6F01D0] rounded">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2"/>
                      <path d="M3 14l4-4 8 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 12l4-4 3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="16" cy="8" r="2" fill="white"/>
                    </svg>
                  </div>

                  {/* Text */}
                  <h2 className="text-[#1A1A1A] text-xl font-semibold">Manage Widgets</h2>
                </div>
              </div>
            </div>

            {/* Manage Widget Panel */}
            {isManageWidgetOpen && (
              <>
                {/* Overlay */}
                <div 
                  className="fixed inset-0 bg-black/20 z-40"
                  onClick={() => setIsManageWidgetOpen(false)}
                />

                {/* Panel */}
                <div className="fixed inset-y-0 right-0 w-[400px] bg-white shadow-xl z-50 flex flex-col">
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-4 sticky top-0 bg-white z-10">
                      <h2 className="text-[#8B01D0] text-xl font-semibold">Manage Widget</h2>
                      <button 
                        onClick={() => setIsManageWidgetOpen(false)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        ✕
                      </button>
                    </div>
                    
                    <p className="text-gray-500 text-sm mb-6">
                      Personalize your dashboard by managing widgets add, remove, or reorder them to fit your workflow.
                    </p>

                    <div className="flex-1 overflow-y-auto">
                      <div className="space-y-4">
                        {widgets.map((widget, index) => (
                          <div key={widget.name} className="flex items-center justify-between py-2">
                            <div className="flex items-center gap-3">
                              <span className="text-gray-400">≡</span>
                              <span className="text-gray-700">{widget.name}</span>
                            </div>
                            <Checkbox
                              checked={widget.enabled}
                              onCheckedChange={() => toggleWidget(index)}
                              className="h-5 w-5 border-2 border-gray-200 rounded data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                      <button 
                        onClick={() => setIsManageWidgetOpen(false)}
                        className="flex-1 py-2.5 bg-[#8B01D0] text-white text-sm font-medium rounded-full hover:bg-[#7A01B8] transition-colors"
                      >
                        Save Changes
                      </button>
                      <button 
                        onClick={() => {
                          setWidgets(widgets.map(widget => ({
                            ...widget,
                            enabled: ['Programs', 'Group Calls', 'Mentors', 'Recent Activities', 'Application'].includes(widget.name)
                          })))
                        }}
                        className="flex-1 py-2.5 border border-[#8B01D0] text-[#8B01D0] text-sm font-medium rounded-full hover:bg-[#F7EBFF] transition-colors"
                      >
                        Reset to Default
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Welcome Banner */}
            <div className="bg-[#6F01D0] text-white rounded-lg p-4 mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-3">
                <h1 className="text-xl md:text-2xl font-bold text-center md:text-left">Welcome Aboard, Blessing 👋</h1>
                <p className="text-white/90 text-center md:text-left">We're thrilled to have you join Techrity Team!</p>
              </div>
              <Button className="bg-white text-[#6F01D0] hover:bg-white/90 font-medium px-6 w-full md:w-auto">Update Profile</Button>
            </div>

            {/* Top Section - Programs and Group Calls */}
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              {/* Left Column - Programs and Users Stats */}
              <div className="w-full md:w-[330px] flex-shrink-0 space-y-6">
                {/* Programs Section */}
                <div className="bg-white rounded-[20px] p-4">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">≡</span>
                      <h2 className="text-[#1A1A1A] font-medium">Programs</h2>
                    </div>
                    <div className="flex items-center gap-2">
                      <a href="#" className="text-[#8B01D0] text-[15px]">See all</a>
                      <button className="w-8 h-8 flex items-center justify-center" title="More options">
                        <MoreHorizontal className="w-5 h-5 text-gray-500" />
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-end items-center gap-2 mb-4">
                    <span className="text-xs text-gray-500">Filter</span>
                    <div className="flex items-center gap-1 border border-gray-200 rounded px-2 py-1 text-xs">
                      <span>Active</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Program Cards */}
                  <Card className="mb-4 overflow-hidden border-0 shadow-sm">
                    <div className="relative">
                      <div className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="bg-[url('/banner.png')] bg-cover font-bold text-[16px] text-white p-4">
                        <h3 className="font-bold">Fundamentals of User Interface & Experience</h3>
                        <Badge className="bg-[#D4E0F3] gap-2 text-[#0077FF]  font-bold items-center justify-center mt-1 rounded-full ">
                          <div className="w-2 h-2 bg-[#0077FF] rounded-full" />
                          Bootcamp
                        </Badge>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-600 mb-4">
                          This program is a hands-on guide designed for designers who want to master color theory and
                          confidently apply it to their designs. This practical approach
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex -space-x-2">
                            <Avatar className="border-2 border-white h-6 w-6">
                              <AvatarFallback>U1</AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-white h-6 w-6">
                              <AvatarFallback>U2</AvatarFallback>
                            </Avatar>
                          </div>
                          <span className="text-xs text-gray-500">Mentors</span>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="text-xs h-7 rounded">
                              View Details
                            </Button>
                            <Button size="sm" className="bg-[#8b72fc] text-white hover:bg-[#7a61eb] text-xs h-7 rounded">
                              Analyze
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Color Hack Card */}
                  <Card className="mb-4 overflow-hidden border-0 shadow-sm">
                    <div className="relative">
                      <div className="bg-[#340260] text-white p-4">
                        <h3 className="font-bold">Colour Hack Practical Group Call</h3>
                        <Badge className="bg-[#2ac100] text-white mt-1 rounded-sm font-normal">Ongoing</Badge>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-600 mb-4">
                          This program is a hands-on guide designed for designers who want to master color theory and
                          confidently apply it to their designs. This practical approach
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarFallback>H</AvatarFallback>
                            </Avatar>
                            <span className="text-xs">Hosted By: Faith Okolo</span>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="text-xs h-7 rounded">
                              View Details
                            </Button>
                            <Button size="sm" className="bg-[#8b72fc] text-white hover:bg-[#7a61eb] text-xs h-7 rounded">
                              Analyze
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Second Color Hack Card */}
                  <Card className="mb-4 overflow-hidden border-0 shadow-sm">
                    <div className="relative">
                      <div className="bg-[#340260] text-white p-4">
                        <h3 className="font-bold">Colour Hack Practical Group Call</h3>
                        <Badge className="bg-[#2ac100] text-white mt-1 rounded-sm font-normal">Ongoing</Badge>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-600 mb-4">
                          This program is a hands-on guide designed for designers who want to master color theory and
                          confidently apply it to their designs. This practical approach
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarFallback>S</AvatarFallback>
                            </Avatar>
                            <span className="text-xs">Hosted By: Saf</span>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="text-xs h-7 rounded">
                              View Details
                            </Button>
                            <Button size="sm" className="bg-[#6f01d0] text-white hover:bg-[#5c01ae] text-xs h-7 rounded">
                              Assign Mentor
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Users Statistics */}
                <div className="bg-white rounded-[20px] p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-[#1A1A1A] font-medium">Users</h2>
                    <select 
                      className="text-sm border-none bg-transparent outline-none"
                      aria-label="Filter users"
                    >
                      <option>All</option>
                    </select>
                  </div>

                  <div className="relative flex justify-center items-center mb-6">
                    {/* Pie Chart Container */}
                    <div className="relative w-32 h-32">
                      {/* Chart segments */}
                      <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#E7F0FF" strokeWidth="20" strokeDasharray="251.2" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#8B72FC" strokeWidth="20" strokeDasharray="125.6 251.2" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#FFA500" strokeWidth="20" strokeDasharray="31.4 251.2" strokeDashoffset="-125.6" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#FF69B4" strokeWidth="20" strokeDasharray="15.7 251.2" strokeDashoffset="-157" />
                      </svg>
                      {/* Center Text */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold">240</span>
                        <span className="text-sm text-gray-500">Users</span>
                      </div>
                    </div>
                  </div>

                  {/* Statistics List */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#8B72FC]"></div>
                        <span className="text-sm text-gray-600">Students</span>
                      </div>
                      <span className="text-sm font-medium">200</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#FFA500]"></div>
                        <span className="text-sm text-gray-600">Mentors</span>
                      </div>
                      <span className="text-sm font-medium">8</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#FF69B4]"></div>
                        <span className="text-sm text-gray-600">Programs</span>
                      </div>
                      <span className="text-sm font-medium">22</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#E7F0FF]"></div>
                        <span className="text-sm text-gray-600">Others</span>
                      </div>
                      <span className="text-sm font-medium">10</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Group Calls and Other Sections */}
              <div className="flex-1">
                {/* Group Calls Section */}
                <div className="bg-white rounded-[20px] p-4 mb-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">≡</span>
                      <h2 className="text-[#1A1A1A] font-medium">Group Calls</h2>
                    </div>
                    <div className="flex items-center gap-2">
                      <a href="#" className="text-[#8B01D0] text-[15px]">See all</a>
                      <button className="w-8 h-8 flex items-center justify-center" title="More options">
                        <MoreHorizontal className="w-5 h-5 text-gray-500" />
                      </button>
                    </div>
                  </div>

                  {/* Group Call Cards */}
                  <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <Card className="overflow-hidden border-0 shadow-sm min-w-[300px] flex-shrink-0">
                      <div className="relative">
                        <Image
                          src="/placeholder.svg?height=120&width=240"
                          width={240}
                          height={120}
                          alt="Meeting thumbnail"
                          className="w-full h-32 object-cover"
                        />
                        <Badge className="absolute top-2 left-2 bg-[#2ac100] text-white rounded-sm font-normal text-xs">
                          Ongoing
                        </Badge>
                        <div className="p-4">
                          <h3 className="font-medium text-sm">Weekly Meeting - Product Demo Review with Testers</h3>
                          <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                            <span>📅 Mon, Jul 30, 2024</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                            <span>🕙 9:00 - 11:00AM</span>
                          </div>
                          <div className="flex items-center gap-2 mt-2 text-xs">
                            <div className="w-2 h-2 rounded-full bg-[#2ac100]"></div>
                            <span>UX Strategy Study group</span>
                          </div>
                          <div className="flex -space-x-2 mt-2">
                            <Avatar className="border-2 border-white h-5 w-5">
                              <AvatarFallback>1</AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-white h-5 w-5">
                              <AvatarFallback>2</AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="flex gap-2 mt-3">
                            <Button size="sm" variant="outline" className="text-xs flex-1 h-7 rounded">
                              View Participants
                            </Button>
                          </div>
                          <Button
                            size="sm"
                            className="bg-[#8b72fc] text-white hover:bg-[#7a61eb] text-xs w-full mt-2 h-7 rounded"
                          >
                            Join Now <span className="ml-1">→</span>
                          </Button>
                        </div>
                      </div>
                    </Card>

                    <Card className="overflow-hidden border-0 shadow-sm min-w-[300px] flex-shrink-0">
                      <div className="relative">
                        <Image
                          src="/placeholder.svg?height=120&width=240"
                          width={240}
                          height={120}
                          alt="Meeting thumbnail"
                          className="w-full h-32 object-cover"
                        />
                        <Badge className="absolute top-2 left-2 bg-[#1c0ae1] text-white rounded-sm font-normal text-xs">
                          Upcoming
                        </Badge>
                        <div className="p-4">
                          <h3 className="font-medium text-sm">Weekly Meeting - Product Demo Review with Testers</h3>
                          <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                            <span>📅 Mon, Jul 30, 2024</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                            <span>🕙 9:00 - 11:00AM</span>
                          </div>
                          <div className="flex items-center gap-2 mt-2 text-xs">
                            <div className="w-2 h-2 rounded-full bg-[#1c0ae1]"></div>
                            <span>UX Strategy Study group</span>
                          </div>
                          <div className="flex -space-x-2 mt-2">
                            <Avatar className="border-2 border-white h-5 w-5">
                              <AvatarFallback>1</AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-white h-5 w-5">
                              <AvatarFallback>2</AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="flex gap-2 mt-3">
                            <Button size="sm" variant="outline" className="text-xs flex-1 h-7 rounded">
                              View Participants
                            </Button>
                          </div>
                          <Button
                            size="sm"
                            className="bg-[#8b72fc] text-white hover:bg-[#7a61eb] text-xs w-full mt-2 h-7 rounded"
                          >
                            Join Now <span className="ml-1">→</span>
                          </Button>
                        </div>
                      </div>
                    </Card>

                    <Card className="overflow-hidden border-0 shadow-sm min-w-[300px] flex-shrink-0">
                      <div className="relative">
                        <Image
                          src="/placeholder.svg?height=120&width=240"
                          width={240}
                          height={120}
                          alt="Meeting thumbnail"
                          className="w-full h-32 object-cover"
                        />
                        <Badge className="absolute top-2 left-2 bg-[#2ac100] text-white rounded-sm font-normal text-xs">
                          Ongoing
                        </Badge>
                        <div className="p-4">
                          <h3 className="font-medium text-sm">Weekly Meeting - Product Demo Review with Testers</h3>
                          <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                            <span>📅 Mon, Jul 30, 2024</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                            <span>🕙 9:00 - 11:00AM</span>
                          </div>
                          <div className="flex items-center gap-2 mt-2 text-xs">
                            <div className="w-2 h-2 rounded-full bg-[#2ac100]"></div>
                            <span>UX Strategy Study group</span>
                          </div>
                          <div className="flex -space-x-2 mt-2">
                            <Avatar className="border-2 border-white h-5 w-5">
                              <AvatarFallback>1</AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-white h-5 w-5">
                              <AvatarFallback>2</AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="flex gap-2 mt-3">
                            <Button size="sm" variant="outline" className="text-xs flex-1 h-7 rounded">
                              View Participants
                            </Button>
                          </div>
                          <Button
                            size="sm"
                            className="bg-[#8b72fc] text-white hover:bg-[#7a61eb] text-xs w-full mt-2 h-7 rounded"
                          >
                            Join Now <span className="ml-1">→</span>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Applications and Mentors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6">
                  {/* Applications Section */}
                  <div className="w-full">
                    <div className="bg-white rounded-[20px] p-4">
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">≡</span>
                          <h2 className="text-[#1A1A1A] font-medium">Applications</h2>
                        </div>
                        <div className="flex items-center gap-2">
                          <a href="#" className="text-[#8B01D0] text-[15px]">See all</a>
                          <button className="w-8 h-8 flex items-center justify-center" title="More options">
                            <MoreHorizontal className="w-5 h-5 text-gray-500" />
                          </button>
                        </div>
                      </div>

                      <div className="mb-2 text-sm text-gray-500">Mentors</div>

                      {/* Application Item */}
                      <div className="border-b border-gray-100 py-3">
                        <div className="flex items-center gap-3">
                          <Checkbox id="application-1" className="rounded-sm" />
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>MS</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium truncate">Maxwell Smith</div>
                            <div className="text-xs text-gray-500 truncate">maxwellsmith@gmail.com</div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-[#ff3e3e] border-[#ff3e3e] hover:bg-[#ffeded] hover:text-[#ff3e3e] h-7 rounded whitespace-nowrap text-xs"
                            >
                              Reject
                            </Button>
                            <Button size="sm" className="bg-[#8b72fc] text-white hover:bg-[#7a61eb] h-7 rounded whitespace-nowrap text-xs">
                              Accept
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2 ml-10">
                          <Badge variant="outline" className="text-xs rounded-sm">
                            Product Designer
                          </Badge>
                          <Badge variant="outline" className="text-xs bg-[#f6f6f6] rounded-sm">
                            Spaces Experience
                          </Badge>
                          <div className="flex items-center gap-1 text-xs">
                            <div className="w-4 h-3 bg-green-500 rounded-sm"></div>
                            <span>Lagos, Nigeria</span>
                          </div>
                          <span className="text-xs text-gray-500">GMT +1</span>
                        </div>
                      </div>

                      {/* Students Section */}
                      <div className="mt-4 mb-2 text-sm text-gray-500">Students</div>

                      {/* Student Application Items */}
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="border-b border-gray-100 py-3">
                          <div className="flex items-center gap-3">
                            <Checkbox id={`student-${i}`} className="rounded-sm" />
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>AS</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium truncate">Adeati Samuel</div>
                              <div className="text-xs text-gray-500 truncate">maxwellsmith@gmail.com</div>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-[#ff3e3e] border-[#ff3e3e] hover:bg-[#ffeded] hover:text-[#ff3e3e] h-7 rounded whitespace-nowrap text-xs"
                              >
                                Reject
                              </Button>
                              <Button size="sm" className="bg-[#8b72fc] text-white hover:bg-[#7a61eb] h-7 rounded whitespace-nowrap text-xs">
                                Accept
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mentors and Recent Activities Column */}
                  <div className="space-y-6">
                    {/* Mentors Section */}
                    <div className="bg-white rounded-[20px] p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">≡</span>
                          <h2 className="text-[#1A1A1A] font-medium">Mentors</h2>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center" title="Add new mentor">
                            <Plus className="w-5 h-5 text-gray-500" />
                          </button>
                          <button className="w-8 h-8 flex items-center justify-center" title="More options">
                            <MoreHorizontal className="w-5 h-5 text-gray-500" />
                          </button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback>MS</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="text-[#1A1A1A] font-bold text-sm truncate">Maxwell Smith</div>
                            <div className="text-gray-500 text-xs truncate">Product Designer</div>
                          </div>
                          <Button className="bg-[#8B01D0] hover:bg-[#7A01B8] text-white rounded-full px-2 whitespace-nowrap text-xs">
                            Message
                          </Button>
                        </div>

                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback>AS</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="text-[#1A1A1A] font-bold text-sm truncate">Adeati Samuel</div>
                            <div className="text-gray-500 text-xs truncate">Product Designer</div>
                          </div>
                          <Button className="bg-[#8B01D0] hover:bg-[#7A01B8] text-white rounded-full px-2 whitespace-nowrap text-xs">
                            Message
                          </Button>
                        </div>
                      </div>

                      <button className="w-full mt-4 py-2 text-[#8B01D0] font-medium bg-[#F7EBFF] rounded-full hover:bg-[#F0E0FF] text-xs">
                        See all
                      </button>
                    </div>

                    {/* Recent Activities Section */}
                    <div className="bg-white rounded-[20px] p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">≡</span>
                          <h2 className="text-[#1A1A1A] font-medium">Recent Activities</h2>
                        </div>
                        <div className="flex items-center gap-2">
                          <a href="#" className="text-[#8B01D0] text-sm">See all</a>
                          <button className="w-8 h-8 flex items-center justify-center" title="More options">
                            <MoreHorizontal className="w-5 h-5 text-gray-500" />
                          </button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#FFEDED] flex items-center justify-center">
                            <span className="text-base">🔐</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[#1A1A1A] font-bold text-sm truncate">KYC Verification</div>
                            <div className="text-gray-500 text-xs truncate">45 new persons just signed up on Mently.</div>
                            <div className="text-gray-500 text-xs mt-1">25 minutes Ago</div>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#E7DDFF] flex items-center justify-center">
                            <span className="text-base">👤</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[#1A1A1A] font-bold text-sm truncate">New User Sign Up!</div>
                            <div className="text-gray-500 text-xs truncate">45 new persons just signed up on Mently.</div>
                            <div className="text-gray-500 text-xs mt-1">25 minutes Ago</div>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#E8FDFB] flex items-center justify-center">
                            <span className="text-base">💰</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[#1A1A1A] font-bold text-sm truncate">Withdrawal Request</div>
                            <div className="text-gray-500 text-xs truncate">Mardian requested a withdrawal.</div>
                            <div className="text-gray-500 text-xs mt-1">25 minutes Ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface SidebarItemProps {
  icon: string;
  label: string;
  active?: boolean;
  comingSoon?: boolean;
}

function SidebarItem({ icon, label, active = false, comingSoon = false }: SidebarItemProps) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer ${active ? 'bg-[#3D1273] text-white' : 'text-[#667085] hover:bg-[#3D1273] hover:text-white'}`}>
      {getIcon(icon)}
      <span className="text-sm font-medium">{label}</span>
      {comingSoon && (
        <span className="ml-auto text-xs font-medium text-[#6941C6] bg-[#F9F5FF] px-2 py-0.5 rounded">Coming soon</span>
      )}
    </div>
  );
}

function getIcon(name: string): React.ReactNode {
  const iconProps = {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  };

  switch (name) {
    case 'home':
      return (
        <svg {...iconProps}>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case 'layers':
      return (
        <svg {...iconProps}>
          <path d="M12 2L2 7L12 12L22 7L12 2Z" />
          <path d="M2 17L12 22L22 17" />
          <path d="M2 12L12 17L22 12" />
        </svg>
      );
    case 'activity':
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case 'users':
      return (
        <svg {...iconProps}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'message-circle':
      return (
        <svg {...iconProps}>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      );
    case 'dollar-sign':
      return (
        <svg {...iconProps}>
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case 'gift':
      return (
        <svg {...iconProps}>
          <path d="M20 12V22H4V12" />
          <path d="M22 7H2v5h20V7z" />
          <path d="M12 22V7" />
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </svg>
      )
    case "bar-chart":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="20" x2="12" y2="10" />
          <line x1="18" y1="20" x2="18" y2="4" />
          <line x1="6" y1="20" x2="6" y2="16" />
        </svg>
      )
    case "settings":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    case "log-out":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
      )
    default:
      return null
  }
}
