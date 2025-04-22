"use client";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

export default function Home() {
	return (
		<>
			<Sidebar />
			<main className="w-full">
				<Header />
			</main>
		</>
	);
}
