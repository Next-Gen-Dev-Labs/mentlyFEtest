// hooks/useSidebar.js
import { useState } from 'react';

export function useSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  return { sidebarOpen, toggleSidebar };
}
