import { Menu } from 'lucide-react';
import React from 'react';

interface SectionHeaderProps {
  title: string;
  viewAll?: boolean;
  showOptions?: boolean;
  filter?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, viewAll = true, showOptions = true, filter = false }) => {
  return (
    <div className="flex items-center justify-between mb-4 bg-white">
      <div className="flex items-center gap-2">
       <Menu size={12} />
        <span className="text-sm text-gray-500 font-medium">{title}</span>
      </div>
      <div className="flex items-center gap-2">
        {filter && (
           <div className="items-center text-sm hidden">
           <span className="mr-2 text-[#918C9C]">Filter</span>
           <button className=" text-[#595564] px-3 py-1 rounded flex items-center border border-[#E1E7EC]">
             Active
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-4 w-4 ml-1"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
             >
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth={2}
                 d="M19 9l-7 7-7-7"
               />
             </svg>
           </button>
         </div>
        )}
        {viewAll && (
          <button className="text-xs text-[#6F01D0] font-medium cursor-pointer">
            See all
          </button>
        )}
        {showOptions && (
          <button className="text-gray-500 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;