import { useState, useEffect, useMemo } from "react";

type BreakpointKey = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface BreakpointConfig {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  "2xl": number;
}

// Tailwind default breakpoints
const defaultBreakpoints: BreakpointConfig = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export default function useResponsive(customBreakpoints?: Partial<BreakpointConfig>) {
  const breakpoints = useMemo(
    () => ({ ...defaultBreakpoints, ...customBreakpoints }),
    [customBreakpoints]
  );

  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  const [breakpoint, setBreakpoint] = useState<BreakpointKey>("xs");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setWindowSize({ width, height });

      if (width >= breakpoints["2xl"]) {
        setBreakpoint("2xl");
      } else if (width >= breakpoints.xl) {
        setBreakpoint("xl");
      } else if (width >= breakpoints.lg) {
        setBreakpoint("lg");
      } else if (width >= breakpoints.md) {
        setBreakpoint("md");
      } else if (width >= breakpoints.sm) {
        setBreakpoint("sm");
      } else {
        setBreakpoint("xs");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints]);

  return {
    width: windowSize.width,
    height: windowSize.height,
    breakpoint,
    isMobile: breakpoint === "xs" || breakpoint === "sm",
    isTablet: breakpoint === "md",
    isDesktop: breakpoint === "lg" || breakpoint === "xl" || breakpoint === "2xl",
    isSmallScreen: breakpoint === "xs" || breakpoint === "sm" || breakpoint === "md",
    isLargeScreen: breakpoint === "lg" || breakpoint === "xl" || breakpoint === "2xl",
    isExtraLargeScreen: breakpoint === "xl" || breakpoint === "2xl",
    is2XL: breakpoint === "2xl",
    lessThan: (size: BreakpointKey) => windowSize.width < breakpoints[size],
    greaterThan: (size: BreakpointKey) => windowSize.width >= breakpoints[size],
  };
}
