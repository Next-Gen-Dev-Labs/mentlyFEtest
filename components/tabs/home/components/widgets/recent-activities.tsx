import React, { CSSProperties } from "react";
import WidgetBase from "./base";

export default function RecentActivities({ style }: { style?: CSSProperties }) {
	return (
		<WidgetBase
			title="Recent Activities"
			seeAllAction={() => {}}
			moreOptions={[
				{
					icon: "material-symbols:feedback",
					label: "Feedback",
					actionFn: () => {},
				},
			]}
			style={style}
		>
			{/*  */}
		</WidgetBase>
	);
}
