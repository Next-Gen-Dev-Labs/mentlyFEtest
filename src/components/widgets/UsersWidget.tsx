'use client';

import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { useState } from 'react';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const UsersWidget = () => {
  const [filter, setFilter] = useState('All');

  const data = {
    labels: ['Students', 'Mentors', 'Programs', 'Others'],
    datasets: [
      {
        data: [200, 8, 22, 10],
        backgroundColor: [
          '#62B2FD', // blue
          '#9BDFC4', // light green
          '#FFB6C1', // pink
          '#FFB44F', // orange
        ],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
    // Here you would typically filter the data based on the selected value
    // For now, we'll just update the state
  };

  return (
    <div className="bg-white rounded-lg p-4 pb-20 shadow-sm w-full border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-20">
      <div className="flex items-center gap-2">
            <button className="text-black hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5A.75.75 0 012.75 9h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9.75zM2.75 14a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75z" />
              </svg>
            </button>
            <h2 className="text-md font-semibold text-gray-400">Users</h2>
          </div>
        <div className="relative">
          <select 
            className="appearance-none bg-transparent text-gray-500 text-sm font-medium pr-6 focus:outline-none border border-gray-200 rounded px-2 py-1"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="Students">Students</option>
            <option value="Mentors">Mentors</option>
            <option value="Programs">Programs</option>
            <option value="Others">Others</option>
          </select>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Chart and Legend */}
      <div className="flex items-center gap-6">
        {/* Donut Chart */}
        <div className="relative w-40 h-40">
          <Doughnut data={data} options={options} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-gray-700">240</span>
            <span className="text-xs text-gray-500">Users</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-3">
          {data.labels.map((label, index) => (
            <div key={label} className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
                />
                <span className="text-sm text-gray-600">{label}</span>
              </div>
              <span className="text-sm font-medium text-gray-700">
                {data.datasets[0].data[index]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersWidget; 