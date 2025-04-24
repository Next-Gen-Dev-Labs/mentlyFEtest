import React from "react";
import Header from "./components/header";
import WidgetManager from "./components/widget-manager";
import Widgets from "./components/widgets";
import { HomeLayoutProvider } from "./contexts/layout-context";
import { WidgetManagerProvider } from "./contexts/widget-manager-context";
import { HomeWidgetsProvider } from "./contexts/widgets-context";

export default function Home() {
	return (
		<HomeLayoutProvider>
			<WidgetManagerProvider>
				<HomeWidgetsProvider>
					<div className="dashboard-homepage @container/home-main grow overflow-x-clip overflow-y-auto pt-5 pb-6 *:mx-auto">
						<Header />
						<div className="@container/banner mt-5 mb-2 w-11/12 rounded bg-[#6F01D0] font-semibold text-white">
							<div className="mx-auto flex w-24/25 items-center justify-between gap-2.5 py-1.5 **:truncate lg:gap-6 2xl:gap-0">
								<div className="group grow items-center gap-4 text-xs @xl/banner:text-base @4xl/banner:flex">
									<p className="text-base @xl/banner:text-2xl">
										Welcome Aboard, {"Blessing"}
									</p>
									<p className="text-[#bdbdbd] @2xl/banner:text-lg @4xl/banner:mx-auto">
										We&apos;re thrilled to have you join Techrity Team!
									</p>
								</div>
								<button
									type="button"
									className="shrink-0 rounded-md bg-white px-2.5 py-1.25 font-bold text-[#1F0954] @5xl/banner:rounded-lg @5xl/banner:px-6 @5xl/banner:py-2.5"
								>
									Update Profile
								</button>
							</div>
						</div>
						<Widgets />
					</div>
					<WidgetManager />
				</HomeWidgetsProvider>
			</WidgetManagerProvider>
		</HomeLayoutProvider>
	);
}
