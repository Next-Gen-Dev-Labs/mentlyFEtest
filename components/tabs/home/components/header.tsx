import transitionViewIfSupported from "@/utils/transitionViewIfSupported";
import { Icon } from "@iconify-icon/react";
import React, { CSSProperties } from "react";
import {
	HomeLayoutKeys,
	useHomeLayoutContext,
} from "../contexts/layout-context";
import homeLayouts from "../contexts/layout-context/layout.config";
import { useWidgetManagerContext } from "../contexts/widget-manager-context";

export default function Header() {
	const { homeLayout, setHomeLayout } = useHomeLayoutContext();
	const { openWidgetsManager } = useWidgetManagerContext();

	return (
		<div className="flex w-11/12 items-center gap-6">
			<div className="ml-auto flex items-center gap-6 text-2xl">
				<i
					inert
					className="clone-anchor rounded-xs border bg-current/11 text-[#6f01d0] [view-transition-name:active-home-layout-indicator]"
					style={{ positionAnchor: "--active-home-layout" } as CSSProperties}
				/>
				{homeLayouts.map((layout) => (
					<label
						key={layout.key}
						htmlFor={layout.key}
						className="rounded-xs text-3xl text-[#a4a5b8] transition has-checked:cursor-default has-checked:text-[#6f01d0]"
						style={
							{
								anchorName: `--home-layout-item-${layout.key}${layout.key === homeLayout ? ", --active-home-layout" : ""}`,
							} as CSSProperties
						}
					>
						<input
							type="radio"
							name="home_layout"
							id={layout.key}
							value={layout.key}
							onChange={(e) =>
								transitionViewIfSupported(() =>
									setHomeLayout(e.target.value as HomeLayoutKeys),
								)
							}
							checked={layout.key === homeLayout}
							className="sr-only"
						/>
						<Icon icon={layout.icon} />
					</label>
				))}
			</div>
			<button
				type="button"
				className="font-bold text-[#1f0954]"
				onClick={openWidgetsManager}
			>
				Manage Widgets
			</button>
		</div>
	);
}
