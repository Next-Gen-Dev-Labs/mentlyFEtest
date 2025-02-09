import Image from "next/image";


const RightCard = ({ userDate }) => {
  return (
    <section className="flex flex-col px-4 laptop:px-10 min-h-screen">
        <div className="hidden laptop:flex justify-end items-center text-[#809FB8] gap-2 py-10">
            <span className="font-normal text-sm">{userDate}</span>
            <span className="font-normal text-xs">(Local time)</span>
        </div>

        <div className="flex flex-col border border-[#D9E1E780] rounded-md p-4 mb-10 gap-5">
            <h2 className="text-2xl laptop:text-3xl text-[#1C1D4E] font-bold">Mentorship Program</h2>
            <Image 
                src={'/images/banner.png'}
                alt="banner image"
                width={1000}
                height={308}
                className="object-cover"
                priority={true}
            />

            <div className="flex flex-col tablet:flex-row gap-5 py-5">
                <p className="tablet:basis-1/2 laptop:pr-10 text-justify text-base leading-[18px] text-[#808080]">UI/UX Design check ins with faith is a way for beginners in UI/UX Design to get started about the fundamentals and how they can build a Design Career, share, document their progress on a weekly basis.</p>
                <div className="p-10 mx-auto laptop:mx-0 shadow-md rounded-md tablet:basis-1/2 flex flex-col gap-5 justify-center w-4/5 laptop:w-full">
                    <div className="flex gap-10">
                        <Image 
                            src={'/icons/briefcase.png'}
                            alt="briefcase icon"
                            width={1000}
                            height={1000}
                            className="object-cover size-6"
                        />
                        <p className="text-sm text-[#777795]">Mentorship Program</p>
                    </div>
                    <div className="flex gap-10">
                        <Image 
                            src={'/icons/calendar.png'}
                            alt="calender icon"
                            width={1000}
                            height={1000}
                            className="object-cover size-6"
                        />
                        <p className="text-sm text-[#777795]">21/4/2024-21/5/2024</p>
                    </div>
                    <div className="flex gap-10">
                        <Image 
                            src={'/icons/location.png'}
                            alt="location icon"
                            width={1000}
                            height={1000}
                            className="object-contain size-6"
                        />
                        <p className="text-sm text-[#777795]">In Person</p>
                    </div>
                </div>
            </div>


            <div className="flex flex-col bg-[#FFFAF2] border border-[#FEE0B1] rounded-xl p-4 gap-3">
                <h2 className="text-2xl text-[#1C1D4E] font-bold">Program Information Text</h2>
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center gap-2">
                        <div className="size-[34px] rounded-full bg-[#FFECCC] flex justify-center items-center">
                        <Image 
                            src={'/icons/vector1.png'}
                            alt="vector1 icon"
                            width={1000}
                            height={1000}
                            className="object-contain size-4"
                        />
                        </div>
                        <p className="text-sm text-[#595564]">Content</p>
                    </div> 
                    <div className="flex items-center gap-2">
                        <div className="size-[34px] rounded-full bg-[#FFECCC] flex justify-center items-center">
                        <Image 
                            src={'/icons/briefcase.png'}
                            alt="vector2 icon"
                            width={1000}
                            height={1000}
                            className="object-contain size-4"
                        />
                        </div>
                        <p className="text-sm text-[#595564]">Content</p>
                    </div> 
                    <div className="flex items-center gap-2">
                        <div className="size-[34px] rounded-full bg-[#FFECCC] flex justify-center items-center">
                        <Image 
                            src={'/icons/people.png'}
                            alt="vector3 icon"
                            width={1000}
                            height={1000}
                            className="object-contain size-4 rounded-full"
                        />
                        </div>
                        <p className="text-sm text-[#595564]">Content</p>
                    </div> 
                    <div className="flex items-center gap-2">
                        <div className="size-[34px] rounded-full bg-[#FFECCC] flex justify-center items-center">
                        <Image 
                            src={'/icons/note.png'}
                            alt="vector4 icon"
                            width={1000}
                            height={1000}
                            className="object-contain size-4 rounded-full"
                        />
                        </div>
                        <p className="text-sm text-[#595564]">Content</p>
                    </div> 
                    <div className="flex items-center gap-2">
                        <div className="size-[34px] rounded-full bg-[#FFECCC] flex justify-center items-center">
                        <Image 
                            src={'/icons/vector5.png'}
                            alt="vector5 icon"
                            width={1000}
                            height={1000}
                            className="object-contain size-4 rounded-full"
                        />
                        </div>
                        <p className="text-sm text-[#595564]">Content</p>
                    </div> 
                    <div className="flex items-center gap-2">
                        <div className="size-[34px] rounded-full bg-[#FFECCC] flex justify-center items-center">
                        <Image 
                            src={'/icons/vector6.png'}
                            alt="vector6 icon"
                            width={1000}
                            height={1000}
                            className="object-contain size-4 rounded-full"
                        />
                        </div>
                        <p className="text-sm text-[#595564]">Content</p>
                    </div> 
                </div>
            </div>

            <div className="flex flex-col bg-[#FFFAF2] border border-[#FEE0B1] rounded-xl p-4 gap-3 mb-20">
                <h2 className="text-2xl text-[#1C1D4E] font-bold mb-0 laptop:mb-2">Program Information Text 2</h2>
                <ul className="flex flex-col gap-2">
                    <li className="list-disc list-inside text-sm text-[#595564] font-semibold">Content</li>
                    <li className="list-disc list-inside text-sm text-[#595564] font-semibold">Content</li>
                    <li className="list-disc list-inside text-sm text-[#595564] font-semibold">Content</li>
                    <li className="list-disc list-inside text-sm text-[#595564] font-semibold">Content</li>
                    <li className="list-disc list-inside text-sm text-[#595564] font-semibold">Content</li>
                    <li className="list-disc list-inside text-sm text-[#595564] font-semibold">Content</li>
                </ul>
            </div>
        </div>

    </section>
  )
}

export default RightCard