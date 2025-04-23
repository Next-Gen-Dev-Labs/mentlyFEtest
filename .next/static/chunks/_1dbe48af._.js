(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/sidebar/sidebar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// import React, { useState } from "react";
// import Image from "next/image"; // Import Next.js Image component
// import { Menu, X } from "react-feather"; // For hamburger menu icons
// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900">
//       {/* Sidebar */}
//       <aside
//         className={`${
//           isOpen ? "block" : "hidden"
//         } w-64 bg-indigo-900 text-white p-4 flex flex-col gap-6 fixed md:relative z-50 h-full`}
//       >
//         {/* Sidebar Image */}
//         <img
//           src="your-image-url.jpg"
//           alt="Sidebar Logo"
//           className="w-full h-24 object-cover mb-4"
//         />
//         <h1 className="text-xl font-bold">Dashboard</h1>
//         <nav className="flex flex-col gap-4">
//           <div className="flex items-center gap-2">
//             <Image
//               src="/path/to/users-icon.png"
//               alt="Programs Icon"
//               width={20}
//               height={20}
//             />
//             Programs
//           </div>
//           <div className="flex items-center gap-2">
//             <Image
//               src="/path/to/layers-icon.png"
//               alt="Activities Icon"
//               width={20}
//               height={20}
//             />
//             Activities
//           </div>
//           <div className="flex items-center gap-2">
//             <Image
//               src="/path/to/message-square-icon.png"
//               alt="Users Icon"
//               width={20}
//               height={20}
//             />
//             Users
//           </div>
//           <div className="flex items-center gap-2">
//             <Image
//               src="/path/to/book-open-icon.png"
//               alt="Forums Icon"
//               width={20}
//               height={20}
//             />
//             Forums
//           </div>
//           <div className="flex items-center gap-2">
//             <Image
//               src="/path/to/file-text-icon.png"
//               alt="Finances Icon"
//               width={20}
//               height={20}
//             />
//             Finances
//           </div>
//           <div className="flex items-center gap-2">
//             <Image
//               src="/path/to/gift-icon.png"
//               alt="Rewards Icon"
//               width={20}
//               height={20}
//             />
//             Rewards
//           </div>
//           <div className="flex items-center gap-2">
//             <Image
//               src="/path/to/bar-chart2-icon.png"
//               alt="Analytics Icon"
//               width={20}
//               height={20}
//             />
//             Analytics
//           </div>
//           <div className="flex items-center gap-2">
//             <Image
//               src="/path/to/settings-icon.png"
//               alt="Settings Icon"
//               width={20}
//               height={20}
//             />
//             Settings
//           </div>
//           <div className="flex items-center gap-2">
//             <Image
//               src="/path/to/log-out-icon.png"
//               alt="Log Out Icon"
//               width={20}
//               height={20}
//             />
//             Log Out
//           </div>
//         </nav>
//       </aside>
//       {/* Mobile Hamburger Menu Button */}
//       <div className="md:hidden p-4">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="text-white focus:outline-none"
//         >
//           {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>
//     </div>
//   );
// };
// export default Sidebar;
// import React from 'react';
// const Sidebar = () => {
//   return (
//     <div className="bg-[#340260] min-h-screen w-64 text-white p-6 flex flex-col space-y-6">
//       <h2 className="text-2xl font-bold">Hello</h2>
//       <nav className="flex flex-col space-y-4">
//         <a href="#" className="hover:text-purple-300">Dashboard</a>
//         <a href="#" className="hover:text-purple-300">Programs</a>
//         <a href="#" className="hover:text-purple-300">Users</a>
//         <a href="#" className="hover:text-purple-300">Settings</a>
//         <a href="#" className="hover:text-purple-300">Logout</a>
//       </nav>
//     </div>
//   );
// };
// export default Sidebar;
// import React, { useState } from 'react';
// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   return (
//     <>
//       {/* Toggle Button */}
//       {!isOpen && (
//         <div
//           className="p-2 bg-[#340260] text-white fixed top-4 left-4 z-50 cursor-pointer rounded"
//           onClick={() => setIsOpen(true)}
//         >
//           ☰
//         </div>
//       )}
//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-screen bg-[#340260] text-white w-64 p-6 transform transition-transform duration-300 z-40 ${
//           isOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         {/* X Close Button */}
//         <div className="text-white text-xl cursor-pointer absolute top-4 right-4" onClick={() => setIsOpen(false)}>
//           ✕
//         </div>
//         <h2 className="text-2xl font-bold mb-6">Hello</h2>
//         <nav className="flex flex-col space-y-4">
//           <a href="#" className="hover:text-purple-300">Dashboard</a>
//           <a href="#" className="hover:text-purple-300">Programs</a>
//           <a href="#" className="hover:text-purple-300">Users</a>
//           <a href="#" className="hover:text-purple-300">Settings</a>
//           <a href="#" className="hover:text-purple-300">Logout</a>
//         </nav>
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
;
var _s = __turbopack_context__.k.signature();
;
const Sidebar = ()=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 bg-[#340260] text-white fixed top-4 left-4 z-50 cursor-pointer rounded lg:hidden",
                onClick: ()=>setIsOpen(true),
                children: "☰"
            }, void 0, false, {
                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                lineNumber: 210,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-0 left-0 h-screen bg-[#340260] text-white w-64 p-6 transform transition-transform duration-300 z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 lg:static lg:block`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white text-xl cursor-pointer absolute top-4 right-4 lg:hidden",
                        onClick: ()=>setIsOpen(false),
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/app/components/sidebar/sidebar.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-6",
                        children: "Hello"
                    }, void 0, false, {
                        fileName: "[project]/app/components/sidebar/sidebar.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex flex-col space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "flex items-center gap-2 hover:text-purple-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Image, {
                                        src: "/icons/dashboard.svg",
                                        alt: "Dashboard",
                                        width: 16,
                                        height: 16
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                        lineNumber: 236,
                                        columnNumber: 5
                                    }, this),
                                    "Dashboard"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                lineNumber: 235,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "flex items-center gap-2 hover:text-purple-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Image, {
                                        src: "/icons/programs.svg",
                                        alt: "Programs",
                                        width: 16,
                                        height: 16
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                        lineNumber: 240,
                                        columnNumber: 5
                                    }, this),
                                    "Programs"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                lineNumber: 239,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "flex items-center gap-2 hover:text-purple-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Image, {
                                        src: "/icons/users.svg",
                                        alt: "Users",
                                        width: 16,
                                        height: 16
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                        lineNumber: 244,
                                        columnNumber: 5
                                    }, this),
                                    "Users"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                lineNumber: 243,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "flex items-center gap-2 hover:text-purple-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Image, {
                                        src: "/icons/settings.svg",
                                        alt: "Settings",
                                        width: 16,
                                        height: 16
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                        lineNumber: 248,
                                        columnNumber: 5
                                    }, this),
                                    "Settings"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                lineNumber: 247,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "flex items-center gap-2 hover:text-purple-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Image, {
                                        src: "/icons/logout.svg",
                                        alt: "Logout",
                                        width: 16,
                                        height: 16
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                        lineNumber: 252,
                                        columnNumber: 5
                                    }, this),
                                    "Logout"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                                lineNumber: 251,
                                columnNumber: 3
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/sidebar/sidebar.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/sidebar/sidebar.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(Sidebar, "mEi83NlPXQzy/XIDfTYWzOSvaHw=");
_c = Sidebar;
const __TURBOPACK__default__export__ = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sidebar$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/sidebar/sidebar.tsx [app-client] (ecmascript)");
'use client';
;
;
const page = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sidebar$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
}]);

//# sourceMappingURL=_1dbe48af._.js.map