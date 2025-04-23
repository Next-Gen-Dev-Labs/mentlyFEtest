"use client";

import homeLayouts from "./layout.config";
import { createContext, FC, ReactNode, useContext, useState } from "react";

export type HomeLayoutKeys = (typeof homeLayouts)[number]["key"];

type HomeLayoutType = {
	homeLayout: HomeLayoutKeys;
	setHomeLayout: (layout: HomeLayoutKeys) => void;
};

const HomeLayout = createContext<HomeLayoutType | null>(null);

export const HomeLayoutProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [homeLayout, setHomeLayout] = useState<HomeLayoutKeys>(
		homeLayouts[0].key,
	);

	return (
		<HomeLayout.Provider value={{ homeLayout, setHomeLayout }}>
			{children}
		</HomeLayout.Provider>
	);
};

export const useHomeLayoutContext = () => {
	const context = useContext(HomeLayout);
	if (!context) {
		throw new Error(
			"useHomeLayoutContext must be used within a HomeLayoutProvider",
		);
	}
	return context;
};
