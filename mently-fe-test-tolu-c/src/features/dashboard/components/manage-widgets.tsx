"use client";

import { Fragment, useState } from "react";
import { WidgetManagement } from "./WidgetManagement";
import { GalleryViewIcon, NailViewIcon } from "~/assets/icons";
import { cn } from "~/utils/cn";

type WidgetStyle = "nail" | "gallery";
export const ManageWidgets = () => {
  const [openWidgetManagement, setOpenWidgetManagement] = useState(false);
  const [currentWidgetStyle, setCurrentWidgetStyle] =
    useState<WidgetStyle>("gallery");

  const changeWidgetStyle = (style: WidgetStyle) => {
    setCurrentWidgetStyle(style);
  };

  return (
    <Fragment>
      <WidgetManagement
        open={openWidgetManagement}
        close={() => setOpenWidgetManagement(false)}
      />
      <div className="w-full flex justify-end items-center gap-6">
        <div className="flex items-center gap-6">
          <NailViewIcon
            className={cn("size-6 text-[#A4A5B8] cursor-pointer", {
              "text-custom-1d0": currentWidgetStyle === "nail",
            })}
            onClick={() => changeWidgetStyle("nail")}
          />
          <GalleryViewIcon
            className={cn("size-6 text-[#A4A5B8] cursor-pointer", {
              "text-custom-1d0": currentWidgetStyle === "gallery",
            })}
            onClick={() => changeWidgetStyle("gallery")}
          />
        </div>
        <button
          className="text-custom-954 font-bold text-base cursor-pointer"
          onClick={() => setOpenWidgetManagement(true)}
        >
          Manage Widgets
        </button>
      </div>
    </Fragment>
  );
};
