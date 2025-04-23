(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/navbar/navbar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
const Navbar = ()=>{
    return(// <nav className="flex justify-between items-center p-4 ml-2 border-b border-[#F7F7F7]">
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "bg-white shadow-md p-4 flex border-b border-[#F7F7F7]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex space-x-10 ml-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/assets/bell.png",
                    alt: "bell",
                    width: 30,
                    height: 30,
                    className: "object-contain"
                }, void 0, false, {
                    fileName: "[project]/app/components/navbar/navbar.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/assets/nav.png",
                    alt: "nav",
                    width: 150,
                    height: 150,
                    className: "object-contain"
                }, void 0, false, {
                    fileName: "[project]/app/components/navbar/navbar.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/navbar/navbar.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/navbar/navbar.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this));
};
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/sidebar/sidebar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// import React, { useState } from "react";
// import Image from "next/image";
// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [isClassicMode, setIsClassicMode] = useState(false);
//   const handleToggle = () => {
//     setIsClassicMode(!isClassicMode);
//   };
//   return (
//     <>
//       {/*harmbuger for small screen */}
//       {!isOpen && (
//         <div
//           className="p-2 text-white fixed top-4 left-4 z-50 cursor-pointer rounded lg:hidden"
//           onClick={() => setIsOpen(true)}
//         >
//           <div className="space-y-1">
//             <span
//               className={`block h-1 w-8 bg-[#340260] transition-all duration-300 ${
//                 isOpen ? "rotate-45 translate-y-2" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-1 w-6 bg-[#340260] transition-all duration-300 ${
//                 isOpen ? "opacity-0" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-1 w-8 bg-[#340260] transition-all duration-300 ${
//                 isOpen ? "-rotate-45 -translate-y-2" : ""
//               }`}
//             ></span>
//           </div>
//         </div>
//       )}
//       {/* Sidebar content */}
//       <div
//         className={`fixed top-0 left-0 w-64 md:w-[240px] lg:w-64 p-3 transform transition-transform duration-300 z-40
//           ${isOpen ? "translate-x-0" : "-translate-x-full"} 
//           lg:translate-x-0 lg:static lg:block min-h-screen 
//           ${isClassicMode ? "bg-[#333333]" : "bg-[#340260]"}
//         `}
//       >
//         <div className="relative flex items-center justify-between mt-8">
//           <div className="flex items-center justify-between ">
//             <Image
//               src="/assets/logo.png"
//               alt="Dashboard Logo"
//               width={120}
//               height={130}
//             />
//           </div>
//           <div className="flex items-center justify-between hidden lg:block">
//             <Image
//               src="/assets/vec.png"
//               alt="Dashboard Logo"
//               width={20}
//               height={20}
//             />
//           </div>
//           {/* Hamburger/X */}
//           <div
//             className={`w-8 h-8 border-2 border-white rounded-[10px] flex items-center justify-center text-white text-xl font-bold cursor-pointer lg:hidden transform transition-transform duration-300 ${
//               isOpen ? "rotate-90 scale-100" : "scale-0"
//             }`}
//             onClick={() => setIsOpen(false)}
//           >
//             ✕
//           </div>
//         </div>
//         {/* nav links */}
//         <nav className="flex flex-col items-center space-y-4 mt-16 mb-10">
//           {[
//             { src: "/assets/dash.png", text: "Dashboard", highlight: true },
//             { src: "/assets/book.png", text: "Programs" },
//             { src: "/assets/bubble.png", text: "Activities" },
//             { src: "/assets/vector.png", text: "Users" },
//             { src: "/assets/forum.png", text: "Forums" },
//             { src: "/assets/wallet.png", text: "Finances" },
//             { src: "/assets/award.png", text: "Rewards" },
//             { src: "/assets/diagram.png", text: "Analytics" },
//             { src: "/assets/setting.png", text: "Settings" },
//             { src: "/assets/logout.png", text: "Logout" },
//           ].map((item, i) => (
//             <a
//               key={i}
//               href="#"
//               className={`flex w-[230px] items-center gap-4 p-3 rounded-md ${
//                 item.highlight
//                   ? "bg-white border-[1.5px] border-[#1F0954] text-[#1F0954] font-semibold"
//                   : "text-[#C2C2C2] hover:text-purple-300"
//               }`}
//             >
//               <Image src={item.src} alt={item.text} width={20} height={20} />
//               <span className="text-[16px]">{item.text}</span>
//             </a>
//           ))}
//         </nav>
//         {/* questions */}
//         <div className="flex flex-col items-start p-4 bg-[#4C2073] rounded-[10px] mb-10">
//           <Image src="/assets/tag.png" alt="D Logo" width={20} height={20} />
//           <p className="mt-2 text-[12px] font-bold">
//             Got some questions, enquiries or need help?
//           </p>
//           <br />
//           <p className="text-[10px] text-[#F0C074]">
//             Visit Mently Help Desk Here
//           </p>
//         </div>
//         {/* Mode Switch */}
//         <div className="flex items-center justify-center space-x-2 mt-4 lg:mb-20">
//           <span className="text-[#fff] font-semibold flex items-center gap-2">
//             <span className="text-[12px]">
//               {isClassicMode ? "Classic Mode" : "Modern Mode"}
//             </span>
//           </span>
//           <label
//             htmlFor="mode-toggle"
//             className="flex items-center cursor-pointer"
//           >
//             <div className="relative">
//               <input
//                 type="checkbox"
//                 id="mode-toggle"
//                 className="sr-only"
//                 checked={isClassicMode}
//                 onChange={handleToggle}
//               />
//               <div className="w-12 h-6 bg-gray-300 rounded-full shadow-inner"></div>
//               <div
//                 className={`absolute top-0 left-0 w-6 h-6 bg-[#000] rounded-full transition-transform duration-300 transform ${
//                   isClassicMode ? "translate-x-6" : "translate-x-0"
//                 }`}
//               ></div>
//             </div>
//           </label>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Sidebar;
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const Sidebar = ()=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isClassicMode, setIsClassicMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            // Set sidebar open only if screen width >= 1024
            const initialCheck = {
                "Sidebar.useEffect.initialCheck": ()=>{
                    setIsOpen(window.innerWidth >= 1024);
                }
            }["Sidebar.useEffect.initialCheck"];
            initialCheck();
            const handleResize = {
                "Sidebar.useEffect.handleResize": ()=>{
                    if (window.innerWidth >= 1024) {
                        setIsOpen(true);
                    } else {
                        setIsOpen(false);
                    }
                }
            }["Sidebar.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            return ({
                "Sidebar.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["Sidebar.useEffect"];
        }
    }["Sidebar.useEffect"], []);
    const handleToggle = ()=>{
        setIsClassicMode(!isClassicMode);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 text-white fixed top-4 left-4 z-50 cursor-pointer rounded lg:hidden",
                onClick: ()=>setIsOpen(true),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block h-1 w-8 bg-[#340260]"
                        }, void 0, false, {
                            fileName: "[project]/app/components/sidebar/sidebar.tsx",
                            lineNumber: 201,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block h-1 w-6 bg-[#340260]"
                        }, void 0, false, {
                            fileName: "[project]/app/components/sidebar/sidebar.tsx",
                            lineNumber: 202,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block h-1 w-8 bg-[#340260]"
                        }, void 0, false, {
                            fileName: "[project]/app/components/sidebar/sidebar.tsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/sidebar/sidebar.tsx",
                    lineNumber: 200,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                lineNumber: 196,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-0 left-0 w-64 md:w-[240px] lg:w-64 p-3 transform transition-transform duration-300 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:static lg:block min-h-screen 
          ${isClassicMode ? "bg-[#333333]" : "bg-[#340260]"}
        `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center justify-between mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/logo.png",
                                alt: "Dashboard Logo",
                                width: 120,
                                height: 130
                            }, void 0, false, {
                                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "hidden lg:block",
                                src: "/assets/vec.png",
                                alt: "Vector",
                                width: 20,
                                height: 20
                            }, void 0, false, {
                                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-8 h-8 border-2 border-white rounded-[10px] flex items-center justify-center text-white text-xl font-bold cursor-pointer lg:hidden transform transition-transform duration-300 ${isOpen ? "rotate-90 scale-100" : "scale-0"}`,
                                onClick: ()=>setIsOpen(false),
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/sidebar/sidebar.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex flex-col items-center space-y-4 mt-16 mb-10",
                        children: [
                            {
                                src: "/assets/dash.png",
                                text: "Dashboard",
                                highlight: true
                            },
                            {
                                src: "/assets/book.png",
                                text: "Programs"
                            },
                            {
                                src: "/assets/bubble.png",
                                text: "Activities"
                            },
                            {
                                src: "/assets/vector.png",
                                text: "Users"
                            },
                            {
                                src: "/assets/forum.png",
                                text: "Forums"
                            },
                            {
                                src: "/assets/wallet.png",
                                text: "Finances"
                            },
                            {
                                src: "/assets/award.png",
                                text: "Rewards"
                            },
                            {
                                src: "/assets/diagram.png",
                                text: "Analytics"
                            },
                            {
                                src: "/assets/setting.png",
                                text: "Settings"
                            },
                            {
                                src: "/assets/logout.png",
                                text: "Logout"
                            }
                        ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: `flex w-[230px] items-center gap-4 p-3 rounded-md ${item.highlight ? "bg-white border-[1.5px] border-[#1F0954] text-[#1F0954] font-semibold" : "text-[#C2C2C2] hover:text-purple-300"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: item.src,
                                        alt: item.text,
                                        width: 20,
                                        height: 20
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[16px]",
                                        children: item.text
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                        lineNumber: 261,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/sidebar/sidebar.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-start p-4 bg-[#4C2073] rounded-[10px] mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/tag.png",
                                alt: "Tag Icon",
                                width: 20,
                                height: 20
                            }, void 0, false, {
                                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-[12px] text-[#fff] font-bold",
                                children: "Got some questions, enquiries or need help?"
                            }, void 0, false, {
                                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-[#F0C074]",
                                children: "Visit Mently Help Desk Here"
                            }, void 0, false, {
                                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/sidebar/sidebar.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center space-x-2 mt-4 lg:mb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#fff] font-semibold flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[12px]",
                                    children: isClassicMode ? "Classic Mode" : "Modern Mode"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "mode-toggle",
                                className: "flex items-center cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            id: "mode-toggle",
                                            className: "sr-only",
                                            checked: isClassicMode,
                                            onChange: handleToggle
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                            lineNumber: 287,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-6 bg-gray-300 rounded-full shadow-inner"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                            lineNumber: 294,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute top-0 left-0 w-6 h-6 bg-[#000] rounded-full transition-transform duration-300 transform ${isClassicMode ? "translate-x-6" : "translate-x-0"}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                    lineNumber: 286,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/sidebar/sidebar.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(Sidebar, "kujT8Pof3ZD0RnlFDDGhOB3vSfw=");
_c = Sidebar;
const __TURBOPACK__default__export__ = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/widget/widget.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ManageWidgets)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const widgetList = [
    "Programs",
    "Group Calls",
    "Mentors",
    "Recent Activities",
    "Application",
    "Earnings",
    "Forum",
    "Program Analysis"
];
const defaultSelected = new Set([
    "Programs",
    "Group Calls",
    "Mentors",
    "Recent Activities",
    "Application"
]);
function ManageWidgets() {
    _s();
    const [selectedWidgets, setSelectedWidgets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set(defaultSelected));
    const toggleWidget = (widget)=>{
        const newSelected = new Set(selectedWidgets);
        if (newSelected.has(widget)) {
            newSelected.delete(widget);
        } else {
            newSelected.add(widget);
        }
        setSelectedWidgets(newSelected);
    };
    const resetToDefault = ()=>{
        setSelectedWidgets(new Set(defaultSelected));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-purple-700",
                        children: "Manage Widget"
                    }, void 0, false, {
                        fileName: "[project]/app/components/widget/widget.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 mt-2",
                        children: "Personalize your dashboard by managing widgets add, remove, or reorder them to fit your workflow."
                    }, void 0, false, {
                        fileName: "[project]/app/components/widget/widget.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/widget/widget.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-4 space-y-4",
                children: widgetList.map((widget)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-center justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGripLines"], {
                                        className: "text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/widget/widget.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-800 font-semibold",
                                        children: widget
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/widget/widget.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/widget/widget.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                className: "form-checkbox w-5 h-5 text-green-600 rounded",
                                checked: selectedWidgets.has(widget),
                                onChange: ()=>toggleWidget(widget)
                            }, void 0, false, {
                                fileName: "[project]/app/components/widget/widget.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        ]
                    }, widget, true, {
                        fileName: "[project]/app/components/widget/widget.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/widget/widget.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex space-x-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-purple-700 text-white px-4 py-2 rounded-md font-semibold w-full",
                        children: "Save Changes"
                    }, void 0, false, {
                        fileName: "[project]/app/components/widget/widget.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: resetToDefault,
                        className: "border border-purple-700 text-purple-700 px-4 py-2 rounded-md font-semibold w-full",
                        children: "Reset to Default"
                    }, void 0, false, {
                        fileName: "[project]/app/components/widget/widget.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/widget/widget.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/widget/widget.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(ManageWidgets, "e811IYST5tiiTDxWVtJIVxxo5gM=");
_c = ManageWidgets;
var _c;
__turbopack_context__.k.register(_c, "ManageWidgets");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Navbar from "./components/navbar/navbar";
// import Sidebar from "./components/sidebar/sidebar";
// import { groupCallData } from "./components/data/data";
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
// import "aos/dist/aos.css";
// import AOS from "aos";
// import Widget from "./components/widget/widget";
// const [showWidget, setShowWidget] = useState(false);
// const toggleWidget = () => {
//   setShowWidget((prev) => !prev);
// };
// const data = [
//   { name: "Students", value: 200, color: "#4f46e5" },
//   { name: "Mentors", value: 8, color: "#22c55e" },
//   { name: "Programs", value: 22, color: "#f59e0b" },
//   { name: "Others", value: 10, color: "#6366f1" },
// ];
// const Slideshow = ({ images }: { images: string[] }) => {
//   const [index, setIndex] = useState(0);
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 2000);
//     return () => clearInterval(timer);
//   }, [images.length]);
//   return (
//     <Image
//       src={images[index]}
//       alt="slideshow"
//       layout="fill"
//       objectFit="cover"
//       className="transition duration-500"
//     />
//   );
// };
// const Page = () => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       AOS.init({
//         duration: 500,
//         easing: "ease-in-out",
//         once: true,
//       });
//     }, 100);
//     return () => clearTimeout(timer);
//   }, []);
//   return (
//     <div className="flex flex-col lg:flex-row">
//       <Sidebar />
//       <div className="flex-1 ml-0">
//         <Navbar />
//         {/* <div className="flex justify-end p-4">
//   <div className="flex gap-3 items-center">
//   <Image
//       src="/assets/mater.png"
//       alt="Mentor"
//       width={24}
//       height={24}
//       className=" object-cover"
//       onClick={handleImageClick}
//     />
//     <Image
//       src="/assets/mat.png"
//       alt="Mentor"
//       width={24}
//       height={24}
//       className=" object-cover"
//       onClick={handleImageClick}
//     />
//     <p className="text-[#1F0954] font-bold">Manage Widgets</p>
//   </div>
// </div> */}
//       <div className="flex justify-end p-4">
//         <div className="flex gap-3 items-center">
//           <Image
//             src="/assets/mater.png"
//             alt="Mentor"
//             width={24}
//             height={24}
//             onClick={toggleWidget}
//             className="object-cover cursor-pointer"
//           />
//           <Image
//             src="/assets/mat.png"
//             alt="Mentor"
//             width={24}
//             height={24}
//             onClick={toggleWidget}
//             className="object-cover cursor-pointer"
//           />
//           <p className="text-[#1F0954] font-bold">Manage Widgets</p>
//         </div>
//       </div>
//       {showWidget && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-4 rounded-lg max-w-md w-full">
//             <Widget />
//           </div>
//         </div>
//       )}
//         {/* Welcome Message */}
//         <div
//           data-aos="fade-left"
//           className="bg-[#6F01D0] shadow-md pt-6 pb-6 px-6 flex items-center justify-between border-b border-[#F7F7F7] mt-5 mx-12 rounded-[10px] gap-6 flex-wrap"
//         >
//           <p className="text-white text-[20px] font-bold">
//             Welcome Aboard, Blessing 👋
//           </p>
//           <p className="text-[#BDBDBD] text-[20px] font-semibold">
//             We’re thrilled to have you join Techrity Team!
//           </p>
//           <button className="bg-white text-black text-[16px] font-bold shadow-md px-4 py-2 rounded-[10px] hover:bg-[#F0EBFF] transition duration-300 whitespace-nowrap">
//             Update Profile
//           </button>
//         </div>
//         <Widget/>
//       </div>
//     </div>
//   );
// };
// export default Page;
// {/* main */}
// <div className="flex flex-col lg:flex-row w-[90%] ] mx-auto gap-6 mt-10">
//   {/* Left Column – Vertical, 40% */}
//   <div className="lg:w-[40%] w-full space-y-6 bg-[#fff]">
//     <div className="flex justify-between items-center ">
//       <div className="flex gap-3">
//         <div className="w-6">
//           <span className="block h-1 bg-[#B0B0B0] my-1"></span>
//           <span className="block h-1 bg-[#B0B0B0] my-1"></span>
//           <span className="block h-1 bg-[#B0B0B0] my-1"></span>
//         </div>
//         <h2 className="text-[18px] font-bold text-[#B0B0B0]">
//           Programs
//         </h2>
//       </div>
//       <div className="flex items-center">
//         <a
//           href="#"
//           className="text-sm text-[#6F01D0] font-medium hover:underline mr-2"
//         >
//           See all
//         </a>
//         <div className="flex flex-col justify-start">
//           <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
//           <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
//           <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
//         </div>
//       </div>
//     </div>
//     <div className="flex justify-end mb-4">
//       <div className="flex items-center space-x-2">
//         <span className="text-sm text-gray-600">Filter:</span>
//         <select className="text-sm px-2 py-1 border rounded-md">
//           <option>Active</option>
//           <option>Completed</option>
//         </select>
//       </div>
//     </div>
//     {/* Card 1 */}
//     <div className="bg-white rounded-xl shadow-sm overflow-hidden">
//       <div className="relative w-full h-32">
//         <Image
//           src="/assets/hum1.jpg"
//           alt="UI UX"
//           fill
//           className="object-cover rounded-t-xl"
//         />
//         <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
//           Bootcamp
//         </div>
//         <div className="absolute bottom-2 left-2 flex items-center space-x-1 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
//           <span className="w-2 h-2 rounded-full bg-green-700" />
//           <span>Ongoing</span>
//         </div>
//       </div>
//       <div className="p-4 space-y-2">
//         <h3 className="text-base font-semibold">
//           Fundamentals of User Interface & Experience
//         </h3>
//         <p className="text-sm text-gray-600">
//           This program is a hands-on guide designed for designers who
//           want to master color theory and confidently apply it to their
//           designs.
//         </p>
//         <div className="flex justify-between">
//           <div className="flex items-center space-x-2">
//             <Image
//               src="/assets/5.png"
//               alt="Mentor"
//               width={24}
//               height={24}
//               className="rounded-full object-cover"
//             />
//             <span className="text-sm text-gray-500">Mentors</span>
//           </div>
//           <div className="flex space-x-2">
//             <button className="text-sm px-3 py-1 border border-gray-300 rounded-md">
//               View Details
//             </button>
//             <button className="text-sm px-3 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700">
//               Analysis
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* Card 2 */}
//     <div className="bg-white rounded-xl shadow-sm overflow-hidden">
//       <div className="relative w-full h-32">
//         <Image
//           src="/assets/user.avif"
//           alt="Full Stack"
//           fill
//           className="object-cover rounded-t-xl"
//         />
//         <div className="absolute bottom-2 left-2 flex items-center space-x-1 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
//           <span className="w-2 h-2 rounded-full bg-green-700" />
//           <span>Ongoing</span>
//         </div>
//       </div>
//       <div className="p-4 space-y-2">
//         <h3 className="text-base font-semibold">
//           Full Stack Development Program
//         </h3>
//         <p className="text-sm text-gray-600">
//           Build, deploy, and scale full-stack applications. Master
//           popular technologies such as React, Node.js, and PostgreSQL.
//         </p>
//         <div className="flex justify-between">
//           <div className="flex items-center space-x-2">
//             <Image
//               src="/assets/4.png"
//               alt="Mentor"
//               width={24}
//               height={24}
//               className="rounded-full object-cover"
//             />
//             <span className="text-sm text-gray-500">Mentors</span>
//           </div>
//           <div className="flex space-x-2">
//             <button className="text-sm px-3 py-1 border border-gray-300 rounded-md">
//               View Details
//             </button>
//             <button className="text-sm px-3 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700">
//               Analysis
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* Card 3 */}
//     <div className="bg-white rounded-xl shadow-sm overflow-hidden">
//       <div className="relative h-32">
//         <Image
//           src="/assets/user1.webp"
//           alt="Full Stack"
//           fill
//           className="object-cover"
//         />
//         <div className="absolute bottom-2 left-2 flex items-center space-x-1 bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
//           <span className="w-2 h-2 rounded-full bg-blue-700" />
//           <span>Bootcamp</span>
//         </div>
//       </div>
//       <div className="p-4 space-y-2">
//         <h3 className="text-base font-semibold">
//           Full Stack Development Program
//         </h3>
//         <p className="text-sm text-gray-600">
//           Build, deploy, and scale full-stack applications. Master
//           popular technologies such as React, Node.js, and PostgreSQL.
//         </p>
//         <div className="flex items-center space-x-2">
//           <span className="text-sm text-gray-500">Mentors</span>
//         </div>
//         <div className="flex justify-between">
//           <div className="flex items-center space-x-2">
//             <Image
//               src="/assets/1.png"
//               alt="Mentor"
//               width={24}
//               height={24}
//               className="rounded-full object-cover"
//             />
//             <span className="text-sm text-gray-500">Mentors</span>
//           </div>
//           <div className="flex space-x-2">
//             <button className="text-sm px-3 py-1 border border-gray-300 rounded-md">
//               View Details
//             </button>
//             <button className="text-sm px-3 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700">
//               Analysis
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* Right Column – Horizontal, 60% */}
//   <div className="lg:w-[60%] w-full">
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <div className="flex gap-3">
//           <div className="w-6">
//             <span className="block h-1 bg-[#B0B0B0] my-1"></span>
//             <span className="block h-1 bg-[#B0B0B0] my-1"></span>
//             <span className="block h-1 bg-[#B0B0B0] my-1"></span>
//           </div>
//           <h2 className="text-[18px] font-bold text-[#B0B0B0]">
//             Group Calls
//           </h2>
//         </div>
//         <div className="flex items-center">
//           <a
//             href="#"
//             className="text-sm text-[#6F01D0] font-medium hover:underline mr-2"
//           >
//             See all
//           </a>
//           <div className="flex flex-col justify-start">
//             <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
//             <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
//             <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {groupCallData.map((call) => (
//           <div
//             key={call.id}
//             className="bg-white rounded-xl shadow-sm border border-gray-200 p-3"
//           >
//             <div className="relative w-full h-36 rounded-lg overflow-hidden mb-2">
//               {call.images.length > 1 ? (
//                 <Slideshow images={call.images} />
//               ) : (
//                 <Image
//                   src={call.images[0]}
//                   alt="Call Banner"
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               )}
//             </div>
//             <span className="text-xs font-semibold px-2 py-1 rounded-full mb-1 inline-block bg-green-100">
//               <div className="flex items-center text-xs text-gray-500 mb-1">
//                 <div className="w-2 h-2 bg-[#1F8B01] rounded-full mr-2"></div>
//                 <div>{call.badge}</div>
//               </div>
//             </span>
//             <h3 className="text-[18px] font-normal text-[#595564] leading-snug mb-1">
//               {call.title}
//             </h3>
//             <hr className="border-t-0.5 border-gray-300 mb-3" />
//             <div className="flex justify-between">
//               <div className="text-xs text-gray-500 mb-1">
//                 {call.date}
//               </div>
//               <div className="flex items-center text-xs text-gray-500 mb-1">
//                 <Image
//                   src="/assets/time.png"
//                   alt="Icon"
//                   width={16}
//                   height={16}
//                   className="mr-2"
//                 />
//                 <div>{call.time}</div>
//               </div>
//             </div>
//             <div className="flex justify-between">
//               <div className="flex-col justify-between items-center text-xs text-gray-500 mb-3">
//                 <p className="text-[#A195C0]">Study Group</p>
//                 <div className="flex items-center">
//                   <Image
//                     src="/assets/circle.png"
//                     alt="Icon"
//                     width={16}
//                     height={16}
//                     layout="intrinsic"
//                     className="mr-2"
//                   />
//                   <span className="text-[#595564] font-semibold">
//                     {call.group}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex-col justify-between items-center text-xs text-gray-500 mb-3">
//                 <p className="text-[#A195C0]">Mentors</p>
//                 <div className="flex items-center">
//                   <Image
//                     src="/assets/mentor.png"
//                     alt="Icon"
//                     width={40}
//                     height={40}
//                     layout="intrinsic"
//                     className="mr-2"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <button className="text-sm border border-gray-300 rounded-lg px-3 py-1 hover:bg-gray-100">
//                 View Participants
//               </button>
//               <button className="text-sm bg-purple-600 text-white rounded-lg px-4 py-1 hover:bg-purple-700">
//                 Join Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// </div>
// {/* next section */}
// <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-[90%] mt-10 mx-auto">
//   {/* Pie Chart Section */}
//   <div className="bg-white rounded shadow-md p-4 w-full lg:w-[35%] max-h-[300px] overflow-y-auto">
//     <div className="flex justify-between">
//       <h2 className="font-bold text-xl text-[#595564] mb-2">Users</h2>
//       <div className="relative">
//         <div className="absolute right-0 top-0 bg-white border p-1 shadow-lg rounded-lg ">
//           <select className="cursor-pointer">
//             <option>Option</option>
//             <option>Students</option>
//             <option>Mentors</option>
//             <option>Programs</option>
//             <option>Others </option>
//           </select>
//         </div>
//       </div>
//     </div>
//     <ResponsiveContainer width="100%" height={200}>
//       <PieChart>
//         <Pie
//           dataKey="value"
//           isAnimationActive
//           data={data}
//           cx="50%"
//           cy="50%"
//           outerRadius={60}
//           label
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={entry.color} />
//           ))}
//         </Pie>
//         <Tooltip />
//       </PieChart>
//     </ResponsiveContainer>
//     <p className="text-center text-sm mt-2">Total Users: 240</p>
//   </div>
//   {/* Applications Section */}
//   <div className="bg-white rounded-2xl shadow-md p-6 w-full lg:w-[60%]">
//     <div className="flex justify-between items-center ">
//       <div className="flex gap-3">
//         <div className="w-6">
//           <span className="block h-1 bg-[#B0B0B0] my-1"></span>
//           <span className="block h-1 bg-[#B0B0B0] my-1"></span>
//           <span className="block h-1 bg-[#B0B0B0] my-1"></span>
//         </div>
//         <h2 className="text-[18px] font-bold text-[#B0B0B0]">
//           Application
//         </h2>
//       </div>
//       <div className="flex items-center">
//         <a
//           href="#"
//           className="text-sm text-[#6F01D0] font-bold hover:underline mr-2"
//         >
//           See all
//         </a>
//         <div className="flex flex-col justify-start">
//           <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
//           <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
//           <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
//         </div>
//       </div>
//     </div>
//     <div className="bg-white rounded-xl p-2 w-full max-w-4xl mx-auto my-6">
//       <p className="text-[#7D8DA6] font-normal p-4">Mentors</p>
//       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//         <div className="flex items-center gap-4 w-full sm:w-auto">
//           <input
//             type="checkbox"
//             className="w-5 h-5 accent-purple-600"
//           />
//           <Image
//             src="/assets/3.png"
//             alt="Profile"
//             width={40}
//             height={40}
//             unoptimized
//             className="rounded-full object-cover"
//           />
//           <div>
//             <p className="font-bold text-gray-800">Maxwell Smith</p>
//             <p className="text-sm text-gray-500">
//               maxwellsmith@gmail.com
//             </p>
//           </div>
//         </div>
//         {/* Buttons */}
//         <div className="flex flex-row gap-2 w-full sm:w-auto justify-center">
//           <button className="px-4 py-2 text-sm bg-[#D09696] text-[#D83535] hover:bg-[#ba7e7e] hover:text-red-700 transition-colors duration-300 rounded-[10px] w-1/2 sm:w-auto">
//             Reject
//           </button>
//           <button className="px-4 py-2 text-sm bg-[#6F01D0] text-white hover:bg-[#5c00ad] transition-colors duration-300 rounded-[10px] w-1/2 sm:w-auto">
//             Accept
//           </button>
//         </div>
//       </div>
//       {/* Tags Row */}
//       <div className="mt-4 flex flex-wrap gap-3 text-xs sm:text-sm">
//         <span className="bg-[#DDCEEE] text-[#9985A7] px-3 py-1 rounded-full">
//           Product Designer
//         </span>
//         <span className="bg-[#A1BDBA] text-[#58948E] px-3 py-1 rounded-full">
//           4 Years Experience
//         </span>
//         <span className="bg-[#ABBEE0] text-[#8196B5] px-3 py-1 rounded-full">
//           Lagos, Nigeria
//         </span>
//         <span className="bg-[#C8C8C8] text-[#000] px-3 py-1 rounded-full">
//           GMT +1
//         </span>
//       </div>
//     </div>
//     <hr className="border-t border-gray-300" />
//     {/* Students Section */}
//     <div className="mb-6">
//       <p className="text-[#7D8DA6] font-normal p-4">Students</p>
//       <div className="flex flex-col mt-5 gap-10">
//         {/** Repeat for all students */}
//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//           <div className="flex items-center gap-4 w-full sm:w-auto">
//             <input
//               type="checkbox"
//               className="w-5 h-5 accent-purple-600"
//             />
//             <Image
//               src="/assets/3.png"
//               alt="Profile"
//               width={40}
//               height={40}
//               unoptimized
//               className="rounded-full object-cover"
//             />
//             <div>
//               <p className="font-bold text-gray-800">Maxwell Smith</p>
//               <p className="text-sm text-gray-500">
//                 maxwellsmith@gmail.com
//               </p>
//             </div>
//           </div>
//           {/** Buttons */}
//           <div className="flex gap-2 w-full sm:w-auto justify-center">
//             <button className="px-6 py-3 text-sm bg-[#D09696] text-[#D83535] hover:bg-[#ba7e7e] hover:text-red-700 transition-colors duration-300 rounded-[10px] w-[40%] sm:w-auto">
//               Reject
//             </button>
//             <button className="px-6 py-3 text-sm bg-[#6F01D0] text-white hover:bg-[#5c00ad] transition-colors duration-300 rounded-[10px] w-[40%] sm:w-auto">
//               Accept
//             </button>
//           </div>
//         </div>
//         <hr className="border-t border-gray-300" />
//         {/** Repeat for the rest of the students */}
//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//           <div className="flex items-center gap-4 w-full sm:w-auto">
//             <input
//               type="checkbox"
//               className="w-5 h-5 accent-purple-600"
//             />
//             <Image
//               src="/assets/1.png"
//               alt="Profile"
//               width={40}
//               height={40}
//               unoptimized
//               className="rounded-full object-cover"
//             />
//             <div>
//               <p className="font-bold text-gray-800">Adeati Samuel</p>
//               <p className="text-sm text-gray-500">
//                 adeatisamuel@gmail.com
//               </p>
//             </div>
//           </div>
//           {/** Buttons */}
//           <div className="flex gap-2 w-full sm:w-auto justify-center">
//             <button className="px-6 py-3 text-sm bg-[#D09696] text-[#D83535] hover:bg-[#ba7e7e] hover:text-red-700 transition-colors duration-300 rounded-[10px] w-[40%] sm:w-auto">
//               Reject
//             </button>
//             <button className="px-6 py-3 text-sm bg-[#6F01D0] text-white hover:bg-[#5c00ad] transition-colors duration-300 rounded-[10px] w-[40%] sm:w-auto">
//               Accept
//             </button>
//           </div>
//         </div>
//         <hr className="border-t border-gray-300" />
//         {/** Repeat for more students */}
//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//           <div className="flex items-center gap-4 w-full sm:w-auto">
//             <input
//               type="checkbox"
//               className="w-5 h-5 accent-purple-600"
//             />
//             <Image
//               src="/assets/5.png"
//               alt="Profile"
//               width={40}
//               height={40}
//               unoptimized
//               className="rounded-full object-cover"
//             />
//             <div>
//               <p className="font-bold text-gray-800">Edward Smith</p>
//               <p className="text-sm text-gray-500">
//                 edwardsmith@gmail.com
//               </p>
//             </div>
//           </div>
//           {/** Buttons */}
//           <div className="flex gap-2 w-full sm:w-auto justify-center">
//             <button className="px-6 py-3 text-sm bg-[#D09696] text-[#D83535] hover:bg-[#ba7e7e] hover:text-red-700 transition-colors duration-300 rounded-[10px] w-[40%] sm:w-auto">
//               Reject
//             </button>
//             <button className="px-6 py-3 text-sm bg-[#6F01D0] text-white hover:bg-[#5c00ad] transition-colors duration-300 rounded-[10px] w-[40%] sm:w-auto">
//               Accept
//             </button>
//           </div>
//         </div>
//         <hr className="border-t border-gray-300" />
//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//           <div className="flex items-center gap-4 w-full sm:w-auto">
//             <input
//               type="checkbox"
//               className="w-5 h-5 accent-purple-600"
//             />
//             <Image
//               src="/assets/4.png"
//               alt="Profile"
//               width={40}
//               height={40}
//               unoptimized
//               className="rounded-full object-cover"
//             />
//             <div>
//               <p className="font-bold text-gray-800">Sandra Smith</p>
//               <p className="text-sm text-gray-500">
//                 sandrasmith@gmail.com
//               </p>
//             </div>
//           </div>
//           {/** Buttons */}
//           <div className="flex gap-2 w-full sm:w-auto justify-center">
//             <button className="px-6 py-3 text-sm bg-[#D09696] text-[#D83535] hover:bg-[#ba7e7e] hover:text-red-700 transition-colors duration-300 rounded-[10px] w-[40%] sm:w-auto">
//               Reject
//             </button>
//             <button className="px-6 py-3 text-sm bg-[#6F01D0] text-white hover:bg-[#5c00ad] transition-colors duration-300 rounded-[10px] w-[40%] sm:w-auto">
//               Accept
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* Recent Activities Section */}
//   <div className="flex flex-col gap-8 items-center">
//     {/* Card 1 */}
//     <div className="bg-white rounded-2xl shadow p-4 w-full lg:max-w-[400px] max-h-[400px] overflow-y-auto">
//       <div className="flex justify-between items-center mb-4">
//         <div className="flex gap-3">
//           <div className="w-6">
//             <span className="block h-1 bg-[#B0B0B0] my-1"></span>
//             <span className="block h-1 bg-[#B0B0B0] my-1"></span>
//             <span className="block h-1 bg-[#B0B0B0] my-1"></span>
//           </div>
//           <h2 className="text-[18px] font-bold text-[#B0B0B0]">
//             Mentors
//           </h2>
//         </div>
//         <div className="flex items-center gap-2">
//           <Image
//             src="/assets/frame.png"
//             alt="KYC"
//             width={32}
//             height={32}
//             className="object-cover"
//           />
//           <div className="flex flex-col justify-start">
//             <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
//             <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
//             <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
//           </div>
//         </div>
//       </div>
//       <div className="space-y-4 text-sm">
//         {/* Activity 1 */}
//         <div className="flex items-center gap-4 w-full sm:w-auto">
//           <Image
//             src="/assets/3.png"
//             alt="Profile"
//             width={40}
//             height={40}
//             unoptimized
//             className="rounded-full object-cover"
//           />
//           <div>
//             <p className="font-bold text-gray-800">Maxwell Smith</p>
//             <p className="text-sm text-gray-500">Designer</p>
//           </div>
//         </div>
//         <hr className="border-t border-gray-300" />
//         {/* Activity 2 */}
//         <div className="flex items-center gap-4 w-full sm:w-auto">
//           <Image
//             src="/assets/1.png"
//             alt="Profile"
//             width={40}
//             height={40}
//             unoptimized
//             className="rounded-full object-cover"
//           />
//           <div>
//             <p className="font-bold text-gray-800">Adeati Samuel</p>
//             <p className="text-sm text-gray-500">Product Designer</p>
//           </div>
//         </div>
//         <hr className="border-t border-gray-300" />
//         <div className="flex items-center justify-center">
//           <button className="w-full max-w-xs bg-purple-600 text-white p-2 rounded-full text-lg font-semibold hover:bg-purple-700 transition">
//             See all
//           </button>
//         </div>
//       </div>
//     </div>
//     {/* Card 2 */}
//     <div className="bg-white rounded-2xl shadow p-4 w-full lg:max-w-[400px] max-h-[400px] overflow-y-auto">
//       <div className="flex justify-between items-center mb-4">
//         <div className="flex items-center justify-between w-full  mx-auto">
//           <div className="flex gap-3">
//             <div className="w-5">
//               <span className="block h-1 bg-[#B0B0B0] my-1"></span>
//               <span className="block h-1 bg-[#B0B0B0] my-1"></span>
//               <span className="block h-1 bg-[#B0B0B0] my-1"></span>
//             </div>
//             <h2 className="text-[18px] font-bold text-[#B0B0B0]">
//               Recent Activities
//             </h2>
//           </div>
//           <div className="flex items-center">
//             <div className="flex flex-col justify-start">
//               <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
//               <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
//               <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="space-y-4 text-sm">
//         {/* Repeated Activity 1 */}
//         <div className="flex items-start space-x-3">
//           <div className="w-8 h-8 rounded-full overflow-hidden">
//             <Image
//               src="/assets/4.png"
//               alt="KYC"
//               width={32}
//               height={32}
//             />
//           </div>
//           <div>
//             <p className="font-semibold">KYC Verification</p>
//             <p className="text-gray-500">
//               45 new persons just signed up on Mently.
//             </p>
//             <p className="text-gray-400 text-xs mt-1">25 minutes Ago</p>
//           </div>
//         </div>
//         <hr className="border-t border-gray-300" />
//         {/* Activity 2 */}
//         <div className="flex items-start space-x-3">
//           <div className="w-8 h-8 rounded-full overflow-hidden">
//             <Image
//               src="/assets/2.png"
//               alt="Sign Up"
//               width={32}
//               height={32}
//             />
//           </div>
//           <div>
//             <p className="font-semibold">New User Sign Up!</p>
//             <p className="text-gray-500">
//               45 new persons just signed up on Mently.
//             </p>
//             <p className="text-gray-400 text-xs mt-1">25 minutes Ago</p>
//           </div>
//         </div>
//         <hr className="border-t border-gray-300" />
//         {/* Activity 3 */}
//         <div className="flex items-start space-x-3">
//           <div className="w-8 h-8 rounded-full overflow-hidden">
//             <Image
//               src="/assets/1.png"
//               alt="Withdrawal"
//               width={32}
//               height={32}
//             />
//           </div>
//           <div>
//             <p className="font-semibold">Withdrawal Request</p>
//             <p className="text-gray-500">
//               Mardian requested a withdrawal.
//             </p>
//             <p className="text-gray-400 text-xs mt-1">25 minutes Ago</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$navbar$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/navbar/navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sidebar$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/sidebar/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/aos/dist/aos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$widget$2f$widget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/widget/widget.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const Page = ()=>{
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const [showWidget, setShowWidget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleWidget = ()=>{
        setShowWidget((prev)=>!prev);
    };
    const data = [
        {
            name: "Students",
            value: 200,
            color: "#4f46e5"
        },
        {
            name: "Mentors",
            value: 8,
            color: "#22c55e"
        },
        {
            name: "Programs",
            value: 22,
            color: "#f59e0b"
        },
        {
            name: "Others",
            value: 10,
            color: "#6366f1"
        }
    ];
    const Slideshow = ({ images })=>{
        _s1();
        const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "Page.Slideshow.useEffect": ()=>{
                const timer = setInterval({
                    "Page.Slideshow.useEffect.timer": ()=>{
                        setIndex({
                            "Page.Slideshow.useEffect.timer": (prev)=>(prev + 1) % images.length
                        }["Page.Slideshow.useEffect.timer"]);
                    }
                }["Page.Slideshow.useEffect.timer"], 2000);
                return ({
                    "Page.Slideshow.useEffect": ()=>clearInterval(timer)
                })["Page.Slideshow.useEffect"];
            }
        }["Page.Slideshow.useEffect"], [
            images.length
        ]);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: images[index],
            alt: "slideshow",
            layout: "fill",
            objectFit: "cover",
            className: "transition duration-500"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 983,
            columnNumber: 7
        }, this);
    };
    _s1(Slideshow, "c3fuAdVwNN91t4bNS1qBXl5hAWY=");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            const timer = setTimeout({
                "Page.useEffect.timer": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init({
                        duration: 500,
                        easing: "ease-in-out",
                        once: true
                    });
                }
            }["Page.useEffect.timer"], 100);
            return ({
                "Page.useEffect": ()=>clearTimeout(timer)
            })["Page.useEffect"];
        }
    }["Page.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col lg:flex-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sidebar$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1007,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 ml-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$navbar$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1010,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/mater.png",
                                    alt: "Mentor",
                                    width: 24,
                                    height: 24,
                                    onClick: toggleWidget,
                                    className: "object-cover cursor-pointer"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1015,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/mat.png",
                                    alt: "Mentor",
                                    width: 24,
                                    height: 24,
                                    onClick: toggleWidget,
                                    className: "object-cover cursor-pointer"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1024,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#1F0954] font-bold",
                                    children: "Manage Widgets"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1033,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1014,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1013,
                        columnNumber: 9
                    }, this),
                    showWidget && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-4 top-20 z-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white shadow-lg p-4 rounded-lg max-w-md w-full relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleWidget,
                                    className: "absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1042,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$widget$2f$widget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 1048,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 1040,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1039,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-aos": "fade-left",
                        className: "bg-[#6F01D0] shadow-md pt-6 pb-6 px-6 flex items-center justify-between border-b border-[#F7F7F7] mt-5 mx-12 rounded-[10px] gap-6 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white text-[20px] font-bold",
                                children: "Welcome Aboard, Blessing 👋"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 1058,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#BDBDBD] text-[20px] font-semibold",
                                children: "We’re thrilled to have you join Techrity Team!"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 1061,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-white text-black text-[16px] font-bold shadow-md px-4 py-2 rounded-[10px] hover:bg-[#F0EBFF] transition duration-300 whitespace-nowrap",
                                children: "Update Profile"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 1064,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1054,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 1009,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 1006,
        columnNumber: 5
    }, this);
};
_s(Page, "lF3gW26vHlJyH+GBLRKdr7IWRBM=");
_c = Page;
const __TURBOPACK__default__export__ = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_7298d83c._.js.map