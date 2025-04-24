import { Icon, IconifyIcon } from "@iconify-icon/react";
import { pascalCase } from "change-case";
import clsx from "clsx";
import React, { CSSProperties, PropsWithChildren } from "react";

export default function WidgetBase(props: PropsWithChildren<WidgetBase>) {
	const key = props.title.replace(/\W/, "");

	return (
		<section
			className={clsx(
				"flex flex-col items-stretch overflow-auto rounded-xl bg-white p-5",
				props.className,
			)}
			style={props.style}
		>
			<header className="sticky flex items-center gap-3 bg-gradient-to-b from-white to-transparent pb-5">
				<button type="button" className="cursor-grab active:cursor-grabbing">
					<Icon icon="famicons:reorder-four-outline" />
				</button>
				<h2 className="grow font-bold">{props.title}</h2>
				{props.seeAllAction && (
					<button
						type="button"
						className="text-xs font-semibold text-[#6f01d0]"
						onClick={props.seeAllAction}
					>
						See all
					</button>
				)}
				{props.moreOptions && props.moreOptions.length > 0 && (
					<>
						<button
							type="button"
							popoverTarget={`widget-${key}-more-options-dropdown`}
							style={
								{
									anchorName: `--widget-${key}-more-options-button`,
								} as CSSProperties
							}
						>
							<Icon icon="solar:menu-dots-bold" rotate="90deg" />
						</button>
						<div
							popover=""
							className="inset-auto top-[anchor(bottom)] m-0 [justify-self:anchor-center] rounded-sm bg-white py-0.75 text-left text-sm shadow"
							id={`widget-${key}-more-options-dropdown`}
							style={
								{
									positionAnchor: `--widget-${key}-more-options-button`,
								} as CSSProperties
							}
						>
							{props.moreOptions.map(({ label, icon, actionFn }) => (
								<button
									key={`widget-${key}-more-options-${pascalCase(label)}`}
									className="flex items-center gap-1.5 px-2.5 py-1"
									onClick={actionFn}
								>
									<Icon icon={icon} className="text-lg" />
									{label}
								</button>
							))}
						</div>
					</>
				)}
			</header>
			<div className="grow overflow-auto rounded-xs">{props.children}</div>
		</section>
	);
}

type WidgetBase = Readonly<{
	seeAllAction?: (...args: unknown[]) => unknown;
	title: string;
	moreOptions?: {
		icon: string | IconifyIcon;
		label: string;
		actionFn?: (...args: unknown[]) => unknown;
	}[];
	className?: string;
	style?: CSSProperties;
}>;
