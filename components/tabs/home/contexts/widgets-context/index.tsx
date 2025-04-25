"use client";

import transitionViewIfSupported from "@/utils/transitionViewIfSupported";
import { arrayMove } from "@dnd-kit/sortable";
import { createContext, FC, ReactNode, useContext, useState } from "react";
import widgets from "./widgets.config";

export type HomeWidgetsKeys = (typeof widgets)[number]["key"];

type HomeWidgetsType = {
	homeWidgets: HomeWidgetsKeys[];
	removeHomeWidget: (widget: HomeWidgetsKeys) => void;
	addHomeWidget: (widget: HomeWidgetsKeys) => void;
	resetHomeWidget: () => void;
	reorderHomeWidgets: (oldIndex: number, newIndex: number) => void;
	saveHomeWidgets: () => void;
};

const HomeWidgets = createContext<HomeWidgetsType | null>(null);

export const defaultHomeWidgets: HomeWidgetsKeys[] = [
	"programs-widget",
	"group-calls-widget",
	"users-widget",
	"applications-widget",
	"mentors-widget",
	"recent-activities-widget",
];

const LOCAL_STORAGE_KEY = "techrityHomeWidgets";

export const HomeWidgetsProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [homeWidgets, setHomeWidgets] = useState<HomeWidgetsKeys[]>(() => {
		if (typeof window !== "undefined") {
			const savedWidgets = localStorage.getItem(LOCAL_STORAGE_KEY);
			if (savedWidgets) {
				try {
					const parsedWidgets = JSON.parse(savedWidgets);
					if (
						Array.isArray(parsedWidgets) &&
						parsedWidgets.every((key) => widgets.some((w) => w.key === key))
					) {
						return parsedWidgets as HomeWidgetsKeys[];
					} else {
						console.error(
							"Invalid data found in localStorage for homeWidgets. Using default.",
						);
						return defaultHomeWidgets;
					}
				} catch (e) {
					console.error("Failed to parse homeWidgets from localStorage:", e);
					return defaultHomeWidgets;
				}
			}
		}
		return defaultHomeWidgets;
	});

	const removeHomeWidget = (widget: HomeWidgetsKeys) =>
		transitionViewIfSupported(() =>
			setHomeWidgets((prev) =>
				prev.filter((homeWidget) => homeWidget !== widget),
			),
		);

	const addHomeWidget = (widget: HomeWidgetsKeys) =>
		transitionViewIfSupported(() =>
			setHomeWidgets((prev) => prev.concat(widget)),
		);
	const resetHomeWidget = () =>
		transitionViewIfSupported(() => setHomeWidgets(defaultHomeWidgets));
	const reorderHomeWidgets = (oldIndex: number, newIndex: number) =>
		transitionViewIfSupported(() =>
			setHomeWidgets((prev) => arrayMove(prev, oldIndex, newIndex)),
		);

	const saveHomeWidgets = () => {
		if (typeof window !== "undefined") {
			try {
				localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(homeWidgets));
				console.log("Home widgets saved to localStorage.");
			} catch (e) {
				console.error("Failed to save homeWidgets to localStorage:", e);
			}
		}
	};

	return (
		<HomeWidgets.Provider
			value={{
				homeWidgets,
				removeHomeWidget,
				addHomeWidget,
				resetHomeWidget,
				reorderHomeWidgets,
				saveHomeWidgets,
			}}
		>
			{children}
		</HomeWidgets.Provider>
	);
};

export const useHomeWidgetsContext = () => {
	const context = useContext(HomeWidgets);
	if (!context) {
		throw new Error(
			"useHomeWidgetsContext must be used within a HomeWidgetsProvider",
		);
	}
	return context;
};
