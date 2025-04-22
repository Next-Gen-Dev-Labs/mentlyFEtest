'use client';
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { ChevronDown } from 'lucide-react';

interface UserStatsProps {
  stats: {
    students: number;
    mentors: number;
    programs: number;
    others: number;
  };
  onFilterChange?: (filter: string) => void;
}

export default function UserStatsChart({
  stats = {
    students: 200,
    mentors: 8,
    programs: 22,
    others: 10,
  },
  onFilterChange = () => {},
}: UserStatsProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);
  
  const totalUsers = stats.students + stats.mentors + stats.programs + stats.others;

  useEffect(() => {
    // Make sure the canvas element exists
    if (!chartRef.current) return;
    
    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    
    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;
    
    // Create new chart instance
    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Students', 'Mentors', 'Programs', 'Others'],
        datasets: [{
          data: [stats.students, stats.mentors, stats.programs, stats.others],
          backgroundColor: [
            '#60a5fa', // Light blue
            '#86efac', // Light green
            '#f87171', // Light red
            '#fbbf24', // Light orange
          ],
          borderWidth: 0,
          hoverOffset: 5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            titleColor: '#333',
            bodyColor: '#333',
            borderColor: '#ddd',
            borderWidth: 1,
            padding: 10,
            boxWidth: 10,
            boxHeight: 10,
            usePointStyle: true,
            callbacks: {
              label: (context) => {
                const label = context.label || '';
                const value = context.raw as number;
                const percentage = Math.round((value / totalUsers) * 100);
                return `${label}: ${value} (${percentage}%)`;
              }
            }
          }
        },
        animation: {
          animateRotate: true,
          animateScale: true
        }
      }
    });
    
    // Cleanup on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [stats]);

  return (
    <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-medium text-gray-700">Users</h2>
        <div className="relative">
          <button 
            className="flex items-center justify-between px-6 py-2 text-gray-700 bg-white border rounded-lg"
            onClick={() => onFilterChange('all')}
          >
            <span>All</span>
            <ChevronDown className="ml-2" size={18} />
          </button>
        </div>
      </div>
      
      <hr className="mb-6" />
      
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/2 h-64">
          <canvas ref={chartRef}></canvas>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-4xl font-bold">{totalUsers}</div>
            <div className="text-gray-500">Users</div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-blue-400 mr-2"></span>
                <span className="text-gray-700">Students</span>
              </div>
              <span className="font-semibold text-gray-800">{stats.students}</span>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-green-300 mr-2"></span>
                <span className="text-gray-700">Mentors</span>
              </div>
              <span className="font-semibold text-gray-800">{stats.mentors}</span>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-red-300 mr-2"></span>
                <span className="text-gray-700">Programs</span>
              </div>
              <span className="font-semibold text-gray-800">{stats.programs}</span>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>
                <span className="text-gray-700">Others</span>
              </div>
              <span className="font-semibold text-gray-800">{stats.others}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}