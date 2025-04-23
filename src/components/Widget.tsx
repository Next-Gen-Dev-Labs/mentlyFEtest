'use client';

import { WidgetItem } from "@/data/items";
import * as Widgets from "@/components/Widgets";
import { HiBars4, HiEllipsisVertical } from "react-icons/hi2";

interface WidgetComponents {
    [key: string]: React.ComponentType;
}

const widgetComponents: WidgetComponents = {
    'Forum': Widgets.Forum,
    'Mentors': Widgets.Mentors,
    'Earnings': Widgets.Earnings,
    'Programs': Widgets.Programs,
    'Group Calls': Widgets.GroupCalls,
    'Application': Widgets.Application,
    'Program Analysis': Widgets.ProgramAnalysis,
    'Recent Activities': Widgets.RecentActivities,
};

export default function Widget({ widget }: { widget: WidgetItem }) {
    if (!widget.visible) return null;

    const SpecificWidget = widgetComponents[widget.label];

    return (
        <section className="rounded-xl bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <HiBars4 />
                    <h4 className="text-[#B0B0B0] text-[16px] font-medium">{widget.label}</h4>
                </div>
                <div className="flex items-center gap-2">
                    <button className="text-[#6F01D0] text-[12px] bg-transparent border-none cursor-pointer hover:underline">
                        See all
                    </button>
                    <button className="p-1 cursor-pointer hover:bg-gray-100 rounded">
                        <HiEllipsisVertical className="text-gray-500" />
                    </button>
                </div>
            </div>
            <SpecificWidget />
        </section>
    );
}
