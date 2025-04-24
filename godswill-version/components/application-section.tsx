/** @format */

'use client';

import { MoreHorizontal } from 'lucide-react';
import React, { useState } from 'react';

interface Application {
	id: number;
	name: string;
	email: string;
	role?: string;
	skills?: string;
	location?: string;
	timezone?: string;
	category?: string;
	avatar?: string;
}

const applications: Application[] = [
	{
		id: 1,
		name: 'Maxwell Smith',
		email: 'maxwellsmith@gmail.com',
		role: 'Product Designer',
		skills: '4 years Experience',
		location: 'Lagos, Nigeria',
		timezone: 'GMT +1',
		category: 'Mentors',
		avatar: '/npc4.png',
	},
	{
		id: 2,
		name: 'Adeati Samuel',
		email: 'adeatisamuel@gmail.com',
		category: 'Students',
		avatar: '/npc3.png',
	},
	{
		id: 3,
		name: 'Maxwell Smith',
		email: 'maxwellsmith@gmail.com',
		avatar: '/npc4.png',
	},
	{
		id: 4,
		name: 'Adeati Samuel',
		email: 'adeatisamuel@gmail.com',
		avatar: '/npc3.png',
	},
	{
		id: 5,
		name: 'Maxwell Smith',
		email: 'maxwellsmith@gmail.com',
		avatar: '/npc4.png',
	},
];

export function ApplicationsSection() {
	const [selectedIds, setSelectedIds] = useState<number[]>([]);

	const toggleSelection = (id: number) => {
		setSelectedIds((prev) =>
			prev.includes(id)
				? prev.filter((existing) => existing !== id)
				: [...prev, id]
		);
	};

	return (
		<div className='bg-white rounded-lg shadow-sm flex flex-col flex-1 h-[47rem]'>
			<div className='p-4 flex items-center justify-between border-b'>
				<h2 className='text-gray-500 font-medium'>Applications</h2>
				<div className='flex items-center gap-3'>
					<button className='text-purple-600 text-sm font-medium'>
						See All
					</button>
					<button className='text-gray-500'>
						<MoreHorizontal className='h-5 w-5' />
					</button>
				</div>
			</div>

			<div className='divide-y divide-gray-100'>
				<section className='p-4'>
					<h3 className='text-xs text-gray-500 mb-4'>Mentors</h3>
					<div className='space-y-8'>
						{applications
							.filter((app) => app.category === 'Mentors')
							.map((app) => (
								<div
									key={app.id}
									className='flex items-start hover:bg-purple-50 rounded-md p-2 transition'>
									<input
										type='checkbox'
										className='h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 mt-1'
										checked={selectedIds.includes(app.id)}
										onChange={() => toggleSelection(app.id)}
									/>
									<div className='flex-1 ml-3 flex flex-col justify-between'>
										<div className='flex justify-between'>
											<div className='flex items-center gap-3'>
												<img
													src={app.avatar || '/placeholder.svg'}
													alt={app.name}
													className='w-10 h-10 rounded-full bg-gray-200 object-cover'
												/>
												<div>
													<h4 className='text-gray-800 font-medium'>
														{app.name}
													</h4>
													<p className='text-xs text-gray-500'>{app.email}</p>
												</div>
											</div>

											<div className='flex items-center gap-2'>
												<button className='px-4 py-1.5 text-sm bg-red-300 text-red-500 border rounded-md border-red-400 hover:bg-red-100'>
													Reject
												</button>
												<button className='px-4 py-1.5 text-sm bg-purple-600 text-white rounded-md hover:bg-purple-700'>
													Accept
												</button>
											</div>
										</div>

										<div className='flex gap-2 mt-4 flex-wrap'>
											{app.role && (
												<span className='text-xs bg-purple-100 text-[#9985A7] px-2 py-1 rounded'>
													{app.role}
												</span>
											)}
											{app.skills && (
												<span className='text-xs bg-[#DDF0EE] text-[#58948E] px-2 py-1 rounded'>
													{app.skills}
												</span>
											)}
											{app.location && (
												<span className='text-xs bg-[#E4EAF9] text-[#8196B5] px-2 py-1 rounded'>
													{app.location}
												</span>
											)}
											{app.timezone && (
												<span className='text-xs bg-[#F4F4F4] text-gray-600 px-2 py-1 rounded'>
													{app.timezone}
												</span>
											)}
										</div>
									</div>
								</div>
							))}
					</div>
				</section>

				<section className='p-4 pt-15'>
					<h3 className='text-xs text-gray-500 mb-4'>Students</h3>
					<div className='space-y-10 divide-y divide-gray-300'>
						{applications
							.filter((app) => app.category === 'Students' || !app.category)
							.map((app) => (
								<div
									key={app.id}
									className='flex hover:bg-purple-50  justify-center items-center rounded p-2 transition'>
									<input
										type='checkbox'
										className='h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 mt-1'
										checked={selectedIds.includes(app.id)}
										onChange={() => toggleSelection(app.id)}
									/>
									<div className='flex-1 ml-3'>
										<div className='flex items-center gap-5'>
											<img
												src={app.avatar || '/placeholder.svg'}
												alt={app.name}
												className='w-10 h-10 rounded-full bg-gray-200 object-cover'
											/>
											<div>
												<h4 className='text-gray-800 font-medium'>
													{app.name}
												</h4>
												<p className='text-xs text-gray-500'>{app.email}</p>
											</div>
										</div>
									</div>
									<div className='flex items-center gap-2'>
										<button className='px-4 py-1.5 text-sm bg-red-50 text-red-500 border border-red-200 rounded hover:bg-red-100'>
											Reject
										</button>
										<button className='px-4 py-1.5 text-sm bg-purple-600 text-white rounded hover:bg-purple-700'>
											Accept
										</button>
									</div>
								</div>
							))}
					</div>
				</section>
			</div>
		</div>
	);
}
