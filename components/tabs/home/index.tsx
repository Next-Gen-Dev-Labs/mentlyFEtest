import { useSidebarContext } from "@/contexts/sidebar-context";
import clsx from "clsx";
import React from "react";
import Header from "./components/header";
import WidgetManager from "./components/widget-manager";
import { HomeLayoutProvider } from "./contexts/layout-context";
import { WidgetManagerProvider } from "./contexts/widget-manager-context";
import { HomeWidgetsProvider } from "./contexts/widgets-context";

export default function Home() {
	const { isSidebarOpen } = useSidebarContext();

	return (
		<HomeLayoutProvider>
			<WidgetManagerProvider>
				<HomeWidgetsProvider>
					<div className="grow overflow-x-clip overflow-y-auto pt-5 pb-6 *:mx-auto">
						<Header />
						<WelcomeBanner isSidebarOpen={isSidebarOpen} />
					</div>
					<WidgetManager />
				</HomeWidgetsProvider>
			</WidgetManagerProvider>
		</HomeLayoutProvider>
	);
}

const WelcomeBanner = ({
	isSidebarOpen,
}: Readonly<{ isSidebarOpen: boolean }>) => (
	<div className="mt-5 mb-2 w-11/12 rounded bg-[#6F01D0] font-semibold text-white">
		<div className="mx-auto flex w-24/25 items-center justify-between gap-2.5 py-1.5 **:truncate lg:gap-6 2xl:gap-0">
			<div
				className={clsx(
					"items-center gap-4 text-sm 2xl:flex 2xl:grow 2xl:gap-0",
					{ "lg:flex lg:grow": !isSidebarOpen },
				)}
			>
				<p className="[view-transition-name:exclamated-welcome-heading] lg:text-2xl">
					Welcome Aboard, {"Blessing"}
				</p>
				<p className="text-xs text-[#bdbdbd] [view-transition-name:exclamated-welcome-subheading] lg:text-base 2xl:mx-auto 2xl:text-xl">
					We&apos;re thrilled to have you join Techrity Team!
				</p>
			</div>
			<button
				type="button"
				className="shrink-0 rounded-md bg-white px-2.5 py-1.25 text-xs font-bold text-[#1F0954] lg:rounded-lg lg:px-6 lg:py-2.5 lg:text-base"
			>
				Update Profile
			</button>
		</div>
	</div>
);
