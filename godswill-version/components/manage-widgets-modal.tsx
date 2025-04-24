/** @format */

'use client';

import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

interface ManageWidgetsModalProps {
	onClose: () => void;
}

interface WidgetsState {
	programs: boolean;
	groupCalls: boolean;
	mentors: boolean;
	recentActivities: boolean;
	application: boolean;
	earnings: boolean;
	forum: boolean;
	programAnalysis: boolean;
}

export function ManageWidgetsModal({ onClose }: ManageWidgetsModalProps) {
	const [widgets, setWidgets] = useState<WidgetsState>({
		programs: true,
		groupCalls: true,
		mentors: true,
		recentActivities: true,
		application: true,
		earnings: false,
		forum: false,
		programAnalysis: false,
	});

	const toggleWidget = (key: keyof WidgetsState) => {
		setWidgets((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	const formatLabel = (key: string) =>
		key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');

	return (
		<div className='fixed inset-0 z-50 flex items-start justify-end bg-black/50'>
			<div className='h-full w-full max-w-md bg-white shadow-lg overflow-y-auto'>
				<div className='flex justify-end p-4 border-b'>
					<button
						onClick={onClose}
						aria-label='Close modal'
						className='text-gray-500 hover:text-gray-700'>
						<X className='h-5 w-5' />
					</button>
				</div>

				<div className='p-6'>
					<h2 className='text-2xl font-bold text-purple-700 mb-2'>
						Manage Widgets
					</h2>
					<p className='text-gray-600 text-sm mb-6'>
						Personalize your dashboard by adding, removing, or reordering
						widgets to fit your workflow.
					</p>

					<div className='space-y-4'>
						{Object.entries(widgets).map(([key, checked]) => (
							<WidgetOption
								key={key}
								label={formatLabel(key)}
								checked={checked}
								onChange={() => toggleWidget(key as keyof WidgetsState)}
							/>
						))}
					</div>

					<div className='mt-4 flex gap-2'>
						<button
							onClick={onClose}
							className='flex-1 py-3 px-4 bg-purple-700 text-white rounded-md hover:bg-purple-800 font-medium'>
							Save Changes
						</button>

						<button
							onClick={onClose}
							className='flex-1 py-3 px-4 border border-purple-700 text-purple-700 rounded-md hover:bg-purple-50 font-medium'>
							Reset to Default
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

interface WidgetOptionProps {
	label: string;
	checked: boolean;
	onChange: () => void;
}

function WidgetOption({ label, checked, onChange }: WidgetOptionProps) {
	return (
		<div className='flex items-center justify-between p-2 hover:bg-purple-50 rounded-md'>
			<div className='flex items-center gap-4'>
				<span className='text-gray-700 font-bold text-sm'>
					<Menu className='w-4 h-4' />
				</span>
				<span className='text-gray-700 font-bold text-sm'>{label}</span>
			</div>
			<label className='relative inline-block'>
				<input
					type='checkbox'
					checked={checked}
					onChange={onChange}
					className='peer appearance-none h-6 w-6 border-2 border-gray-300 items-center justify-center flex rounded-md checked:bg-green-500 checked:border-green-500 transition'
				/>
				{checked && (
					<svg
						viewBox='0 0 24 24'
						className='pointer-events-none absolute inset-0 m-auto h-4 w-4 flex items-center justify-center text-white'
						fill='none'
						stroke='currentColor'
						strokeWidth='3'
						strokeLinecap='round'
						strokeLinejoin='round'>
						<polyline points='20 6 9 17 4 12' />
					</svg>
				)}
			</label>
		</div>
	);
}
