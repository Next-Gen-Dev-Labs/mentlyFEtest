import { CollapseProps } from "@/contexts/collapse";
import { TbLayout, TbListDetails } from "react-icons/tb";

export default function Header({ toggleCollapse }: CollapseProps) {
    return (
        <section className="grid gap-4 mb-3">
            <div className="flex gap-1.5 items-center justify-end">
                <button className="cursor-pointer text-[#A4A5B8] hover:text-[#6F01D0] w-6 h-6">
                    <TbListDetails className="rotate-y-180" />
                </button>
                <button className="cursor-pointer text-[#6F01D0] grid place-items-center rounded-[3px] border border-[#6F01D0] bg-[#6F01D01C] w-6 h-6">
                    <TbLayout className="rotate-y-180" />
                </button>
                <button onClick={toggleCollapse} className="text-[#1F0954] font-bold text-sm cursor-pointer bg-transparent border-none">Manage Widgets</button>
            </div>
            <div className="flex h-12 rounded-sm py-4 px-6 justify-between items-center bg-[#6F01D0]">
                <h2 className="text-sm md:text-2xl font-bold text-white">Welcome Aboard, Blessing 👋</h2>
                <p className="text-[#BDBDBD] hidden xl:block">We&apos;re thrilled to have you join the Techrity Team!</p>
                <button className="bg-white text-[#1F0954] border-none font-bold text-sm cursor-pointer px-4 py-2 rounded-lg">
                    Update Profile
                </button>
            </div>
        </section>
    );
}
