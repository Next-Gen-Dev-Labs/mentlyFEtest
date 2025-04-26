
import Link from 'next/link';
import Image from 'next/image';
import { Title, SeeAll, Program } from './ui/dashboard/modules';
import { FaCircle } from 'react-icons/fa';

export default function Page() {

    return (
        <>
            <div className="flex justify-end lg:gap-4 text-grey2 my-2">
                <Image src="/vector.svg" alt="" height={24} width={24} />
                <Image src="/gallery.svg" alt="" height={24} width={24} />
                <button className='text-base text-purple font-bold p-0 '>Manage Widgets</button>
            </div>
            
            {/**WELCOME USER               WELCOME USER             WELCOME USER            WELCOME USER */}
            <div className="bg-purple lg:px-8 py-2 flex items-center justify-between font-semibold rounded-md text-grey">
                <h2 className='text-white lg:text-2xl'>Welcome Aboard, Blessing 👋</h2>
                <p className='text-lg'>We&apos;re thrilled to have you join Techrity Team!</p>
                <button className='bg-white text-purple rounded-lg px-6 py-2 hover:bg-light-purple'>Update Profile</button>
            </div>

            {/**MAIN CONTENT           MAIN CONTENT          MAIN CONTENT       MAIN CONTENT*/}
            <div className="my-2.5 lg:flex gap-2.5">

                {/**LEFT SECTION          LEFT SECTION          LEFT SECTION        LEFT SECTION  */}
                <div className='lg:w-1/4 rounded-md'>
                    <div className="bg-white rounded-lg lg:h-[60vh] overflow-y-scroll" id="programs">
                        <div className='flex justify-between pr-0 py-2 px-3'>
                            <Title text="Programs" />
                            <SeeAll />
                        </div>

                        <div className='flex justify-end px-4'>
                            <div className='flex items-center gap-4'>
                                <p className='font-normal text-grey text-md'>Filter</p>
                                <select className='text-grey2 text-md border rounded-md p-2'>
                                    <option value="active">Active</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 px-4 pb-8 ">
                            <Program user1="/user1.png" u1c="" u2c="" u3c="mr-2" user2="/user2.png" user3="/user3.png" ftImg="/program2.jpg"
                                title="Fundamentals of User interface & Experience" tag="Bootcamp" tagColor="bg-blue text-blue"
                                text="This  program is a hands-on guide designed for designers who want to master 
                                color theory and confidently apply it to their designs. This practical approach"
                                facilitators="Mentors"
                            />

                            <Program user1="/user1.png" u1c="hidden" u2c="hidden" u3c="w-[30px]" user2="/user2.png" user3="/user2.png" ftImg="/program1.jpg"
                                title="Colour Hack Practical Group Call" tag="Group Call" tagColor="bg-green text-green"
                                text="This  program is a hands-on guide designed for designers who want to master 
                                color theory and confidently apply it to their designs. This practical approach"
                                facilitators="Hosted By: Self"
                            />

                            <Program user1="/user1.png" u1c="hidden" u2c="hidden" u3c="w-[30px]" user2="/user2.png" user3="/user2.png" ftImg="/program1.jpg"
                                title="Colour Hack Practical Group Call" tag="Group Call" tagColor="bg-green text-green"
                                text="This  program is a hands-on guide designed for designers who want to master 
                                color theory and confidently apply it to their designs. This practical approach"
                                facilitators="Hosted By: Self"
                            />
                        </div>
                    </div>

                    <div className='rounded-xl mt-4 border border-gray-300 bg-l-purple'>
                        <div className="py-2 px-5 border-b border-gray-300 flex justify-between items-center">
                            <h3 className='text-grey2 font-semibold'>Users</h3>
                            <select className='text-grey2 text-md border border-gray-300 rounded-md p-2 bg-transparent border border-gray-400 rounded-md'>
                                <option value="active">Active</option>
                            </select>
                        </div>

                        <div className='px-3 py-8 flex items-center gap-4'>
                            <Image src="/donut.png" alt="" height={180} width={180} 
                            className="w-1/2 h-auto" />

                            <div className='w-1/2 flex flex-col gap-2'>
                                <div className='flex justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <FaCircle className='text-sm text-[#62B2FD]' />
                                        <p className='text-sm text-grey2 '>Students</p>
                                    </div>
                                    <p className='text-md font-semibold text-grey2'>200</p>
                                </div>

                                <div className='flex justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <FaCircle className='text-sm text-[#9BDFC4]' />
                                        <p className='text-sm text-grey2 '>Mentors</p>
                                    </div>
                                    <p className='text-md font-semibold text-grey2'>8</p>
                                </div>

                                <div className='flex justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <FaCircle className='text-sm text-[#F99BAB]' />
                                        <p className='text-sm text-grey2 '>Programs</p>
                                    </div>
                                    <p className='text-md font-semibold text-grey2'>22</p>
                                </div>

                                <div className='flex justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <FaCircle className='text-sm text-[#FFB44F]' />
                                        <p className='text-sm text-grey2 '>Others</p>
                                    </div>
                                    <p className='text-md font-semibold text-grey2'>10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/**RIGHT  SECTION                 RIGHT. SECTION                  RIGHT SECTION */}

                <div className='lg:w-3/4'>
                    {/**TOP SECTION        TOP SECTION              TOP SECTION           */}
                    <div className='bg-white w-full h-2/6 rounded-lg pr-0 py-2 px-3' id="groupCalls">
                        <div className='flex justify-between'>
                            <Title text="Group Calls" />
                            <SeeAll />
                        </div>
                    </div>

                    {/**BOTTOM SECTION              BOTTOM SECTION              BOTTOM SECTION  */}
                    <div className="mt-6 lg:flex gap-2.5 w-full h-3/6">

                        {/**    LEFT          LEFT          LEFT              LEFT        LEFT */}
                        <div className='lg:w-3/5 bg-white rounded-lg h-full pr-0 py-2 px-3' id="applications">
                            <div className='flex justify-between'>
                                <Title text="Applications" />
                                <SeeAll />
                            </div>
                        </div>

                        {/**RIGHT         RIGHT          RIGHT           RIGHT           RIGHT */}
                        <div className='lg:w-2/5 rounded-lg flex flex-col gap-4 '>
                            <div className='bg-white h-1/2 pr-0 py-2 px-3' id="mentors">
                                <div className='flex justify-between'>
                                    <Title text="Mentors" />
                                    <SeeAll />
                                </div>
                            </div>

                            <div className='bg-white h-1/2 pr-0 py-2 px-3' id="recentActivities">
                                <div className='flex justify-between'>
                                    <Title text="Recent Activities" />
                                    <SeeAll />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}