module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/components/sidebar/sidebar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
const Sidebar = ()=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isClassicMode, setIsClassicMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleToggle = ()=>{
        setIsClassicMode(!isClassicMode);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 text-white fixed top-4 left-4 z-50 cursor-pointer rounded lg:hidden",
                onClick: ()=>setIsOpen(true),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `block h-1 w-8 bg-[#340260] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/app/components/sidebar/sidebar.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `block h-1 w-6 bg-[#340260] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/app/components/sidebar/sidebar.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `block h-1 w-8 bg-[#340260] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/app/components/sidebar/sidebar.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/sidebar/sidebar.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-0 left-0 w-64 md:w-[240px] lg:w-64 p-3 transform transition-transform duration-300 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:static lg:block min-h-screen 
          ${isClassicMode ? "bg-[#333333]" : "bg-[#340260]"}
        `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center justify-between mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between ",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/logo.png",
                                    alt: "Dashboard Logo",
                                    width: 120,
                                    height: 130
                                }, void 0, false, {
                                    fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between hidden lg:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/vec.png",
                                    alt: "Dashboard Logo",
                                    width: 20,
                                    height: 20
                                }, void 0, false, {
                                    fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-8 h-8 border-2 border-white rounded-[10px] flex items-center justify-center text-white text-xl font-bold cursor-pointer lg:hidden transform transition-transform duration-300 ${isOpen ? "rotate-90 scale-100" : "scale-0"}`,
                                onClick: ()=>setIsOpen(false),
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/sidebar/sidebar.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
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
                        ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: `flex w-[230px] items-center gap-4 p-3 rounded-md ${item.highlight ? "bg-white border-[1.5px] border-[#1F0954] text-[#1F0954] font-semibold" : "text-[#C2C2C2] hover:text-purple-300"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: item.src,
                                        alt: item.text,
                                        width: 20,
                                        height: 20
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[16px]",
                                        children: item.text
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/sidebar/sidebar.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-start p-4 bg-[#4C2073] rounded-[10px] mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/tag.png",
                                alt: "D Logo",
                                width: 20,
                                height: 20
                            }, void 0, false, {
                                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-[12px] font-bold",
                                children: "Got some questions, enquiries or need help?"
                            }, void 0, false, {
                                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-[#F0C074]",
                                children: "Visit Mently Help Desk Here"
                            }, void 0, false, {
                                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/sidebar/sidebar.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center space-x-2 mt-4 lg:mb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#fff] font-semibold flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[12px]",
                                    children: isClassicMode ? "Classic Mode" : "Modern Mode"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "mode-toggle",
                                className: "flex items-center cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            id: "mode-toggle",
                                            className: "sr-only",
                                            checked: isClassicMode,
                                            onChange: handleToggle
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-6 bg-gray-300 rounded-full shadow-inner"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute top-0 left-0 w-6 h-6 bg-[#000] rounded-full transition-transform duration-300 transform ${isClassicMode ? "translate-x-6" : "translate-x-0"}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/sidebar/sidebar.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Sidebar;
}}),
"[project]/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// 'use client'
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
// import { Users, Settings, LogOut, BarChart2, MessageSquare, Gift, Layers, FileText, BookOpen } from 'lucide-react';
// const data = [
//   { name: 'Students', value: 200, color: '#4f46e5' },
//   { name: 'Mentors', value: 8, color: '#22c55e' },
//   { name: 'Programs', value: 22, color: '#f59e0b' },
//   { name: 'Others', value: 10, color: '#6366f1' },
// ];
// const programs = [
//   {
//     title: 'Fundamentals of User Interface & Experience',
//     mentors: ['John Doe', 'Jane Smith'],
//     image: 'https://via.placeholder.com/300x100',
//     type: 'Mentors',
//   },
//   {
//     title: 'Colour Hack Practical Group Call',
//     mentors: ['Fola Osibo'],
//     image: 'https://via.placeholder.com/300x100',
//     type: 'Group Call',
//   },
// ];
// const groupCalls = [
//   {
//     title: 'Weekly Meeting - Product Demo Review with Testers',
//     status: 'Ongoing',
//     date: 'Mon, Jul 28, 2024',
//     time: '9:00 - 11:00 AM',
//     group: 'UK Strategy Study Group',
//   },
//   {
//     title: 'Weekly Meeting - Product Demo Review with Testers',
//     status: 'Upcoming',
//     date: 'Mon, Jul 28, 2024',
//     time: '9:00 - 11:00 AM',
//     group: 'UK Strategy Study Group',
//   },
// ];
// const mentors = [
//   { name: 'Maxwell Smith', title: 'Product Designer' },
//   { name: 'Adeati Samuel', title: 'Product Designer' },
// ];
// export default function Dashboard() {
//   const [applications, setApplications] = useState([
//     { name: 'Maxwell Smith', email: 'maxwellsmith@gmail.com' },
//     { name: 'Adeati Samuel', email: 'adeatisamuel@gmail.com' }
//   ]);
//   return (
//     <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900">
//       <main className="flex-1 p-6 md:ml-64 overflow-y-auto">
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.6 }}
//           className="bg-white p-4 rounded-xl shadow-lg mb-6 text-center text-lg font-semibold text-indigo-800">
//           Welcome Aboard, Blessing 👋
//         </motion.div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
//           {programs.map((program, index) => (
//             <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
//               <img src={program.image} alt={program.title} className="w-full h-28 object-cover" />
//               <div className="p-4">
//                 <h3 className="font-bold text-lg mb-1">{program.title}</h3>
//                 <p className="text-xs text-gray-500 mb-2">{program.type}</p>
//                 <div className="flex justify-between text-sm">
//                   <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded">View Details</button>
//                   <button className="bg-indigo-600 text-white px-3 py-1 rounded">Apply</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <h2 className="text-xl font-bold mb-4">Group Calls</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           {groupCalls.map((call, idx) => (
//             <div key={idx} className="bg-white p-4 rounded shadow-md">
//               <h4 className="font-semibold text-sm text-indigo-600">{call.status}</h4>
//               <p className="font-bold text-md mt-1 mb-1">{call.title}</p>
//               <p className="text-xs text-gray-500">{call.date}</p>
//               <p className="text-xs text-gray-500 mb-2">{call.time}</p>
//               <p className="text-xs text-gray-700 mb-2">{call.group}</p>
//               <button className="bg-indigo-600 text-white px-3 py-1 rounded text-sm">Join Now</button>
//             </div>
//           ))}
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div className="bg-white rounded shadow-md p-4">
//             <h2 className="font-bold text-xl mb-2">Users</h2>
//             <ResponsiveContainer width="100%" height={200}>
//               <PieChart>
//                 <Pie
//                   dataKey="value"
//                   isAnimationActive
//                   data={data}
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={60}
//                   label
//                 >
//                   {data.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={entry.color} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//             <p className="text-center text-sm mt-2">Total Users: 240</p>
//           </div>
//           <div className="bg-white rounded shadow-md p-4">
//             <h2 className="font-bold text-xl mb-4">Applications</h2>
//             {applications.map((applicant, index) => (
//               <div key={index} className="flex justify-between items-center mb-3">
//                 <div>
//                   <p className="font-semibold text-sm">{applicant.name}</p>
//                   <p className="text-xs text-gray-500">{applicant.email}</p>
//                 </div>
//                 <div className="flex gap-2">
//                   <button className="bg-red-600 text-white px-3 py-1 rounded text-sm">Reject</button>
//                   <button className="bg-indigo-600 text-white px-3 py-1 rounded text-sm">Accept</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="bg-white rounded shadow-md p-4">
//             <h2 className="font-bold text-xl mb-4">Recent Activities</h2>
//             <ul className="text-sm space-y-2">
//               <li>KYC Verification - 45 new persons just signed up on Mently (25 mins ago)</li>
//               <li>New User Sign Up! - 45 new persons just signed up! (26 mins ago)</li>
//               <li>Withdrawal Request - Mariam requested a withdrawal. (25 mins ago)</li>
//             </ul>
//           </div>
//           <div className="bg-white rounded shadow-md p-4">
//             <h2 className="font-bold text-xl mb-4">Mentors</h2>
//             {mentors.map((mentor, i) => (
//               <div key={i} className="flex justify-between items-center mb-3">
//                 <div>
//                   <p className="font-semibold text-sm">{mentor.name}</p>
//                   <p className="text-xs text-gray-500">{mentor.title}</p>
//                 </div>
//                 <button className="bg-indigo-600 text-white px-3 py-1 rounded text-sm">Message</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sidebar$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/sidebar/sidebar.tsx [app-ssr] (ecmascript)");
'use client';
;
;
const page = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sidebar$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 175,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = page;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__569025b8._.js.map