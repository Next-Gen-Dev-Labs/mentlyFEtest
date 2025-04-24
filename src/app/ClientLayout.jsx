"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./components/Loader/LoadingScreen";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [slideOut, setSlideOut] = useState(false); // for animation
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setNavVisible(currentScrollY !== 0);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setSlideOut(true); // trigger slide animation
      setTimeout(() => setLoading(false), 500); // remove after animation
    }, 2000);
  }, []);

  return (
    <>
      {/* Animated Loading screen */}
      {loading && (
        <div
          className={`fixed z-50 h-screen w-full bg-[#340260] justify-center flex flex-col items-center top-0 left-0 right-0 overflow-hidden transition-transform duration-500 ease-in-out ${
            slideOut ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <span>
            <LoadingScreen />
          </span>
        </div>
      )}

      {children}
    </>
  );
}