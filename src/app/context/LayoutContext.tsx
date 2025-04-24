"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface WidgetState {
  programs: boolean;
  groupCalls: boolean;
  mentors: boolean;
  recentActivities: boolean;
  applications: boolean;
  earnings: boolean;
  forum: boolean;
  programAnalysis: boolean;
}

interface LayoutContextType {
  toggleSidebar: () => void;
  isSidebarExpanded: boolean;
  isSidebarVisible: boolean;
  isMobile: boolean;
  // Add widget state management
  widgets: WidgetState;
  setWidgets: (widgets: WidgetState) => void;
  resetWidgetsToDefault: () => void;
}

const defaultWidgetState: WidgetState = {
  programs: true,
  groupCalls: true,
  mentors: true,
  recentActivities: true,
  applications: true,
  earnings: false,
  forum: false,
  programAnalysis: false,
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({
  children,
  initialValues,
}: {
  children: ReactNode;
  initialValues: Omit<
    LayoutContextType,
    "widgets" | "setWidgets" | "resetWidgetsToDefault"
  >;
}) {
  const [widgets, setWidgetsState] = useState<WidgetState>(() => {
    if (typeof window !== "undefined") {
      const savedWidgets = localStorage.getItem("dashboardWidgets");
      return savedWidgets ? JSON.parse(savedWidgets) : defaultWidgetState;
    }
    return defaultWidgetState;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("dashboardWidgets", JSON.stringify(widgets));
    }
  }, [widgets]);

  const setWidgets = (newWidgets: WidgetState) => {
    setWidgetsState(newWidgets);
  };

  const resetWidgetsToDefault = () => {
    setWidgetsState(defaultWidgetState);
  };

  const value = {
    ...initialValues,
    widgets,
    setWidgets,
    resetWidgetsToDefault,
  };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
}

export function useLayoutContext() {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error("useLayoutContext must be used within a LayoutProvider");
  }
  return context;
}
