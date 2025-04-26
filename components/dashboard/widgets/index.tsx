"use client";

import {
	AvailableWidgetsKeys,
	useWidgetsManager,
} from "@/contexts/dashboard/widgets-manager";
import widgets from "@/contexts/dashboard/widgets-manager/availableWidgets.config";
import { Icon } from "@iconify-icon/react";
import React, { Suspense, useMemo } from "react";

export default function Widgets() {
	const { selectedWidgets } = useWidgetsManager();

	const gridPositions: GridPositions = useMemo(
		() =>
			selectedWidgets.reduce(
				(acc, widgetKey, idx) => ({ ...acc, [widgetKey]: `--${idx}` }),
				{} as GridPositions,
			),
		[selectedWidgets],
	);

	return (
		<div className="homePageWidgetsWrapper mx-auto w-11/12">
			{selectedWidgets.map((widgetKey) => {
				const widget = widgets.find((w) => w.key === widgetKey);

				if (!widget) return null;

				return (
					<Suspense
						key={widget.key}
						fallback={
							<Icon
								icon="svg-spinners:blocks-scale"
								className="suspense-fallback"
							/>
						}
					>
						<widget.Component
							style={{
								gridArea: gridPositions[widget.key],
								viewTransitionName: `the-actual-${widget.key}-widget`,
							}}
						/>
					</Suspense>
				);
			})}
		</div>
	);
}

type GridPositions = Record<AvailableWidgetsKeys, `--${number}`>;
