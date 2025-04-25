import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768; // Define the breakpoint for mobile devices

export function useIsMobile() {
     const [isMobile, setIsMobile] = useState<boolean>(false); // Default to false to avoid server-side window access

     useEffect(() => {
          // Ensure this code runs only on the client
          const handleResize = () => {
               setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
          };

          // Initialize the state and add the resize listener
          handleResize(); // Run once on mount
          window.addEventListener("resize", handleResize);

          // Cleanup the event listener on unmount
          return () => {
               window.removeEventListener("resize", handleResize);
          };
     }, []);

     return isMobile;
}