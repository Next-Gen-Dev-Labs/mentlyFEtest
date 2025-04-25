import { Icon } from "@iconify-icon/react";
import React, { Suspense, useMemo } from "react";
import {
	HomeWidgetsKeys,
	useHomeWidgetsContext,
} from "../../contexts/widgets-context";
import widgets from "../../contexts/widgets-context/widgets.config";

export default function Widgets() {
	const { homeWidgets } = useHomeWidgetsContext();

	const gridPositions: Record<HomeWidgetsKeys, `--${number}`> = useMemo(
		() =>
			homeWidgets.reduce(
				(acc, widgetKey, idx) => ({ ...acc, [widgetKey]: `--${idx}` }),
				{} as Record<HomeWidgetsKeys, `--${number}`>,
			),
		[homeWidgets],
	);

	return (
		<div className="homePageWidgetsWrapper mx-auto w-11/12">
			{homeWidgets.map((widgetKey) => {
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
								// viewTransitionName: `the-actual-${widget.key}-widget`,
							}}
						/>
					</Suspense>
				);
			})}
		</div>
	);
}
