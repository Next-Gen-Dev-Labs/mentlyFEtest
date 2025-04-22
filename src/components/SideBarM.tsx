// import React, { useState, useRef, useEffect, ReactNode } from 'react';

// interface SidebarPopupProps {
//   children: ReactNode;
// }

// export const SidebarPopup: React.FC<SidebarPopupProps> = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const sidebarRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isOpen]);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       {/* Hamburger Icon */}
//       <button onClick={toggleSidebar} className="md:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M4 6h16M4 12h16M4 18h16"
//           />
//         </svg>
//       </button>

//       {/* Overlay */}
//       {isOpen && (
//         <div
//           className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
//           onClick={toggleSidebar}
//         ></div>
//       )}

//       {/* Sidebar Popup - Conditional Rendering */}
//       {isOpen && (
//         <div
//           className="fixed top-0 left-0 h-full w-3/4 md:w-1/4 bg-white z-50 transition-transform duration-300 translate-x-0"
//           ref={sidebarRef}
//         >
//           {/* Close Button */}
//           <button onClick={toggleSidebar} className="absolute top-4 right-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>

//           {/* Sidebar Content */}
//           <div className="p-4">{children}</div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Example usage:
// const App: React.FC = () => {
//   return (
//     <div>
//       <SidebarPopup>
//         <ul className="space-y-2">
//           <li>
//             <a href="#">Home</a>
//           </li>
//           <li>
//             <a href="#">About</a>
//           </li>
//           <li>
//             <a href="#">Contact</a>
//           </li>
//         </ul>
//       </SidebarPopup>

//       <div className="p-4">
//         <h1>My App Content</h1>
//         <p>This is the main content of my application.</p>
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState, useRef, useEffect, ReactNode } from "react";
import { useSpring, animated } from "@react-spring/web"; // Import React Spring
import { IconMenu2 } from "@tabler/icons-react";
import { Navbar } from "./SideBar";

interface SidebarPopupProps {
  trigger: ReactNode;
}

export const SidebarPopup: React.FC<SidebarPopupProps> = ({ trigger }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const springProps = useSpring({
    // React Spring animation
    transform: isOpen ? "translateX(0%)" : "translateX(-100%)",
    opacity: isOpen ? 1 : 0, // Fade in/out
    config: { duration: 300 }, // Adjust duration as needed
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const AnimatedDiv = animated("div");
  return (
    <div>
      {/* Hamburger Icon */}
      <div className="md:hidden"onClick={toggleSidebar}>
        {trigger}
      </div>
      {/* <IconMenu2 size={24}  className="" /> */}
      {/* ... (hamburger SVG) */}
      {/* <button onClick={toggleSidebar} className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button> */}

      {/* Overlay - Fade in/out with React Spring */}
      {isOpen && (
        <div className="">
          <AnimatedDiv
            style={{ ...springProps /* Apply springProps to the overlay */ }}
            className={"fixed top-0 left-0 w-full h-full bg-black/50 z-40"}
            onClick={toggleSidebar}
          />
        </div>
      )}

      {/* Sidebar Popup - Use animated.div and springProps */}
      {isOpen && (
        <AnimatedDiv
          style={springProps} // Apply springProps
          ref={sidebarRef}
          className="fixed top-0 left-0 h-full w-3/4 md:w-1/4 bg-primary z-50 transition-none"
        >
          <Navbar isMobile />
          {/* Close Button */}
          <button onClick={toggleSidebar} className="absolute top-4 right-4">
            {/* ... (close SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Sidebar Content */}
          {/* <div className="p-4">{children}</div> */}
        </AnimatedDiv>
      )}
    </div>
  );
};

// ... (App component - same as before)

export default SidebarPopup;
