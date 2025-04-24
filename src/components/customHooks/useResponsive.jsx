import React, { useEffect, useState } from 'react'

const useResponsive = () => {
      const [windowSize, setWindowSize] = useState({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      
        useEffect(() => {
          const handleResize = () => {
            setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
            });
          };
      
          window.addEventListener('resize', handleResize);
      
          // Cleanup on component unmount
          return () => window.removeEventListener('resize', handleResize);
        }, []);
  return {
    windowSize
  }
}

export default useResponsive