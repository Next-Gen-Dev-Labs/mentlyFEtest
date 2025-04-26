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
		<html lang="en">
			<body className={clsx(chivo.variable, "antialiased")}>{children}</body>
		</html>
	);
}
