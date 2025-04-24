"use client"

import Image from "next/image"
import { ProgramData, 
        userData, 
        GroupData, 
        SmithData, 
        studentData,
        Mentors,
        Activities } from "../config/data"

export default function Dashboard () {
    return (
        <>
        <div className="w-full px-4">
            <div className="flex justify-end w-full sm:w-[98%] mt-16 gap-2 mr-6 font-bold text-[16px] py-2">
                <Image 
                    src={'/widget.svg'}
                    alt="widget"
                    width={24}
                    height={18}
                />
                Manage Widget
            </div>
            <div className="h-full w-full mt-4 mx-auto max-w-[1070px]">
                <div className="bg-purple1 flex flex-col sm:flex-row justify-evenly items-center py-4 rounded-md">
                    <h1 className="text-white text-[26px] font-semibold">
                        Welcome Aboard, Blessing 👋
                    </h1>
                    <p className="text-white2">
                        We're thrilled to have you join Techrity Team!
                    </p>
                    <button className="bg-white py-3 px-3 rounded-lg font-semibold mt-4 sm:mt-0">
                        Update Profile
                    </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                    {/* Programs and Users */}
                    <div className="w-full sm:w-auto">
                        <div className="h-auto sm:h-[604px] w-full sm:w-[329px] bg-white my-4 rounded-md">
                            <div className="flex justify-between px-2 py-3 items-center">
                                <div className="flex gap-2 items-center">
                                    <div className="h-[16px] w-[16px]">
                                        <Image 
                                            src={'/bar.svg'}
                                            alt="bar"
                                            width={10}
                                            height={9}
                                            className="cursor-pointer items-center"
                                        />
                                    </div>
                                    <p className="text-white2 text-sm">Programs</p>
                                </div>
                                <div className="flex gap-3 text-purple2 font-semibold text-[12px] cursor-pointer">
                                    See all
                                    <Image 
                                        src={'/dot.svg'}
                                        alt="bar"
                                        width={10}
                                        height={9}
                                    />
                                </div>
                            </div>

                            <div className="flex gap-2 justify-end text-[11px] pr-4 text-white3">
                                <p>Filter</p>
                                <div className="flex gap-2">
                                    Active
                                    <Image 
                                        src={'/drop.svg'}
                                        alt="bar"
                                        width={10}
                                        height={9}
                                    />
                                </div>
                            </div>

                            <div className="w-full sm:w-[291px] h-[500px] mx-auto overflow-y-auto scrollable">
                                {ProgramData.map((items, index) => (
                                    <div key={index} className="w-full sm:w-[295px] bg-white py-2 px-4 my-4 h-[300px] sm:h-[210px] rounded-md shadow-md shadow-black">
                                        <div 
                                            style={{
                                                backgroundImage: `url(${items.image})`,
                                                backgroundPosition: 'center', 
                                                backgroundSize: 'cover', 
                                                height: '69.8px'
                                            }} 
                                            className="rounded-lg w-full"
                                        >
                                            <h1 className="font-semibold text-[16.42px] leading-[100%] text-white w-full sm:w-[224px] h-[40px] py-2 px-3">
                                                {items.name}
                                            </h1>
                                            <p className="py-1 px-2 w-auto sm:w-[59px] text-[6px] rounded-full text-center ml-2 mt-2 font-bold" 
                                               style={{background: items.bgColor, color: items.color}}>
                                                {items.boot}
                                            </p>
                                        </div>
                                        <p className="w-full sm:w-[270px] text-[11px] my-2">
                                            {items.text}
                                        </p>
                                        <div className="flex items-center justify-between mt-1 gap-1">
                                            <div className="flex gap-1 items-center">
                                                <Image 
                                                    src={items.avatars}
                                                    alt="avatars"
                                                    width={33}
                                                    height={19}
                                                /> 
                                                <p className="text-[8.34px] my-2 font-medium">
                                                    {items.authors}
                                                </p>
                                            </div>

                                            <div className="flex text-[8px] gap-2">
                                                <button className="border-2 border-purple1 text-purple1 py-2 px-1 rounded-md">
                                                    {items.buttontext1}
                                                </button>
                                                <button className="bg-purple1 text-white1 py-2 px-3 rounded-md">
                                                    {items.buttontext2}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="h-auto sm:h-[320px] w-full sm:w-[329px] bg-grey1">
                            <div className="flex justify-between h-18 px-4 items-center border-b-2 border-b-border1">
                                <h2 className="text-grey3 font-semibold">Users</h2>
                                <div className="flex gap-3 border-b-4 border-border1 py-2 px-2 rounded-sm">
                                    All
                                    <Image 
                                        src={'/drop.svg'}
                                        alt="drop"
                                        width={21}
                                        height={21}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-4 p-4">
                                <Image 
                                    src={'/donut.svg'}
                                    alt="donut"
                                    width={180}
                                    height={180}
                                />
                                <div>
                                    {userData.map((items, index) => (
                                        <div key={index} className="flex items-center gap-4 font-medium text-grey3">
                                            <div className="w-[8px] h-[8px] rounded-full" style={{background: items.color}}></div>
                                            <p>{items.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Group Calls, Applications, and Mentors */}
                    <div className="w-full sm:w-auto flex flex-col gap-4">
                        <div className="h-auto sm:h-[320px] w-full sm:w-[720px] bg-white my-4 rounded-lg">
                            <div className="flex justify-between px-2 py-3 items-center">
                                <div className="flex gap-2 items-center">
                                    <div className="h-[16px] w-[16px]">
                                        <Image 
                                            src={'/bar.svg'}
                                            alt="bar"
                                            width={10}
                                            height={9}
                                            className="cursor-pointer"
                                        />
                                    </div>
                                    <p className="text-white2 text-md font-semibold">Group Calls</p>
                                </div>
                                <div className="flex gap-3 text-purple2 font-semibold text-[12px] cursor-pointer">
                                    See all
                                    <Image 
                                        src={'/dot.svg'}
                                        alt="bar"
                                        width={10}
                                        height={9}
                                    />
                                </div>
                            </div>
                            {/* Using responsive grid column classes */}
                            <div className="scrollable grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2 overflow-x-auto">
                                {GroupData.map((items, index) => (
                                    <div key={index} className="bg-grey2 w-full sm:w-[244px] rounded-lg px-2 py-2">
                                        <div 
                                            style={{
                                                backgroundImage: `url(${items.image})`,
                                                backgroundPosition: 'center', 
                                                backgroundSize: 'cover', 
                                                height: '69.8px'
                                            }} 
                                            className="rounded-lg w-full"
                                        ></div>
                                        <p className="py-1 px-3 rounded-full text-[9px] w-auto sm:w-[69px] my-1" 
                                           style={{background: items.bgColor, color: items.color}}>
                                            {items.boot}
                                        </p>
                                        <h2 className="text-grey3 text-[16px] w-full sm:w-[244px] border-b mb-1 border-grey">
                                            {items.name}
                                        </h2>

                                        <div className="text-grey3 flex text-[10px] justify-between">
                                            <p>{items.date}</p>
                                            <p>{items.time}</p>
                                        </div>

                                        <div className="flex text-grey3 text-[8px] items-center gap-2 my-2">
                                            <Image 
                                                src={items.avatars}
                                                alt="avatars"
                                                width={20}
                                                height={20}
                                            />
                                            <p>{items.authors}</p>
                                        </div>

                                        <div className="text-white flex text-[10px] justify-between">
                                            <button className="border border-purple1 text-purple1 py-1 px-1 rounded-lg">
                                                {items.buttontext1}
                                            </button>
                                            <button className="bg-purple1 py-1 px-2 rounded-lg flex gap-2 items-center">
                                                {items.buttontext2}
                                                <Image 
                                                    src={'/arrow.svg'}
                                                    alt="arrow"
                                                    width={21}
                                                    height={21}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Applications and Mentors */}
                        <div className="flex flex-col md:flex-row gap-2">
                            <div className="h-auto sm:h-[605px] w-full md:w-[431px] bg-white my-4">
                                <div className="flex justify-between px-2 py-3 items-center">
                                    <div className="flex gap-2 items-center">
                                        <div className="h-[16px] w-[16px]">
                                            <Image 
                                                src={'/bar.svg'}
                                                alt="bar"
                                                width={10}
                                                height={9}
                                                className="cursor-pointer items-center"
                                            />
                                        </div>
                                        <p className="text-white2 text-sm font-semibold">Applications</p>
                                    </div>
                                    <div className="flex gap-3 text-purple2 font-semibold text-[12px] cursor-pointer">
                                        See all
                                        <Image 
                                            src={'/dot.svg'}
                                            alt="bar"
                                            width={10}
                                            height={9}
                                        />
                                    </div>
                                </div>
                                
                                <div className="w-full sm:w-[399px] h-auto mx-auto my-3 border-b border-b-grey3">
                                    <h1>Mentors</h1>
                                    <div className="w-full sm:w-[391px] h-auto mx-auto flex flex-col sm:flex-row items-center gap-4">
                                        <div className="w-full sm:w-[203px] h-auto flex items-center gap-2">
                                            <input type="checkbox" name="" id="" />
                                            <Image 
                                                src={'/max.svg'}
                                                alt="image"
                                                width={32}
                                                height={32}
                                            />
                                            <div className="w-full sm:w-[120px] h-auto">
                                                <h1 className="w-full sm:w-[104px] h-auto text-sm">
                                                    Maxwell Smith
                                                </h1>
                                                <p className="text-[10px]">
                                                    maxwellsmith@gmail.com
                                                </p>
                                            </div>
                                        </div>

                                        <div className="w-full sm:w-[166.77px] h-auto flex items-center gap-1">
                                            <button className="py-2 px-4 bg-pink2 text-pink3 border border-pink4 rounded-lg">
                                                Reject
                                            </button>
                                            <button className="py-2 px-4 bg-purple1 text-white rounded-lg">
                                                Accept
                                            </button>
                                        </div>
                                    </div>

                                    <div className="h-auto my-4">
                                        {SmithData.map((items, index) => (
                                            <div key={index} className="flex flex-wrap text-[8px] justify-evenly">
                                                <p className="bg-pink4 py-1 px-2 rounded-sm">
                                                    {items.name}
                                                </p>
                                                <p className="bg-blue2 py-1 px-2 rounded-sm">
                                                    {items.exp}
                                                </p>
                                                <p className="flex gap-2 bg-orange1 py-1 px-2 rounded-sm">
                                                    <Image 
                                                        src={items.image}
                                                        alt="image"
                                                        width={12.78}
                                                        height={7.78}
                                                    /> 
                                                    {items.country}
                                                </p>
                                                <p className="bg-pink1 py-1 px-2 rounded-sm">
                                                    {items.time}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="w-full sm:w-[399px] h-auto mx-auto mt-3 pt-4">
                                        <h1>Students</h1>
                                        <div>
                                            {studentData.map((items, index) => (
                                                <div key={index} className="flex flex-col sm:flex-row items-center justify-around my-10">
                                                    <div className="flex items-center gap-2">
                                                        <input type="checkbox" name="" id="" />
                                                        <Image 
                                                            src={items.image}
                                                            alt="image"
                                                            width={32}
                                                            height={32}
                                                        />
                                                        <div className="w-full sm:w-[120px] h-auto">
                                                            <h1 className="w-full sm:w-[104px] h-auto text-sm font-bold text-gray">
                                                                {items.name}
                                                            </h1>
                                                            <p className="text-[10px] text-gray">
                                                                {items.email}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="w-full sm:w-[166.77px] h-auto flex items-center gap-1 mt-2 sm:mt-0">
                                                        <button className="py-2 px-4 bg-pink2 text-pink3 border border-pink4 rounded-lg">
                                                            Reject
                                                        </button>
                                                        <button className="py-2 px-4 bg-purple1 text-white rounded-lg">
                                                            Accept
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mentors and Recent Activities */}
                            <div className="h-auto sm:h-[605px] w-full md:w-[300px] my-4">
                                <div className="h-auto sm:h-[272px] bg-white my-2 rounded-md">
                                    <div className="flex justify-between px-2 py-3 items-center">
                                        <div className="flex gap-2 items-center">
                                            <div className="h-[16px] w-[16px]">
                                                <Image 
                                                    src={'/bar.svg'}
                                                    alt="bar"
                                                    width={10}
                                                    height={9}
                                                    className="cursor-pointer items-center"
                                                />
                                            </div>
                                            <p className="text-white2 text-sm">Programs</p>
                                        </div>
                                        <div className="flex gap-3 text-purple2 font-semibold text-[12px] cursor-pointer">
                                            See all
                                            <Image 
                                                src={'/dot.svg'}
                                                alt="bar"
                                                width={10}
                                                height={9}
                                            />
                                        </div>
                                    </div>

                                    <div className="h-auto sm:h-[120px] w-full">
                                        {Mentors.map((items, index) => (
                                            <div className="flex items-center mx-4 py-2" key={index}>
                                                <div className="w-full sm:w-[165px] h-auto flex items-center gap-2">
                                                    <Image 
                                                        src={items.image}
                                                        alt="image"
                                                        width={32}
                                                        height={32}
                                                    />
                                                    <div className="w-full sm:w-[120px] h-auto">
                                                        <h1 className="w-full sm:w-[104px] h-auto text-[12px] font-bold text-gray">
                                                            {items.name}
                                                        </h1>
                                                        <p className="text-[10px] text-gray">
                                                            {items.message}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="py-2 px-6 bg-purple1 text-white text-[12px] rounded-full">
                                                    {items.message}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="px-4 py-2 bg-purple-300 w-full sm:w-[264px] h-auto rounded-full text-center text-purple2 font-bold my-6 mx-auto">
                                        See all
                                    </div>
                                </div>

                                <div className="h-[400px] sm:h-[272px] bg-white my-2 rounded-md">
                                    <div className="flex justify-between px-2 py-3 items-center">
                                        <div className="flex gap-2 items-center">
                                            <div className="h-[16px] w-[16px]">
                                                <Image 
                                                    src={'/bar.svg'}
                                                    alt="bar"
                                                    width={10}
                                                    height={9}
                                                    className="cursor-pointer items-center"
                                                />
                                            </div>
                                            <p className="text-white2 text-sm">Recent Activities</p>
                                        </div>
                                        <div className="flex gap-3 text-purple2 font-semibold text-[12px] cursor-pointer">
                                            See all
                                            <Image 
                                                src={'/dot.svg'}
                                                alt="bar"
                                                width={10}
                                                height={9}
                                            />
                                        </div>
                                    </div>

                                    <div className="h-[400px] sm:h-[120px] w-full">
                                        {Activities.map((items, index) => (
                                            <div key={index} className="flex flex-col sm:flex-row items-center mx-4 my-2 py-2">
                                                <div className="flex items-center gap-2">
                                                    <Image 
                                                        src={items.image}
                                                        alt="image"
                                                        width={32}
                                                        height={32}
                                                    />
                                                    <div className="w-full sm:w-[238px] h-auto">
                                                        <h1 className="w-full sm:w-[104px] h-auto text-[12px] font-bold text-gray">
                                                            {items.name}
                                                        </h1>
                                                        <p className="text-[10px] text-gray">
                                                            {items.title}
                                                        </p>
                                                        <p className="text-[10px] text-gray">
                                                            {items.time}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}