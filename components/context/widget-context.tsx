"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type WidgetId =
  | "programs"
  | "group-calls"
  | "mentors"
  | "recent-activities"
  | "application"
  | "users"
  | "forum"
  | "earnings"
  | "program-analysis";

export type Widget = {
  id: WidgetId;
  name: string;
  enabled: boolean;
};

type WidgetContextType = {
  widgets: Widget[];
  isWidgetEnabled: (id: WidgetId) => boolean;
  toggleWidget: (id: WidgetId, enabled: boolean) => void;
  resetToDefault: () => void;
  saveChanges: () => void;
};

const defaultWidgets: Widget[] = [
  { id: "programs", name: "Programs", enabled: true },
  { id: "group-calls", name: "Group Calls", enabled: true },
  { id: "mentors", name: "Mentors", enabled: true },
  { id: "recent-activities", name: "Recent Activities", enabled: true },
  { id: "application", name: "Application", enabled: true },
  { id: "users", name: "User", enabled: true },
  { id: "earnings", name: "Earnings", enabled: false },
  { id: "program-analysis", name: "Program Analysis", enabled: false },
  { id: "forum", name: "Forum", enabled: false },
];

const WidgetContext = createContext<WidgetContextType | undefined>(undefined);

export function WidgetProvider({ children }: { children: ReactNode }) {
  const [widgets, setWidgets] = useState<Widget[]>([...defaultWidgets]);

  const isWidgetEnabled = (id: WidgetId): boolean => {
    const widget = widgets.find((w) => w.id === id);
    return widget ? widget.enabled : false;
  };

  const toggleWidget = (id: WidgetId, enabled: boolean) => {
    setWidgets((prev) =>
      prev.map((widget) => (widget.id === id ? { ...widget, enabled } : widget))
    );
  };

  const resetToDefault = () => {
    setWidgets([...defaultWidgets]);
  };

  const saveChanges = () => {
    // This will be implemented later for localStorage
    return true;
  };

  return (
    <WidgetContext.Provider
      value={{
        widgets,
        isWidgetEnabled,
        toggleWidget,
        resetToDefault,
        saveChanges,
      }}
    >
      {children}
    </WidgetContext.Provider>
  );
}

export function useWidgets() {
  const context = useContext(WidgetContext);
  if (!context) {
    throw new Error("useWidgets must be used within a WidgetProvider");
  }
  return context;
}
