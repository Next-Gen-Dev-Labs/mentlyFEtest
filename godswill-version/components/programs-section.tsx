/** @format */

'use client';

import { MoreHorizontal, Settings } from 'lucide-react';
import Image from 'next/image';
import { ChangeEvent, default as React, useState } from 'react';

interface Program {
	id: number;
	title: string;
	description: string;
	status: string;
	mentors?: number;
	hostedBy?: { name: string; avatar: string };
	image: string;
}

const programs: Program[] = [
	{
		id: 1,
		title: 'Fundamentals of User Interface & Experience',
		description:
			'This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach.',
		status: 'Bootcamp',
		mentors: 3,
		image: '/banner1.png?height=200&width=400',
	},
	{
		id: 2,
		title: 'Colour Hack Practical Group Call',
		description:
			'This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach.',
		status: 'Group Call',
		hostedBy: {
			name: 'Faith Okolo',
			avatar: '/npc1.png?height=40&width=40',
		},
		image: '/banner2.png?height=200&width=400',
	},
	{
		id: 3,
		title: 'Advanced Color Theory Workshop',
		description:
			'In-depth workshop covering advanced techniques in color usage and accessibility standards.',
		status: 'Group Call',
		hostedBy: { name: 'Self', avatar: '/npc2.png?height=40&width=40' },
		image: '/banner2.png?height=200&width=400',
	},
];

export function ProgramsSection() {
	const [filter, setFilter] = useState('Active');

	const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setFilter(e.target.value);
	};

	return (
		<section className='bg-white rounded-lg shadow-sm overflow-hidden h-full'>
			<header className='p-4 flex items-center justify-between border-b'>
				<h2 className='flex items-center gap-2 text-gray-500 font-medium'>
					<svg
						width='18'
						height='18'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M4 6H20M4 12H20M4 18H20'
							stroke='currentColor'
							strokeWidth={2}
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
					Programs
				</h2>
				<div className='flex items-center gap-3'>
					<button className='text-purple-600 text-sm font-medium'>
						See All
					</button>
					<button className='text-gray-500 hover:text-gray-700'>
						<MoreHorizontal className='h-5 w-5' />
					</button>
				</div>
			</header>

			<div className='p-4'>
				<div className='flex items-center justify-between mb-4'>
					<span className='text-sm text-gray-400'>Filter</span>
					<div className='relative'>
						<select
							value={filter}
							onChange={handleFilterChange}
							className='appearance-none bg-white border border-gray-300 rounded-md px-3 py-1 pr-8 text-sm'>
							<option>Active</option>
							<option>Completed</option>
							<option>Upcoming</option>
						</select>
						<div className='absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none'>
							<svg
								className='h-4 w-4 text-gray-500'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M19 9l-7 7-7-7'
								/>
							</svg>
						</div>
					</div>
				</div>

				<div className='space-y-4'>
					{programs.map((program) => (
						<div
							key={program.id}
							className='bg-white border border-slate-200 rounded-2xl py-4 px-3'>
							<div className='overflow-hidden rounded-xl border border-slate-100'>
								<div
									className='relative bg-cover rounded-xl bg-center h-28'
									style={{ backgroundImage: `url(${program.image})` }}>
									<div className='absolute inset-0 bg-black/25' />
									<div className='relative z-10 p-3 text-white'>
										<div className='flex justify-between items-start'>
											<h3 className='text-[1.4rem] capitalize font-bold'>
												{program.title}
											</h3>
											<Settings className='h-5 w-5 cursor-pointer hover:text-gray-300' />
										</div>
										<span
											className={`mt-1 inline-block font-bold text-[10px] px-3 py-0.5 rounded-full ${
												program.id === 1
													? 'bg-[#D4E0F3] text-[#0077FF]'
													: 'bg-[#D4F3D4] text-[#00B300]'
											}`}>
											<span
												className='w-3 h-3 rounded-full'
												style={{ backgroundColor: 'currentColor' }}></span>
											{program.status}
										</span>
									</div>
								</div>
							</div>

							<div className='p-4'>
								<p className='text-xs text-gray-600'>{program.description}</p>

								<div className='mt-4 flex items-center justify-between'>
									{program.mentors && (
										<div className='flex items-center'>
											<div className='flex -space-x-2'>
												{Array.from({ length: program.mentors }).map((_, i) => (
													<Image
														key={i}
														src={`/npc${i + 1}.png`}
														alt={`Npc ${i + 1}`}
														className='w-6 h-6 rounded-full bg-gray-200 border-2 border-white'
														width={24}
														height={24}
													/>
												))}
											</div>
											<span className='ml-2 text-xs text-gray-500'>
												Mentors
											</span>
										</div>
									)}

									{program.hostedBy && (
										<div className='flex items-center gap-2'>
											<img
												src={program.hostedBy.avatar}
												alt={program.hostedBy.name}
												className='w-6 h-6 rounded-full bg-gray-200 object-cover'
											/>
											<span className='text-xs text-gray-500'>
												Hosted by: {program.hostedBy.name}
											</span>
										</div>
									)}

									<div className='flex items-center gap-2 ml-auto'>
										<button className='px-3 py-2 text-xs border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50'>
											View Details
										</button>
										{program.id === 3 ? (
											<button className='px-3 py-2 text-xs bg-purple-600 text-white rounded-md hover:bg-purple-700'>
												Assign Mentor
											</button>
										) : (
											<button className='px-3 py-2 text-xs bg-purple-600 text-white rounded-md hover:bg-purple-700'>
												Analysis
											</button>
										)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
