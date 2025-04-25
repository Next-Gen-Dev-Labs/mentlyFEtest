"use client";

import tabItems from "@/components/sidebar/tabs.config";
import { createContext, FC, ReactNode, useContext, useState } from "react";

export type TabKeys = (typeof tabItems)[number]["key"];

type TabContextType = {
	activeTab: TabKeys;
	setActiveTab: (tab: TabKeys) => void;
};

const TabContext = createContext<TabContextType | null>(null);

const LOCAL_STORAGE_KEY = "techrityActiveTab";

export const TabContextProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [activeTab, setActiveTab] = useState<TabKeys>(() => {
		if (typeof window !== "undefined") {
			const storedTab = localStorage.getItem(LOCAL_STORAGE_KEY);
			if (storedTab !== null) {
				const parsedTab = JSON.parse(storedTab) as TabKeys;
				if (tabItems.some((item) => item.key === parsedTab)) {
					return parsedTab;
				}
			}
		}
		return tabItems[0].key;
	});

	const handleSetActiveTab = (tab: TabKeys) => {
		setActiveTab(tab);
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tab));
	};

	return (
		<TabContext.Provider
			value={{ activeTab, setActiveTab: handleSetActiveTab }}
		>
			{children}
		</TabContext.Provider>
	);
};

export const useTabContext = () => {
	const context = useContext(TabContext);
	if (!context) {
		throw new Error("useTabContext must be used within a TabContextProvider");
	}
	return context;
};
