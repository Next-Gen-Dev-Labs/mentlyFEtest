'use client';
import React from 'react';
import { LayoutGrid, GridIcon } from 'lucide-react';

interface WidgetManagementProps {
  title?: string;
  onManageClick?: () => void;
}

export default function WidgetManagement({ 
  title = "Manage Widgets",
  onManageClick = () => console.log("Manage widgets clicked")
}: WidgetManagementProps) {
  return (
    <div className="w-full py-2 px-4 flex justify-end items-center">
      <div className="flex items-center space-x-2 cursor-pointer" onClick={onManageClick}>
        {/* Grid Icon */}
        <div className="flex items-center space-x-1">
          <div className="border border-gray-300 rounded p-1 bg-white">
            <GridIcon size={16} className="text-gray-500" />
          </div>
          <div className="border border-gray-300 rounded p-1 bg-purple-100">
            <LayoutGrid size={16} className="text-purple-700" />
          </div>
        </div>
        
        {/* Manage Widgets Text */}
        <span className="text-sm font-medium text-indigo-900">{title}</span>
      </div>
    </div>
  );
}