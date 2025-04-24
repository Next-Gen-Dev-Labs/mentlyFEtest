import Image from "next/image";

export default function Mentors() {
    return (
        <div className="mt-2 p-4 space-y-6">
            <div className="grid gap-3">
                <div className="flex items-center py-2 justify-between border-b border-[#F3F3F3]">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full w-10 h-10 relative overflow-hidden">
                            <Image fill priority src="/profile3.webp" alt="Widget Image" className="object-cover" />
                        </div>
                        <div className="grid content-between">
                            <p className="text-[#4F4F4F] font-bold text-[16px]">Maxwell Smith</p>
                            <span className="text-[#7D8DA6] font-[400] text-[12px]">Product Designer</span>
                        </div>
                    </div>
                    <button className="bg-[#6F01D0] py-1 px-3 text-[#F1EEFF] font-normal text-[16px] rounded-2xl cursor-pointer">Message</button>
                </div>
                <div className="flex items-center py-2 justify-between border-b border-[#F3F3F3]">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full w-10 h-10 relative overflow-hidden">
                            <Image fill priority src="/profile7.webp" alt="Widget Image" className="object-cover" />
                        </div>
                        <div className="grid content-between">
                            <p className="text-[#4F4F4F] font-bold text-[16px]">Adeati Samuel</p>
                            <span className="text-[#7D8DA6] font-[400] text-[12px]">Product Designer</span>
                        </div>
                    </div>
                    <button className="bg-[#6F01D0] py-1 px-3 text-[#F1EEFF] font-normal text-[16px] rounded-2xl cursor-pointer">Message</button>
                </div>
            </div>
            <button className="bg-[#DDD6FB] text-[#6F01D0] text-[16px] cursor-pointer w-full h-11 py-1 px-3 rounded-3xl">See all</button>
        </div>
    );
}
