"use client";
import Sidenav from "./components/Sidenav";
import Topnav from "./components/Topnav";
import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";

export default function Home() {
	const [isSidenavOpen, setIsSidenavOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setIsSidenavOpen(true);
			} else {
				setIsSidenavOpen(false);
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const toggleSidenav = () => {
		setIsSidenavOpen((prev) => !prev);
	};

	return (
		<div>
			<Sidenav isOpen={isSidenavOpen} toggleSidenav={toggleSidenav} />
			{isSidenavOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
					onClick={toggleSidenav}
				></div>
			)}
			<div className={isSidenavOpen ? "md:ml-56" : ""}>
				<Topnav isOpen={isSidenavOpen} toggleSidenav={toggleSidenav} />
				<Dashboard />
			</div>
		</div>
	);
}
