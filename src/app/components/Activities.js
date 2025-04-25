'use client'
import React from 'react';
import { useGlobalBoard } from './controller';

const Activities = () => {
    const { boardChanger } = useGlobalBoard()
    return boardChanger === 'Activities' && (
        <div className="flex items-center justify-center h-[87vh]">
            <h1 className="text-2xl md:text-4xl font-semibold italic text-gray-600 animate-pulse">
                Activities coming soon...
            </h1>
        </div>
    );
};

export default Activities;
