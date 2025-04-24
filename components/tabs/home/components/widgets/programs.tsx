import { Icon } from "@iconify-icon/react";
import clsx from "clsx";
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
							className="field-sizing-content appearance-none rounded-xs border border-gray-200 px-2.5 py-0.5 pr-8"
						>
							{selectOptions.map((o) => (
								<option key={o.key} value={o.key}>
									{o.label}
								</option>
							))}
						</select>
						<Icon
							icon="tabler:chevron-down"
							className="pointer-events-none mr-2.5 self-center justify-self-end text-base"
						/>
					</div>
				</label>
			</div>
			{programs.map((p) => (
				<Program key={p.imageUrl} {...p} />
			))}
		</WidgetBase>
	);
}

const selectOptions = [
	{ key: "", label: "All" },
	{ key: "active", label: "Active" },
	{ key: "inactive", label: "Inactive" },
];

const programs: {
	title: string;
	imageUrl: string;
	badge: keyof typeof badgeTitles;
	description: string;
}[] = [
	{
		title: "Fundamentals of User interface & Experience",
		imageUrl: "https://i.ibb.co/6784gtCx/prgrm01.jpg",
		badge: "bootcamp",
		description:
			"This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs",
	},
	{
		title: "Colour Hack Practical Group Call",
		imageUrl: "https://i.ibb.co/W418k4wP/prgrm02.jpg",
		badge: "groupCall",
		description:
			"This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs",
	},
];

const Program = memo(
	({ badge, title, imageUrl, description }: (typeof programs)[number]) => (
		<article className="mb-2 rounded-xl bg-white p-3.5 text-xs shadow-md">
			<div
				className="aspect-[265/70] w-full rounded-md bg-black/60 bg-cover bg-center bg-no-repeat p-2 text-white bg-blend-darken"
				style={
					{
						backgroundImage: `url(${imageUrl})`,
					} as CSSProperties
				}
			>
				<div className="flex items-start justify-between gap-8">
					<h3 className="line-clamp-2 grow text-base font-bold">{title}</h3>
					<button type="button" className="text-sm">
						<Icon icon="solar:settings-linear" />
					</button>
				</div>
				<span
					className={clsx(
						"inline-flex items-center gap-1 rounded-full px-2 py-px font-bold",
						{
							"bg-green-50 text-green-700": badge === "bootcamp",
							"bg-blue-50 text-blue-700": badge === "groupCall",
						},
					)}
				>
					<i className="size-1.5 rounded-full bg-current" />
					{badgeTitles[badge]}
				</span>
			</div>
			<p className="mt-1.5 mb-3 line-clamp-3">{description}</p>
			<footer className="flex items-center justify-between">
				<div></div>
				<div className="flex items-center gap-1.5 text-[#6f01d0] *:rounded-sm *:border *:border-[#6f01d0] *:px-3.5 *:py-1.5">
					<button type="button" className="">
						View Details
					</button>
					<button type="button" className="bg-[#6f01d0] text-white">
						Analysis
					</button>
				</div>
			</footer>
		</article>
	),
);

const badgeTitles = { bootcamp: "Bootcamp", groupCall: "Group Call" };

Program.displayName = "Program";
