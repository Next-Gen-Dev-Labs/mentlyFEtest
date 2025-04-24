import React from "react"
import Image from "next/image"
import { recent } from "@/data"
import Header from "./reusables/menu"
export default function RecentActivities() {
    return(
        <div className="w-full md:w-[49%] lg:w-[280px] xl:w-[320px] bg-white rounded-xl p-6 space-y-[30px]">
            <Header head='Recent Activities'/>
            <div className="flex flex-col gap-4" data-testid="activities-list">
                {recent.map((item)=>(
                      <div key={item.id} className="flex items-start gap-2" data-testid="activity-item">
                      <Image src={item.image} alt={item.title}/>
                      <div className="">
                          <h4 className="text-sm font-bold mb-1.5" data-testid="activity-title">{item.title}</h4>
                          <p className="text-xs text-[#707991] mb-2" data-testid="activity-description">{item.activity}</p>
                          <p className="text-xs text-[#707991]" data-testid="activity-time">{item.time}</p>
                      </div>
                  </div>
                ))}
            </div>
        </div>
    )
}