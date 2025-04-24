import Image from "next/image";
import Avatar from "../Avatar";
import { programItems } from "@/data/items";
import { IoChevronDown } from "react-icons/io5";

export default function Programs() {
    return (
        <div className="mt-4 space-y-3">
            <div className="gap-3 flex items-center justify-end">
                <span className="text-[12px] text-[#918C9C]">Filter</span>
                <button className="text-[12px] text-[#595564] font-medium py-1.5 px-2.5 gap-1.5 flex items-center justify-between rounded-sm border-[#E1E7EC] border-[0.8px]">
                    <span>Active</span>
                    <IoChevronDown />
                </button>
            </div>

            {programItems.map((program, index) => (
                <div key={index} className={`
                    rounded-[10px] p-4 grid gap-3 [box-shadow:0px_4.93px_5.17px_0px_#AFABAB4D] w-full
                    ${index > 1 ? 'hidden 2xl:block' : ''}
                `}>
                    <div className="relative w-full h-20 rounded-lg overflow-hidden">
                        <div className="absolute h-full px-4 py-1 z-10 grid items-center">
                            <h5 className="font-bold text-white text-lg 2xl:text-xl [line-height:1.2] text-pretty">{program.title}</h5>
                            <p className="gap-1 rounded-[10px] flex items-center mt-1 bg-[#D4E0F3] w-max py-0.5 px-2.5">
                                <i className="rounded-full w-1.5 h-1.5" style={{ backgroundColor: program.typeColor }} />
                                <span className="text-[10px] font-bold" style={{ color: program.typeColor }}>{program.type}</span>
                            </p>
                        </div>
                        <Image fill priority src={program.image} alt="Widget Image" className="object-cover" />
                    </div>
                    <p className="text-[#A3A3A3]">This program is a hands-on guide for designers who want to master color theory and apply it to their designs.</p>
                    <div className="flex items-center justify-between">
                        <div className={`flex items-center ${program.mentors.length > 1 ? 'overflow-hidden' : ''}`}>
                            <Avatar overlap={1.5} images={program.mentors} size={program.mentors.length > 1 ? "md" : "lg"} />
                            <span className="hidden 2xl:block font-[600] text-[12px] text-[#6C6C6C] overflow-ellipsis whitespace-nowrap">
                                {program.mentors.length > 1 ? "Mentors" : `Hosted By: ${program.hostedBy}`}
                            </span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                            <button className="text-[#6F01D0] border-[0.82px] rounded-[7px] text-[13px] border-[#6F01D0] cursor-pointer px-4 py-2">
                                View Details
                            </button>
                            <button className="md:hidden 2xl:block text-white text-[13px] border-[0.82px] bg-[#6F01D0] rounded-[7px] border-[#6F01D0] cursor-pointer px-4 py-2">
                                Analysis
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
