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

	const total = useMemo<number | null>(() => {
		if (!Array.isArray(state.series)) return null;
		if (!state.series.every((x) => typeof x === "number")) return null;
		return (state.series as number[]).reduce((sum, v) => sum + v, 0);
	}, [state.series]);

	return (
		<WidgetBase
			title="Users"
			seeAllAction={() => {}}
			moreOptions={[
				{
					icon: "material-symbols:feedback",
					label: "Feedback",
					actionFn: () => {},
				},
			]}
			className={clsx(
				"[&_.apexcharts-canvas]:[anchor-name:--apexcharts-pie-doughnut] [&_.apexcharts-legend]:min-w-28 [&_.apexcharts-legend]:!items-stretch [&_.apexcharts-legend]:gap-3 [&_.apexcharts-legend]:!p-0 [&_.apexcharts-legend-marker]:!mr-0 [&_.apexcharts-legend-marker]:!ml-0.5 [&_.apexcharts-legend-marker]:size-2 [&_.apexcharts-legend-marker]:!rounded-full [&_.apexcharts-legend-marker]:!p-1 [&_.apexcharts-legend-marker]:*:rounded-full [&_.apexcharts-legend-series]:!m-0 [&_.apexcharts-legend-series]:justify-between [&_.apexcharts-legend-text]:!-ml-4 [&_.apexcharts-legend-text]:grow [&_.apexcharts-legend-text]:!pl-4",
			)}
			style={style}
		>
			<Chart {...state} type="donut" height={352} />
			{total !== null && (
				<div
					className="fixed inset-auto top-[calc(anchor-size(height)/2)] left-[calc(anchor-size(width)/2)] m-0 text-center"
					style={
						{ positionAnchor: "--apexcharts-pie-doughnut" } as CSSProperties
					}
				>
					<p className="text-2xl font-bold">{total}</p>
					<p className="text-xs text-[#595564]">Users</p>
				</div>
			)}
		</WidgetBase>
	);
}
