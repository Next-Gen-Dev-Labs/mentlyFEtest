
import React from 'react';
import { AlignJustify, ChevronDown, Ellipsis, List } from 'lucide-react';

type SectionHeaderProps = {
  title: string;
  showFilter?: boolean;
  filterValue?: string;
  renderSeeAll?: () => React.ReactNode
  onFilterChange?: (value: string) => void;
  children?: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  showFilter = false,
  filterValue = 'All',
  onFilterChange,
  renderSeeAll,
  children
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-2">
        <div className='flex items-center justify-between gap-2'>
          <AlignJustify className='text-techrity-muted h-4 w-4'  />
          <h2 className="font-medium text-sm text-techrity-muted/50">{title}</h2>
        </div>
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

        {renderSeeAll?.() || (
          <button className="text-xs text-techrity-purple font-medium">
            See all
          </button>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
