/** @format */

'use client';

import { Bell } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface DashboardHeaderProps {
	onManageWidgets: () => void;
}

export function DashboardHeader({ onManageWidgets }: DashboardHeaderProps) {
	return (
		<header className='bg-white border-b border-gray-200 py-2 px-4 flex items-center justify-end'>
			<div className='flex items-center gap-6'>
				<Link
					href='/notifications'
					className='relative text-gray-600 hover:text-gray-800'
					aria-label='View notifications'>
					<Bell className='h-5 w-5' />
					<span className='absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full' />
				</Link>

				<div className='flex items-center gap-3'>
					<div className='flex items-center gap-3'>
						<div className='w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center'>
							<svg
								width='20'
								height='20'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z'
									fill='white'
								/>
								<path
									d='M12 14.5C6.99 14.5 3 17.86 3 22H21C21 17.86 17.01 14.5 12 14.5Z'
									fill='white'
								/>
							</svg>
						</div>
						<div>
							<div className='text-sm font-medium'>Techrity Foundation</div>
							<div className='text-xs text-gray-500'>Member</div>
						</div>
					</div>

					<button
						className='w-8 h-8 bg-purple-600 hover:bg-purple-700 rounded-md flex items-center justify-center text-white'
						aria-label='Manage widgets'>
						<svg
							width='16'
							height='16'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M8 10L12 14L16 10'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>
				</div>
			</div>
		</header>
	);
}
