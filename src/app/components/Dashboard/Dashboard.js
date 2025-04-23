'use client'
import React from 'react';
import { useGlobalBoard } from '../controller';

const Dashboard = () => {
    const { boardChanger } = useGlobalBoard()
    return boardChanger === 'Dashboard' && (
        <div className="flex items-center justify-center h-[87vh]">
            <h1 className="text-2xl md:text-4xl font-semibold italic text-gray-600 animate-pulse">
                Dashboard coming soon...
            </h1>
        </div>
    );
};

export default Dashboard;
