import { WidgetItem } from "@/data/items";
import { HiBars4, HiEllipsisVertical } from "react-icons/hi2";

export default function Widget({ widget }: { widget: WidgetItem; }) {
    if (!widget.visible) return null;

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
                        <HiEllipsisVertical />
                    </button>
                </div>
            </div>

            {/* Widget-specific content would go here */}
            <div className="mt-4 text-sm text-gray-500">
                {widget.label} content will appear here
            </div>
        </section>
    );
}