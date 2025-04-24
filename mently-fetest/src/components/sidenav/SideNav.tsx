import React from 'react';
import Image from 'next/image';
import {
   Activity,
   ChartLine,
   Columns2,
   House,
   LogOut,
   Settings,
   SquareRadical,
   Trophy,
   UserRound,
   WalletMinimal,
} from 'lucide-react';

import SideCards from './SideCards';

const Navigation = [
   {
      title: 'Dashboard',
      path: '/dashboard',
      icon: <House />,
   },
   {
      title: 'Programs',
      path: '/dashboard/programs',
      icon: <Columns2 />,
   },
   {
      title: 'Activities',
      path: '/dashboard/activities',
      icon: <Activity />,
   },
   {
      title: 'users',
      path: '/dashboard/users',
      icon: <UserRound />,
   },
   {
      title: 'Forums',
      path: '/dashboard/forums',
      icon: <SquareRadical />,
   },
   {
      title: 'Finances',
      path: '/dashboard/finances',
      icon: <WalletMinimal />,
   },
   {
      title: 'Rewards',
      path: '/dashboard/rewards',
      icon: <Trophy />,
   },
   {
      title: 'Analytics',
      path: '/dashboard/analytics',
      icon: <ChartLine />,
   },
   {
      title: 'Settings',
      path: '/dashboard/settings',
      icon: <Settings />,
   },
   {
      title: 'Log Out',
      path: '/dashboard/logout',
      icon: <LogOut />,
   },
];

function SideNav() {
   return (
      <div>
         <div className="bg-[#340260] w-[300px] p-5 ">
            <div>
               <div className="flex items-center gap-12 justify-between w-[inherit] px-2  py-6 mb-10">
                  {' '}
                  <div className="relative w-[150px] h-[30px]">
                     <Image
                        src="/logo.svg"
                        alt="mently logo"
                        // width={300}
                        // height={100}
                        fill
                        className="object-contain"
                     />{' '}
                  </div>
                  <div className="relative w-[20px] h-[30px]">
                     <Image
                        src="/grid-4.png"
                        alt="logo icon"
                        // width={200}
                        // height={100}
                        fill
                        className="object-contain"
                     />{' '}
                  </div>
               </div>
               <div className="flex flex-col items-center gap-5 mb-5">
                  {Navigation.map((navs) => (
                     <SideCards
                        key={navs.title}
                        path={navs.path}
                        icon={navs.icon}
                        title={navs.title}
                     />
                  ))}
               </div>
               <div className="h-[126px]  mx-auto max-w-[220px] w-full rounded-[8px] p-4 flex flex-col gap-4 bg-[#7a4f9f64]">
                  <UserRound />
                  <p className="font-bold text-[12px] text-white">
                     Got some questions, enquiries or need help?
                  </p>
                  <a className="text-[#F0C074] underline text-[10px]" href="">
                     Visit Mently Help Desk Here
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}

export default SideNav;
