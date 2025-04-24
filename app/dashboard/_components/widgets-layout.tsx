"use client";

import {
  WidgetContainer,
  WidgetContainerHeader,
} from "@/app/_components/widget-container";
import { MoreVerticalIcon } from "lucide-react";
import React from "react";
import { UsersAnalytics } from "./users-analytics";
import { dummyData } from "@/lib/data";

export const WidgetsLayout = () => {
  return (
    <section className="grid pb-12 flex-1 lg:max-h-[1240px] lg:grid-cols-3 lg:grid-rows-3 grow md:grid-cols-2 gap-x-2.5 gap-y-[1.125rem]">
      <div className="lg:row-span-2">
        <WidgetContainer className="min-h-full">
          <WidgetContainerHeader
            widgetTitle="Programs"
            actions={<MoreVerticalIcon />}
          />
          1
        </WidgetContainer>
      </div>

      <div className="lg:col-span-2">
        <WidgetContainer className="min-h-full">
          <WidgetContainerHeader
            widgetTitle="Group Calls"
            actions={<MoreVerticalIcon />}
          />
          2
        </WidgetContainer>
      </div>

      <div className="lg:row-span-2">
        <WidgetContainer className=" min-h-full">
          <WidgetContainerHeader
            widgetTitle="Applications"
            actions={<MoreVerticalIcon />}
          />
          3
        </WidgetContainer>
      </div>

      <div>
        <WidgetContainer className="min-h-full">
          <WidgetContainerHeader
            widgetTitle="Mentors"
            actions={<MoreVerticalIcon />}
          />
          4
        </WidgetContainer>
      </div>

      <div className="">
        <WidgetContainer className="!bg-transparent min-h-full">
          <UsersAnalytics data={dummyData.usersAnaylytics} />
        </WidgetContainer>
      </div>

      <div className="">
        <WidgetContainer className="min-h-full">
          <WidgetContainerHeader
            widgetTitle="Recent Activities"
            actions={<MoreVerticalIcon />}
          />
          6
        </WidgetContainer>
      </div>
    </section>
  );
};
