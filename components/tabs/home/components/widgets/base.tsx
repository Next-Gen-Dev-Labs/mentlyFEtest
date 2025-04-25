import { Icon, IconifyIcon } from "@iconify-icon/react";
import { pascalCase } from "change-case";
import clsx from "clsx";
import React, {
	CSSProperties,
	PropsWithChildren,
	ReactNode,
	useEffect,
} from "react";

export default function WidgetBase(props: PropsWithChildren<WidgetBase>) {
	const key = props.title.replace(/\W/, "");

	useEffect(() => {
		return () => {
			if (props.style && "gridArea" in props.style) {
				const newStyle = { ...props.style };
				delete newStyle.gridArea;

				props.updateStyle?.(newStyle);
			}
		};
	}, [props, props.style]); // Re-run effect when style changes

	return (
		<section
			className={clsx(
				"flex flex-col items-stretch overflow-auto rounded-xl bg-white p-5",
				props.className,
			)}
			style={
				{
					...props.style,
					anchorName: `--eskelebe-ti-o-lebe-${key}`,
				} as CSSProperties
			}
		>
			<header className="sticky flex items-center gap-3 bg-gradient-to-b from-white to-transparent pb-5">
				<button type="button" className="cursor-grab active:cursor-grabbing">
					<Icon icon="famicons:reorder-four-outline" />
				</button>
				<h2 className="mr-auto shrink-0 font-bold">{props.title}</h2>
				{props.extraHeaderActions}
				{props.seeAllAction && (
					<button
						type="button"
						className="rounded-xs px-1.5 text-xs font-semibold text-[#6f01d0] outline outline-transparent transition-colors hover:bg-current/5 hover:outline-current/25 focus-visible:bg-current/5 focus-visible:outline-current/25"
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
							className="rounded-full p-1 outline outline-offset-1 outline-transparent transition hover:bg-current/5 focus-visible:outline-current/50"
						>
							<Icon icon="solar:menu-dots-bold" rotate="90deg" />
						</button>
						<div
							popover=""
							className="inset-auto top-[anchor(bottom)] m-0 h-auto w-28 flex-col items-stretch [justify-self:anchor-center] rounded-sm bg-white py-0.75 text-left text-sm shadow open:flex"
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
									className="flex items-center gap-1.5 px-2.5 py-1 transition *:transition hover:bg-current/5 hover:*:scale-105 focus-visible:*:scale-105 active:*:scale-95"
									type="button"
									onClick={actionFn}
								>
									<Icon icon={icon} className="text-lg" />
									<span>{label}</span>
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
	updateStyle?: (newStyle: CSSProperties) => void;
	extraHeaderActions?: ReactNode[];
}>;
