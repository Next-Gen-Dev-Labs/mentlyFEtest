import React, {useState} from 'react'
import DashboardCards from "@/components/dashboard/DashboardCards";
import ProgramCard from "@/components/ui/ProgramCard";
import {programsData} from "@/constants";

const ProgramsWidget = () => {

    const [filterActive, setFilterActive] = useState(true);
    return (
        <DashboardCards title="Programs">
            <div className="my-4 flex justify-end items-center gap-3">
                <button className="px-6 py-4 text-sm text-[#918C9C]  ">
                    Filter
                </button>

                <div className="px-3 py-1 text-sm text-[#595564] border-1 border-[#595564] flex items-center gap-4 rounded"  onClick={() => setFilterActive(!filterActive)}>
                    Active
                    <img src="/images/drop_down.svg" alt="Drop down" className="w-5" />
                </div>
            </div>
            <div>
                {programsData.map(program => (
                    <ProgramCard key={program.id} program={program} />
                ))}
            </div>

        </DashboardCards>
    )
}
export default ProgramsWidget
