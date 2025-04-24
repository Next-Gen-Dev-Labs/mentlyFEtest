/** @format */

import { SidebarProvider } from '@/components/ui/sidebar';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { AppSidebar } from '@/components/app-sidebar';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: 'Techrity Dashboard',
	description: 'Techrity platform dashboard',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${poppins.variable} antialiased`}>
				<SidebarProvider>
					<div className='flex'>
						<AppSidebar />
						<main className='flex-1'>{children}</main>
					</div>
				</SidebarProvider>
			</body>
		</html>
	);
}
