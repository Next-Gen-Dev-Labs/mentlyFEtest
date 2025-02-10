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
    { id: 3, name: "Activities", icon: <ActivitiesIcon />, badge: "coming soon", },
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
                    <div className="relative">
                        <span aria-hidden="true">
                            {React.cloneElement(item.icon, {
                                color: isHovered === item.id || activeTab === item.id ? "#1F0954" : "#C2C2C2",
                            })}
                        </span>

                        {/* Blinking dot for Analytics when collapsed */}
                        {isCollapsed && item.id === 7 && (
                            <div className='absolute top-[-4px] right-[-4px]'>
                                <div className='blinking w-[15px] h-[15px] bg-[#0214BD]/70' />
                                <div
                                    className=" w-2 h-2 bg-[#0214BD] rounded-full absolute right-[-4px] top-[-4px] z-20"
                                    aria-hidden="true"
                                />
                            </div>
                        )}
                    </div>

                    {/* Menu Text and Coming Soon Badge */}
                    {!isCollapsed && (
                        <div className="flex items-center gap-2 relative">
                            <span className="text-sm ">{item.name}</span>
                            {item.badge && (
                                <span
                                    className="absolute top-[-12px] right-[-58px] px-2 py-0.5 text-[10px] font-medium bg-[#0214BD] text-white rounded-full"
                                    aria-label="coming soon"
                                >
                                    {item.badge}
                                </span>
                            )}
                        </div>
                    )}
                </button>
            ))}
        </div>
    );
}

export default Menu;