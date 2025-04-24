// "use client"
// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import HomeIcon from '@/components/common/icons/home-icon';
// import SidebarIcon from '@/components/common/icons/sidebar-icon';
// import { AppSidebar } from './app-sidebar';

// const navItems = [
//   { href: '/dashboard', label: 'Dashboard', icon: <HomeIcon /> },
//   { href: '/dashboard/settings', label: 'Settings', icon: <SidebarIcon/> },
//   { href: '/dashboard/users', label: 'Users', icon: <HomeIcon /> },
//   //  more navigation items
// ];

// export default function Sidebar() {
//   const pathname = usePathname();

//   const isActiveRoute = (href: string) => {
//     if (href === '/dashboard') {
//       // For dashboard, only be active if exactly at /dashboard
//       return pathname === href;
//     }
//     // For other routes, check if the current path starts with the href
//     return pathname?.startsWith(href) ?? false;
//   };

//   return (
//     // <aside className="w-64 bg-[#340260] p-4 ">
//     //   <div className="flex items-center justify-between mb-4">
//     //     <Image
//     //       src="/logo.png"
//     //       alt="Sidebar Image"
//     //       width={100}
//     //       height={100}
//     //     />

//     //     {/* open and close button  */}
//     //     <button className="ml-2 p-2 bg-gray-700 text-white rounded">
//     //       <SidebarIcon className='text-sm'/>
//     //     </button>
//     //   </div>
//     //   <ul className='pt-7'>
//     //     {navItems.map((item) => {
//     //       const isActive = isActiveRoute(item.href);
//     //       return (
//     //         <li key={item.href} className="mb-2">
//     //           <Link
//     //             href={item.href}
//     //             className={`p-2 duration-500  py-2.5 rounded-lg flex items-center gap-x-4 transition-all ${
//     //               isActive
//     //                 ? 'bg-white text-[#1F0954]'
//     //                 : 'text-white hover:bg-white/10'
//     //             }`}
//     //           >
//     //             <div className={isActive ? 'text-[#1F0954]' : 'text-white'}>
//     //               {item.icon}
//     //             </div>
//     //             <span className="text-sm">{item.label}</span>
//     //           </Link>
//     //         </li>
//     //       );
//     //     })}
//     //   </ul>
//     // </aside>
    
//     <AppSidebar />
//   );
// }