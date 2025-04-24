/** @format */

'use client';

import { cn } from '@/lib/utils';
import {
	Activity,
	Award,
	BarChart2,
	BookOpen,
	DollarSign,
	HelpCircle,
	Home,
	LogOut,
	MessageSquare,
	PanelLeft,
	Settings,
	Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const navItems = [
	{ name: 'Dashboard', icon: Home, href: '/' },
	{ name: 'Programs', icon: BookOpen, href: '/programs' },
	{ name: 'Activities', icon: Activity, href: '/activities' },
	{ name: 'Users', icon: Users, href: '/users' },
	{ name: 'Forums', icon: MessageSquare, href: '/forums' },
	{ name: 'Finances', icon: DollarSign, href: '/finances' },
	{ name: 'Rewards', icon: Award, href: '/rewards' },
	{
		name: 'Analytics',
		icon: BarChart2,
		href: '/analytics',
		badge: 'Coming Soon',
	},
	{ name: 'Settings', icon: Settings, href: '/settings' },
	{ name: 'Log Out', icon: LogOut, href: '/logout' },
];

export function AppSidebar() {
	const [collapsed, setCollapsed] = useState(false);
	const [activeItem, setActiveItem] = useState<string>('Dashboard');
	const [classicMode, setClassicMode] = useState<boolean>(false);

	return (
		<div
			className={cn(
				'bg-[#3a0a67] text-white flex-shrink-0 flex flex-col transition-all duration-300 h-screen',
				collapsed ? 'w-[70px]' : 'w-[240px]'
			)}>
			<div className='p-4 flex items-center justify-between'>
				<Link
					href='/'
					className='flex items-center gap-2'>
					<Image
						src='/mini-logo.png'
						alt='Techrity Logo'
						width={30}
						height={30}
					/>
					{!collapsed && <span className='text-xl font-bold'>techrity</span>}
				</Link>
				<button
					onClick={() => setCollapsed((prev) => !prev)}
					aria-label='Toggle sidebar'
					className='p-1 rounded hover:bg-white/10'>
					<PanelLeft className='h-6 w-6' />
				</button>
			</div>

			<div className='flex-1 px-2 py-4 overflow-y-auto'>
				<nav className='space-y-1'>
					{navItems.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className={cn(
								'flex items-center gap-3 py-3 text-sm rounded-lg transition-colors',
								collapsed ? 'justify-center px-2' : 'px-4',
								activeItem === item.name
									? 'bg-white text-[#3a0a67] font-medium'
									: 'text-white/90 hover:bg-white/10 hover:text-white'
							)}
							onClick={() => setActiveItem(item.name)}
							title={item.name}>
							<item.icon className='h-5 w-5 flex-shrink-0' />
							{!collapsed && <span>{item.name}</span>}
							{!collapsed && item.badge && (
								<span className='ml-auto text-[10px] px-2 py-[2px] text-[#EFEFF8] bg-[#0214BD38] rounded-lg whitespace-nowrap'>
									{item.badge}
								</span>
							)}
						</Link>
					))}
				</nav>

				<div className='mt-auto'>
					{!collapsed ? (
						<>
							<div className='mt-8 mx-2 bg-[#4c1d7d] rounded-lg p-4 text-sm'>
								<Image
									src='/user-tag.png'
									alt='Help Icon'
									width={20}
									height={20}
									className='object-cover mb-2'
								/>
								<h3 className='font-medium mb-2'>
									Got some questions or need help?
								</h3>
								<Link
									href='/help'
									className='text-yellow-300 hover:text-yellow-200 text-xs mt-2 block'>
									Visit Mentiy Help Desk Here
								</Link>
							</div>

							<div className='mt-4 px-4 pb-4'>
								<div className='flex items-center justify-between'>
									<span className='text-sm'>Switch to Classic Mode</span>
									<label className='relative inline-flex items-center cursor-pointer'>
										<input
											type='checkbox'
											checked={classicMode}
											onChange={() => setClassicMode(!classicMode)}
											className='sr-only peer'
										/>
										<div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-500" />
									</label>
								</div>
							</div>
						</>
					) : (
						<div className='mt-8 flex flex-col items-center pb-4'>
							<div className='w-10 h-10 bg-[#4c1d7d] rounded-full flex items-center justify-center'>
								<HelpCircle size={18} />
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
