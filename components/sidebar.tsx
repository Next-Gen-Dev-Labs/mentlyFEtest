import { useSidebarContext } from "@/contexts/sidebar-context";
import { useTabContext } from "@/contexts/tab-context";
import tabItems from "@/tabs.config";
import { Icon } from "@iconify-icon/react";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

export default function Sidebar() {
	const { setActiveTab, activeTab } = useTabContext();
	const { toggleSidebar, isSidebarOpen } = useSidebarContext();

	return (
		<aside
			className={clsx(
				"w-4/5 max-w-80 shrink-0 bg-[#340260]",
				isSidebarOpen ? "" : "hidden",
			)}
		>
			<header className="">
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
						className="text-xl text-gray-500"
						onClick={toggleSidebar}
					>
						<Icon icon="solar:sidebar-minimalistic-linear" flip="horizontal" />
					</button>
				</div>
			</header>
			<nav className="mx-auto w-11/12 space-y-2 lg:w-5/6">
				{tabItems.map((item) => (
					<label
						className={clsx(
							"relative isolate flex w-full items-center gap-8 rounded-lg px-8 py-4 text-gray-400 has-checked:bg-white has-checked:text-[#1f0954]",
						)}
						htmlFor={item.key}
						key={item.key}
					>
						<input
							aria-disabled={item.disabled}
							type="radio"
							name="sidebar_tabs"
							id={item.key}
							value={item.key}
							onChange={(e) => {
								if (item.disabled) return e.preventDefault();
								setActiveTab(e.target.value as typeof activeTab);
							}}
							checked={item.key === activeTab}
							className="sr-only"
						/>
						<Icon className="text-xl" icon={item.icon} />
						{item.label}
						{item.disabled && (
							<span
								className={clsx(
									"absolute top-1 right-2 rounded-full bg-[#0214bd]/22 px-1.5 py-0.75 text-xs text-[#efeff8]",
								)}
							>
								Coming Soon
							</span>
						)}
					</label>
				))}
				<button
					type="button"
					className="flex w-full items-center gap-8 rounded-lg px-8 py-4"
				>
					<Icon className="text-xl" icon="solar:logout-2-outline" />
					Log Out
				</button>
			</nav>
		</aside>
	);
}
