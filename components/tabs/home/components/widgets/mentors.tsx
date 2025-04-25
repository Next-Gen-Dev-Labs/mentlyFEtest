import { Icon } from "@iconify-icon/react";
import { pascalCase } from "change-case";
import Image from "next/image";
import React, { CSSProperties, Fragment } from "react";
import WidgetBase from "./base";

export default function Mentors({ style }: { style?: CSSProperties }) {
	return (
		<WidgetBase
			title="Mentors"
			className="max-h-112 [&>div]:flex [&>div]:flex-col [&>div]:items-stretch"
			style={style}
			extraHeaderActions={[
				<button
					key="mentors-widget-add-something-button"
					type="button"
					className="rounded-full border p-1.25 text-sm text-[#9d92a6] outline-0 transition hover:bg-[#9d92a6] hover:text-white focus-visible:bg-[#9d92a6] focus-visible:text-white"
				>
					<Icon icon="ic:outline-plus" className="-m-px" />
				</button>,
			]}
			moreOptions={[
				{
					icon: "material-symbols:feedback",
					label: "Feedback",
					actionFn: () => {},
				},
			]}
		>
			{mentors.map(({ imageUrl, name, role, id }) => (
				<Fragment key={id}>
					<div className="flex items-center justify-between gap-2 py-2 text-xs last-of-type:mb-8">
						<Image
							src={imageUrl}
							width="32"
							height="32"
							alt={`An avatar for ${name}`}
							className="size-8 rounded-full"
						/>
						<div className="grow">
							<p className="text-sm font-bold">{name}</p>
							<p>{role}</p>
						</div>
						<button
							type="button"
							className="rounded-full bg-[#6f01d0] px-3 py-1 text-white outline-1 -outline-offset-1 outline-transparent transition hover:bg-white hover:text-[#6f01d0] hover:outline-current focus-visible:bg-white focus-visible:text-[#6f01d0] focus-visible:outline-current"
						>
							Message
						</button>
					</div>
					<hr className="my-2 border-[#f3f3f3] last-of-type:hidden" />
				</Fragment>
			))}
			<button
				type="button"
				className="mt-auto block w-full rounded-full bg-current/10 p-3 text-sm font-semibold text-[#6f01d0] -outline-offset-2 transition *:inline-block *:transition hover:bg-current/7.5 hover:*:scale-105 focus-visible:bg-current/7.5 focus-visible:*:scale-105 active:*:scale-95"
			>
				<span>See all</span>
			</button>
		</WidgetBase>
	);
}

const mentors = [
	{
		name: "Maxwell Smith",
		role: "Product Designer",
		imageUrl: "https://i.ibb.co/BKTy9hK6/mentor01.png",
		id: pascalCase("Mentor Maxwell Smith 0"),
	},
	{
		name: "Adeati Samuel",
		role: "Product Designer",
		imageUrl: "https://i.ibb.co/DgjJVmjN/mentor02.jpg",
		id: pascalCase("Mentor Adeati Samuel 1"),
	},
];
