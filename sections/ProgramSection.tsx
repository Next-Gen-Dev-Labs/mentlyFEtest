import { Menu, MoreVertical } from 'lucide-react';
import ProgramCard from '@/components/ProgramCard';
import { programsData } from '@/lib/program';
const ProgramsSection = () => {
    return (
        <div className="bg-gray-50 w-full font-sans"> {/* Use a light gray background */}

            {/* Header */}
            <header className="flex items-center justify-between ">
                <div className="flex items-center space-x-3">
                    <button className="text-gray-600 hover:text-gray-800">
                        <Menu size={18} />
                    </button>
                    <h1 className="text-sm font-semibold text-gray-800">Programs</h1>
                </div>
                <div className="flex items-center space-x-3">
                    <a href="#" className="text-purple-600 hover:text-purple-800 text-xs font-medium">
                        See all
                    </a>
                    <button className="text-gray-500 hover:text-gray-700">
                        <MoreVertical size={18} />
                    </button>
                </div>
            </header>

            {/* Filter Section */}
            <div className="flex justify-end items-center mb-2">
                <span className="text-sm text-gray-500 mr-2">Filter</span>
                <select className="border border-gray-300 rounded px-1 py-1 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500">
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="all">All</option>
                </select>
            </div>

            {/* Program Cards List */}
            <div className="space-y-4">
                {programsData.map((program) => (
                    <ProgramCard key={program.id} program={program} />
                ))}
            </div>
        </div>
    );
};

export default ProgramsSection;