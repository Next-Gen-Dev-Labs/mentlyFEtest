import Image from "next/image";
import Avatar from "../Avatar";
import { CiCalendar } from "react-icons/ci";
import { groupCallItems } from "@/data/items";
import { GoClock, GoArrowRight } from "react-icons/go";

export default function GroupCalls() {
    return (
        <div className="mt-4 flex gap-3 pb-2">
            {groupCallItems.map((call, index) => (
                <div
                    key={index}
                    className={`bg-[#F9F7FF] rounded-[10px] p-5 grid gap-2 w-full
                        ${index > 0 ? 'hidden xl:block' : ''}
                        ${index > 1 ? 'xl:hidden 2xl:block' : ''}
                    `}
                >
                    <div className="relative w-full h-25 rounded-lg overflow-hidden">
                        <Image fill priority src={call.image} alt="Widget Image" className="object-cover" />
                    </div>
                    <p className="gap-1 rounded-[10px] flex items-center mt-1 w-max py-0.5 px-2.5" style={{ backgroundColor: call.status === 'upcoming' ? '#E0DDFF' : '#2AC10033' }}>
                        <i className="rounded-full w-1.5 h-1.5" style={{ backgroundColor: call.status === 'upcoming' ? '#1C0AE1' : '#1F8B01' }} />
                        <span className="text-[10px] font-bold" style={{ color: call.status === 'upcoming' ? '#1C0AE1' : '#1F8B01' }}>
                            {call.status.charAt(0).toUpperCase() + call.status.slice(1)}
                        </span>
                    </p>
                    <h4 className="text-[#595564] text-lg text-pretty w-[70%]">{call.title}</h4>
                    <div className="pt-2 border-t border-[#D0D5DD]">
                        <div className="flex items-center justify-between">
                            <p className="gap-2 flex items-center">
                                <CiCalendar className="text-[#1F0954]" />
                                <span className="text-sm text-[#595564]">{call.date}</span>
                            </p>
                            <i className="w-[1.5px] h-3 bg-[#D0D5DD]" />
                            <p className="gap-2 flex items-center">
                                <GoClock className="text-[#1F0954]" />
                                <span className="text-sm text-[#595564]">{call.time}</span>
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <Avatar size="sm" images={[{ alt: "Mentor 1", src: "/profile5.webp", tooltip: "Faith Okolo" }]} />
                                <p className="flex gap-0.5 flex-col">
                                    <span className="font-[400] text-[10px] text-[#A195C0]">{call.group.type}</span>
                                    <span className="font-[600] text-[12px] text-[#595564]">{call.group.name}</span>
                                </p>
                            </div>
                            <div className="flex gap-0.5 flex-col">
                                <span className="font-[400] text-[10px] text-[#A195C0]">Mentors</span>
                                <Avatar size="sm" overlap={1} images={call.mentors} />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <button className="text-[#6F01D0] border-[0.82px] rounded-[7px] text-[13px] border-[#6F01D0] cursor-pointer px-4 py-2">
                            View Participants
                        </button>
                        <button
                            className="text-white text-[13px] flex items-center gap-2 border-[0.82px] rounded-[7px] border-[#6F01D0] cursor-pointer px-4 py-2"
                            style={{
                                borderColor: call.status === 'upcoming' ? 'transparent' : '#6F01D0',
                                backgroundColor: call.status === 'upcoming' ? '#6F01D04D' : '#6F01D0',
                            }}
                        >
                            <span>Join Now</span>
                            <GoArrowRight />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
