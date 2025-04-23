import React from "react";
import {ManageWidgetsIconOne, ManageWidgetsIconTwo} from '@/components/svgIcons/SvgIcons'

const ManageWidgets = () => {
  return (
   
      <main className="flex w-full justify-end items-center space-x-5">
        <div className="flex justify-center space-x-5 items-center">
          <ManageWidgetsIconOne />
          <ManageWidgetsIconTwo />
        </div>
        <h1 className="text-[#1F0954] text-base font-bold">Manage Widgets</h1>
      </main>
  );
};

export default ManageWidgets;
