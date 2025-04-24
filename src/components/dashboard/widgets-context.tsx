"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface WidgetsState {
  programs: boolean
  groupCalls: boolean
  students: boolean
  mentors: boolean
  applications: boolean
  recentActivities: boolean
  users: boolean
  earnings: boolean
  forum: boolean
  programAnalysis: boolean
}

interface WidgetsContextType {
  widgets: WidgetsState
  updateWidget: (name: string, value: boolean) => void
  resetToDefault: () => void
}

const defaultWidgets: WidgetsState = {
  programs: true,
  groupCalls: true,
  students: true,
  mentors: true,
  applications: true,
  recentActivities: true,
  users: true,
  earnings: false,
  forum: false,
  programAnalysis: false,
}

const WidgetsContext = createContext<WidgetsContextType | undefined>(undefined)

export function WidgetsProvider({ children }: { children: ReactNode }) {
  const [widgets, setWidgets] = useState<WidgetsState>(defaultWidgets)

  const updateWidget = (name: string, value: boolean) => {
    setWidgets((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const resetToDefault = () => {
    setWidgets(defaultWidgets)
  }

  return <WidgetsContext.Provider value={{ widgets, updateWidget, resetToDefault }}>{children}</WidgetsContext.Provider>
}

export function useWidgets() {
  const context = useContext(WidgetsContext)
  if (context === undefined) {
    throw new Error("useWidgets must be used within a WidgetsProvider")
  }
  return context
}
