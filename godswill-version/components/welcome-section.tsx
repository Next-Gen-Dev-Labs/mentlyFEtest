/** @format */

'use client';

import React from 'react';

interface WelcomeSectionProps {
	userName: string;
}

export function WelcomeSection({ userName }: WelcomeSectionProps) {
	return (
		<section className='bg-gradient-to-r from-[#6F01D0] to-purple-800 rounded-lg p-6 text-white flex flex-col md:flex-row md:items-center items-start justify-between gap-6'>
			<div className='block md:flex-row md:flex gap-10'>
				<div className='flex flex-row'>
					<h1 className='text-2xl md:text-3xl font-bold'>
						Welcome aboard, {userName} 👋
					</h1>
				</div>
				<p className='mt-2 font-bold md:text-2xl text-md text-gray-300'>
					We're thrilled to have you on the Techrity Team!
				</p>
			</div>
			<button
				type='button'
				className='mt-4 md:mt-0 bg-white text-purple-700 px-5 py-2 rounded-md font-medium hover:bg-gray-100 transition'>
				Update Profile
			</button>
		</section>
	);
}
