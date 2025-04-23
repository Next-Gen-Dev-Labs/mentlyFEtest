"use client";

import transitionViewIfSupported from "@/utils/transitionViewIfSupported";
import {
	createContext,
	FC,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

interface SidebarContextType {
	isSidebarOpen: boolean;
	openSidebar: () => void;
	closeSidebar: () => void;
	toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | null>(null);

export const SidebarContextProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const updateSidebarState = () =>
			setIsSidebarOpen(window.innerWidth >= 1024);

		updateSidebarState();
		window.addEventListener("resize", updateSidebarState);

		return () => window.removeEventListener("resize", updateSidebarState);
	}, []);

	const openSidebar = () =>
		transitionViewIfSupported(() => setIsSidebarOpen(true));

	const closeSidebar = () =>
		transitionViewIfSupported(() => setIsSidebarOpen(false));

	const toggleSidebar = () =>
		transitionViewIfSupported(() => setIsSidebarOpen((prev) => !prev));

	return (
		<SidebarContext.Provider
			value={{ isSidebarOpen, openSidebar, closeSidebar, toggleSidebar }}
		>
			{children}
		</SidebarContext.Provider>
	);
};

export const useSidebarContext = () => {
	const context = useContext(SidebarContext);
	if (!context) {
		throw new Error("useSidebar must be used within a SidebarContextProvider");
	}

	return context;
};
