'use client';

import { useState, useContext, createContext } from 'react';

type CollapseState = {
  toggle: () => void;
  isCollapsed: boolean;
};

type CollapseType = {
  sidebar: CollapseState;
  widgets: CollapseState;
};

export type CollapseProps = {
  isCollapsed?: boolean;
  toggleCollapse: () => void;
};

const CollapseContext = createContext<CollapseType | undefined>(undefined);

export function CollapseProvider({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [widgetsCollapsed, setWidgetsCollapsed] = useState(false);

  return (
    <CollapseContext.Provider value={{
      sidebar: {
        isCollapsed: sidebarCollapsed,
        toggle: () => setSidebarCollapsed(!sidebarCollapsed)
      },
      widgets: {
        isCollapsed: widgetsCollapsed,
        toggle: () => setWidgetsCollapsed(!widgetsCollapsed)
      }
    }}>
      {children}
    </CollapseContext.Provider>
  );
}

export function useCollapse() {
  const context = useContext(CollapseContext);
  if (context === undefined) {
    throw new Error('useCollapse must be used within a CollapseProvider');
  }
  return context;
}
