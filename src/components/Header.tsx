import { CollapseProps } from "@/contexts/collapse";
import { TbLayout, TbListDetails } from "react-icons/tb";

export default function Header({ toggleCollapse }: CollapseProps) {
    return (
        <section className="grid gap-4 mb-2">
            <div className="flex gap-1.5 items-center justify-end">
                <button className="cursor-pointer text-[#A4A5B8] origin-top-right rotate-y-180 w-7 h-7">
                    <TbListDetails />
                </button>
                <button className="cursor-pointer text-[#A4A5B8] origin-right rotate-y-180 w-7 h-7">
                    <TbLayout />
                </button>
                <button onClick={toggleCollapse} className="text-[#1F0954] font-bold text-sm cursor-pointer bg-transparent border-none">Manage Widgets</button>
            </div>
            <div className="flex h-12 rounded-sm py-4 px-6 justify-between items-center bg-[#6F01D0]">
                <h2 className="text-2xl font-bold text-white">
                    Welcome Aboard, Blessing 👋
                </h2>
                <p className="text-[#BDBDBD]">
                    We&apos;re thrilled to have you join the Techrity Team!
                </p>
                <button className="bg-white text-[#1F0954] border-none font-bold text-sm cursor-pointer px-4 py-2 rounded-lg">
                    Update Profile
                </button>
            </div>
        </section>
    );
}