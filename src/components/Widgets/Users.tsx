
export default function Users() {
    return (
        <div className="mt-4 p-4 h-full flex items-center gap-2 justify-between">
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">All Users</span>
                <span className="text-xs text-gray-500">5 online</span>
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
