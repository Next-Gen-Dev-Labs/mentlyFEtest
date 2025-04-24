/** @format */

'use client';

import {
	ArrowRight,
	Calendar,
	Clock,
	Menu,
	MoreHorizontal,
	Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Call {
	id: number;
	title: string;
	date: string;
	time: string;
	status: string;
	group: string;
	subgroup: string;
	mentors: string;
	headimg: string;
	subparticipants: number;
	image: string;
}

const calls: Call[] = [
	{
		id: 1,
		title: 'Weekly Meeting - Product Demo Review with Testers',
		date: 'Jul 30, 2024',
		time: '9:00 - 11:00 AM',
		status: 'Ongoing',
		group: 'UX Strategy Study Group',
		subgroup: 'Study Group',
		mentors: 'Mentors',
		subparticipants: 3,
		headimg: '/frame1.png',
		image: '/banner2.png?height=150&width=250',
	},
	{
		id: 2,
		title: 'Weekly Meeting - Product Demo Review with Testers',
		date: 'Jul 30, 2024',
		time: '9:00 - 11:00 AM',
		status: 'Upcoming',
		subgroup: 'Study Group',
		mentors: 'Mentors',
		group: 'UX Strategy Study Group',
		subparticipants: 3,
		headimg: '/frame1.png',
		image: '/banner3.png?height=150&width=250',
	},
	{
		id: 3,
		title: 'Weekly Meeting - Product Demo Review with Testers',
		date: 'Jul 30, 2024',
		time: '9:00 - 11:00 AM',
		status: 'Ongoing',
		group: 'UX Strategy Study Group',
		subgroup: 'Study Group',
		mentors: 'Mentors',
		subparticipants: 3,
		headimg: '/frame1.png',
		image: '/banner4.png?height=150&width=250',
	},
];

export function GroupCallsSection() {
	return (
		<div className='bg-white rounded-lg shadow overflow-hidden h-full md:h-[75vh]'>
			<div className='p-4 flex items-center justify-between border-b'>
				<h2 className='flex items-center gap-2 text-gray-500 font-medium'>
					<Menu className='text-gray-600 h-5 w-6' />
					Group Calls
				</h2>
				<div className='flex items-center gap-3'>
					<button className='text-purple-600 text-sm font-medium'>
						See All
					</button>
					<button className='text-gray-500'>
						<MoreHorizontal className='h-5 w-5' />
					</button>
				</div>
			</div>

			<div className='p-6'>
				<div className='grid grid-cols-1 md:grid-cols-3 justify-center gap-6'>
					{calls.map((call) => (
						<div
							key={call.id}
							className='rounded-lg overflow-hidden bg-[#F9F7FF]'>
							<div className='overflow-hidden rounded-xl border border-slate-100'>
								<div
									className='relative bg-cover rounded-xl m-3 bg-center h-28'
									style={{ backgroundImage: `url(${call.image})` }}></div>
							</div>

							<div className='px-3 pt-2'>
								<span
									className={
										`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ` +
										(call.status === 'Ongoing'
											? 'bg-green-100 text-green-800'
											: call.status === 'Upcoming'
											? 'bg-blue-100 text-blue-800'
											: 'bg-gray-100 text-gray-800')
									}>
									<span className='w-2 h-2 rounded-full bg-current'></span>
									{call.status}
								</span>
							</div>
							<div className='p-3'>
								<h3 className='font-medium text-sm'>{call.title}</h3>
								<div className='mt-2 flex justify-between items-center gap-2 text-xs text-gray-500'>
									<div className='flex items-center text-[#595564] gap-1'>
										<Calendar className='h-3 w-3' />
										<span>Mon, {call.date}</span>
									</div>
									<div className='flex items-center text-[#595564] gap-1'>
										<Clock className='h-3 w-3' />
										<span>{call.time}</span>
									</div>
								</div>
								<div className='mt-1 flex items-center gap-5 text-xs text-gray-500'></div>
								<div className='mt-2 flex items-center justify-between text-gray-500'>
									<span className=' text-[10px]'>{call.subgroup}</span>
									<span className=' text-[10px]'>{call.mentors}</span>
								</div>
								<div className='mt-2 flex items-center gap-1 text-xs justify-between text-gray-500'>
									<div className='flex items-center gap-1'>
										<div className='flex justify-end -space-x-1'>
											<Image
												src={call.headimg}
												alt='Head Image'
												className='rounded-full bg-gray-200 border-2 border-white'
												width={20}
												height={20}
											/>
										</div>
										<span className='font-bold'>{call.group}</span>
									</div>
									<div className='flex justify-end -space-x-1'>
										{Array.from({ length: call.subparticipants }).map(
											(_, i) => (
												<Image
													key={i}
													src={`/npc${i + 1}.png`}
													alt={`Npc ${i + 1}`}
													className='w-6 h-6 rounded-full bg-gray-200 border-2 border-white'
													width={24}
													height={24}
												/>
											)
										)}
									</div>
								</div>
								<div className='mt-3 flex gap-2'>
									<button className='flex-1 px-3 py-1 text-xs border border-purple-600 text-purple-600 rounded hover:bg-purple-50'>
										View Participants
									</button>
									<button className='flex-1 px-3 py-1 text-xs bg-purple-600 text-white rounded hover:bg-purple-700 flex items-center justify-center gap-1'>
										<span>Join Now</span>
										<ArrowRight className='h-3 w-3' />
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
