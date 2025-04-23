import { HiBars4, HiEllipsisVertical } from "react-icons/hi2";

export default function Widget() {
    return (
        <section className="rounded-xl bg-white p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-between gap-2">
                    <HiBars4 className="text-black cursor-pointer" />
                    <h4 className="text-[#B0B0B0] text-[16px]">Programs</h4>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <button className="text-[#6F01D0] text-[12px] bg-transparent border-none cursor-pointer">See all</button>
                    <button><HiEllipsisVertical className="text-black cursor-pointer" /></button>
                </div>
            </div>
        </section>
    );
}