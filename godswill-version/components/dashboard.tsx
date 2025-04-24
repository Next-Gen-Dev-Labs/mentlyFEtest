/** @format */

'use client';

import { DashboardHeader } from '@/components/dashboard-header';
import { GroupCallsSection } from '@/components/group-calls-section';
import { ManageWidgetsModal } from '@/components/manage-widgets-modal';
import { MentorsSection } from '@/components/mentors-section';
import { ProgramsSection } from '@/components/programs-section';
import { UsersSection } from '@/components/users-section';
import { WelcomeSection } from '@/components/welcome-section';
import Image from 'next/image';
import { useState } from 'react';
import { ApplicationsSection } from './application-section';
import { RecentActivitiesSection } from './recent-activity-section';

export default function Dashboard() {
	const [isManageWidgetsOpen, setIsManageWidgetsOpen] = useState(false);

	return (
		<div className='flex h-screen bg-gray-50'>
			<div className='flex-1 flex flex-col overflow-hidden'>
				<DashboardHeader onManageWidgets={() => setIsManageWidgetsOpen(true)} />

				<div className='flex justify-end items-center gap-4 px-4 py-2 border-b'>
					<button className='p-2 text-gray-500 hover:bg-gray-100 rounded'>
						<Image
							src='/widget1.png'
							alt='Layout Grid'
							width={20}
							height={20}
						/>
					</button>
					<button
						className='flex items-center gap-2 px-3 py-1 text-purple-900 font-medium'
						onClick={() => setIsManageWidgetsOpen(true)}>
						<Image
							src='/widget2.png'
							alt='Manage Widget'
							width={25}
							height={25}
						/>
						<span>Manage Widgets</span>
					</button>
				</div>

				<main className='flex-1 overflow-y-auto p-4'>
					<WelcomeSection userName='Blessing' />

					<div className='mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6'>
						<div className='lg:col-span-4 flex flex-col gap-6 flex-grow'>
							<div className='flex-grow'>
								<ProgramsSection />
							</div>
							<div className='flex-shrink'>
								<UsersSection />
							</div>
						</div>

						<div className='lg:col-span-8 flex flex-col gap-5'>
							<GroupCallsSection />

							<div className='grid grid-cols-1 flex-grow md:grid-cols-5 gap-6'>
								<div className='md:col-span-3 gap-6'>
									<ApplicationsSection />
								</div>
								<div className='md:col-span-2 grid grid-rows-1 md:grid-rows-2 gap-8'>
									<MentorsSection />
									<RecentActivitiesSection />
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>

			{isManageWidgetsOpen && (
				<ManageWidgetsModal onClose={() => setIsManageWidgetsOpen(false)} />
			)}
		</div>
	);
}
