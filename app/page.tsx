"use client";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import tabItems from "@/components/sidebar/tabs.config";
import { useTabContext } from "@/contexts/tab-context";
import { Icon } from "@iconify-icon/react";
import { CSSProperties, Suspense, useMemo } from "react";

export default function Page() {
	const { activeTab } = useTabContext();
	const ActiveTab = useMemo(
		() => tabItems.find((item) => item.key === activeTab),
		[activeTab],
	);

	return (
		<>
			<Sidebar />
			<main
				className="flex w-full flex-col items-stretch"
				style={{ anchorName: "--layout-main-wrapper" } as CSSProperties}
			>
				<Header />
				{ActiveTab && "Component" in ActiveTab && (
					<Suspense
						fallback={
							<Icon
								data-testid="loading-spinner"
								icon="svg-spinners:blocks-scale"
								className="suspense-fallback"
							/>
						}
					>
						<ActiveTab.Component />
					</Suspense>
				)}
			</main>
		</>
	);
}
