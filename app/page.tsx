"use client";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import tabItems from "@/components/sidebar/tabs.config";
import { useTabContext } from "@/contexts/tab-context";
import { Suspense, useMemo } from "react";

export default function Page() {
	const { activeTab } = useTabContext();
	const ActiveTab = useMemo(
		() => tabItems.find((item) => item.key === activeTab),
		[activeTab],
	);

	return (
		<>
			<Sidebar />
			<main className="flex w-full flex-col items-stretch">
				<Header />
				{ActiveTab && "Component" in ActiveTab && (
					<Suspense fallback={<div>Loading {ActiveTab.label}...</div>}>
						<ActiveTab.Component />
					</Suspense>
				)}
			</main>
		</>
	);
}
