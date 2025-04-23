import { SidebarContextProvider } from "@/contexts/sidebar-context";
import { TabContextProvider } from "@/contexts/tab-context";
import clsx from "clsx";
import type { Metadata } from "next";
import { Chivo } from "next/font/google";
import "./globals.css";

const chivo = Chivo({ variable: "--font-family-chivo", subsets: ["latin"] });

export const metadata: Metadata = { title: "Techrity" };

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html suppressHydrationWarning lang="en">
			<body className={clsx(chivo.variable, "antialiased")}>
				<TabContextProvider>
					<SidebarContextProvider>{children}</SidebarContextProvider>
				</TabContextProvider>
			</body>
		</html>
	);
}
