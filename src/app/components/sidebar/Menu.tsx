"use client";
import { ActivitiesIcon, AnalyticsIcon, BadgesIcon, ClipboardIcon, DashboardIcon, FinancesIcon, LoginIcon, ProgramsIcon, SettingsIcon } from '../../constant/AppImages';
import { useAppContext } from "../../context/AppContext";
import React, { useState } from 'react';

/**
 * Menu component that contains navigation links with icons.
 */
const menu = [
    { id: 1, name: "Dashboard", icon: <DashboardIcon /> },
    { id: 2, name: "Programs", icon: <ProgramsIcon /> },
    { id: 3, name: "Activities", icon: <ActivitiesIcon /> },
    { id: 4, name: "Forms", icon: <ClipboardIcon /> },
    { id: 5, name: "Finances", icon: <FinancesIcon /> },
    { id: 6, name: "Badges", icon: <BadgesIcon /> },
    { id: 7, name: "Analytics", icon: <AnalyticsIcon /> },
    { id: 8, name: "Settings", icon: <SettingsIcon /> },
    { id: 9, name: "Login", icon: <LoginIcon /> }
];

const Menu = () => {
    const { isCollapsed } = useAppContext();
    const [activeTab, setActiveTab] = useState(2);
    const [isHovered, setIsHovered] = useState<number | null>(null);

    return (
        <div className='menu flex flex-col items-center'>
            {menu.map((item) => (
                <button
                    key={item.id}
                    aria-label={item.name}
                    onClick={() => setActiveTab(item.id)}
                    onMouseEnter={() => setIsHovered(item.id)}
                    onMouseLeave={() => setIsHovered(null)}
                    className={`flex justify-center gap-2 mb-4 px-3 py-[16px] ${activeTab === item.id ? "bg-white text-mentlyBlue" : "hover:bg-[#E5DAFD] hover:text-mentlyBlue"} rounded-[8px]`}
                >
                    {/* Icon with dynamic color based on hover/active state */}
                    <span aria-hidden="true">
                        {React.cloneElement(item.icon, {
                            color: (isHovered === item.id || activeTab === item.id) ? "#1F0954" : "#C2C2C2"
                        })}
                    </span>
                    
                    {/* Menu Text (Hidden if sidebar is collapsed) */}
                    {!isCollapsed && <span className='text-sm'>{item.name}</span>}
                </button>
            ))}
        </div>
    );
}

export default Menu;