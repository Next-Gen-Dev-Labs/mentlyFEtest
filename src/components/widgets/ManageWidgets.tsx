import React from "react";
import {
  ManageWidgetsIconOne,
  ManageWidgetsIconTwo,
} from "@/components/svgIcons/SvgIcons";
import { useWidget } from "@/context/WidgetContext";

const ManageWidgets = () => {
  const { toggleRightBar } = useWidget();

  return (
    <>
      <section>
        <main
          
          className="flex justify-end items-center"
        >
          <div onClick={toggleRightBar} className="flex space-x-5">
          <div className="flex justify-center space-x-5 items-center cursor-pointer">
            <ManageWidgetsIconOne />
            <ManageWidgetsIconTwo />
          </div>
          <h1 className="text-[#1F0954] text-base font-bold">Manage Widgets</h1>
          </div>
        </main>
      </section>
    </>
  );
};

export default ManageWidgets;
