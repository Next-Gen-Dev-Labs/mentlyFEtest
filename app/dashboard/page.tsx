import Header from "@/components/dashboard/header";
import Widgets from "@/components/dashboard/widgets";
import WidgetsManager from "@/components/dashboard/widgets-manager";
import { LayoutProvider } from "@/contexts/dashboard/layout";
import { WidgetsManagerProvider } from "@/contexts/dashboard/widgets-manager";
import React from "react";

export default function Dashboard() {
	return (
		<LayoutProvider>
			<WidgetsManagerProvider>
				<div className="dashboard-homepage @container/home-main grow overflow-x-clip overflow-y-auto pt-5 pb-6 *:mx-auto">
					<Header />
					<div className="@container/banner mt-5 mb-2 w-11/12 rounded bg-[#6F01D0] font-semibold text-white">
						<div className="mx-auto flex w-24/25 items-center justify-between gap-2.5 py-1.5 **:truncate lg:gap-6 2xl:gap-0">
							<div className="group grow items-center gap-4 text-xs @xl/banner:text-base @4xl/banner:flex">
								<p className="text-base @xl/banner:text-2xl">
									Welcome Aboard, {`Blessing`}
								</p>
								<p className="text-[#bdbdbd] @2xl/banner:text-lg @4xl/banner:mx-auto">
									{`We're thrilled to have you join Techrity Team!`}
								</p>
							</div>
							<button
								type="button"
								className="flex shrink-0 items-center justify-center rounded-md bg-white px-2.5 py-1.25 font-bold text-[#1F0954] outline-1 -outline-offset-1 outline-transparent transition *:transition *:will-change-auto hover:bg-transparent hover:text-white hover:outline-current hover:*:scale-103 focus-visible:bg-transparent focus-visible:*:scale-103 active:*:scale-98 @5xl/banner:rounded-lg @5xl/banner:px-6 @5xl/banner:py-2.5"
							>
								<span>Update Profile</span>
							</button>
						</div>
					</div>
					<Widgets />
				</div>
				<WidgetsManager />
			</WidgetsManagerProvider>
		</LayoutProvider>
	);
}
