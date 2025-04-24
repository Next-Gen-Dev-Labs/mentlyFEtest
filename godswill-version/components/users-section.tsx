/** @format */

'use client';

import React, { ChangeEvent, useState } from 'react';

interface UserData {
	total: number;
	students: number;
	mentors: number;
	programs: number;
	others: number;
}

const userData: UserData = {
	total: 240,
	students: 200,
	mentors: 8,
	programs: 22,
	others: 10,
};

export function UsersSection() {
	const [filter, setFilter] = useState<string>('All');

	const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setFilter(e.target.value);
	};

	const circumference = 2 * Math.PI * 40; // 40 is the circle radius

	const segment = (value: number) => (value / userData.total) * circumference;

	return (
		<section className='bg-white rounded-lg shadow-sm items-center justify-center overflow-hidden h-full'>
			<header className='p-4 flex items-center justify-between border-b'>
				<h2 className='text-gray-700 font-medium'>Users</h2>
				<div className='relative'>
					<select
						value={filter}
						onChange={handleFilterChange}
						className='appearance-none bg-white border border-gray-300 rounded-md px-3 py-1 pr-8 text-sm'>
						<option>All</option>
						<option>Students</option>
						<option>Mentors</option>
						<option>Programs</option>
						<option>Others</option>
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
			</header>

			<div className='px-6 pb-6 flex flex-col lg:flex-row items-center justify-center gap-8'>
				<div className='relative w-48 h-48'>
					<div className='absolute inset-0 flex flex-col items-center justify-center'>
						<span className='text-2xl font-bold'>{userData.total}</span>
						<span className='text-xs text-gray-500'>Users</span>
					</div>
					<svg
						viewBox='0 0 100 100'
						className='w-full h-full -rotate-90'>
						<circle
							cx='50'
							cy='50'
							r='40'
							fill='none'
							stroke='#f0f0f0'
							strokeWidth='12'
						/>
						<circle
							cx='50'
							cy='50'
							r='40'
							fill='none'
							stroke='#3b82f6'
							strokeWidth='12'
							strokeDasharray={`${segment(userData.students)} ${circumference}`}
							strokeDashoffset='0'
							strokeLinecap='round'
						/>
						<circle
							cx='50'
							cy='50'
							r='40'
							fill='none'
							stroke='#10b981'
							strokeWidth='12'
							strokeDasharray={`${segment(userData.mentors)} ${circumference}`}
							strokeDashoffset={`-${segment(userData.students)}`}
							strokeLinecap='round'
						/>
						<circle
							cx='50'
							cy='50'
							r='40'
							fill='none'
							stroke='#f472b6'
							strokeWidth='12'
							strokeDasharray={`${segment(userData.programs)} ${circumference}`}
							strokeDashoffset={`-${segment(
								userData.students + userData.mentors
							)}`}
							strokeLinecap='round'
						/>
						<circle
							cx='50'
							cy='50'
							r='40'
							fill='none'
							stroke='#f97316'
							strokeWidth='12'
							strokeDasharray={`${segment(userData.others)} ${circumference}`}
							strokeDashoffset={`-${segment(
								userData.students + userData.mentors + userData.programs
							)}`}
							strokeLinecap='round'
						/>
					</svg>
				</div>

				<div className='grid grid-cols-1 gap-4'>
					<div className='flex md:items-center items-start gap-2'>
						<span className='w-3 h-3 rounded-full bg-blue-500'></span>
						<span className='text-sm text-gray-600'>Students</span>
						<span className='ml-auto text-sm font-medium'>
							{userData.students}
						</span>
					</div>
					<div className='flex items-center gap-2'>
						<span className='w-3 h-3 rounded-full bg-green-500'></span>
						<span className='text-sm text-gray-600'>Mentors</span>
						<span className='ml-auto text-sm font-medium'>
							{userData.mentors}
						</span>
					</div>
					<div className='flex items-center gap-2'>
						<span className='w-3 h-3 rounded-full bg-pink-400'></span>
						<span className='text-sm text-gray-600'>Programs</span>
						<span className='ml-auto text-sm font-medium'>
							{userData.programs}
						</span>
					</div>
					<div className='flex items-center gap-2'>
						<span className='w-3 h-3 rounded-full bg-orange-500'></span>
						<span className='text-sm text-gray-600'>Others</span>
						<span className='ml-auto text-sm font-medium'>
							{userData.others}
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
