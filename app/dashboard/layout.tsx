import Sidebar from "@/components/dashboard/sidebar";
import Header from "@/components/header";
import { SidebarProvider } from "@/contexts/dashboard/sidebar";
import { CSSProperties, ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		<SidebarProvider>
			<main className="flex h-full *:h-full *:overflow-x-clip *:overflow-y-auto">
				<Sidebar />
				<div
					className="@container/dashboard-home flex w-full flex-col items-stretch"
					style={{ anchorName: "--dashboard-main-region" } as CSSProperties}
				>
					<Header />
					{children}
				</div>
			</main>
		</SidebarProvider>
	);
}
