import React, { CSSProperties, memo } from "react";
import WidgetBase from "./base";

export default function GroupCalls({ style }: { style?: CSSProperties }) {
	return (
		<WidgetBase
			title="Group Calls"
			style={style}
			seeAllAction={() => {}}
			moreOptions={[
				{
					icon: "material-symbols:feedback",
					label: "Feedback",
					actionFn: () => {},
				},
			]}
		>
			{groupCalls.map((g) => (
				<GroupCall key={g.date} {...g} />
			))}
		</WidgetBase>
	);
}

const groupCalls: {
	title: string;
	date: string;
	duration: number;
	imageUrl: string;
}[] = [];

const GroupCall = memo(({}: (typeof groupCalls)[number]) => {
	return (
		<article className="">
			{/*  */}
			{/*  */}
		</article>
	);
});

GroupCall.displayName = "GroupCall";
