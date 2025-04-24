import React from "react";
import GroupCard from "./cards/groupCard";
import Header from "./reusables/menu";
import { groups } from "@/data";
export default function Group() {
    return(
        <div className="w-full bg-white py-1.5 rounded-[10.52px] px-3 xl:px-4 space-y-3.5">
            <Header head='Group calls'/>
            <div className="flex gap-3 overflow-x-scroll  w-full">
                {groups.map((group) => (
                    <GroupCard key={group.id} group={group}/>
                ))}
            </div>
            
        </div>
        
    )
}