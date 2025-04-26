"use client";

import transitionViewIfSupported from "@/utils/transitionViewIfSupported";
import { arrayMove } from "@dnd-kit/sortable";
import { createContext, ReactNode, useContext, useState } from "react";
import availableWidgets from "./availableWidgets.config";

export type AvailableWidgetsKeys = (typeof availableWidgets)[number]["key"];

type WidgetsManagerContextType = {
	isWidgetsManagerOpen: boolean;
	openWidgetsManager: () => void;
	closeWidgetsManager: () => void;
	toggleWidgetsManager: () => void;
	selectedWidgets: AvailableWidgetsKeys[];
	removeWidget: (widget: AvailableWidgetsKeys) => void;
	addWidget: (widget: AvailableWidgetsKeys) => void;
	resetWidgets: () => void;
	reorderWidgets: (oldIndex: number, newIndex: number) => void;
	saveWidgets: () => void;
};

const WidgetsManager = createContext<WidgetsManagerContextType | null>(null);

export const defaultHomeWidgets: AvailableWidgetsKeys[] = [
	"programs-widget",
	"group-calls-widget",
	"users-widget",
	"applications-widget",
	"mentors-widget",
	"recent-activities-widget",
];

const LOCAL_STORAGE_KEY = "techrityHomeWidgets";

export function WidgetsManagerProvider({ children }: { children: ReactNode }) {
	const [isWidgetsManagerOpen, setIsWidgetsManagerOpen] =
		useState<boolean>(false);
	const [selectedWidgets, setSelectedWidgets] = useState<
		AvailableWidgetsKeys[]
	>(() => {
		if (typeof window !== "undefined") {
			const savedWidgets = localStorage.getItem(LOCAL_STORAGE_KEY);
			if (savedWidgets) {
				try {
					const parsedWidgets = JSON.parse(savedWidgets);
					if (
						Array.isArray(parsedWidgets) &&
						parsedWidgets.every((key) =>
							availableWidgets.some((w) => w.key === key),
						)
					) {
						return parsedWidgets as AvailableWidgetsKeys[];
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

	const removeWidget = (widget: AvailableWidgetsKeys) =>
		transitionViewIfSupported(() =>
			setSelectedWidgets((prev) =>
				prev.filter((homeWidget) => homeWidget !== widget),
			),
		);

	const addWidget = (widget: AvailableWidgetsKeys) =>
		transitionViewIfSupported(() =>
			setSelectedWidgets((prev) => prev.concat(widget)),
		);
	const resetWidgets = () =>
		transitionViewIfSupported(() => setSelectedWidgets(defaultHomeWidgets));
	const reorderWidgets = (oldIndex: number, newIndex: number) =>
		transitionViewIfSupported(() =>
			setSelectedWidgets((prev) => arrayMove(prev, oldIndex, newIndex)),
		);

	const saveWidgets = () => {
		if (typeof window !== "undefined") {
			try {
				localStorage.setItem(
					LOCAL_STORAGE_KEY,
					JSON.stringify(selectedWidgets),
				);
				console.log("Selected widgets saved to localStorage.");
			} catch (err) {
				console.error("Failed to save selectedWidgets to localStorage:", err);
			}
		}
	};

	const openWidgetsManager = () => setIsWidgetsManagerOpen(true);

	const toggleWidgetsManager = () => setIsWidgetsManagerOpen((prev) => !prev);

	const closeWidgetsManager = () => setIsWidgetsManagerOpen(false);

	return (
		<WidgetsManager.Provider
			value={{
				isWidgetsManagerOpen,
				selectedWidgets,
				openWidgetsManager,
				closeWidgetsManager,
				toggleWidgetsManager,
				addWidget,
				removeWidget,
				resetWidgets,
				reorderWidgets,
				saveWidgets,
			}}
		>
			{children}
		</WidgetsManager.Provider>
	);
}

export const useWidgetsManager = () => {
	const context = useContext(WidgetsManager);
	if (!context) {
		throw new Error(
			"useWidgetsManager must be used within a WidgetsManagerProvider",
		);
	}
	return context;
};
