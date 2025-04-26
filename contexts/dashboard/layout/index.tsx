"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import layouts from "./layouts.config";

export type LayoutKeys = (typeof layouts)[number]["key"];

type LayoutContextType = {
	layout: LayoutKeys;
	setLayout: (layout: LayoutKeys) => void;
};

const Layout = createContext<LayoutContextType | null>(null);

export function LayoutProvider({ children }: { children: ReactNode }) {
	const [layout, setLayout] = useState<LayoutKeys>(layouts[0].key);

	return (
		<Layout.Provider value={{ layout, setLayout }}>{children}</Layout.Provider>
	);
}

export function useLayout() {
	const context = useContext(Layout);
	if (!context) {
		throw new Error("useLayout must be used within a LayoutProvider");
	}
	return context;
}
