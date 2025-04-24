import { Icon } from "@iconify-icon/react";
import { pascalCase } from "change-case";
import clsx from "clsx";
import Image from "next/image";
import React, { CSSProperties, Fragment, memo } from "react";
import WidgetBase from "./base";

export default function Applications({ style }: { style?: CSSProperties }) {
	// console.log(props);

	return (
		<WidgetBase
			title="Applications"
			seeAllAction={() => {}}
			moreOptions={[
				{
					icon: "material-symbols:feedback",
					label: "Feedback",
					actionFn: () => {},
				},
			]}
			className={clsx(
				"@container/applications-widget [&>div]:flex [&>div]:flex-col [&>div]:items-stretch [&>div]:overflow-hidden",
			)}
			style={style}
		>
			<div className="h-1/3 overflow-auto">
				<p className="sticky top-0 mb-6 bg-gradient-to-br from-white to-transparent pl-6 text-xs text-[#7d8da6]">
					Mentors
				</p>
				{mentorApplications.map(({ otherInfo, ...o }, i) => (
					<Fragment key={o.id}>
						<div
							style={
								{ anchorName: `--mentor-application-${o.id}` } as CSSProperties
							}
						>
							<BaseApplication {...o} />
							<div className="hidden flex-wrap items-center">
								{Object.keys(otherInfo).map((otherInfoKey, ii) => (
									<span
										key={`mentor-application-${i}-${otherInfoKey}-${ii}`}
										className="rounded border"
									>
										{
											otherInfo[
												otherInfoKey as keyof ExtendedDetails["otherInfo"]
											]
										}
									</span>
								))}
							</div>
						</div>
						<hr
							style={
								{
									positionAnchor: `--mentor-application-${o.id}`,
								} as CSSProperties
							}
							className="fixed top-[anchor(bottom)] w-[anchor-size(width)] border-[#dbdbdb] last:hidden"
						/>
					</Fragment>
				))}
			</div>
			<hr className="my-3.5 border-[#dbdbdb]" />
			<div className="h-2/3 overflow-auto">
				<p className="sticky top-0 mb-6 bg-gradient-to-br from-white to-transparent pl-6 text-xs text-[#7d8da6]">
					Students
				</p>
				{studentApplications.map((s, i) => (
					<Fragment key={s.id}>
						<BaseApplication
							{...s}
							className={clsx({ "mt-4": i !== 0 })}
							style={
								{ anchorName: `--student-application-${s.id}` } as CSSProperties
							}
						/>
						<hr
							style={
								{
									positionAnchor: `--student-application-${s.id}`,
								} as CSSProperties
							}
							className="fixed top-[anchor(bottom)] w-[anchor-size(width)] border-[#dbdbdb] last:hidden"
						/>
					</Fragment>
				))}
			</div>
		</WidgetBase>
	);
}

const mentorApplications: ExtendedDetails[] = [
	{
		imageUrl: "https://i.ibb.co/BKTy9hK6/mentor01.png",
		name: "Maxwell Smith",
		email: "maxwellsmith@gmail.com",
		otherInfo: {
			role: "Product Designer",
			exp: 4,
			location: "Lagos, Nigeria",
			timezone: "GMT+1",
		},
		id: pascalCase("Mentor Application Maxwell Smith 0"),
	},
];

const studentApplications: BaseDetails[] = [
	{
		imageUrl: "https://i.ibb.co/DgjJVmjN/mentor02.jpg",
		name: "Adeati Samuel",
		email: "maxwellsmith@gmail.com",
		id: pascalCase("Student Application Adeati Samuel 0"),
	},
	{
		imageUrl: "https://i.ibb.co/BKTy9hK6/mentor01.png",
		name: "Maxwell Smith",
		email: "maxwellsmith@gmail.com",
		id: pascalCase("Student Application Maxwell Smith 1"),
	},
	{
		imageUrl: "https://i.ibb.co/DgjJVmjN/mentor02.jpg",
		name: "Adeati Samuel",
		email: "maxwellsmith@gmail.com",
		id: pascalCase("Student Application Adeati Samuel 2"),
	},
	{
		imageUrl: "https://i.ibb.co/BKTy9hK6/mentor01.png",
		name: "Maxwell Smith",
		email: "maxwellsmith@gmail.com",
		id: pascalCase("Student Application Maxwell Smith 3"),
	},
];

type BaseDetails = {
	id: string;
	name: string;
	email: string;
	imageUrl: string;
	className?: string;
};

type ExtendedDetails = BaseDetails & {
	otherInfo: { role: string; exp: number; location: string; timezone: string };
};

const BaseApplication = memo(
	({
		imageUrl,
		name,
		email,
		id,
		className,
		style,
	}: BaseDetails & { style?: CSSProperties }) => (
		<div
			className={clsx(
				"flex max-w-full items-center justify-between gap-2 px-0.5 py-2.5 text-xs @xl/home-main:gap-4 @xl/home-main:py-4",
				className,
			)}
			style={style}
		>
			<label htmlFor={`applicant-${id}`} className="grid place-items-center">
				<input
					id={`applicant-${id}`}
					className="widget-checkbox rounded-xs border-1 text-sm checked:border-2"
					type="checkbox"
				/>
			</label>
			<Image
				src={imageUrl}
				width="32"
				height="32"
				alt={`An avatar for ${"mentor"} ${name}`}
				className="size-8 rounded-full"
			/>
			<div className="max-w-full grow truncate *:truncate">
				<p className="font-bold">{name}</p>
				<p>{email}</p>
			</div>
			<div className="flex items-center gap-1.5 *:grid *:place-items-center *:rounded-sm *:border *:px-3 *:py-2.5 @md/applications-widget:*:px-6 @md/applications-widget:*:[&>iconify-icon]:hidden *:[&>span]:hidden @md/applications-widget:*:[&>span]:inline">
				<button type="button" className="border-current bg-red-50 text-red-600">
					<Icon icon="icon-park-outline:reject" />
					<span>Reject</span>
				</button>
				<button
					type="button"
					className="border-[#6f01d0] bg-[#6f01d0] text-white"
				>
					<Icon icon="icon-park-outline:accept-email" />
					<span>Accept</span>
				</button>
			</div>
		</div>
	),
);

BaseApplication.displayName = "BaseApplication";
