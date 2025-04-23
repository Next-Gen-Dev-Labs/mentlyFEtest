'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

interface WidgetContextType {
  isWidgetVisible: boolean;
  toggleWidget: () => void;
}

const WidgetContext = createContext<WidgetContextType | undefined>(undefined);

export function WidgetProvider({ children }: { children: ReactNode }) {
  const [isWidgetVisible, setIsWidgetVisible] = useState(true);

  const toggleWidget = () => {
    setIsWidgetVisible(prev => !prev);
  };

  return (
    <WidgetContext.Provider value={{ isWidgetVisible, toggleWidget }}>
      {children}
    </WidgetContext.Provider>
  );
}

export function useWidget() {
  const context = useContext(WidgetContext);
  if (context === undefined) {
    throw new Error('useWidget must be used within a WidgetProvider');
  }
  return context;
} 