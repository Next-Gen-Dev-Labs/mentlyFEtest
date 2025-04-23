import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";

export default function Programs() {
    return (
        <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
                <span className="text-[11px] text-[#918C9C]">Filter</span>
                <button className="text-[11px] text-[#595564] font-medium py-1.5 px-2.5 flex items-center justify-between rounded-[0.8px] border-[#E1E7EC] border-[0.8px]">
                    <span>Active</span>
                    <IoChevronDown />
                </button>
            </div>
            <div className="rounded-[10px] p-3.5 h-45 [box-shadow:0px_4.93px_5.17px_0px_#AFABAB4D]">
                <div className="p-3 relative w-full h-20 rounded-lg overflow-hidden">
                {/* <div className="p-3 relative w-full h-20 rounded-lg overflow-hidden after:content-[''] after:absolute after:inset-0 after:z-10 after:bg-gradient-to-b after:from-[#0C0C0CCC] after:to-[#000000]"> */}
                    <h5 className="font-bold text-black text-md z-50">Fundamentals of User interface & Experience</h5>
                    <p className="gap-1 rounded-[10px] flex items-center mt-1 bg-[#D4E0F3] w-max py-0.5 px-2.5">
                        <i className="bg-[#0077FF] rounded-full w-1.5 h-1.5" />
                        <span className="text-[#0077FF] text-[10px] font-bold">Bootcamp</span>
                    </p>
                    <Image fill src="/widget1.webp" alt="Widget Image" className="object-cover -z-10" />
                </div>
                <p>This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach</p>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <h5 className="font-medium">Advanced React</h5>
                    <p className="text-xs text-gray-500 mt-1">8 participants</p>
                </div>
            </div>
        </div>
    );
}
