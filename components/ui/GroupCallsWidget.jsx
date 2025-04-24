import React, { useState, useEffect, useRef } from 'react'
import GroupCallCard from "@/components/ui/GroupCallCard";
import {groupCallsData} from "@/constants";
import DashboardCards from "@/components/dashboard/DashboardCards";

const GroupCallsWidget = ({ isMoved = false }) => {
    const [isSmallContainer, setIsSmallContainer] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                const { width, height } = entry.contentRect;
                // Switch to column layout if container is smaller than 500px width or 300px height
                setIsSmallContainer(width < 500 || height < 300);
            }
        });

        resizeObserver.observe(containerRef.current);

        return () => {
            if (containerRef.current) {
                resizeObserver.unobserve(containerRef.current);
            }
        };
    }, []);

    // Use column layout if the widget has been moved or if the container is small
    const useColumnLayout = isMoved || isSmallContainer;

    return (
            <DashboardCards title="Group Calls">
                <div 
                    ref={containerRef}
                    className={`${useColumnLayout ? 'flex flex-col overflow-y-auto' : 'flex flex-nowrap overflow-x-auto'} custom-scrollbar gap-4 mt-2 h-full`}
                >
                    <div className={`${useColumnLayout ? 'flex flex-col' : 'flex flex-wrap md:flex-nowrap min-w-max'} gap-4`}>
                        {groupCallsData.map(call => (
                            <div key={call.id} className={`${useColumnLayout ? 'w-full' : 'w-[300px] flex-shrink-0'}`}>
                                <GroupCallCard call={call} />
                            </div>
                        ))}
                    </div>
                </div>
            </DashboardCards>
    );
}
export default GroupCallsWidget;
