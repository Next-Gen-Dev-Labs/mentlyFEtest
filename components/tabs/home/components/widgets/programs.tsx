import { Icon } from "@iconify-icon/react";
import clsx from "clsx";
import Image from "next/image";
import React, { CSSProperties, memo } from "react";
import WidgetBase from "./base";

export default function Programs({ style }: { style?: CSSProperties }) {
	return (
		<WidgetBase
			title="Programs"
			seeAllAction={() => {}}
			moreOptions={[
				{
					icon: "material-symbols:feedback",
					label: "Feedback",
					actionFn: () => {},
				},
			]}
			style={style}
			className="@2xl\\/home-main:max-h-none max-h-151"
		>
			<div className="sticky top-0 flex justify-end bg-gradient-to-bl from-white to-transparent pb-2">
				<label
					htmlFor="programs-widget-filter"
					className="inline-flex items-center gap-2.5 text-xs font-medium"
				>
					<span>Filter</span>
					<div className="grid shrink-0 grid-cols-1 grid-rows-1 *:col-start-1 *:row-start-1">
						<select
							id="programs-widget-filter"
							className="field-sizing-content appearance-none rounded-sm border border-gray-200 px-2.5 py-0.5 pr-8"
						>
							<option value="">All</option>
						</select>
						<Icon
							icon="tabler:chevron-down"
							className="pointer-events-none mr-2.5 self-center justify-self-end text-base"
						/>
					</div>
				</label>
			</div>
			{programs.map((p) => (
				<Program key={p.id} {...p} />
			))}
		</WidgetBase>
	);
}

enum BadgeTitles {
	bootcamp = "Bootcamp",
	groupCall = "Group Call",
}

const programs: ProgramType[] = [
	{
		id: "bootcamp1",
		title: "Fundamentals of User interface & Experience",
		bannerImage: "https://i.ibb.co/6784gtCx/prgrm01.jpg",
		type: BadgeTitles.bootcamp,
		description:
			"This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs",
		mentors: [
			{ avatar: "https://i.ibb.co/GvsKS5cG/mentor04.png", name: "mentor04" },
			{ avatar: "https://i.ibb.co/5hxTkMgK/mentor05.png", name: "mentor05" },
			{ avatar: "https://i.ibb.co/DgjJVmjN/mentor01.png", name: "mentor01" },
		],
	},
	{
		id: "groupCall1",
		title: "Colour Hack Practical Group Call",
		bannerImage: "https://i.ibb.co/W418k4wP/prgrm02.jpg",
		type: BadgeTitles.groupCall,
		description:
			"This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs",
		host: {
			avatar: "https://i.ibb.co/dwRhxskj/host01.png",
			name: "Faith Okolo",
		},
	},
	{
		id: "groupCall2",
		title: "Colour Hack Practical Group Call",
		bannerImage: "https://i.ibb.co/W418k4wP/prgrm02.jpg",
		type: BadgeTitles.groupCall,
		description:
			"This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs",
		host: { avatar: "https://i.ibb.co/dwRhxskj/host01.png", name: "Self" },
	},
];

const Program = memo(
	({ type, title, bannerImage, description, ...rest }: ProgramType) => (
		<article className="mb-2 rounded-xl bg-white p-3.5 text-xs shadow-md">
			<div
				className="flex aspect-[265/70] w-full flex-col items-stretch rounded-md bg-black/60 bg-cover bg-center bg-no-repeat p-2 text-white bg-blend-darken"
				style={
					{
						backgroundImage: `url(${bannerImage})`,
					} as CSSProperties
				}
			>
				<div
					className={clsx({
						"flex items-start justify-between gap-8":
							BadgeTitles.bootcamp === type,
					})}
				>
					<h3 className="line-clamp-2 grow text-base font-bold">{title}</h3>
					{BadgeTitles.bootcamp === type && (
						<button
							type="button"
							className="rounded-full p-1 text-sm transition hover:rotate-180 hover:bg-current/10 focus-visible:rotate-180"
						>
							<Icon icon="solar:settings-linear" />
						</button>
					)}
				</div>
				<span
					className={clsx(
						"mt-auto mr-auto inline-flex items-center gap-1 rounded-full px-2 py-px font-bold",
						{
							"bg-green-50 text-green-700": type === BadgeTitles.bootcamp,
							"bg-blue-50 text-blue-700": type === BadgeTitles.groupCall,
						},
					)}
				>
					<i className="size-1.5 rounded-full bg-current" />
					{type}
				</span>
			</div>
			<p className="mt-1.5 mb-3 line-clamp-3">{description}</p>
			<footer className="flex items-center justify-between">
				<div
					className={clsx("flex items-center", {
						"-space-x-1": "mentors" in rest,
						"gap-1.5": "host" in rest,
					})}
				>
					{"mentors" in rest &&
						rest.mentors.map(({ avatar, name }, i) => (
							<Image
								key={avatar + name + i}
								src={avatar}
								alt={name}
								width="14"
								height="14"
								className="size-3.5 rounded-full object-cover object-center"
							/>
						))}
					{"host" in rest && (
						<>
							<Image
								src={rest.host.avatar}
								alt={rest.host.name}
								width="20"
								height="20"
								className="size-5 rounded-full object-cover object-center"
							/>
						</>
					)}
					<p className={clsx({ "ml-2": "mentors" in rest })}>
						{"mentors" in rest ? (
							<>Mentors</>
						) : "host" in rest ? (
							<>
								Hosted by: <span>{rest.host.name}</span>
							</>
						) : null}
					</p>
				</div>
				<div className="flex items-center gap-1.5 text-[#6f01d0] *:rounded-sm *:border *:border-[#6f01d0] *:px-3.5 *:py-1.5 *:transition *:hover:scale-103 *:focus-visible:scale-103 *:active:scale-98">
					<button type="button">View Details</button>
					<button type="button" className="bg-[#6f01d0] text-white">
						{"host" in rest && /Self/.test(rest.host.name)
							? "Assign Mentor"
							: "Analysis"}
					</button>
				</div>
			</footer>
		</article>
	),
);

Program.displayName = "Program";

type ProgramType = (
	| { type: BadgeTitles.bootcamp; mentors: { avatar: string; name: string }[] }
	| { type: BadgeTitles.groupCall; host: { avatar: string; name: string } }
) & {
	id: string;
	title: string;
	bannerImage: string;
	description: string;
};
