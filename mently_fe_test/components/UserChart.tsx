"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

const labels = ["Students", "Mentors", "Programs", "Others"];
const values = [200, 8, 22, 10];
const colors = ["#3B82F6", "#22C55E", "#EC4899", "#F97316"];
const total = values.reduce((sum, val) => sum + val, 0);

const data = {
  labels,
  datasets: [
    {
      data: values,
      backgroundColor: colors,
      borderWidth: 0,
      borderRadius: 10,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

export default function UserChart() {
  return (
    <div className="flex items-center mt-4 justify-between w-full">
      {/* Donut Chart */}
      <div className="relative w-[150px] h-[150px]">
        <Doughnut data={data} options={options} />
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-[24px] font-bold text-[#222529]">{total}</p>
          <span className="text-sm">Users</span>
        </div>
      </div>

      <div className="w-1/2 space-y-4">
        {labels.map((label, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: colors[index] }}
            ></span>
            <div className="flex items-center justify-between">
              <p className="text-[10px] text-[#595564]">{label}</p>
              <p className="font-bold text-[12px] text-[#595564]">
                {values[index]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
