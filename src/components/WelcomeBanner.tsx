"use client";

import { useState, useEffect } from "react";

/**
 * WelcomeBanner Component
 *
 * Displays a greeting banner at the top of the dashboard with the user's name
 * and a call-to-action button to update their profile.
 */
const WelcomeBanner = () => {
  // Animation states
  const [isLoaded, setIsLoaded] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // Trigger animations after component mounts
  useEffect(() => {
    // Set loaded state immediately
    setIsLoaded(true);

    // Delay button appearance for staggered animation effect
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="bg-[#6F01D0] p-2 mb-8 rounded-md overflow-hidden relative w-full max-w-full"
      data-testid="welcome-banner"
      style={{
        boxShadow: "0 4px 12px rgba(111, 1, 208, 0.2)",
      }}
    >
      {/* Decorative animated background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#6F01D0] via-[#9240D5] to-[#6F01D0] opacity-30"
        style={{
          backgroundSize: "200% 100%",
          animation: "shimmer 3s infinite linear",
        }}
      />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 relative z-10 p-4 md:p-0">
        {/* Text content: Adjust padding and text size for mobile */}
        <div className="flex flex-col">
          <h1
            className="text-white text-xl md:text-2xl md:pl-8 font-semibold"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            }}
          >
            Welcome Aboard, Blessing 👋
          </h1>
          <p
            className="text-base md:text-lg text-[#BDBDBD] mt-1 md:mt-0 md:pl-8"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(10px)",
              transition:
                "opacity 0.5s ease-out 0.1s, transform 0.5s ease-out 0.1s",
            }}
          >
            We're thrilled to have you join Techrity Team!
          </p>
        </div>

        {/* Button: Align self to start on mobile, adjust margin/padding */}
        <div className="self-start md:self-center md:pr-8">
          <button
            className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 hover:shadow-md mt-2 md:mt-0"
            aria-label="Update your profile information"
            style={{
              opacity: showButton ? 1 : 0,
              transform: showButton ? "translateX(0)" : "translateX(20px)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            }}
            onClick={() => {
              // Would typically navigate to profile page or open modal
              console.log("Navigate to profile update page");
            }}
          >
            Update Profile
          </button>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default WelcomeBanner;
