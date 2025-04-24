'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

interface WidgetContextType {
  isWidgetVisible: boolean;
  isRightBarOpen: boolean;
  toggleWidget: () => void;
  toggleRightBar: () => void;
}

const WidgetContext = createContext<WidgetContextType | undefined>(undefined);

export function WidgetProvider({ children }: { children: ReactNode }) {
  const [isWidgetVisible, setIsWidgetVisible] = useState(false);
  const [isRightBarOpen, setIsRightBarOpen] = useState(false);

  const toggleWidget = () => {
    setIsWidgetVisible(!isWidgetVisible);
  };

  const toggleRightBar = () => {
    setIsRightBarOpen(!isRightBarOpen);
  };

  return (
    <WidgetContext.Provider value={{ 
      isWidgetVisible, 
      isRightBarOpen,
      toggleWidget,
      toggleRightBar 
    }}>
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