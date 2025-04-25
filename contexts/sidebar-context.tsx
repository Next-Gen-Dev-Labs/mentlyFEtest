"use client";

// import transitionViewIfSupported from "@/utils/transitionViewIfSupported";
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

const LOCAL_STORAGE_KEY = "techrityIsSidebarShown";

export const SidebarContextProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() => {
		if (typeof window !== "undefined") {
			const storedSidebarState = localStorage.getItem(LOCAL_STORAGE_KEY);
			if (storedSidebarState !== null) {
				return JSON.parse(storedSidebarState);
			}
		}
		return false;
	});

	useEffect(() => {
		if (typeof window === "undefined") return;

		const updateSidebarState = () =>
			setIsSidebarOpen(window.innerWidth >= 1024);

		updateSidebarState();
		window.addEventListener("resize", updateSidebarState);

		return () => window.removeEventListener("resize", updateSidebarState);
	}, []);

	const openSidebar = () => {
		setIsSidebarOpen(true);
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(true));
	};

	const closeSidebar = () => {
		setIsSidebarOpen(false);
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(false));
	};

	const toggleSidebar = () =>
		setIsSidebarOpen((prev) => {
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(!prev));
			return !prev;
		});

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
