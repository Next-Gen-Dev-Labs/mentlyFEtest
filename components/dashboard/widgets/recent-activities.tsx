import { formatRelative } from "date-fns";
import Image from "next/image";
import React, { CSSProperties, Fragment } from "react";
import WidgetBase from "./base";

export default function RecentActivities({ style }: { style?: CSSProperties }) {
	//

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
			{activities.map(({ imageUrl, title, message, date, id }) => (
				<Fragment key={id}>
					<div className="flex items-center gap-2 text-xs">
						<Image
							src={imageUrl}
							width="32"
							height="32"
							alt=""
							className="size-8 rounded-full"
						/>
						<div className="grow">
							<p className="text-sm font-bold">{title}</p>
							<p className="mt-1.5 mb-2">{message}</p>
							<time dateTime={date} className="font-light">
								{formatRelative(new Date(date), new Date())}
							</time>
						</div>
					</div>
					<hr className="my-4 border-[#f1efef] last:hidden" />
				</Fragment>
			))}
		</WidgetBase>
	);
}

const activities: {
	imageUrl: string;
	title: string;
	message: string;
	date: string;
	id: string;
}[] = [
	{
		id: "act1",
		imageUrl: "https://i.ibb.co/spmmdKBH/activity01.jpg",
		title: "KYC Verification",
		message: "45 new persons just signed up on Mently.",
		date: "2025-04-24T07:40:33Z",
	},
	{
		id: "act2",
		imageUrl: "https://i.ibb.co/ZRYBLq1N/activity02.png",
		title: "New User Sign Up!",
		message: "45 new persons just signed up on Mently.",
		date: "2025-04-24T07:40:33Z",
	},
	{
		id: "act3",
		imageUrl: "https://i.ibb.co/DgjJVmjN/mentor02.jpg",
		title: "Withdrawal Request",
		message: "Mardian requested a withdrawal.",
		date: "2025-04-24T07:40:33Z",
	},
];
