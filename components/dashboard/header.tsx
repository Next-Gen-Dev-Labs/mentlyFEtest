"use client";

import { LayoutKeys, useLayout } from "@/contexts/dashboard/layout";
import layouts from "@/contexts/dashboard/layout/layouts.config";
import { useWidgetsManager } from "@/contexts/dashboard/widgets-manager";
import transitionViewIfSupported from "@/utils/transitionViewIfSupported";
import { Icon } from "@iconify-icon/react";
import clsx from "clsx";
import React from "react";

export default function Header() {
	const { layout, setLayout } = useLayout();
	const { openWidgetsManager } = useWidgetsManager();

	return (
		<div className="flex w-11/12 items-center gap-6">
			<div className="ml-auto flex items-center gap-6 text-2xl">
				{layouts.map(({ id, key, icon }) => (
					<label
						key={id}
						htmlFor={key}
						className={clsx(
							"relative isolate rounded-xs text-3xl text-[#a4a5b8] transition *:transition not-[:has(:checked)]:hover:text-[#6f01d0]/50 not-[:has(:checked)]:hover:*:scale-105 not-[:has(:checked)]:active:*:scale-95 has-checked:cursor-default has-checked:text-[#6f01d0] not-[:has(:checked)]:has-focus-visible:*:scale-105",
							"has-checked:before:absolute has-checked:before:inset-0 has-checked:before:rounded-xs has-checked:before:border has-checked:before:bg-current/10 has-checked:before:[view-transition-name:active-home-layout-indicator]",
						)}
					>
						<input
							type="radio"
							name="home_layout"
							id={key}
							value={key}
							onChange={(e) =>
								transitionViewIfSupported(() =>
									setLayout(e.target.value as LayoutKeys),
								)
							}
							checked={key === layout}
							className="sr-only"
						/>
						<Icon icon={icon} />
					</label>
				))}
			</div>
			<button
				type="button"
				className="rounded-sm px-2 font-bold text-[#1f0954] outline-1 outline-transparent transition hover:bg-current/2.5 focus-visible:outline-current/50 active:scale-98"
				onClick={openWidgetsManager}
				data-testid="widgets-manager-dialog-show-button"
			>
				Manage Widgets
			</button>
		</div>
	);
}
