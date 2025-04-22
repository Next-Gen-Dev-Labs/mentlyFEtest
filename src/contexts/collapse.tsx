'use client';

import { useState, useContext, createContext } from 'react';

type CollapseType = {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

const Collapse = createContext<CollapseType | undefined>(undefined);

export function CollapseProvider({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <Collapse.Provider value={{ isCollapsed, toggleCollapse }}>
      {children}
    </Collapse.Provider>
  )
}

export function useCollapse() {
  const context = useContext(Collapse)
  if (context === undefined) {
    throw new Error('useCollapse must be used within a CollapseProvider');
  }
  return context;
}
