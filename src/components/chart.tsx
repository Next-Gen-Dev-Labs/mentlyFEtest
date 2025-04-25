"use client";

import { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  DoughnutController,
  Plugin,
} from "chart.js";
import { Chart } from "chart.js";

ChartJS.register(DoughnutController, ArcElement, Tooltip, Legend);

type UserData = {
  name: string;
  value: number;
  color: string;
};

type DoughnutChartProps = {
  data: UserData[];
};

export default function DoughnutChart({ data }: DoughnutChartProps) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<"doughnut"> | null>(null);

  const totalValue = data.reduce((acc, item) => acc + item.value, 0);

  // Custom plugin to render text in the center
  const centerTextPlugin: Plugin<"doughnut"> = {
    id: "centerText",
    beforeDraw: (chart) => {
      const { width } = chart;
      const { ctx } = chart;
      if (!ctx) return;

      ctx.save();
      ctx.font = "bold 24px Arial";
      ctx.fillStyle = "#000";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${totalValue}`, width / 2, chart.height! / 2 - 10);

      ctx.font = "14px Arial";
      ctx.fillStyle = "#666";
      ctx.fillText("Users", width / 2, chart.height! / 2 + 15);
      ctx.restore();
    },
  };

  useEffect(() => {
    if (!chartRef.current) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: data.map((d) => d.name),
        datasets: [
          {
            data: data.map((d) => d.value),
            backgroundColor: data.map((d) => d.color),
            borderWidth: 0,
          },
        ],
      },
      options: {
        cutout: "70%",
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,
      } as ChartOptions<"doughnut">,
      plugins: [centerTextPlugin],
    });

    return () => {
      chartInstance.current?.destroy();
    };
  }, [data, totalValue]);

  return (
    <div className=" px-4 pt-10 pb-4">
      <div className="flex items-center justify-center">
        <div>
          <canvas ref={chartRef} className="lg:h-[150px] lg:w-[150px] h-[200px] w-[200px] " />
        </div>

        <div className="flex flex-col text-sm ">
          {data.map((item, index) => (
            <div key={index} className="flex items-center mb-2">
              <span
                className="inline-block w-[8px] h-[8px] ml-2 rounded-full "
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="text-[#595564] lg:text-[10px] text-[15px] ml-[10px]">
                {item.name}
              </span>
              <span className="ml-[10px] font-[700] text-[12px] leading-[14px]">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
