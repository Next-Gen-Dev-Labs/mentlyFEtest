// components/dashboard/StatsChart.jsx
import { useState } from 'react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';

export default function StatsChart() {
    const [activeTab, setActiveTab] = useState('All');

    // Mock data for the user stats
    const stats = {
        total: 240,
        categories: [
            { name: 'Students', count: 200, color: '#3B82F6' },
            { name: 'Mentors', count: 8, color: '#10B981' },
            { name: 'Programs', count: 22, color: '#F59E0B' },
            { name: 'Others', count: 10, color: '#EC4899' }
        ]
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium">Users</h2>
                <div className="flex border border-gray-300 rounded-lg px-2 py-2">
                    <select className="text-sm border-gray-100 rounded">
                        <option className='mr-5'>All</option>
                        <option>This Month</option>
                        <option>This Week</option>
                    </select>
                </div>
            </div>
            <div className="border border-gray-400/30 outline-none w-full mt-3 mb-4"></div>

            <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <div className="relative w-48 h-48">
                    {/* This would be a real chart in production, using a library like Chart.js */}
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#e6e6e6" strokeWidth="20" />

                        {/* Dynamic segments based on stats */}
                        {stats.categories.map((category, index) => {
                            const percentage = (category.count / stats.total) * 100;
                            const prevPercentages = stats.categories
                                .slice(0, index)
                                .reduce((acc, cat) => acc + (cat.count / stats.total) * 100, 0);

                            return (
                                <circle
                                    key={category.name}
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="none"
                                    stroke={category.color}
                                    strokeWidth="20"
                                    strokeDasharray={`${percentage} ${100 - percentage}`}
                                    strokeDashoffset={`${-prevPercentages}`}
                                    transform="rotate(-90 50 50)"
                                />
                            );
                        })}

                        <text x="50" y="48" textAnchor="middle" fontSize="10" fontWeight="bold">{stats.total}</text>
                        <text x="50" y="60" textAnchor="middle" fontSize="8" fill="#666">Users</text>
                    </svg>
                </div>
                <div>
                    <div className="">
                        {stats.categories.map((category) => (
                            <div key={category.name} className="flex items-center space-x-6 space-y-3">
                                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: category.color }}></div>
                                <div className="text-sm">{category.name}</div>
                                <div className="ml-auto text-sm font-medium">{category.count}</div>

                            </div>
                        ))}
                    </div>
                    {/* <div className="">
                        {stats.categories.map((category) => (
                            <div key={category.count} className="flex items-center">
                                <div className="ml-auto text-sm font-medium">{category.count}</div>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </div>
    );
}