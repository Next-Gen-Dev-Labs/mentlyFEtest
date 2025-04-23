"use client";

import tabItems from "@/components/sidebar/tabs.config";
import { createContext, FC, ReactNode, useContext, useState } from "react";

export type TabKeys = (typeof tabItems)[number]["key"];

type TabContextType = {
	activeTab: TabKeys;
	setActiveTab: (tab: TabKeys) => void;
};

const TabContext = createContext<TabContextType | null>(null);

export const TabContextProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [activeTab, setActiveTab] = useState<TabKeys>(tabItems[0].key);

	return (
		<TabContext.Provider value={{ activeTab, setActiveTab }}>
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
