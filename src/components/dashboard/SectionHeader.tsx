
import React from 'react';
import { ChevronDown } from 'lucide-react';

type SectionHeaderProps = {
  title: string;
  showFilter?: boolean;
  filterValue?: string;
  onFilterChange?: (value: string) => void;
  children?: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  showFilter = false,
  filterValue = 'All',
  onFilterChange,
  children 
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-2">
        <h2 className="font-medium text-sm">{title}</h2>
        {children}
      </div>
      
      <div className="flex items-center gap-2">
        {showFilter && (
          <div className="flex items-center gap-1 text-xs px-3 py-1 rounded-md bg-gray-100">
            <span>Filter:</span>
            <span className="font-medium">Active</span>
            <ChevronDown size={14} />
          </div>
        )}
        
        <button className="text-xs text-techrity-purple font-medium">
          See all
        </button>
      </div>
    </div>
  );
};

export default SectionHeader;
