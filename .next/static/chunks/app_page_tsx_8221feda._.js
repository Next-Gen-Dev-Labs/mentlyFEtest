(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Dashboard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const data = [
    {
        name: 'Students',
        value: 200,
        color: '#4f46e5'
    },
    {
        name: 'Mentors',
        value: 8,
        color: '#22c55e'
    },
    {
        name: 'Programs',
        value: 22,
        color: '#f59e0b'
    },
    {
        name: 'Others',
        value: 10,
        color: '#6366f1'
    }
];
const programs = [
    {
        title: 'Fundamentals of User Interface & Experience',
        mentors: [
            'John Doe',
            'Jane Smith'
        ],
        image: 'https://via.placeholder.com/300x100',
        type: 'Mentors'
    },
    {
        title: 'Colour Hack Practical Group Call',
        mentors: [
            'Fola Osibo'
        ],
        image: 'https://via.placeholder.com/300x100',
        type: 'Group Call'
    }
];
const groupCalls = [
    {
        title: 'Weekly Meeting - Product Demo Review with Testers',
        status: 'Ongoing',
        date: 'Mon, Jul 28, 2024',
        time: '9:00 - 11:00 AM',
        group: 'UK Strategy Study Group'
    },
    {
        title: 'Weekly Meeting - Product Demo Review with Testers',
        status: 'Upcoming',
        date: 'Mon, Jul 28, 2024',
        time: '9:00 - 11:00 AM',
        group: 'UK Strategy Study Group'
    }
];
const mentors = [
    {
        name: 'Maxwell Smith',
        title: 'Product Designer'
    },
    {
        name: 'Adeati Samuel',
        title: 'Product Designer'
    }
];
function Dashboard() {
    _s();
    const [applications, setApplications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            name: 'Maxwell Smith',
            email: 'maxwellsmith@gmail.com'
        },
        {
            name: 'Adeati Samuel',
            email: 'adeatisamuel@gmail.com'
        }
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex bg-gray-100 dark:bg-gray-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex-1 p-6 md:ml-64 overflow-y-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded shadow-md p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-bold text-xl mb-2",
                            children: "Users"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            width: "100%",
                            height: 200,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                        dataKey: "value",
                                        isAnimationActive: true,
                                        data: data,
                                        cx: "50%",
                                        cy: "50%",
                                        outerRadius: 60,
                                        label: true,
                                        children: data.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                fill: entry.color
                                            }, `cell-${index}`, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 73,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-sm mt-2",
                            children: "Total Users: 240"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
} // import Navbar from "./components/navbar/navbar";
 // import Sidebar from "./components/sidebar/sidebar";
 // import { FaUsers } from 'react-icons/fa';
 // import Image from "next/image";
 // const groupCallData = [
 //   {
 //     id: 1,
 //     badge: "Ongoing",
 //     image: "/your-image-1.jpg",
 //     title: "Weekly Meeting - Product Demo Review with Testers",
 //     date: "Mon. Jul 30, 2024",
 //     time: "9:00 - 11:00AM",
 //     group: "UX Strategy Study group",
 //     participants: ["/avatar1.jpg", "/avatar2.jpg"],
 //   },
 //   {
 //     id: 2,
 //     badge: "Upcoming",
 //     image: "/your-image-2.jpg",
 //     title: "Weekly Meeting - Product Demo Review with Testers",
 //     date: "Mon. Jul 30, 2024",
 //     time: "9:00 - 11:00AM",
 //     group: "UX Strategy Study group",
 //     participants: ["/avatar3.jpg", "/avatar4.jpg"],
 //   },
 //   {
 //     id: 3,
 //     badge: "Ongoing",
 //     image: "/your-image-3.jpg",
 //     title: "Weekly Meeting - Product Demo Review with Testers",
 //     date: "Mon. Jul 30, 2024",
 //     time: "9:00 - 11:00AM",
 //     group: "UX Strategy Study group",
 //     participants: ["/avatar5.jpg", "/avatar6.jpg"],
 //   },
 // ];
 // const Page = () => {
 //   return (
 //     <div className="flex mr-0">
 //       <Sidebar />
 //       <div className="flex-1 ml-0">
 //         <Navbar />
 //         {/* first section */}
 //         <div className="bg-[#6F01D0] shadow-md pt-6 pb-6 px-6 flex items-center justify-between border-b border-[#F7F7F7] mt-20 mx-12 rounded-[10px] gap-6 flex-wrap">
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
 //         <div className="p-4">
 //           <div className="flex justify-between items-center mb-4">
 //             <h2 className="text-lg font-semibold text-gray-800">Group Calls</h2>
 //             <a
 //               href="#"
 //               className="text-sm text-purple-600 font-medium hover:underline"
 //             >
 //               See all
 //             </a>
 //           </div>
 //           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
 //             {groupCallData.map((call) => (
 //               <div
 //                 key={call.id}
 //                 className="bg-white rounded-xl shadow-sm border border-gray-200 p-3"
 //               >
 //                 <div className="relative w-full h-36 rounded-lg overflow-hidden mb-2">
 //                   <Image
 //                     src={call.image}
 //                     alt="Call Banner"
 //                     layout="fill"
 //                     objectFit="cover"
 //                   />
 //                 </div>
 //                 <span
 //                   className={`text-xs font-semibold px-2 py-1 rounded-md mb-1 inline-block ${
 //                     call.badge === "Ongoing"
 //                       ? "bg-green-100 text-green-700"
 //                       : "bg-purple-100 text-purple-700"
 //                   }`}
 //                 >
 //                   {call.badge}
 //                 </span>
 //                 <h3 className="text-sm font-semibold text-gray-800 leading-snug mb-1">
 //                   {call.title}
 //                 </h3>
 //                 <div className="text-xs text-gray-500 mb-1">{call.date}</div>
 //                 <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
 //                   <span>{call.group}</span>
 //                   <span>{call.time}</span>
 //                 </div>
 //                 <div className="flex justify-between items-center">
 //                   <button className="text-sm border border-gray-300 rounded-lg px-3 py-1 hover:bg-gray-100">
 //                     View Participants
 //                   </button>
 //                   <button className="text-sm bg-purple-600 text-white rounded-lg px-4 py-1 hover:bg-purple-700">
 //                     Join Now
 //                   </button>
 //                 </div>
 //               </div>
 //             ))}
 //           </div>
 //         </div>
 //         <div className="min-h-screen bg-gray-50 p-6">
 //           <div className="bg-white rounded-2xl shadow-md p-6">
 //             <div className="flex justify-between items-center mb-6">
 //               <div className="flex items-center gap-2">
 //                 <button className="text-xl">
 //                   <span className="material-icons">menu</span>
 //                 </button>
 //                 <h1 className="text-xl font-semibold text-gray-700">
 //                   Applications
 //                 </h1>
 //               </div>
 //               <div className="flex items-center gap-4">
 //                 <a href="#" className="text-purple-600 font-semibold">
 //                   See all
 //                 </a>
 //                 <button className="text-xl">
 //                   <span className="material-icons">more_vert</span>
 //                 </button>
 //               </div>
 //             </div>
 //             {/* Mentors Section */}
 //             <Section
 //               title="Mentors"
 //               users={[
 //                 {
 //                   name: "Maxwell Smith",
 //                   email: "maxwellsmith@gmail.com",
 //                   tags: [
 //                     "Product Designer",
 //                     "4years Experience",
 //                     "🇳🇬 Lagos, Nigeria",
 //                     "GMT +1",
 //                   ],
 //                   avatar: "/avatar1.png",
 //                 },
 //               ]}
 //             />
 //             {/* Students Section */}
 //             <Section
 //               title="Students"
 //               users={[
 //                 {
 //                   name: "Adeati Samuel",
 //                   email: "maxwellsmith@gmail.com",
 //                   avatar: "/avatar1.png",
 //                 },
 //                 {
 //                   name: "Maxwell Smith",
 //                   email: "maxwellsmith@gmail.com",
 //                   avatar: "/avatar2.png",
 //                 },
 //                 {
 //                   name: "Adeati Samuel",
 //                   email: "maxwellsmith@gmail.com",
 //                   avatar: "/avatar1.png",
 //                 },
 //                 {
 //                   name: "Maxwell Smith",
 //                   email: "maxwellsmith@gmail.com",
 //                   avatar: "/avatar2.png",
 //                 },
 //               ]}
 //             />
 //           </div>
 //         </div>
 //         <div className="mb-8">
 //           <h2 className="text-sm text-gray-500 font-medium mb-4">{title}</h2>
 //           {users.map((user, idx) => (
 //             <div
 //               key={idx}
 //               className="flex items-start justify-between border-b py-4 last:border-b-0"
 //             >
 //               <div className="flex items-start gap-4">
 //                 <input type="checkbox" className="mt-2" />
 //                 <div className="flex items-center gap-4">
 //                   <Image
 //                     src={user.avatar}
 //                     alt={user.name}
 //                     width={40}
 //                     height={40}
 //                     className="rounded-full"
 //                   />
 //                   <div>
 //                     <h3 className="text-base font-semibold text-gray-800">
 //                       {user.name}
 //                     </h3>
 //                     <p className="text-sm text-gray-500">{user.email}</p>
 //                     {user.tags && (
 //                       <div className="flex flex-wrap gap-2 mt-2">
 //                         {user.tags.map((tag, i) => (
 //                           <span
 //                             key={i}
 //                             className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
 //                           >
 //                             {tag}
 //                           </span>
 //                         ))}
 //                       </div>
 //                     )}
 //                   </div>
 //                 </div>
 //               </div>
 //               <div className="flex gap-2">
 //                 <button className="bg-red-100 text-red-600 px-4 py-2 rounded-md font-medium">
 //                   Reject
 //                 </button>
 //                 <button className="bg-purple-600 text-white px-4 py-2 rounded-md font-medium">
 //                   Accept
 //                 </button>
 //               </div>
 //             </div>
 //           ))}
 //         </div>
 //       </div>
 //     </div>
 //   );
 // };
 // export default Page;
 // import Navbar from "./components/navbar/navbar";
 // import Sidebar from "./components/sidebar/sidebar";
 // import Image from "next/image";
 // const groupCallData = [
 //   {
 //     id: 1,
 //     badge: "Ongoing",
 //     image: "/your-image-1.jpg",
 //     title: "Weekly Meeting - Product Demo Review with Testers",
 //     date: "Mon. Jul 30, 2024",
 //     time: "9:00 - 11:00AM",
 //     group: "UX Strategy Study group",
 //     participants: ["/avatar1.jpg", "/avatar2.jpg"],
 //   },
 //   {
 //     id: 2,
 //     badge: "Upcoming",
 //     image: "/your-image-2.jpg",
 //     title: "Weekly Meeting - Product Demo Review with Testers",
 //     date: "Mon. Jul 30, 2024",
 //     time: "9:00 - 11:00AM",
 //     group: "UX Strategy Study group",
 //     participants: ["/avatar3.jpg", "/avatar4.jpg"],
 //   },
 //   {
 //     id: 3,
 //     badge: "Ongoing",
 //     image: "/your-image-3.jpg",
 //     title: "Weekly Meeting - Product Demo Review with Testers",
 //     date: "Mon. Jul 30, 2024",
 //     time: "9:00 - 11:00AM",
 //     group: "UX Strategy Study group",
 //     participants: ["/avatar5.jpg", "/avatar6.jpg"],
 //   },
 // ];
 // const Section = ({ title, users }) => (
 //   <div className="mb-8">
 //     <h2 className="text-sm text-gray-500 font-medium mb-4">{title}</h2>
 //     {users.map((user, idx) => (
 //       <div
 //         key={idx}
 //         className="flex items-start justify-between border-b py-4 last:border-b-0"
 //       >
 //         <div className="flex items-start gap-4">
 //           <input type="checkbox" className="mt-2" />
 //           <div className="flex items-center gap-4">
 //             <Image
 //               src={user.avatar}
 //               alt={user.name}
 //               width={40}
 //               height={40}
 //               className="rounded-full"
 //             />
 //             <div>
 //               <h3 className="text-base font-semibold text-gray-800">
 //                 {user.name}
 //               </h3>
 //               <p className="text-sm text-gray-500">{user.email}</p>
 //               {user.tags && (
 //                 <div className="flex flex-wrap gap-2 mt-2">
 //                   {user.tags.map((tag, i) => (
 //                     <span
 //                       key={i}
 //                       className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
 //                     >
 //                       {tag}
 //                     </span>
 //                   ))}
 //                 </div>
 //               )}
 //             </div>
 //           </div>
 //         </div>
 //         <div className="flex gap-2">
 //           <button className="bg-red-100 text-red-600 px-4 py-2 rounded-md font-medium">
 //             Reject
 //           </button>
 //           <button className="bg-purple-600 text-white px-4 py-2 rounded-md font-medium">
 //             Accept
 //           </button>
 //         </div>
 //       </div>
 //     ))}
 //   </div>
 // );
 // const Page = () => {
 //   return (
 //     <div className="flex mr-0">
 //       <Sidebar />
 //       <div className="flex-1 ml-0">
 //         <Navbar />
 //         {/* Welcome Section */}
 //         <div className="bg-[#6F01D0] shadow-md pt-6 pb-6 px-6 flex items-center justify-between border-b border-[#F7F7F7] mt-20 mx-12 rounded-[10px] gap-6 flex-wrap">
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
 //         {/* Group Calls */}
 //         <div className="p-4">
 //           <div className="flex justify-between items-center mb-4">
 //             <h2 className="text-lg font-semibold text-gray-800">Group Calls</h2>
 //             <a
 //               href="#"
 //               className="text-sm text-purple-600 font-medium hover:underline"
 //             >
 //               See all
 //             </a>
 //           </div>
 //           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
 //             {groupCallData.map((call) => (
 //               <div
 //                 key={call.id}
 //                 className="bg-white rounded-xl shadow-sm border border-gray-200 p-3"
 //               >
 //                 <div className="relative w-full h-36 rounded-lg overflow-hidden mb-2">
 //                   <Image
 //                     src={call.image}
 //                     alt="Call Banner"
 //                     layout="fill"
 //                     objectFit="cover"
 //                   />
 //                 </div>
 //                 <span
 //                   className={`text-xs font-semibold px-2 py-1 rounded-md mb-1 inline-block ${
 //                     call.badge === "Ongoing"
 //                       ? "bg-green-100 text-green-700"
 //                       : "bg-purple-100 text-purple-700"
 //                   }`}
 //                 >
 //                   {call.badge}
 //                 </span>
 //                 <h3 className="text-sm font-semibold text-gray-800 leading-snug mb-1">
 //                   {call.title}
 //                 </h3>
 //                 <div className="text-xs text-gray-500 mb-1">{call.date}</div>
 //                 <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
 //                   <span>{call.group}</span>
 //                   <span>{call.time}</span>
 //                 </div>
 //                 <div className="flex justify-between items-center">
 //                   <button className="text-sm border border-gray-300 rounded-lg px-3 py-1 hover:bg-gray-100">
 //                     View Participants
 //                   </button>
 //                   <button className="text-sm bg-purple-600 text-white rounded-lg px-4 py-1 hover:bg-purple-700">
 //                     Join Now
 //                   </button>
 //                 </div>
 //               </div>
 //             ))}
 //           </div>
 //         </div>
 //         {/* Applications Section */}
 //         <div className="min-h-screen bg-gray-50 p-6">
 //           <div className="bg-white rounded-2xl shadow-md p-6">
 //             <div className="flex justify-between items-center mb-6">
 //               <div className="flex items-center gap-2">
 //                 <button className="text-xl">
 //                   <span className="material-icons">menu</span>
 //                 </button>
 //                 <h1 className="text-xl font-semibold text-gray-700">
 //                   Applications
 //                 </h1>
 //               </div>
 //               <div className="flex items-center gap-4">
 //                 <a href="#" className="text-purple-600 font-semibold">
 //                   See all
 //                 </a>
 //                 <button className="text-xl">
 //                   <span className="material-icons">more_vert</span>
 //                 </button>
 //               </div>
 //             </div>
 //             <Section
 //               title="Mentors"
 //               users={[
 //                 {
 //                   name: "Maxwell Smith",
 //                   email: "maxwellsmith@gmail.com",
 //                   tags: [
 //                     "Product Designer",
 //                     "4years Experience",
 //                     "🇳🇬 Lagos, Nigeria",
 //                     "GMT +1",
 //                   ],
 //                   avatar: "/avatar1.png",
 //                 },
 //               ]}
 //             />
 //             <Section
 //               title="Students"
 //               users={[
 //                 {
 //                   name: "Adeati Samuel",
 //                   email: "adeatisamuel@gmail.com",
 //                   avatar: "/avatar1.png",
 //                 },
 //                 {
 //                   name: "Maxwell Smith",
 //                   email: "maxwellsmith@gmail.com",
 //                   avatar: "/avatar2.png",
 //                 },
 //                 {
 //                   name: "Adeati Samuel",
 //                   email: "adeatisamuel@gmail.com",
 //                   avatar: "/avatar1.png",
 //                 },
 //                 {
 //                   name: "Maxwell Smith",
 //                   email: "maxwellsmith@gmail.com",
 //                   avatar: "/avatar2.png",
 //                 },
 //               ]}
 //             />
 //           </div>
 //         </div>
 //     <div className="p-4 space-y-4">
 //       {/* Header */}
 //       <div className="flex items-center justify-between">
 //         <h2 className="text-lg font-semibold text-gray-500">Programs</h2>
 //         <a href="#" className="text-sm font-semibold text-purple-600">See all</a>
 //       </div>
 //       {/* Filter */}
 //       <div className="flex items-center space-x-2">
 //         <span className="text-sm text-gray-600">Filter:</span>
 //         <select className="text-sm px-2 py-1 border rounded-md">
 //           <option>Active</option>
 //           <option>Completed</option>
 //         </select>
 //       </div>
 //       {/* Program Cards */}
 //       <div className="space-y-6">
 //         {/* Card 1 */}
 //         <div className="bg-white rounded-xl shadow-sm overflow-hidden">
 //           <div className="relative h-32">
 //             <Image
 //               src="/uiux.jpg"
 //               alt="UI UX"
 //               fill
 //               className="object-cover"
 //             />
 //             <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
 //               Bootcamp
 //             </div>
 //           </div>
 //           <div className="p-4 space-y-2">
 //             <h3 className="text-base font-semibold">
 //               Fundamentals of User Interface & Experience
 //             </h3>
 //             <p className="text-sm text-gray-600">
 //               This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach
 //             </p>
 //             <div className="flex items-center space-x-2">
 //               <div className="w-6 h-6 rounded-full bg-gray-300" />
 //               <span className="text-sm text-gray-500">Mentors</span>
 //             </div>
 //             <div className="flex space-x-2">
 //               <button className="text-sm px-3 py-1 border border-gray-300 rounded-md">View Details</button>
 //               <button className="text-sm px-3 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700">Analysis</button>
 //             </div>
 //           </div>
 //         </div>
 //         {/* Card 2 */}
 //         <div className="bg-white rounded-xl shadow-sm overflow-hidden">
 //           <div className="relative h-32">
 //             <Image
 //               src="/group-call.jpg"
 //               alt="Group Call"
 //               fill
 //               className="object-cover"
 //             />
 //             <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
 //               Group Call
 //             </div>
 //           </div>
 //           <div className="p-4 space-y-2">
 //             <h3 className="text-base font-semibold">
 //               Colour Hack Practical Group Call
 //             </h3>
 //             <p className="text-sm text-gray-600">
 //               This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach
 //             </p>
 //             <div className="flex items-center space-x-2">
 //               <div className="w-6 h-6 rounded-full bg-gray-300" />
 //               <span className="text-sm text-gray-500">Hosted By: Faith Okolo</span>
 //             </div>
 //             <div className="flex space-x-2">
 //               <button className="text-sm px-3 py-1 border border-gray-300 rounded-md">View Details</button>
 //               <button className="text-sm px-3 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700">Analysis</button>
 //             </div>
 //           </div>
 //         </div>
 //       </div>
 //     </div>
 //       </div>
 //     </div>
 //   );
 // };
 // export default Page;
 // import Navbar from "./components/navbar/navbar";
 // import Sidebar from "./components/sidebar/sidebar";
 // import Image from "next/image";
 // import {
 //   PieChart,
 //   Pie,
 //   Cell,
 //   ResponsiveContainer,
 //   Tooltip,
 // } from 'recharts';
 // const groupCallData = [
 //   {
 //     id: 1,
 //     badge: "Ongoing",
 //     image: "/your-image-1.jpg",
 //     title: "Weekly Meeting - Product Demo Review with Testers",
 //     date: "Mon. Jul 30, 2024",
 //     time: "9:00 - 11:00AM",
 //     group: "UX Strategy Study group",
 //     participants: ["/avatar1.jpg", "/avatar2.jpg"],
 //   },
 //   {
 //     id: 2,
 //     badge: "Upcoming",
 //     image: "/your-image-2.jpg",
 //     title: "Weekly Meeting - Product Demo Review with Testers",
 //     date: "Mon. Jul 30, 2024",
 //     time: "9:00 - 11:00AM",
 //     group: "UX Strategy Study group",
 //     participants: ["/avatar3.jpg", "/avatar4.jpg"],
 //   },
 //   {
 //     id: 3,
 //     badge: "Ongoing",
 //     image: "/your-image-3.jpg",
 //     title: "Weekly Meeting - Product Demo Review with Testers",
 //     date: "Mon. Jul 30, 2024",
 //     time: "9:00 - 11:00AM",
 //     group: "UX Strategy Study group",
 //     participants: ["/avatar5.jpg", "/avatar6.jpg"],
 //   },
 // ];
 // const Section = ({ title, users }) => (
 //   <div className="mb-8">
 //     <h2 className="text-sm text-gray-500 font-medium mb-4">{title}</h2>
 //     {users.map((user, idx) => (
 //       <div
 //         key={idx}
 //         className="flex items-start justify-between border-b py-4 last:border-b-0"
 //       >
 //         <div className="flex items-start gap-4">
 //           <input type="checkbox" className="mt-2" />
 //           <div className="flex items-center gap-4">
 //             <Image
 //               src={user.avatar}
 //               alt={user.name}
 //               width={40}
 //               height={40}
 //               className="rounded-full"
 //             />
 //             <div>
 //               <h3 className="text-base font-semibold text-gray-800">
 //                 {user.name}
 //               </h3>
 //               <p className="text-sm text-gray-500">{user.email}</p>
 //               {user.tags && (
 //                 <div className="flex flex-wrap gap-2 mt-2">
 //                   {user.tags.map((tag, i) => (
 //                     <span
 //                       key={i}
 //                       className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
 //                     >
 //                       {tag}
 //                     </span>
 //                   ))}
 //                 </div>
 //               )}
 //             </div>
 //           </div>
 //         </div>
 //         <div className="flex gap-2">
 //           <button className="bg-red-100 text-red-600 px-4 py-2 rounded-md font-medium">
 //             Reject
 //           </button>
 //           <button className="bg-purple-600 text-white px-4 py-2 rounded-md font-medium">
 //             Accept
 //           </button>
 //         </div>
 //       </div>
 //     ))}
 //   </div>
 // );
 // const Page = () => {
 //   return (
 //     <div className="flex flex-col lg:flex-row">
 //       <Sidebar />
 //       <div className="flex-1 ml-0">
 //         <Navbar />
 //         {/* Welcome Section */}
 //         <div className="bg-[#6F01D0] shadow-md pt-6 pb-6 px-6 flex items-center justify-between border-b border-[#F7F7F7] mt-20 mx-12 rounded-[10px] gap-6 flex-wrap">
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
 // <div className="flex">
 //             {/* Programs Section */}
 //             <div className="p-4 space-y-4 w-80 bg-black rounded-[10px]">
 //           {/* Header */}
 //           <div className="flex items-center justify-between">
 //             <h2 className="text-lg font-semibold text-gray-500">Programs</h2>
 //             <a href="#" className="text-sm font-semibold text-purple-600">See all</a>
 //           </div>
 //           {/* Filter */}
 //           <div className="flex items-center space-x-2">
 //             <span className="text-sm text-gray-600">Filter:</span>
 //             <select className="text-sm px-2 py-1 border rounded-md">
 //               <option>Active</option>
 //               <option>Completed</option>
 //             </select>
 //           </div>
 //           {/* Program Cards */}
 //           <div className="space-y-6">
 //             {/* Card 1 */}
 //             <div className="bg-white rounded-xl shadow-sm overflow-hidden">
 //               <div className="relative h-32">
 //                 <Image
 //                   src="/uiux.jpg"
 //                   alt="UI UX"
 //                   fill
 //                   className="object-cover"
 //                 />
 //                 <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
 //                   Bootcamp
 //                 </div>
 //               </div>
 //               <div className="p-4 space-y-2">
 //                 <h3 className="text-base font-semibold">
 //                   Fundamentals of User Interface & Experience
 //                 </h3>
 //                 <p className="text-sm text-gray-600">
 //                   This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach
 //                 </p>
 //                 <div className="flex items-center space-x-2">
 //                   <div className="w-6 h-6 rounded-full bg-gray-300" />
 //                   <span className="text-sm text-gray-500">Mentors</span>
 //                 </div>
 //                 <div className="flex space-x-2">
 //                   <button className="text-sm px-3 py-1 border border-gray-300 rounded-md">View Details</button>
 //                   <button className="text-sm px-3 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700">Analysis</button>
 //                 </div>
 //               </div>
 //             </div>
 //             {/* Card 2 */}
 //             <div className="bg-white rounded-xl shadow-sm overflow-hidden">
 //               <div className="relative h-32">
 //                 <Image
 //                   src="/fullstack.jpg"
 //                   alt="Full Stack"
 //                   fill
 //                   className="object-cover"
 //                 />
 //                 <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
 //                   Bootcamp
 //                 </div>
 //               </div>
 //               <div className="p-4 space-y-2">
 //                 <h3 className="text-base font-semibold">
 //                   Full Stack Development Program
 //                 </h3>
 //                 <p className="text-sm text-gray-600">
 //                   Build, deploy, and scale full-stack applications. Master popular technologies such as React, Node.js, and PostgreSQL.
 //                 </p>
 //                 <div className="flex items-center space-x-2">
 //                   <div className="w-6 h-6 rounded-full bg-gray-300" />
 //                   <span className="text-sm text-gray-500">Mentors</span>
 //                 </div>
 //                 <div className="flex space-x-2">
 //                   <button className="text-sm px-3 py-1 border border-gray-300 rounded-md">View Details</button>
 //                   <button className="text-sm px-3 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700">Analysis</button>
 //                 </div>
 //               </div>
 //             </div>
 //           </div>
 //         </div>
 //         {/* Group Calls */}
 //         <div className="p-4">
 //           <div className="flex justify-between items-center mb-4">
 //             <h2 className="text-lg font-semibold text-gray-800">Group Calls</h2>
 //             <a
 //               href="#"
 //               className="text-sm text-purple-600 font-medium hover:underline"
 //             >
 //               See all
 //             </a>
 //           </div>
 //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
 //             {groupCallData.map((call) => (
 //               <div
 //                 key={call.id}
 //                 className="bg-white rounded-xl shadow-sm border border-gray-200 p-3"
 //               >
 //                 <div className="relative w-full h-36 rounded-lg overflow-hidden mb-2">
 //                   <Image
 //                     src={call.image}
 //                     alt="Call Banner"
 //                     layout="fill"
 //                     objectFit="cover"
 //                   />
 //                 </div>
 //                 <span
 //                   className={`text-xs font-semibold px-2 py-1 rounded-md mb-1 inline-block ${
 //                     call.badge === "Ongoing"
 //                       ? "bg-green-100 text-green-700"
 //                       : "bg-purple-100 text-purple-700"
 //                   }`}
 //                 >
 //                   {call.badge}
 //                 </span>
 //                 <h3 className="text-sm font-semibold text-gray-800 leading-snug mb-1">
 //                   {call.title}
 //                 </h3>
 //                 <div className="text-xs text-gray-500 mb-1">{call.date}</div>
 //                 <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
 //                   <span>{call.group}</span>
 //                   <span>{call.time}</span>
 //                 </div>
 //                 <div className="flex justify-between items-center">
 //                   <button className="text-sm border border-gray-300 rounded-lg px-3 py-1 hover:bg-gray-100">
 //                     View Participants
 //                   </button>
 //                   <button className="text-sm bg-purple-600 text-white rounded-lg px-4 py-1 hover:bg-purple-700">
 //                     Join Now
 //                   </button>
 //                 </div>
 //               </div>
 //             ))}
 //           </div>
 //         </div>
 //         </div>
 // <div className='flex'>
 //         {/* Applications Section */}
 //         <div className="min-h-screen bg-gray-50 p-6 ">
 //           <div className="bg-white rounded-2xl shadow-md p-6">
 //             <div className="flex justify-between items-center mb-6">
 //               <div className="flex items-center gap-2">
 //                 <button className="text-xl">
 //                   <span className="material-icons">menu</span>
 //                 </button>
 //                 <h1 className="text-xl font-semibold text-gray-700">
 //                   Applications
 //                 </h1>
 //               </div>
 //               <div className="flex items-center gap-4">
 //                 <a href="#" className="text-purple-600 font-semibold">
 //                   See all
 //                 </a>
 //                 <button className="text-xl">
 //                   <span className="material-icons">more_vert</span>
 //                 </button>
 //               </div>
 //             </div>
 //             <Section
 //               title="Mentors"
 //               users={[
 //                 {
 //                   name: "Maxwell Smith",
 //                   email: "maxwellsmith@gmail.com",
 //                   tags: [
 //                     "Product Designer",
 //                     "4years Experience",
 //                     "🇳🇬 Lagos, Nigeria",
 //                     "GMT +1",
 //                   ],
 //                   avatar: "/avatar1.png",
 //                 },
 //               ]}
 //             />
 //             <Section
 //               title="Students"
 //               users={[
 //                 {
 //                   name: "Adeati Samuel",
 //                   email: "adeatisamuel@gmail.com",
 //                   avatar: "/avatar1.png",
 //                 },
 //                 {
 //                   name: "Maxwell Smith",
 //                   email: "maxwellsmith@gmail.com",
 //                   avatar: "/avatar2.png",
 //                 },
 //                 {
 //                   name: "Adeati Samuel",
 //                   email: "adeatisamuel@gmail.com",
 //                   avatar: "/avatar1.png",
 //                 },
 //                 {
 //                   name: "Maxwell Smith",
 //                   email: "maxwellsmith@gmail.com",
 //                   avatar: "/avatar2.png",
 //                 },
 //               ]}
 //             />
 //           </div>
 //         </div>
 //     <div className="p-4 max-w-md mx-auto space-y-6">
 //       {/* Mentors Card */}
 //       <div className="bg-white rounded-2xl shadow p-4">
 //         <div className="flex justify-between items-center mb-4">
 //           <h2 className="text-gray-500 font-semibold">Mentors</h2>
 //           <button className="text-xl font-bold text-gray-600">+</button>
 //         </div>
 //         <div className="space-y-4">
 //           {/* Mentor 1 */}
 //           <div className="flex items-center justify-between">
 //             <div className="flex items-center space-x-3">
 //               <div className="w-10 h-10 rounded-full overflow-hidden">
 //                 <Image
 //                   src="/mentor1.jpg"
 //                   alt="Maxwell Smith"
 //                   width={40}
 //                   height={40}
 //                   className="object-cover"
 //                 />
 //               </div>
 //               <div>
 //                 <p className="font-semibold">Maxwell Smith</p>
 //                 <p className="text-xs text-gray-500">Product Designer</p>
 //               </div>
 //             </div>
 //             <button className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Message</button>
 //           </div>
 //           {/* Mentor 2 */}
 //           <div className="flex items-center justify-between">
 //             <div className="flex items-center space-x-3">
 //               <div className="w-10 h-10 rounded-full overflow-hidden">
 //                 <Image
 //                   src="/mentor2.jpg"
 //                   alt="Adeati Samuel"
 //                   width={40}
 //                   height={40}
 //                   className="object-cover"
 //                 />
 //               </div>
 //               <div>
 //                 <p className="font-semibold">Adeati Samuel</p>
 //                 <p className="text-xs text-gray-500">Product Designer</p>
 //               </div>
 //             </div>
 //             <button className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Message</button>
 //           </div>
 //         </div>
 //         <div className="mt-6 text-center">
 //           <button className="bg-purple-100 text-purple-600 font-semibold py-2 px-6 rounded-full">
 //             See all
 //           </button>
 //         </div>
 //       </div>
 //       {/* Recent Activities Card */}
 //       <div className="bg-white rounded-2xl shadow p-4">
 //         <div className="flex justify-between items-center mb-4">
 //           <h2 className="text-gray-500 font-semibold">Recent Activities</h2>
 //           <button className="text-sm text-purple-600 font-semibold">See all</button>
 //         </div>
 //         <div className="space-y-4 text-sm">
 //           {/* Activity 1 */}
 //           <div className="flex items-start space-x-3">
 //             <div className="w-8 h-8 rounded-full overflow-hidden">
 //               <Image
 //                 src="/kyc.jpg"
 //                 alt="KYC"
 //                 width={32}
 //                 height={32}
 //                 className="object-cover"
 //               />
 //             </div>
 //             <div>
 //               <p className="font-semibold">KYC Verification</p>
 //               <p className="text-gray-500">45 new persons just signed up on Mently.</p>
 //               <p className="text-gray-400 text-xs mt-1">25 minutes Ago</p>
 //             </div>
 //           </div>
 //           {/* Activity 2 */}
 //           <div className="flex items-start space-x-3">
 //             <div className="w-8 h-8 rounded-full overflow-hidden">
 //               <Image
 //                 src="/signup.jpg"
 //                 alt="Sign Up"
 //                 width={32}
 //                 height={32}
 //                 className="object-cover"
 //               />
 //             </div>
 //             <div>
 //               <p className="font-semibold">New User Sign Up!</p>
 //               <p className="text-gray-500">45 new persons just signed up on Mently.</p>
 //               <p className="text-gray-400 text-xs mt-1">25 minutes Ago</p>
 //             </div>
 //           </div>
 //           {/* Activity 3 */}
 //           <div className="flex items-start space-x-3">
 //             <div className="w-8 h-8 rounded-full overflow-hidden">
 //               <Image
 //                 src="/withdrawal.jpg"
 //                 alt="Withdrawal"
 //                 width={32}
 //                 height={32}
 //                 className="object-cover"
 //               />
 //             </div>
 //             <div>
 //               <p className="font-semibold">Withdrawal Request</p>
 //               <p className="text-gray-500">Mardian requested a withdrawal.</p>
 //               <p className="text-gray-400 text-xs mt-1">25 minutes Ago</p>
 //             </div>
 //           </div>
 //         </div>
 //       </div>
 //     </div>
 // </div>
 //       </div>
 //     </div>
 //   );
 // };
 // export default Page;
_s(Dashboard, "zcFqXhcLxGdCRHEpT5boncN/qkE=");
_c = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_page_tsx_8221feda._.js.map