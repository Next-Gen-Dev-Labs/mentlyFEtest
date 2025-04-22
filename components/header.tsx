"use client";

import { useSidebarContext } from "@/contexts/sidebar-context";
import { Icon } from "@iconify-icon/react";
import React from "react";

export default function Header() {
	const { toggleSidebar } = useSidebarContext();

	return (
		<header className="bg-[#fdfdfd] shadow">
			<div className="mx-auto flex h-20 w-11/12 items-center justify-between">
				<button type="button" onClick={toggleSidebar} className="text-xl">
					<Icon icon="solar:sidebar-minimalistic-linear" />
				</button>
			</div>
		</header>
	);
}
