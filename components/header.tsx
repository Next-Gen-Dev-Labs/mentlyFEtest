"use client";

import { useSidebarContext } from "@/contexts/sidebar-context";
import { Icon } from "@iconify-icon/react";
import clsx from "clsx";
import Image from "next/image";
import { CSSProperties } from "react";

export default function Header() {
	const { toggleSidebar, isSidebarOpen } = useSidebarContext();

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
						className="rounded-full p-1 text-2xl ring-offset-1 outline-1 outline-transparent transition hover:scale-105 hover:bg-current/3 focus-visible:scale-105 focus-visible:outline-current/50 active:scale-95 [&:hover+*]:animate-ping"
						popoverTarget="notifications-dropdown"
						style={
							{
								anchorName: "--notifications-dropdown-toggle-button",
							} as CSSProperties
						}
					>
						<Icon icon="solar:bell-linear" />
					</button>
					<i
						inert
						className="fixed inset-auto top-[anchor(top)] right-[anchor(right)] isolate z-0 m-auto mt-1 mr-2 size-2 rounded-full bg-[#ff3e3e]"
						style={
							{
								positionAnchor: "--notifications-dropdown-toggle-button",
							} as CSSProperties
						}
					/>
					<div
						popover=""
						id="notifications-dropdown"
						className="inset-auto top-[anchor(bottom)] m-0 h-80 w-full max-w-xs [justify-self:anchor-center] rounded-md shadow-md"
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
