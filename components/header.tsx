"use client";

import { useSidebar } from "@/contexts/dashboard/sidebar";
import { Icon } from "@iconify-icon/react";
import clsx from "clsx";
import Image from "next/image";

export default function Header() {
	const { toggleSidebar, isSidebarOpen } = useSidebar();

	return (
		<header className="bg-[#fdfdfd] shadow">
			<div className="mx-auto flex h-20 w-11/12 items-center">
				<button
					type="button"
					onClick={toggleSidebar}
					className={clsx(
						"text-xl transition-all starting:scale-80 starting:opacity-0",
						{ "lg:hidden lg:scale-80 lg:opacity-0": isSidebarOpen },
					)}
				>
					<Icon icon="solar:sidebar-minimalistic-linear" />
				</button>
				<div className="ml-auto flex items-center gap-11">
					<button
						type="button"
						className="relative isolate rounded-full p-1 text-2xl ring-offset-1 outline-1 outline-transparent transition before:absolute before:top-1 before:right-2 before:size-2 before:rounded-full before:bg-[#ff3e3e] hover:scale-105 hover:bg-current/3 hover:before:animate-ping focus-visible:scale-105 focus-visible:outline-current/50 active:scale-95"
						popoverTarget="notifications-dropdown"
					>
						<Icon icon="solar:bell-linear" />
					</button>
					<div
						popover=""
						id="notifications-dropdown"
						className="inset-auto top-[anchor(bottom)] left-[anchor(left)] m-0 -ml-[calc(anchor-size(width)*2)] hidden h-80 w-full max-w-xs -translate-y-4 scale-90 rounded-md opacity-0 shadow-md transition-discrete duration-200 open:block open:translate-y-0 open:scale-100 open:opacity-100 md:left-auto md:-ml-0 md:[justify-self:anchor-center] starting:scale-90 starting:opacity-0"
					></div>
					<div className="flex items-center gap-2">
						<div className="grid size-11 place-items-center rounded-full bg-[#8b72fc]">
							<Image
								src="/logo.symbol.png"
								width="32"
								height="26"
								alt="Techrity symbol"
								className="h-auto w-8"
							/>
						</div>
						<div className="space-y-1 text-xs text-[#53547b]">
							<p className="max-w-28 truncate text-sm text-[#404040]">
								{"Techrity Foundation"}
							</p>
							<p>{"Member"}</p>
						</div>
						<button
							type="button"
							className="rounded bg-[#6f01d0] text-gray-400"
						>
							<Icon icon="tabler:chevron-down" />
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}
