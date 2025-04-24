"use client"
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import Chart from 'chart.js/auto';

export default function UsersChartSection() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Clean up any existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      chartInstance.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Students', 'Mentors', 'Programs', 'Others'],
          datasets: [{
            data: [30, 50, 100, 200],
            backgroundColor: ['#FFBB5C','#FF8AAE','#7ED7A8', '#4A9FFF'],
            borderWidth: 0,
            cutout: '60%'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: true
            }
          },
          animation: {
            animateRotate: true,
            animateScale: true
          }
        }
      });
    }

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-[#E7DDFF4D] border border-[#E1E7EC]  rounded-lg shadow-sm ">
      <div className="flex justify-between border-b p-4 border-[#E1E7EC] items-center mb-6">
        <div className="text-lg text-[#595564] font-medium">Users</div>
        
        <button className="border border-[#E1E7EC] text-[#595564] hover:bg-gray-200 px-4 py-1 rounded-md text-sm flex items-center gap-1">
          All
          <ChevronDown size={16} />
        </button>
      </div>
      
      <div className="flex flex-col md:flex-row  md:justify-center xl:justify-start  gap-6 md:mx-auto md:gap-[20%] xl:gap-6 p-2  items-center">
        <div className="relative w-40 h-40 xl:w-40 xl:h-40  md:w-60 md:h-60 mb-3 md:mb-6">
          <canvas ref={chartRef}></canvas>
          
          {/* Overlay for center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-xl font-bold">240</span>
            <span className="text-xs text-gray-500">Users</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 mb-4 md:mb-0 gap-3 w-fit">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            <span className="text-[#595564]">Students</span>
            <span className="ml-auto text-[#595564]  font-[700]">200</span>
         
          </div>
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-300"></span>
            <span className="text-[#595564]">Mentors</span>
            <span className="ml-auto text-[#595564]  font-[700]">8</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-300"></span>
            <span className="text-[#595564]">Programs</span>
            <span className="ml-auto text-[#595564]  font-[700]">22</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-300"></span>
            <span className="text-[#595564]">Others</span>
            <span className="ml-auto text-[#595564]  font-[700]">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}