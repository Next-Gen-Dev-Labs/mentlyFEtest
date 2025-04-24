// /contexts/WidgetContext.tsx
"use client"

import { createContext, useContext, useState, useEffect } from 'react'

type WidgetKeys = string;

interface WidgetContextType {
    visibleWidgets: Record<WidgetKeys, boolean>
    tempVisibleWidgets: Record<WidgetKeys, boolean>
    toggleTempWidget: (widget: WidgetKeys) => void
    saveWidgets: () => void
    isSidebarOpen: boolean
    toggleSidebar: () => void
    resetToDefaults: () => void
  }
  
  const WidgetContext = createContext<WidgetContextType | undefined>(undefined)
  
  export function WidgetProvider({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [visibleWidgets, setVisibleWidgets] = useState<Record<WidgetKeys, boolean>>({
      programs: true,
      chart: true,
      groupCalls: true,
      applications: true,
      mentors: true,
      activities: true
    })
    
    // Temporary state for unsaved changes
    const [tempVisibleWidgets, setTempVisibleWidgets] = useState(visibleWidgets)
  
    // Sync temp state when sidebar opens
    useEffect(() => {
      if (isSidebarOpen) {
        setTempVisibleWidgets(visibleWidgets)
      }
    }, [isSidebarOpen, visibleWidgets])
  
    const toggleTempWidget = (widget: WidgetKeys) => {
      setTempVisibleWidgets(prev => ({
        ...prev,
        [widget]: !prev[widget]
      }))
    }
  
    const saveWidgets = () => {
      setVisibleWidgets(tempVisibleWidgets)
      setIsSidebarOpen(false)
      // Optional: Save to localStorage
      localStorage.setItem('widgetPreferences', JSON.stringify(tempVisibleWidgets))
    }
  
    const toggleSidebar = () => {
      setIsSidebarOpen(prev => !prev)
    }
    const resetToDefaults = () => {
        const defaults = {
          programs: true,
          chart: true,
          groupCalls: true,
          applications: true,
          mentors: true,
          activities: true
        }
        setTempVisibleWidgets(defaults)
      }
  
    return (
      <WidgetContext.Provider value={{ 
        visibleWidgets, 
        tempVisibleWidgets,
        toggleTempWidget, 
        saveWidgets,
        isSidebarOpen, 
        resetToDefaults,
        toggleSidebar 
      }}>
        {children}
      </WidgetContext.Provider>
    )
  }

export function useWidgets() {
  const context = useContext(WidgetContext)
  if (!context) {
    throw new Error('useWidgets must be used within a WidgetProvider')
  }
  return context
}