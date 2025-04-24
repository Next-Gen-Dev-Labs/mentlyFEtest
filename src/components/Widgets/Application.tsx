import Image from "next/image";
import { applicationItems } from "@/data/items";

export default function Application() {
    return (
        <div className="p-2 space-y-6">
            <div className="grid gap-2">
                <span className="text-[12px] font-[400] text-[#7D8DA6] pl-5.5">Mentors</span>
                <div className="grid gap-2 pb-6 xl:pb-2 2xl:pb-6 border-b border-[#DBDBDB]">
                    <div className="flex items-center gap-2 justify-between">
                        <div className="flex items-center gap-2">
                        <span className="border border-[#A5A5A5] rounded-[2px] w-3.5 h-3.5"></span>
                            <div className="rounded-full w-10 h-10 relative overflow-hidden">
                                <Image fill priority src="/profile3.webp" alt="Widget Image" className="object-cover" />
                            </div>
                            <div className="grid content-between">
                                <p className="text-[#4F4F4F] font-bold text-[16px]">Maxwell Smith</p>
                                <span className="text-[#7D8DA6] font-[400] text-[12px]">maxwellsmith@gmail.com</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-2 xl:gap-1 2xl:gap-2 flex-col 2xl:flex-row">
                            <button className="text-[#D83535] border-[0.61px] rounded-[6px] font-medium text-[12px] border-[#D09696] cursor-pointer px-6 py-2.5 xl:py-1 2xl:py-2.5 xl:px-3 2xl:px-4 bg-[#FFEDED]">
                                Reject
                            </button>
                            <button className="font-medium text-white text-[12px] border-[0.61px] bg-[#6F01D0] rounded-[6px] border-[#6F01D0] cursor-pointer px-6 py-2.5 xl:py-1 2xl:py-2.5 xl:px-3 2xl:px-4">
                                Accept
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                        <button className="border-[0.86px] border-[#DDCEEE] rounded-lg px-1.5 xl:px-1 2xl:px-2 bg-[#F3ECF9]">
                            <span className="text-[#9985A7] text-[10px] xl:text-[8px] 2xl:text-[10px] font-medium">Product Designer</span>
                        </button>
                        <button className="border-[0.86px] border-[#A1BDBA] rounded-lg px-1.5 xl:px-1 2xl:px-2 bg-[#E8FDFB]">
                            <span className="text-[#58948E] text-[10px] xl:text-[8px] 2xl:text-[10px] font-medium">4years Experience</span>
                        </button>
                        <button className="border-[0.86px] border-[#ABBEE0] rounded-lg px-1.5 xl:px-1 2xl:px-2 bg-[#E3ECF9]">
                            <span className="text-[#8196B5] text-[10px] xl:text-[8px] 2xl:text-[10px] font-medium">Lagos, Nigeria</span>
                        </button>
                        <button className="border-[0.86px] border-[#C8C8C8] rounded-lg px-1.5 xl:px-1 2xl:px-2 bg-[#F4F4F4]">
                            <span className="text-[#595564] text-[10px] xl:text-[8px] 2xl:text-[10px] font-medium">GMT+1</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid gap-2">
                <span className="text-[12px] font-[400] text-[#7D8DA6] pl-5.5">Students</span>
                {applicationItems.map(student => (
                    <div key={student.id} className="flex items-center gap-2 pb-6 xl:pb-2 2xl:pb-6 border-b border-[#DBDBDB]">
                        <span className="border border-[#A5A5A5] rounded-[2px] w-3.5 h-3.5"></span>
                        <div className="flex items-center gap-2 flex-grow">
                            <div className="rounded-full w-10 h-10 relative overflow-hidden">
                                <Image fill priority src={student.image} alt={student.name} className="object-cover" />
                            </div>
                            <div className="grid content-between flex-grow">
                                <p className="text-[#4F4F4F] font-bold text-[16px]">{student.name}</p>
                                <span className="text-[#7D8DA6] font-[400] text-[12px]">{student.email}</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-2 xl:gap-1 2xl:gap-2 flex-col 2xl:flex-row">
                            <button className="text-[#D83535] border-[0.61px] rounded-[6px] font-medium text-[12px] border-[#D09696] cursor-pointer px-6 py-2.5 xl:py-1 2xl:py-2.5 xl:px-3 2xl:px-4 bg-[#FFEDED]">
                                Reject
                            </button>
                            <button className="font-medium text-white text-[12px] border-[0.61px] bg-[#6F01D0] rounded-[6px] border-[#6F01D0] cursor-pointer px-6 py-2.5 xl:py-1 2xl:py-2.5 xl:px-3 2xl:px-4">
                                Accept
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
