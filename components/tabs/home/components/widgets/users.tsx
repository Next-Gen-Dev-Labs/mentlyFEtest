import { Icon } from "@iconify-icon/react";
import clsx from "clsx";
import dynamic from "next/dynamic";
import React, { CSSProperties, useMemo } from "react";
import WidgetBase from "./base";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Users({ style }: { style?: CSSProperties }) {
	const state: ApexCharts.ApexOptions = useMemo(
		() => ({
			options: {
				colors: ["#9F97F7", "#FFB44F", "#F99BAB", "#9BDFC4", "#62B2FD"],
				dataLabels: { enabled: false },
				labels: ["Students", "Mentors", "Programs", "Others", "Unknown"],
				legend: {
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					formatter: (name: string, { w, seriesIndex }: Record<string, any>) =>
						`<span class="flex items-center justify-between text-sm font-bold"><span class="text-xs font-normal">${name}</span>${w?.globals?.series?.[seriesIndex]}</span>`,
					position: "right",
				},
			},
			series: [12, 24, 48, 72, 84],
		}),
		[],
	);
	// make the #totals "attached" to the .apexcharts-inner.apexcharts-graphical element, however you can, there doesnt seem to be a way to "inset" something into the apexcharts "context", i've tried all i know

	const total = useMemo<number | null>(() => {
		if (!Array.isArray(state.series)) return null;
		if (!state.series.every((x) => typeof x === "number")) return null;
		return (state.series as number[]).reduce((sum, v) => sum + v, 0);
	}, [state.series]);

	return (
		<WidgetBase
			title="Users"
			extraHeaderActions={[
				<div
					key="users-widget-filter-el-wrapper"
					className="grid grid-cols-1 grid-rows-1 *:col-start-1 *:row-start-1"
				>
					<select className="field-sizing-content appearance-none rounded-sm border border-gray-200 px-2.5 py-0.5 pr-8">
						<option value="">All</option>
					</select>
					<Icon
						icon="tabler:chevron-down"
						className="pointer-events-none mr-2.5 self-center justify-self-end text-base"
					/>
				</div>,
			]}
			className={clsx(
				"[&_.apexcharts-canvas]:[anchor-name:--apexcharts-pie-doughnut] [&_.apexcharts-legend]:min-w-28 [&_.apexcharts-legend]:!items-stretch [&_.apexcharts-legend]:gap-3 [&_.apexcharts-legend]:!p-0 [&_.apexcharts-legend-marker]:!mr-0 [&_.apexcharts-legend-marker]:!ml-0.5 [&_.apexcharts-legend-marker]:size-2 [&_.apexcharts-legend-marker]:!rounded-full [&_.apexcharts-legend-marker]:!p-1 [&_.apexcharts-legend-marker]:*:rounded-full [&_.apexcharts-legend-series]:!m-0 [&_.apexcharts-legend-series]:justify-between [&_.apexcharts-legend-text]:!-ml-4 [&_.apexcharts-legend-text]:grow [&_.apexcharts-legend-text]:!pl-4",
			)}
			style={style}
		>
			<Chart {...state} type="donut" height={352} />
			{total !== null && (
				<div id="totals" className="fixed inset-auto hidden text-center">
					<p className="text-2xl font-bold">{total}</p>
					<p className="text-xs text-[#595564]">Users</p>
				</div>
			)}
		</WidgetBase>
	);
}
