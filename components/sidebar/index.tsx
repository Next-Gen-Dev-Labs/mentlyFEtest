import { useSidebarContext } from "@/contexts/sidebar-context";
import { TabKeys, useTabContext } from "@/contexts/tab-context";
import transitionViewIfSupported from "@/utils/transitionViewIfSupported";
import { Icon } from "@iconify-icon/react";
import clsx from "clsx";
import Image from "next/image";
import React, { CSSProperties } from "react";
import tabItems from "./tabs.config";

export default function Sidebar() {
	const { setActiveTab, activeTab } = useTabContext();
	const { toggleSidebar, isSidebarOpen } = useSidebarContext();

	return (
		<aside
			className={clsx(
				"absolute z-50 w-4/5 max-w-80 shrink-0 bg-[#340260] text-gray-400 transition-all transition-discrete duration-250 lg:static 2xl:block 2xl:-translate-x-0 2xl:opacity-100 starting:-translate-x-0 starting:opacity-0",
				isSidebarOpen
					? "block -translate-x-0 opacity-100"
					: "hidden -translate-x-1/2 opacity-0",
			)}
		>
			<header className="sticky top-0 z-10 mb-18 bg-inherit/100 shadow shadow-white/10 backdrop-blur-md">
				<div className="mx-auto flex h-20 w-11/12 items-center justify-between lg:w-5/6">
					<Image
						src="/logo.png"
						width="408"
						height="95"
						alt="Techrity logo"
						className="h-auto w-29"
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
			<nav className="mx-auto w-11/12 space-y-2 lg:w-5/6 [&_label]:[view-transition-class:tab-items]">
				<i
					inert
					className="clone-anchor rounded-lg bg-white [view-transition-name:active-tab-indicator]"
					style={
						{
							positionAnchor: "--tab-item-active",
						} as CSSProperties
					}
				/>
				{tabItems.map((item) => (
					<>
						<label
							className="flex w-full items-center gap-8 rounded-lg px-8 py-4 transition not-[:has(:disabled),:has([aria-disabled='true']),:has(:checked)]:hover:bg-white/5 has-checked:text-[#1f0954]"
							htmlFor={item.key}
							key={item.key}
							style={
								{
									anchorName: `--tab-item-${item.key}${item.key === activeTab ? ", --tab-item-active" : ""}`,
									viewTransitionName: `tab-item-${item.key}`,
								} as CSSProperties
							}
						>
							<input
								disabled={"disabled" in item && item.disabled}
								aria-disabled={item.key === activeTab}
								type="radio"
								name="sidebar_tabs"
								id={item.key}
								value={item.key}
								onChange={(e) => {
									if ("disabled" in item && item.disabled)
										return e.preventDefault();
									if ("action" in item) return item.action(e);
									transitionViewIfSupported(() =>
										setActiveTab(e.target.value as TabKeys),
									);
								}}
								checked={item.key === activeTab}
								className="sr-only"
							/>
							<Icon className="text-xl" icon={item.icon} />
							<span>{item.label}</span>
						</label>
						{"disabled" in item && item.disabled && (
							<span
								inert
								className={clsx(
									"fixed inset-auto top-[anchor(top)] right-[anchor(right)] m-auto mt-1 mr-2 rounded-full bg-[#0214bd]/22 px-1.5 py-0.75 text-xs text-[#efeff8]",
								)}
								style={
									{ positionAnchor: `--tab-item-${item.key}` } as CSSProperties
								}
							>
								Coming Soon
							</span>
						)}
					</>
				))}
			</nav>
			<div className="mx-auto mt-12 mb-8 w-11/12 rounded-lg bg-white/12 px-3.5 py-2.5 text-white lg:w-5/6">
				<Icon className="text-xl" icon="solar:user-speak-linear" />
				<p className="mt-5 mb-6 text-sm font-bold">
					Got some questions, enquiries or need help?
				</p>
				<button type="button" className="text-xs text-[#f0c074] underline">
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
