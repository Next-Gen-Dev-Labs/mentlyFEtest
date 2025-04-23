"use client";

import React, { useRef, useState, useEffect, ReactNode } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface ScrollableContainerProps {
  children: ReactNode;
  className?: string;
}

const ScrollableContainer: React.FC<ScrollableContainerProps> = ({
  children,
  className = "",
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkForArrows = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;

      // Show left arrow if scrolled to the right
      setShowLeftArrow(scrollLeft > 0);

      // Show right arrow if there's more content to scroll
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkForArrows();

    const resizeObserver = new ResizeObserver(() => {
      checkForArrows();
    });

    if (scrollContainerRef.current) {
      resizeObserver.observe(scrollContainerRef.current);
    }

    return () => {
      if (scrollContainerRef.current) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  const handleScroll = () => {
    checkForArrows();
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative group">
      {showLeftArrow && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100 transition-opacity duration-300"
          aria-label="Scroll left"
        >
          <IoIosArrowForward className="rotate-180" />
        </button>
      )}

      <div
        ref={scrollContainerRef}
        className={`flex gap-4 overflow-x-hidden ${className}`}
        onScroll={handleScroll}
      >
        {children}
      </div>

      {showRightArrow && (
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100 transition-opacity duration-300"
          aria-label="Scroll right"
        >
          <IoIosArrowForward />
        </button>
      )}
    </div>
  );
};

export default ScrollableContainer;
