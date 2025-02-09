"use client";
import { useTheme } from "next-themes";
import React, { createContext, useContext, useState } from "react";

interface AppContextType {
  data: {
    isCollapsed: boolean;
    isMobileMenuOpen: boolean;
  };
  updateData: (newData: Partial<AppContextType["data"]>) => void;
  toggleTheme: () => void;
  theme: string | undefined;
  mounted: boolean;
}

export const defaultRegisterData: AppContextType["data"] = {
  isCollapsed: false,
  isMobileMenuOpen: false,
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme, setTheme } = useTheme();
  const [data, setData] = useState(defaultRegisterData);
  const [mounted, setMounted] = useState(false);

  const updateData = (newData: Partial<AppContextType["data"]>) => {
    setData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <AppContext.Provider
      value={{
        data,
        updateData,
        toggleTheme,
        theme,
        mounted,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "useApp must be used within a AppProvider. Wrap a parent component in <AppProvider> to fix this error."
    );
  }
  return context;
};
