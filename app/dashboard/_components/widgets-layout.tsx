"use client";

import {
  WidgetContainer,
  WidgetContainerContent,
  WidgetContainerHeader,
} from "@/app/_components/widget-container";
import { MoreVerticalIcon } from "lucide-react";
import React from "react";
import { UsersAnalytics } from "./users-analytics";
import { dummyData } from "@/lib/data";
import { ProgramCard } from "@/app/_components/program-card";
import Link from "next/link";
import { GroupCallsCard } from "@/app/_components/group-calls-card";

export const WidgetsLayout = () => {
  return (
    <section className="grid pb-12 flex-1 lg:max-h-[1240px] lg:grid-cols-[0.6fr_1fr_0.6fr] lg:grid-rows-3 grow md:grid-cols-2 gap-x-2.5 gap-y-[1.125rem]">
      <div className="lg:row-span-3 flex gap-[1.125rem] flex-col">
        <WidgetContainer className="flex-1">
          <WidgetContainerHeader
            widgetTitle="Programs"
            actions={
              <div className="flex items-center gap-4">
                <Link href="#" className="text-primary">
                  See all
                </Link>
                <MoreVerticalIcon />
              </div>
            }
          />
          <WidgetContainerContent className="max-h-[600px] grid gap-2 pb-6 overflow-y-auto">
            {dummyData.programs.map((program, idx) => (
              <ProgramCard key={idx} {...program} />
            ))}
          </WidgetContainerContent>
        </WidgetContainer>

        <WidgetContainer className="!bg-transparent overflow-hidden max-h-[320]">
          <UsersAnalytics data={dummyData.usersAnaylytics} />
        </WidgetContainer>
      </div>

      <div className="lg:col-span-2">
        <WidgetContainer className="min-h-full max-w-full overflow-x-auto">
          <WidgetContainerHeader
            widgetTitle="Group Calls"
            actions={<MoreVerticalIcon />}
          />
          <WidgetContainerContent className="flex items-center gap-2">
            {dummyData.calls.map((call, idx) => (
              <GroupCallsCard key={idx} {...call} />
            ))}
          </WidgetContainerContent>
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
