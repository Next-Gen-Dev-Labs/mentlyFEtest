"use client";

import React, { createContext, useState } from "react";
export const CommonDashboardContext = createContext<any>("");
const StateContext = ({ children }: { children: React.ReactNode }) => {
  const [showSideBar, setShowSideBar] = useState<boolean>();
  const [confirmLogout, setConfirmLogout] = useState<boolean>(false);
  const allContext = {
    showSideBar,
    setShowSideBar,
    confirmLogout,
    setConfirmLogout,
  };
  return (
    <CommonDashboardContext.Provider value={allContext}>
      {children}
    </CommonDashboardContext.Provider>
  );
};

export default StateContext;
