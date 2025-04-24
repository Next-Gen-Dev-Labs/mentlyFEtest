"use client";
import React from "react";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Custom plugin to display "240 Users" in the center
const centerTextPlugin = {
  id: "centerText",
  beforeDraw(chart: any) {
    const { ctx, chartArea } = chart;
    const { width, height } = chartArea;

    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Center coordinates
    const centerX = width / 2 + chartArea.left;
    const centerY = height / 2 + chartArea.top;

    // Draw "240" in large font
    ctx.font = "bold 24px Chivo";
    ctx.fillStyle = "#000";
    ctx.fillText("240", centerX, centerY - 10);

    // Draw "Users" below in smaller font
    ctx.font = "12px Chivo";
    ctx.fillStyle = "#595564";
    ctx.fillText("Users", centerX, centerY + 10);

    ctx.restore();
  },
};

const UserChart = () => {
  // Chart data
  const data = {
    labels: ["Mentors", "Programs", "Others", "Students"],
    datasets: [
      {
        data: [8, 10, 22, 200], // Values from the image
        backgroundColor: ["#9BDFC4", "#F99BAB", "#FFB44F", "#62B2FD"], // Colors from the image
        borderWidth: 0, // No borders between segments
      },
    ],
  };

  // Chart options
  const options = {
    cutout: "65%", // Controls the thickness of the doughnut (inner hole size)
    plugins: {
      legend: {
        display: false, // We'll create a custom legend
      },
      tooltip: {
        enabled: true,
      },
    },
    maintainAspectRatio: false, // Allow custom dimensions
  };
  return (
    <div className="bg-[#E7DDFF4D] rounded-[12px] border border-[#E1E7EC]">
      {/* card header */}
      <div className="flex items-center justify-between p-4 border-b border-[#E1E7EC] ">
        <p>Users</p>
        {/* filter btn */}
        <div>
          <div className="flex items-center justify-center gap-2 border border-[#E1E7EC] text-sm font-medium text-[#595564] py-[8px] px-[12px] rounded-[4px]">
            <p>All</p>
            <div>
              <div>
                <img src="/drop.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* charts */}
      <div className="flex items-center justify-between px-4 py-10">
        {/* Chart */}
        <div className="w-[200px] h-[200px]">
          <Doughnut
            data={data}
            options={options}
            plugins={[centerTextPlugin]} // Add the custom center text plugin
          />
        </div>

        {/* Custom Legend */}
        <div className="text-sm">
          {data.labels.map((label, index) => (
            <div
              key={label}
              className="flex items-center justify-between gap-2 mb-2"
            >
              <div className="flex items-center gap-1.5">
                <div
                  className="w-[6.4px] h-[6.4px] rounded-full"
                  style={{
                    backgroundColor: data.datasets[0].backgroundColor[index],
                  }}
                />
                <span className="text-[#595564] text-[10px]">{label}</span>
              </div>
              <span className=" font-bold text-[#595564] text-xs">
                {data.datasets[0].data[index]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserChart;
