'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const Programs = () => {
    const [filter, setFilter] = useState('all')

    const programItems = [
        {
            title: 'Fundamentals of User interface & Experience',
            theme: '• Bootstrap',
            content: 'This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach',
            host: 'Mentors',
            image: '/banner.svg',
            hostImg: '/host 2.svg'
        },
        {
            title: 'Colour Hack Practical Group Call',
            theme: '• Group Call',
            content: 'This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach',
            host: 'Hosted By: Faith Okolo',
            image: '/bannerr.svg',
            hostImg: '/host 2.svg'
        },
        {
            title: 'Colour Hack Practical Group Call',
            theme: '• Group Call',
            content: 'This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach',
            host: 'Hosted By: Self',
            image: '/bannerr.svg',
            hostImg: '/host 2.svg'
        },
    ]

    const filteredPrograms = programItems.filter((item) => {
        if (filter === 'all') return true
            return item.theme.toLowerCase().includes(filter.toLowerCase())
    })

    return (
        <div className="col-start-1 col-end-2 row-start-1 row-end-3 p-4">

            <div className="flex justify-between items-center">
                <Image src="/menu.svg" alt="Menu" width={16} height={16} />

                <div className="flex items-center gap-[190px]">
                    <h1 className="text-left text-[#B0B0B0] text-base font-bold">Programs</h1>
                    <button className="font-semibold text-xs text-[#6F01D0]">See All</button>
                </div>

                <Image src="/more.svg" alt="More" width={18} height={18} />
            </div>


            <div className="my-5 flex justify-end items-center">
                <label className="text-[11.26px] font-medium text-[#918C9C]">
                    Filter
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="ml-2 border border-gray-300 rounded px-2 py-1 text-[11.26px] font-medium text-[#595564]"
                    >
                        <option value="all">All</option>
                        <option value="bootstrap">Bootstrap</option>
                        <option value="group call">Group Call</option>
                    </select>
                </label>
            </div>


            <div className="grid gap-4">
                {filteredPrograms.map((item, index) => {
                    const { title, theme, content, image, hostImg, host } = item

                    return (
                        <div
                            key={index}
                            className="shadow-md p-4 mb-2 rounded bg-white border border-gray-100"
                        >
                            <div className="relative">
                                <Image
                                    src={image}
                                    alt="program banner"
                                    width={265}
                                    height={70}
                                    className="w-full h-auto rounded"
                                />
                                <div className="absolute bottom-4 left-4">
                                    <p className='font-bold text-base my-0.5 text-white break-normal leading-[1.3rem]'>{title}</p>
                                    <p className={`text-[8px] font-bold mt-1 px-2 py-0.5 w-fit rounded-full ${item.theme==='• Bootstrap'? 'text-[#0077FF] bg-[#D4E0F3]' : 'text-[#008000] bg-[#D4F3D4]'}`}>
                                        {theme}
                                    </p>
                                </div>
                            </div>

                            <p className="text-xs mt-3">{content}</p>

                            <div className="flex justify-between items-center mt-4">
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={hostImg}
                                        alt="host"
                                        width={24}
                                        height={24}
                                        className="rounded-full"
                                    />
                                    <span className="text-[10px] text-gray-800">{host}</span>
                                </div>

                                <div className="flex gap-2">
                                    <button className="text-xs text-[#6F01D0] border border-[#6F01D0] px-3 py-1 rounded hover:bg-[#6F01D0] hover:text-white transition">
                                        View Details
                                    </button>
                                    <button className="text-xs bg-[#6F01D0] text-white border border-[#6F01D0] px-3 py-1 rounded transition">
                                        Analysis
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Programs
