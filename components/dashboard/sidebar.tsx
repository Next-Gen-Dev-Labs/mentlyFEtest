"use client";

import { useSidebar } from "@/contexts/dashboard/sidebar";
import sidebarLinks from "@/contexts/dashboard/sidebar/sidebarLinks.config";
import { Icon } from "@iconify-icon/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment } from "react";

export default function Sidebar() {
	const { toggleSidebar, isSidebarOpen } = useSidebar();
	const pathname = usePathname();

	return (
		<aside
			className={clsx(
				"absolute z-50 w-4/5 max-w-80 shrink-0 bg-[#340260] text-gray-400 transition-all transition-discrete duration-250 lg:static 2xl:block 2xl:-translate-x-0 2xl:opacity-100 starting:-translate-x-0 starting:opacity-0",
				isSidebarOpen
					? "block translate-x-0 opacity-100"
					: "hidden -translate-x-1/2 opacity-0",
			)}
		>
			<header className="sticky top-0 z-50 mb-18 bg-inherit/100 shadow shadow-white/10 backdrop-blur-md">
				<div className="mx-auto flex h-20 w-11/12 items-center justify-between lg:w-5/6">
					<Image
						src="/logo.png"
						width="120"
						height="30"
						alt="Techrity logo"
						className="h-auto w-30"
					/>
					<button
						type="button"
						className="text-xl text-gray-500 2xl:hidden"
						onClick={toggleSidebar}
					>
						<Icon icon="solar:sidebar-minimalistic-linear" flip="horizontal" />
					</button>
				</div>
			</header>
			<nav
				className={clsx(
					"mx-auto w-11/12 space-y-2 lg:w-5/6",
					"*:relative *:isolate *:flex *:w-full *:items-center *:gap-8 *:rounded-lg *:px-8 *:py-4 *:transition **:[iconify-icon:first-child]:text-xl",
					"*:not-[a[href][aria-current='page'],button:is([aria-disabled='true'],:disabled),[role='button']:is([aria-disabled='true']),label:has([aria-disabled='true'],:disabled)]:hover:bg-white/5 *:not-[a[href][aria-current='page'],button:is([aria-disabled='true'],:disabled),[role='button']:is([aria-disabled='true']),label:has([aria-disabled='true'],:disabled)]:active:scale-95 *:[a[href][aria-current='page']]:text-[#1f0954] *:[a[href][aria-current='page']]:before:absolute *:[a[href][aria-current='page']]:before:inset-0 *:[a[href][aria-current='page']]:before:-z-1 *:[a[href][aria-current='page']]:before:rounded-[inherit] *:[a[href][aria-current='page']]:before:bg-white *:[a[href][aria-current='page']]:before:[view-transition-name:active-sidebar-link]",
				)}
			>
				{sidebarLinks.map((item) => (
					<Fragment key={item.id}>
						{item.type === "unconfirmed" && (
							<div inert>
								<Icon icon={item.icon} />
								<span>{item.label}</span>
								<i className="absolute top-1 right-2 rounded-full bg-[#0214bd]/22 px-1.5 py-0.75 text-xs text-[#efeff8] not-italic">
									Coming Soon
								</i>
							</div>
						)}
						{item.type === "action" && (
							<button type="button" onClick={item.action}>
								<Icon icon={item.icon} />
								<span>{item.label}</span>
							</button>
						)}
						{item.type === "link" && (
							<Link
								href={item.href}
								{...(item.href === pathname && { "aria-current": "page" })}
							>
								<Icon icon={item.icon} />
								<span>{item.label}</span>
							</Link>
						)}
					</Fragment>
				))}
			</nav>
			<div className="mx-auto mt-12 mb-8 w-11/12 rounded-lg bg-white/12 px-3.5 py-2.5 text-white lg:w-5/6">
				<Icon className="text-xl" icon="solar:user-speak-linear" />
				<p className="mt-5 mb-6 text-sm font-bold">
					Got some questions, enquiries or need help?
				</p>
				<button
					type="button"
					className="text-xs text-[#f0c074] underline hover:no-underline focus-visible:no-underline"
				>
					Visit Mently Help Desk
				</button>
			</div>
			<div className="mx-auto mb-18 flex w-11/12 items-center justify-between gap-8 text-xs font-bold text-[#f2f2f2] lg:w-5/6">
				<label htmlFor="mode_toggle">Switch to Classic Mode</label>
				<input
					type="checkbox"
					id="mode_toggle"
					className="relative isolate h-[1em] w-[1.75em] cursor-pointer appearance-none rounded-full bg-[#f6f6f6] text-lg transition before:absolute before:top-1/9 before:left-1/10 before:aspect-square before:h-7/9 before:rounded-full before:bg-[#1f0954] before:opacity-60 before:transition checked:before:translate-x-4/5 checked:before:opacity-100 hover:scale-105 focus-visible:scale-105 active:scale-95"
				/>
			</div>
		</aside>
	);
}
