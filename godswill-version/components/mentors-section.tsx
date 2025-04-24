/** @format */

'use client';

import { Menu, MoreHorizontal, Plus } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

interface Mentor {
	id: number;
	name: string;
	role: string;
	avatar?: string;
}

const mentors: Mentor[] = [
	{
		id: 1,
		name: 'Maxwell Smith',
		role: 'Product Designer',
		avatar: '/npc4.png',
	},
	{
		id: 2,
		name: 'Adeati Samuel',
		role: 'Product Designer',
		avatar: '/npc3.png',
	},
];

export function MentorsSection() {
	return (
		<section className='bg-white rounded-lg shadow-sm overflow-hidden min-h-0 flex-1'>
			<header className='p-4 flex items-center justify-between border-b'>
				<h2 className='flex items-center gap-2 text-gray-500 font-medium'>
					<Menu className='text-gray-600 h-5 w-6' />
					Mentors
				</h2>
				<div className='flex items-center gap-3'>
					<button className='w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100'>
						<Plus className='h-3 w-3 text-gray-500' />
					</button>
					<button className='text-gray-500 hover:text-gray-700'>
						<MoreHorizontal className='h-5 w-5' />
					</button>
				</div>
			</header>
			<ul className='p-4 space-y-4'>
				{mentors.map((mentor) => (
					<li
						key={mentor.id}
						className='flex items-center justify-between p-2 border-b mb-3  hover:bg-purple-50 rounded-md transition'>
						<div className='flex items-center gap-6'>
							<img
								src={mentor.avatar || '/placeholder.svg'}
								alt={mentor.name}
								className='w-10 h-10 rounded-full bg-gray-200 object-cover'
							/>
							<div>
								<h3 className='text-gray-800 font-medium'>{mentor.name}</h3>
								<p className='text-xs text-gray-500'>{mentor.role}</p>
							</div>
						</div>
						<Button className='px-4 py-1.5 text-sm rounded-full bg-purple-600 text-white hover:bg-purple-700'>
							Message
						</Button>
					</li>
				))}
			</ul>
			<div className='flex justify-between items-center'>
				<button className='w-full py-4 md:my-0 my-2  mx-6  bg-purple-100 text-purple-600 rounded-full text-sm font-medium hover:bg-purple-200 transition'>
					See All
				</button>
			</div>
		</section>
	);
}
