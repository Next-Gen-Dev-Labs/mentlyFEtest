"use client"

import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of your context
interface AppContextType {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

// Create the context with a default value
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <AppContext.Provider value={{ 
        isCollapsed, 
        setIsCollapsed
         }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for easy use
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
