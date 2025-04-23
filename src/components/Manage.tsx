import { CollapseProps } from "@/contexts/collapse";
import { HiBars4, HiMiniXMark } from "react-icons/hi2";


export default function Manage({ toggleCollapse }: CollapseProps) {
    return (
        <aside className="w-100 px-10 py-6 fixed bg-white top-0 right-0 h-dvh transition-all overflow-y-auto scrollbar-hide duration-300 ease-in-out before:bg-[#E3D7FF29] before:backdrop-blur-xs before:fixed before:inset-0 before:-z-1">
            <section className="space-y-10">
                <div className="flex justify-end gap-2 border-b-[#8D8D8D] border-b-[1px] pb-2">
                    <HiMiniXMark onClick={toggleCollapse} className="text-[#8D8D8D] hover:text-black cursor-pointer" />
                </div>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-[#6F01D0] text-3xl font-bold">Manage Widgets</h3>
                        <p className="text-[#374557] text-[12px] mt-4">Personalize your dashboard by managing widgets add, remove, or reorder them to fit your workflow.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between gap-2">
                            <div className="flex gap-2 items-center">
                                <HiBars4 className="text-black cursor-pointer" />
                                <span className="text-[#4F4F4F] cursor-pointer font-bold text-sm">Programs</span>
                            </div>
                            <input type="checkbox" />
                        </div>
                        <div className="flex items-center justify-between gap-2">
                            <div className="flex gap-2 items-center">
                                <HiBars4 className="text-black cursor-pointer" />
                                <span className="text-[#4F4F4F] cursor-pointer font-bold text-sm">Group Calls</span>
                            </div>
                            <input type="checkbox" />
                        </div>
                        <div className="flex items-center justify-between gap-2">
                            <div className="flex gap-2 items-center">
                                <HiBars4 className="text-black cursor-pointer" />
                                <span className="text-[#4F4F4F] cursor-pointer font-bold text-sm">Mantors</span>
                            </div>
                            <input type="checkbox" />
                        </div>
                        <div className="flex items-center justify-between gap-2">
                            <div className="flex gap-2 items-center">
                                <HiBars4 className="text-black cursor-pointer" />
                                <span className="text-[#4F4F4F] cursor-pointer font-bold text-sm">Recent Acrivities</span>
                            </div>
                            <input type="checkbox" />
                        </div>
                        <div className="flex items-center justify-between gap-2">
                            <div className="flex gap-2 items-center">
                                <HiBars4 className="text-black cursor-pointer" />
                                <span className="text-[#4F4F4F] cursor-pointer font-bold text-sm">Application</span>
                            </div>
                            <input type="checkbox" />
                        </div>
                        <div className="flex items-center justify-between gap-2">
                            <div className="flex gap-2 items-center">
                                <HiBars4 className="text-black cursor-pointer" />
                                <span className="text-[#4F4F4F] cursor-pointer font-bold text-sm">Earnings</span>
                            </div>
                            <input type="checkbox" />
                        </div>
                        <div className="flex items-center justify-between gap-2">
                            <div className="flex gap-2 items-center">
                                <HiBars4 className="text-black cursor-pointer" />
                                <span className="text-[#4F4F4F] cursor-pointer font-bold text-sm">Forum</span>
                            </div>
                            <input type="checkbox" />
                        </div>
                        <div className="flex items-center justify-between gap-2">
                            <div className="flex gap-2 items-center">
                                <HiBars4 className="text-black cursor-pointer" />
                                <span className="text-[#4F4F4F] cursor-pointer font-bold text-sm">Program Analysis</span>
                            </div>
                            <input type="checkbox" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <button className="text-white text-[13px] bg-[#6F01D0] rounded-[7px] border-none cursor-pointer px-4 py-2">Save Changes</button>
                        <button className="text-[#6F01D0] border-[0.82px] rounded-[7px] text-[13px] border-[#6F01D0] cursor-pointer px-4 py-2">Reset to Default</button>
                    </div>
                </div>
            </section>
        </aside>
    );
}