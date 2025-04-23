'use client';

import { WidgetItem } from "@/data/items";
import * as Widgets from "@/components/Widgets";
import { HiBars4, HiEllipsisVertical } from "react-icons/hi2";

interface WidgetComponents {
    [key: string]: React.ComponentType;
}

const widgetComponents: WidgetComponents = {
    'Users': Widgets.Users,
    'Mentors': Widgets.Mentors,
    'Programs': Widgets.Programs,
    'Group Calls': Widgets.GroupCalls,
    'Application': Widgets.Application,
    'Recent Activities': Widgets.RecentActivities,
};

export default function Widget({ widget }: { widget: WidgetItem }) {
    const SpecificWidget = widgetComponents[widget.label];
    if (!SpecificWidget) return null;

    const isUser = widget.label === 'Users';
    const wrapperClasses = isUser
        ? 'rounded-xl bg-gradient-to-br from-[#0C0C0CCC] to-[#000000] p-4 shadow-md text-white'
        : 'rounded-xl bg-white p-4 shadow-sm';

    return (
        <section className={`${wrapperClasses} ${widget.gridPosition}`}>
            {!isUser && (
                <div className="flex items-center justify-between mb-2">
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
            )}
            <SpecificWidget />
        </section>
    );
}
