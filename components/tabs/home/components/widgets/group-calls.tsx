import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import clsx from "clsx";
import { format } from "date-fns";
import Image from "next/image";
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
			className="@container/group-calls-widget max-h-151 @xl/group-calls-widget:max-h-none [&>div]:max-w-full [&>div]:space-y-2 [&>div]:gap-x-2 @xl/group-calls-widget:[&>div]:flex @xl/group-calls-widget:[&>div]:space-y-0 @xl/group-calls-widget:[&>div]:*:w-2/5 @xl/group-calls-widget:[&>div]:*:max-w-80 @xl/group-calls-widget:[&>div]:*:shrink-0"
		>
			{meetings.map((m) => (
				<MeetingCard key={m.id} {...m} />
			))}
		</WidgetBase>
	);
}

const meetings: Meeting[] = [
	{
		id: "m1",
		bannerUrl: "https://i.ibb.co/W418k4wP/prgrm02.jpg",
		title: "Weekly Meeting - Product Demo Review with Testers",
		start: "2024-07-30T09:00:00Z",
		end: "2024-07-30T11:00:00Z",
		groupLabel: "Study Group",
		groupSubtitle: "UX Strategy Study group",
		groupImage: "https://i.ibb.co/cmyCHv6/group-Image01.jpg",
		mentors: [
			{ avatarUrl: "https://i.ibb.co/GvsKS5cG/mentor04.png", name: "Charlie" },
			{ avatarUrl: "https://i.ibb.co/BKTy9hK6/mentor01.png", name: "Dana" },
			{ avatarUrl: "https://i.ibb.co/DgjJVmjN/mentor02.jpg", name: "Samuel" },
		],
	},
	{
		id: "m2",
		bannerUrl: "https://i.ibb.co/pv6kRqKw/meeting-Banner02.jpg",
		title: "Sprint Planning - Set Goals & Deliverables",
		start: "2024-08-05T14:00:00Z",
		end: "2024-08-05T15:30:00Z",
		groupLabel: "Dev Team",
		groupSubtitle: "Frontend Squad",
		groupImage: "https://i.ibb.co/cmyCHv6/group-Image01.jpg",
		mentors: [
			{ avatarUrl: "https://i.ibb.co/GvsKS5cG/mentor04.png", name: "Charlie" },
			{ avatarUrl: "https://i.ibb.co/BKTy9hK6/mentor01.png", name: "Dana" },
			{ avatarUrl: "https://i.ibb.co/DgjJVmjN/mentor02.jpg", name: "Samuel" },
		],
	},
	{
		id: "m3",
		bannerUrl: "https://i.ibb.co/7xyVtFFj/meeting-Banner03.jpg",
		title: "Retrospective - What Went Well & What Didn't",
		start: "2024-08-07T16:00:00Z",
		end: "2024-08-07T17:00:00Z",
		groupLabel: "All-Hands",
		groupSubtitle: "Company-wide sync",
		groupImage: "https://i.ibb.co/cmyCHv6/group-Image01.jpg",
		mentors: [
			{ avatarUrl: "https://i.ibb.co/GvsKS5cG/mentor04.png", name: "Charlie" },
			{ avatarUrl: "https://i.ibb.co/BKTy9hK6/mentor01.png", name: "Dana" },
			{ avatarUrl: "https://i.ibb.co/DgjJVmjN/mentor02.jpg", name: "Samuel" },
		],
	},
];

interface Meeting {
	id: string;
	bannerUrl: string;
	title: string;
	start: string;
	end: string;
	groupLabel: string;
	groupSubtitle: string;
	groupImage: string;
	mentors: { avatarUrl: string; name: string }[];
}

const MeetingCard = memo(
	({
		start,
		end,
		id,
		title,
		bannerUrl,
		mentors,
		groupLabel,
		groupSubtitle,
		groupImage,
	}: Meeting) => {
		const now = Date.now();
		const startMs = Date.parse(start);
		const endMs = Date.parse(end);
		const isOngoing = now >= startMs && now < endMs;

		return (
			<article
				className="overflow-hidden rounded-xl bg-[#f9f7ff] px-3.5 py-4 text-xs shadow-sm"
				aria-labelledby={`title-${id}`}
				role="group"
			>
				<Image
					src={bannerUrl}
					width="244"
					height="69"
					alt=""
					className="aspect-[244/69] w-full rounded-md object-cover object-center"
				/>
				<span
					className={clsx(
						"my-1.5 inline-flex items-center gap-1 rounded-full px-2 py-px text-xs",
						isOngoing
							? "bg-green-50 text-green-700"
							: "bg-blue-50 text-blue-700",
					)}
				>
					<i className="size-1.5 rounded-full bg-current" />
					{isOngoing ? "Ongoing" : "Upcoming"}
				</span>
				<h3 id={`title-${id}`} className="line-clamp-2 text-base">
					{title}
				</h3>
				<hr className="my-1.5 border-[#d0d5dd]" />
				<div className="flex items-center justify-between *:flex *:items-center *:gap-1.5">
					<time dateTime={start} className="">
						<Icon icon="solar:calendar-minimalistic-linear" />
						{format(startMs, "MMM dd, yyyy")}
					</time>
					<time dateTime={start} className="">
						<Icon icon="solar:clock-circle-linear" />
						{format(startMs, "HH:mm")} - {format(endMs, "HH:mm")}
					</time>
				</div>
				<div className="mt-2.5 mb-1.5 flex items-end gap-1">
					<Image
						src={groupImage}
						width="12"
						height="12"
						alt=""
						className="size-3.5 rounded-md object-cover object-center"
					/>
					<div className="mr-auto leading-none">
						<div className="font-semibold">{groupLabel}</div>
						<div className="">{groupSubtitle}</div>
					</div>
					<div>
						<div>Mentors</div>
						<div className="flex -space-x-1.5">
							{mentors.map((m, i) => (
								<Image
									key={i}
									width="14"
									height="14"
									src={m.avatarUrl}
									alt={m.name}
									className="size-3.5 rounded-full object-cover object-center"
								/>
							))}
						</div>
					</div>
				</div>
				<div className="flex justify-between text-xs font-medium text-[#6f01d0] *:rounded-md *:border *:border-[#6d01d0] *:p-2">
					<button type="button">View Participants</button>
					<button
						type="button"
						aria-disabled={now > endMs}
						className="bg-[#6f01d0] text-white aria-disabled:opacity-30"
					>
						Join Now
					</button>
				</div>
			</article>
		);
	},
);

MeetingCard.displayName = "MeetingCard";
