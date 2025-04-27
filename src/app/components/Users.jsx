// components/DonutChart.tsx
'use client'
import { CiMenuBurger } from "react-icons/ci";
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
  labels: ['Students', 'Mentors', 'Programs', 'Others'],
  datasets: [
    {
      data: [200, 8, 22, 10],
      backgroundColor: ['#5ECFFF', '#C1A0D7', '#FFA7A7', '#FFD966'],
      borderWidth: 0,
      cutout: '70%',
    },
  ],
}

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
}

export default function DonutChart() {
  return (
    <div className="relative w-[300px] h-[310px] bg-white dark:bg-gray-800 rounded-xl p-4 max-sm:w-[200px]">

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center">
          <p className="text-xl font-bold text-gray-800 dark:text-white">240</p>
          <p className="text-sm text-gray-500 dark:text-gray-300">Users</p>
        </div>
      </div>
      <div className='flex space-x-5 max-sm:space-x-1'>
        <Doughnut data={data} options={options} />
        <div className="mt-15 space-y-10 text-sm">
            {data.labels.map((label, idx) => (
            <div key={label} className="flex justify-between text-gray-700 dark:text-gray-300 space-x-5">
                <span className="flex items-center gap-2">
                <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: data.datasets[0].backgroundColor[idx] }}
                />
                {label}
                </span>
                <span className="font-medium">{data.datasets[0].data[idx]}</span>
            </div>
            ))}
      </div>
      
    </div>
    </div>
  )
}
