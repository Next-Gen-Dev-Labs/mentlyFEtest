/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { AppSelect } from '../app-select';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function UserChart() {
  const [filter, setFilter] = useState<string>('all');

  const data = {
    labels: ['Students', 'Mentors', 'Programs', 'Others'],
    datasets: [
      {
        data: [200, 8, 22, 10],
        backgroundColor: ['#3B82F6', '#A3E635', '#F87171', '#FBBF24'],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '70%',
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            family: 'Chivo',
            size: 12,
          },
          generateLabels: (chart: any) => {
            const dataset = chart.data.datasets[0];
            return chart.data.labels.map((label: string, index: number) => ({
              text: `${label} ${dataset.data[index]}`,
              fillStyle: dataset.backgroundColor[index],
              strokeStyle: dataset.backgroundColor[index],
              pointStyle: 'circle',
              hidden: false,
            }));
          },
        },
      },
      tooltip: {
        enabled: true,
      },
      // Custom plugin to draw text in the center
      centerText: {
        id: 'centerText',
        beforeDraw(chart: any) {
          const { ctx, chartArea } = chart;
          const total = chart.data.datasets[0].data.reduce(
            (sum: number, value: number) => sum + value,
            0
          );
          ctx.save();
          ctx.font = 'bold 24px Chivo';
          ctx.fillStyle = '#000';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          const centerX = (chartArea.left + chartArea.right) / 2;
          const centerY = (chartArea.top + chartArea.bottom) / 2;
          ctx.fillText(total, centerX, centerY - 10);
          ctx.font = '12px Chivo';
          ctx.fillText('Users', centerX, centerY + 10);
          ctx.restore();
        },
      },
    },
  };

  // Add the centerText plugin to Chart.js
  ChartJS.register({
    id: 'centerText',
    beforeDraw: options.plugins.centerText.beforeDraw,
  });

  const handleFilterChange = (value: string) => {
    setFilter(value);
    console.log(`User filter changed to: ${value}`);
    // Add logic to filter chart data if needed
  };

  return (
    <div className="bg-[#E7DDFF4D]  rounded-lg shadow-md  font-chivo">
      <div className="flex justify-between p-4 border-b-2 border-[#E1E7EC] items-center mb-4">
        <h3 className="text-lg font-bold text-[#595564]">Users</h3>
        <AppSelect
          listItems={[
            { label: 'All', value: 'all' },
            { label: 'Students', value: 'students' },
            { label: 'Mentors', value: 'mentors' },
            { label: 'Programs', value: 'programs' },
            { label: 'Others', value: 'others' },
          ]}
          value={filter}
          onChange={handleFilterChange}
          width="w-16"
          triggerStyle="border-gray-300 bg-transparent rounded-md"
        />
      </div>
      <div className="flex w-full  items-center justify-center">
        <div className="w-[300px] h-[270px] ">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
