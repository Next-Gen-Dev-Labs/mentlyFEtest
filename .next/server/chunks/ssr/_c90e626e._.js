module.exports = {

"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$feather$2f$dist$2f$icons$2f$sidebar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sidebar$3e$__ = __turbopack_context__.i("[project]/node_modules/react-feather/dist/icons/sidebar.js [app-rsc] (ecmascript) <export default as Sidebar>");
;
;
const page = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$feather$2f$dist$2f$icons$2f$sidebar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sidebar$3e$__["Sidebar"], {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 176,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = page;
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_c90e626e._.js.map