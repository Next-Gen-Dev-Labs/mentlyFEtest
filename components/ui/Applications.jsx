import React, {useState} from 'react'
import ApplicationSection from "@/components/ui/ApplicationSection";
import {applicationsData} from "@/constants";
import DashboardCards from "@/components/dashboard/DashboardCards";

const Applications = () => {
    const [selectedApplications, setSelectedApplications] = useState([]);

    const handleSelect = (id, isSelected) => {
        if (isSelected) {
            setSelectedApplications([...selectedApplications, id]);
        } else {
            setSelectedApplications(selectedApplications.filter(appId => appId !== id));
        }
    };

    return (
        <DashboardCards title="Applications">
            {applicationsData.map((sectionData, index) => (
                <ApplicationSection
                    key={index}
                    section={sectionData.section}
                    applications={sectionData.applications}
                    onSelect={handleSelect}
                />
            ))}
        </DashboardCards>

    );
}
export default Applications
