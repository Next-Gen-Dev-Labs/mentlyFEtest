import { Icon } from "@iconify-icon/react";
import React, { Suspense } from "react";
import { useHomeWidgetsContext } from "../../contexts/widgets-context";
import widgets from "../../contexts/widgets-context/widgets.config";

export default function Widgets() {
	const { homeWidgets } = useHomeWidgetsContext();

	return (
		<div className="homePageWidgetsWrapper mx-auto w-11/12">
			{homeWidgets.map((widgetKey) => {
				const widget = widgets.find((w) => w.key === widgetKey);

				if (!widget) return null;

				return (
					<Suspense
						key={widget.key}
						fallback={<Icon icon="svg-spinners:blocks-scale" />}
					>
						<widget.Component
							style={{ gridArea: `--${homeWidgets.indexOf(widget.key)}` }}
						/>
					</Suspense>
				);
			})}
		</div>
	);
}
