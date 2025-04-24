import React from 'react'
import Image from 'next/image'

const Applications = () => {
    const applicationItems = [
        {
            name: 'Maxwell Smith',
            picture: '/smith.svg',
            mail: 'maxwellsmith@gmail.com',
            role: 'mentor',
        },
        {
            name: 'Adeati Samuel',
            picture: '/samuel.svg',
            mail: 'maxwellsmith@gmail.com',
            role: 'student',
        },
        {
            name: 'Maxwell Smith',
            picture: '/smith.svg',
            mail: 'maxwellsmith@gmail.com',
            role: 'student',
        },
        {
            name: 'Adeati Samuel',
            picture: '/samuel.svg',
            mail: 'maxwellsmith@gmail.com',
            role: 'student',
        },
        {
            name: 'Maxwell Smith',
            picture: '/smith.svg',
            mail: 'maxwellsmith@gmail.com',
            role: 'student',
        },
        {
            name: 'Adeati Samuel',
            picture: '/samuel.svg',
            mail: 'maxwellsmith@gmail.com',
            role: 'student',
        },
    ];

    const renderApplications = (role) => (
        <div className="mt-7">
            <h2 className="text-[10px] font-semibold text-[#7D8DA6] mb-2">
                {role === 'mentor' ? 'Mentors' : 'Students'}
            </h2>
            {
                applicationItems.filter(app => app.role === role).map((app, index) => (
                    <div key={index} className="flex flex-col gap-2 p-3 border-b border-[#DBDBDB]">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" />
                                <Image src={app.picture} alt={app.name} width={0} height={0} sizes="100vw" className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] rounded-full" />
                                <div>
                                    <h3 className="text-xs md:text-sm font-bold text-[#4F4F4F]">{app.name}</h3>
                                    <p className="text-[#7D8DA6] text-[8px] md:text-[10px]">{app.mail}</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="text-[#D83535] border border-[#D09696] px-1 py-0.5 md:px-3 md:py-1 text-[8px] md:text-xs rounded-md bg-[#FFEDED]">Reject</button>
                                <button className="bg-[#6F01D0] text-white px-1 py-0.5 md:px-3 md:py-1 text-[8px] md:text-xs rounded-md">Accept</button>
                            </div>
                        </div>

                        {/* Detail Tags */}
                        <div className={`gap-1 ml-2 items-center justify-between ${role === 'mentor' ? 'flex' : 'hidden'}`}>
                            <p className="bg-[#F3ECF9] text-[#9985A7] border-1 border-[#DDCEEE] px-1.5 py-[2px] text-[5px] md:text-[8.65px] rounded-md">Product Designer</p>
                            <p className="bg-[#E8FDFB] text-[#58948E] border-1 border-[#A1BDBA] px-1.5 py-[2px] text-[5px] md:text-[8.65px] rounded-md">4years Experience</p>
                            <p className="bg-[#E3ECF9] text-[#8196B5] border-1 border-[#ABBEE0]  px-1.5 py-[2px] text-[5px] md:text-[8.65px] rounded-md flex items-center gap-1">
                                <span><Image src='/nigeria.svg' alt='nigeria-flag' width={0} height={0} sizes="100vw" className="w-[9px] h-[9px] md:w-[12px] md:h-[12px]" /></span> Lagos, Nigeria
                            </p>
                            <p className="bg-[#F4F4F4] text-[#595564] border-1 border-[#C8C8C8] px-1.5 py-[2px] text-[5px] md:text-[8.65px] rounded-md">GMT +1</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );

    return (
        <div className='lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-5 p-4 shadow-md bg-white rounded-md max-h-[44.3rem] md:mt-[40rem] lg:mt-0 h-full'>
            <div className="flex justify-between items-center">
                <Image src="/menu.svg" alt="Menu" width={16} height={16} />

                <div className="flex items-center gap-[4rem] md:gap-[7rem] lg:gap-[9rem]">
                    <h1 className="text-left text-[#B0B0B0] text-base font-bold">Applications</h1>
                    <button className="font-semibold text-xs text-[#6F01D0]">See All</button>
                </div>

                <Image src="/more.svg" alt="More" width={18} height={18} />
            </div>

            {renderApplications('mentor')}
            {renderApplications('student')}
        </div>
    )
}

export default Applications
