

export default function DashboardCards({title, children, mentors}) {
    return (
        <div
            className="bg-white rounded-xl p-4 shadow-sm h-full flex flex-col"
        >
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                    <img src="/images/menu.svg" alt="menu"  />
                    <p className="text-[#B0b0b0] font-bold">{title}</p>
                </div>

                <div className="flex items-center gap-3">
                    { mentors ?
                        <div className="border border-[#9D92A6] w-6 h-6 flex items-center justify-center rounded-full cursor-pointer" >
                            <p className="text-sm text-[#9D92A6]">+</p>
                        </div>
                        :
                        <a href="#" className="text-[#6F01D0] font-semibold">See all</a> 
                    }
                    <img src="/images/hori-menu.svg" alt="horizontal menu" className="cursor-pointer" />
                </div>
            </div>

            <div className="flex-1  mt-2 custom-scrollbar" style={{ height: 'calc(100% - 40px)' }}>
                {children}
            </div>
        </div>
    );
}
