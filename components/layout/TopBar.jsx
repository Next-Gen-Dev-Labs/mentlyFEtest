

export default function TopBar({ onManageWidgets }) {
    const activeClass = "bg-[#E3D7FF] p-1 rounded-[2px] outline-1 outline-[#6F01D0]";
    return (
        <>
            <header className="flex items-center justify-end px-10 py-6 bg-white ">
                <div className="flex items-center gap-4">


                {/* Icons */}
                    <button className="relative text-gray-600 hover:text-purple-600 mr-12 cursor-pointer">
                        <img src="/images/notification.svg" alt="notification"  />
                        <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>


                {/* Avatar */}
                <div className="flex items-center justify-between cursor-pointer gap-2">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-[#8B72FC]">
                        <img
                            src="/images/user-pic.svg"
                            alt="User Avatar"
                            className="w-8 object-cover"
                        />
                    </div>

                    <div >
                        <p className="text-[#404040] text-sm font-semibold">Techrity  Foun...</p>
                        <p className="text-[#53547B] text-xs">Member</p>
                    </div>

                    <div className="w-8 h-8 relative ml-2">
                        <div className="w-6 h-6 bg-[#6F01D0] rounded-md "/>
                        <img src="/images/drop_down.svg" alt="Drop down" className="w-5 absolute bottom-0 right-2" />
                    </div>
                </div>


                </div>
            </header>

            <div className="flex justify-end items-center gap-6 my-5 mr-10">

                <div className="flex items-center gap-6">
                    <div className="cursor-pointer">
                        <img src="/images/filter-list.svg" alt="search" className="h-6" />
                    </div>
                    <div className={`${activeClass} cursor-pointer`}>
                        <img src="/images/filter-pic.svg" alt="search" className="h-6" />
                    </div>

                </div>

                {/* Manage Widgets Button */}

                <button
                    onClick={onManageWidgets}
                    className="text-[#1F0954] font-bold cursor-pointer"
                >
                    Manage Widgets
                </button>

                {/* Icons */}

            </div>
        </>

    );
}
