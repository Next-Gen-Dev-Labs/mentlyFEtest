/** @format */

'use client';

import { MoreHorizontal } from 'lucide-react';
import React from 'react';

interface Activity {
	id: number;
	type: string;
	description: string;
	time: string;
	icon: string;
	iconBg: string;
}

const activities: Activity[] = [
	{
		id: 1,
		type: 'KYC Verification',
		description: '45 new persons just signed up on Mentity.',
		time: '25 minutes ago',
		icon: '🔍',
		iconBg: 'bg-yellow-400',
	},
	{
		id: 2,
		type: 'New User Sign Up!',
		description: '45 new persons just signed up on Mentity.',
		time: '25 minutes ago',
		icon: '👤',
		iconBg: 'bg-gray-700',
	},
	{
		id: 3,
		type: 'Withdrawal Request',
		description: 'Mardian requested a withdrawal.',
		time: '25 minutes ago',
		icon: '💰',
		iconBg: 'bg-gray-300',
	},
];

export function RecentActivitiesSection() {
	return (
		<section className='bg-white rounded-lg shadow overflow-hidden flex-1 min-h-0'>
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
					Recent Activities
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

			<ul className='p-4 space-y-4'>
				{activities.map((activity) => (
					<li
						key={activity.id}
						className='flex items-center gap-4 p-2 border-b hover:bg-purple-50 rounded-md transition'>
						<div
							className={`${activity.iconBg} w-10 h-10 rounded-full flex items-center justify-center text-lg`}>
							{activity.icon}
						</div>
						<div className='flex-1 min-w-0'>
							<h3 className='text-sm font-medium text-gray-800'>
								{activity.type}
							</h3>
							<p className='text-xs text-gray-500'>{activity.description}</p>
							<p className='text-xs text-gray-400 mt-1'>{activity.time}</p>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
