"use client";

import { createContext, FC, ReactNode, useContext, useState } from "react";

type WidgetManagerType = {
	isWidgetManagerOpen: boolean;
	openWidgetsManager: () => void;
	closeWidgetsManager: () => void;
	toggleWidgetsManager: () => void;
};

const WidgetManager = createContext<WidgetManagerType | null>(null);

export const WidgetManagerProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isWidgetManagerOpen, setIsWidgetManagerOpen] =
		useState<boolean>(false);

	const openWidgetsManager = () => setIsWidgetManagerOpen(true);

	const toggleWidgetsManager = () => setIsWidgetManagerOpen((prev) => !prev);

	const closeWidgetsManager = () => setIsWidgetManagerOpen(false);

	return (
		<WidgetManager.Provider
			value={{
				isWidgetManagerOpen,
				openWidgetsManager,
				closeWidgetsManager,
				toggleWidgetsManager,
			}}
		>
			{children}
		</WidgetManager.Provider>
	);
};

export const useWidgetManagerContext = () => {
	const context = useContext(WidgetManager);
	if (!context) {
		throw new Error(
			"useWidgetManagerContext must be used within a WidgetManagerProvider",
		);
	}
	return context;
};
