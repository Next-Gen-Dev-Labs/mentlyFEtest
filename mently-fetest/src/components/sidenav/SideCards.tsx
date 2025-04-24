import React, { ReactNode } from 'react';
import NextLink from 'next/link';

type Props = {
   path: string;
   icon: ReactNode;
   title: string;
};

function SideCards({ path, icon, title }: Props) {
   return (
      <NextLink
         className="flex justify-center gap-5 p-3 w-[100%] hover:bg-white hover:text-[#340260] rounded-[10px]"
         href={path}
      >
         <div> {icon}</div>
         <h4>{title}</h4>
      </NextLink>
   );
}

export default SideCards;
