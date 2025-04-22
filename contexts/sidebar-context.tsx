"use client";

import { createContext, FC, ReactNode, useContext, useState } from "react";

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

	const openSidebar = () => setIsSidebarOpen(true);

	const closeSidebar = () => setIsSidebarOpen(false);

	const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

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
