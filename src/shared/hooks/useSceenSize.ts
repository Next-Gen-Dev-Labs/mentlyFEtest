// src/shared/hooks/useScreenSize.ts
import { useState, useEffect } from "react";

export const useScreenSize = (breakpoint: number = 1024) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= breakpoint);
    };

    // Check initial screen size
    checkScreenSize();

    // Add event listener to check screen size on resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [breakpoint]);

  return isLargeScreen;
};
