'use client';

import { WidgetItem } from "@/data/items";
import * as Widgets from "@/components/Widgets";
import { HiBars4, HiChevronDown, HiEllipsisVertical, HiOutlinePlusCircle } from "react-icons/hi2";

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
    const isMentor = widget.label === 'Mentors';
    const wrapperClasses = isUser
        ? 'border-[#E1E7EC] border-[1px] bg-[#E7DDFF4D]'
        : 'bg-white p-4 shadow-sm';

    return (
        <section className={`rounded-xl ${wrapperClasses} ${widget.gridPosition} w-full h-full`}>
            <div className={`flex items-center justify-between mb-2 ${isUser ? 'border-b-2 border-[#E1E7EC] py-3 px-4 sm:px-6' : ''}`}>
                {!isUser ? (
                    <>
                        <div className="flex items-center gap-2">
                            <HiBars4 size={18} />
                            <h4 className="text-[#B0B0B0] text-lg font-bold">{widget.label}</h4>
                        </div>
                        <div className="flex items-center gap-2">
                            {!isMentor ? (
                                <button className="text-[#6F01D0] text-[12px] font-[600] bg-transparent border-none cursor-pointer hover:underline">
                                    See all
                                </button>
                            ) : <HiOutlinePlusCircle size={24} color="#9D92A6" />}
                            <button className="p-1 cursor-pointer hover:bg-gray-100 rounded">
                                <HiEllipsisVertical className="text-black" />
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <h4 className="text-[#595564] text-xl font-[600]">{widget.label}</h4>
                        <button className="text-sm text-[#595564] font-medium py-2 px-3 gap-2 flex items-center justify-between rounded-sm border-[#E1E7EC] border-[1px]">
                            <span>Active</span>
                            <HiChevronDown />
                        </button>
                    </>
                )}
            </div>
            <SpecificWidget />
        </section>
    );
}
