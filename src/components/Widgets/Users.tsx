import Image from "next/image";

export default function Users() {
    return (
        <div className="mt-4 p-4 flex items-center gap-2 justify-around">
            <div className="relative">
                <Image width={180} height={180} src="/donut.webp" alt="Widget Image" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center [line-height:0]">
                    <p className="text-2xl font-bold text-[#222529]">240</p>
                    <span className="text-sm font-[400] text-[#595564]">Users</span>
                </div>
            </div>
            <div className="grid gap-3 w-30">
                <div className="flex text-[#595564] items-center justify-between">
                    <p className="flex text-[#595564] items-center gap-1">
                        <i className="rounded-full w-2 h-2 bg-[#62B2FD]" />
                        <span className="text-[12px] font-[400]">Students</span>
                    </p>
                    <p className="text-sm font-bold">200</p>
                </div>
                <div className="flex text-[#595564] items-center justify-between">
                    <p className="flex text-[#595564] items-center gap-1">
                        <i className="rounded-full w-2 h-2 bg-[#9BDFC4]" />
                        <span className="text-[12px] font-[400]">Mentors</span>
                    </p>
                    <p className="text-sm font-bold">8</p>
                </div>
                <div className="flex text-[#595564] items-center justify-between">
                    <p className="flex text-[#595564] items-center gap-1">
                        <i className="rounded-full w-2 h-2 bg-[#F99BAB]" />
                        <span className="text-[12px] font-[400]">Programs</span>
                    </p>
                    <p className="text-sm font-bold">22</p>
                </div>
                <div className="flex text-[#595564] items-center justify-between">
                    <p className="flex text-[#595564] items-center gap-1">
                        <i className="rounded-full w-2 h-2 bg-[#FFB44F]" />
                        <span className="text-[12px] font-[400]">Others</span>
                    </p>
                    <p className="text-sm font-bold">12</p>
                </div>
            </div>
        </div>
    );
}
