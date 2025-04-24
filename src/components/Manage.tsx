import { useWidgets } from "@/hooks/useWidgets";
import { CollapseProps } from "@/contexts/collapse";
import { HiBars4, HiMiniXMark } from "react-icons/hi2";

export default function Manage({ toggleCollapse }: CollapseProps) {
    const { widgets, toggleWidget, resetWidgets } = useWidgets();

    return (
        <aside className="z-50 w-100 px-10 py-6 fixed bg-white top-0 right-0 h-dvh transition-all overflow-y-auto scrollbar-hide duration-300 ease-in-out before:bg-[#E3D7FF29] before:backdrop-blur-xs before:fixed before:inset-0 before:-z-1">
            <section className="space-y-10">
                <div className="flex justify-end gap-2 border-b-[#8D8D8D] border-b-[1px] pb-2">
                    <HiMiniXMark onClick={toggleCollapse} className="text-[#8D8D8D] hover:text-black cursor-pointer" />
                </div>

                <div className="space-y-10">
                    <div>
                        <h3 className="text-[#6F01D0] text-3xl font-bold">Manage Widgets</h3>
                        <p className="text-[#374557] text-[12px] mt-4">
                            Personalize your dashboard by managing widgets add, remove, or reorder them to fit your workflow. (minimum 2 widgets must be visible)
                        </p>
                    </div>

                    <div className="space-y-4">
                        {widgets
                            .filter(widget => !widget.isUser)
                            .map(widget => (
                                <div key={widget.id} className="flex items-center justify-between gap-2">
                                    <div className="flex gap-2 items-center">
                                        <HiBars4 />
                                        <span className="text-[#4F4F4F] font-bold text-sm">
                                            {widget.label}
                                        </span>
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        checked={widget.visible}
                                        onChange={() => toggleWidget(widget.id)}
                                    />
                                </div>
                            ))}
                    </div>

                    <div className="flex items-center justify-between gap-2">
                        <button
                            onClick={toggleCollapse}
                            className="text-white text-[13px] bg-[#6F01D0] rounded-[7px] border-none cursor-pointer px-4 py-2"
                        >
                            Save Changes
                        </button>
                        <button
                            onClick={resetWidgets}
                            className="text-[#6F01D0] border-[0.82px] rounded-[7px] text-[13px] border-[#6F01D0] cursor-pointer px-4 py-2"
                        >
                            Reset to Default
                        </button>
                    </div>
                </div>
            </section>
        </aside>
    );
}
