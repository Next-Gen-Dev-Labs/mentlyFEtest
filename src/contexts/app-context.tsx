"use client"

import React, { createContext, useContext, useState } from 'react'

type AppContextType = {
  isClassicMode: boolean
  setIsClassicMode: (value: boolean) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [isClassicMode, setIsClassicMode] = useState(false)

  return (
    <AppContext.Provider value={{ isClassicMode, setIsClassicMode }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppContextProvider')
  }
  return context
}